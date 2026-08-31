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
  useQuery,
  useValue
} from '@hermes/plugin-sdk'
import { jsx, jsxs } from 'react/jsx-runtime'
import { useEffect, useMemo, useRef, useState } from 'react'

const ID = 'tasks'
const ROUTE = '/tasks'
const PLUGIN_VER = 'v63'
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

// ── Открытие сессии: программный клик по строке сессии в самом приложении ──
// SDK не даёт API переключения сессии (activeSessionId readonly), но плагин
// живёт в том же окне — поэтому находим строку сессии в списке приложения и
// нажимаем её так же, как это делает мышь пользователя.

const _norm = s =>
  (s || '')
    .replace(/\s+/g, ' ')
    .replace(/[…]+/g, '')
    .replace(/\.\.\.$/, '')
    .trim()
    .toLowerCase()

function _looksSame(a, b) {
  const x = _norm(a)
  const y = _norm(b)
  if (!x || !y) return false
  const n = Math.min(x.length, y.length, 24)
  if (n < 6) return false
  return x.slice(0, n) === y.slice(0, n)
}

function _fireClick(el) {
  const opts = { bubbles: true, cancelable: true, view: window }
  try {
    el.dispatchEvent(new PointerEvent('pointerdown', opts))
  } catch (e) {
    /* PointerEvent may be unavailable */
  }
  el.dispatchEvent(new MouseEvent('mousedown', opts))
  try {
    el.dispatchEvent(new PointerEvent('pointerup', opts))
  } catch (e) {
    /* ignore */
  }
  el.dispatchEvent(new MouseEvent('mouseup', opts))
  el.dispatchEvent(new MouseEvent('click', opts))
}

function _clickableAncestor(el) {
  let n = el
  for (let i = 0; i < 6 && n; i++) {
    const tag = (n.tagName || '').toLowerCase()
    const role = n.getAttribute ? n.getAttribute('role') : null
    const cls = n.className ? String(n.className) : ''
    if (
      tag === 'button' ||
      tag === 'a' ||
      role === 'button' ||
      role === 'option' ||
      role === 'menuitem' ||
      cls.includes('cursor-pointer')
    ) {
      return n
    }
    n = n.parentElement
  }
  return el
}

// Ищем строку сессии в приложении (исключая нашу собственную страницу)
function _findSessionRow(title) {
  if (!_norm(title)) return null
  const nodes = document.querySelectorAll(
    'button, a, [role="button"], [role="option"], li, div, span'
  )
  let best = null
  let bestLen = Infinity
  for (const el of nodes) {
    if (el.closest && el.closest('[data-tasks-plugin]')) continue
    const txt = el.textContent || ''
    if (txt.length > 160) continue
    if (!_looksSame(txt, title)) continue
    const r = el.getBoundingClientRect ? el.getBoundingClientRect() : null
    if (!r || r.width < 20 || r.height < 8) continue
    if (txt.length < bestLen) {
      best = el
      bestLen = txt.length
    }
  }
  return best ? _clickableAncestor(best) : null
}

const _wait = ms => new Promise(r => setTimeout(r, ms))

function _setNativeValue(el, value) {
  const desc = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')
  if (desc && desc.set) desc.set.call(el, value)
  else el.value = value
  el.dispatchEvent(new Event('input', { bubbles: true }))
  el.dispatchEvent(new Event('change', { bubbles: true }))
}

// Родное поле поиска сессий приложения (не наше)
function _findSearchInput() {
  const inputs = document.querySelectorAll('input')
  for (const el of inputs) {
    if (el.closest && el.closest('[data-tasks-plugin]')) continue
    const ph = (el.getAttribute('placeholder') || '').toLowerCase()
    if (ph.includes('search session') || ph.includes('поиск') || ph.includes('search')) return el
  }
  return null
}

