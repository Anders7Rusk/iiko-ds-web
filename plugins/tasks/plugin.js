/**
 * Hermes desktop plugin: «Задачи».
 *
 * Пункт «Задачи» в сайдбаре + страница-реестр: задача → её сессии,
 * клик по сессии открывает её.
 *
 * Данные: живые сессии — через RPC session.list (без shell.exec);
 * группировка по задачам — из вшитого ниже маппинга TASKS_MAP
 * (имя/статус/папка/список id сессий). Сессии, которых нет ни в одной
 * задаче, попадают в «Не разобрано» на лету.
 *
 * Маппинг перегенерируется из /opt/data/tasks.json скриптом
 * /opt/data/scripts/tasks_sync.py -> при изменении реестра плагин
 * перепубликуется (publish_ds_web.py plugins/tasks/plugin.js).
 */

import {
  PALETTE_AREA,
  ROUTES_AREA,
  SIDEBAR_NAV_AREA,
  cn,
  haptic,
  host,
  useQuery
} from '@hermes/plugin-sdk'
import { jsx, jsxs } from 'react/jsx-runtime'
import { useMemo, useState } from 'react'

const ID = 'tasks'
const ROUTE = '/tasks'

/* TASKS_MAP_START */
const TASKS_MAP = {"tasks-registry":{"name":"Реестр задач в Hermes","status":"","folder":"/opt/data/iiko-ds-web","sessions":["20260829_213203_e7a662"]},"figma-desc-plugin":{"name":"Плагин описаний компонентов в Figma","status":"","folder":"/opt/data/ds-desc-plugin","sessions":["20260829_202827_ca8aab"]},"ds-tokens-prototypes":{"name":"Токены ДС и прототипы на их основе","status":"","folder":"/opt/data/iiko-ds-web","sessions":["20260828_111442_057f61","20260828_181035_9ad6c5"]},"jira-queries":{"name":"Jira: поиск дизайн-задач и примеров","status":"","folder":"/opt/data/iiko-ds-web","sessions":["20260813_084106_12d1ed","20260828_173709_2740df"]},"figma-handoff-skill":{"name":"Скилл handoff-отчёта для Figma","status":"","folder":"/opt/data/iiko-ds-web/master-page","sessions":["20260825_173842_58584e"]},"matomo":{"name":"Аудит Matomo","status":"","folder":"/opt/data/iiko-ds-web","sessions":["20260825_204628_33c602"]},"master-template":{"name":"Мастер-шаблон страницы компонента","status":"","folder":"/opt/data/iiko-ds-web/master-page","sessions":["20260822_015454_23661d","20260822_041318_dff088"]},"badge-page":{"name":"Badge — страница компонента","status":"","folder":"/opt/data/iiko-ds-web/badge","sessions":["20260822_023147_d13536","20260822_022651_6d8ba1"]},"checkbox-page":{"name":"Checkbox — страница компонента","status":"","folder":"/opt/data/iiko-ds-web/checkbox","sessions":["20260822_023147_70e722","20260822_022651_d3700b"]},"radio-page":{"name":"Radio — страница компонента","status":"","folder":"/opt/data/iiko-ds-web/radio","sessions":["20260822_023147_5d32ae","20260822_022651_80cb6e"]},"input-page":{"name":"Form field + Input — страница компонента","status":"","folder":"/opt/data/iiko-ds-web/form-field","sessions":["20260822_023156_8533f0","20260822_022651_f9b6c2"]},"button-page":{"name":"Button — страница компонента","status":"","folder":"/opt/data/iiko-ds-web/button","sessions":["20260819_150153_6a5ae4","20260819_151029_a491e3","20260821_224047_843e97","20260821_225733_63cbf4","20260821_233202_92be38","20260821_233254_1bc28f"]},"ds-plan":{"name":"Дизайн-система в код: план и подход","status":"","folder":"/opt/data","sessions":["20260819_113945_02f934","20260820_162923_63a115","20260825_143418_8e050d"]},"kds-header":{"name":"Конструктор шапки KDS","status":"","folder":"/opt/data","sessions":["20260814_112355_dcf728"]},"figma-access":{"name":"Доступ к Figma: комментарии и API","status":"","folder":"/opt/data","sessions":["20260818_132528_1fe506"]},"hermes-setup":{"name":"Hermes: правила, сессии, инструменты","status":"","folder":"/opt/data","sessions":["20260813_064801_8fef1352","20260813_085957_26e4c0","20260819_192749_e66ebe","20260820_154051_75ca25","20260820_163800_5b9126","20260822_035349_7057cc","20260828_180018_cd39d5"]},"inbox":{"name":"Не разобрано","status":"","folder":"","sessions":[]}}
/* TASKS_MAP_END */

const MONTHS = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']

function fmtDate(ts) {
  if (!ts) return '—'
  const d = new Date(ts * 1000)
  if (Number.isNaN(d.getTime())) return '—'
  return d.getDate() + ' ' + MONTHS[d.getMonth()]
}

