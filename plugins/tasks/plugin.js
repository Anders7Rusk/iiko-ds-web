/**
 * Hermes desktop plugin: «Задачи» v5 — проекты + задачи + сессии.
 *
 * CRUD: проекты и задачи создаются/удаляются прямо в меню.
 * Привязка сессий — НА САМОЙ СЕССИИ: у сессии кнопка «перенести в …»
 * (дропдаун по задачам) и у привязанной сессии в задаче — «отвязать».
 * Сессии, не привязанные ни к одной задаче, — в блоке «Не распределено».
 *
 * Хранилище — localStorage плагина; сессии приходят живыми с сервера
 * через RPC session.list. Установка: %LOCALAPPDATA%\hermes\desktop-plugins\tasks\plugin.js
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
import { useEffect, useMemo, useState } from 'react'

const ID = 'tasks'
const ROUTE = '/tasks'
const PLUGIN_VER = 'v7'
const STORE_KEY = 'tasks-store-v4'

/* SEED_START */
const TASKS_SEED = {"version":1,"projects":[{"id":"p1","name":"Дизайн-система — страницы компонентов"},{"id":"p2","name":"Дизайн-система — инфраструктура"},{"id":"p3","name":"Конструктор шапки KDS"},{"id":"p4","name":"Hermes — инструменты"}],"tasks":[{"id":"button-page","name":"Button — страница компонента","status":"","projectId":"p1","sessions":["20260819_150153_6a5ae4","20260819_151029_a491e3","20260821_224047_843e97","20260821_225733_63cbf4","20260821_233202_92be38","20260821_233254_1bc28f"]},{"id":"badge-page","name":"Badge — страница компонента","status":"","projectId":"p1","sessions":["20260822_023147_d13536","20260822_022651_6d8ba1"]},{"id":"checkbox-page","name":"Checkbox — страница компонента","status":"","projectId":"p1","sessions":["20260822_023147_70e722","20260822_022651_d3700b"]},{"id":"radio-page","name":"Radio — страница компонента","status":"","projectId":"p1","sessions":["20260822_023147_5d32ae","20260822_022651_80cb6e"]},{"id":"input-page","name":"Form field + Input — страница компонента","status":"","projectId":"p1","sessions":["20260822_023156_8533f0","20260822_022651_f9b6c2"]},{"id":"master-template","name":"Мастер-шаблон страницы компонента","status":"","projectId":"p1","sessions":["20260822_015454_23661d","20260822_041318_dff088"]},{"id":"ds-tokens-prototypes","name":"Токены ДС и прототипы на их основе","status":"","projectId":"p2","sessions":["20260828_111442_057f61","20260828_181035_9ad6c5"]},{"id":"figma-desc-plugin","name":"Плагин описаний компонентов в Figma","status":"","projectId":"p2","sessions":["20260829_202827_ca8aab"]},{"id":"figma-handoff-skill","name":"Скилл handoff-отчёта для Figma","status":"","projectId":"p2","sessions":["20260825_173842_58584e"]},{"id":"figma-access","name":"Доступ к Figma: комментарии и API","status":"","projectId":"p2","sessions":["20260818_132528_1fe506"]},{"id":"ds-plan","name":"Дизайн-система в код: план и подход","status":"","projectId":"p2","sessions":["20260819_113945_02f934","20260820_162923_63a115","20260825_143418_8e050d"]},{"id":"jira-queries","name":"Jira: поиск дизайн-задач и примеров","status":"","projectId":"p2","sessions":["20260813_084106_12d1ed","20260828_173709_2740df"]},{"id":"matomo","name":"Аудит Matomo","status":"","projectId":"p2","sessions":["20260825_204628_33c602"]},{"id":"kds-header","name":"Конструктор шапки KDS","status":"","projectId":"p3","sessions":["20260814_112355_dcf728"]},{"id":"hermes-setup","name":"Hermes: правила, сессии, инструменты","status":"","projectId":"p4","sessions":["20260813_064801_8fef1352","20260813_085957_26e4c0","20260819_192749_e66ebe","20260820_154051_75ca25","20260820_163800_5b9126","20260822_035349_7057cc","20260828_180018_cd39d5"]},{"id":"tasks-registry","name":"Реестр задач в Hermes","status":"","projectId":"p4","sessions":["20260829_213203_e7a662"]},{"id":"inbox","name":"Не разобрано","status":"","projectId":null,"sessions":[]}]}
/* SEED_END */