// Родная кнопка «New session» в сайдбаре приложения
function _findNewSessionButton() {
  const wanted = ['new session', 'новая сессия', 'new chat']
  const nodes = document.querySelectorAll('button, a, [role="button"], li, div')
  let best = null
  let bestLen = Infinity
  for (const el of nodes) {
    if (el.closest && el.closest('[data-tasks-plugin]')) continue
    const txt = _norm(el.textContent)
    if (!txt || txt.length > 40) continue
    if (!wanted.some(w => txt.startsWith(w))) continue
    const r = el.getBoundingClientRect ? el.getBoundingClientRect() : null
    if (!r || r.width < 20 || r.height < 8) continue
    if (txt.length < bestLen) {
      best = el
      bestLen = txt.length
    }
  }
  return best ? _clickableAncestor(best) : null
}

// Текущая активная сессия приложения (атом доступен только на чтение)
function _activeSessionId() {
  try {
    const a = host.state && host.state.activeSessionId
    if (!a) return null
    return typeof a.get === 'function' ? a.get() : a
  } catch (e) {
    return null
  }
}

// Живые сессии — для определения id только что созданной
async function _liveIds() {
  try {
    const res = await host.request('session.active_list', {})
    const list = (res && (res.sessions || res.active || res.items)) || []
    return list.map(s => s && (s.session_key || s.id || s.session_id)).filter(Boolean)
  } catch (e) {
    return []
  }
}

// Ctrl+N — родной хоткей приложения «New session» (показан рядом с кнопкой)
function _pressCtrlN() {
  const init = {
    key: 'n',
    code: 'KeyN',
    keyCode: 78,
    which: 78,
    ctrlKey: true,
    bubbles: true,
    cancelable: true
  }
  for (const target of [document.activeElement, document.body, document, window]) {
    if (!target || !target.dispatchEvent) continue
    try {
      target.dispatchEvent(new KeyboardEvent('keydown', init))
      target.dispatchEvent(new KeyboardEvent('keyup', init))
    } catch (e) {
      /* ignore */
    }
  }
}

async function openSession(id, title) {
  try {
    haptic('tap')
    // 1) сессия уже видна в списке — нажимаем её
    let row = _findSessionRow(title)
    if (row) {
      _fireClick(row)
      return
    }
    // 2) не видна — набираем название в родной поиск сессий и ждём строку
    const search = _findSearchInput()
    if (search) {
      search.focus()
      _setNativeValue(search, String(title || '').slice(0, 40))
      for (let i = 0; i < 12; i++) {
        await _wait(180)
        row = _findSessionRow(title)
        if (row) {
          _fireClick(row)
          _setNativeValue(search, '')
          return
        }
      }
      _setNativeValue(search, '')
    }
    host.notify({
      kind: 'error',
      message: 'Сессия не найдена в списке приложения: ' + (title || id)
    })
  } catch (err) {
    const msg = err && err.message ? err.message : String(err)
    host.notify({ kind: 'error', message: 'Не удалось открыть сессию: ' + msg })
  }
}

// Строка одной сессии (мелкая, приглушённая). Клик по названию открывает сессию.
// Точка-индикатор, как в сайдбаре приложения:
// 'active' — сессия, в которой ты сейчас (синяя, var(--ui-accent))
// 'live'   — агент прямо сейчас РАБОТАЕТ (зелёная, var(--ui-success) с запасом #4ade80)
// иначе    — обычная историческая (пустой кружок)
function Dot({ kind }) {
  if (kind === 'active') {
    return jsx('span', {
      className: 'inline-block h-1.5 w-1.5 shrink-0 rounded-full',
      style: { background: 'var(--ui-accent, #448AFF)' },
      title: 'ты здесь'
    })
  }
  if (kind === 'live') {
    return jsx('span', {
      className: 'inline-block h-1.5 w-1.5 shrink-0 rounded-full',
      style: { background: 'var(--ui-success, var(--ui-positive, #4ade80))' },
      title: 'агент работает'
    })
  }
  return jsx('span', {
    className: 'inline-block h-1.5 w-1.5 shrink-0 rounded-full border',
    style: { borderColor: 'var(--ui-stroke-secondary)' }
  })
}

// Тип точки для сессии / агрегат для задачи и проекта
function dotForSession(id, activeId, liveSet) {
  if (id && activeId && id === activeId) return 'active'
  if (id && liveSet && liveSet.has(id)) return 'live'
  return 'idle'
}