function fmtDateTime(ts) {
  if (!ts) return '—'
  const d = new Date(ts * 1000)
  if (Number.isNaN(d.getTime())) return '—'
  const hh = String(d.getHours()).padStart(2, '0')
  const mm = String(d.getMinutes()).padStart(2, '0')
  return fmtDate(ts) + ', ' + hh + ':' + mm
}

function plural(n, one, few, many) {
  const m10 = n % 10
  const m100 = n % 100
  if (m10 === 1 && m100 !== 11) return n + ' ' + one
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return n + ' ' + few
  return n + ' ' + many
}

function shortFolder(folder) {
  if (!folder) return ''
  return String(folder).replace(/^\/opt\/data\/?/, '') || 'home'
}

async function openSession(id) {
  try {
    haptic('tap')
    await host.request('session.resume', { session_id: id })
    host.navigate('/')
  } catch (err) {
    const msg = err && err.message ? err.message : String(err)
    host.notify({ kind: 'error', message: 'Не удалось открыть сессию: ' + msg })
  }
}

function SessionRow({ session }) {
  return jsxs('button', {
    type: 'button',
    onClick: () => openSession(session.id),
    className: cn(
      'flex w-full items-baseline gap-2 rounded px-2 py-1 text-left text-xs',
      'hover:bg-(--chrome-action-hover)'
    ),
    children: [
      jsx('span', {
        className: 'w-12 shrink-0 tabular-nums',
        style: { color: 'var(--ui-text-quaternary)' },
        children: fmtDate(session.started_at)
      }),
      jsx('span', {
        className: 'min-w-0 flex-1 truncate',
        style: { color: 'var(--ui-text-secondary)' },
        children: session.title || session.preview || session.id
      }),
      jsx('span', {
        className: 'shrink-0 tabular-nums',
        style: { color: 'var(--ui-text-quaternary)' },
        children: session.message_count ? session.message_count + ' сообщ.' : ''
      })
    ]
  })
}

function TaskCard({ task, expanded, onToggle }) {
  const sessions = task.sessions || []
  const last = sessions.reduce((acc, s) => Math.max(acc, s.started_at || 0), 0)
  return jsxs('div', {
    className: 'rounded-md border',
    style: { borderColor: 'var(--ui-stroke-secondary)' },
    children: [
      jsxs('button', {
        type: 'button',
        onClick: onToggle,
        className: cn(
          'flex w-full items-center gap-2 px-3 py-2 text-left',
          'hover:bg-(--chrome-action-hover)'
        ),
        children: [
          jsx('span', {
            className: 'w-3 shrink-0 text-[0.625rem]',
            style: { color: 'var(--ui-text-quaternary)' },
            children: expanded ? '▾' : '▸'
          }),
          jsx('span', { className: 'min-w-0 flex-1 truncate text-sm', children: task.name }),
          task.status
            ? jsx('span', {
                className: 'shrink-0 rounded px-1.5 py-0.5 text-[0.625rem]',
                style: { color: 'var(--ui-accent)', border: '1px solid var(--ui-stroke-secondary)' },
                children: task.status
              })
            : null,
          jsx('span', {
            className: 'shrink-0 text-[0.6875rem] tabular-nums',
            style: { color: 'var(--ui-text-tertiary)' },
            children: plural(sessions.length, 'сессия', 'сессии', 'сессий')
          }),
          jsx('span', {
            className: 'w-24 shrink-0 text-right text-[0.6875rem] tabular-nums',
            style: { color: 'var(--ui-text-quaternary)' },
            children: fmtDateTime(last)
          })
        ]
      }),
      expanded
        ? jsxs('div', {
            className: 'flex flex-col gap-0.5 px-2 pb-2',
            children: [
              task.folder
                ? jsx('div', {
                    className: 'px-2 pb-1 text-[0.6875rem]',
                    style: { color: 'var(--ui-text-quaternary)' },
                    children: 'папка: ' + shortFolder(task.folder)
                  })
                : null,
              ...sessions.map(s => jsx(SessionRow, { session: s }, s.id))
            ]
          })
        : null
    ]
  })
}