const MONTHS = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']

function fmtDate(ts) {
  if (!ts) return '—'
  const d = new Date(ts * 1000)
  if (Number.isNaN(d.getTime())) return '—'
  return d.getDate() + ' ' + MONTHS[d.getMonth()]
}

function plural(n, one, few, many) {
  const m10 = n % 10
  const m100 = n % 100
  if (m10 === 1 && m100 !== 11) return n + ' ' + one
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return n + ' ' + few
  return n + ' ' + many
}

function uid(prefix) {
  return prefix + '-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 6)
}

async function openSession(id) {
  try {
    haptic('tap')
    host.navigate('/chat?resume=' + encodeURIComponent(id))
  } catch (err) {
    const msg = err && err.message ? err.message : String(err)
    host.notify({ kind: 'error', message: 'Не удалось открыть сессию: ' + msg })
  }
}

// Строка одной сессии (мелкая, приглушённая). Клик по названию открывает сессию.
function SessionLine({ session, onMove, onUnlink, taskOptions }) {
  return jsxs('div', {
    className: 'flex items-center gap-1.5 rounded px-1.5 py-1 text-[0.8125rem] hover:bg-(--chrome-action-hover)',
    children: [
      jsx('span', {
        className: 'w-12 shrink-0 tabular-nums',
        style: { color: 'var(--ui-text-quaternary)' },
        children: fmtDate(session.started_at)
      }),
      jsx('button', {
        type: 'button',
        onClick: () => openSession(session.id),
        className: 'min-w-0 flex-1 truncate text-left',
        style: { color: 'var(--ui-text-secondary)' },
        children: session.title || session.preview || session.id
      }),
      jsx('span', {
        className: 'shrink-0 tabular-nums',
        style: { color: 'var(--ui-text-quaternary)' },
        children: session.message_count ? session.message_count + ' сообщ.' : ''
      }),
      onMove &&
        jsx('select', {
          value: '',
          onChange: e => {
            if (e.target.value) onMove(session.id, e.target.value)
            e.target.value = ''
          },
          className: 'shrink-0 rounded border bg-transparent px-1 py-0.5 text-[0.6875rem] outline-none',
          style: { borderColor: 'var(--ui-stroke-secondary)', color: 'var(--ui-text-quaternary)' },
          children: [
            jsx('option', { value: '', children: 'перенести в…' }),
            ...(taskOptions || []).map(o =>
              jsx('option', { value: o.id, children: o.label }, o.id)
            )
          ]
        }),
      onUnlink &&
        jsx('button', {
          type: 'button',
          onClick: () => onUnlink(session.id),
          className: 'shrink-0 rounded border px-1.5 text-[0.6875rem] hover:bg-(--chrome-action-hover)',
          style: { borderColor: 'var(--ui-stroke-secondary)', color: 'var(--ui-text-tertiary)' },
          children: '✕'
        })
    ]
  })
}

