/**
 * Hermes desktop plugin: «Задачи».
 *
 * Пункт «Задачи» в сайдбаре + страница-реестр: задача → её сессии,
 * клик по сессии открывает её.
 *
 * Данные НЕ вшиты в файл: плагин запрашивает их у гейтвея на лету
 *   shell.exec → python3 /opt/data/scripts/tasks_sync.py --json
 * (реестр /opt/data/tasks.json + метаданные сессий из state.db).
 * Поэтому файл кладётся один раз, а список всегда актуальный.
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
import { useState } from 'react'

const ID = 'tasks'
const ROUTE = '/tasks'
const FETCH_CMD = 'python3 /opt/data/scripts/tasks_sync.py --json'

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

async function fetchRegistry() {
  const res = await host.request('shell.exec', { command: FETCH_CMD })
  if (!res || res.code !== 0) {
    throw new Error((res && (res.stderr || 'код ' + res.code)) || 'нет ответа гейтвея')
  }
  return JSON.parse(res.stdout)
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
  const last = sessions.reduce((acc, s) => Math.max(acc, s.last_activity_at || s.started_at || 0), 0)
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
          jsx('span', { className: 'min-w-0 flex-1 truncate text-sm', children: task.name || task.id }),
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
    queryKey: ['tasks-plugin', 'registry'],
    queryFn: fetchRegistry,
    refetchInterval: 60000
  })

  const data = q.data || { updated_at: '', tasks: [] }
  const tasks = data.tasks || []
  const needle = filter.trim().toLowerCase()
  const shown = needle
    ? tasks
        .map(t => ({
          ...t,
          sessions: (t.sessions || []).filter(
            s =>
              (t.name || '').toLowerCase().includes(needle) ||
              (s.title || '').toLowerCase().includes(needle) ||
              (s.preview || '').toLowerCase().includes(needle) ||
              s.id.includes(needle)
          )
        }))
        .filter(t => t.sessions.length > 0)
    : tasks

  const totalSessions = tasks.reduce((n, t) => n + (t.sessions || []).length, 0)

  let statusLine = 'реестр: /opt/data/tasks.json'
  if (data.updated_at) statusLine += ' · обновлено ' + data.updated_at
  if (q.error) statusLine = 'не удалось получить реестр: ' + (q.error.message || String(q.error))

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
              children: q.isLoading ? 'загружаю реестр…' : 'Ничего не найдено'
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