function TasksPage() {
  const [expanded, setExpanded] = useState({})
  const [filter, setFilter] = useState('')

  const q = useQuery({
    queryKey: ['tasks-plugin', 'session.list'],
    queryFn: () => host.request('session.list', { limit: 500 }),
    refetchInterval: 60000
  })

  const tasks = useMemo(() => {
    const live = (q.data && q.data.sessions) || []
    const liveById = new Map(live.map(s => [s.id, s]))
    const known = new Set()
    const base = Object.keys(TASKS_MAP)
      .filter(id => id !== 'inbox')
      .map(tid => {
        const info = TASKS_MAP[tid]
        const sessions = (info.sessions || [])
          .filter(sid => liveById.has(sid))
          .map(sid => {
            const s = liveById.get(sid)
            known.add(sid)
            return {
              id: s.id,
              title: s.title || '',
              preview: s.preview || '',
              started_at: s.started_at || 0,
              message_count: s.message_count || 0
            }
          })
        sessions.sort((a, b) => (a.started_at || 0) - (b.started_at || 0))
        return {
          id: tid,
          name: info.name || tid,
          status: info.status || '',
          folder: info.folder || '',
          sessions
        }
      })
      .filter(t => t.sessions.length > 0)

    const orphans = live
      .filter(s => !known.has(s.id))
      .map(s => ({
        id: s.id,
        title: s.title || '',
        preview: s.preview || '',
        started_at: s.started_at || 0,
        message_count: s.message_count || 0
      }))
    if (orphans.length) {
      base.push({ id: 'inbox', name: 'Не разобрано', status: '', folder: '', sessions: orphans.sort((a, b) => a.started_at - b.started_at) })
    }

    base.sort((a, b) => {
      const la = a.sessions.reduce((m, s) => Math.max(m, s.started_at || 0), 0)
      const lb = b.sessions.reduce((m, s) => Math.max(m, s.started_at || 0), 0)
      return lb - la
    })
    return base
  }, [q.data])

  const needle = filter.trim().toLowerCase()
  const shown = needle
    ? tasks
        .map(t => ({
          ...t,
          sessions: t.sessions.filter(
            s =>
              t.name.toLowerCase().includes(needle) ||
              (s.title || '').toLowerCase().includes(needle) ||
              (s.preview || '').toLowerCase().includes(needle) ||
              s.id.includes(needle)
          )
        }))
        .filter(t => t.sessions.length > 0)
    : tasks

  const totalSessions = tasks.reduce((n, t) => n + t.sessions.length, 0)
  const statusLine = q.error
    ? 'не удалось получить сессии: ' + (q.error.message || String(q.error))
    : 'сессии: ' + plural(totalSessions, 'сессия', 'сессии', 'сессий')

  return jsxs('div', {
    className: 'flex h-full flex-col overflow-hidden',
    children: [
      jsxs('div', {
        className: 'flex items-center gap-3 px-4 pt-4 pb-2',
        children: [
          jsx('div', { className: 'text-base font-medium', children: 'Задачи' }),
          jsx('div', {
            className: 'text-[0.6875rem] tabular-nums',
            style: { color: 'var(--ui-text-tertiary)' },
            children:
              plural(tasks.length, 'задача', 'задачи', 'задач') +
              ' · ' +
              plural(totalSessions, 'сессия', 'сессии', 'сессий')
          }),
          jsx('div', { className: 'flex-1' }),
          jsx('input', {
            value: filter,
            placeholder: 'фильтр…',
            onChange: e => setFilter(e.target.value),
            className: 'w-40 rounded border bg-transparent px-2 py-1 text-xs outline-none',
            style: { borderColor: 'var(--ui-stroke-secondary)' }
          }),
          jsx('button', {
            type: 'button',
            onClick: () => q.refetch(),
            className: 'rounded border px-2 py-1 text-xs hover:bg-(--chrome-action-hover)',
            style: { borderColor: 'var(--ui-stroke-secondary)' },
            children: q.isFetching ? 'обновляю…' : 'Обновить'
          })
        ]
      }),
      jsx('div', {
        className: 'px-4 pb-2 text-[0.6875rem]',
        style: { color: q.error ? 'var(--ui-accent)' : 'var(--ui-text-quaternary)' },
        children: statusLine
      }),
      jsx('div', {
        className: 'flex min-h-0 flex-1 flex-col gap-1.5 overflow-y-auto px-4 pb-4',
        children: shown.length
          ? shown.map(task =>
              jsx(
                TaskCard,
                {
                  task,
                  expanded: !!expanded[task.id],
                  onToggle: () => setExpanded(prev => ({ ...prev, [task.id]: !prev[task.id] }))
                },
                task.id
              )
            )
          : jsx('div', {
              className: 'pt-6 text-center text-xs',
              style: { color: 'var(--ui-text-quaternary)' },
              children: q.isLoading ? 'загружаю…' : 'Ничего не найдено'
            })
      })
    ]
  })
}

export default {
  id: ID,
  name: 'Задачи',
  register(ctx) {
    ctx.register({
      id: 'route',
      area: ROUTES_AREA,
      data: { path: ROUTE },
      render: () => jsx(TasksPage, {})
    })

    ctx.register({
      id: 'nav',
      area: SIDEBAR_NAV_AREA,
      data: { path: ROUTE, label: 'Задачи', codicon: 'checklist' }
    })

    ctx.register({
      id: 'palette',
      area: PALETTE_AREA,
      data: {
        id: 'tasks.open',
        title: 'Задачи: открыть реестр',
        run: () => host.navigate(ROUTE)
      }
    })
  }
}