function TaskBlock(props) {
  const { task, liveById, liveSessions, onUnlink, onMove, taskOptions, removeTask, onCreateSession } = props
  const [open, setOpen] = useState(false)
  const [sessionTitle, setSessionTitle] = useState('')
  const sessions = (task.sessions || [])
    .map(id => liveById.get(id))
    .filter(Boolean)
    .sort((a, b) => (b.started_at || 0) - (a.started_at || 0))
  const addSession = () => {
    onCreateSession(task.id, sessionTitle.trim())
    setSessionTitle('')
  }
  return jsxs('div', {
    className: 'rounded border',
    style: { borderColor: 'var(--ui-stroke-secondary)' },
    children: [
      jsxs('div', {
        className: 'flex items-center gap-2 px-2.5 py-2',
        children: [
          jsx('button', {
            type: 'button',
            onClick: () => setOpen(o => !o),
            className: 'flex min-w-0 flex-1 items-center gap-2 rounded text-left hover:bg-(--chrome-action-hover)',
            children: [
              jsx('span', {
                className: 'w-3 shrink-0 text-[0.75rem]',
                style: { color: 'var(--ui-text-quaternary)' },
                children: open ? '▾' : '▸'
              }),
              jsx('span', { className: 'truncate text-[0.8125rem] font-medium', children: task.name }),
              task.status
                ? jsx('span', {
                    className: 'shrink-0 rounded px-1.5 py-0.5 text-[0.6875rem]',
                    style: {
                      color: 'var(--ui-accent)',
                      border: '1px solid var(--ui-stroke-secondary)'
                    },
                    children: task.status
                  })
                : null,
              jsx('span', {
                className: 'shrink-0 rounded px-1.5 py-0.5 text-[0.6875rem] tabular-nums',
                style: {
                  color: 'var(--ui-text-tertiary)',
                  border: '1px solid var(--ui-stroke-secondary)'
                },
                children: plural(sessions.length, 'сессия', 'сессии', 'сессий')
              })
            ]
          }),
          jsx('button', {
            type: 'button',
            onClick: () => removeTask(task.id),
            className: 'shrink-0 rounded border px-1.5 text-[0.6875rem] hover:bg-(--chrome-action-hover)',
            style: { borderColor: 'var(--ui-stroke-secondary)', color: 'var(--ui-text-tertiary)' },
            children: '✕'
          })
        ]
      }),
      open &&
        jsxs('div', {
          className: 'flex flex-col gap-0.5 border-t px-2.5 py-2',
          style: { borderColor: 'var(--ui-stroke-secondary)' },
          children: [
            jsxs('div', {
              className: 'mb-1.5 flex items-center gap-2',
              children: [
                jsx('input', {
                  value: sessionTitle,
                  placeholder: 'Новая сессия…',
                  onChange: e => setSessionTitle(e.target.value),
                  onKeyDown: e => e.key === 'Enter' && addSession(),
                  className: 'flex-1 rounded border bg-transparent px-2 py-1 text-[0.8125rem] outline-none',
                  style: { borderColor: 'var(--ui-stroke-secondary)' }
                }),
                jsx('button', {
                  type: 'button',
                  onClick: addSession,
                  className: 'rounded border px-2 py-1 text-[0.8125rem] hover:bg-(--chrome-action-hover)',
                  style: { borderColor: 'var(--ui-stroke-secondary)' },
                  children: '+ Сессия'
                })
              ]
            }),
            sessions.length
              ? sessions.map(s =>
                  jsx(SessionLine, {
                    session: s,
                    onUnlink: sid => onUnlink(task.id, sid),
                    onMove,
                    taskOptions
                  }, s.id)
                )
              : jsx('div', {
                  className: 'px-1 pb-1 text-[0.75rem]',
                  style: { color: 'var(--ui-text-quaternary)' },
                  children: 'сессий не привязано'
                })
          ]
        })
    ]
  })
}