function dotForList(ids, activeId, liveSet) {
  const list = ids || []
  if (activeId && list.includes(activeId)) return 'active'
  if (liveSet && list.some(x => liveSet.has(x))) return 'live'
  return 'idle'
}

function SessionLine({ session, onMove, onUnlink, onDelete, taskOptions, activeId, liveSet }) {
  return jsxs('div', {
    className: 'flex items-center gap-1.5 rounded px-1.5 py-1 text-[0.8125rem] hover:bg-(--chrome-action-hover)',
    children: [
      jsx(Dot, { kind: dotForSession(session.id, activeId, liveSet) }),
      jsx('span', {
        className: 'w-12 shrink-0 tabular-nums',
        style: { color: 'var(--ui-text-quaternary)' },
        children: fmtDate(session.started_at)
      }),
      jsx('button', {
        type: 'button',
        onClick: () => openSession(session.id, session.title || session.preview || ''),
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
          title: 'отвязать от задачи (сессия останется в Hermes)',
          onClick: () => onUnlink(session.id),
          className: 'shrink-0 rounded border px-1.5 text-[0.6875rem] hover:bg-(--chrome-action-hover)',
          style: { borderColor: 'var(--ui-stroke-secondary)', color: 'var(--ui-text-tertiary)' },
          children: '✕'
        }),
      onDelete &&
        jsx('button', {
          type: 'button',
          title: 'удалить сессию целиком (переписка удалится)',
          onClick: () => onDelete(session.id, session.title || session.preview || ''),
          className: 'shrink-0 rounded border px-1.5 text-[0.6875rem] hover:bg-(--chrome-action-hover)',
          style: { borderColor: 'var(--ui-stroke-secondary)', color: 'var(--ui-text-tertiary)' },
          children: '🗑'
        })
    ]
  })
}

function TaskBlock(props) {
  const {
    task,
    liveById,
    liveSessions,
    onUnlink,
    onMove,
    taskOptions,
    removeTask,
    onCreateSession,
    onDelete,
    activeId,
    liveSet
  } = props
  const [open, setOpen] = useState(false)
  const sessions = (task.sessions || [])
    .map(id => liveById.get(id))
    .filter(Boolean)
    .sort((a, b) => (b.started_at || 0) - (a.started_at || 0))
  const addSession = () => {
    onCreateSession({ type: 'task', id: task.id }, '')
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
              jsx(Dot, { kind: dotForList(task.sessions || [], activeId, liveSet) }),
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
              className: 'mb-1 flex items-center justify-end gap-1.5',
              children: [
                jsx('button', {
                  type: 'button',
                  onClick: addSession,
                  className: 'rounded border px-2 py-0.5 text-[0.75rem] hover:bg-(--chrome-action-hover)',
                  style: { borderColor: 'var(--ui-stroke-secondary)', color: 'var(--ui-text-tertiary)' },
                  children: '+ Сессия'
                })
              ]
            }),
            sessions.length
              ? sessions.map(s =>
                  jsx(SessionLine, {
                    session: s,
                    onUnlink: sid => onUnlink(task.id, sid),
                    onDelete,
                    onMove,
                    taskOptions,
                    activeId,
                    liveSet
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
    onCreateSession,
    onCreateProjectSession,
    onDelete,
    activeId,
    liveSet
  } = props
  const empty = proj.tasks.length === 0
  const [showTaskInput, setShowTaskInput] = useState(false)
  const projSessions = proj.tasks.reduce((acc, t) => acc.concat(t.sessions || []), [])
  const projectOwnSessions = (proj.sessions || [])
    .map(id => liveById.get(id))
    .filter(Boolean)
    .sort((a, b) => (b.started_at || 0) - (a.started_at || 0))
  const addProjectSession = () => {
    onCreateProjectSession(proj.id)
  }
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
              jsx(Dot, { kind: dotForList(projSessions, activeId, liveSet) }),
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
          className: 'flex flex-col gap-1 px-2 pb-2 pt-1.5 pl-4',
          children: [
            // компактная строка действий: кнопки справа, сначала задача, потом сессия
            jsxs('div', {
              className: 'flex items-center justify-end gap-1.5',
              children: [
                showTaskInput
                  ? jsxs('div', {
                      className: 'flex w-1/2 items-center gap-1.5',
                      children: [
                        jsx('input', {
                          value: newTask,
                          autoFocus: true,
                          placeholder: 'Название задачи…',
                          onChange: e => setNewTask(e.target.value),
                          onKeyDown: e => {
                            if (e.key === 'Enter') {
                              addTask(proj.id)
                              setShowTaskInput(false)
                            }
                            if (e.key === 'Escape') setShowTaskInput(false)
                          },
                          className: 'flex-1 rounded border bg-transparent px-2 py-0.5 text-[0.75rem] outline-none',
                          style: { borderColor: 'var(--ui-stroke-secondary)' }
                        }),
                        jsx('button', {
                          type: 'button',
                          onClick: () => {
                            addTask(proj.id)
                            setShowTaskInput(false)
                          },
                          className: 'rounded border px-2 py-0.5 text-[0.75rem] hover:bg-(--chrome-action-hover)',
                          style: { borderColor: 'var(--ui-stroke-secondary)' },
                          children: 'ок'
                        })
                      ]
                    })
                  : jsx('button', {
                      type: 'button',
                      onClick: () => setShowTaskInput(true),
                      className: 'rounded border px-2 py-0.5 text-[0.75rem] hover:bg-(--chrome-action-hover)',
                      style: { borderColor: 'var(--ui-stroke-secondary)', color: 'var(--ui-text-tertiary)' },
                      children: '+ Задача'
                    }),
                jsx('button', {
                  type: 'button',
                  onClick: addProjectSession,
                  className: 'rounded border px-2 py-0.5 text-[0.75rem] hover:bg-(--chrome-action-hover)',
                  style: { borderColor: 'var(--ui-stroke-secondary)', color: 'var(--ui-text-tertiary)' },
                  children: '+ Сессия'
                })
              ]
            }),
            projectOwnSessions.length
              ? projectOwnSessions.map(s =>
                  jsx(SessionLine, {
                    session: s,
                    onUnlink: sid => onUnlink(proj.id, sid, 'project'),
                    onDelete,
                    onMove,
                    taskOptions,
                    activeId,
                    liveSet
                  }, s.id + '-proj')
                )
              : null,
            empty
              ? null
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
                      onCreateSession: onCreateSession,
                      onDelete,
                      activeId,
                      liveSet
                    },
                    task.id
                  )
                )
          ]
        })
    ]
  })
}

function UnassignedBlock({ orphans, taskOptions, onMove, activeId, liveSet, onCreateUnassigned, onDelete }) {
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
          jsx(Dot, { kind: dotForList(orphans.map(s => s.id), activeId, liveSet) }),
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
      jsxs('div', {
        className: 'flex flex-col gap-1 px-2 pb-2 pt-1 pl-4',
        children: [
          jsx('button', {
            type: 'button',
            onClick: () => onCreateUnassigned(),
            className: 'self-end rounded border px-2 py-0.5 text-[0.75rem] hover:bg-(--chrome-action-hover)',
            style: { borderColor: 'var(--ui-stroke-secondary)', color: 'var(--ui-text-tertiary)' },
            children: '+ Сессия'
          }),
          orphans.map(s =>
            jsx(SessionLine, { session: s, onMove, onDelete, taskOptions, activeId, liveSet }, s.id)
          ),
          !orphans.length &&
            jsx('div', {
              className: 'px-1 pb-1 text-[0.75rem]',
              style: { color: 'var(--ui-text-quaternary)' },
              children: 'сессий не привязано'
            })
        ]
      })
    ]
  })
}

// Сохранённый id сессии всегда вида 20260831_104859_117ae6.
// Внутренние live-id (74bc0448) в привязках — мусор от ранних версий: они
// ломали и отображение в задачах, и подпись над чатом.
const STORED_ID_RE = /^\d{8}_\d{6}_[0-9a-z]{6}$/i

function isStoredId(id) {
  return typeof id === 'string' && STORED_ID_RE.test(id)
}

function sanitizeSessions(list) {
  return (list || []).filter(isStoredId)
}