function ProjectBlock(props) {
  const {
    proj,
    expanded,
    onToggle,
    newTask,
    setNewTask,
    addTask,
    removeProject,
    removeTask,
    liveById,
    liveSessions,
    onUnlink,
    onMove,
    taskOptions,
    onCreateSession
  } = props
  const empty = proj.tasks.length === 0
  return jsxs('div', {
    className: 'rounded-md border',
    style: { borderColor: 'var(--ui-stroke-secondary)' },
    children: [
      jsxs('div', {
        className: 'flex items-center gap-2 rounded-t-md px-3 py-2.5',
        style: { background: 'var(--chrome-action-hover, rgba(128,128,128,0.06))' },
        children: [
          jsx('button', {
            type: 'button',
            onClick: onToggle,
            className: 'flex min-w-0 flex-1 items-center gap-2 rounded text-left hover:bg-(--chrome-action-hover)',
            children: [
              jsx('span', {
                className: 'w-3 shrink-0 text-[0.75rem]',
                style: { color: 'var(--ui-text-quaternary)' },
                children: expanded ? '▾' : '▸'
              }),
              jsx('span', { className: 'truncate text-[0.9375rem] font-semibold', children: proj.name }),
              jsx('span', {
                className: 'shrink-0 rounded px-1.5 py-0.5 text-[0.6875rem] tabular-nums',
                style: {
                  color: 'var(--ui-text-tertiary)',
                  border: '1px solid var(--ui-stroke-secondary)'
                },
                children: plural(proj.tasks.length, 'задача', 'задачи', 'задач')
              })
            ]
          }),
          !proj.notask &&
            jsx('button', {
              type: 'button',
              onClick: () => removeProject(proj.id),
              className: 'shrink-0 rounded border px-1.5 text-[0.6875rem] hover:bg-(--chrome-action-hover)',
              style: { borderColor: 'var(--ui-stroke-secondary)', color: 'var(--ui-text-tertiary)' },
              children: 'удал.'
            })
        ]
      }),
      expanded &&
        jsxs('div', {
          className: 'flex flex-col gap-1.5 px-2 pb-2 pt-2 pl-4',
          children: [
            jsxs('div', {
              className: 'flex items-center gap-2',
              children: [
                jsx('input', {
                  value: newTask,
                  placeholder: 'Новая задача…',
                  onChange: e => setNewTask(e.target.value),
                  onKeyDown: e => e.key === 'Enter' && addTask(proj.id),
                  className: 'flex-1 rounded border bg-transparent px-2 py-1 text-[0.8125rem] outline-none',
                  style: { borderColor: 'var(--ui-stroke-secondary)' }
                }),
                jsx('button', {
                  type: 'button',
                  onClick: () => addTask(proj.id),
                  className: 'rounded border px-2 py-1 text-[0.8125rem] hover:bg-(--chrome-action-hover)',
                  style: { borderColor: 'var(--ui-stroke-secondary)' },
                  children: '+ Задача'
                })
              ]
            }),
            empty
              ? jsx('div', {
                  className: 'pl-1 pt-1 text-[0.8125rem]',
                  style: { color: 'var(--ui-text-quaternary)' },
                  children: 'нет задач — добавь выше'
                })
              : proj.tasks.map(task =>
                  jsx(
                    TaskBlock,
                    {
                      task,
                      liveById,
                      liveSessions,
                      onUnlink,
                      onMove,
                      taskOptions,
                      removeTask,
                      onCreateSession: onCreateSession
                    },
                    task.id
                  )
                )
          ]
        })
    ]
  })
}

function UnassignedBlock({ orphans, taskOptions, onMove }) {
  return jsxs('div', {
    className: 'rounded-md border',
    style: { borderColor: 'var(--ui-stroke-secondary)' },
    children: [
      jsxs('div', {
        className: 'flex items-center gap-2 rounded-t-md px-3 py-2.5',
        style: { background: 'var(--chrome-action-hover, rgba(128,128,128,0.06))' },
        children: [
          jsx('span', {
            className: 'w-3 shrink-0 text-[0.75rem]',
            style: { color: 'var(--ui-text-quaternary)' },
            children: '▾'
          }),
          jsx('span', { className: 'truncate text-[0.9375rem] font-semibold', children: 'Не распределено' }),
          jsx('span', {
            className: 'shrink-0 rounded px-1.5 py-0.5 text-[0.6875rem] tabular-nums',
            style: {
              color: 'var(--ui-text-tertiary)',
              border: '1px solid var(--ui-stroke-secondary)'
            },
            children: plural(orphans.length, 'сессия', 'сессии', 'сессий')
          })
        ]
      }),
      jsx('div', {
        className: 'flex flex-col gap-0.5 px-2 pb-2 pt-1 pl-4',
        children: orphans.map(s =>
          jsx(SessionLine, { session: s, onMove, taskOptions }, s.id)
        )
      })
    ]
  })
}