// Прямая работа с localStorage — не зависит от жизненного цикла компонента:
// после Ctrl+N страница «Задачи» размонтируется, а привязку записать нужно.
function readStore() {
  try {
    const raw = window.localStorage.getItem(STORE_KEY)
    if (!raw) return { version: 2, projects: [], tasks: [], pendingTie: null }
    const p = JSON.parse(raw)
    return {
      version: 2,
      projects: (p.projects || []).map(x => ({ ...x, sessions: sanitizeSessions(x.sessions) })),
      tasks: (p.tasks || []).map(x => ({ ...x, sessions: sanitizeSessions(x.sessions) })),
      pendingTie: p.pendingTie || null
    }
  } catch (e) {
    return { version: 2, projects: [], tasks: [], pendingTie: null }
  }
}

function writeStore(next) {
  try {
    window.localStorage.setItem(
      STORE_KEY,
      JSON.stringify({
        projects: next.projects,
        tasks: next.tasks,
        pendingTie: next.pendingTie || null
      })
    )
  } catch (e) {
    /* ignore */
  }
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
        // чистим мусорные (внутренние) id, попавшие в привязки ранними версиями
        const cleaned = {
          version: 2,
          projects: (parsed.projects || []).map(p => ({
            ...p,
            sessions: sanitizeSessions(p.sessions)
          })),
          tasks: (parsed.tasks || []).map(t => ({
            ...t,
            sessions: sanitizeSessions(t.sessions)
          })),
          pendingTie: parsed.pendingTie || null
        }
        setStore(cleaned)
        writeStore(cleaned)
      } else {
        setStore({
          version: 2,
          projects: (TASKS_SEED.projects || []).slice(),
          tasks: (TASKS_SEED.tasks || []).slice(),
          pendingTie: null
        })
      }
    } catch (e) {
      setStore({ version: 2, projects: [], tasks: [], pendingTie: null })
    }
  }, [])

  const persist = next => {
    setStore(next)
    try {
      window.localStorage.setItem(
        STORE_KEY,
        JSON.stringify({ projects: next.projects, tasks: next.tasks, pendingTie: next.pendingTie || null })
      )
    } catch (e) {
      /* ignore */
    }
  }

  const live = useQuery({
    queryKey: ['tasks-plugin', 'session.list'],
    queryFn: () => host.request('session.list', { limit: 500 }),
    refetchInterval: 10000
  })
  // сессия, в которой пользователь сейчас: атом даёт ВНУТРЕННИЙ live-id,
  // поэтому передаём его в active_list и берём у отмеченной строки session_key
  const activeSid = useValue(host.state.activeSessionId)
  const liveActive = useQuery({
    queryKey: ['tasks-plugin', 'session.active_list', activeSid || ''],
    queryFn: () => host.request('session.active_list', { current_session_id: activeSid || '' }),
    refetchInterval: 5000
  })
  const liveRows = (liveActive.data && liveActive.data.sessions) || []
  // Зелёная точка = сессия НЕ idle (working / waiting / starting).
  // last_active из active_list брать нельзя: это память гейтвея, она
  // обновляется при любом касании живой сессии, поэтому «свежесть» там
  // почти всегда и точка горела бы у просто открытых сессий.
  const liveSet = useMemo(
    () =>
      new Set(
        liveRows
          .filter(s => s.status && s.status !== 'idle')
          .map(s => s.session_key || s.id)
      ),
    [liveActive.data]
  )
  const activeId = useMemo(() => {
    // activeSid — ВНУТРЕННИЙ live-id (атом); в active_list сессии лежат с этим
    // id в поле `id`, а привязки хранят сохранённый `session_key`. Находим по id.
    const bySid = liveRows.find(s => s.id === activeSid)
    if (bySid) return bySid.session_key || bySid.id
    const marked = liveRows.find(s => s.current)
    if (marked) return marked.session_key || marked.id
    return activeSid || null
  }, [liveActive.data, activeSid])
  const liveSessions = (live.data && live.data.sessions) || []
  const liveById = useMemo(() => new Map(liveSessions.map(s => [s.id, s])), [liveSessions])

  // Отложенная привязка: после «+ Сессия» приложение перевело в пустой чат,
  // сессия появится в session.list только после первого сообщения. Здесь
  // находим её и привязываем к целе (задаче или проекту) из pendingTie.
  const tieDone = useRef(false)
  useEffect(() => {
    if (!store || !store.pendingTie || tieDone.current) return
    const tie = store.pendingTie
    const target = tie.target || { type: 'task', id: tie.taskId }
    const assigned = new Set(
      store.tasks
        .concat(store.projects || [])
        .reduce((acc, o) => acc.concat(o.sessions || []), [])
    )
    // Новая сессия = та, которой НЕ было в снимке known на момент нажатия.
    // Это точный критерий (время как подстраховка для старых записей без known).
    const known = new Set(tie.known || [])
    const startedMs = s => {
      const v = s.started_at || 0
      return v < 1e12 ? v * 1000 : v
    }
    const candidates = liveSessions.filter(s => !assigned.has(s.id))
    const fresh = (tie.known
      ? candidates.filter(s => !known.has(s.id))
      : candidates.filter(s => startedMs(s) >= tie.at - 30 * 60 * 1000)
    ).sort((a, b) => startedMs(b) - startedMs(a))[0]
    if (!fresh) return
    tieDone.current = true
    if (target.type === 'project') {
      persist({
        ...store,
        pendingTie: null,
        projects: store.projects.map(p =>
          p.id === target.id ? { ...p, sessions: [fresh.id].concat(p.sessions || []) } : p
        )
      })
    } else {
      persist({
        ...store,
        pendingTie: null,
        tasks: store.tasks.map(t =>
          t.id === target.id ? { ...t, sessions: [fresh.id].concat(t.sessions || []) } : t
        )
      })
    }
    if (tie.title) {
      host.request('session.title', { session_id: fresh.id, title: tie.title }).catch(() => null)
    }
    host.notify({ kind: 'info', message: 'Сессия привязана' })
  }, [live.data, store])

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
  const createSession = async (target, title) => {
    // target: { type: 'task' | 'project' | 'none', id }
    try {
      haptic('tap')
      const name = String(title || '').trim()
      const isTie = target && target.type !== 'none'
      // Страховка на случай, если id новой сессии определить не удастся:
      // намерение пишем ДО перехода (Ctrl+N размонтирует эту страницу).
      if (isTie) {
        persist({
          ...store,
          pendingTie: {
            target,
            at: Date.now(),
            title: name,
            known: liveSessions.map(s => s.id)
          }
        })
      }
      // Снимок ЖИВЫХ сессий до нажатия: новая сессия — та, чей session_key
      // появится в active_list после. Это не зависит от activeSessionId,
      // который при Ctrl+N может не смениться (тогда привязывалась текущая).
      const beforeKeys = await _liveIds()
      // Пустая сессия не пишется в БД до первого сообщения — родная «New session»
      // (Ctrl+N) переводит в пустой чат, дублируем её.
      _pressCtrlN()
      let key = null
      for (let i = 0; i < 20 && !key; i++) {
        await _wait(200)
        if (i === 4) {
          const btn = _findNewSessionButton()
          if (btn) _fireClick(btn)
        }
        const nowKeys = await _liveIds()
        const fresh = nowKeys.find(k => !beforeKeys.includes(k) && isStoredId(k))
        if (fresh) key = fresh
      }
      if (!isTie) return
      if (!key) {
        // не смогли определить новую сессию — остаётся отложенная привязка
        // (pendingTie сработает, когда сессия появится в session.list)
        return
      }
      const cur = readStore()
      const next =
        target.type === 'project'
          ? {
              ...cur,
              pendingTie: null,
              projects: (cur.projects || []).map(p =>
                p.id === target.id
                  ? { ...p, sessions: [key].concat((p.sessions || []).filter(x => x !== key)) }
                  : p
              )
            }
          : {
              ...cur,
              pendingTie: null,
              tasks: (cur.tasks || []).map(t =>
                t.id === target.id
                  ? { ...t, sessions: [key].concat((t.sessions || []).filter(x => x !== key)) }
                  : t
              )
            }
      writeStore(next)
      setStore(next)
    } catch (err) {
      const msg = err && err.message ? err.message : String(err)
      host.notify({ kind: 'error', message: 'Не удалось создать сессию: ' + msg })
    }
  }

  // удалить сессию целиком: и из Hermes (session.delete), и из привязок
  const deleteSession = async (sessionId, label) => {
    const ok = window.confirm(
      'Удалить сессию полностью?\n\n' + (label || sessionId) + '\n\nПереписка будет удалена безвозвратно.'
    )
    if (!ok) return
    try {
      await host.request('session.delete', { session_id: sessionId })
    } catch (err) {
      const msg = err && err.message ? err.message : String(err)
      host.notify({ kind: 'error', message: 'Не удалось удалить сессию: ' + msg })
      return
    }
    persist({
      ...store,
      tasks: store.tasks.map(t => ({
        ...t,
        sessions: (t.sessions || []).filter(s => s !== sessionId)
      })),
      projects: (store.projects || []).map(p => ({
        ...p,
        sessions: (p.sessions || []).filter(s => s !== sessionId)
      }))
    })
    live.refetch()
    liveActive.refetch()
    host.notify({ kind: 'info', message: 'Сессия удалена' })
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

  // отвязать сессию от задачи или проекта
  const unlinkSession = (ownerId, sessionId, type = 'task') => {
    if (type === 'project') {
      persist({
        ...store,
        projects: store.projects.map(p =>
          p.id === ownerId
            ? { ...p, sessions: (p.sessions || []).filter(s => s !== sessionId) }
            : p
        )
      })
      return
    }
    persist({
      ...store,
      tasks: store.tasks.map(t =>
        t.id === ownerId
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

  // сессии, не привязанные ни к одной задаче или проекту
  const assigned = new Set(
    store.tasks
      .concat(store.projects || [])
      .reduce((acc, o) => acc.concat(o.sessions || []), [])
  )
  const orphans = liveSessions
    .filter(s => !assigned.has(s.id))
    .sort((a, b) => (b.started_at || 0) - (a.started_at || 0))

  // список задач-целей для дропдауна «перенести в…»
  const taskOptions = store.tasks.map(t => {
    const proj = store.projects.find(p => p.id === t.projectId)
    return { id: t.id, label: (proj ? proj.name + ' / ' : '') + t.name }
  })

  // дубли проектов для выпадающего: не включать задачу, у которой уже есть эта сессия — не критично

  const totalSessions =
    store.tasks.reduce((n, t) => n + (t.sessions || []).length, 0) +
    (store.projects || []).reduce((n, p) => n + (p.sessions || []).length, 0)

  return jsxs('div', {
    className: 'flex h-full flex-col overflow-hidden',
    'data-tasks-plugin': '1',
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
                onCreateSession: createSession,
                onCreateProjectSession: projId => createSession({ type: 'project', id: projId }, ''),
                onDelete: deleteSession,
                activeId,
                liveSet
              },
              proj.key
            )
          ),
          jsx(UnassignedBlock, {
            orphans,
            taskOptions,
            onMove: moveSession,
            activeId,
            liveSet,
            onCreateUnassigned: () => createSession({ type: 'none' }, ''),
            onDelete: deleteSession
          }),
        ]
      })
    ]
  })
}

// Автопрокрутка переписки в конец: desktop-клиент после перезапуска
// восстанавливает позицию не в конце. Находим самый большой скроллируемый
// контейнер (это лента сообщений) и доводим его до низа.
function _scrollChatToEnd() {
  let best = null
  let bestArea = 0
  const nodes = document.querySelectorAll('div, section, main, ul')
  for (const el of nodes) {
    if (el.closest && el.closest('[data-tasks-plugin]')) continue
    const r = el.getBoundingClientRect()
    // сайдбар/левая навигация — не трогаем: они слева (left < 350px)
    if (r.left < 350) continue
    const sh = el.scrollHeight || 0
    const ch = el.clientHeight || 0
    if (sh - ch < 200 || ch < 200) continue
    const st = getComputedStyle(el).overflowY
    if (st !== 'auto' && st !== 'scroll') continue
    const area = ch * (el.clientWidth || 0)
    if (area > bestArea) {
      best = el
      bestArea = area
    }
  }
  if (best) best.scrollTop = best.scrollHeight
  return !!best
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