function TasksPage() {
  const [store, setStore] = useState(null)
  const [expanded, setExpanded] = useState({})
  const [newProject, setNewProject] = useState('')
  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        setStore({ version: 2, projects: parsed.projects || [], tasks: parsed.tasks || [] })
      } else {
        setStore({
          version: 2,
          projects: (TASKS_SEED.projects || []).slice(),
          tasks: (TASKS_SEED.tasks || []).slice()
        })
      }
    } catch (e) {
      setStore({ version: 2, projects: [], tasks: [] })
    }
  }, [])

  const persist = next => {
    setStore(next)
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify({ projects: next.projects, tasks: next.tasks }))
    } catch (e) {
      /* ignore */
    }
  }

  const live = useQuery({
    queryKey: ['tasks-plugin', 'session.list'],
    queryFn: () => host.request('session.list', { limit: 500 }),
    refetchInterval: 60000
  })
  const liveSessions = (live.data && live.data.sessions) || []
  const liveById = useMemo(() => new Map(liveSessions.map(s => [s.id, s])), [liveSessions])

  if (!store) {
    return jsx('div', {
      className: 'flex h-full items-center justify-center text-xs',
      style: { color: 'var(--ui-text-quaternary)' },
      children: 'загружаю…'
    })
  }

  const addProject = () => {
    const name = newProject.trim()
    if (!name) return
    persist({ ...store, projects: store.projects.concat([{ id: uid('p'), name }]) })
    setNewProject('')
  }

  const removeProject = id => {
    const target = store.projects.find(p => p.id === id)
    if (!target) return
    const names = store.tasks.filter(t => t.projectId === id).map(t => t.name).join(', ')
    const yes = window.confirm('Удалить проект "' + target.name + '" и его задачи? ' + (names ? 'Задачи: ' + names : ''))
    if (!yes) return
    persist({
      projects: store.projects.filter(p => p.id !== id),
      tasks: store.tasks.filter(t => t.projectId !== id)
    })
  }

  const addTask = projectId => {
    const name = newTask.trim()
    if (!name) return
    persist({
      ...store,
      tasks: store.tasks.concat([{ id: uid('t'), name, status: '', projectId, sessions: [] }])
    })
    setNewTask('')
    setExpanded(e => ({ ...e, [projectId]: true }))
  }

  const removeTask = id => {
    if (!window.confirm('Удалить задачу?')) return
    persist({ ...store, tasks: store.tasks.filter(t => t.id !== id) })
  }

  // создать новую сессию Hermes, привязать к задаче и перейти в неё
  const createSession = async (taskId, title) => {
    try {
      const params = { cols: 80 }
      if (title) params.title = title
      const res = await host.request('session.create', params)
      const sid = res && (res.session_id || res.resumed || res.id)
      if (!sid) throw new Error('нет id новой сессии')
      persist({
        ...store,
        tasks: store.tasks.map(t =>
          t.id === taskId
            ? { ...t, sessions: (t.sessions || []).concat([sid]) }
            : t
        )
      })
      host.notify({ kind: 'info', message: 'Сессия создана' })
      host.navigate('/chat?resume=' + encodeURIComponent(sid))
    } catch (err) {
      const msg = err && err.message ? err.message : String(err)
      host.notify({ kind: 'error', message: 'Не удалось создать сессию: ' + msg })
    }
  }

  // перенести сессию в задачу (текущая задача заменяется на выбранную)
  const moveSession = (sessionId, taskId) => {
    persist({
      ...store,
      tasks: store.tasks.map(t => {
        const has = (t.sessions || []).includes(sessionId)
        if (t.id === taskId) {
          const without = (t.sessions || []).filter(s => s !== sessionId)
          return { ...t, sessions: has ? without : without.concat([sessionId]) }
        }
        return has ? { ...t, sessions: (t.sessions || []).filter(s => s !== sessionId) } : t
      })
    })
  }

  // отвязать сессию от конкретной задачи
  const unlinkSession = (taskId, sessionId) => {
    persist({
      ...store,
      tasks: store.tasks.map(t =>
        t.id === taskId
          ? { ...t, sessions: (t.sessions || []).filter(s => s !== sessionId) }
          : t
      )
    })
  }

  const projectRows = store.projects.map(p => {
    const tasks = store.tasks.filter(t => t.projectId === p.id)
    return { key: p.id, id: p.id, name: p.name, tasks }
  })
  const noProject = store.tasks.filter(t => !t.projectId)
  if (noProject.length) {
    projectRows.push({ key: 'none', id: 'none', name: 'Без проекта', tasks: noProject, notask: true })
  }

  // сессии, не привязанные ни к одной задаче
  const assigned = new Set(store.tasks.reduce((acc, t) => acc.concat(t.sessions || []), []))
  const orphans = liveSessions
    .filter(s => !assigned.has(s.id))
    .sort((a, b) => (b.started_at || 0) - (a.started_at || 0))

  // список задач-целей для дропдауна «перенести в…»
  const taskOptions = store.tasks.map(t => {
    const proj = store.projects.find(p => p.id === t.projectId)
    return { id: t.id, label: (proj ? proj.name + ' / ' : '') + t.name }
  })

  // дубли проектов для выпадающего: не включать задачу, у которой уже есть эта сессия — не критично

  const totalSessions = store.tasks.reduce((n, t) => n + (t.sessions || []).length, 0)

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
              plural(store.tasks.length, 'задача', 'задачи', 'задач') +
              ' · ' +
              plural(totalSessions, 'сессия', 'сессии', 'сессий') +
              (live.error ? ' · сессии не загрузились' : '')
          }),
          jsx('div', { className: 'flex-1' }),
          jsx('button', {
            type: 'button',
            onClick: () => live.refetch(),
            className: 'rounded border px-2 py-1 text-xs hover:bg-(--chrome-action-hover)',
            style: { borderColor: 'var(--ui-stroke-secondary)' },
            children: live.isFetching ? 'обновляю…' : 'Обновить'
          })
        ]
      }),
      jsxs('div', {
        className: 'flex items-center gap-2 px-4 pb-1',
        children: [
          jsx('input', {
            value: newProject,
            placeholder: 'Новый проект…',
            onChange: e => setNewProject(e.target.value),
            onKeyDown: e => e.key === 'Enter' && addProject(),
            className: 'flex-1 rounded border bg-transparent px-2 py-1 text-xs outline-none',
            style: { borderColor: 'var(--ui-stroke-secondary)' }
          }),
          jsx('button', {
            type: 'button',
            onClick: addProject,
            className: 'rounded border px-2 py-1 text-xs hover:bg-(--chrome-action-hover)',
            style: { borderColor: 'var(--ui-stroke-secondary)' },
            children: '+ Проект'
          })
        ]
      }),
      jsx('div', {
        className: 'px-4 pb-2 text-[0.6875rem]',
        style: { color: 'var(--ui-text-quaternary)' },
        children: PLUGIN_VER + ' · хранится в приложении'
      }),
      jsx('div', {
        className: 'flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-4 pb-4',
        children: [
          ...projectRows.map(proj =>
            jsx(
              ProjectBlock,
              {
                proj,
                expanded: !!expanded[proj.id],
                onToggle: () => setExpanded(e => ({ ...e, [proj.id]: !e[proj.id] })),
                newTask,
                setNewTask,
                addTask,
                removeProject,
                removeTask: removeTask,
                liveById,
                liveSessions,
                onUnlink: unlinkSession,
                onMove: moveSession,
                taskOptions,
                onCreateSession: createSession
              },
              proj.key
            )
          ),
          orphans.length
            ? jsx(UnassignedBlock, { orphans, taskOptions, onMove: moveSession })
            : null
        ]
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
