# iiko Design System — база компонентов и токенов

## ⚡ Как этим пользоваться

Скопируйте строку ниже и отправьте своему ИИ (Hermes, ChatGPT, Claude, Copilot — любому):

> **Собери прототип по дизайн-системе iiko, используя этот файл: https://anders7rusk.github.io/iiko-ds-web/iiko-ds-spec.md**

Дальше просто опишите экран словами или приложите скриншот/макет. ИИ прочитает этот файл и соберёт прототип на компонентах ДС: возьмёт классы из [карты классов](#карта-классов-css-библиотеки), стили — из раздела [Полные CSS-стили](#полные-css-стили-всех-компонентов), значения — из таблиц токенов. **Скачивать ничего не нужно — всё внутри этого файла.**

Главное правило для ИИ: референс задаёт структуру и тексты, **внешний вид — только из этой ДС** (см. [Общие правила](#общие-правила), пункт 0).

---

Единый источник для сборки прототипов: **токены + компоненты + иконки + правила**.
Любой человек или ИИ, используя этот файл как инструкцию, собирает прототипы, которые выглядят одинаково — общая база компонентов и токенов.

> Назначение файла: сколько угодно людей и ИИ ссылаются на один этот файл и собирают свои прототипы по своим задачам — компоненты и токены у всех одни.

Главное для ИИ: работать как разработчик высокой квалификации — сначала разобрать макет/описание и составить план, потом верстать. Порядок разбора — в разделе [Как думать при сборке](#как-думать-при-сборке-порядок-работы-опытного-разработчика).


## Содержание

1. [Общие правила](#общие-правила)
2. [Как думать при сборке (порядок работы разработчика)](#как-думать-при-сборке-порядок-работы-опытного-разработчика)
3. [Токены](#токены)
   - Палитра · Семантические цвета · Компонентные цвета · Размеры · Отступы · Радиусы · Типографика · Тени
4. [Компоненты](#компоненты)
   - [Каталог компонентов Figma (все 111)](#каталог-компонентов-figma-все-111)
   - [Карта классов CSS-библиотеки](#карта-классов-css-библиотеки)
   - [Реализованные компоненты (готовая разметка)](#реализованные-компоненты-готовая-разметка)
   - Button · Input · Checkbox · Radio button · Badge
5. [Иконки](#иконки-svg-вектор)
6. [Полные CSS-стили всех компонентов](#полные-css-стили-всех-компонентов)
7. [Как собирать прототип](#как-собирать-прототип-инструкция-для-человека-и-ии)
8. [Каркас прототипа](#каркас-прототипа)
9. [Чек-лист соответствия ДС](#чек-лист-соответствия-дс)


## Общие правила

0. **Приоритет ДС над референсом (главное правило).** Референс (скриншот, макет, описание) задаёт **структуру, состав блоков и тексты**. Внешний вид берётся **только из этой дизайн-системы**. Если компонент на референсе отличается от ДС (другой цвет, радиус, высота, шрифт, самодельная панель) — использовать компонент ДС, а не копировать референс. Ничего не подгонять «на глаз» под картинку: размеры, отступы, типографика — только из токенов и параметров компонентов ниже. Если подходящего компонента в ДС нет — взять ближайший из каталога и явно пометить это в результате.
1. **Никаких хардкодов.** Цвета, радиусы, отступы, размеры и шрифты — только через токены `var(--ds-*)`.
2. **Классы компонентов** — префикс `ds-`: `ds-btn`, `ds-input`, `ds-checkbox`, `ds-radio`, `ds-badge`. Модификаторы через `--`: `ds-btn--m`, `ds-btn--accent`, `ds-btn--filled`.
3. **Шрифт** — Roboto 400/500 (размеры, веса, letter-spacing — из токенов типографики).
4. **Иконки** — SVG-вектор 20×20 (не шрифт, не PNG), цвет наследуется `currentColor`.
5. **Состояния** — нативные: hover/press через CSS, disabled через атрибут, error через класс `--error`.
6. **Компонентные токены** — использовать специфичные для компонента (`--ds-color-button-*`, `--ds-color-checkbox-*`), а не общие (`--ds-color-text-*`, `--ds-color-icon-*`).


### Как думать при сборке: порядок работы опытного разработчика

Общие рекомендации для любого экрана и любой задачи. Смотреть на макет, скриншот или текстовое описание
нужно **как разработчик высокой квалификации, который получил задание сверстать интерфейс**: сначала разбор
и план, потом код. Не начинать с написания HTML.

**Шаг 1. Понять экран целиком.** Определить тип страницы (например: форма, пошаговый мастер, настройки,
список или таблица, карточка объекта, диалог) и главное действие пользователя. Тип экрана подсказывает
набор компонентов: где шаги — компоненты шагов, где набор настроек — контейнеры-карточки с переключателями
и полями, где перечень данных — таблица или список.

**Шаг 2. Разложить на зоны сверху вниз.** Типичные зоны: шапка, строка заголовка с действиями, навигация,
тело (секции/группы), панель действий. Для каждой зоны определить ширину и выравнивание, а также
вертикальные ритмы — отступы между зонами берутся из токенов отступов, а не подбираются на глаз.

**Шаг 3. Сопоставить каждый блок с компонентом ДС** по карте классов и каталогу компонентов:
«блок → компонент → вариант (Size/Type/State)». Ориентиры выбора носят условный характер, проверять по
каталогу: рамка вокруг группы контента — контейнер-карточка; раскрывающаяся панель-пояснение — панель
раскрытия; короткое сообщение в строку — баннер; подсказка по наведению — тултип; поле с выпадающим
значением — поле ввода с иконкой-стрелкой; включение/выключение настройки — переключатель;
выбор нескольких значений — чекбоксы; выбор одного значения — радиокнопки.
Если точного компонента в ДС нет — взять ближайший и **явно пометить** это, а не рисовать свой.

**Шаг 3а. Однотипных элементов больше одного → групповой компонент.** Если элементов одного вида
**два и более** (кнопки, чекбокса, радио) и у компонента в ДС есть **группа** — использовать именно
**групповой компонент**: 2+ кнопки → `Button group` (`.ds-btn-group`), 2+ чекбокса → `Checkbox group`,
2+ радио → `Radio group`. Одиночный элемент — обычный компонент. У `Button group` есть версия с маржинс
(`--margins`, паддинг 8px 16px) — она в основном для **футера/нижней панели** (отступ от краёв контейнера,
напр. «Отмена/Сохранить» в `__footer`); в тулбаре/списке (середина экрана) группа — **без маржинс**.

**Шаг 4. Определить данные и состояния.** Что заполнено, что плейсхолдер, что обязательно, что включено или
выключено, что недоступно, где ошибка. Тексты — дословно из задания, без переписывания и «улучшений».

**Шаг 5. Спланировать раскладку до кода.** Один общий слой CSS каркаса (сетка, отступы, ограничения ширины)
на flex/grid с отступами из токенов. Компоненты ДС в этом слое **не переопределять** — они приходят
готовыми; каркас только расставляет их. Никаких `style="..."` в разметке.

**Шаг 6. Собирать в правильном порядке.** Сначала скелет зон и порядок блоков (пустые контейнеры) →
затем компоненты сверху вниз → затем иконки (SVG-вектор) и состояния → в конце отступы и выравнивание.
Так дефекты видны сразу, а не всплывают в конце.

**Шаг 7. Ничего не добавлять от себя.** В прототипе только то, что есть в задании: не тащить слоты
компонента (подвал, панель действий, разделители), которых нет в описании, не придумывать иконки, поля и
кнопки. Не хватает данных — спросить, а не додумать.

**Шаг 8. Проверить как на код-ревью.** Пройти чек-лист и сверить в инспекторе: высоты, радиусы и отступы
совпадают с параметрами компонентов, цвета равны значениям токенов, нет горизонтального скролла, консоль
без ошибок, все иконки видимы (не нулевого размера). Если строки или колонки «разъезжаются» — причина
почти всегда в **разной высоте строк**, а не в ширине колонок: выравнивать высоту/`vertical-align`.

**Типичные ошибки, за которые вёрстку возвращают:** свои классы вместо классов ДС; отдельные элементы
вместо группового компонента при двух и более однотипных; `style="..."` в разметке;
иконки шрифтом вместо SVG; подгонка размеров «на глаз» под картинку; переопределение стилей компонента;
свой класс рядом с уже существующим в ДС; блоки, которых не было в задании.


## Токены

Все токены сгенерированы из Figma (DS.json → tokens.css). В прототипах использовать эти имена как CSS-переменные: `var(--ds-palette-accent-500)`.

### Палитра (Base Color)

Базовые цвета бренда. Семантические и компонентные токены ссылаются на них.

| Токен | Значение |
|---|---|

### Семантические цвета (Color)

Цвета смысловых состояний: brand (акцент), positive, negative, neutral, contrast-1…4.

| Токен | Значение |
|---|---|

### Компонентные цвета (Component)

Цвета конкретных компонентов. **В прототипах использовать именно эти токены**, а не общие (Text/Icon).


### Base Size

| Токен | Значение |
|---|---|

### Space

| Токен | Значение |
|---|---|

### Radius

| Токен | Значение |
|---|---|

### Base Stroke

| Токен | Значение |
|---|---|

### Типографика (Typography + Base Typography)

Шрифт: **Roboto** (400/500). Размеры, веса, межбуквенные расстояния и высоты строк — только из токенов.

| Токен | Значение |
|---|---|

### Тени (Shadows)

| Токен | Значение |
|---|---|

### Текстовые стили ДС (готовые классы)

Стили из Figma один в один. В разметке ставить **класс**, а не набор свойств: `<span class="ds-text-body-m-normal-regular">`.

| Стиль Figma | Класс | font (вес размер/интерлиньяж) | Трекинг | Регистр |
|---|---|---|---|---|
| Header L (34)/Normal/Regular | `.ds-text-header-l-34-normal-regular` | `400 34px/40px "Roboto"` | 0px | none |
| Header L (34) / Normal / Medium | `.ds-text-header-l-34-normal-medium` | `500 34px/40px "Roboto"` | 0px | none |
| Header L (34) / Caps / Regular | `.ds-text-header-l-34-caps-regular` | `400 34px/40px "Roboto"` | 0px | uppercase |
| Header L (34) / Caps / Medium | `.ds-text-header-l-34-caps-medium` | `500 34px/40px "Roboto"` | 0px | uppercase |
| Header M (24) / Normal / Regular | `.ds-text-header-m-24-normal-regular` | `400 24px/32px "Roboto"` | 0.5px | none |
| Header M (24) / Normal / Medium | `.ds-text-header-m-24-normal-medium` | `500 24px/32px "Roboto"` | 0.5px | none |
| Header M (24) / Caps / Regular | `.ds-text-header-m-24-caps-regular` | `400 24px/32px "Roboto"` | 0.5px | uppercase |
| Header M (24) / Caps / Medium | `.ds-text-header-m-24-caps-medium` | `500 24px/32px "Roboto"` | 0.5px | uppercase |
| Header S (20) / Normal / Regular | `.ds-text-header-s-20-normal-regular` | `400 20px/28px "Roboto"` | 0.5px | none |
| Header S (20) / Normal / Medium | `.ds-text-header-s-20-normal-medium` | `500 20px/28px "Roboto"` | 0.5px | none |
| Header S (20) / Caps / Regular | `.ds-text-header-s-20-caps-regular` | `400 20px/28px "Roboto"` | 0.5px | uppercase |
| Header S (20) / Caps / Medium | `.ds-text-header-s-20-caps-medium` | `500 20px/28px "Roboto"` | 0.5px | uppercase |
| Body L (18) / Normal / Regular | `.ds-text-body-l-18-normal-regular` | `400 18px/24px "Roboto"` | 0.5px | none |
| Body L (18) / Normal / Medium | `.ds-text-body-l-18-normal-medium` | `500 18px/24px "Roboto"` | 0.5px | none |
| Body L (18) / Caps / Regular | `.ds-text-body-l-18-caps-regular` | `400 18px/24px "Roboto"` | 0.5px | uppercase |
| Body L (18) / Caps / Medium | `.ds-text-body-l-18-caps-medium` | `500 18px/24px "Roboto"` | 0.5px | uppercase |
| Body M (16) / Normal / Regular | `.ds-text-body-m-16-normal-regular` | `400 16px/24px "Roboto"` | 0.5px | none |
| Body M (16) / Normal / Medium | `.ds-text-body-m-16-normal-medium` | `500 16px/24px "Roboto"` | 0.5px | none |
| Body M (16) / Caps / Regular | `.ds-text-body-m-16-caps-regular` | `400 16px/24px "Roboto"` | 0.5px | uppercase |
| Body M (16) / Caps / Medium | `.ds-text-body-m-16-caps-medium` | `500 16px/24px "Roboto"` | 0.5px | uppercase |
| Body S (14) / Normal / Regular | `.ds-text-body-s-14-normal-regular` | `400 14px/20px "Roboto"` | 0.5px | none |
| Body S (14) / Normal / Medium | `.ds-text-body-s-14-normal-medium` | `500 14px/20px "Roboto"` | 0.5px | none |
| Body S (14) / Caps / Regular | `.ds-text-body-s-14-caps-regular` | `400 14px/20px "Roboto"` | 0.5px | uppercase |
| Body S (14) / Caps / Medium | `.ds-text-body-s-14-caps-medium` | `500 14px/20px "Roboto"` | 0.5px | uppercase |
| Caption L (12) / Normal / Regular | `.ds-text-caption-l-12-normal-regular` | `400 12px/16px "Roboto"` | 0.5px | none |
| Caption L (12) / Normal / Medium | `.ds-text-caption-l-12-normal-medium` | `500 12px/16px "Roboto"` | 0.5px | none |
| Caption L (12) / Caps / Regular | `.ds-text-caption-l-12-caps-regular` | `400 12px/16px "Roboto"` | 0.5px | uppercase |
| Caption L (12) / Caps / Medium | `.ds-text-caption-l-12-caps-medium` | `500 12px/16px "Roboto"` | 0.5px | uppercase |
| Caption M (10) / Normal / Regular | `.ds-text-caption-m-10-normal-regular` | `400 10px/12px "Roboto"` | 0.5px | none |
| Caption M (10)/Normal/Medium | `.ds-text-caption-m-10-normal-medium` | `500 10px/12px "Roboto"` | 0.5px | capitalize |
| Caption M (10) / Caps / Regular | `.ds-text-caption-m-10-caps-regular` | `400 10px/12px "Roboto"` | 0.5px | uppercase |
| Caption M (10) / Caps / Medium | `.ds-text-caption-m-10-caps-medium` | `500 10px/12px "Roboto"` | 0.5px | uppercase |
| Caption S (8) / Normal / Regular | `.ds-text-caption-s-8-normal-regular` | `400 8px/10px "Roboto"` | 0.5px | none |
| Caption S (8) / Normal / Medium | `.ds-text-caption-s-8-normal-medium` | `500 8px/10px "Roboto"` | 0.5px | none |
| Caption S (8) / Caps / Regular | `.ds-text-caption-s-8-caps-regular` | `400 8px/10px "Roboto"` | 0.5px | uppercase |
| Caption S (8) / Caps / Medium | `.ds-text-caption-s-8-caps-medium` | `500 8px/10px "Roboto"` | 0.5px | uppercase |

### Эффект-стили ДС (тени как готовые значения)

Ставить `box-shadow: var(--ds-shadow-…)`, не переписывать пиксели.

| Стиль Figma | Токен | Значение box-shadow |
|---|---|---|
| Shadows/None | `--ds-shadow-shadows-none` | `0px 2px 0px 0px #ffffff` |
| Shadows/01 dp Sl | `--ds-shadow-shadows-01-dp-sl` | `0px 0px 4px 0px rgba(33, 33, 33, 0.12), 0px 2px 2px 0px rgba(33, 33, 33, 0.04)` |
| Shadows/08 dp S | `--ds-shadow-shadows-08-dp-s` | `0px 0px 16px 0px rgba(33, 33, 33, 0.12), 0px 4px 6px 0px rgba(33, 33, 33, 0.1)` |
| Shadows/12 dp M | `--ds-shadow-shadows-12-dp-m` | `0px 0px 28px 0px rgba(33, 33, 33, 0.12), 0px 10px 24px 0px rgba(33, 33, 33, 0.12)` |
| Shadows/24 dp XL | `--ds-shadow-shadows-24-dp-xl` | `0px 0px 32px 0px rgba(33, 33, 33, 0.16), 0px 12px 16px 0px rgba(33, 33, 33, 0.16)` |

### Цветовые стили ДС

Цветовые стили Figma. Для компонентов приоритет у компонентных токенов `--ds-color-*`.

| Стиль Figma | Токен | Значение |
|---|---|---|
| Surface / Default | `--ds-paint-surface-default` | #ffffff |
| Surface / Default V2 | `--ds-paint-surface-default-v2` | #f8f9fc |
| Surface / Hover | `--ds-paint-surface-hover` | #f5f5f5 |
| Surface / Selected | `--ds-paint-surface-selected` | #ebebeb |
| Surface / Press | `--ds-paint-surface-press` | #e0e0e0 |
| Surface / Disable | `--ds-paint-surface-disable` | #e0e0e0 |
| Surface/SnackTooltip | `--ds-paint-surface-snacktooltip` | #424242 |
| Surface/Sidebar | `--ds-paint-surface-sidebar` | #f8f9fc |
| Surface/Sidebar_Selected | `--ds-paint-surface-sidebar-selected` | #f0f5ff |
| Surface / Sidebar_Active | `--ds-paint-surface-sidebar-active` | #a8c9ff |
| Table surfase / Default | `--ds-paint-table-surfase-default` | #ffffff |
| Table surfase / Hover | `--ds-paint-table-surfase-hover` | #f5f5f5 |
| Table surfase / Selected | `--ds-paint-table-surfase-selected` | #ebebeb |
| Table surfase / Group | `--ds-paint-table-surfase-group` | #ebebeb |
| Table surfase / Head | `--ds-paint-table-surfase-head` | #f0f5ff |
| Table surfase / Head Group | `--ds-paint-table-surfase-head-group` | #a8c9ff |
| Text/Primary | `--ds-paint-text-primary` | #333333 |
| Text/Inversive | `--ds-paint-text-inversive` | #ffffff |
| Text / Caption | `--ds-paint-text-caption` | #616161 |
| Text / Placeholder | `--ds-paint-text-placeholder` | #d6d6d6 |
| Text / Disable | `--ds-paint-text-disable` | #9e9e9e |
| Text/Accent | `--ds-paint-text-accent` | #448aff |
| Text/Positive | `--ds-paint-text-positive` | #14b456 |
| Text / Warning | `--ds-paint-text-warning` | #ffab40 |
| Text/Negative | `--ds-paint-text-negative` | #ff5252 |
| Button / Neutral / Default | `--ds-paint-button-neutral-default` | #ffffff |
| Button / Neutral / Hover | `--ds-paint-button-neutral-hover` | #f5f5f5 |
| Button / Neutral / Press | `--ds-paint-button-neutral-press` | #ebebeb |
| Button / Neutral / Disable | `--ds-paint-button-neutral-disable` | #ebebeb |
| Button/Accent/Default | `--ds-paint-button-accent-default` | #448aff |
| Button/Accent/Hover | `--ds-paint-button-accent-hover` | #3969d5 |
| Button/Accent/Press | `--ds-paint-button-accent-press` | #2651b5 |
| Button/Positive/Default | `--ds-paint-button-positive-default` | #14b456 |
| Button/Positive/Hover | `--ds-paint-button-positive-hover` | #0f852c |
| Button/Positive/Press | `--ds-paint-button-positive-press` | #0a571a |
| Button/Warning/Default | `--ds-paint-button-warning-default` | #ffab40 |
| Button/Warning/Hover | `--ds-paint-button-warning-hover` | #ea7806 |
| Button/Warning/Press | `--ds-paint-button-warning-press` | #994000 |
| Button/Negative/Default | `--ds-paint-button-negative-default` | #ff5252 |
| Button/Negative/Hover | `--ds-paint-button-negative-hover` | #de1a12 |
| Button/Negative/Press | `--ds-paint-button-negative-press` | #7f0f0a |
| Icon/Primary | `--ds-paint-icon-primary` | #616161 |
| Icon/Inversive | `--ds-paint-icon-inversive` | #ffffff |
| Icon/Disable | `--ds-paint-icon-disable` | #9e9e9e |
| Icon/Accent | `--ds-paint-icon-accent` | #448aff |
| Icon/Positive | `--ds-paint-icon-positive` | #14b456 |
| Icon/Warning | `--ds-paint-icon-warning` | #ea7806 |
| Icon/Negative | `--ds-paint-icon-negative` | #ff5252 |
| Shapes / Default | `--ds-paint-shapes-default` | #ffffff |
| Shapes / SuperLight NT | `--ds-paint-shapes-superlight-nt` | #f5f5f5 |
| Shapes / Lightest NT | `--ds-paint-shapes-lightest-nt` | #ebebeb |
| Shapes / Lighter NT | `--ds-paint-shapes-lighter-nt` | #e0e0e0 |
| Shapes / Lighter PR | `--ds-paint-shapes-lighter-pr` | #f8f9fc |
| Shapes / Lighter SC | `--ds-paint-shapes-lighter-sc` | #ebfbf2 |
| Shapes/Lighter WR | `--ds-paint-shapes-lighter-wr` | #fff9f0 |
| Shapes / Lighter ER | `--ds-paint-shapes-lighter-er` | #fff2f2 |
| Shapes / Lightest MG | `--ds-paint-shapes-lightest-mg` | #fbf7fc |
| Shapes / Lightest BR | `--ds-paint-shapes-lightest-br` | #f7e9e3 |
| Shapes / Lightest DB | `--ds-paint-shapes-lightest-db` | #f9fafb |
| Stroke / Default | `--ds-paint-stroke-default` | #e0e0e0 |
| Stroke / Hover | `--ds-paint-stroke-hover` | #9e9e9e |
| Stroke / Disable | `--ds-paint-stroke-disable` | #ebebeb |
| Stroke / Primary | `--ds-paint-stroke-primary` | #448aff |
| Stroke / Secondary | `--ds-paint-stroke-secondary` | #14b456 |
| Stroke / Warning | `--ds-paint-stroke-warning` | #ffab40 |
| Stroke / Error | `--ds-paint-stroke-error` | #ff5252 |

### Сетка (Grid / Контейнер)

Контент собирается в Контейнер (max-width) с 4 брейкпоинтами. Ширина контейнера и поля (margin) — из Figma _Grids_DS_; отступы между блоками внутри контейнера — из шкалы Space (`--ds-space-*`). Проверять по `border-box`.

| Брейкпоинт | Экран | Контент (Container) | Поля (margin) | gap между блоками |
|---|---|---|---|---|
| Desktop | 1440 | 1176 | 32 + 32 | 24 / 16 / 8 |
| Tablet | 768 | 652 | 32 + 32 | 16 / 8 |
| Phone | 374 | 342 | 16 + 16 | 8 |

**Отступы между блоками/компонентами в контейнере** — только из шкалы Space:
| Токен | Значение | Для чего |
|---|---|---|
| `--ds-space-1x` | 4 | микро-отступ внутри инлайн (иконка·текст) |
| `--ds-space-2x` | 8 | мелкий блок (gap иконки/кнопок, Tab-строки) |
| `--ds-space-3x` | 12 | средний между компонентами в строке |
| `--ds-space-4x` | 16 | средний блок (паддинг контента, gap разделов) |
| `--ds-space-5x` | 20 | крупный внутри секции |
| `--ds-space-6x` | 24 | крупный блок (gap секций контейнера) |
| `--ds-space-7x` | 28 | между крупными секциями |
| `--ds-space-8x` | 32 | поля (margin) контейнера Desktop/Tablet |

`Container` Desktop 1176 ширина + поля 32. На Phone поля сжимаются до 16. Колонки в сетке колоночные не заданы (в Figma `layoutGrids` пуст) — раскладка строится на flex/grid и шкале Space.



## Компоненты


### Каталог компонентов Figma (все 106)

Полный набор компонентов дизайн-системы (сканирование всех страниц файла Figma CJBjyS1OnRXqiOqaXYVCVd, включая неопубликованные и вложенные): свойства, все значения вариантов и токены компонента.

**Всего компонентов: 106**

#### Arrow `[55939:14119]` — 13 вариантов
**Описание и рекомендации по применению:**
Набор стрелок — направление действия и раскрытие: возврат назад, шаг по периоду, сортировка, раскрытие списка.  
Берите стрелку из этого набора, а не рисуйте свою: размер и толщина линий согласованы с иконками ДС.  


Как выбрать вариант: по смыслу действия — назад/вперёд, вверх/вниз, раскрыть, свернуть.
- **Content** (VARIANT): arrow_back, arrow_downward_alt, arrow_drop_down, arrow_drop_up, arrow_forward, arrow_left, arrow_right, arrow_upward_alt, keyboard_arrow_down, keyboard_arrow_left, keyboard_arrow_right, keyboard_arrow_up, unfold_less
- Размеры и параметры:
    - высота: `var(--ds-size-6x)` (фикс.)
    - ширина: `var(--ds-size-6x)` (фикс.)
    - фон: `#ffffff`
- Разметка:

```html
<div class="ds-arrow">
  <div class="ds-arrow__drop-down"></div>
  <span class="ds-arrow__icon"><!-- SVG-иконка ДС --></span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Arrow [55939:14119] — 13 вариантов; оси: Content */
.ds-arrow {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-arrow__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-arrow__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-arrow__icon svg path {
  fill: currentColor;
}
.ds-arrow__drop-down {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
```
</details>

#### Arrow list `[55939:13307]` — 13 вариантов
**Описание и рекомендации по применению:**
Стрелка в пункте списка — показывает, что пункт раскрывается или ведёт внутрь раздела.  
Служебный элемент списка: ставится справа в пункте List item, отдельно на экран не выносится.  


Как выбрать вариант: по смыслу — переход внутрь, раскрытие или свёртывание пункта.
- **Content** (VARIANT): arrow_back, arrow_downward_alt, arrow_drop_down, arrow_drop_up, arrow_forward, arrow_left, arrow_right, arrow_upward_alt, keyboard_arrow_down, keyboard_arrow_left, keyboard_arrow_right, keyboard_arrow_up, unfold_less
- Размеры и параметры:
    - высота: `var(--ds-size-6x)` (фикс.)
    - ширина: `var(--ds-size-6x)` (фикс.)
    - фон: `#ffffff`
- Разметка:

```html
<div class="ds-arrow-list">
  <div class="ds-arrow-list__drop-down"></div>
  <span class="ds-arrow-list__icon"><!-- SVG-иконка ДС --></span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Arrow list [55939:13307] — 13 вариантов; оси: Content */
.ds-arrow-list {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-arrow-list__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-arrow-list__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-arrow-list__icon svg path {
  fill: currentColor;
}
.ds-arrow-list__drop-down {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
```
</details>

#### Arrow menu `[56090:1628]` — 13 вариантов
**Описание и рекомендации по применению:**
Стрелка в пункте меню — показывает вложенное подменю или направление перехода.  
Служебный элемент меню: ставится справа в пункте Menu item, отдельно на экран не выносится.  


Как выбрать вариант: по смыслу — вложенное подменю, возврат или раскрытие.
- **Content** (VARIANT): arrow_back, arrow_downward_alt, arrow_drop_down, arrow_drop_up, arrow_forward, arrow_left, arrow_right, arrow_upward_alt, keyboard_arrow_down, keyboard_arrow_left, keyboard_arrow_right, keyboard_arrow_up, unfold_less
- Размеры и параметры:
    - высота: `var(--ds-size-6x)` (фикс.)
    - ширина: `var(--ds-size-6x)` (фикс.)
    - фон: `#ffffff`
- Разметка:

```html
<div class="ds-arrow-menu">
  <div class="ds-arrow-menu__drop-down"></div>
  <span class="ds-arrow-menu__icon"><!-- SVG-иконка ДС --></span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Arrow menu [56090:1628] — 13 вариантов; оси: Content */
.ds-arrow-menu {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-arrow-menu__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-arrow-menu__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-arrow-menu__icon svg path {
  fill: currentColor;
}
.ds-arrow-menu__drop-down {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
```
</details>

#### Arrow select `[57735:17989]` — 13 вариантов
**Описание и рекомендации по применению:**
Стрелка в поле выбора — показывает, что список раскрывается, и его текущее состояние.  
Служебный элемент Select: ставится справа в поле, отдельно на экран не выносится.  


Как выбрать вариант: список закрыт или раскрыт, направление перехода.
- **Content** (VARIANT): arrow_back, arrow_downward_alt, arrow_drop_down, arrow_drop_up, arrow_forward, arrow_left, arrow_right, arrow_upward_alt, keyboard_arrow_down, keyboard_arrow_left, keyboard_arrow_right, keyboard_arrow_up, unfold_less
- Размеры и параметры:
    - высота: `var(--ds-size-6x)` (фикс.)
    - ширина: `var(--ds-size-6x)` (фикс.)
    - фон: `#ffffff`
- Разметка:

```html
<div class="ds-arrow-select">
  <div class="ds-arrow-select__drop-down"></div>
  <span class="ds-arrow-select__icon"><!-- SVG-иконка ДС --></span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Arrow select [57735:17989] — 13 вариантов; оси: Content */
.ds-arrow-select {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-arrow-select__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-arrow-select__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-arrow-select__icon svg path {
  fill: currentColor;
}
.ds-arrow-select__drop-down {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
```
</details>

#### Autocomplete form `[58107:8230]` — 10 вариантов
**Описание и рекомендации по применению:**
Поле с подсказкой из справочника — ввод с поиском по большому списку: товар, контрагент, сотрудник.  
Берите его, когда вариантов слишком много для обычного списка; подсказки показывайте по мере ввода.  


Как выбрать вариант:  
Variant=Empty — значение не выбрано; Populated — значение выбрано.  
Состояния: Default, Hover, Focus, Focus+Value, Error, Disable.
- **Variant** (VARIANT): Empty, Populated
- **State** (VARIANT): Default, Disable, Error, Focus, Focus+Value, Hover
- Размеры и параметры:
    - высота: минимум `48px`, растёт по контенту
    - ширина: `250px` (фикс.)
    - фон: `#ffffff`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--empty`: color `var(--ds-color-form-field-input-label-text-color, #616161)`, color `var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e)`
    - `--populated`: color `var(--ds-color-form-field-filled-default-label-text-color, #616161)`, color `var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e)`
- Состояния: `:disabled` (неактивно), `:focus-visible`, `:hover` (наведение)
- Разметка:

```html
<div class="ds-autocomplete-form ds-autocomplete-form--disabled">
  <span class="ds-autocomplete-form__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-autocomplete-form__input"></div>
  <div class="ds-autocomplete-form__input-frame"></div>
  <span class="ds-autocomplete-form__label">Текст</span>
  <span class="ds-autocomplete-form__support">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Autocomplete form [58107:8230] — 10 вариантов; оси: Variant, State */
.ds-autocomplete-form {
  min-height: 48px;
  width: 250px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-autocomplete-form__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-form-field-input-label-text-color, #616161);
  white-space: nowrap;
}
.ds-autocomplete-form__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-autocomplete-form__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-autocomplete-form__icon svg path {
  fill: currentColor;
}
.ds-autocomplete-form__input {
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support, 4px);
}
.ds-autocomplete-form__input-frame {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  padding: var(--ds-form-field-m-size-pad-input-top, 12px) var(--ds-form-field-m-size-pad-input-right, 12px) var(--ds-form-field-m-size-pad-input-bottom, 12px) var(--ds-form-field-m-size-pad-input-left, 12px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-autocomplete-form__support {
  display: flex;
  flex-direction: row;
}
.ds-autocomplete-form--empty {
  color: var(--ds-color-form-field-input-label-text-color, #616161);
}
.ds-autocomplete-form--populated {
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
}
.ds-autocomplete-form--empty:hover {
  background: var(--ds-color-form-field-filled-hover-input-background-hover, #f5f5f5);
  border: 1px solid var(--ds-color-form-field-filled-hover-border-color, #9e9e9e);
}
.ds-autocomplete-form--populated:hover {
  color: var(--ds-color-form-field-filled-hover-label-text-color, #616161);
}
.ds-autocomplete-form--populated:focus-visible {
  color: var(--ds-color-form-field-filled-focus-label-text-color, #448aff);
}
.ds-autocomplete-form--empty:disabled {
  color: var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e);
}
.ds-autocomplete-form--empty.ds-autocomplete-form--disabled {
  color: var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e);
}
.ds-autocomplete-form--populated:disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-autocomplete-form--populated.ds-autocomplete-form--disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-autocomplete-form--disabled {
  pointer-events: none;
}
```
</details>

#### Backdrop `[53623:806]` — 1 вариантов
**Описание и рекомендации по применению:**
Затемнение под диалогом — перекрывает экран, пока открыто модальное окно или панель.  
Берите его вместе с диалогом; клик по затемнению закрывает окно только там, где нет несохранённых данных.
- **Type** (VARIANT): Default
- CSS не требуется: собственного оформления нет — компонент задаёт только структуру/поведение, вид приходит от вложенных элементов.

#### Badge `[54428:187]` — 8 вариантов
**Описание и рекомендации по применению:**
Бейдж — отметка о новом или требующем внимания на элементе: пункте меню, кнопке, вкладке, пункте списка.  
Показывает количество или сам факт события; для метки состояния объекта используйте Status.  


Как выбрать вариант:  
Type=Counter — с числом, когда количество важно; Type=Point — точка, когда важен только факт.  
Style=Accent — обычное новое; Positive — успешно; Warning — требует внимания; Negative — ошибка или просрочено.  


Число не выдумывайте: бейдж показывает реальное количество, при большом значении — сокращение вида «99+».
- **Style** (VARIANT): Accent, Negative, Positive, Warning
- **Type** (VARIANT): Counter, Point
- CSS: выверено вручную, см. `components/badge.css` в разделе «Полные CSS-стили всех компонентов»

#### Banners `[54367:2566]` — 12 вариантов
**Описание и рекомендации по применению:**
Баннер — контекстное сообщение на странице: подсказка, предупреждение, ошибка, подтверждение.  
Показывайте поверх контента вверху страницы или блока, когда нужно привлечь внимание к событию.  


Как выбрать вариант:  
Neutral — нейтральное сообщение, без эмоциональной окраски.  
Accent — информационное или рекламное сообщение.  
Positive — успех, подтверждение.  
Warning — событие требует внимания, но не критично.  
Negative — ошибка или блокирующее событие: «Счёт не оплачен».  
Tip — подсказка с пунктирной обводкой, совет по продукту.  


Orientation=Horizontal — иконка, текст и кнопки в одну строку. Vertical — иконка и текст сверху, кнопки снизу.  
Состав настраивается внутри: Element left (иконка), Buttons, Close (крестик).  
Фронт: https://frontend-common.iiko.ru/components/banners
- **Style** (VARIANT): Accent, Negative, Neutral, Positive, Tip, Warning
- **Orientation** (VARIANT): Horizontal, Vertical
- Прочие свойства: Element left#18321:0 (BOOLEAN), Buttons#54443:2 (BOOLEAN), Close#54443:4 (BOOLEAN)
- CSS: выверено вручную, см. `components/navigation.css` в разделе «Полные CSS-стили всех компонентов»

#### Button `[17022:63091]` — 153 вариантов
**Описание и рекомендации по применению:**
Кнопка действия. Используйте для основного действия на экране.  
Одна акцентная кнопка на область. Кнопки только с иконкой — это Button icon; группы — Button group.  


Состав: текст + иконка (слева или справа), можно без иконки.  
Варианты:  
Accent Filled — основная.  
Neutral Outlined — второстепенная.  
Neutral Text — третьестепенная.  
Positive / Negative — успех / ошибка.  


Размеры: M (36px), S (28px), XS (24px).  
Состояния: default, hover, pressed, disabled, loading.  
Фронт: \<button restoButton\> — https://frontend-common.iiko.ru/components/button
- **Size** (VARIANT): M, S, XS
- **Style** (VARIANT): Accent, Disable, Negative, Neutral, Positive, Warning
- **Type** (VARIANT): Filled, Outlined, Text
- **State** (VARIANT): Default, Disable, Hover, Loading, Press
- Прочие свойства: Element left#17025:2 (BOOLEAN), Element right#17025:123 (BOOLEAN), Button text#17039:607 (TEXT), Text#17053:733 (BOOLEAN)
- CSS: выверено вручную, см. `components/button.css` в разделе «Полные CSS-стили всех компонентов»

#### Button group `[53619:15772]` — 4 вариантов
**Описание и рекомендации по применению:**
Группа кнопок — несколько действий рядом с единым выравниванием и отступами: подвал диалога, шапка блока, панель над таблицей.  
Порядок слева направо: сначала второстепенные действия, главное — последним справа. Больше трёх кнопок в группу не ставьте, лишнее уводите в меню.  


Как выбрать вариант:  
Orientation=Horizontally — в строку, основной случай; Vertically — в столбец, для узких блоков и мобильных экранов.  
Margins=On — с внешними отступами группы; Off — без них, когда отступы задаёт контейнер.
- **Orientation** (VARIANT): Horizontally, Vertically
- **Margins** (VARIANT): Off, On
- Прочие свойства: Slot#60175:12 (SLOT)
- CSS: выверено вручную, см. `components/button.css` в разделе «Полные CSS-стили всех компонентов»

#### Button icon `[17123:81299]` — 153 вариантов
**Описание и рекомендации по применению:**
Кнопка-иконка — действие без подписи, когда смысл понятен по иконке и место ограничено: строки таблиц, шапки блоков, панели инструментов.  
Всегда добавляйте тултип с названием действия; если действие важное или неочевидное — берите обычную кнопку с текстом (Button).  


Как выбрать вариант:  
Style=Neutral — обычное действие; Accent — акцентное; Positive — подтверждение; Warning — действие с последствиями; Negative — удаление и необратимое.  
Type=Filled — заметная; Outlined — второй план; Text — в таблицах и шапках, не перетягивает внимание.  
Size=M — основной; S — панели и плотные блоки; XS — строки таблиц и ячейки.  


Состояния: Default, Hover, Press, Disable, Loading.
- **Size** (VARIANT): M, S, XS
- **Style** (VARIANT): Accent, Negative, Neutral, Positive, Warning
- **Type** (VARIANT): Filled, Outlined, Text
- **State** (VARIANT): Default, Disable, Hover, Loading, Press
- CSS: выверено вручную, см. `components/button-icon.css` в разделе «Полные CSS-стили всех компонентов»

#### Button icon group `[53828:5738]` — 2 вариантов
**Описание и рекомендации по применению:**
Группа кнопок-иконок — набор действий одной иконкой рядом: панель инструментов, действия в строке таблицы, шапка карточки.  
Всем кнопкам в группе давайте тултипы; разнородные действия не смешивайте в одну группу.  


Как выбрать вариант: Horizontally — в строку (основной случай), Vertically — в столбец для узких панелей.
- **Orientation** (VARIANT): Horizontally, Vertically
- Прочие свойства: Slot#60176:0 (SLOT)
- CSS: выверено вручную, см. `components/button-icon.css` в разделе «Полные CSS-стили всех компонентов»

#### Button toggle `[17039:71554]` — 12 вариантов
**Описание и рекомендации по применению:**
Кнопка-переключатель — кнопка с состоянием «нажата / не нажата»: режим отображения, фильтр, форматирование.  
Собирается в группы (Toggle buttons); для обычных действий берите Button, для действия одной иконкой — Button icon.  


Как выбрать вариант:  
Type=Filled — активный, выбранный переключатель; Type=Outlined — невыбранный.  
Content=Icon / Text — только иконка (режим понятен по иконке) / с текстом.  
Size=M, S, XS — по плотности интерфейса: M в формах, S и XS в таблицах и панелях.
- **Size** (VARIANT): M, S, XS
- **Type** (VARIANT): Filled, Outlined
- **Content** (VARIANT): Icon, Text
- Прочие свойства: Button container#59885:13 (SLOT)
- Размеры и параметры:
    - ширина: `fit-content` (фикс.)
    - внутренние отступы: `var(--ds-button-toggle-pad-top, 4px) var(--ds-button-toggle-pad-right, 4px) var(--ds-button-toggle-pad-bottom, 4px) var(--ds-button-toggle-pad-left, 4px)`
    - промежуток между элементами: `var(--ds-button-toggle-gap, 4px)`
    - скругление: `var(--ds-button-toggle-border-radius, 12px)`
- Модификаторы (что меняет каждый):
    - `--filled`: фон `var(--ds-color-button-toggle-filled-background, #ffffff)`, color `var(--ds-color-button-accent-outlined-default-text-color, #448aff)`, рамка `none`, тень `none`
    - `--outlined`: фон `var(--ds-color-button-toggle-outlined-background, #ffffff)`, рамка `1px solid var(--ds-color-button-toggle-outlined-border-color, #e0e0e0)`, color `var(--ds-color-button-accent-filled-default-text-color, #ffffff)`, тень `none`
    - `--s`: ширина `var(--ds-size-5x)`, высота `var(--ds-size-5x)`
    - `--xs`: ширина `var(--ds-size-4x)`, высота `var(--ds-size-4x)`
- Разметка:

```html
<div class="ds-button-toggle ds-button-toggle--filled">
  <span class="ds-button-toggle__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-button-toggle__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Button toggle [17039:71554] — 12 вариантов; оси: Size, Type, Content */
.ds-button-toggle {
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-toggle-gap, 4px);
  padding: var(--ds-button-toggle-pad-top, 4px) var(--ds-button-toggle-pad-right, 4px) var(--ds-button-toggle-pad-bottom, 4px) var(--ds-button-toggle-pad-left, 4px);
  border-radius: var(--ds-button-toggle-border-radius, 12px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-button-toggle__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-button-accent-outlined-default-text-color, #448aff);
  white-space: nowrap;
}
.ds-button-toggle__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-button-toggle__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-button-toggle__icon svg path {
  fill: currentColor;
}
.ds-button-toggle--s .ds-button-toggle__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-button-toggle--xs .ds-button-toggle__icon {
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
}
.ds-button-toggle--filled.ds-button-toggle--text {
  background: var(--ds-color-button-toggle-filled-background, #ffffff);
  color: var(--ds-color-button-accent-outlined-default-text-color, #448aff);
  border: none;
  box-shadow: none;
}
.ds-button-toggle--outlined.ds-button-toggle--text {
  background: var(--ds-color-button-toggle-outlined-background, #ffffff);
  border: 1px solid var(--ds-color-button-toggle-outlined-border-color, #e0e0e0);
  color: var(--ds-color-button-accent-filled-default-text-color, #ffffff);
  box-shadow: none;
}
.ds-button-toggle--outlined.ds-button-toggle--icon {
  background: var(--ds-color-button-toggle-outlined-background, #ffffff);
  border: 1px solid var(--ds-color-button-toggle-outlined-border-color, #e0e0e0);
}
.ds-button-toggle--filled.ds-button-toggle--icon {
  background: var(--ds-color-button-toggle-filled-background, #ffffff);
}
```
</details>

#### Card content `[53744:3079]` — 2 вариантов
**Описание и рекомендации по применению:**
Содержимое карточки — область с текстом, значениями или своим набором элементов.  
Как выбрать вариант: готовая раскладка или собственное содержимое.
- **Content** (VARIANT): Custom, Default
- Прочие свойства: Title#56245:7 (BOOLEAN), Content#58799:0 (SLOT)
- CSS: выверено вручную, см. `components/card.css` в разделе «Полные CSS-стили всех компонентов»

#### Card footer `[53744:3139]` — 1 вариантов
**Описание и рекомендации по применению:**
Подвал карточки — кнопки или дополнительная информация под содержимым.  
Добавляйте его только если действия действительно есть — иначе карточка обходится без подвала.
- **Content** (VARIANT): Default
- Прочие свойства: Divider#53753:1 (BOOLEAN)
- CSS: выверено вручную, см. `components/card.css` в разделе «Полные CSS-стили всех компонентов»

#### Card header `[52916:15126]` — 1 вариантов
**Описание и рекомендации по применению:**
Шапка карточки — заголовок, подзаголовок и действия карточки.  
Действия ставьте справа кнопкой-иконкой; заголовок не дублируйте в содержимом.
- **Content** (VARIANT): Default
- Прочие свойства: Divider#53766:0 (BOOLEAN), Title#56245:0 (BOOLEAN), Label up#56245:1 (BOOLEAN), Label down#56245:2 (BOOLEAN)
- CSS: выверено вручную, см. `components/card.css` в разделе «Полные CSS-стили всех компонентов»

#### Card view `[53744:3181]` — 3 вариантов
**Описание и рекомендации по применению:**
Карточка целиком — блок с самостоятельным содержимым: карточка новости на главной iikoWeb, инвойс в E-invoice, карта гостя, адрес в колл-центре.  
Собирается из шапки (Card header), содержимого (Card content) и подвала (Card footer) — лишние части не добавляйте, если их нет на экране.  


Как выбрать вариант:  
Type=Filled — с заливкой, для плиток и списков карточек.  
Type=Outlined — с рамкой, когда карточек много и фон один.  
Type=Shadow — с тенью, когда карточка отделена от фона или кликабельна.
- **Type** (VARIANT): Filled, Outlined, Shadow
- Прочие свойства: Shadow#53237:9 (BOOLEAN)
- CSS: выверено вручную, см. `components/card.css` в разделе «Полные CSS-стили всех компонентов»

#### Checkbox `[53806:5694]` — 21 вариантов
**Описание и рекомендации по применению:**
Чекбокс — выбор нескольких независимых пунктов или включение отдельной настройки.  
Используйте, когда пунктов несколько и можно выбрать любое их число; если выбор строго один — берите Radio button, если это переключатель режима «вкл/выкл» — Slide toggle.  


Состав: квадратный индикатор без подписи. С подписью и support-текстом — Checkbox label; для набора пунктов с общим заголовком — Checkbox group.  


Как выбрать вариант:  
Type=Deselected / Selected — пункт не выбран / выбран.  
Type=Indeterminate — часть вложенных пунктов выбрана (родительский пункт списка).  
Variant=Normal / Error / Disable — обычный, с ошибкой (в группе не выбран обязательный пункт), недоступный.  


Состояния: Default, Hover, Press.
- **Variant** (VARIANT): Disable, Error, Normal
- **Type** (VARIANT): Deselected, Indeterminate, Selected
- **State** (VARIANT): Default, Hover, Press
- CSS: выверено вручную, см. `components/selection.css` в разделе «Полные CSS-стили всех компонентов»

#### Checkbox group `[53810:889]` — 3 вариантов
**Описание и рекомендации по применению:**
Группа чекбоксов — набор пунктов выбора с общим заголовком и общим support-текстом или текстом ошибки.  
Используйте, когда пункты относятся к одному вопросу: «Товары и склад» с подсказкой «Выберите один вариант (обязательно)».  


Состав: заголовок группы (Support up), пункты Checkbox label, общий текст под группой (Support down) — в ошибке он становится текстом ошибки для всей группы.  


Как выбрать вариант:  
Orientation=Vertical — пункты в столбец, основной случай.  
Orientation=Horizontal — в строку, когда пунктов мало и они короткие.  
Orientation=Group — вложенная группа: родительский пункт и подчинённые под ним.
- **Orientation** (VARIANT): Group, Horizontal, Vertical
- Прочие свойства: Slot vertical#57252:0 (SLOT), Slot group#57252:4 (SLOT), Slot horizontal#57252:8 (SLOT), Support up#58195:66 (BOOLEAN), Support down#58195:70 (BOOLEAN)
- CSS: выверено вручную, см. `components/selection.css` в разделе «Полные CSS-стили всех компонентов»

#### Checkbox label `[53810:880]` — 9 вариантов
**Описание и рекомендации по применению:**
Чекбокс с подписью — основной способ показать пункт выбора: индикатор + текст, при необходимости support-текст под подписью.  
Используйте в настройках и формах: «Фасовки у товаров», «Добавлять товары, которых не было в заказе».  


Состав: чекбокс слева или справа от подписи (Checkbox left / Checkbox right), Label, Support text.  
Кликабельна вся строка вместе с подписью — не ставьте отдельный текст рядом с чекбоксом.  


Как выбрать вариант:  
Type=Deselected / Selected / Inderterminate — не выбран / выбран / частичный выбор.  
Variant=Normal / Error / Disable — обычный, с ошибкой (support-текст становится текстом ошибки), недоступный.
- **Variant** (VARIANT): Disable, Error, Normal
- **Type** (VARIANT): Deselected, Inderterminate, Selected
- Прочие свойства: Checkbox left#17172:1340 (BOOLEAN), Checkbox right#17172:1349 (BOOLEAN), Label#54065:0 (BOOLEAN), Support text#58192:0 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `var(--ds-size-5x)`, растёт по контенту
    - ширина: `fit-content` (фикс.)
    - промежуток между элементами: `var(--ds-checkbox-label-gap-support, 4px)`
- Модификаторы (что меняет каждый):
    - `--disable`: color `var(--ds-color-checkbox-label-text-disable-color, #9e9e9e)`
    - `--error`: color `var(--ds-color-checkbox-label-text-color, #333333)`
    - `--normal`: color `var(--ds-color-checkbox-label-text-color, #333333)`
- Разметка:

```html
<div class="ds-checkbox-label ds-checkbox-label--disable">
  <div class="ds-checkbox-label__form"></div>
  <span class="ds-checkbox-label__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-checkbox-label__label">Текст</span>
  <div class="ds-checkbox-label__left"></div>
  <div class="ds-checkbox-label__right"></div>
  <span class="ds-checkbox-label__support">Текст</span>
  <div class="ds-checkbox-label__support-text"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Checkbox label [53810:880] — 9 вариантов; оси: Variant, Type */
.ds-checkbox-label {
  min-height: var(--ds-size-5x);
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: var(--ds-checkbox-label-gap-support, 4px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-checkbox-label__label {
  font-size: var(--ds-typography-font-size-3-5x);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-line-height-5x);
  letter-spacing: 0.25px;
  color: var(--ds-color-checkbox-label-text-color, #333333);
  white-space: nowrap;
}
.ds-checkbox-label__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-checkbox-label__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-checkbox-label__icon svg path {
  fill: currentColor;
}
.ds-checkbox-label__form {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-checkbox-label-gap, 8px);
}
.ds-checkbox-label__left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-checkbox-label__right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-checkbox-label__support {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 var(--ds-checkbox-label-pad-left-support-7x, 28px);
}
.ds-checkbox-label__support-text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-checkbox-label-text-support-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-checkbox-label-text-support-color, #616161);
}
.ds-checkbox-label--normal.ds-checkbox-label--deselected {
  color: var(--ds-color-checkbox-label-text-color, #333333);
}
.ds-checkbox-label--normal.ds-checkbox-label--selected {
  color: var(--ds-color-checkbox-label-text-color, #333333);
}
.ds-checkbox-label--normal.ds-checkbox-label--inderterminate {
  color: var(--ds-color-checkbox-label-text-color, #333333);
}
.ds-checkbox-label--error.ds-checkbox-label--deselected {
  color: var(--ds-color-checkbox-label-text-color, #333333);
}
.ds-checkbox-label--error.ds-checkbox-label--selected {
  color: var(--ds-color-checkbox-label-text-color, #333333);
}
.ds-checkbox-label--error.ds-checkbox-label--inderterminate {
  color: var(--ds-color-checkbox-label-text-color, #333333);
}
.ds-checkbox-label--disable.ds-checkbox-label--deselected {
  color: var(--ds-color-checkbox-label-text-disable-color, #9e9e9e);
}
.ds-checkbox-label--disable.ds-checkbox-label--selected {
  color: var(--ds-color-checkbox-label-text-disable-color, #9e9e9e);
}
.ds-checkbox-label--disable.ds-checkbox-label--inderterminate {
  color: var(--ds-color-checkbox-label-text-disable-color, #9e9e9e);
}
```
</details>

#### Chips `[17168:83542]` — 18 вариантов
**Описание и рекомендации по применению:**
Чип — компактная метка-фильтр или выбранное значение, которое можно снять: применённые фильтры над таблицей, выбранные товары, теги.  
Чип всегда относится к чему-то выбранному пользователем; для статуса объекта берите Status, для количества — Badge.  


Состав: текст, элемент слева (иконка или аватар) и элемент справа (крестик для снятия).  


Как выбрать вариант:  
Type=Filled — выбранный, активный чип; Outlined — доступный к выбору.  
Size=M — основной; S — плотные панели и строки таблиц.  
Состояния: Default, Hover, Focus, Press, Disable.
- **Size** (VARIANT): M, S
- **Type** (VARIANT): Filled, Outlined
- **State** (VARIANT): Default, Disable, Focus, Hover, Press
- Прочие свойства: Element left#17172:1340 (BOOLEAN), Element right#17172:1349 (BOOLEAN)
- Размеры и параметры:
    - высота: `var(--ds-size-8x)` (фикс.)
    - ширина: `fit-content` (фикс.)
    - внутренние отступы: `var(--ds-chips-m-size-pad-top, 6px) var(--ds-chips-m-size-pad-right, 8px) var(--ds-chips-m-size-pad-bottom, 6px) var(--ds-chips-m-size-pad-left, 8px)`
    - промежуток между элементами: `var(--ds-chips-m-size-gap, 8px)`
    - скругление: `var(--ds-chips-m-size-border-radius, 12px)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--filled`: фон `var(--ds-color-chips-filled-default-background, #f8f9fc)`, color `var(--ds-color-chips-text-color, #333333)`, фон `var(--ds-color-chips-disable-background-filled, #ebebeb)`, color `var(--ds-color-chips-disable-text-color, #9e9e9e)`
    - `--outlined`: фон `var(--ds-color-chips-outlined-default-background, #ffffff)`, рамка `1px solid var(--ds-color-chips-outlined-default-border-color, #e0e0e0)`, color `var(--ds-color-chips-text-color, #333333)`, фон `var(--ds-color-chips-disable-background-outlined, #ffffff)`
    - `--s`: промежуток между элементами `var(--ds-chips-s-size-gap, 4px)`, внутренние отступы `var(--ds-chips-s-size-pad-top, 4px) var(--ds-chips-s-size-pad-right, 6px) var(--ds-chips-s-size-pad-bottom, 4px) var(--ds-chips-s-size-pad-left, 6px)`, скругление `var(--ds-chips-s-size-border-radius, 8px)`, ширина `var(--ds-size-4x)`
- Состояния: `:active` (нажатие), `:disabled` (неактивно), `:focus-visible`, `:hover` (наведение)
- Разметка:

```html
<div class="ds-chips ds-chips--disabled">
  <div class="ds-chips__add"></div>
  <div class="ds-chips__chip-container"></div>
  <div class="ds-chips__chip-text"></div>
  <div class="ds-chips__close"></div>
  <span class="ds-chips__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-chips__icon-size"></div>
  <span class="ds-chips__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Chips [17168:83542] — 18 вариантов; оси: Size, Type, State */
.ds-chips {
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: var(--ds-size-8x);
  padding: var(--ds-chips-m-size-pad-top, 6px) var(--ds-chips-m-size-pad-right, 8px) var(--ds-chips-m-size-pad-bottom, 6px) var(--ds-chips-m-size-pad-left, 8px);
  gap: var(--ds-chips-m-size-gap, 8px);
  border-radius: var(--ds-chips-m-size-border-radius, 12px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-text-color, #333333);
  white-space: nowrap;
}
.ds-chips__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-chips-icon-color);
}
.ds-chips__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-chips__icon svg path {
  fill: currentColor;
}
.ds-chips__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-chips__add {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-chips__chip-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
}
.ds-chips__chip-text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-chips-text-color, #333333);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-text-color, #333333);
}
.ds-chips__close {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-chips--s {
  gap: var(--ds-chips-s-size-gap, 4px);
  padding: var(--ds-chips-s-size-pad-top, 4px) var(--ds-chips-s-size-pad-right, 6px) var(--ds-chips-s-size-pad-bottom, 4px) var(--ds-chips-s-size-pad-left, 6px);
  border-radius: var(--ds-chips-s-size-border-radius, 8px);
}
.ds-chips--s .ds-chips__icon {
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
}
.ds-chips--outlined {
  background: var(--ds-color-chips-outlined-default-background, #ffffff);
  border: 1px solid var(--ds-color-chips-outlined-default-border-color, #e0e0e0);
  color: var(--ds-color-chips-text-color, #333333);
}
.ds-chips--outlined:hover {
  background: var(--ds-color-chips-outlined-hover-background, #ffffff);
  border: 1px solid var(--ds-color-chips-outlined-hover-border-color, #9e9e9e);
}
.ds-chips--outlined:focus-visible {
  background: var(--ds-color-chips-outlined-focus-background, #ffffff);
}
.ds-chips--outlined:active {
  background: var(--ds-color-chips-outlined-press-background, #e0e0e0);
  border: 1px solid var(--ds-color-chips-outlined-press-border-color, #e0e0e0);
}
.ds-chips--outlined:disabled {
  background: var(--ds-color-chips-disable-background-outlined, #ffffff);
  border: 1px solid var(--ds-color-chips-disable-border-color, #ebebeb);
  color: var(--ds-color-chips-disable-text-color, #9e9e9e);
}
.ds-chips--outlined.ds-chips--disabled {
  background: var(--ds-color-chips-disable-background-outlined, #ffffff);
  border: 1px solid var(--ds-color-chips-disable-border-color, #ebebeb);
  color: var(--ds-color-chips-disable-text-color, #9e9e9e);
}
.ds-chips--filled {
  background: var(--ds-color-chips-filled-default-background, #f8f9fc);
  color: var(--ds-color-chips-text-color, #333333);
}
.ds-chips--filled:hover {
  background: var(--ds-color-chips-filled-hover-background, #f5f5f5);
}
.ds-chips--filled:active {
  background: var(--ds-color-chips-filled-press-background, #e0e0e0);
}
.ds-chips--filled:disabled {
  background: var(--ds-color-chips-disable-background-filled, #ebebeb);
  color: var(--ds-color-chips-disable-text-color, #9e9e9e);
}
.ds-chips--filled.ds-chips--disabled {
  background: var(--ds-color-chips-disable-background-filled, #ebebeb);
  color: var(--ds-color-chips-disable-text-color, #9e9e9e);
}
.ds-chips--disabled {
  pointer-events: none;
}
```
</details>

#### Chips group `[55750:5485]` — 2 вариантов
**Описание и рекомендации по применению:**
Группа чипов — набор фильтров или выбранных значений в один ряд с переносом на новую строку.  
Берите группу, чтобы зазоры и перенос были одинаковыми; при большом числе чипов сворачивайте лишние в «ещё N».  


Как выбрать вариант: по размеру чипов в группе.
- **Size** (VARIANT): M, S
- Прочие свойства: Slot#60220:1 (SLOT)
- Размеры и параметры:
    - ширина: `fit-content` (фикс.)
    - промежуток между элементами: `var(--ds-chips-gap-group, 8px)`
- Модификаторы (что меняет каждый):
    - `--s`: ширина `var(--ds-size-4x)`, высота `var(--ds-size-4x)`
- Разметка:

```html
<div class="ds-chips-group ds-chips-group--s">
  <span class="ds-chips-group__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-chips-group__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Chips group [55750:5485] — 2 вариантов; оси: Size */
.ds-chips-group {
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-chips-gap-group, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips-group__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-text-color, #333333);
  white-space: nowrap;
}
.ds-chips-group__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-chips-icon-color);
}
.ds-chips-group__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-chips-group__icon svg path {
  fill: currentColor;
}
.ds-chips-group--s .ds-chips-group__icon {
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
}
```
</details>

#### Chips Input `[52916:14622]` — 16 вариантов
**Описание и рекомендации по применению:**
Поле ввода тегов — несколько значений в одном поле, каждое становится чипом: список товаров, получатели, метки.  
Берите его, когда значений несколько и их набирают вручную; для одного значения из справочника — Autocomplete, для выбора из списка — Select.  


Как выбрать вариант:  
Size=M — основной; S — плотные формы и панели.  
Состояния: Default, Hover, Focus, Focus+Placeholder, Focus+Value, Error, Error+Hover, Disable.
- **Size** (VARIANT): M, S
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Прочие свойства: Support text#55693:0 (BOOLEAN), Element right#55751:38 (BOOLEAN), Support#59392:7 (BOOLEAN), Hint text#59430:0 (BOOLEAN), Label text value#59432:1 (TEXT), Support text value#59437:20 (TEXT), Hint text value#59437:40 (TEXT), Action text#59437:60 (BOOLEAN), Action text value#59437:80 (TEXT), Placeholder value#59507:0 (TEXT), Text value#59507:16 (TEXT), Slot#60231:21 (SLOT)
- Размеры и параметры:
    - ширина: `280px` (фикс.)
    - промежуток между элементами: `var(--ds-size-1x)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--s`: промежуток между элементами `var(--ds-form-field-gap-input-support, 4px)`, ширина `var(--ds-size-5x)`, высота `var(--ds-size-5x)`
- Состояния: `:disabled` (неактивно), `:focus-visible`, `:hover` (наведение)
- Разметка:

```html
<div class="ds-chips-input ds-chips-input--disabled">
  <div class="ds-chips-input__content"></div>
  <div class="ds-chips-input__frame"></div>
  <span class="ds-chips-input__hint">Текст</span>
  <span class="ds-chips-input__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-chips-input__label">Текст</span>
  <span class="ds-chips-input__support">Текст</span>
  <span class="ds-chips-input__text">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Chips Input [52916:14622] — 16 вариантов; оси: Size, State */
.ds-chips-input {
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-1x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips-input__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: #616161;
  white-space: nowrap;
}
.ds-chips-input__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-chips-icon-color);
}
.ds-chips-input__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-chips-input__icon svg path {
  fill: currentColor;
}
.ds-chips-input__frame {
  display: flex;
  flex-direction: column;
  gap: var(--ds-chips-input-gap-chips-input-frame, 4px);
  padding: var(--ds-chips-input-m-size-pad-top, 4px) var(--ds-size-3x) var(--ds-chips-input-m-size-pad-bottom, 8px) var(--ds-size-3x);
  border-radius: var(--ds-size-3x);
  background: #f8f9fc;
  border: 1px solid #e0e0e0;
}
.ds-chips-input__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
}
.ds-chips-input__support {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-1x);
}
.ds-chips-input__text {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: 0 var(--ds-size-3x) 0 var(--ds-size-3x);
}
.ds-chips-input__hint {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: 0 var(--ds-size-3x) 0 var(--ds-size-3x);
}
.ds-chips-input--s {
  gap: var(--ds-form-field-gap-input-support, 4px);
}
.ds-chips-input--s .ds-chips-input__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-chips-input:hover {
  background: #f5f5f5;
  border: 1px solid #9e9e9e;
}
.ds-chips-input:focus-visible {
  color: #448aff;
}
.ds-chips-input:disabled {
  color: #9e9e9e;
}
.ds-chips-input.ds-chips-input--disabled {
  color: #9e9e9e;
}
.ds-chips-input--disabled {
  pointer-events: none;
}
```
</details>

#### Chips Input `[61382:55775]` — 16 вариантов
_Описание компонента в Figma отсутствует._
- **Size** (VARIANT): M, S
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Прочие свойства: Support text#55693:0 (BOOLEAN), Element right#55751:38 (BOOLEAN), Support#59392:7 (BOOLEAN), Hint text#59430:0 (BOOLEAN), Label text value#59432:1 (TEXT), Support text value#59437:20 (TEXT), Hint text value#59437:40 (TEXT), Action text#59437:60 (BOOLEAN), Action text value#59437:80 (TEXT), Placeholder value#59507:0 (TEXT), Text value#59507:16 (TEXT), Slot#60231:21 (SLOT)
- Размеры и параметры:
    - ширина: `280px` (фикс.)
    - промежуток между элементами: `var(--ds-form-field-gap-input-support, 4px)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--s`: ширина `var(--ds-size-5x)`, высота `var(--ds-size-5x)`
- Состояния: `:disabled` (неактивно), `:focus-visible`, `:hover` (наведение)
- Разметка:

```html
<div class="ds-chips-input-2 ds-chips-input-2--disabled">
  <div class="ds-chips-input-2__content"></div>
  <div class="ds-chips-input-2__frame"></div>
  <span class="ds-chips-input-2__hint">Текст</span>
  <span class="ds-chips-input-2__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-chips-input-2__label">Текст</span>
  <span class="ds-chips-input-2__support">Текст</span>
  <span class="ds-chips-input-2__text">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Chips Input [61382:55775] — 16 вариантов; оси: Size, State; ДУБЛЬ имени — второй сет «Chips Input», различать по node_id */
.ds-chips-input-2 {
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support, 4px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips-input-2__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
  white-space: nowrap;
}
.ds-chips-input-2__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-chips-icon-color);
}
.ds-chips-input-2__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-chips-input-2__icon svg path {
  fill: currentColor;
}
.ds-chips-input-2__frame {
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  padding: var(--ds-form-field-m-size-pad-input-top, 12px) var(--ds-form-field-m-size-pad-input-right, 12px) var(--ds-form-field-m-size-pad-input-bottom, 12px) var(--ds-form-field-m-size-pad-input-left, 12px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-chips-input-2__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-content);
}
.ds-chips-input-2__support {
  display: flex;
  flex-direction: row;
  gap: var(--ds-form-field-gap-input-support, 4px);
}
.ds-chips-input-2__text {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: 0 var(--ds-form-field-pad-support-right, 12px) 0 var(--ds-form-field-pad-support-left, 12px);
}
.ds-chips-input-2__hint {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: 0 var(--ds-form-field-pad-support-right, 12px) 0 var(--ds-form-field-pad-support-left, 12px);
}
.ds-chips-input-2--s .ds-chips-input-2__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-chips-input-2:hover {
  color: var(--ds-color-form-field-filled-hover-label-text-color, #616161);
}
.ds-chips-input-2:focus-visible {
  color: var(--ds-color-form-field-filled-focus-label-text-color, #448aff);
}
.ds-chips-input-2:disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-chips-input-2.ds-chips-input-2--disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-chips-input-2--disabled {
  pointer-events: none;
}
```
</details>

#### Chips input cell `[60231:75648]` — 8 вариантов
**Описание и рекомендации по применению:**
Ввод тегов внутри ячейки таблицы — несколько значений прямо в строке: комплектующие, метки, склады.  
Используйте в редактируемых таблицах; вне таблицы берите Chips Input.  


Состояния: Default, Hover, Focus, Focus+Placeholder, Focus+Value, Error, Error+Hover, Disable.
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Размеры и параметры:
    - высота: минимум `var(--ds-size-10x)`, растёт по контенту
    - ширина: `fit-content` (фикс.)
    - внутренние отступы: `var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px)`
    - промежуток между элементами: `var(--ds-size-2x)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
- Состояния: `:disabled` (неактивно), `:focus-visible`, `:hover` (наведение)
- Разметка:

```html
<div class="ds-chips-input-cell ds-chips-input-cell--disabled">
  <div class="ds-chips-input-cell__frame"></div>
  <span class="ds-chips-input-cell__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-chips-input-cell__label">Текст</span>
  <span class="ds-chips-input-cell__support">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Chips input cell [60231:75648] — 8 вариантов; оси: State */
.ds-chips-input-cell {
  min-height: var(--ds-size-10x);
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips-input-cell__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: #616161;
  white-space: nowrap;
}
.ds-chips-input-cell__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-chips-icon-color);
}
.ds-chips-input-cell__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-chips-input-cell__icon svg path {
  fill: currentColor;
}
.ds-chips-input-cell__frame {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-chips-input-gap-chips-input-frame, 4px);
  border-radius: var(--ds-size-3x);
  background: #f8f9fc;
  border: 1px solid #e0e0e0;
}
.ds-chips-input-cell__support {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-1x);
}
.ds-chips-input-cell:hover {
  border: 1px solid var(--ds-color-table-cell-content-hover-border-color, #9e9e9e);
}
.ds-chips-input-cell:focus-visible {
  color: #333333;
}
.ds-chips-input-cell:disabled {
  color: #9e9e9e;
}
.ds-chips-input-cell.ds-chips-input-cell--disabled {
  color: #9e9e9e;
}
.ds-chips-input-cell--disabled {
  pointer-events: none;
}
```
</details>

#### Control arrow button `[52868:3935]` — 3 вариантов
**Описание и рекомендации по применению:**
Кнопка-стрелка — шаг по списку или календарю: предыдущий и следующий месяц, прокрутка вкладок, перелистывание.  
Используйте парой (назад и вперёд); когда шаг недоступен — блокируйте кнопку, а не убирайте её.  


Как выбрать вариант: по размеру блока, в котором стоит кнопка.
- **Size** (VARIANT): M, S, XS
- Размеры и параметры:
    - ширина: `fit-content` (фикс.)
    - промежуток между элементами: `var(--ds-size-0-5x)`
- Модификаторы (что меняет каждый):
    - `--s`: ширина `var(--ds-size-3x)`, высота `var(--ds-size-3x)`
- Разметка:

```html
<div class="ds-control-arrow-button ds-control-arrow-button--s">
  <span class="ds-control-arrow-button__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-control-arrow-button__icon-size"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Control arrow button [52868:3935] — 3 вариантов; оси: Size */
.ds-control-arrow-button {
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-0-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-control-arrow-button__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: var(--ds-size-3x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-control-arrow-button__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-control-arrow-button__icon svg path {
  fill: currentColor;
}
.ds-control-arrow-button__icon-size {
  height: var(--ds-size-3x);
  display: flex;
  flex-direction: row;
}
.ds-control-arrow-button--s .ds-control-arrow-button__icon {
  width: var(--ds-size-3x);
  height: var(--ds-size-3x);
}
```
</details>

#### Control Panel `[58501:4052]` — 3 вариантов
**Описание и рекомендации по применению:**
Панель управления календарём — переключение месяца и года, строка дней недели над сеткой.  
Служебный компонент календаря: используется внутри Datepicker.  


Как выбрать вариант: панель переключения периода, строка дней недели или заголовок сетки.
- **Type** (VARIANT): Calendar, Control, Week
- Прочие свойства: Slot Week#58546:5 (SLOT)
- Размеры и параметры:
    - ширина: `280px` (фикс.)
    - внутренние отступы: `var(--ds-size-1x) 0 var(--ds-size-1x) 0`
    - промежуток между элементами: `74px`
- Модификаторы (что меняет каждый):
    - `--calendar`: ширина `fit-content`, направление `column`, align-items `center`, фон `#ffffff`
    - `--control`: направление `row`, align-items `center`, color `var(--ds-color-text-primary, #333333)`
    - `--week`: ширина `fit-content`, направление `row`, внутренние отступы `var(--ds-size-0-5x) 0 var(--ds-size-0-5x) 0`, color `var(--ds-color-text-primary, #333333)`
- Разметка:

```html
<div class="ds-control-panel ds-control-panel--calendar">
  <div class="ds-control-panel__button-icon"></div>
  <div class="ds-control-panel__button-icon-group"></div>
  <div class="ds-control-panel__elements"></div>
  <span class="ds-control-panel__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-control-panel__label">Текст</span>
  <div class="ds-control-panel__month"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Control Panel [58501:4052] — 3 вариантов; оси: Type */
.ds-control-panel {
  display: flex;
  width: 280px;
  padding: var(--ds-size-1x) 0 var(--ds-size-1x) 0;
  gap: 74px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-control-panel__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-text-primary, #333333);
  white-space: nowrap;
}
.ds-control-panel__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-control-panel__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-control-panel__icon svg path {
  fill: currentColor;
}
.ds-control-panel__elements {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2-5x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2x);
  border-radius: var(--ds-radius-circular, 9999px);
  background: var(--ds-color-brand-neutral-default, #ffffff);
}
.ds-control-panel__month {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-primary, #333333);
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-text-primary, #333333);
}
.ds-control-panel__button-icon-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap, 8px);
}
.ds-control-panel__button-icon {
  display: flex;
  flex-direction: row;
  gap: var(--ds-button-icon-gap, 8px);
  padding: var(--ds-button-icon-m-size-pad-top, 8px) var(--ds-button-icon-m-size-pad-right, 8px) var(--ds-button-icon-m-size-pad-bottom, 8px) var(--ds-button-icon-m-size-pad-left, 8px);
  border-radius: var(--ds-button-icon-border-radius, 8px);
}
.ds-control-panel--control {
  flex-direction: row;
  align-items: center;
  color: var(--ds-color-text-primary, #333333);
}
.ds-control-panel--week {
  width: fit-content;
  flex-direction: row;
  padding: var(--ds-size-0-5x) 0 var(--ds-size-0-5x) 0;
  color: var(--ds-color-text-primary, #333333);
}
.ds-control-panel--calendar {
  width: fit-content;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  color: var(--ds-color-text-primary, #333333);
}
```
</details>

#### Control Panel `[58982:11018]` — 2 вариантов
**Описание и рекомендации по применению:**
Панель управления выбором времени — заголовок и переключение между часами и минутами.  
Служебный компонент выбора времени: используется внутри Timepicker.  


Как выбрать вариант: панель переключения или строка со значением времени.
- **Type** (VARIANT): Control, Time
- Прочие свойства: Slot Time#58546:5 (SLOT)
- Размеры и параметры:
    - ширина: `280px` (фикс.)
    - внутренние отступы: `var(--ds-size-1x) 0 var(--ds-size-1x) 0`
    - промежуток между элементами: `74px`
- Модификаторы (что меняет каждый):
    - `--control`: align-items `center`, color `var(--ds-color-text-primary, #333333)`
    - `--time`: ширина `fit-content`, внутренние отступы `var(--ds-size-0-5x) 0 var(--ds-size-0-5x) 0`, color `var(--ds-color-text-primary, #333333)`
- Разметка:

```html
<div class="ds-control-panel-2 ds-control-panel-2--control">
  <div class="ds-control-panel-2__button-icon-group"></div>
  <div class="ds-control-panel-2__elements"></div>
  <span class="ds-control-panel-2__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-control-panel-2__label">Текст</span>
  <div class="ds-control-panel-2__month"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Control Panel [58982:11018] — 2 вариантов; оси: Type; ДУБЛЬ имени — второй сет «Control Panel», различать по node_id */
.ds-control-panel-2 {
  display: flex;
  flex-direction: row;
  width: 280px;
  padding: var(--ds-size-1x) 0 var(--ds-size-1x) 0;
  gap: 74px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-control-panel-2__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-text-primary, #333333);
  white-space: nowrap;
}
.ds-control-panel-2__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-control-panel-2__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-control-panel-2__icon svg path {
  fill: currentColor;
}
.ds-control-panel-2__elements {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2-5x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2x);
  border-radius: var(--ds-radius-circular, 9999px);
  background: var(--ds-color-brand-neutral-default, #ffffff);
}
.ds-control-panel-2__month {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-primary, #333333);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-text-primary, #333333);
}
.ds-control-panel-2__button-icon-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-icon-gap, 8px);
}
.ds-control-panel-2--control {
  align-items: center;
  color: var(--ds-color-text-primary, #333333);
}
.ds-control-panel-2--time {
  width: fit-content;
  padding: var(--ds-size-0-5x) 0 var(--ds-size-0-5x) 0;
  color: var(--ds-color-text-primary, #333333);
}
```
</details>

#### Datepicker `[58509:5439]` — 3 вариантов
**Описание и рекомендации по применению:**
Календарь — выбор даты или периода: дата поставки, период отчёта, срок.  
Открывается из поля даты (Input Datepicker); отдельно на экране не живёт.  


Как выбрать вариант:  
Type=Day — сетка дней месяца, основной вид.  
Type=Month — выбор месяца.  
Type=Year — выбор года.
- **Type** (VARIANT): Day, Month, Year
- Прочие свойства: Headline#53001:0 (TEXT), Supporting text#53001:4 (TEXT), Supporting text (range)#53001:8 (TEXT), Headline (range)#53001:12 (TEXT), Show clear button#54584:0 (BOOLEAN), show controls#58548:10 (BOOLEAN)
- Размеры и параметры:
    - ширина: `fit-content` (фикс.)
    - внутренние отступы: `var(--ds-size-2x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-4x)`
    - скругление: `var(--ds-size-3x)`
    - рамка: `1px solid var(--ds-color-stroke-default, #e0e0e0)`
- Модификаторы (что меняет каждый):
    - `--day`: color `var(--ds-color-text-primary, #333333)`
    - `--month`: color `var(--ds-color-text-primary, #333333)`
    - `--year`: color `var(--ds-color-text-primary, #333333)`
- Разметка:

```html
<div class="ds-datepicker ds-datepicker--day">
  <div class="ds-datepicker__button-icon-group"></div>
  <div class="ds-datepicker__control-panel"></div>
  <div class="ds-datepicker__divider"></div>
  <div class="ds-datepicker__elements"></div>
  <span class="ds-datepicker__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-datepicker__label">Текст</span>
  <div class="ds-datepicker__week-6"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Datepicker [58509:5439] — 3 вариантов; оси: Type */
.ds-datepicker {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--ds-size-2x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-4x);
  border-radius: var(--ds-size-3x);
  border: 1px solid var(--ds-color-stroke-default, #e0e0e0);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-datepicker__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-text-primary, #333333);
  white-space: nowrap;
}
.ds-datepicker__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-datepicker__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-datepicker__icon svg path {
  fill: currentColor;
}
.ds-datepicker__control-panel {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 74px;
  padding: var(--ds-size-1x) 0 var(--ds-size-1x) 0;
}
.ds-datepicker__elements {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2-5x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2x);
  border-radius: var(--ds-radius-circular, 9999px);
  background: var(--ds-color-brand-neutral-default, #ffffff);
}
.ds-datepicker__button-icon-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap, 8px);
}
.ds-datepicker__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-datepicker__week-6 {
  height: 48px;
  display: flex;
  flex-direction: row;
}
.ds-datepicker--day {
  color: var(--ds-color-text-primary, #333333);
}
.ds-datepicker--year {
  color: var(--ds-color-text-primary, #333333);
}
.ds-datepicker--month {
  color: var(--ds-color-text-primary, #333333);
}
```
</details>

#### Dialog content `[53535:1369]` — 1 вариантов
**Описание и рекомендации по применению:**
Содержимое диалога — область под шапкой: текст, форма, таблица.  
При длинном содержимом прокручивается именно эта область, шапка и подвал остаются на месте.
- **State** (VARIANT): Default
- Прочие свойства: Slot#58937:21 (SLOT), Scroll#58937:24 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `204px`, растёт по контенту
    - ширина: `500px` (фикс.)
    - фон: `var(--ds-color-dialog-background, #ffffff)`
- Разметка:

```html
<div class="ds-dialog-content">
  <div class="ds-dialog-content__background"></div>
  <span class="ds-dialog-content__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-dialog-content__label">Текст</span>
  <div class="ds-dialog-content__scroll"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Dialog content [53535:1369] — 1 вариантов; оси: State */
.ds-dialog-content {
  min-height: 204px;
  width: 500px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-dialog-background, #ffffff);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-content__label {
  font-size: var(--ds-font-body-m-16-normal-medium-size);
  line-height: var(--ds-font-body-m-16-normal-medium-line);
  letter-spacing: var(--ds-font-body-m-16-normal-medium-spacing);
  font-weight: var(--ds-font-body-m-16-normal-medium-weight);
  color: var(--ds-color-dialog-content-title-color, #333333);
  white-space: nowrap;
}
.ds-dialog-content__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: var(--ds-size-3x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-dialog-content__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-dialog-content__icon svg path {
  fill: currentColor;
}
.ds-dialog-content__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-top, 2px) var(--ds-scroll-pad-right, 2px) var(--ds-scroll-pad-bottom, 2px) var(--ds-scroll-pad-left, 2px);
}
.ds-dialog-content__background {
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-scroll-border-radius, 8px);
  background: var(--ds-color-scroll-default-background, #fafafa);
}
```
</details>

#### Dialog footer `[53749:638]` — 1 вариантов
**Описание и рекомендации по применению:**
Подвал диалога — кнопки действий окна: главное действие справа, отмена слева от него.  
Главное действие называйте по смыслу («Создать», «Сохранить»), а не «ОК».
- **State** (VARIANT): Default
- Прочие свойства: Divider#53749:3 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `69px`, растёт по контенту
    - ширина: `501px` (фикс.)
    - фон: `var(--ds-color-dialog-background, #ffffff)`
- Разметка:

```html
<div class="ds-dialog-footer">
  <div class="ds-dialog-footer__action"></div>
  <div class="ds-dialog-footer__button"></div>
  <div class="ds-dialog-footer__divider"></div>
  <span class="ds-dialog-footer__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-dialog-footer__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Dialog footer [53749:638] — 1 вариантов; оси: State */
.ds-dialog-footer {
  min-height: 69px;
  width: 501px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-dialog-background, #ffffff);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-footer__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-button-accent-filled-default-text-color, #ffffff);
  white-space: nowrap;
}
.ds-dialog-footer__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-dialog-footer__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-dialog-footer__icon svg path {
  fill: currentColor;
}
.ds-dialog-footer__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-dialog-footer__action {
  height: 68px;
  display: flex;
  flex-direction: column;
  padding: var(--ds-dialog-footer-pad-top, 16px) var(--ds-dialog-footer-pad-right, 24px) var(--ds-dialog-footer-pad-bottom, 16px) var(--ds-dialog-footer-pad-left, 24px);
}
.ds-dialog-footer__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-m-size-gap, 8px);
  padding: var(--ds-button-m-size-pad-top, 8px) var(--ds-button-m-size-pad-right, 12px) var(--ds-button-m-size-pad-bottom, 8px) var(--ds-button-m-size-pad-left, 12px);
  border-radius: var(--ds-button-border-radius, 8px);
  background: var(--ds-color-button-accent-filled-default-background, #448aff);
  box-shadow: var(--ds-shadow-shadows-01-dp-sl);
}
```
</details>

#### Dialog header `[53535:1322]` — 2 вариантов
**Описание и рекомендации по применению:**
Шапка диалога — заголовок окна и кнопка закрытия, при необходимости картинка над заголовком.  
Заголовок формулируйте по задаче окна («Создание накладной»), а не «Внимание».  


Как выбрать вариант: только текст или с картинкой сверху.
- **Type** (VARIANT): Picture, Text
- Прочие свойства: Divider#53619:9 (BOOLEAN), Close#59197:0 (BOOLEAN), Picture#59215:10 (SLOT), Description#59215:16 (BOOLEAN)
- Размеры и параметры:
    - ширина: `500px` (фикс.)
    - фон: `var(--ds-color-dialog-background, #ffffff)`
- Модификаторы (что меняет каждый):
    - `--text`: color `var(--ds-color-dialog-header-title-color, #333333)`
- Разметка:

```html
<div class="ds-dialog-header ds-dialog-header--text">
  <div class="ds-dialog-header__description"></div>
  <div class="ds-dialog-header__divider"></div>
  <span class="ds-dialog-header__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-dialog-header__label">Текст</span>
  <div class="ds-dialog-header__title-container"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Dialog header [53535:1322] — 2 вариантов; оси: Type */
.ds-dialog-header {
  width: 500px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-dialog-background, #ffffff);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-header__label {
  font-size: var(--ds-font-header-s-20-normal-medium-size);
  line-height: var(--ds-font-header-s-20-normal-medium-line);
  letter-spacing: var(--ds-font-header-s-20-normal-medium-spacing);
  font-weight: var(--ds-font-header-s-20-normal-medium-weight);
  color: var(--ds-color-dialog-header-title-color, #333333);
  white-space: nowrap;
}
.ds-dialog-header__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-dialog-header__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-dialog-header__icon svg path {
  fill: currentColor;
}
.ds-dialog-header__title-container {
  display: flex;
  flex-direction: row;
  gap: var(--ds-dialog-header-gap, 8px);
}
.ds-dialog-header__description {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-dialog-header-desc-color, #616161);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-dialog-header-desc-color, #616161);
}
.ds-dialog-header__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-dialog-header--text {
  color: var(--ds-color-dialog-header-title-color, #333333);
}
```
</details>

#### Dialog view `[52952:1285]` — 1 вариантов
**Описание и рекомендации по применению:**
Диалог целиком — модальное окно поверх экрана: подтверждение, форма создания, просмотр записи.  
Берите его как основу окна: шапка (Dialog header), содержимое (Dialog content), подвал с кнопками (Dialog footer), затемнение под окном (Backdrop).  
Закрытие — крестик в шапке и кнопка в подвале; не оставляйте окно без явного способа закрыть.
- **State** (VARIANT): Default
- Прочие свойства: Content#58947:4 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `364px`, растёт по контенту
    - ширина: `500px` (фикс.)
    - скругление: `var(--ds-dialog-border-radius, 12px)`
    - фон: `var(--ds-color-dialog-background, #ffffff)`
    - тень: `var(--ds-shadow-shadows-12-dp-m)`
- Разметка:

```html
<div class="ds-dialog-view">
  <div class="ds-dialog-view__action"></div>
  <div class="ds-dialog-view__content"></div>
  <div class="ds-dialog-view__divider"></div>
  <div class="ds-dialog-view__footer"></div>
  <div class="ds-dialog-view__header"></div>
  <span class="ds-dialog-view__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-dialog-view__label">Текст</span>
  <div class="ds-dialog-view__scroll"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Dialog view [52952:1285] — 1 вариантов; оси: State */
.ds-dialog-view {
  min-height: 364px;
  width: 500px;
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-dialog-border-radius, 12px);
  background: var(--ds-color-dialog-background, #ffffff);
  box-shadow: var(--ds-shadow-shadows-12-dp-m);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-view__label {
  font-size: var(--ds-font-header-s-20-normal-medium-size);
  line-height: var(--ds-font-header-s-20-normal-medium-line);
  letter-spacing: var(--ds-font-header-s-20-normal-medium-spacing);
  font-weight: var(--ds-font-header-s-20-normal-medium-weight);
  color: var(--ds-color-dialog-header-title-color, #333333);
  white-space: nowrap;
}
.ds-dialog-view__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: var(--ds-size-3x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-dialog-view__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-dialog-view__icon svg path {
  fill: currentColor;
}
.ds-dialog-view__header {
  display: flex;
  flex-direction: column;
  background: var(--ds-color-dialog-background, #ffffff);
}
.ds-dialog-view__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-dialog-view__content {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-dialog-background, #ffffff);
}
.ds-dialog-view__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-top, 2px) var(--ds-scroll-pad-right, 2px) var(--ds-scroll-pad-bottom, 2px) var(--ds-scroll-pad-left, 2px);
}
.ds-dialog-view__footer {
  display: flex;
  flex-direction: column;
  background: var(--ds-color-dialog-background, #ffffff);
}
.ds-dialog-view__action {
  height: 68px;
  display: flex;
  flex-direction: column;
  padding: var(--ds-dialog-footer-pad-top, 16px) var(--ds-dialog-footer-pad-right, 24px) var(--ds-dialog-footer-pad-bottom, 16px) var(--ds-dialog-footer-pad-left, 24px);
}
```
</details>

#### Divider `[58320:441]` — 16 вариантов
**Описание и рекомендации по применению:**
Разделитель с состояниями — линия между блоками, которую можно перетаскивать: граница колонок таблицы, граница панелей.  
Лежит на странице UI components (раздел «не готовы или под вопросом») — перед использованием уточните актуальность у владельца ДС. Обычная линия-разделитель — компонент Divider со страницы Divider.  


Как выбрать вариант:  
Type=Solid — сплошная; Dashed — пунктирная (граница, которую можно двигать).  
Size=M, L — по длине и толщине линии.  
Состояния: Lite, Default, Hover, Selected, Disable.
- **Size** (VARIANT): L, M
- **Type** (VARIANT): Dashed, Solid
- **State** (VARIANT): Default, Disable, Hover, Lite, Selected
- CSS: выверено вручную, см. `components/navigation.css` в разделе «Полные CSS-стили всех компонентов»

#### Divider `[53556:7964]` — 1 вариантов
**Описание и рекомендации по применению:**
Разделитель — тонкая линия между блоками или пунктами списка.  
Берите его вместо рамки, когда нужно только разделить содержимое; не ставьте разделители там, где хватает отступа.
- **Type** (VARIANT): Solid
- CSS: выверено вручную, см. `components/navigation.css` в разделе «Полные CSS-стили всех компонентов»

#### Element `[54104:20956]` — 9 вариантов
**Описание и рекомендации по применению:**
Слот элемента в пункте списка — выбирает, что стоит слева или справа от текста пункта: иконка, картинка, чекбокс, переключатель, счётчик.  
Служебный компонент списка: подставляется в List item, отдельно на экран не ставится.  


Как выбрать вариант: по тому, что показывает пункт.
- **Content** (VARIANT): Checkbox, Counter, Icon group, Icon size, Image size, Indicator, Radio button, Slide toggle, Text default
- Размеры и параметры:
    - ширина: `fit-content` (фикс.)
    - промежуток между элементами: `var(--ds-size-2-5x)`
    - фон: `#ffffff`
- Модификаторы (что меняет каждый):
    - `--checkbox`: направление `row`
    - `--counter`: направление `column`, color `var(--ds-color-badge-text-color, #ffffff)`
    - `--icon-group`: направление `row`, align-items `center`
    - `--icon-size`: направление `row`, align-items `center`
    - `--image-size`: направление `row`, align-items `center`
    - `--indicator`: ширина `var(--ds-size-6x)`, направление `row`
    - `--radio-button`: направление `row`
    - `--slide-toggle`: направление `row`, color `var(--ds-color-slide-toggle-text-color, #333333)`
    - `--text-default`: направление `row`, color `var(--ds-color-brand-neutral-super-dark, #333333)`
- Разметка:

```html
<div class="ds-element ds-element--checkbox">
  <span class="ds-element__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-element__image-size"></div>
  <span class="ds-element__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Element [54104:20956] — 9 вариантов; оси: Content */
.ds-element {
  display: flex;
  background: #ffffff;
  width: fit-content;
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-brand-neutral-super-dark, #333333);
  white-space: nowrap;
}
.ds-element__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-element__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-element__icon svg path {
  fill: currentColor;
}
.ds-element__image-size {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  border-radius: var(--ds-size-circular);
}
.ds-element--image-size {
  flex-direction: row;
  align-items: center;
}
.ds-element--icon-size {
  flex-direction: row;
  align-items: center;
}
.ds-element--icon-group {
  flex-direction: row;
  align-items: center;
}
.ds-element--text-default {
  flex-direction: row;
  color: var(--ds-color-brand-neutral-super-dark, #333333);
}
.ds-element--checkbox {
  flex-direction: row;
}
.ds-element--radio-button {
  flex-direction: row;
}
.ds-element--indicator {
  width: var(--ds-size-6x);
  flex-direction: row;
}
.ds-element--slide-toggle {
  flex-direction: row;
  color: var(--ds-color-slide-toggle-text-color, #333333);
}
.ds-element--counter {
  flex-direction: column;
  color: var(--ds-color-badge-text-color, #ffffff);
}
```
</details>

#### Element cell `[58885:32432]` — 11 вариантов
**Описание и рекомендации по применению:**
Слот содержимого ячейки таблицы — выбирает, что стоит внутри ячейки: текст, иконка, кнопка, статус, поле ввода.  
Служебный компонент таблицы: подставляется в ячейку, отдельно на экран не ставится.  


Как выбрать вариант: по тому, что показывает ячейка.
- **Variant** (VARIANT): Button, Button icon, Cell Input, Checkbox, Chips, Icon group, Icon size, Input number, Slide toggle, Status, Text UI
- CSS не требуется: это **слот-контейнер** — пустая обёртка под вложенный компонент (иконку, ячейку). Оформление задаёт вложенный компонент, а размер — контент.

#### Element Form Field `[60231:76795]` — 3 вариантов
**Описание и рекомендации по применению:**
Слот поля внутри ячейки таблицы — выбирает, какое именно поле ввода стоит в редактируемой ячейке.  
Служебный компонент таблицы: подставляется внутрь ячейки, отдельно на экран не ставится.  


Как выбрать вариант: по типу значения в ячейке — обычный ввод, выбор из списка или ввод тегов.
- **Variant** (VARIANT): Chips input cell, Input cell, Select cell
- Размеры и параметры:
    - ширина: `fit-content` (фикс.)
    - фон: `#ffffff`
- Модификаторы (что меняет каждый):
    - `--chips-input-cell`: color `#616161`
    - `--input-cell`: color `var(--ds-color-form-field-filled-default-label-text-color, #616161)`
    - `--select-cell`: color `var(--ds-color-form-field-filled-default-label-text-color, #616161)`
- Разметка:

```html
<div class="ds-element-form-field ds-element-form-field--chips-input-cell">
  <div class="ds-element-form-field__input"></div>
  <div class="ds-element-form-field__input-cell"></div>
  <span class="ds-element-form-field__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Element Form Field [60231:76795] — 3 вариантов; оси: Variant */
.ds-element-form-field {
  width: fit-content;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-form-field__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
  white-space: nowrap;
}
.ds-element-form-field__input-cell {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px);
}
.ds-element-form-field__input {
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support, 4px);
}
.ds-element-form-field--input-cell {
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
}
.ds-element-form-field--select-cell {
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
}
.ds-element-form-field--chips-input-cell {
  color: #616161;
}
```
</details>

#### Element left `[59851:11313]` — 5 вариантов
**Описание и рекомендации по применению:**
Иконка слева во всплывающем сообщении — показывает характер сообщения.  
Служебный элемент Snackbar: цвет выбирайте по смыслу сообщения, отдельно на экран не ставится.
- **Style** (VARIANT): Accent, Negative, Neutral, Positive, Warning
- Размеры и параметры:
    - высота: минимум `var(--ds-size-5x)`, растёт по контенту
    - ширина: `fit-content` (фикс.)
    - промежуток между элементами: `var(--ds-size-2-5x)`
- Разметка:

```html
<div class="ds-element-left">
  <span class="ds-element-left__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-element-left__info"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Element left [59851:11313] — 5 вариантов; оси: Style */
.ds-element-left {
  min-height: var(--ds-size-5x);
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-left__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-element-left__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-element-left__icon svg path {
  fill: currentColor;
}
.ds-element-left__info {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
```
</details>

#### Element menu `[56090:1611]` — 8 вариантов
**Описание и рекомендации по применению:**
Слот элемента в пункте меню — выбирает, что стоит рядом с названием пункта: иконка, картинка, чекбокс, переключатель, счётчик.  
Служебный компонент меню: подставляется в Menu item, отдельно на экран не ставится.  


Как выбрать вариант: по тому, что показывает пункт меню.
- **Content** (VARIANT): Checkbox, Counter, Icon size, Image size, Indicator, Radio button, Slide toggle, Text default
- Размеры и параметры:
    - ширина: `fit-content` (фикс.)
    - промежуток между элементами: `var(--ds-size-2-5x)`
    - фон: `#ffffff`
- Модификаторы (что меняет каждый):
    - `--checkbox`: направление `row`
    - `--counter`: направление `column`, color `var(--ds-color-badge-text-color, #ffffff)`
    - `--icon-size`: направление `row`, align-items `center`
    - `--image-size`: направление `row`, align-items `center`
    - `--indicator`: ширина `var(--ds-size-6x)`, направление `row`
    - `--radio-button`: направление `row`
    - `--slide-toggle`: направление `row`, color `var(--ds-color-slide-toggle-text-color, #333333)`
    - `--text-default`: направление `row`, color `var(--ds-color-brand-neutral-super-dark, #333333)`
- Разметка:

```html
<div class="ds-element-menu ds-element-menu--checkbox">
  <span class="ds-element-menu__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-element-menu__image-size"></div>
  <span class="ds-element-menu__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Element menu [56090:1611] — 8 вариантов; оси: Content */
.ds-element-menu {
  display: flex;
  background: #ffffff;
  width: fit-content;
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-menu__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-brand-neutral-super-dark, #333333);
  white-space: nowrap;
}
.ds-element-menu__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-element-menu__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-element-menu__icon svg path {
  fill: currentColor;
}
.ds-element-menu__image-size {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  border-radius: var(--ds-size-circular);
}
.ds-element-menu--image-size {
  flex-direction: row;
  align-items: center;
}
.ds-element-menu--icon-size {
  flex-direction: row;
  align-items: center;
}
.ds-element-menu--text-default {
  flex-direction: row;
  color: var(--ds-color-brand-neutral-super-dark, #333333);
}
.ds-element-menu--checkbox {
  flex-direction: row;
}
.ds-element-menu--radio-button {
  flex-direction: row;
}
.ds-element-menu--indicator {
  width: var(--ds-size-6x);
  flex-direction: row;
}
.ds-element-menu--slide-toggle {
  flex-direction: row;
  color: var(--ds-color-slide-toggle-text-color, #333333);
}
.ds-element-menu--counter {
  flex-direction: column;
  color: var(--ds-color-badge-text-color, #ffffff);
}
```
</details>

#### Element select `[57735:17972]` — 8 вариантов
**Описание и рекомендации по применению:**
Слот элемента в пункте списка выбора — выбирает, что стоит рядом со значением: иконка, картинка, чекбокс, переключатель, счётчик.  
Служебный компонент Select: подставляется в Select item, отдельно на экран не ставится.  


Как выбрать вариант: по тому, что показывает пункт списка выбора.
- **Content** (VARIANT): Checkbox, Counter, Icon size, Image size, Indicator, Radio button, Slide toggle, Text default
- Размеры и параметры:
    - ширина: `fit-content` (фикс.)
    - промежуток между элементами: `var(--ds-size-2-5x)`
    - фон: `#ffffff`
- Модификаторы (что меняет каждый):
    - `--checkbox`: направление `row`
    - `--counter`: направление `column`, color `var(--ds-color-badge-text-color, #ffffff)`
    - `--icon-size`: направление `row`, align-items `center`
    - `--image-size`: направление `row`, align-items `center`
    - `--indicator`: ширина `var(--ds-size-6x)`, направление `row`
    - `--radio-button`: направление `row`
    - `--slide-toggle`: направление `row`, color `var(--ds-color-slide-toggle-text-color, #333333)`
    - `--text-default`: направление `row`, color `var(--ds-color-brand-neutral-super-dark, #333333)`
- Разметка:

```html
<div class="ds-element-select ds-element-select--checkbox">
  <span class="ds-element-select__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-element-select__image-size"></div>
  <span class="ds-element-select__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Element select [57735:17972] — 8 вариантов; оси: Content */
.ds-element-select {
  display: flex;
  background: #ffffff;
  width: fit-content;
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-select__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-brand-neutral-super-dark, #333333);
  white-space: nowrap;
}
.ds-element-select__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-element-select__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-element-select__icon svg path {
  fill: currentColor;
}
.ds-element-select__image-size {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  border-radius: var(--ds-size-circular);
}
.ds-element-select--image-size {
  flex-direction: row;
  align-items: center;
}
.ds-element-select--icon-size {
  flex-direction: row;
  align-items: center;
}
.ds-element-select--text-default {
  flex-direction: row;
  color: var(--ds-color-brand-neutral-super-dark, #333333);
}
.ds-element-select--checkbox {
  flex-direction: row;
}
.ds-element-select--radio-button {
  flex-direction: row;
}
.ds-element-select--indicator {
  width: var(--ds-size-6x);
  flex-direction: row;
}
.ds-element-select--slide-toggle {
  flex-direction: row;
  color: var(--ds-color-slide-toggle-text-color, #333333);
}
.ds-element-select--counter {
  flex-direction: column;
  color: var(--ds-color-badge-text-color, #ffffff);
}
```
</details>

#### Element sidenav `[56598:2991]` — 2 вариантов
**Описание и рекомендации по применению:**
Слот элемента бокового меню — выбирает, что стоит в строке меню: кнопка свёртывания или аватар пользователя.  
Служебный компонент бокового меню, отдельно на экран не ставится.
- **Content** (VARIANT): Avatar, Collaps icon
- Размеры и параметры:
    - высота: `var(--ds-size-5x)` (фикс.)
    - ширина: `var(--ds-size-5x)` (фикс.)
    - скругление: `var(--ds-size-1x)`
- Модификаторы (что меняет каждый):
    - `--avatar`: направление `column`, align-items `center`, промежуток между элементами `var(--ds-size-2-5x)`, внутренние отступы `3px var(--ds-size-0-5x) 3px var(--ds-size-0-5x)`
    - `--collaps-icon`: направление `row`, фон `var(--ds-color-sidenav-element-collaps-icon-background, #36474e)`
- Разметка:

```html
<div class="ds-element-sidenav ds-element-sidenav--avatar">
  <span class="ds-element-sidenav__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-element-sidenav__keyboard-arrow-left"></div>
  <span class="ds-element-sidenav__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Element sidenav [56598:2991] — 2 вариантов; оси: Content */
.ds-element-sidenav {
  height: var(--ds-size-5x);
  width: var(--ds-size-5x);
  display: flex;
  border-radius: var(--ds-size-1x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-sidenav__label {
  font-size: var(--ds-font-caption-m-10-normal-medium-size);
  line-height: var(--ds-font-caption-m-10-normal-medium-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-medium-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-medium-weight);
  text-transform: capitalize;
  color: var(--ds-color-text-accent, #448aff);
  white-space: nowrap;
}
.ds-element-sidenav__icon {
  flex-shrink: 0;
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-element-sidenav__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-element-sidenav__icon svg path {
  fill: currentColor;
}
.ds-element-sidenav__keyboard-arrow-left {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-element-sidenav--collaps-icon {
  flex-direction: row;
  background: var(--ds-color-sidenav-element-collaps-icon-background, #36474e);
}
.ds-element-sidenav--avatar {
  flex-direction: column;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: 3px var(--ds-size-0-5x) 3px var(--ds-size-0-5x);
  color: var(--ds-color-text-accent, #448aff);
}
```
</details>

#### Element step `[55403:7248]` — 12 вариантов
**Описание и рекомендации по применению:**
Маркер шага степпера — иконка или счётчик (номер) на подложке.  
Часть степпера, отдельно не используется: вставляется в шаг (Step).  


Как выбрать вариант:  
Content=Icon size — маркер с иконкой, когда смысл шага понятен по иконке.  
Content=Counter — маркер с номером шага.  


Состояния: Default, Hover, Press, Selected (текущий шаг), Error (шаг заполнен неверно), Disable (шаг недоступен).  
Фронт: https://frontend-common.iiko.ru/components/stepper
- **Content** (VARIANT): Counter, Icon size
- **State** (VARIANT): Default, Disable, Error, Hover, Press, Selected
- Прочие свойства: Text#57060:7 (TEXT)
- Размеры и параметры:
    - высота: минимум `var(--ds-size-6x)`, растёт по контенту
    - ширина: `fit-content` (фикс.)
    - промежуток между элементами: `var(--ds-size-2-5x)`
    - фон: `#ffffff`
- Модификаторы (что меняет каждый):
    - `--counter`: направление `column`, color `var(--ds-color-brand-neutral-super-dark, #333333)`, color `var(--ds-color-brand-neutral-neutral, #9e9e9e)`
    - `--disabled`: pointer-events `none`
    - `--icon-size`: направление `row`, align-items `center`
- Состояния: `:active` (нажатие), `:disabled` (неактивно), `:hover` (наведение)
- Разметка:

```html
<div class="ds-element-step ds-element-step--counter">
  <span class="ds-element-step__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-element-step__icon-size"></div>
  <div class="ds-element-step__info"></div>
  <span class="ds-element-step__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Element step [55403:7248] — 12 вариантов; оси: Content, State */
.ds-element-step {
  min-height: var(--ds-size-6x);
  width: fit-content;
  display: flex;
  background: #ffffff;
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-step__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-brand-neutral-super-dark, #333333);
  white-space: nowrap;
}
.ds-element-step__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-element-step__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-element-step__icon svg path {
  fill: currentColor;
}
.ds-element-step__icon-size {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
}
.ds-element-step__info {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-element-step--icon-size {
  flex-direction: row;
  align-items: center;
}
.ds-element-step--counter {
  flex-direction: column;
  color: var(--ds-color-brand-neutral-super-dark, #333333);
}
.ds-element-step--counter:hover {
  color: var(--ds-color-brand-neutral-default, #ffffff);
}
.ds-element-step--counter:active {
  color: var(--ds-color-brand-neutral-default, #ffffff);
}
.ds-element-step--counter:disabled {
  color: var(--ds-color-brand-neutral-neutral, #9e9e9e);
}
.ds-element-step--counter.ds-element-step--disabled {
  color: var(--ds-color-brand-neutral-neutral, #9e9e9e);
}
.ds-element-step--disabled {
  pointer-events: none;
}
```
</details>

#### Elementare cell `[60220:72578]` — 10 вариантов
**Описание и рекомендации по применению:**
Слот содержимого ячейки таблицы — вложенный служебный набор того, что можно поставить в ячейку.  
Используется внутри строки таблицы; на экран отдельно не выносится.  


Как выбрать вариант: по тому, что показывает ячейка.
- **Variant** (VARIANT): Button, Button icon, Checkbox, Chips, Icon group, Icon size, Input number, Slide toggle, Status, Text UI
- CSS не требуется: это **слот-контейнер** — пустая обёртка под вложенный компонент (иконку, ячейку). Оформление задаёт вложенный компонент, а размер — контент.

#### Elements `[58501:4220]` — 30 вариантов
**Описание и рекомендации по применению:**
Ячейка календаря — день, месяц или год в сетке выбора.  
Служебный компонент календаря: используется внутри Datepicker. Недоступные даты блокируйте, а не убирайте из сетки.  


Как выбрать вариант:  
Type=Cell — день; Month — месяц; Year — год.  
Variant=Default — обычная дата; Today — сегодня; Selected — выбранная; Range — внутри выбранного периода.  
Состояния: Default, Hover, Press, Disable.
- **Type** (VARIANT): Cell, Month, Year
- **Variant** (VARIANT): Default, Range, Selected, Today
- **State** (VARIANT): Default, Disable, Hover, Press
- Прочие свойства: Back right#58506:0 (BOOLEAN), Back left#58506:1 (BOOLEAN), Start range#58506:2 (BOOLEAN), End range#58506:3 (BOOLEAN), Date#58506:4 (TEXT), Show focus indicator#58506:5 (BOOLEAN), Year#58506:84 (TEXT), Month#58506:165 (TEXT)
- Размеры и параметры:
    - высота: `var(--ds-size-10x)` (фикс.)
    - ширина: `var(--ds-size-10x)` (фикс.)
    - скругление: `var(--ds-radius-circular, 9999px)`
- Модификаторы (что меняет каждый):
    - `--cell`: фон `var(--ds-color-brand-neutral-lighter, #e0e0e0)`, color `var(--ds-color-text-disable, #9e9e9e)`, направление `row`, align-items `center`
    - `--disabled`: pointer-events `none`
    - `--month`: ширина `fit-content`, направление `row`, промежуток между элементами `var(--ds-size-2x)`, внутренние отступы `var(--ds-size-2-5x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2x)`
    - `--year`: ширина `fit-content`, направление `column`, align-items `center`, color `var(--ds-color-text-inversive, #ffffff)`
- Состояния: `:active` (нажатие), `:disabled` (неактивно), `:hover` (наведение)
- Разметка:

```html
<div class="ds-elements ds-elements--cell">
  <div class="ds-elements__date"></div>
  <span class="ds-elements__label">Текст</span>
  <div class="ds-elements__range-highlight-end"></div>
  <div class="ds-elements__range-highlight-middle"></div>
  <div class="ds-elements__range-highlight-start"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Elements [58501:4220] — 30 вариантов; оси: Type, Variant, State */
.ds-elements {
  display: flex;
  height: var(--ds-size-10x);
  width: var(--ds-size-10x);
  border-radius: var(--ds-radius-circular, 9999px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-elements__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-text-primary, #333333);
  white-space: nowrap;
}
.ds-elements__range-highlight-start {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-50, #f0f5ff);
}
.ds-elements__range-highlight-end {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-50, #f0f5ff);
}
.ds-elements__range-highlight-middle {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-10, #f5f9ff);
}
.ds-elements__date {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-primary, #333333);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-text-primary, #333333);
}
.ds-elements--cell.ds-elements--today:disabled {
  background: var(--ds-color-brand-neutral-lighter, #e0e0e0);
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--cell.ds-elements--today.ds-elements--disabled {
  background: var(--ds-color-brand-neutral-lighter, #e0e0e0);
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--cell.ds-elements--default:disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--cell.ds-elements--default.ds-elements--disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--cell.ds-elements--range:disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--cell.ds-elements--range.ds-elements--disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--cell.ds-elements--selected:active {
  background: var(--ds-color-button-accent-filled-press-background, #2651b5);
}
.ds-elements--cell.ds-elements--today:active {
  background: var(--ds-color-brand-neutral-lighter, #e0e0e0);
}
.ds-elements--cell.ds-elements--default:active {
  background: var(--ds-color-brand-neutral-lighter, #e0e0e0);
}
.ds-elements--cell.ds-elements--today:hover {
  background: var(--ds-color-brand-neutral-super-light, #f5f5f5);
}
.ds-elements--cell.ds-elements--default:hover {
  background: var(--ds-color-brand-neutral-super-light, #f5f5f5);
}
.ds-elements--cell.ds-elements--range {
  flex-direction: row;
  align-items: center;
  background: var(--ds-color-brand-neutral-default, #ffffff);
  color: var(--ds-color-text-primary, #333333);
}
.ds-elements--cell.ds-elements--selected {
  flex-direction: column;
  align-items: center;
  color: var(--ds-color-text-inversive, #ffffff);
}
.ds-elements--year.ds-elements--selected {
  width: fit-content;
  flex-direction: column;
  align-items: center;
  color: var(--ds-color-text-inversive, #ffffff);
}
.ds-elements--cell.ds-elements--today {
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: var(--ds-color-brand-neutral-default, #ffffff);
  border: 1px solid var(--ds-color-stroke-hover, #9e9e9e);
  color: var(--ds-color-text-primary, #333333);
}
.ds-elements--cell.ds-elements--default {
  flex-direction: column;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2x) var(--ds-size-2-5x) var(--ds-size-2x) var(--ds-size-2-5x);
  color: var(--ds-color-text-primary, #333333);
}
.ds-elements--year.ds-elements--default:disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--year.ds-elements--default.ds-elements--disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--year.ds-elements--today:disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--year.ds-elements--today.ds-elements--disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--year.ds-elements--default:active {
  background: var(--ds-color-brand-neutral-lighter, #e0e0e0);
}
.ds-elements--year.ds-elements--today:active {
  background: var(--ds-color-brand-neutral-lighter, #e0e0e0);
}
.ds-elements--year.ds-elements--default:hover {
  background: var(--ds-color-brand-neutral-super-light, #f5f5f5);
}
.ds-elements--year.ds-elements--today:hover {
  background: var(--ds-color-brand-neutral-super-light, #f5f5f5);
}
.ds-elements--year.ds-elements--default {
  width: fit-content;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-4x);
  background: var(--ds-color-brand-neutral-default, #ffffff);
  color: var(--ds-color-text-primary, #333333);
}
.ds-elements--year.ds-elements--today {
  width: fit-content;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-4x);
  background: var(--ds-color-brand-neutral-default, #ffffff);
  border: 1px solid var(--ds-color-stroke-hover, #9e9e9e);
  color: var(--ds-color-text-primary, #333333);
}
.ds-elements--month.ds-elements--default {
  width: fit-content;
  flex-direction: row;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2-5x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2x);
  background: var(--ds-color-brand-neutral-default, #ffffff);
  color: var(--ds-color-text-primary, #333333);
}
.ds-elements--month.ds-elements--default:hover {
  background: var(--ds-color-brand-neutral-super-light, #f5f5f5);
}
.ds-elements--month.ds-elements--default:active {
  background: var(--ds-color-brand-neutral-lighter, #e0e0e0);
}
.ds-elements--month.ds-elements--default:disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--month.ds-elements--default.ds-elements--disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--disabled {
  pointer-events: none;
}
```
</details>

#### Elements `[58982:9594]` — 8 вариантов
**Описание и рекомендации по применению:**
Значение времени в списке — час или минута, доступные для выбора.  
Служебный компонент выбора времени: используется внутри Timepicker. Недоступное время блокируйте, а не убирайте из списка.  


Как выбрать вариант:  
Variant=Default — обычное значение; Selected — выбранное.  
Состояния: Default, Hover, Press, Range (внутри выбранного интервала), Disable.
- **Variant** (VARIANT): Default, Selected
- **State** (VARIANT): Default, Disable, Hover, Press, Range
- Прочие свойства: Start range#58506:2 (BOOLEAN), End range#58506:3 (BOOLEAN), Time#58506:84 (TEXT)
- Размеры и параметры:
    - высота: минимум `var(--ds-size-10x)`, растёт по контенту
    - ширина: `fit-content` (фикс.)
- Модификаторы (что меняет каждый):
    - `--default`: color `var(--ds-color-text-disable, #9e9e9e)`, направление `row`, промежуток между элементами `var(--ds-size-2-5x)`, внутренние отступы `var(--ds-size-2x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-4x)`
    - `--disabled`: pointer-events `none`
    - `--selected`: направление `column`, color `var(--ds-color-text-inversive, #ffffff)`
- Состояния: `:active` (нажатие), `:disabled` (неактивно), `:hover` (наведение)
- Разметка:

```html
<div class="ds-elements-2 ds-elements-2--default">
  <div class="ds-elements-2__date"></div>
  <span class="ds-elements-2__label">Текст</span>
  <div class="ds-elements-2__range-highlight-end"></div>
  <div class="ds-elements-2__range-highlight-start"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Elements [58982:9594] — 8 вариантов; оси: Variant, State; ДУБЛЬ имени — второй сет «Elements», различать по node_id */
.ds-elements-2 {
  min-height: var(--ds-size-10x);
  width: fit-content;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-elements-2__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-text-inversive, #ffffff);
  white-space: nowrap;
}
.ds-elements-2__range-highlight-start {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-50, #f0f5ff);
}
.ds-elements-2__range-highlight-end {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-50, #f0f5ff);
}
.ds-elements-2__date {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-4x);
  border-radius: var(--ds-radius-circular, 9999px);
  background: var(--ds-color-button-accent-filled-default-background, #448aff);
}
.ds-elements-2--selected {
  flex-direction: column;
  color: var(--ds-color-text-inversive, #ffffff);
}
.ds-elements-2--default:disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements-2--default.ds-elements-2--disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements-2--default:active {
  background: var(--ds-color-brand-neutral-lighter, #e0e0e0);
}
.ds-elements-2--default:hover {
  background: var(--ds-color-brand-neutral-super-light, #f5f5f5);
}
.ds-elements-2--default {
  flex-direction: row;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-4x);
  border-radius: var(--ds-radius-circular, 9999px);
  background: var(--ds-color-brand-neutral-default, #ffffff);
  color: var(--ds-color-text-primary, #333333);
}
.ds-elements-2--disabled {
  pointer-events: none;
}
```
</details>

#### Expansion content `[61361:99603]` — 2 вариантов
**Описание и рекомендации по применению:**
Содержимое раскрывающейся панели — область под заголовком, куда складывается сам блок.  
Служебный компонент панели: используется внутри Expansion panel.  


Как выбрать вариант: с внутренними отступами или без них, когда отступы задаёт вложенный блок.
- **Padding off/on** (VARIANT): False, True
- Прочие свойства: Slot#61363:19 (SLOT)
- Размеры и параметры:
    - ширина: `597px` (фикс.)
    - внутренние отступы: `var(--ds-expansion-panel-content-pad-top, 16px) var(--ds-expansion-panel-content-pad-right, 16px) var(--ds-expansion-panel-content-pad-bottom, 16px) var(--ds-expansion-panel-content-pad-left, 16px)`
- Модификаторы (что меняет каждый):
    - `--false`: color `var(--ds-color-expansion-panel-content-text-color, #333333)`
    - `--true`: color `var(--ds-color-expansion-panel-content-text-color, #333333)`
- Разметка:

```html
<div class="ds-expansion-content ds-expansion-content--false">
  <span class="ds-expansion-content__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Expansion content [61361:99603] — 2 вариантов; оси: Padding off/on */
.ds-expansion-content {
  width: 597px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--ds-expansion-panel-content-pad-top, 16px) var(--ds-expansion-panel-content-pad-right, 16px) var(--ds-expansion-panel-content-pad-bottom, 16px) var(--ds-expansion-panel-content-pad-left, 16px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-expansion-content__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-expansion-panel-content-text-color, #333333);
  white-space: nowrap;
}
.ds-expansion-content--true {
  color: var(--ds-color-expansion-panel-content-text-color, #333333);
}
.ds-expansion-content--false {
  color: var(--ds-color-expansion-panel-content-text-color, #333333);
}
```
</details>

#### Expansion group panel `[56155:1676]` — 2 вариантов
**Описание и рекомендации по применению:**
Группа раскрывающихся панелей — несколько панелей подряд с общими разделителями.  
Берите группу, когда блоков настроек несколько; открытым держите только нужный.  


Как выбрать вариант: группа свёрнута или раскрыта.
- **Type ?** (VARIANT): Collaps, Expand
- Прочие свойства: Slot#61364:25 (SLOT)
- Размеры и параметры:
    - ширина: `597px` (фикс.)
    - промежуток между элементами: `var(--ds-expansion-panel-collaps-gap-group, 8px)`
- Модификаторы (что меняет каждый):
    - `--collaps`: color `var(--ds-color-expansion-panel-collaps-text-color, #333333)`
    - `--expand`: color `var(--ds-color-expansion-panel-collaps-text-color, #333333)`
- Разметка:

```html
<div class="ds-expansion-group-panel ds-expansion-group-panel--collaps">
  <span class="ds-expansion-group-panel__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Expansion group panel [56155:1676] — 2 вариантов; оси: Type ? */
.ds-expansion-group-panel {
  width: 597px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-expansion-panel-collaps-gap-group, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-expansion-group-panel__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-expansion-panel-collaps-text-color, #333333);
  white-space: nowrap;
}
.ds-expansion-group-panel--collaps {
  color: var(--ds-color-expansion-panel-collaps-text-color, #333333);
}
.ds-expansion-group-panel--expand {
  color: var(--ds-color-expansion-panel-collaps-text-color, #333333);
}
```
</details>

#### Expansion panel `[52937:1329]` — 12 вариантов
**Описание и рекомендации по применению:**
Раскрывающаяся панель — блок, который сворачивается до заголовка: группы настроек, детали документа, дополнительные параметры.  
Прячьте в неё второстепенное, обязательные поля держите открытыми. По умолчанию оставляйте свёрнутой, если содержимое нужно не всем.  


Как выбрать вариант:  
Variant=Default — обычная панель; Info — панель с пояснением.  
Collaps/Expand=On — раскрыта; Off — свёрнута.  
Состояния: Default, Hover, Press, Disable.
- **Variant** (VARIANT): Default, Info
- **Collaps/Expand** (VARIANT): Off, On
- **State** (VARIANT): Default, Disable, Hover, Press
- Прочие свойства: Element left#17172:1340 (BOOLEAN), Element right#17172:1349 (BOOLEAN), Icon text#58024:0 (BOOLEAN), Expansion panel_Content#58991:0 (SLOT), Expansion panel_Content2#58991:9 (SLOT), Expansion panel_Content3#58991:18 (SLOT), Expansion panel_Content4#58991:27 (SLOT)
- CSS: выверено вручную, см. `components/expansion.css` в разделе «Полные CSS-стили всех компонентов»

#### Expansion table panel `[56217:15104]` — 0 вариантов
_Описание компонента в Figma отсутствует._
- CSS не требуется: это **слот-контейнер** — пустая обёртка под вложенный компонент (иконку, ячейку). Оформление задаёт вложенный компонент, а размер — контент.

#### Form field cell `[60220:72732]` — 1 вариантов
**Описание и рекомендации по применению:**
Обёртка редактируемой ячейки таблицы — выравнивание и отступы поля внутри ячейки.  
Служебный компонент таблицы: используется внутри строки, отдельно на экран не ставится.
- **Variant** (VARIANT): Table content cell Chips input
- Размеры и параметры:
    - высота: минимум `var(--ds-size-10x)`, растёт по контенту
    - ширина: `fit-content` (фикс.)
    - фон: `#ffffff`
- Разметка:

```html
<div class="ds-form-field-cell">
  <div class="ds-form-field-cell__table-content"></div>
  <div class="ds-form-field-cell__table-content-chips-input"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Form field cell [60220:72732] — 1 вариантов; оси: Variant */
.ds-form-field-cell {
  min-height: var(--ds-size-10x);
  width: fit-content;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-form-field-cell__table-content-chips-input {
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-form-field-cell__table-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px);
}
```
</details>

#### Hint container `[54593:479]` — 10 вариантов
**Описание и рекомендации по применению:**
Подсказка — короткое пояснение по элементу: назначение кнопки-иконки, правило заполнения поля, расшифровка статуса.  
Появляется по наведению и не должна содержать действий, без которых нельзя обойтись. Текст — одна-две строки.  


Как выбрать вариант:  
Size=Single — короткая подсказка одной строкой; Complex — с заголовком и несколькими строками.  
Orientation — сторона, с которой подсказка выходит к элементу: Up, Down, Right, Left; Default — без хвостика.
- **Size** (VARIANT): Complex, Single
- **Orientation** (VARIANT): Default, Down, Left, Right, Up
- Прочие свойства: Header#54713:4 (BOOLEAN), Content#54713:15 (BOOLEAN), Footer#54713:26 (BOOLEAN)
- Размеры и параметры:
    - ширина: `250px` (фикс.)
    - скругление: `var(--ds-hint-border-radius, 8px)`
    - тень: `var(--ds-shadow-shadows-08-dp-s)`
- Модификаторы (что меняет каждый):
    - `--default`: направление `column`, color `var(--ds-color-hint-header-text-color, #ffffff)`
    - `--down`: направление `column`, color `var(--ds-color-hint-header-text-color, #ffffff)`
    - `--left`: направление `row`, color `var(--ds-color-hint-header-text-color, #ffffff)`
    - `--right`: направление `row`, color `var(--ds-color-hint-header-text-color, #ffffff)`
    - `--up`: направление `column`, color `var(--ds-color-hint-header-text-color, #ffffff)`
- Разметка:

```html
<div class="ds-hint-container ds-hint-container--default">
  <span class="ds-hint-container__arrow"><!-- SVG-иконка ДС --></span>
  <div class="ds-hint-container__content"></div>
  <div class="ds-hint-container__footer"></div>
  <div class="ds-hint-container__header"></div>
  <span class="ds-hint-container__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-hint-container__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Hint container [54593:479] — 10 вариантов; оси: Size, Orientation */
.ds-hint-container {
  width: 250px;
  display: flex;
  align-items: center;
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  border-radius: var(--ds-hint-border-radius, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-container__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-hint-header-text-color, #ffffff);
  white-space: nowrap;
}
.ds-hint-container__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-hint-container__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-hint-container__icon svg path {
  fill: currentColor;
}
.ds-hint-container__arrow {
  height: var(--ds-size-1x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-hint-background-color, #424242);
}
.ds-hint-container__header {
  display: flex;
  flex-direction: row;
  gap: var(--ds-hint-header-gap, 8px);
  padding: var(--ds-hint-header-pad-top, 8px) var(--ds-hint-header-pad-right, 12px) var(--ds-hint-header-pad-bottom, 4px) var(--ds-hint-header-pad-left, 12px);
  background: var(--ds-color-hint-background-color, #424242);
}
.ds-hint-container__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-hint-content-gap, 8px);
  padding: var(--ds-hint-content-pad-top, 8px) var(--ds-hint-content-pad-right, 12px) var(--ds-hint-content-pad-bottom, 8px) var(--ds-hint-content-pad-left, 12px);
  background: var(--ds-color-hint-background-color, #424242);
}
.ds-hint-container__footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-hint-footer-gap, 12px);
  padding: var(--ds-hint-footer-pad-top, 16px) var(--ds-hint-footer-pad-right, 12px) var(--ds-hint-footer-pad-bottom, 12px) var(--ds-hint-footer-pad-left, 12px);
  background: var(--ds-color-hint-background-color, #424242);
}
.ds-hint-container--up {
  flex-direction: column;
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-container--down {
  flex-direction: column;
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-container--right {
  flex-direction: row;
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-container--left {
  flex-direction: row;
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-container--default {
  flex-direction: column;
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
```
</details>

#### Hint content `[54713:3325]` — 2 вариантов
**Описание и рекомендации по применению:**
Содержимое подсказки — текст внутри подсказки: одна строка или несколько блоков.  
Служебный компонент подсказки, отдельно на экран не ставится.
- **Content** (VARIANT): Group content, Single content
- Прочие свойства: Element right#56260:9 (BOOLEAN), Element left#56260:12 (BOOLEAN)
- Размеры и параметры:
    - ширина: `250px` (фикс.)
    - внутренние отступы: `var(--ds-hint-content-pad-top, 8px) var(--ds-hint-content-pad-right, 12px) var(--ds-hint-content-pad-bottom, 8px) var(--ds-hint-content-pad-left, 12px)`
    - промежуток между элементами: `var(--ds-hint-content-gap, 8px)`
    - фон: `var(--ds-color-hint-background-color, #424242)`
- Модификаторы (что меняет каждый):
    - `--group-content`: color `var(--ds-color-hint-content-text-color, #ffffff)`
    - `--single-content`: align-items `center`, color `var(--ds-color-hint-content-text-color, #ffffff)`
- Разметка:

```html
<div class="ds-hint-content ds-hint-content--group-content">
  <div class="ds-hint-content__block"></div>
  <div class="ds-hint-content__clear"></div>
  <div class="ds-hint-content__close"></div>
  <span class="ds-hint-content__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-hint-content__icon-size"></div>
  <div class="ds-hint-content__info"></div>
  <span class="ds-hint-content__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Hint content [54713:3325] — 2 вариантов; оси: Content */
.ds-hint-content {
  width: 250px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-hint-content-gap, 8px);
  padding: var(--ds-hint-content-pad-top, 8px) var(--ds-hint-content-pad-right, 12px) var(--ds-hint-content-pad-bottom, 8px) var(--ds-hint-content-pad-left, 12px);
  background: var(--ds-color-hint-background-color, #424242);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-content__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-hint-content-text-color, #ffffff);
  white-space: nowrap;
}
.ds-hint-content__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-hint-content__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-hint-content__icon svg path {
  fill: currentColor;
}
.ds-hint-content__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-hint-content__info {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-hint-content__block {
  display: flex;
  flex-direction: column;
  gap: var(--ds-hint-content-gap-content, 4px);
}
.ds-hint-content__clear {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-hint-content__close {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-hint-content--group-content {
  color: var(--ds-color-hint-content-text-color, #ffffff);
}
.ds-hint-content--single-content {
  align-items: center;
  color: var(--ds-color-hint-content-text-color, #ffffff);
}
```
</details>

#### Hint footer `[54600:517]` — 1 вариантов
**Описание и рекомендации по применению:**
Подвал подсказки — ссылка или кнопка под текстом подсказки («Подробнее»).  
Добавляйте только когда есть куда вести; основное действие в подсказку не выносите.
- **Content** (VARIANT): Default
- Прочие свойства: Step text#54600:1 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `56px`, растёт по контенту
    - ширина: `250px` (фикс.)
    - внутренние отступы: `var(--ds-hint-footer-pad-top, 16px) var(--ds-hint-footer-pad-right, 12px) var(--ds-hint-footer-pad-bottom, 12px) var(--ds-hint-footer-pad-left, 12px)`
    - промежуток между элементами: `var(--ds-hint-footer-gap, 12px)`
    - фон: `var(--ds-color-hint-background-color, #424242)`
- Модификаторы (что меняет каждый):
    - `--default`: color `var(--ds-color-hint-footer-text-color, #ffffff)`
- Разметка:

```html
<div class="ds-hint-footer ds-hint-footer--default">
  <div class="ds-hint-footer__button-group"></div>
  <span class="ds-hint-footer__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-hint-footer__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Hint footer [54600:517] — 1 вариантов; оси: Content */
.ds-hint-footer {
  min-height: 56px;
  width: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-hint-footer-gap, 12px);
  padding: var(--ds-hint-footer-pad-top, 16px) var(--ds-hint-footer-pad-right, 12px) var(--ds-hint-footer-pad-bottom, 12px) var(--ds-hint-footer-pad-left, 12px);
  background: var(--ds-color-hint-background-color, #424242);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-footer__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-hint-footer-text-color, #ffffff);
  white-space: nowrap;
}
.ds-hint-footer__icon {
  flex-shrink: 0;
  width: var(--ds-size-7x);
  height: var(--ds-size-7x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-hint-footer__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-hint-footer__icon svg path {
  fill: currentColor;
}
.ds-hint-footer__цвет-и-палитра {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-hint-footer-text-color, #ffffff);
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-hint-footer-text-color, #ffffff);
}
.ds-hint-footer__button-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap, 8px);
}
.ds-hint-footer--default {
  color: var(--ds-color-hint-footer-text-color, #ffffff);
}
```
</details>

#### Hint header `[54594:2219]` — 5 вариантов
**Описание и рекомендации по применению:**
Заголовок подсказки — тема пояснения и его окраска по смыслу.  
Цвет выбирайте по характеру сообщения, а не для украшения.  


Как выбрать вариант: обычное пояснение, акцентное, второстепенное, предупреждение или ошибка.
- **Style** (VARIANT): Error, Neutral, Primary, Secondary, Warning
- Прочие свойства: Element left#54594:55 (BOOLEAN), Element right#54594:56 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `var(--ds-size-8x)`, растёт по контенту
    - ширина: `250px` (фикс.)
    - внутренние отступы: `var(--ds-hint-header-pad-top, 8px) var(--ds-hint-header-pad-right, 12px) var(--ds-hint-header-pad-bottom, 4px) var(--ds-hint-header-pad-left, 12px)`
    - промежуток между элементами: `var(--ds-hint-header-gap, 8px)`
    - фон: `var(--ds-color-hint-background-color, #424242)`
- Модификаторы (что меняет каждый):
    - `--error`: color `var(--ds-color-hint-header-text-color, #ffffff)`
    - `--neutral`: color `var(--ds-color-hint-header-text-color, #ffffff)`
    - `--primary`: color `var(--ds-color-hint-header-text-color, #ffffff)`
    - `--secondary`: color `var(--ds-color-hint-header-text-color, #ffffff)`
    - `--warning`: color `var(--ds-color-hint-header-text-color, #ffffff)`
- Разметка:

```html
<div class="ds-hint-header ds-hint-header--error">
  <div class="ds-hint-header__clear"></div>
  <div class="ds-hint-header__close"></div>
  <span class="ds-hint-header__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-hint-header__icon-size"></div>
  <div class="ds-hint-header__info"></div>
  <span class="ds-hint-header__label">Текст</span>
  <span class="ds-hint-header__title">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Hint header [54594:2219] — 5 вариантов; оси: Style */
.ds-hint-header {
  min-height: var(--ds-size-8x);
  width: 250px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-hint-header-gap, 8px);
  padding: var(--ds-hint-header-pad-top, 8px) var(--ds-hint-header-pad-right, 12px) var(--ds-hint-header-pad-bottom, 4px) var(--ds-hint-header-pad-left, 12px);
  background: var(--ds-color-hint-background-color, #424242);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-header__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-hint-header-text-color, #ffffff);
  white-space: nowrap;
}
.ds-hint-header__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-hint-header__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-hint-header__icon svg path {
  fill: currentColor;
}
.ds-hint-header__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-hint-header__info {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-hint-header__title {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-hint-header-text-color, #ffffff);
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-header__clear {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-hint-header__close {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-hint-header--neutral {
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-header--primary {
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-header--secondary {
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-header--warning {
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-header--error {
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
```
</details>

#### Icon group `[53467:1060]` — 2 вариантов
**Описание и рекомендации по применению:**
Группа иконок — две и более иконки рядом с единым зазором: индикаторы в строке таблицы, набор статусных иконок в карточке.  
Зазор берите из варианта, вручную не раздвигайте.  


Как выбрать вариант: по нужному зазору между иконками — плотный или разряженный.
- **Size gap** (VARIANT): 2x, 4x
- Прочие свойства: Slot#60190:14 (SLOT)
- Размеры и параметры:
    - высота: минимум `var(--ds-size-5x)`, растёт по контенту
    - ширина: `fit-content` (фикс.)
    - промежуток между элементами: `var(--ds-icon-size-gap-group-2x, 8px)`
- Модификаторы (что меняет каждый):
    - `--4x`: промежуток между элементами `var(--ds-icon-size-gap-group-4x, 16px)`
- Разметка:

```html
<div class="ds-icon-group ds-icon-group--4x">
  <span class="ds-icon-group__icon"><!-- SVG-иконка ДС --></span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Icon group [53467:1060] — 2 вариантов; оси: Size gap */
.ds-icon-group {
  min-height: var(--ds-size-5x);
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-icon-size-gap-group-2x, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-icon-group__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-icon-group__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-icon-group__icon svg path {
  fill: currentColor;
}
.ds-icon-group--4x {
  gap: var(--ds-icon-size-gap-group-4x, 16px);
}
```
</details>

#### Icon size `[52927:6286]` — 12 вариантов
**Описание и рекомендации по применению:**
Контейнер иконки или картинки — задаёт единый размер и выравнивание всего, что вставляется как иконка: в кнопки, поля, пункты списков, ячейки таблиц.  
Вставляйте иконку внутрь этого контейнера, а не напрямую — иначе иконки в одном ряду разъезжаются по высоте.  


Как выбрать вариант:  
Content=Icon — векторная иконка; Content=Img — картинка или аватар.  
Size — под размер родителя: мелкие в строках таблиц и подписях, средние в кнопках и полях, крупные в пустых состояниях и плитках.
- **Size** (VARIANT): 16, 20, 24, 32, 36, 40
- **Content** (VARIANT): Icon, Img
- Прочие свойства: State#54063:8 (BOOLEAN), Instance#60108:34 (INSTANCE_SWAP)
- CSS не требуется: это **слот-контейнер** — пустая обёртка под вложенный компонент (иконку, ячейку). Оформление задаёт вложенный компонент, а размер — контент.

#### Input `[52670:7573]` — 29 вариантов
**Описание и рекомендации по применению:**
Поле ввода — для однострочного текста: название, сумма, телефон, адрес.  
Свойства включаются внутри компонента: Label, Element left (иконка слева), Element right (иконка/кнопка справа),  
Support text (подсказка) и Hint text. Есть режимы с лимитом символов и счётчиком (например, 10/256),  
с префиксами (телефон, e-mail) и с сообщением об ошибке.  


Как выбрать вариант:  
Variant=Empty — поле без значения, плейсхолдер или Label внутри.  
Variant=Populated — поле со значением, Label над полем.  
Variant=No label up — компактные вытянутые поля (S / XS), без Label сверху.  
Size: M (основной), S (компактный), XS (минимальный — для строк таблиц и ячеек).  


State: Default, Hover, Focus, Focus+Placeholder, Focus+Value, Error, Error+Hover, Disable.  
Фронт: https://frontend-common.iiko.ru/components/input
- **Size** (VARIANT): M, S, XS
- **Variant** (VARIANT): Empty, No label up, Populated
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Прочие свойства: Input text#52678:0 (TEXT), Label text#52678:3 (TEXT), Support text#52678:6 (TEXT), Label#56934:32 (BOOLEAN), Element left#56934:282 (BOOLEAN), Element right#56934:407 (BOOLEAN), Support text#56934:532 (BOOLEAN), Input text#56968:66 (BOOLEAN), Hint text#57893:0 (BOOLEAN), Support#57893:30 (BOOLEAN), Hint text#57893:60 (TEXT)
- CSS: выверено вручную, см. `components/input.css` в разделе «Полные CSS-стили всех компонентов»

#### Input cell `[60229:74436]` — 8 вариантов
**Описание и рекомендации по применению:**
Поле ввода внутри ячейки таблицы — правка значения прямо в строке, без отдельной формы.  
Используйте в редактируемых таблицах: количество, цена, комментарий в накладной. Вне таблицы берите обычное поле Input.  


Состояния: Default, Hover, Focus, Focus+Placeholder, Focus+Value, Error, Error+Hover, Disable.
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Hover, Vocus+Value
- Размеры и параметры:
    - высота: минимум `var(--ds-size-9x)`, растёт по контенту
    - ширина: `200px` (фикс.)
    - внутренние отступы: `var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px)`
    - промежуток между элементами: `var(--ds-size-2x)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
- Состояния: `:disabled` (неактивно), `:focus-visible`, `:hover` (наведение)
- Разметка:

```html
<div class="ds-input-cell ds-input-cell--disabled">
  <div class="ds-input-cell__frame"></div>
  <span class="ds-input-cell__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-input-cell__label">Текст</span>
  <span class="ds-input-cell__support">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Input cell [60229:74436] — 8 вариантов; оси: State */
.ds-input-cell {
  min-height: var(--ds-size-9x);
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-cell__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
  white-space: nowrap;
}
.ds-input-cell__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-input-cell__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-input-cell__icon svg path {
  fill: currentColor;
}
.ds-input-cell__frame {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-input-cell__support {
  display: flex;
  flex-direction: row;
}
.ds-input-cell:hover {
  background: var(--ds-palette-neutral-50, #f5f5f5);
  border: 1px solid var(--ds-color-table-cell-content-hover-border-color, #9e9e9e);
}
.ds-input-cell:focus-visible {
  color: var(--ds-color-form-field-filled-focus-label-text-color, #448aff);
}
.ds-input-cell:disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-input-cell.ds-input-cell--disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-input-cell--disabled {
  pointer-events: none;
}
```
</details>

#### Input Datepicker `[58548:4764]` — 2 вариантов
**Описание и рекомендации по применению:**
Поле даты — ввод и выбор даты: дата поставки, период отчёта, срок годности.  
Дату можно ввести с клавиатуры или выбрать в календаре по иконке справа. Для времени берите Input Timepicker.  


Как выбрать вариант: Empty — дата не выбрана, Populated — дата выбрана.
- **Type** (VARIANT): Empty, Populated
- Размеры и параметры:
    - высота: минимум `48px`, растёт по контенту
    - ширина: `250px` (фикс.)
    - фон: `#ffffff`
- Модификаторы (что меняет каждый):
    - `--empty`: color `var(--ds-color-form-field-input-label-text-color, #616161)`
    - `--populated`: color `var(--ds-color-form-field-filled-default-label-text-color, #616161)`
- Разметка:

```html
<div class="ds-input-datepicker ds-input-datepicker--empty">
  <div class="ds-input-datepicker__frame"></div>
  <span class="ds-input-datepicker__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-input-datepicker__label">Текст</span>
  <span class="ds-input-datepicker__support">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Input Datepicker [58548:4764] — 2 вариантов; оси: Type */
.ds-input-datepicker {
  min-height: 48px;
  width: 250px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-datepicker__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-form-field-input-label-text-color, #616161);
  white-space: nowrap;
}
.ds-input-datepicker__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-input-datepicker__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-input-datepicker__icon svg path {
  fill: currentColor;
}
.ds-input-datepicker__frame {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  padding: var(--ds-form-field-m-size-pad-input-top, 12px) var(--ds-form-field-m-size-pad-input-right, 12px) var(--ds-form-field-m-size-pad-input-bottom, 12px) var(--ds-form-field-m-size-pad-input-left, 12px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-input-datepicker__support {
  display: flex;
  flex-direction: row;
}
.ds-input-datepicker--empty {
  color: var(--ds-color-form-field-input-label-text-color, #616161);
}
.ds-input-datepicker--populated {
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
}
```
</details>

#### Input number `[17193:84750]` — 29 вариантов
**Описание и рекомендации по применению:**
Поле числа — количество и числовые значения: количество товара, цена, процент, число дней.  
Рядом стоят кнопки шага «минус» и «плюс»; вводить можно и с клавиатуры.  
Не используйте его для текста и для дат — для дат берите Input Datepicker.  


Как выбрать вариант:  
Variant=Empty — без значения; Populated — со значением; No label up — без Label сверху (для таблиц и плотных форм).  
Size=M — основной; S и XS — плотные формы, панели, строки таблиц.  
Состояния: Default, Hover, Focus, Focus+Placeholder, Focus+Value, Error, Error+Hover, Disable.
- **Size** (VARIANT): M, S, XS
- **Variant** (VARIANT): Empty, No label up, Populated
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Прочие свойства: Close icon#57962:0 (BOOLEAN)
- Размеры и параметры:
    - ширина: `138px` (фикс.)
    - промежуток между элементами: `18px`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--empty`: align-items `center`, color `var(--ds-color-form-field-input-label-text-color, #616161)`, color `var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e)`
    - `--populated`: align-items `center`, color `var(--ds-color-form-field-filled-default-label-text-color, #616161)`, color `var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e)`
    - `--s`: ширина `fit-content`
    - `--xs`: ширина `fit-content`, ширина `var(--ds-size-6x)`, высота `var(--ds-size-6x)`
- Состояния: `:disabled` (неактивно), `:focus-visible`, `:hover` (наведение)
- Разметка:

```html
<div class="ds-input-number ds-input-number--disabled">
  <div class="ds-input-number__frame"></div>
  <span class="ds-input-number__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-input-number__label">Текст</span>
  <span class="ds-input-number__support">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Input number [17193:84750] — 29 вариантов; оси: Size, Variant, State */
.ds-input-number {
  display: flex;
  flex-direction: row;
  width: 138px;
  gap: 18px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-number__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
  white-space: nowrap;
}
.ds-input-number__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-input-number__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-input-number__icon svg path {
  fill: currentColor;
}
.ds-input-number__frame {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  padding: var(--ds-form-field-m-size-pad-input-top, 12px) var(--ds-form-field-m-size-pad-input-right, 12px) var(--ds-form-field-m-size-pad-input-bottom, 12px) var(--ds-form-field-m-size-pad-input-left, 12px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-input-number__support {
  display: flex;
  flex-direction: row;
}
.ds-input-number--s {
  width: fit-content;
}
.ds-input-number--xs {
  width: fit-content;
}
.ds-input-number--xs .ds-input-number__icon {
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
}
.ds-input-number--populated {
  align-items: center;
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
}
.ds-input-number--empty {
  align-items: center;
  color: var(--ds-color-form-field-input-label-text-color, #616161);
}
.ds-input-number--populated:focus-visible {
  color: var(--ds-color-form-field-filled-focus-label-text-color, #448aff);
}
.ds-input-number--populated:hover {
  color: var(--ds-color-form-field-filled-hover-label-text-color, #616161);
}
.ds-input-number--empty:hover {
  background: var(--ds-color-form-field-filled-hover-input-background-hover, #f5f5f5);
  border: 1px solid var(--ds-color-form-field-filled-hover-border-color, #9e9e9e);
}
.ds-input-number--populated:disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-input-number--populated.ds-input-number--disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-input-number--empty:disabled {
  color: var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e);
}
.ds-input-number--empty.ds-input-number--disabled {
  color: var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e);
}
.ds-input-number--disabled {
  pointer-events: none;
}
```
</details>

#### Input number_but icon `[56967:10506]` — 1 вариантов
_Описание компонента в Figma отсутствует._
- Прочие свойства: Support#57977:0 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `56px`, растёт по контенту
    - ширина: `fit-content` (фикс.)
    - промежуток между элементами: `var(--ds-size-1x)`
- Разметка:

```html
<div class="ds-input-number-but-icon">
  <div class="ds-input-number-but-icon__button"></div>
  <div class="ds-input-number-but-icon__container"></div>
  <span class="ds-input-number-but-icon__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-input-number-but-icon__label">Текст</span>
  <div class="ds-input-number-but-icon__support-text"></div>
  <span class="ds-input-number-but-icon__text">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Input number_but icon [56967:10506] — 1 вариантов; оси: — */
.ds-input-number-but-icon {
  min-height: 56px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-1x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-number-but-icon__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
  white-space: nowrap;
}
.ds-input-number-but-icon__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-input-number-but-icon__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-input-number-but-icon__icon svg path {
  fill: currentColor;
}
.ds-input-number-but-icon__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-1x);
}
.ds-input-number-but-icon__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-icon-gap, 8px);
  padding: var(--ds-button-icon-m-size-pad-top, 8px) var(--ds-button-icon-m-size-pad-right, 8px) var(--ds-button-icon-m-size-pad-bottom, 8px) var(--ds-button-icon-m-size-pad-left, 8px);
  border-radius: var(--ds-button-icon-border-radius, 8px);
  background: var(--ds-color-button-icon-neutral-filled-default-background, #ffffff);
  box-shadow: var(--ds-shadow-shadows-01-dp-sl);
}
.ds-input-number-but-icon__text {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-input-number-but-icon__support-text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-form-field-filled-default-support-text-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-form-field-filled-default-support-text-color, #616161);
}
```
</details>

#### Input Timepicker `[58982:9561]` — 2 вариантов
**Описание и рекомендации по применению:**
Поле времени — ввод и выбор времени: время доставки, начало смены, время закрытия.  
Время можно ввести с клавиатуры или выбрать в списке по иконке справа. Для даты берите Input Datepicker.  


Как выбрать вариант: Empty — время не выбрано, Populated — время выбрано.
- **Type** (VARIANT): Empty, Populated
- Размеры и параметры:
    - высота: минимум `48px`, растёт по контенту
    - ширина: `250px` (фикс.)
    - фон: `#ffffff`
- Модификаторы (что меняет каждый):
    - `--empty`: color `var(--ds-color-form-field-input-label-text-color, #616161)`
    - `--populated`: color `var(--ds-color-form-field-filled-default-label-text-color, #616161)`
- Разметка:

```html
<div class="ds-input-timepicker ds-input-timepicker--empty">
  <div class="ds-input-timepicker__frame"></div>
  <span class="ds-input-timepicker__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-input-timepicker__label">Текст</span>
  <span class="ds-input-timepicker__support">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Input Timepicker [58982:9561] — 2 вариантов; оси: Type */
.ds-input-timepicker {
  min-height: 48px;
  width: 250px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-timepicker__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-form-field-input-label-text-color, #616161);
  white-space: nowrap;
}
.ds-input-timepicker__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-input-timepicker__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-input-timepicker__icon svg path {
  fill: currentColor;
}
.ds-input-timepicker__frame {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  padding: var(--ds-form-field-m-size-pad-input-top, 12px) var(--ds-form-field-m-size-pad-input-right, 12px) var(--ds-form-field-m-size-pad-input-bottom, 12px) var(--ds-form-field-m-size-pad-input-left, 12px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-input-timepicker__support {
  display: flex;
  flex-direction: row;
}
.ds-input-timepicker--empty {
  color: var(--ds-color-form-field-input-label-text-color, #616161);
}
.ds-input-timepicker--populated {
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
}
```
</details>

#### List (Сontainer) `[57604:4762]` — 1 вариантов
**Описание и рекомендации по применению:**
Контейнер списка — подложка с отступами, в которую складываются пункты List item.  
Берите его вместо своей подложки: отступы, разделители и прокрутка уже заданы.
- **Type** (VARIANT): Сontainer
- Прочие свойства: List container#57620:0 (SLOT), Scroll#57620:2 (BOOLEAN), Title#57623:6 (BOOLEAN), Divider header#57862:0 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `257px`, растёт по контенту
    - ширина: `258px` (фикс.)
    - внутренние отступы: `var(--ds-list-pad-top, 8px) 0 var(--ds-list-pad-bottom, 8px) 0`
    - скругление: `var(--ds-list-border-radius)`
    - фон: `var(--ds-color-list-background, #ffffff)`
- Модификаторы (что меняет каждый):
    - `--container`: color `var(--ds-color-list-item-text-label-color, #616161)`
- Разметка:

```html
<div class="ds-list-container ds-list-container--container">
  <div class="ds-list-container__content"></div>
  <div class="ds-list-container__divider"></div>
  <span class="ds-list-container__element-left"><!-- SVG-иконка ДС --></span>
  <span class="ds-list-container__element-right"><!-- SVG-иконка ДС --></span>
  <span class="ds-list-container__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-list-container__item"></div>
  <span class="ds-list-container__label">Текст</span>
  <div class="ds-list-container__scroll"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* List (Сontainer) [57604:4762] — 1 вариантов; оси: Type */
.ds-list-container {
  min-height: 257px;
  width: 258px;
  display: flex;
  flex-direction: column;
  padding: var(--ds-list-pad-top, 8px) 0 var(--ds-list-pad-bottom, 8px) 0;
  border-radius: var(--ds-list-border-radius);
  background: var(--ds-color-list-background, #ffffff);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-list-container__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-list-item-text-label-color, #616161);
  white-space: nowrap;
}
.ds-list-container__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: var(--ds-size-3x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-list-container__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-list-container__icon svg path {
  fill: currentColor;
}
.ds-list-container__item {
  display: flex;
  flex-direction: row;
  gap: var(--ds-list-item-gap, 8px);
  padding: var(--ds-list-item-pad-top, 8px) var(--ds-list-item-pad-right, 16px) var(--ds-list-item-pad-bottom, 8px) var(--ds-list-item-pad-left, 16px);
  background: var(--ds-color-list-item-default-background, #ffffff);
}
.ds-list-container__element-left {
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-list-container__content {
  display: flex;
  flex-direction: column;
}
.ds-list-container__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: #ffffff;
}
.ds-list-container__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-list-container__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-top, 2px) var(--ds-scroll-pad-right, 2px) var(--ds-scroll-pad-bottom, 2px) var(--ds-scroll-pad-left, 2px);
}
.ds-list-container--container {
  color: var(--ds-color-list-item-text-label-color, #616161);
}
```
</details>

#### List item `[54101:7922]` — 8 вариантов
**Описание и рекомендации по применению:**
Пункт списка — одна строка перечня: товар, документ, сотрудник, пункт меню действий.  
Вся строка кликабельна; действия над пунктом ставьте справа.  


Состояния: Default, Hover, Press, Selected, Back selected, Link, Negative (удаление), Disable.
- **State** (VARIANT): Back selected, Default, Disable, Hover, Link, Negative, Press, Selected
- Прочие свойства: Element left#54167:1 (BOOLEAN), Element right#54167:6 (BOOLEAN), Label up#54741:15 (BOOLEAN), Label down#54741:30 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `68px`, растёт по контенту
    - ширина: `258px` (фикс.)
    - внутренние отступы: `var(--ds-list-item-pad-top, 8px) var(--ds-list-item-pad-right, 16px) var(--ds-list-item-pad-bottom, 8px) var(--ds-list-item-pad-left, 16px)`
    - промежуток между элементами: `var(--ds-list-item-gap, 8px)`
    - фон: `var(--ds-color-list-item-default-background, #ffffff)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
- Состояния: `:active` (нажатие), `:disabled` (неактивно), `:hover` (наведение)
- Разметка:

```html
<div class="ds-list-item ds-list-item--disabled">
  <div class="ds-list-item__checkbox"></div>
  <div class="ds-list-item__content"></div>
  <span class="ds-list-item__element-left"><!-- SVG-иконка ДС --></span>
  <span class="ds-list-item__element-right"><!-- SVG-иконка ДС --></span>
  <span class="ds-list-item__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-list-item__icon-size"></div>
  <span class="ds-list-item__label">Текст</span>
  <div class="ds-list-item__label-down"></div>
  <div class="ds-list-item__label-up"></div>
  <span class="ds-list-item__text">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* List item [54101:7922] — 8 вариантов; оси: State */
.ds-list-item {
  min-height: 68px;
  width: 258px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-list-item-gap, 8px);
  padding: var(--ds-list-item-pad-top, 8px) var(--ds-list-item-pad-right, 16px) var(--ds-list-item-pad-bottom, 8px) var(--ds-list-item-pad-left, 16px);
  background: var(--ds-color-list-item-default-background, #ffffff);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-list-item__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-list-item-text-label-color, #616161);
  white-space: nowrap;
}
.ds-list-item__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-list-item__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-list-item__icon svg path {
  fill: currentColor;
}
.ds-list-item__element-left {
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-list-item__checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-list-item__content {
  display: flex;
  flex-direction: column;
}
.ds-list-item__label-up {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-list-item-text-label-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-list-item-text-label-color, #616161);
}
.ds-list-item__text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-list-item-text-color, #333333);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-list-item-text-color, #333333);
}
.ds-list-item__label-down {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-list-item-text-label-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-list-item-text-label-color, #616161);
}
.ds-list-item__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: #ffffff;
}
.ds-list-item__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-list-item:hover {
  background: var(--ds-color-list-item-hover-background, #f5f5f5);
}
.ds-list-item:active {
  background: var(--ds-color-list-item-press-background, #e0e0e0);
}
.ds-list-item:disabled {
  background: var(--ds-color-list-item-disable-background, #ffffff);
  color: var(--ds-color-list-item-disable-label-text-color, #9e9e9e);
}
.ds-list-item.ds-list-item--disabled {
  background: var(--ds-color-list-item-disable-background, #ffffff);
  color: var(--ds-color-list-item-disable-label-text-color, #9e9e9e);
}
.ds-list-item--disabled {
  pointer-events: none;
}
```
</details>

#### Logo iiko `[55332:19892]` — 4 вариантов
**Описание и рекомендации по применению:**
Логотип iiko — знак продукта в шапке приложения, боковом меню и на экранах входа.  
Пропорции и цвета не меняйте, поверх пёстрых фонов используйте инверсный вариант.  


Как выбрать вариант:  
Size=Full — знак с названием; Small — только знак (для свёрнутого меню).  
Style=Main — основной; Inverse — инверсный для тёмного фона.
- **Size** (VARIANT): Full, Small
- **Style** (VARIANT): Inverse, Main
- Размеры и параметры:
    - высота: `72px` (фикс.)
    - ширина: по контенту (hug)
    - фон: `#ffffff`
- Разметка:

```html
<div class="ds-logo-iiko">
  <div class="ds-logo-iiko__vector"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Logo iiko [55332:19892] — 4 вариантов; оси: Size, Style */
.ds-logo-iiko {
  height: 72px;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-logo-iiko__vector {
  height: 72px;
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-neutral-0, #ffffff);
}
```
</details>

#### Logo Syrve `[56079:771]` — 4 вариантов
**Описание и рекомендации по применению:**
Логотип Syrve — знак продукта для международной версии: шапка приложения, боковое меню, экран входа.  
Пропорции и цвета не меняйте; в макетах Syrve не смешивайте с логотипом iiko.  


Как выбрать вариант:  
Size=Full — знак с названием; Small — только знак (для свёрнутого меню).  
Style=Main — основной; Inverse — инверсный для тёмного фона.
- **Size** (VARIANT): Full, Small
- **Style** (VARIANT): Inverse, Main
- Размеры и параметры:
    - высота: `72px` (фикс.)
    - ширина: по контенту (hug)
    - фон: `#ffffff`
- Разметка:

```html
<div class="ds-logo-syrve">
  <div class="ds-logo-syrve__vector"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Logo Syrve [56079:771] — 4 вариантов; оси: Size, Style */
.ds-logo-syrve {
  height: 72px;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-logo-syrve__vector {
  height: 70.9px;
  display: flex;
  flex-direction: row;
  background: #00062b;
}
```
</details>

#### Menu (Container) `[54163:6705]` — 1 вариантов
**Описание и рекомендации по применению:**
Контейнер меню — подложка с тенью, в которую складываются пункты Menu item.  
Берите его вместо своей подложки: отступы, тень и разделители уже заданы.
- **Type** (VARIANT): Container
- Прочие свойства: Scroll#55632:0 (BOOLEAN), Menu container#56968:88 (SLOT), Title#57636:8 (BOOLEAN), Search#57750:7 (BOOLEAN), Button#57848:0 (BOOLEAN), Divider header#57848:2 (BOOLEAN), Divider footer#57848:4 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `418px`, растёт по контенту
    - ширина: `240px` (фикс.)
    - внутренние отступы: `var(--ds-menu-pad-top, 8px) 0 var(--ds-menu-pad-bottom, 8px) 0`
    - промежуток между элементами: `var(--ds-menu-gap)`
    - скругление: `var(--ds-menu-border-radius, 8px)`
    - фон: `var(--ds-color-menu-background, #ffffff)`
    - тень: `var(--ds-shadow-shadows-08-dp-s)`
- Модификаторы (что меняет каждый):
    - `--container`: color `var(--ds-color-search-default-text-color, #d6d6d6)`
- Разметка:

```html
<div class="ds-menu-container ds-menu-container--container">
  <div class="ds-menu-container__button-group"></div>
  <div class="ds-menu-container__content"></div>
  <div class="ds-menu-container__divider"></div>
  <span class="ds-menu-container__element-left"><!-- SVG-иконка ДС --></span>
  <span class="ds-menu-container__element-right"><!-- SVG-иконка ДС --></span>
  <span class="ds-menu-container__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-menu-container__label">Текст</span>
  <div class="ds-menu-container__scroll"></div>
  <div class="ds-menu-container__search"></div>
  <span class="ds-menu-container__title">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Menu (Container) [54163:6705] — 1 вариантов; оси: Type */
.ds-menu-container {
  min-height: 418px;
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-menu-gap);
  padding: var(--ds-menu-pad-top, 8px) 0 var(--ds-menu-pad-bottom, 8px) 0;
  border-radius: var(--ds-menu-border-radius, 8px);
  background: var(--ds-color-menu-background, #ffffff);
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-menu-container__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-search-default-text-color, #d6d6d6);
  white-space: nowrap;
}
.ds-menu-container__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: var(--ds-size-3x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-menu-container__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-menu-container__icon svg path {
  fill: currentColor;
}
.ds-menu-container__search {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2-5x);
  padding: 0 var(--ds-size-4x) var(--ds-size-1x) var(--ds-size-4x);
}
.ds-menu-container__title {
  display: flex;
  flex-direction: row;
  gap: var(--ds-menu-item-gap, 8px);
  padding: var(--ds-menu-item-pad-top, 8px) var(--ds-menu-item-pad-right, 16px) var(--ds-menu-item-pad-bottom, 8px) var(--ds-menu-item-pad-left, 16px);
  background: var(--ds-color-menu-item-default-background, #ffffff);
}
.ds-menu-container__element-left {
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-menu-container__content {
  display: flex;
  flex-direction: column;
}
.ds-menu-container__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: #ffffff;
}
.ds-menu-container__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-menu-container__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-top, 2px) var(--ds-scroll-pad-right, 2px) var(--ds-scroll-pad-bottom, 2px) var(--ds-scroll-pad-left, 2px);
}
.ds-menu-container__button-group {
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap, 8px);
  padding: var(--ds-button-group-margins-pad-top, 8px) var(--ds-button-group-margins-pad-right, 16px) var(--ds-button-group-margins-pad-bottom, 8px) var(--ds-button-group-margins-pad-left, 16px);
}
.ds-menu-container--container {
  color: var(--ds-color-search-default-text-color, #d6d6d6);
}
```
</details>

#### Menu item `[56090:1476]` — 7 вариантов
**Описание и рекомендации по применению:**
Пункт меню — одно действие или переход в выпадающем меню: «Изменить», «Дублировать», «Удалить».  
Опасные действия ставьте последними и оформляйте вариантом Negative; недоступные — блокируйте, а не убирайте.  


Состояния: Default, Hover, Press, Selected, Back selected, Negative, Disable.
- **State** (VARIANT): Back selected, Default, Disable, Hover, Negative, Press, Selected
- Прочие свойства: Element left#54167:1 (BOOLEAN), Element right#54167:6 (BOOLEAN), Label up#54741:15 (BOOLEAN), Label down#54741:30 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `68px`, растёт по контенту
    - ширина: `258px` (фикс.)
    - внутренние отступы: `var(--ds-menu-item-pad-top, 8px) var(--ds-menu-item-pad-right, 16px) var(--ds-menu-item-pad-bottom, 8px) var(--ds-menu-item-pad-left, 16px)`
    - промежуток между элементами: `var(--ds-menu-item-gap, 8px)`
    - фон: `var(--ds-color-menu-item-default-background, #ffffff)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
- Состояния: `:active` (нажатие), `:disabled` (неактивно), `:hover` (наведение)
- Разметка:

```html
<div class="ds-menu-item ds-menu-item--disabled">
  <div class="ds-menu-item__checkbox"></div>
  <div class="ds-menu-item__content"></div>
  <span class="ds-menu-item__element-left"><!-- SVG-иконка ДС --></span>
  <span class="ds-menu-item__element-right"><!-- SVG-иконка ДС --></span>
  <span class="ds-menu-item__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-menu-item__icon-size"></div>
  <span class="ds-menu-item__label">Текст</span>
  <div class="ds-menu-item__label-down"></div>
  <div class="ds-menu-item__label-up"></div>
  <span class="ds-menu-item__text">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Menu item [56090:1476] — 7 вариантов; оси: State */
.ds-menu-item {
  min-height: 68px;
  width: 258px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-menu-item-gap, 8px);
  padding: var(--ds-menu-item-pad-top, 8px) var(--ds-menu-item-pad-right, 16px) var(--ds-menu-item-pad-bottom, 8px) var(--ds-menu-item-pad-left, 16px);
  background: var(--ds-color-menu-item-default-background, #ffffff);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-menu-item__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-menu-item-text-label-color, #616161);
  white-space: nowrap;
}
.ds-menu-item__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-menu-item__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-menu-item__icon svg path {
  fill: currentColor;
}
.ds-menu-item__element-left {
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-menu-item__checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-menu-item__content {
  display: flex;
  flex-direction: column;
}
.ds-menu-item__label-up {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-menu-item-text-label-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-menu-item-text-label-color, #616161);
}
.ds-menu-item__text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-menu-item-text-color, #333333);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-menu-item-text-color, #333333);
}
.ds-menu-item__label-down {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-menu-item-text-label-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-menu-item-text-label-color, #616161);
}
.ds-menu-item__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: #ffffff;
}
.ds-menu-item__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-menu-item:hover {
  background: var(--ds-color-menu-item-hover-background, #f5f5f5);
}
.ds-menu-item:active {
  background: var(--ds-color-menu-item-press-background, #e0e0e0);
}
.ds-menu-item:disabled {
  background: var(--ds-color-menu-item-disable-background, #ffffff);
  color: var(--ds-color-menu-item-disable-label-text-color, #9e9e9e);
}
.ds-menu-item.ds-menu-item--disabled {
  background: var(--ds-color-menu-item-disable-background, #ffffff);
  color: var(--ds-color-menu-item-disable-label-text-color, #9e9e9e);
}
.ds-menu-item--disabled {
  pointer-events: none;
}
```
</details>

#### Picture `[58937:3985]` — 1 вариантов
_Описание компонента в Figma отсутствует._
- Прочие свойства: Crop#58947:6 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `189px`, растёт по контенту
    - ширина: `446px` (фикс.)
    - внутренние отступы: `var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x)`
    - промежуток между элементами: `var(--ds-size-2-5x)`
    - скругление: `var(--ds-size-2x)`
    - фон: `var(--ds-color-brand-accent-super-lightest, #f8f9fc)`
- Разметка:

```html
<div class="ds-picture">
  <div class="ds-picture__crop"></div>
  <div class="ds-picture__frame-1000001806"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Picture [58937:3985] — 1 вариантов; оси: — */
.ds-picture {
  min-height: 189px;
  width: 446px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-brand-accent-super-lightest, #f8f9fc);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-picture__crop {
  height: 173px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2-5x);
  border: 1px dashed var(--ds-color-stroke-hover, #9e9e9e);
}
.ds-picture__frame-1000001806 {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 440px;
}
```
</details>

#### Radio button `[54095:4263]` — 14 вариантов
**Описание и рекомендации по применению:**
Радиокнопка — выбор строго одного варианта из нескольких.  
Используйте, когда варианты взаимоисключающие: «Склад поставки». Если можно выбрать несколько — Checkbox.  


Состав: круглый индикатор без подписи. С подписью — Radio button label; набор вариантов с заголовком — Radio button group.  
Вариант по умолчанию должен быть выбран заранее — не оставляйте группу пустой.  


Как выбрать вариант:  
Type=Deselected / Selected — вариант не выбран / выбран.  
Variant=Normal / Error / Disable — обычный, с ошибкой (в группе не выбран обязательный вариант), недоступный.  


Состояния: Default, Hover, Press.
- **Variant** (VARIANT): Disable, Error, Normal
- **Type** (VARIANT): Deselected, Selected
- **State** (VARIANT): Default, Hover, Press
- CSS: выверено вручную, см. `components/selection.css` в разделе «Полные CSS-стили всех компонентов»

#### Radio button group `[54095:4392]` — 2 вариантов
**Описание и рекомендации по применению:**
Группа радиокнопок — набор взаимоисключающих вариантов с общим заголовком и общим support-текстом или текстом ошибки.  
Используйте, когда варианты относятся к одному вопросу и выбрать нужно один.  


Состав: заголовок группы (Support up), варианты Radio button label, общий текст под группой (Support down) — в ошибке он становится текстом ошибки для всей группы.  


Как выбрать вариант:  
Orientation=Vertical — варианты в столбец, основной случай.  
Orientation=Horizontal — в строку, когда вариантов мало и они короткие.
- **Orientation** (VARIANT): Horizontal, Vertical
- Прочие свойства: Slot vertical#57257:12 (SLOT), Slot horizontal#57257:15 (SLOT), Support up#58199:15 (BOOLEAN), Support down#58199:18 (BOOLEAN)
- CSS: выверено вручную, см. `components/selection.css` в разделе «Полные CSS-стили всех компонентов»

#### Radio button label `[54095:4306]` — 6 вариантов
**Описание и рекомендации по применению:**
Радиокнопка с подписью — основной способ показать вариант выбора: индикатор + текст, при необходимости support-текст.  
Используйте в формах и настройках, где нужен один вариант из списка.  


Состав: радиокнопка слева или справа от подписи (Icon left / Icon right), Label, Support.  
Кликабельна вся строка вместе с подписью.  


Как выбрать вариант:  
Type=Deselected / Selected — не выбран / выбран.  
Variant=Normal / Error / Disable — обычный, с ошибкой, недоступный.
- **Variant** (VARIANT): Disable, Error, Normal
- **Type** (VARIANT): Deselected, Selected
- Прочие свойства: Icon left#17172:1340 (BOOLEAN), Icon right#17172:1349 (BOOLEAN), Label#54065:0 (BOOLEAN), Support#58197:0 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `var(--ds-size-5x)`, растёт по контенту
    - ширина: `fit-content` (фикс.)
    - промежуток между элементами: `var(--ds-radio-button-label-gap-support, 4px)`
- Модификаторы (что меняет каждый):
    - `--disable`: color `var(--ds-color-radio-button-label-text-disable-color, #9e9e9e)`
    - `--error`: color `var(--ds-color-radio-button-label-text-color, #333333)`
    - `--normal`: color `var(--ds-color-radio-button-label-text-color, #333333)`
- Разметка:

```html
<div class="ds-radio-button-label ds-radio-button-label--disable">
  <div class="ds-radio-button-label__form"></div>
  <span class="ds-radio-button-label__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-radio-button-label__label">Текст</span>
  <div class="ds-radio-button-label__left"></div>
  <div class="ds-radio-button-label__right"></div>
  <span class="ds-radio-button-label__support">Текст</span>
  <div class="ds-radio-button-label__support-text"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Radio button label [54095:4306] — 6 вариантов; оси: Variant, Type */
.ds-radio-button-label {
  min-height: var(--ds-size-5x);
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: var(--ds-radio-button-label-gap-support, 4px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-radio-button-label__label {
  font-size: var(--ds-typography-font-size-3-5x);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-line-height-5x);
  letter-spacing: 0.25px;
  color: var(--ds-color-radio-button-label-text-color, #333333);
  white-space: nowrap;
}
.ds-radio-button-label__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-radio-button-label__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-radio-button-label__icon svg path {
  fill: currentColor;
}
.ds-radio-button-label__form {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-radio-button-label-gap, 8px);
}
.ds-radio-button-label__left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-radio-button-label__цвет-и-палитра {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-radio-button-label-text-color, #333333);
  font-size: var(--ds-typography-font-size-3-5x);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-line-height-5x);
  color: var(--ds-color-radio-button-label-text-color, #333333);
}
.ds-radio-button-label__right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-radio-button-label__support {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 var(--ds-radio-button-label-pad-left-support-7x, 28px);
}
.ds-radio-button-label__support-text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-radio-button-label-text-support-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-radio-button-label-text-support-color, #616161);
}
.ds-radio-button-label--normal.ds-radio-button-label--deselected {
  color: var(--ds-color-radio-button-label-text-color, #333333);
}
.ds-radio-button-label--normal.ds-radio-button-label--selected {
  color: var(--ds-color-radio-button-label-text-color, #333333);
}
.ds-radio-button-label--error.ds-radio-button-label--deselected {
  color: var(--ds-color-radio-button-label-text-color, #333333);
}
.ds-radio-button-label--error.ds-radio-button-label--selected {
  color: var(--ds-color-radio-button-label-text-color, #333333);
}
.ds-radio-button-label--disable.ds-radio-button-label--deselected {
  color: var(--ds-color-radio-button-label-text-disable-color, #9e9e9e);
}
.ds-radio-button-label--disable.ds-radio-button-label--selected {
  color: var(--ds-color-radio-button-label-text-disable-color, #9e9e9e);
}
```
</details>

#### Scroll `[53615:15339]` — 12 вариантов
**Описание и рекомендации по применению:**
Полоса прокрутки — прокрутка длинного содержимого: таблицы, списка, панели.  
Берите её для оформления прокручиваемых блоков в макете; в готовом интерфейсе полосу рисует браузер.  


Как выбрать вариант:  
Position=First — ползунок у начала; Middle — в середине; Last — в конце.  
Size=M, S — по толщине полосы под размер блока.  
Состояния: Default, Hover.
- **Size** (VARIANT): M, S
- **Position** (VARIANT): First, Last, Middle
- **State** (VARIANT): Default, Hover
- Размеры и параметры:
    - ширина: `184px` (фикс.)
    - внутренние отступы: `var(--ds-scroll-pad-top, 2px) var(--ds-scroll-pad-right, 2px) var(--ds-scroll-pad-bottom, 2px) var(--ds-scroll-pad-left, 2px)`
- Модификаторы (что меняет каждый):
    - `--first`
    - `--last`
    - `--middle`: align-items `center`
    - `--s`: ширина `var(--ds-size-2x)`
- Состояния: `:hover` (наведение)
- Разметка:

```html
<div class="ds-scroll ds-scroll--first">
  <div class="ds-scroll__background"></div>
  <div class="ds-scroll__knob"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Scroll [53615:15339] — 12 вариантов; оси: Size, Position, State */
.ds-scroll {
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-top, 2px) var(--ds-scroll-pad-right, 2px) var(--ds-scroll-pad-bottom, 2px) var(--ds-scroll-pad-left, 2px);
  width: 184px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-scroll__background {
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-scroll-border-radius, 8px);
  background: var(--ds-color-scroll-default-background, #fafafa);
}
.ds-scroll__knob {
  height: var(--ds-size-2x);
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2-5x) var(--ds-size-2-5x) var(--ds-size-2-5x) var(--ds-size-2-5x);
  border-radius: var(--ds-scroll-knob-radius, 8px);
  background: var(--ds-color-scroll-default-knob-color, #d6d6d6);
}
.ds-scroll--s {
  width: var(--ds-size-2x);
}
.ds-scroll--first:hover {
  background: var(--ds-color-scroll-hover-background, #ebebeb);
}
.ds-scroll--middle {
  align-items: center;
}
.ds-scroll--middle:hover {
  background: var(--ds-color-scroll-hover-background, #ebebeb);
}
.ds-scroll--last:hover {
  background: var(--ds-color-scroll-hover-background, #ebebeb);
}
```
</details>

#### Scroll tabs `[59032:1821]` — 4 вариантов
**Описание и рекомендации по применению:**
Стрелка прокрутки вкладок — появляется, когда вкладки не помещаются по ширине.  
Служебный элемент вкладок: ставится по краям строки вкладок, отдельно не используется. Вкладки не переносите на вторую строку — прокручивайте.  


Как выбрать вариант: сторона прокрутки — влево или вправо.
- **Orientation** (VARIANT): Left, Right
- **State** (VARIANT): Default, Hover
- Размеры и параметры:
    - высота: минимум `var(--ds-size-7x)`, растёт по контенту
    - ширина: `fit-content` (фикс.)
    - внутренние отступы: `0 0 0 48px`
    - промежуток между элементами: `var(--ds-size-2-5x)`
- Модификаторы (что меняет каждый):
    - `--left`: внутренние отступы `0 48px 0 0`
- Разметка:

```html
<div class="ds-scroll-tabs ds-scroll-tabs--left">
  <div class="ds-scroll-tabs__button-icon"></div>
  <span class="ds-scroll-tabs__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-scroll-tabs__icon-size"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Scroll tabs [59032:1821] — 4 вариантов; оси: Orientation, State */
.ds-scroll-tabs {
  min-height: var(--ds-size-7x);
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: 0 0 0 48px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-scroll-tabs__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-scroll-tabs__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-scroll-tabs__icon svg path {
  fill: currentColor;
}
.ds-scroll-tabs__button-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-icon-gap, 8px);
  padding: var(--ds-button-icon-s-size-pad-top, 4px) var(--ds-button-icon-s-size-pad-right, 4px) var(--ds-button-icon-s-size-pad-bottom, 4px) var(--ds-button-icon-s-size-pad-left, 4px);
  border-radius: var(--ds-button-icon-border-radius, 8px);
  background: var(--ds-color-button-icon-neutral-filled-default-background, #ffffff);
  box-shadow: var(--ds-shadow-shadows-01-dp-sl);
}
.ds-scroll-tabs__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-scroll-tabs--left {
  padding: 0 48px 0 0;
}
```
</details>

#### Search `[54453:1620]` — 15 вариантов
**Описание и рекомендации по применению:**
Поле поиска — фильтрация списка или таблицы по строке: поиск товара, накладной, сотрудника.  
Показывайте результаты по мере ввода, а не по кнопке; крестик справа очищает запрос.  


Как выбрать вариант:  
Size=M — основной; S — панели и шапки блоков; XS — строки таблиц и плотные панели.  
Состояния: Default, Hover, Focus, Focus+Value, Completed, Disable.
- **Size** (VARIANT): M, S, XS
- **State** (VARIANT): Completed, Default, Disable, Focus, Focus+Value, Hover
- Прочие свойства: Left icon#54453:0 (BOOLEAN), Right icon#54459:3 (BOOLEAN)
- Размеры и параметры:
    - ширина: `243px` (фикс.)
    - внутренние отступы: `var(--ds-search-m-size-pad-top, 12px) var(--ds-search-m-size-pad-right, 12px) var(--ds-search-m-size-pad-bottom, 12px) var(--ds-search-m-size-pad-left, 12px)`
    - промежуток между элементами: `var(--ds-search-gap, 8px)`
    - скругление: `var(--ds-search-border-radius, 12px)`
    - рамка: `1px solid var(--ds-color-search-default-border-color, #e0e0e0)`
    - фон: `var(--ds-color-search-background, #f8f9fc)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--s`: внутренние отступы `var(--ds-search-s-size-pad-top, 8px) var(--ds-search-s-size-pad-right, 12px) var(--ds-search-s-size-pad-bottom, 8px) var(--ds-search-s-size-pad-left, 12px)`, ширина `var(--ds-size-5x)`, высота `var(--ds-size-5x)`
    - `--xs`: высота `var(--ds-size-9x)`, ширина `var(--ds-size-9x)`, внутренние отступы `var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x)`, скругление `var(--ds-size-circular)`
- Состояния: `:disabled` (неактивно), `:focus-visible`, `:hover` (наведение)
- Разметка:

```html
<div class="ds-search ds-search--disabled">
  <div class="ds-search__divider"></div>
  <span class="ds-search__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-search__icon-size"></div>
  <span class="ds-search__label">Текст</span>
  <div class="ds-search__right-icon"></div>
  <span class="ds-search__text">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Search [54453:1620] — 15 вариантов; оси: Size, State */
.ds-search {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-search-gap, 8px);
  width: 243px;
  padding: var(--ds-search-m-size-pad-top, 12px) var(--ds-search-m-size-pad-right, 12px) var(--ds-search-m-size-pad-bottom, 12px) var(--ds-search-m-size-pad-left, 12px);
  border-radius: var(--ds-search-border-radius, 12px);
  background: var(--ds-color-search-background, #f8f9fc);
  border: 1px solid var(--ds-color-search-default-border-color, #e0e0e0);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-search__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-search-default-text-color, #d6d6d6);
  white-space: nowrap;
}
.ds-search__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-search__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-search__icon svg path {
  fill: currentColor;
}
.ds-search__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-search__text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-search-default-text-color, #d6d6d6);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-search-default-text-color, #d6d6d6);
}
.ds-search__right-icon {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
}
.ds-search__divider {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-search--s {
  padding: var(--ds-search-s-size-pad-top, 8px) var(--ds-search-s-size-pad-right, 12px) var(--ds-search-s-size-pad-bottom, 8px) var(--ds-search-s-size-pad-left, 12px);
}
.ds-search--s .ds-search__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-search--xs {
  height: var(--ds-size-9x);
  width: var(--ds-size-9x);
  padding: var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x);
  border-radius: var(--ds-size-circular);
}
.ds-search--xs .ds-search__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-search:disabled {
  background: var(--ds-color-search-disable-background, #ebebeb);
  color: var(--ds-color-search-disable-text-color, #9e9e9e);
}
.ds-search.ds-search--disabled {
  background: var(--ds-color-search-disable-background, #ebebeb);
  color: var(--ds-color-search-disable-text-color, #9e9e9e);
}
.ds-search:focus-visible {
  color: var(--ds-color-search-focusvalue-text-color, #333333);
}
.ds-search:hover {
  border: 1px solid var(--ds-color-search-hover-border-color, #9e9e9e);
}
.ds-search--disabled {
  pointer-events: none;
}
```
</details>

#### Select (Сontainer) `[57735:17612]` — 1 вариантов
**Описание и рекомендации по применению:**
Контейнер выпадающего списка — подложка с тенью, в которую складываются пункты Select item.  
Берите его для собственного списка вместо рисования своей подложки; отступы и тень уже заданы.
- **Type** (VARIANT): Сontainer
- Прочие свойства: Scroll#55632:0 (BOOLEAN), Item container#56968:88 (SLOT), Title#57636:8 (BOOLEAN), Search#57740:3 (BOOLEAN), Button#57740:5 (BOOLEAN), Divider header#57862:2 (BOOLEAN), Divider footer#57862:4 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `406px`, растёт по контенту
    - ширина: `240px` (фикс.)
    - внутренние отступы: `var(--ds-menu-pad-top, 8px) 0 var(--ds-menu-pad-bottom, 8px) 0`
    - промежуток между элементами: `var(--ds-space-0)`
    - скругление: `var(--ds-radius-3x, 12px)`
    - фон: `var(--ds-color-menu-background, #ffffff)`
    - тень: `var(--ds-shadow-shadows-08-dp-s)`
- Модификаторы (что меняет каждый):
    - `--container`: color `var(--ds-color-search-default-text-color, #d6d6d6)`
- Разметка:

```html
<div class="ds-select-container ds-select-container--container">
  <div class="ds-select-container__button"></div>
  <div class="ds-select-container__button-group"></div>
  <div class="ds-select-container__content"></div>
  <div class="ds-select-container__divider"></div>
  <span class="ds-select-container__element-left"><!-- SVG-иконка ДС --></span>
  <span class="ds-select-container__element-right"><!-- SVG-иконка ДС --></span>
  <span class="ds-select-container__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-select-container__label">Текст</span>
  <div class="ds-select-container__scroll"></div>
  <div class="ds-select-container__search"></div>
  <span class="ds-select-container__title">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Select (Сontainer) [57735:17612] — 1 вариантов; оси: Type */
.ds-select-container {
  min-height: 406px;
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-space-0);
  padding: var(--ds-menu-pad-top, 8px) 0 var(--ds-menu-pad-bottom, 8px) 0;
  border-radius: var(--ds-radius-3x, 12px);
  background: var(--ds-color-menu-background, #ffffff);
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-container__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-search-default-text-color, #d6d6d6);
  white-space: nowrap;
}
.ds-select-container__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: var(--ds-size-3x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-select-container__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-select-container__icon svg path {
  fill: currentColor;
}
.ds-select-container__search {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2-5x);
  padding: 0 var(--ds-size-2x) 0 var(--ds-size-2x);
}
.ds-select-container__title {
  display: flex;
  flex-direction: row;
  gap: var(--ds-select-item-gap, 8px);
  padding: var(--ds-select-item-pad-top, 8px) var(--ds-select-item-pad-right, 16px) var(--ds-select-item-pad-bottom, 8px) var(--ds-select-item-pad-left, 16px);
  background: var(--ds-color-menu-item-default-background, #ffffff);
}
.ds-select-container__element-left {
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-select-container__content {
  display: flex;
  flex-direction: column;
}
.ds-select-container__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: #ffffff;
}
.ds-select-container__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-select-container__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-top, 2px) var(--ds-scroll-pad-right, 2px) var(--ds-scroll-pad-bottom, 2px) var(--ds-scroll-pad-left, 2px);
}
.ds-select-container__button-group {
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap, 8px);
  padding: var(--ds-button-group-margins-pad-top, 8px) var(--ds-button-group-margins-pad-right, 16px) var(--ds-button-group-margins-pad-bottom, 8px) var(--ds-button-group-margins-pad-left, 16px);
}
.ds-select-container__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-s-size-gap, 4px);
  padding: var(--ds-button-s-size-pad-top, 4px) var(--ds-button-s-size-pad-right, 8px) var(--ds-button-s-size-pad-bottom, 4px) var(--ds-button-s-size-pad-left, 8px);
  border-radius: var(--ds-button-border-radius, 8px);
  border: 1px solid var(--ds-color-button-neutral-outlined-default-border-color, #e0e0e0);
}
.ds-select-container--container {
  color: var(--ds-color-search-default-text-color, #d6d6d6);
}
```
</details>

#### Select cell `[60231:74976]` — 7 вариантов
**Описание и рекомендации по применению:**
Список выбора внутри ячейки таблицы — выбор значения прямо в строке: склад, статус, единица измерения.  
Используйте в редактируемых таблицах; вне таблицы берите Select form.  


Состояния: Default, Hover, Focus, Focus+Value, Error, Error+Hover, Disable.
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Value, Hover
- Размеры и параметры:
    - высота: минимум `var(--ds-size-9x)`, растёт по контенту
    - ширина: `200px` (фикс.)
    - внутренние отступы: `var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px)`
    - промежуток между элементами: `var(--ds-size-2x)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
- Состояния: `:disabled` (неактивно), `:focus-visible`, `:hover` (наведение)
- Разметка:

```html
<div class="ds-select-cell ds-select-cell--disabled">
  <span class="ds-select-cell__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-select-cell__input"></div>
  <div class="ds-select-cell__input-frame"></div>
  <span class="ds-select-cell__label">Текст</span>
  <span class="ds-select-cell__support">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Select cell [60231:74976] — 7 вариантов; оси: State */
.ds-select-cell {
  min-height: var(--ds-size-9x);
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-cell__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
  white-space: nowrap;
}
.ds-select-cell__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-select-cell__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-select-cell__icon svg path {
  fill: currentColor;
}
.ds-select-cell__input {
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support, 4px);
}
.ds-select-cell__input-frame {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-select-cell__support {
  display: flex;
  flex-direction: row;
}
.ds-select-cell:hover {
  background: var(--ds-palette-neutral-50, #f5f5f5);
  border: 1px solid var(--ds-color-table-cell-content-hover-border-color, #9e9e9e);
}
.ds-select-cell:focus-visible {
  color: var(--ds-color-form-field-filled-focus-label-text-color, #448aff);
}
.ds-select-cell:disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-select-cell.ds-select-cell--disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-select-cell--disabled {
  pointer-events: none;
}
```
</details>

#### Select form `[57862:17226]` — 22 вариантов
**Описание и рекомендации по применению:**
Список выбора — выбор значения из готового набора: склад, поставщик, тип оплаты.  
Берите его, когда вариантов много и они известны заранее; для 2–3 вариантов на виду используйте Radio button или Toggle buttons, для поиска по большому справочнику — Autocomplete.  


Состав: Label, поле со значением и стрелкой, выпадающий список (Select item внутри контейнера), support-текст под полем.  


Как выбрать вариант:  
Variant=Empty — значение не выбрано; Populated — значение выбрано.  
Size=M — основной; S и XS — плотные формы и таблицы.  
Состояния: Default, Hover, Focus, Focus+Value, Error, Disable.
- **Size** (VARIANT): M, S, XS
- **Variant** (VARIANT): Empty, Populated
- **State** (VARIANT): Default, Disable, Error, Focus, Focus+Value, Hover
- Размеры и параметры:
    - ширина: `250px` (фикс.)
    - фон: `#ffffff`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--empty`: color `var(--ds-color-form-field-input-label-text-color, #616161)`, color `var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e)`
    - `--populated`: color `var(--ds-color-form-field-filled-default-label-text-color, #616161)`, color `var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e)`
    - `--s`: ширина `var(--ds-size-5x)`, высота `var(--ds-size-5x)`
    - `--xs`: ширина `var(--ds-size-5x)`, высота `var(--ds-size-5x)`
- Состояния: `:disabled` (неактивно), `:focus-visible`, `:hover` (наведение)
- Разметка:

```html
<div class="ds-select-form ds-select-form--disabled">
  <span class="ds-select-form__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-select-form__input"></div>
  <div class="ds-select-form__input-frame"></div>
  <span class="ds-select-form__label">Текст</span>
  <span class="ds-select-form__support">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Select form [57862:17226] — 22 вариантов; оси: Size, Variant, State */
.ds-select-form {
  width: 250px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-form__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-form-field-input-label-text-color, #616161);
  white-space: nowrap;
}
.ds-select-form__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-select-form__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-select-form__icon svg path {
  fill: currentColor;
}
.ds-select-form__input {
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support, 4px);
}
.ds-select-form__input-frame {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  padding: var(--ds-form-field-m-size-pad-input-top, 12px) var(--ds-form-field-m-size-pad-input-right, 12px) var(--ds-form-field-m-size-pad-input-bottom, 12px) var(--ds-form-field-m-size-pad-input-left, 12px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-select-form__support {
  display: flex;
  flex-direction: row;
}
.ds-select-form--s .ds-select-form__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-select-form--xs .ds-select-form__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-select-form--empty {
  color: var(--ds-color-form-field-input-label-text-color, #616161);
}
.ds-select-form--populated {
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
}
.ds-select-form--empty:hover {
  background: var(--ds-color-form-field-filled-hover-input-background-hover, #f5f5f5);
  border: 1px solid var(--ds-color-form-field-filled-hover-border-color, #9e9e9e);
}
.ds-select-form--populated:hover {
  color: var(--ds-color-form-field-filled-hover-label-text-color, #616161);
}
.ds-select-form--populated:focus-visible {
  color: var(--ds-color-form-field-filled-focus-label-text-color, #448aff);
}
.ds-select-form--empty:disabled {
  color: var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e);
}
.ds-select-form--empty.ds-select-form--disabled {
  color: var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e);
}
.ds-select-form--populated:disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-select-form--populated.ds-select-form--disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-select-form--disabled {
  pointer-events: none;
}
```
</details>

#### Select item `[57735:17872]` — 8 вариантов
**Описание и рекомендации по применению:**
Пункт выпадающего списка — одна строка выбора внутри Select: значение, при необходимости с подзаголовком и иконкой.  
Подзаголовок используйте, когда одного названия недостаточно (артикул, склад, комментарий).  


Состояния: Default, Hover, Press, Selected, Back selected, Error, Disable.
- **State** (VARIANT): Back selected, Default, Disable, Error, Hover, Press, Selected
- **Subtitle** (VARIANT): False, True
- Прочие свойства: Element left#54167:1 (BOOLEAN), Element right#54167:6 (BOOLEAN), Label up#54741:15 (BOOLEAN), Label down#54741:30 (BOOLEAN), Left#60868:0 (BOOLEAN), Right#60868:1 (BOOLEAN)
- Размеры и параметры:
    - ширина: `258px` (фикс.)
    - внутренние отступы: `var(--ds-select-item-pad-top-sub, 12px) var(--ds-select-item-pad-right, 16px) var(--ds-select-item-pad-bottom-sub, 6px) var(--ds-select-item-pad-left, 16px)`
    - промежуток между элементами: `var(--ds-select-item-gap, 8px)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--false`: внутренние отступы `var(--ds-select-item-pad-top, 8px) var(--ds-select-item-pad-right, 16px) var(--ds-select-item-pad-bottom, 8px) var(--ds-select-item-pad-left, 16px)`, фон `var(--ds-color-select-item-default-background, #ffffff)`, color `var(--ds-color-select-item-text-label-color, #616161)`, фон `var(--ds-color-select-item-disable-background, #ffffff)`
    - `--true`: align-items `center`, фон `var(--ds-color-select-item-default-background, #ffffff)`, color `var(--ds-color-select-item-text-label-color, #616161)`
- Состояния: `:active` (нажатие), `:disabled` (неактивно), `:hover` (наведение)
- Разметка:

```html
<div class="ds-select-item ds-select-item--disabled">
  <div class="ds-select-item__content"></div>
  <span class="ds-select-item__element-left"><!-- SVG-иконка ДС --></span>
  <span class="ds-select-item__element-right"><!-- SVG-иконка ДС --></span>
  <span class="ds-select-item__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-select-item__icon-size"></div>
  <span class="ds-select-item__label">Текст</span>
  <div class="ds-select-item__label-down"></div>
  <div class="ds-select-item__label-up"></div>
  <div class="ds-select-item__subtitle"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Select item [57735:17872] — 8 вариантов; оси: State, Subtitle */
.ds-select-item {
  width: 258px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-select-item-gap, 8px);
  padding: var(--ds-select-item-pad-top-sub, 12px) var(--ds-select-item-pad-right, 16px) var(--ds-select-item-pad-bottom-sub, 6px) var(--ds-select-item-pad-left, 16px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-item__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-select-item-text-label-color, #616161);
  white-space: nowrap;
}
.ds-select-item__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-select-item__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-select-item__icon svg path {
  fill: currentColor;
}
.ds-select-item__element-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: #ffffff;
}
.ds-select-item__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-select-item__content {
  display: flex;
  flex-direction: column;
}
.ds-select-item__label-up {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-select-item-text-label-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-select-item-text-label-color, #616161);
}
.ds-select-item__subtitle {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-select-item-text-label-color, #616161);
  font-size: var(--ds-font-caption-m-10-normal-medium-size);
  line-height: var(--ds-font-caption-m-10-normal-medium-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-medium-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-medium-weight);
  text-transform: capitalize;
  color: var(--ds-color-select-item-text-label-color, #616161);
}
.ds-select-item__label-down {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-select-item-text-label-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-select-item-text-label-color, #616161);
}
.ds-select-item__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: #ffffff;
}
.ds-select-item--true {
  align-items: center;
  background: var(--ds-color-select-item-default-background, #ffffff);
  color: var(--ds-color-select-item-text-label-color, #616161);
}
.ds-select-item--false {
  padding: var(--ds-select-item-pad-top, 8px) var(--ds-select-item-pad-right, 16px) var(--ds-select-item-pad-bottom, 8px) var(--ds-select-item-pad-left, 16px);
  background: var(--ds-color-select-item-default-background, #ffffff);
  color: var(--ds-color-select-item-text-label-color, #616161);
}
.ds-select-item--false:hover {
  background: var(--ds-color-select-item-hover-background, #f5f5f5);
}
.ds-select-item--false:active {
  background: var(--ds-color-select-item-press-background, #e0e0e0);
}
.ds-select-item--false:disabled {
  background: var(--ds-color-select-item-disable-background, #ffffff);
  color: var(--ds-color-select-item-disable-label-text-color, #9e9e9e);
}
.ds-select-item--false.ds-select-item--disabled {
  background: var(--ds-color-select-item-disable-background, #ffffff);
  color: var(--ds-color-select-item-disable-label-text-color, #9e9e9e);
}
.ds-select-item--disabled {
  pointer-events: none;
}
```
</details>

#### Sidenav control `[55142:1734]` — 6 вариантов
**Описание и рекомендации по применению:**
Кнопка свёртывания бокового меню — переключает меню между раскрытым и свёрнутым видом.  
Стоит на границе меню; в макете показывайте её в том же состоянии, что и само меню.  


Состояния: Default, Hover, Press.
- **Mode** (VARIANT): Collapsed, Expanded
- **State** (VARIANT): Default, Hover, Press
- Прочие свойства: Divider#55147:0 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `41px`, растёт по контенту
    - ширина: `200px` (фикс.)
    - промежуток между элементами: `var(--ds-sidenav-control-expanded-gap)`
- Модификаторы (что меняет каждый):
    - `--collapsed`: ширина `fit-content`, промежуток между элементами `var(--ds-sidenav-control-collapsed-gap)`
    - `--expanded`: фон `var(--ds-color-sidenav-control-background, #263136)`, color `var(--ds-color-sidenav-control-text-color, #ffffff)`
- Состояния: `:active` (нажатие), `:hover` (наведение)
- Разметка:

```html
<div class="ds-sidenav-control ds-sidenav-control--collapsed">
  <div class="ds-sidenav-control__content"></div>
  <div class="ds-sidenav-control__divider"></div>
  <span class="ds-sidenav-control__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-sidenav-control__icon-size"></div>
  <span class="ds-sidenav-control__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Sidenav control [55142:1734] — 6 вариантов; оси: Mode, State */
.ds-sidenav-control {
  min-height: 41px;
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: var(--ds-sidenav-control-expanded-gap);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-control__label {
  font-size: var(--ds-font-caption-m-10-normal-regular-size);
  line-height: var(--ds-font-caption-m-10-normal-regular-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-regular-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-regular-weight);
  color: var(--ds-color-sidenav-control-text-color, #ffffff);
  white-space: nowrap;
}
.ds-sidenav-control__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-sidenav-control__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-sidenav-control__icon svg path {
  fill: currentColor;
}
.ds-sidenav-control__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-sidenav-control-expanded-gap-content, 8px);
  padding: var(--ds-sidenav-control-pad-top, 8px) var(--ds-sidenav-control-pad-right, 16px) var(--ds-sidenav-control-pad-bottom, 12px) var(--ds-sidenav-control-pad-left, 16px);
  background: var(--ds-color-sidenav-control-background, #263136);
}
.ds-sidenav-control__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-sidenav-control__свернуть-меню {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-control-text-color, #ffffff);
  font-size: var(--ds-font-caption-m-10-normal-regular-size);
  line-height: var(--ds-font-caption-m-10-normal-regular-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-regular-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-regular-weight);
  color: var(--ds-color-sidenav-control-text-color, #ffffff);
}
.ds-sidenav-control__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-sidenav-control--collapsed:hover {
  background: var(--ds-color-sidenav-control-background-hover, #36474e);
}
.ds-sidenav-control--collapsed:active {
  background: var(--ds-color-sidenav-control-background-press, #36474e);
}
.ds-sidenav-control--expanded {
  background: var(--ds-color-sidenav-control-background, #263136);
  color: var(--ds-color-sidenav-control-text-color, #ffffff);
}
.ds-sidenav-control--expanded:hover {
  background: var(--ds-color-sidenav-control-background-hover, #36474e);
}
.ds-sidenav-control--expanded:active {
  background: var(--ds-color-sidenav-control-background-press, #36474e);
}
.ds-sidenav-control--collapsed {
  width: fit-content;
  gap: var(--ds-sidenav-control-collapsed-gap);
}
```
</details>

#### Sidenav Footer `[55111:1056]` — 3 вариантов
**Описание и рекомендации по применению:**
Подвал бокового меню — пользователь, помощь и выход под списком разделов.  
В свёрнутом меню остаются только иконки.  


Как выбрать вариант: уровень меню (основное или вложенное) и раскрыто ли меню.
- **Type** (VARIANT): L1, L2
- **Mode** (VARIANT): Collapsed, Expanded
- Прочие свойства: Divider#55147:10 (BOOLEAN), Container#59128:17 (SLOT), Container#59128:25 (SLOT)
- Размеры и параметры:
    - ширина: `260px` (фикс.)
    - внутренние отступы: `var(--ds-sidenav-footer-l2-pad-top, 12px) var(--ds-sidenav-footer-l2-pad-right, 16px) var(--ds-sidenav-footer-l2-pad-bottom, 12px) var(--ds-sidenav-footer-l2-pad-left, 16px)`
    - промежуток между элементами: `var(--ds-sidenav-footer-l2-gap, 12px)`
- Модификаторы (что меняет каждый):
    - `--l1`: ширина `200px`, направление `column`, color `var(--ds-color-sidenav-item-l1-text-color, #ffffff)`, ширина `52px`
    - `--l2`: направление `row`, align-items `center`, фон `var(--ds-color-sidenav-footer-l2-background, #ffffff)`, color `var(--ds-color-sidenav-footer-l2-text-color, #616161)`
- Разметка:

```html
<div class="ds-sidenav-footer ds-sidenav-footer--l1">
  <div class="ds-sidenav-footer__divider"></div>
  <span class="ds-sidenav-footer__label">Текст</span>
  <div class="ds-sidenav-footer__logo-iiko"></div>
  <div class="ds-sidenav-footer__vector"></div>
  <div class="ds-sidenav-footer__ver-7-8-6-29440"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Sidenav Footer [55111:1056] — 3 вариантов; оси: Type, Mode */
.ds-sidenav-footer {
  display: flex;
  width: 260px;
  padding: var(--ds-sidenav-footer-l2-pad-top, 12px) var(--ds-sidenav-footer-l2-pad-right, 16px) var(--ds-sidenav-footer-l2-pad-bottom, 12px) var(--ds-sidenav-footer-l2-pad-left, 16px);
  gap: var(--ds-sidenav-footer-l2-gap, 12px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-footer__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-sidenav-footer-l2-text-color, #616161);
  white-space: nowrap;
}
.ds-sidenav-footer__logo-iiko {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-sidenav-footer__vector {
  height: 9.8px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-footer-l2-logo, #ff5252);
}
.ds-sidenav-footer__divider {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-sidenav-footer__ver-7-8-6-29440 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-footer-l2-text-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-sidenav-footer-l2-text-color, #616161);
}
.ds-sidenav-footer--l2.ds-sidenav-footer--expanded {
  flex-direction: row;
  align-items: center;
  background: var(--ds-color-sidenav-footer-l2-background, #ffffff);
  color: var(--ds-color-sidenav-footer-l2-text-color, #616161);
}
.ds-sidenav-footer--l1.ds-sidenav-footer--expanded {
  width: 200px;
  flex-direction: column;
  color: var(--ds-color-sidenav-item-l1-text-color, #ffffff);
}
.ds-sidenav-footer--l1.ds-sidenav-footer--collapsed {
  width: 52px;
  flex-direction: column;
  color: var(--ds-color-text-accent, #448aff);
}
```
</details>

#### Sidenav header `[55045:637]` — 3 вариантов
**Описание и рекомендации по применению:**
Шапка бокового меню — логотип и название заведения или раздела над списком пунктов.  
В свёрнутом меню остаётся только знак логотипа.  


Как выбрать вариант: уровень меню (основное или вложенное) и раскрыто ли меню.
- **Type** (VARIANT): L1, L2
- **Mode** (VARIANT): Collapsed, Expanded
- Прочие свойства: Element right#55074:0 (BOOLEAN), Element left#55661:0 (BOOLEAN), Divider#59107:0 (BOOLEAN), Informer#59128:5 (BOOLEAN)
- Размеры и параметры:
    - ширина: `200px` (фикс.)
    - внутренние отступы: `var(--ds-sidenav-header-pad-top, 12px) var(--ds-sidenav-header-l1-expanded-pad-right, 16px) var(--ds-sidenav-header-pad-bottom, 12px) var(--ds-sidenav-header-l1-expanded-pad-left, 16px)`
    - промежуток между элементами: `var(--ds-sidenav-header-l1-expanded-gap, 92px)`
- Модификаторы (что меняет каждый):
    - `--l1`: направление `row`, фон `var(--ds-color-sidenav-header-l1-background, #263136)`, ширина `52px`, направление `column`
    - `--l2`: высота `48px`, ширина `260px`, направление `row`, промежуток между элементами `var(--ds-sidenav-header-l2-gap, 8px)`
- Разметка:

```html
<div class="ds-sidenav-header ds-sidenav-header--l1">
  <div class="ds-sidenav-header__close"></div>
  <span class="ds-sidenav-header__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-sidenav-header__icon-size"></div>
  <span class="ds-sidenav-header__label">Текст</span>
  <div class="ds-sidenav-header__logo-iiko"></div>
  <div class="ds-sidenav-header__vector"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Sidenav header [55045:637] — 3 вариантов; оси: Type, Mode */
.ds-sidenav-header {
  display: flex;
  align-items: center;
  width: 200px;
  padding: var(--ds-sidenav-header-pad-top, 12px) var(--ds-sidenav-header-l1-expanded-pad-right, 16px) var(--ds-sidenav-header-pad-bottom, 12px) var(--ds-sidenav-header-l1-expanded-pad-left, 16px);
  gap: var(--ds-sidenav-header-l1-expanded-gap, 92px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-header__label {
  font-size: var(--ds-font-body-m-16-normal-medium-size);
  line-height: var(--ds-font-body-m-16-normal-medium-line);
  letter-spacing: var(--ds-font-body-m-16-normal-medium-spacing);
  font-weight: var(--ds-font-body-m-16-normal-medium-weight);
  color: var(--ds-color-sidenav-header-l2-text-color, #333333);
  white-space: nowrap;
}
.ds-sidenav-header__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-sidenav-header__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-sidenav-header__icon svg path {
  fill: currentColor;
}
.ds-sidenav-header__logo-iiko {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
}
.ds-sidenav-header__vector {
  height: 14.7px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-header-l1-expanded-logo, #ffffff);
}
.ds-sidenav-header__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-sidenav-header__close {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-sidenav-header--l1.ds-sidenav-header--expanded {
  flex-direction: row;
  background: var(--ds-color-sidenav-header-l1-background, #263136);
}
.ds-sidenav-header--l2.ds-sidenav-header--expanded {
  height: 48px;
  width: 260px;
  flex-direction: row;
  gap: var(--ds-sidenav-header-l2-gap, 8px);
  padding: var(--ds-sidenav-header-pad-top, 12px) var(--ds-sidenav-header-l2-pad-right, 16px) var(--ds-sidenav-header-pad-bottom, 12px) var(--ds-sidenav-header-l2-pad-left, 16px);
  background: var(--ds-color-sidenav-header-l2-background, #ffffff);
  color: var(--ds-color-sidenav-header-l2-text-color, #333333);
}
.ds-sidenav-header--l1.ds-sidenav-header--collapsed {
  width: 52px;
  flex-direction: column;
  padding: var(--ds-sidenav-header-pad-top, 12px) var(--ds-sidenav-header-l1-collapsed-pad-right, 14px) var(--ds-sidenav-header-pad-bottom, 12px) var(--ds-sidenav-header-l1-collapsed-pad-left, 14px);
  background: var(--ds-color-sidenav-header-l1-background, #263136);
}
```
</details>

#### Sidenav item `[55070:3734]` — 13 вариантов
**Описание и рекомендации по применению:**
Пункт бокового меню — раздел приложения в левой навигации: «Заказы», «Склады», «Отчёты».  
Три уровня вложенности: раздел, подраздел, пункт подраздела. В свёрнутом меню видна только иконка, название показывайте тултипом.  


Как выбрать вариант:  
Type=L1, L2, L3 — уровень вложенности пункта.  
Mode=Expanded — меню раскрыто (иконка + название); Collapsed — свёрнуто (только иконка).  
Состояния: Default, Hover, Active (текущий раздел), Selected (выбран).
- **Type** (VARIANT): L1, L2, L3
- **Mode** (VARIANT): Collapsed, Expanded
- **State** (VARIANT): Active, Default, Hover, Selected
- Прочие свойства: Element right#55070:0 (BOOLEAN), Badge#55083:0 (BOOLEAN), Divider#55219:13 (BOOLEAN), Indicator#59087:0 (BOOLEAN)
- Размеры и параметры:
    - ширина: `260px` (фикс.)
    - внутренние отступы: `var(--ds-sidenav-item-l3-pad-top, 8px) var(--ds-sidenav-item-l3-pad-right, 16px) var(--ds-sidenav-item-l3-pad-bottom, 8px) var(--ds-sidenav-item-l3-pad-left, 32px)`
    - промежуток между элементами: `var(--ds-sidenav-item-l3-gap, 8px)`
- Модификаторы (что меняет каждый):
    - `--l1`: ширина `200px`, направление `row`, align-items `center`, промежуток между элементами `var(--ds-sidenav-item-l1-gap-container, 8px)`
    - `--l2`: направление `column`, фон `var(--ds-color-sidenav-item-l2-background, #ffffff)`, color `var(--ds-color-sidenav-item-l2-text-color, #333333)`
    - `--l3`: направление `row`, align-items `center`, фон `var(--ds-color-sidenav-item-l3-background, #ffffff)`, color `var(--ds-color-sidenav-item-l3-text-color, #333333)`
- Состояния: `:hover` (наведение)
- Разметка:

```html
<div class="ds-sidenav-item ds-sidenav-item--l1">
  <div class="ds-sidenav-item__l3"></div>
  <span class="ds-sidenav-item__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Sidenav item [55070:3734] — 13 вариантов; оси: Type, Mode, State */
.ds-sidenav-item {
  display: flex;
  width: 260px;
  padding: var(--ds-sidenav-item-l3-pad-top, 8px) var(--ds-sidenav-item-l3-pad-right, 16px) var(--ds-sidenav-item-l3-pad-bottom, 8px) var(--ds-sidenav-item-l3-pad-left, 32px);
  gap: var(--ds-sidenav-item-l3-gap, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-item__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-sidenav-item-l3-text-color, #333333);
  white-space: nowrap;
}
.ds-sidenav-item__l3 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-item-l3-text-color, #333333);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-sidenav-item-l3-text-color, #333333);
}
.ds-sidenav-item--l3.ds-sidenav-item--expanded:hover {
  background: var(--ds-color-sidenav-item-l3-background-hover, #f8f9fc);
}
.ds-sidenav-item--l3.ds-sidenav-item--expanded {
  flex-direction: row;
  align-items: center;
  background: var(--ds-color-sidenav-item-l3-background, #ffffff);
  color: var(--ds-color-sidenav-item-l3-text-color, #333333);
}
.ds-sidenav-item--l2.ds-sidenav-item--expanded {
  flex-direction: column;
  background: var(--ds-color-sidenav-item-l2-background, #ffffff);
  color: var(--ds-color-sidenav-item-l2-text-color, #333333);
}
.ds-sidenav-item--l2.ds-sidenav-item--expanded:hover {
  background: var(--ds-color-sidenav-item-l2-background-hover, #f8f9fc);
}
.ds-sidenav-item--l1.ds-sidenav-item--expanded:hover {
  background: var(--ds-color-sidenav-item-l1-background-hover, #36474e);
}
.ds-sidenav-item--l1.ds-sidenav-item--expanded {
  width: 200px;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-sidenav-item-l1-gap-container, 8px);
  padding: var(--ds-sidenav-item-l1-pad-top, 12px) var(--ds-sidenav-item-l1-pad-right, 16px) var(--ds-sidenav-item-l1-pad-bottom, 12px) var(--ds-sidenav-item-l1-pad-left, 16px);
  background: var(--ds-color-sidenav-item-l1-background, #263136);
  color: var(--ds-color-sidenav-item-l1-text-color, #ffffff);
}
.ds-sidenav-item--l1.ds-sidenav-item--collapsed:hover {
  background: var(--ds-color-sidenav-item-l1-background-hover, #36474e);
}
.ds-sidenav-item--l1.ds-sidenav-item--collapsed {
  width: fit-content;
  flex-direction: row;
  padding: var(--ds-sidenav-item-l1-pad-top, 12px) var(--ds-sidenav-item-l1-pad-right, 16px) var(--ds-sidenav-item-l1-pad-bottom, 12px) var(--ds-sidenav-item-l1-pad-left, 16px);
  background: var(--ds-color-sidenav-item-l1-background, #263136);
}
```
</details>

#### Sidenav View `[55074:393]` — 3 вариантов
**Описание и рекомендации по применению:**
Боковое меню целиком — готовая левая навигация: шапка, пункты, подвал.  
Берите её как основу экрана и подставляйте свои пункты; ширину раскрытого и свёрнутого меню не меняйте.  


Как выбрать вариант: уровень меню и его состояние — раскрыто или свёрнуто.
- **Type** (VARIANT): L1, L2
- **State** (VARIANT): Collapsed, Expanded
- Прочие свойства: Scroll#55227:26 (BOOLEAN), Container#59137:0 (SLOT), Container#59137:4 (SLOT), Container#59137:8 (SLOT), Container#59137:12 (SLOT), Info#59160:3 (BOOLEAN), More Pannel#59214:0 (BOOLEAN)
- CSS не требуется: собственного оформления нет — компонент задаёт только структуру/поведение, вид приходит от вложенных элементов.

#### Slide toggle `[52887:2592]` — 6 вариантов
**Описание и рекомендации по применению:**
Переключатель — включение и выключение настройки, действие применяется сразу, без кнопки «Сохранить».  
Используйте для режимов и правил: «Требуется подтверждение», «Стоимость товаров в заказе видна сотруднику ресторана». Если выбор нужно подтвердить кнопкой или пунктов несколько — Checkbox.  


Состав: переключатель, Title, support-текст под заголовком (Support down), элемент справа (Element right) — например иконка-подсказка.  
Подпись формулируйте утверждением, а не вопросом; не дублируйте в ней слово «включить».  


Как выбрать вариант:  
Active=On / Off — настройка включена / выключена.  
State=Default, Hover, Disable — обычное состояние, курсор над переключателем, недоступен.
- **Active** (VARIANT): Off, On
- **State** (VARIANT): Default, Disable, Hover
- Прочие свойства: Title#53326:0 (BOOLEAN), Support down#58203:7 (BOOLEAN), Element right#58364:0 (BOOLEAN)
- CSS: выверено вручную, см. `components/toggle.css` в разделе «Полные CSS-стили всех компонентов»

#### Snackbar `[54373:10303]` — 4 вариантов
**Описание и рекомендации по применению:**
Всплывающее сообщение о результате действия: «Изменения сохранены», «Товары добавлены», «Не удалось сохранить изменения», «Сервер временно недоступен».  
Появляется на короткое время внизу экрана и не требует ответа; если решение обязательно — берите диалог.  
Действие внутри допускается одно («Обновить», «Открыть», «Отменить»).  


Как выбрать вариант:  
Type=Single — одна строка сообщения; Complex — с заголовком, описанием и действием.  
Mode=Dark — на светлых экранах; Light — на тёмных.
- **Type** (VARIANT): Complex, Single
- **Mode** (VARIANT): Dark, Light
- Прочие свойства: Element left#54373:16 (BOOLEAN), Element right#54426:0 (BOOLEAN), Progress#58768:0 (BOOLEAN), Content#58768:6 (BOOLEAN), Bottom actions#58768:12 (BOOLEAN)
- Размеры и параметры:
    - ширина: `fit-content` (фикс.)
    - скругление: `var(--ds-snackbar-border-radius, 8px)`
    - тень: `var(--ds-shadow-shadows-08-dp-s)`
- Модификаторы (что меняет каждый):
    - `--complex`: ширина `232px`, фон `var(--ds-color-snackbar-complex-dark-background, #424242)`, color `var(--ds-color-snackbar-complex-dark-text-color, #ffffff)`, ширина `370px`
    - `--single`: фон `var(--ds-color-snackbar-complex-dark-background, #424242)`, color `var(--ds-color-snackbar-complex-dark-text-color, #ffffff)`, ширина `370px`, фон `var(--ds-color-snackbar-complex-light-background, #ffffff)`
- Разметка:

```html
<div class="ds-snackbar ds-snackbar--complex">
  <div class="ds-snackbar__body"></div>
  <div class="ds-snackbar__button"></div>
  <div class="ds-snackbar__content"></div>
  <span class="ds-snackbar__element-right"><!-- SVG-иконка ДС --></span>
  <span class="ds-snackbar__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-snackbar__label">Текст</span>
  <div class="ds-snackbar__progress"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Snackbar [54373:10303] — 4 вариантов; оси: Type, Mode */
.ds-snackbar {
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-snackbar-border-radius, 8px);
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  width: fit-content;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-snackbar__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-snackbar-complex-dark-text-color, #ffffff);
  white-space: nowrap;
}
.ds-snackbar__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-snackbar__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-snackbar__icon svg path {
  fill: currentColor;
}
.ds-snackbar__body {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-snackbar-gap, 8px);
  padding: var(--ds-snackbar-pad-top, 12px) var(--ds-snackbar-pad-right, 12px) var(--ds-snackbar-pad-bottom, 12px) var(--ds-snackbar-pad-left, 12px);
}
.ds-snackbar__content {
  display: flex;
  flex-direction: row;
  gap: var(--ds-snackbar-gap, 8px);
  padding: var(--ds-space-0) var(--ds-space-0) var(--ds-space-0) var(--ds-space-0);
  border-radius: var(--ds-radius-0);
}
.ds-snackbar__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-s-size-gap, 4px);
  padding: var(--ds-button-s-size-pad-top, 4px) var(--ds-button-s-size-pad-right, 8px) var(--ds-button-s-size-pad-bottom, 4px) var(--ds-button-s-size-pad-left, 8px);
  border-radius: var(--ds-button-border-radius, 8px);
}
.ds-snackbar__element-right {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-snackbar__progress {
  height: var(--ds-size-1x);
  display: flex;
  flex-direction: row;
  border-radius: var(--ds-snackbar-border-radius, 8px);
  background: var(--ds-color-snackbar-progress-color, #448aff);
}
.ds-snackbar--single.ds-snackbar--dark {
  background: var(--ds-color-snackbar-complex-dark-background, #424242);
  color: var(--ds-color-snackbar-complex-dark-text-color, #ffffff);
}
.ds-snackbar--single.ds-snackbar--light {
  width: 370px;
  background: var(--ds-color-snackbar-complex-light-background, #ffffff);
  color: var(--ds-color-snackbar-complex-light-text-color, #333333);
}
.ds-snackbar--complex.ds-snackbar--dark {
  width: 232px;
  background: var(--ds-color-snackbar-complex-dark-background, #424242);
  color: var(--ds-color-snackbar-complex-dark-text-color, #ffffff);
}
.ds-snackbar--complex.ds-snackbar--light {
  width: 370px;
  background: var(--ds-color-snackbar-complex-light-background, #ffffff);
  color: var(--ds-color-snackbar-complex-light-text-color, #333333);
}
```
</details>

#### State `[54063:12395]` — 2 вариантов
**Описание и рекомендации по применению:**
Подложка состояния под иконкой — круглая или квадратная подсветка при наведении и нажатии.  
Служебный элемент кнопок-иконок и пунктов: подставляется под иконку, отдельно на экран не ставится.
- **State** (VARIANT): Hover, Press
- Размеры и параметры:
    - высота: `var(--ds-size-6x)` (фикс.)
    - ширина: `var(--ds-size-6x)` (фикс.)
- Состояния: `:active` (нажатие), `:hover` (наведение)
<details><summary>CSS компонента</summary>

```css
/* State [54063:12395] — 2 вариантов; оси: State */
.ds-state {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-state:hover {
  background: #ebebeb;
}
.ds-state:active {
  background: #e0e0e0;
}
```
</details>

#### Status `[52928:6588]` — 18 вариантов
**Описание и рекомендации по применению:**
Статус — короткая метка состояния объекта: «Новый», «В работе», «Оплачен», «Закрыт».  
Показывайте в таблицах, списках и карточках рядом с названием или в колонке «Статус».  


Как выбрать вариант:  
Accent — активное состояние, действие сейчас выполняется.  
Positive — успех, подтверждение.  
Warning — требуется внимание, просрочено.  
Negative — ошибка, блокирующее состояние.  
Neutral — нейтральное, без акцента.  
Contrast-1 … 4 — дополнительные цвета, когда основных недостаточно.  


Type=Filled — с подложкой, заметный. Type=Text — только текст, не перетягивает внимание.  
Фронт: https://frontend-common.iiko.ru/components/status
- **Style** (VARIANT): Accent, Contrast-1, Contrast-2, Contrast-3, Contrast-4, Negative, Neutral, Positive, Warning
- **Type** (VARIANT): Filled, Text
- Прочие свойства: Element left#17172:1340 (BOOLEAN), Element right#17172:1349 (BOOLEAN)
- Размеры и параметры:
    - ширина: `fit-content` (фикс.)
    - внутренние отступы: `var(--ds-status-pad-top, 4px) var(--ds-status-pad-right, 6px) var(--ds-status-pad-bottom, 4px) var(--ds-status-pad-left, 6px)`
    - промежуток между элементами: `var(--ds-status-gap, 4px)`
    - скругление: `var(--ds-status-border-radius, 8px)`
- Модификаторы (что меняет каждый):
    - `--accent`: фон `var(--ds-color-status-accent-filled-background, #f5f9ff)`, color `var(--ds-color-status-accent-filled-text-color, #448aff)`, внутренние отступы `var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text)`, color `var(--ds-color-status-accent-text-text-color, #448aff)`
    - `--contrast-1`: фон `var(--ds-color-status-contrast-1-filled-background, #fcf6fd)`, color `var(--ds-color-status-contrast-1-filled-text-color, #9c27b0)`, внутренние отступы `var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text)`, color `var(--ds-color-status-contrast-1-text-text-color, #9c27b0)`
    - `--contrast-2`: фон `var(--ds-color-status-contrast-2-filled-background, #fcf8f6)`, color `var(--ds-color-status-contrast-2-filled-text-color, #3e261e)`, внутренние отступы `var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text)`, color `var(--ds-color-status-contrast-2-text-text-color, #3e261e)`
    - `--contrast-3`: фон `var(--ds-color-status-contrast-3-filled-background, #f8fafc)`, color `var(--ds-color-status-contrast-3-filled-text-color, #263136)`, внутренние отступы `var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text)`, color `var(--ds-color-status-contrast-3-text-text-color, #263136)`
    - `--contrast-4`: фон `var(--ds-color-status-contrast-4-filled-background, #f9fbea)`, color `var(--ds-color-status-contrast-4-filled-text-color, #4f5412)`, внутренние отступы `var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text)`, color `var(--ds-color-status-contrast-4-text-text-color, #4f5412)`
    - `--negative`: фон `var(--ds-color-status-negative-filled-background, #fff8f8)`, color `var(--ds-color-status-negative-filled-text-color, #ff5252)`, внутренние отступы `var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text)`, color `var(--ds-color-status-negative-text-text-color, #ff5252)`
    - `--neutral`: фон `var(--ds-color-status-neutral-filled-background, #fafafa)`, color `var(--ds-color-status-neutral-filled-text-color, #616161)`, внутренние отступы `var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text)`, color `var(--ds-color-status-neutral-text-text-color, #616161)`
    - `--positive`: фон `var(--ds-color-status-positive-filled-background, #f3fcf7)`, color `var(--ds-color-status-positive-filled-text-color, #14b456)`, внутренние отступы `var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text)`, color `var(--ds-color-status-positive-text-text-color, #14b456)`
    - `--warning`: фон `var(--ds-color-status-warning-filled-background, #fffcf8)`, color `var(--ds-color-status-warning-filled-text-color, #ea7806)`, внутренние отступы `var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text)`, color `var(--ds-color-status-warning-text-text-color, #ea7806)`
- Разметка:

```html
<div class="ds-status ds-status--accent">
  <div class="ds-status__content"></div>
  <span class="ds-status__element-left"><!-- SVG-иконка ДС --></span>
  <span class="ds-status__element-right"><!-- SVG-иконка ДС --></span>
  <span class="ds-status__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-status__info"></div>
  <span class="ds-status__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Status [52928:6588] — 18 вариантов; оси: Style, Type */
.ds-status {
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-status-gap, 4px);
  border-radius: var(--ds-status-border-radius, 8px);
  padding: var(--ds-status-pad-top, 4px) var(--ds-status-pad-right, 6px) var(--ds-status-pad-bottom, 4px) var(--ds-status-pad-left, 6px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-status__label {
  font-size: var(--ds-font-caption-l-12-normal-medium-size);
  line-height: var(--ds-font-caption-l-12-normal-medium-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-medium-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-medium-weight);
  color: var(--ds-color-status-neutral-filled-text-color, #616161);
  white-space: nowrap;
}
.ds-status__icon {
  flex-shrink: 0;
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-status-icon-color);
}
.ds-status__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-status__icon svg path {
  fill: currentColor;
}
.ds-status__element-left {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-status__info {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-status__content {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-status-neutral-filled-text-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-medium-size);
  line-height: var(--ds-font-caption-l-12-normal-medium-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-medium-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-medium-weight);
  color: var(--ds-color-status-neutral-filled-text-color, #616161);
}
.ds-status__element-right {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-status--neutral.ds-status--filled {
  background: var(--ds-color-status-neutral-filled-background, #fafafa);
  color: var(--ds-color-status-neutral-filled-text-color, #616161);
}
.ds-status--accent.ds-status--filled {
  background: var(--ds-color-status-accent-filled-background, #f5f9ff);
  color: var(--ds-color-status-accent-filled-text-color, #448aff);
}
.ds-status--positive.ds-status--filled {
  background: var(--ds-color-status-positive-filled-background, #f3fcf7);
  color: var(--ds-color-status-positive-filled-text-color, #14b456);
}
.ds-status--warning.ds-status--filled {
  background: var(--ds-color-status-warning-filled-background, #fffcf8);
  color: var(--ds-color-status-warning-filled-text-color, #ea7806);
}
.ds-status--negative.ds-status--filled {
  background: var(--ds-color-status-negative-filled-background, #fff8f8);
  color: var(--ds-color-status-negative-filled-text-color, #ff5252);
}
.ds-status--contrast-1.ds-status--filled {
  background: var(--ds-color-status-contrast-1-filled-background, #fcf6fd);
  color: var(--ds-color-status-contrast-1-filled-text-color, #9c27b0);
}
.ds-status--contrast-2.ds-status--filled {
  background: var(--ds-color-status-contrast-2-filled-background, #fcf8f6);
  color: var(--ds-color-status-contrast-2-filled-text-color, #3e261e);
}
.ds-status--contrast-3.ds-status--filled {
  background: var(--ds-color-status-contrast-3-filled-background, #f8fafc);
  color: var(--ds-color-status-contrast-3-filled-text-color, #263136);
}
.ds-status--contrast-4.ds-status--filled {
  background: var(--ds-color-status-contrast-4-filled-background, #f9fbea);
  color: var(--ds-color-status-contrast-4-filled-text-color, #4f5412);
}
.ds-status--neutral.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-neutral-text-text-color, #616161);
}
.ds-status--accent.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-accent-text-text-color, #448aff);
}
.ds-status--positive.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-positive-text-text-color, #14b456);
}
.ds-status--warning.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-warning-text-text-color, #ea7806);
}
.ds-status--negative.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-negative-text-text-color, #ff5252);
}
.ds-status--contrast-1.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-contrast-1-text-text-color, #9c27b0);
}
.ds-status--contrast-2.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-contrast-2-text-text-color, #3e261e);
}
.ds-status--contrast-3.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-contrast-3-text-text-color, #263136);
}
.ds-status--contrast-4.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-contrast-4-text-text-color, #4f5412);
}
```
</details>

#### Step `[54800:3659]` — 12 вариантов
**Описание и рекомендации по применению:**
Степпер — шаги многошагового процесса: мастер настройки, онбординг, оформление заказа.  
Показывает текущее положение и сколько шагов осталось. Внизу — панель с кнопками «Назад» и «Далее».  
Не сочетайте степпер с крестиком закрытия — если нужно закрыть, используйте кнопку внизу.  


Состав степпера:  
Step — кликабельный шаг (иконка + название).  
Element step — маркер шага: иконка или счётчик на подложке.  
Stepper line — контейнер, строка со всеми маркерами.  
Stepper button — кнопка «Назад» / «Далее» в панели внизу.  
Фронт: https://frontend-common.iiko.ru/components/stepper
- **Background** (VARIANT): Off, On
- **State** (VARIANT): Default, Disable, Error, Hover, Press, Selected
- Прочие свойства: Element left#55771:0 (BOOLEAN), Element right#55771:13 (BOOLEAN), Text#57060:20 (TEXT)
- CSS: выверено вручную, см. `components/stepper.css` в разделе «Полные CSS-стили всех компонентов»

#### Stepper button `[55419:7330]` — 12 вариантов
**Описание и рекомендации по применению:**
Кнопка навигации степпера — «Назад» и «Далее» в панели внизу многошагового процесса.  
Используется только вместе со степпером; для обычных действий берите Button.  


Как выбрать вариант:  
Type=Filled — акцентная (обычно «Далее»); Type=Outlined — второстепенная (обычно «Назад»).  
Position=First / Middle / Last — место в группе: First — «Назад» слева, Last — «Далее» справа.  
Content=Icon — только иконка; Content=Text — с текстом.  
Фронт: https://frontend-common.iiko.ru/components/stepper
- **Type** (VARIANT): Filled, Outlined
- **Position** (VARIANT): First, Last, Middle
- **Content** (VARIANT): Icon, Text
- Прочие свойства: Text#55442:0 (BOOLEAN)
- CSS: выверено вручную, см. `components/stepper.css` в разделе «Полные CSS-стили всех компонентов»

#### Stepper line `[54689:3072]` — 4 вариантов
**Описание и рекомендации по применению:**
Строка степпера — контейнер со всеми маркерами шагов в один ряд.  
Ставится вверху экрана или диалога многошагового процесса; внутрь вкладываются шаги Step.  


Как выбрать вариант:  
Step=On — с маркерами шагов; Step=Off — контейнер без маркеров, только подложка.  
Background=On — с подложкой под шагами; Background=Off — без подложки, по контенту.  
Фронт: https://frontend-common.iiko.ru/components/stepper
- **Step** (VARIANT): Off, On
- **Background** (VARIANT): Off, On
- Прочие свойства: Content step#59393:0 (SLOT), Content step background#59393:5 (SLOT), Content#59393:10 (SLOT), Content background#59393:15 (SLOT), Scroll left#59393:20 (BOOLEAN), Scroll right#59393:25 (BOOLEAN)
- CSS: выверено вручную, см. `components/stepper.css` в разделе «Полные CSS-стили всех компонентов»

#### Tab element `[54404:200]` — 16 вариантов
**Описание и рекомендации по применению:**
Вкладка — один раздел в строке вкладок: название, при необходимости иконка и счётчик.  
Счётчик показывает количество записей в разделе; активная вкладка всегда одна.  


Как выбрать вариант:  
Active=On — текущий раздел; Off — остальные разделы.  
Lvl=1 — основной уровень; Lvl=2 — вложенный.  
Состояния: Default, Hover, Press, Disable.
- **Lvl** (VARIANT): 1, 2
- **State** (VARIANT): Default, Disable, Hover, Press
- **Active** (VARIANT): Off, On
- Прочие свойства: Element left#54447:8 (BOOLEAN), Counter#54447:13 (BOOLEAN), Text#54876:8 (BOOLEAN), Element right#59422:0 (BOOLEAN)
- CSS: выверено вручную, см. `components/navigation.css` в разделе «Полные CSS-стили всех компонентов»

#### Table 2 lvl `[60074:44684]` — 2 вариантов
**Описание и рекомендации по применению:**
Вложенный уровень таблицы — подстрока и подъячейка внутри строки: состав блюда, позиции в документе, разбивка по складам.  
Берите его, когда запись раскрывается в детали; для отдельной таблицы уровень не нужен.  


Как выбрать вариант: подстрока целиком или отдельная ячейка второго уровня.
- **Type** (VARIANT): Table cell 2 lvl, Table row 2 lvl
- Прочие свойства: Header 2 lvl#60074:0 (SLOT)
- Размеры и параметры:
    - высота: минимум `72px`, растёт по контенту
    - ширина: `162px` (фикс.)
- Модификаторы (что меняет каждый):
    - `--table-cell-2-lvl`: направление `column`, рамка `1px solid var(--ds-color-stroke-default, #e0e0e0)`
    - `--table-row-2-lvl`: ширина `fit-content`, направление `row`, align-items `center`
- Разметка:

```html
<div class="ds-table-2-lvl ds-table-2-lvl--table-cell-2-lvl">
  <div class="ds-table-2-lvl__header-row"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Table 2 lvl [60074:44684] — 2 вариантов; оси: Type */
.ds-table-2-lvl {
  min-height: 72px;
  display: flex;
  width: 162px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-2-lvl__header-row {
  display: flex;
  flex-direction: column;
  background: var(--ds-color-table-row-header-background-header, #f0f5ff);
  border: 1px solid var(--ds-color-stroke-default, #e0e0e0);
}
.ds-table-2-lvl--table-cell-2-lvl {
  flex-direction: column;
  border: 1px solid var(--ds-color-stroke-default, #e0e0e0);
}
.ds-table-2-lvl--table-row-2-lvl {
  width: fit-content;
  flex-direction: row;
  align-items: center;
}
```
</details>

#### Table Chips Input `[60220:70978]` — 8 вариантов
**Описание и рекомендации по применению:**
Ячейка таблицы с вводом тегов — готовая ячейка вместе с полем тегов и отступами строки.  
Служебный компонент таблицы: ставится в строку, отдельно на экран не выносится.  


Состояния: Default, Hover, Focus, Focus+Placeholder, Focus+Value, Error, Error+Hover, Disable.
- **Style** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Hover, Vocus+Value
- Размеры и параметры:
    - высота: минимум `var(--ds-size-6x)`, растёт по контенту
    - ширина: `fit-content` (фикс.)
    - фон: `#ffffff`
- Модификаторы (что меняет каждый):
    - `--default`: color `#616161`
    - `--disable`: color `#9e9e9e`
    - `--error`: color `#616161`
    - `--error-hover`: color `#616161`
    - `--focus`: color `#333333`
    - `--focus-placeholder`: color `#333333`
    - `--hover`: color `#616161`
    - `--vocus-value`: color `#333333`
- Разметка:

```html
<div class="ds-table-chips-input ds-table-chips-input--default">
  <div class="ds-table-chips-input__frame"></div>
  <span class="ds-table-chips-input__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-table-chips-input__label">Текст</span>
  <span class="ds-table-chips-input__support">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Table Chips Input [60220:70978] — 8 вариантов; оси: Style */
.ds-table-chips-input {
  min-height: var(--ds-size-6x);
  width: fit-content;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-chips-input__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: #616161;
  white-space: nowrap;
}
.ds-table-chips-input__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-chips-icon-color);
}
.ds-table-chips-input__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-table-chips-input__icon svg path {
  fill: currentColor;
}
.ds-table-chips-input__frame {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-chips-input-gap-chips-input-frame, 4px);
  border-radius: var(--ds-size-3x);
  background: #f8f9fc;
  border: 1px solid #e0e0e0;
}
.ds-table-chips-input__support {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-1x);
}
.ds-table-chips-input--default {
  color: #616161;
}
.ds-table-chips-input--hover {
  color: #616161;
}
.ds-table-chips-input--focus {
  color: #333333;
}
.ds-table-chips-input--focus-placeholder {
  color: #333333;
}
.ds-table-chips-input--vocus-value {
  color: #333333;
}
.ds-table-chips-input--error {
  color: #616161;
}
.ds-table-chips-input--error-hover {
  color: #616161;
}
.ds-table-chips-input--disable {
  color: #9e9e9e;
}
```
</details>

#### Table content cell `[52954:1253]` — 8 вариантов
**Описание и рекомендации по применению:**
Ячейка таблицы — одно значение в строке данных: название товара, количество, цена, ссылка на документ.  
Выравнивание берите по типу данных: текст влево, числа вправо. Пустое значение показывайте прочерком, а не пустотой.  


Состояния: Default, Null (нет значения), Link, Hover, Focus, Edit (правка значения), Error, Disable.
- **State** (VARIANT): Default, Disable, Edit, Error, Focus, Hover, Link, Null
- Размеры и параметры:
    - высота: минимум `var(--ds-size-9x)`, растёт по контенту
    - ширина: `fit-content` (фикс.)
    - внутренние отступы: `var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px)`
    - промежуток между элементами: `var(--ds-size-2x)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
- Состояния: `:disabled` (неактивно), `:hover` (наведение)
- Разметка:

```html
<div class="ds-table-content-cell ds-table-content-cell--disabled">
  <div class="ds-table-content-cell__element"></div>
  <span class="ds-table-content-cell__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-table-content-cell__label">Текст</span>
  <div class="ds-table-content-cell__text-ui"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Table content cell [52954:1253] — 8 вариантов; оси: State */
.ds-table-content-cell {
  min-height: var(--ds-size-9x);
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-content-cell__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-text-ui-text-label-color, #616161);
  white-space: nowrap;
}
.ds-table-content-cell__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-table-content-cell__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-table-content-cell__icon svg path {
  fill: currentColor;
}
.ds-table-content-cell__element {
  display: flex;
  flex-direction: row;
}
.ds-table-content-cell__text-ui {
  display: flex;
  flex-direction: row;
  gap: var(--ds-list-item-gap, 8px);
}
.ds-table-content-cell:disabled {
  color: var(--ds-color-text-ui-disable-label-text-color, #9e9e9e);
}
.ds-table-content-cell.ds-table-content-cell--disabled {
  color: var(--ds-color-text-ui-disable-label-text-color, #9e9e9e);
}
.ds-table-content-cell:hover {
  border: 1px solid var(--ds-color-table-cell-content-hover-border-color, #9e9e9e);
}
.ds-table-content-cell--disabled {
  pointer-events: none;
}
```
</details>

#### Table content row `[60105:56764]` — 5 вариантов
**Описание и рекомендации по применению:**
Строка таблицы — набор ячеек одной записи: позиция накладной, товар, документ.  
Выделение строки используйте для действий над записью; чередование фона включайте только в длинных таблицах.  


Состояния: Default, Zebra (чередование фона), Hover, Selected, Disable.
- **State** (VARIANT): Default, Disable, Hover, Selected, Zebra
- Прочие свойства: Content#60036:0 (SLOT)
- Размеры и параметры:
    - высота: минимум `var(--ds-size-9x)`, растёт по контенту
    - ширина: `fit-content` (фикс.)
    - рамка: `1px solid var(--ds-color-stroke-default, #e0e0e0)`
    - фон: `var(--ds-color-table-row-content-default-background, #ffffff)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
- Состояния: `:disabled` (неактивно), `:hover` (наведение)
- Разметка:

```html
<div class="ds-table-content-row ds-table-content-row--disabled">
  <span class="ds-table-content-row__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Table content row [60105:56764] — 5 вариантов; оси: State */
.ds-table-content-row {
  min-height: var(--ds-size-9x);
  width: fit-content;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--ds-color-stroke-default, #e0e0e0);
  background: var(--ds-color-table-row-content-default-background, #ffffff);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-content-row__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-text-ui-text-label-color, #616161);
  white-space: nowrap;
}
.ds-table-content-row:disabled {
  color: var(--ds-color-text-ui-disable-label-text-color, #9e9e9e);
}
.ds-table-content-row.ds-table-content-row--disabled {
  color: var(--ds-color-text-ui-disable-label-text-color, #9e9e9e);
}
.ds-table-content-row:hover {
  background: var(--ds-color-table-row-content-hover-background, #f5f5f5);
}
.ds-table-content-row--disabled {
  pointer-events: none;
}
```
</details>

#### Table footer `[59207:20759]` — 1 вариантов
**Описание и рекомендации по применению:**
Подвал таблицы — итоги по колонкам и постраничная навигация.  
Итоги показывайте по тем же колонкам, что и в строках; если итогов нет — подвал не добавляйте.
- **Type** (VARIANT): Default
- Прочие свойства: Slot Content#59249:0 (SLOT)
- Размеры и параметры:
    - высота: `65px` (фикс.)
    - ширина: `980px` (фикс.)
    - фон: `var(--ds-color-table-footer-background, #ffffff)`
    - тень: `var(--ds-shadow-shadows-01-dp-sl)`
- Модификаторы (что меняет каждый):
    - `--default`: color `var(--ds-color-expansion-panel-content-text-color, #333333)`
- Разметка:

```html
<div class="ds-table-footer ds-table-footer--default">
  <div class="ds-table-footer__content"></div>
  <div class="ds-table-footer__divider"></div>
  <span class="ds-table-footer__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Table footer [59207:20759] — 1 вариантов; оси: Type */
.ds-table-footer {
  height: 65px;
  width: 980px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-table-footer-background, #ffffff);
  box-shadow: var(--ds-shadow-shadows-01-dp-sl);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-footer__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-expansion-panel-content-text-color, #333333);
  white-space: nowrap;
}
.ds-table-footer__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-table-footer__content {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-table-footer-pad-top, 12px) var(--ds-table-footer-pad-right, 32px) var(--ds-table-footer-pad-bottom, 12px) var(--ds-table-footer-pad-left, 32px);
  background: #ffffff;
}
.ds-table-footer--default {
  color: var(--ds-color-expansion-panel-content-text-color, #333333);
}
```
</details>

#### Table header cell `[60098:45424]` — 3 вариантов
**Описание и рекомендации по применению:**
Ячейка шапки таблицы — название колонки и сортировка по ней.  
Название колонки пишите коротко, единицы измерения выносите в название, а не в каждую ячейку.  


Состояния: Default, Hover, Disable (сортировка недоступна).
- **State** (VARIANT): Default, Disable, Hover
- Размеры и параметры:
    - высота: минимум `var(--ds-size-9x)`, растёт по контенту
    - ширина: `fit-content` (фикс.)
    - внутренние отступы: `var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px)`
    - промежуток между элементами: `var(--ds-size-2x)`
    - рамка: `1px solid var(--ds-color-stroke-default, #e0e0e0)`
    - фон: `var(--ds-color-table-cell-header-default-background, #f0f5ff)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
- Состояния: `:disabled` (неактивно), `:hover` (наведение)
- Разметка:

```html
<div class="ds-table-header-cell ds-table-header-cell--disabled">
  <div class="ds-table-header-cell__element"></div>
  <span class="ds-table-header-cell__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-table-header-cell__label">Текст</span>
  <div class="ds-table-header-cell__text-ui"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Table header cell [60098:45424] — 3 вариантов; оси: State */
.ds-table-header-cell {
  min-height: var(--ds-size-9x);
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px);
  border: 1px solid var(--ds-color-stroke-default, #e0e0e0);
  background: var(--ds-color-table-cell-header-default-background, #f0f5ff);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-header-cell__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-text-ui-text-label-color, #616161);
  white-space: nowrap;
}
.ds-table-header-cell__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-table-header-cell__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-table-header-cell__icon svg path {
  fill: currentColor;
}
.ds-table-header-cell__element {
  display: flex;
  flex-direction: row;
}
.ds-table-header-cell__text-ui {
  display: flex;
  flex-direction: row;
  gap: var(--ds-list-item-gap, 8px);
}
.ds-table-header-cell:hover {
  background: var(--ds-color-table-cell-header-hover-background, #f8f9fc);
}
.ds-table-header-cell:disabled {
  background: var(--ds-color-table-cell-header-disable-background, #f0f5ff);
  color: var(--ds-color-text-ui-disable-label-text-color, #9e9e9e);
}
.ds-table-header-cell.ds-table-header-cell--disabled {
  background: var(--ds-color-table-cell-header-disable-background, #f0f5ff);
  color: var(--ds-color-text-ui-disable-label-text-color, #9e9e9e);
}
.ds-table-header-cell--disabled {
  pointer-events: none;
}
```
</details>

#### Table header row `[53556:3571]` — 1 вариантов
**Описание и рекомендации по применению:**
Шапка таблицы — строка с названиями колонок, закреплена при прокрутке.  
Собирается из ячеек Table header cell; порядок колонок должен совпадать с порядком в строках данных.
- **State** (VARIANT): Default
- Прочие свойства: Header#59320:28 (SLOT)
- Размеры и параметры:
    - высота: минимум `var(--ds-size-9x)`, растёт по контенту
    - ширина: `fit-content` (фикс.)
    - скругление: `var(--ds-table-row-header-border-radius-top-left)`
    - рамка: `1px solid var(--ds-color-stroke-default, #e0e0e0)`
    - фон: `var(--ds-color-table-row-header-background-header, #f0f5ff)`
- Разметка:

```html
<div class="ds-table-header-row">
  <span class="ds-table-header-row__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Table header row [53556:3571] — 1 вариантов; оси: State */
.ds-table-header-row {
  min-height: var(--ds-size-9x);
  width: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-table-row-header-border-radius-top-left);
  background: var(--ds-color-table-row-header-background-header, #f0f5ff);
  border: 1px solid var(--ds-color-stroke-default, #e0e0e0);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-header-row__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-text-ui-text-label-color, #616161);
  white-space: nowrap;
}
```
</details>

#### Tabs `[54854:3052]` — 4 вариантов
**Описание и рекомендации по применению:**
Вкладки — переключение разделов одного экрана без перезагрузки: «Общие», «Товары», «История».  
Берите их, когда разделов 2–7 и они равнозначны; для вложенной навигации — второй уровень вкладок.  
Активная вкладка подчёркнута; названия пишите коротко, без многоточий.  


Состав: строка вкладок из Tab element, при нехватке места — стрелки прокрутки (Scroll tabs).  


Как выбрать вариант:  
Lvl=1 — основные разделы экрана; Lvl=2 — вложенные разделы внутри раздела.  
Content=Text — с текстом; Icon — только иконки, когда раздел понятен по иконке.
- **Lvl** (VARIANT): 1, 2
- **Content** (VARIANT): Icon, Text
- Прочие свойства: Content text m#58420:0 (SLOT), Content icon m#58420:5 (SLOT), Content text s#58420:10 (SLOT), Content icon s#58420:15 (SLOT), Scroll left#59422:17 (BOOLEAN), Scroll right#59422:22 (BOOLEAN)
- CSS: выверено вручную, см. `components/navigation.css` в разделе «Полные CSS-стили всех компонентов»

#### Text UI `[57938:18290]` — 7 вариантов
**Описание и рекомендации по применению:**
Текст интерфейса — подпись, значение или ссылка в ячейках, списках и карточках.  
Берите его, чтобы текст в однотипных местах совпадал по размеру и цвету; заголовки страниц и блоков набирайте стилями типографики.  
Лежит на странице UI components (раздел «не готовы или под вопросом») — перед использованием уточните актуальность у владельца ДС.  


Состояния: Default, Link, Hover, Press, Selected, Negative, Disable.
- **State** (VARIANT): Default, Disable, Hover, Link, Negative, Press, Selected
- Прочие свойства: Element left#54167:1 (BOOLEAN), Element right#54167:6 (BOOLEAN), Label up#54741:15 (BOOLEAN), Label down#54741:30 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `52px`, растёт по контенту
    - ширина: `fit-content` (фикс.)
    - промежуток между элементами: `var(--ds-list-item-gap, 8px)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
- Состояния: `:disabled` (неактивно)
- Разметка:

```html
<div class="ds-text-ui ds-text-ui--disabled">
  <div class="ds-text-ui__checkbox"></div>
  <div class="ds-text-ui__content"></div>
  <span class="ds-text-ui__element-left"><!-- SVG-иконка ДС --></span>
  <span class="ds-text-ui__element-right"><!-- SVG-иконка ДС --></span>
  <span class="ds-text-ui__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-text-ui__icon-size"></div>
  <span class="ds-text-ui__label">Текст</span>
  <div class="ds-text-ui__label-down"></div>
  <div class="ds-text-ui__label-up"></div>
  <div class="ds-text-ui__list-item"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Text UI [57938:18290] — 7 вариантов; оси: State */
.ds-text-ui {
  min-height: 52px;
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: var(--ds-list-item-gap, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-text-ui__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-text-ui-text-label-color, #616161);
  white-space: nowrap;
}
.ds-text-ui__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-text-ui__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-text-ui__icon svg path {
  fill: currentColor;
}
.ds-text-ui__element-left {
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-text-ui__checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-text-ui__content {
  display: flex;
  flex-direction: column;
}
.ds-text-ui__label-up {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-ui-text-label-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-text-ui-text-label-color, #616161);
}
.ds-text-ui__list-item {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-ui-text-color, #333333);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-text-ui-text-color, #333333);
}
.ds-text-ui__label-down {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-ui-text-label-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-text-ui-text-label-color, #616161);
}
.ds-text-ui__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: #ffffff;
}
.ds-text-ui__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-text-ui:disabled {
  color: var(--ds-color-text-ui-disable-label-text-color, #9e9e9e);
}
.ds-text-ui.ds-text-ui--disabled {
  color: var(--ds-color-text-ui-disable-label-text-color, #9e9e9e);
}
.ds-text-ui--disabled {
  pointer-events: none;
}
```
</details>

#### Textarea `[57916:9023]` — 13 вариантов
**Описание и рекомендации по применению:**
Многострочное поле — длинный текст: комментарий к заказу, примечание к накладной, описание позиции.  
Берите его, когда ответ не помещается в одну строку; для короткого значения используйте Input.  


Состав: Label над полем, само поле с прокруткой, support-текст под полем (подсказка или ошибка).  
Высоту задавайте под ожидаемый текст, растягивать вручную не нужно.  


Как выбрать вариант:  
Variant=Empty — поле без текста; Populated — с введённым текстом.  
Состояния: Default, Hover, Focus, Focus+Placeholder, Focus+Value, Error, Error+Hover, Disable.
- **Size** (VARIANT): M
- **Variant** (VARIANT): Empty, Populated
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Прочие свойства: Input text#52678:0 (TEXT), Label text#52678:3 (TEXT), Support text#52678:6 (TEXT), Label#56934:32 (BOOLEAN), Element left#56934:282 (BOOLEAN), Element right#56934:407 (BOOLEAN), Support text#56934:532 (BOOLEAN), Input text#56968:66 (BOOLEAN), Hint text#57893:0 (BOOLEAN), Support#57893:30 (BOOLEAN), Hint text#57893:60 (TEXT), Scroll#57994:0 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `96px`, растёт по контенту
    - ширина: `250px` (фикс.)
    - промежуток между элементами: `var(--ds-form-field-gap-input-support, 4px)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--empty`: color `var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e)`, color `var(--ds-color-form-field-input-label-text-color, #616161)`
    - `--populated`: color `var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e)`, color `var(--ds-color-form-field-filled-default-label-text-color, #616161)`
- Состояния: `:disabled` (неактивно), `:focus-visible`, `:hover` (наведение)
- Разметка:

```html
<div class="ds-textarea ds-textarea--disabled">
  <span class="ds-textarea__element-left"><!-- SVG-иконка ДС --></span>
  <span class="ds-textarea__element-right"><!-- SVG-иконка ДС --></span>
  <span class="ds-textarea__hint">Текст</span>
  <span class="ds-textarea__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-textarea__input-content"></div>
  <div class="ds-textarea__input-frame"></div>
  <span class="ds-textarea__label">Текст</span>
  <div class="ds-textarea__scroll"></div>
  <span class="ds-textarea__support">Текст</span>
  <span class="ds-textarea__text">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Textarea [57916:9023] — 13 вариантов; оси: Size, Variant, State */
.ds-textarea {
  min-height: 96px;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support, 4px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-textarea__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
  white-space: nowrap;
}
.ds-textarea__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-textarea__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-textarea__icon svg path {
  fill: currentColor;
}
.ds-textarea__input-frame {
  height: 76px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  padding: var(--ds-form-field-pad-textarea-top, 4px) var(--ds-form-field-m-size-pad-input-right, 12px) var(--ds-form-field-m-size-pad-input-bottom, 12px) var(--ds-form-field-m-size-pad-input-left, 12px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-textarea__element-left {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-textarea__input-content {
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-content);
}
.ds-textarea__element-right {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-textarea__scroll {
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-top, 2px) var(--ds-scroll-pad-right, 2px) var(--ds-scroll-pad-bottom, 2px) var(--ds-scroll-pad-left, 2px);
}
.ds-textarea__support {
  display: flex;
  flex-direction: row;
}
.ds-textarea__text {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: 0 var(--ds-form-field-pad-support-right, 12px) 0 var(--ds-form-field-pad-support-left, 12px);
}
.ds-textarea__hint {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: 0 var(--ds-form-field-pad-support-right, 12px) 0 var(--ds-form-field-pad-support-left, 12px);
}
.ds-textarea--populated:disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-textarea--populated.ds-textarea--disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-textarea--empty:disabled {
  color: var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e);
}
.ds-textarea--empty.ds-textarea--disabled {
  color: var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e);
}
.ds-textarea--populated:focus-visible {
  color: var(--ds-color-form-field-filled-focus-label-text-color, #448aff);
}
.ds-textarea--populated {
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
}
.ds-textarea--empty {
  color: var(--ds-color-form-field-input-label-text-color, #616161);
}
.ds-textarea--populated:hover {
  color: var(--ds-color-form-field-filled-hover-label-text-color, #616161);
}
.ds-textarea--empty:hover {
  background: var(--ds-color-form-field-filled-hover-input-background-hover, #f5f5f5);
  border: 1px solid var(--ds-color-form-field-filled-hover-border-color, #9e9e9e);
}
.ds-textarea--disabled {
  pointer-events: none;
}
```
</details>

#### Timepicker `[58982:9858]` — 2 вариантов
**Описание и рекомендации по применению:**
Выбор времени — список или сетка часов и минут: время доставки, начало смены.  
Открывается из поля времени (Input Timepicker); отдельно на экране не живёт.  


Как выбрать вариант:  
Type=Time line — список времени одной колонкой, прокруткой.  
Type=Time grid — сетка значений, когда нужен быстрый выбор круглых значений.
- **Type** (VARIANT): Time grid, Time line
- Прочие свойства: Slot Time#58983:4 (SLOT), Control Panel#58983:7 (SLOT), Scroll#58983:10 (BOOLEAN)
- Размеры и параметры:
    - ширина: `fit-content` (фикс.)
    - внутренние отступы: `var(--ds-size-2x) 0 var(--ds-size-2x) 0`
    - скругление: `var(--ds-size-3x)`
    - рамка: `1px solid var(--ds-color-stroke-default, #e0e0e0)`
    - фон: `var(--ds-color-brand-neutral-default, #ffffff)`
    - тень: `var(--ds-shadow-shadows-08-dp-s)`
- Модификаторы (что меняет каждый):
    - `--time-grid`: направление `column`, align-items `center`, color `var(--ds-color-text-primary, #333333)`
    - `--time-line`: направление `row`, color `var(--ds-color-text-primary, #333333)`
- Разметка:

```html
<div class="ds-timepicker ds-timepicker--time-grid">
  <div class="ds-timepicker__control-panel"></div>
  <span class="ds-timepicker__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-timepicker__label">Текст</span>
  <div class="ds-timepicker__scroll"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Timepicker [58982:9858] — 2 вариантов; оси: Type */
.ds-timepicker {
  width: fit-content;
  display: flex;
  padding: var(--ds-size-2x) 0 var(--ds-size-2x) 0;
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-brand-neutral-default, #ffffff);
  border: 1px solid var(--ds-color-stroke-default, #e0e0e0);
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-timepicker__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-text-primary, #333333);
  white-space: nowrap;
}
.ds-timepicker__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: var(--ds-size-3x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-timepicker__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-timepicker__icon svg path {
  fill: currentColor;
}
.ds-timepicker__control-panel {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-timepicker__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-top, 2px) var(--ds-scroll-pad-right, 2px) var(--ds-scroll-pad-bottom, 2px) var(--ds-scroll-pad-left, 2px);
}
.ds-timepicker--time-grid {
  flex-direction: column;
  align-items: center;
  color: var(--ds-color-text-primary, #333333);
}
.ds-timepicker--time-line {
  flex-direction: row;
  color: var(--ds-color-text-primary, #333333);
}
```
</details>

#### Tree `[59564:1473]` — 8 вариантов
**Описание и рекомендации по применению:**
Дерево — иерархический список с раскрытием: группы товаров, склады, оргструктура.  
Берите его, когда у записей есть вложенность; для плоского перечня используйте List.  


Как выбрать вариант:  
Level — уровень вложенности ветки.  
Mode=Middle — ветка в середине уровня; End — последняя ветка уровня.  
For icon=On — с местом под иконку у ветки; Off — без него.
- **Level** (VARIANT): 2, 3
- **Mode** (VARIANT): End, Middle
- **For icon** (VARIANT): Off, On
- Размеры и параметры:
    - высота: `44px` (фикс.)
    - ширина: `fit-content` (фикс.)
    - промежуток между элементами: `var(--ds-size-2-5x)`
- Модификаторы (что меняет каждый):
    - `--2`: направление `row`, направление `column`, align-items `center`
    - `--3`: направление `row`, align-items `center`
- Разметка:

```html
<div class="ds-tree ds-tree--2">
  <span class="ds-tree__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-tree__item"></div>
  <div class="ds-tree__separator-stroke"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Tree [59564:1473] — 8 вариантов; оси: Level, Mode, For icon */
.ds-tree {
  height: 44px;
  width: fit-content;
  display: flex;
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-tree__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-tree__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-tree__icon svg path {
  fill: currentColor;
}
.ds-tree__item {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: 0 0 var(--ds-size-5x) 11px;
}
.ds-tree__separator-stroke {
  height: 100%;
  display: flex;
  flex-direction: row;
  background: #d7d8d9;
}
.ds-tree--2.ds-tree--end.ds-tree--on {
  flex-direction: row;
}
.ds-tree--2.ds-tree--end.ds-tree--off {
  flex-direction: column;
}
.ds-tree--3.ds-tree--end.ds-tree--on {
  flex-direction: row;
}
.ds-tree--3.ds-tree--end.ds-tree--off {
  flex-direction: row;
}
.ds-tree--2.ds-tree--middle.ds-tree--on {
  flex-direction: row;
  align-items: center;
}
.ds-tree--2.ds-tree--middle.ds-tree--off {
  flex-direction: row;
  align-items: center;
}
.ds-tree--3.ds-tree--middle.ds-tree--on {
  flex-direction: row;
  align-items: center;
}
.ds-tree--3.ds-tree--middle.ds-tree--off {
  flex-direction: row;
  align-items: center;
}
```
</details>

#### Tree item `[59564:1504]` — 5 вариантов
**Описание и рекомендации по применению:**
Линия связи в дереве — соединяет ветку с родителем и показывает, продолжается ли уровень.  
Служебный элемент дерева: ставится внутрь ветки, отдельно на экран не выносится.  


Как выбрать вариант: по месту ветки в уровне и длине связи.
- **Mode** (VARIANT): End, End-long, Middle, Middle-long, Start
- Размеры и параметры:
    - высота: `44px` (фикс.)
    - ширина: `fit-content` (фикс.)
    - внутренние отступы: `0 0 var(--ds-size-5x) 11px`
    - промежуток между элементами: `var(--ds-size-2-5x)`
- Модификаторы (что меняет каждый):
    - `--end`: направление `row`, align-items `center`, ширина `48px`, направление `column`
    - `--end-long`: ширина `48px`, направление `column`, внутренние отступы `0 0 21px 11px`
    - `--middle`: направление `row`, align-items `center`, внутренние отступы `0 0 0 11px`, ширина `48px`
    - `--middle-long`: ширина `48px`, направление `row`, align-items `center`, внутренние отступы `0 0 0 11px`
    - `--start`: ширина `var(--ds-size-6x)`, направление `row`, align-items `center`, внутренние отступы `0 var(--ds-size-3x) 0 11px`
- Разметка:

```html
<div class="ds-tree-item ds-tree-item--end">
  <div class="ds-tree-item__separator-stroke"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Tree item [59564:1504] — 5 вариантов; оси: Mode */
.ds-tree-item {
  height: 44px;
  display: flex;
  width: fit-content;
  padding: 0 0 var(--ds-size-5x) 11px;
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-tree-item__separator-stroke {
  height: 100%;
  display: flex;
  flex-direction: row;
  background: #d7d8d9;
}
.ds-tree-item--end {
  flex-direction: row;
  align-items: center;
}
.ds-tree-item--end-long {
  width: 48px;
  flex-direction: column;
  padding: 0 0 21px 11px;
}
.ds-tree-item--middle {
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 11px;
}
.ds-tree-item--middle-long {
  width: 48px;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 11px;
}
.ds-tree-item--start {
  width: var(--ds-size-6x);
  flex-direction: row;
  align-items: center;
  padding: 0 var(--ds-size-3x) 0 11px;
}
```
</details>


### Карта классов CSS-библиотеки

Готовые стили для **всех компонентов** ДС лежат в `components/components.css` (сгенерировано из Figma, все значения — токены). Паттерн: контейнер `.ds-<компонент>` + модификаторы вариантов `--<значение>` + элементы `__label` / `__icon`.

**✓ выверено по узлам Figma вручную** (размеры, шрифты, состояния сняты поштучно): Button, Input, Checkbox, Radio button, Badge, Tabs (Lvl 1/2), Divider, Banners, Card view (+header/content/footer), Expansion panel (+content), Stepper (+Step), Slide toggle. Остальные — сгенерированы автоматически: цвета/размеры/радиусы на токенах верные, структура упрощённая (при первом использовании стоит сверить с макетом).

Подключение:

```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components/button.css">
<link rel="stylesheet" href="components/input.css">
<link rel="stylesheet" href="components/selection.css">
<link rel="stylesheet" href="components/badge.css">
<link rel="stylesheet" href="components/components.css">
```

| Компонент | Класс | Модификаторы |
|---|---|---|
| Arrow | `.ds-arrow` |
| Arrow list | `.ds-arrow-list` |
| Arrow menu | `.ds-arrow-menu` |
| Arrow select | `.ds-arrow-select` |
| Autocomplete form | `.ds-autocomplete-form` · `--empty` `--populated` `--empty` `--populated` `--populated` `--empty` `--empty` `--populated` `--populated` `--disabled` · :disabled, :focus, :hover |
| Backdrop | `.ds-backdrop` |
| Button toggle | `.ds-button-toggle` · `--s` `--xs` `--filled` `--outlined` `--outlined` `--filled` |
| Checkbox label | `.ds-checkbox-label` · `--normal` `--normal` `--normal` `--error` `--error` `--error` `--disable` `--disable` `--disable` |
| Chips | `.ds-chips` · `--s` `--s` `--outlined` `--outlined` `--outlined` `--outlined` `--outlined` `--outlined` `--filled` `--filled` `--filled` `--filled` `--filled` `--disabled` · :active, :disabled, :focus, :hover |
| Chips group | `.ds-chips-group` · `--s` |
| Chips Input | `.ds-chips-input` · `--s` `--s` `--disabled` · :disabled, :focus, :hover |
| Chips Input | `.ds-chips-input-2` · `--s` `--disabled` · :disabled, :focus, :hover |
| Chips input cell | `.ds-chips-input-cell` · `--disabled` · :disabled, :focus, :hover |
| Control arrow button | `.ds-control-arrow-button` · `--s` |
| Control Panel | `.ds-control-panel` · `--control` `--week` `--calendar` |
| Control Panel | `.ds-control-panel-2` · `--control` `--time` |
| Datepicker | `.ds-datepicker` · `--day` `--year` `--month` |
| Dialog content | `.ds-dialog-content` |
| Dialog footer | `.ds-dialog-footer` |
| Dialog header | `.ds-dialog-header` · `--text` |
| Dialog view | `.ds-dialog-view` |
| Element | `.ds-element` · `--image-size` `--icon-size` `--icon-group` `--text-default` `--checkbox` `--radio-button` `--indicator` `--slide-toggle` `--counter` |
| Element Form Field | `.ds-element-form-field` · `--input-cell` `--select-cell` `--chips-input-cell` |
| Element left | `.ds-element-left` |
| Element menu | `.ds-element-menu` · `--image-size` `--icon-size` `--text-default` `--checkbox` `--radio-button` `--indicator` `--slide-toggle` `--counter` |
| Element select | `.ds-element-select` · `--image-size` `--icon-size` `--text-default` `--checkbox` `--radio-button` `--indicator` `--slide-toggle` `--counter` |
| Element sidenav | `.ds-element-sidenav` · `--collaps-icon` `--avatar` |
| Element step | `.ds-element-step` · `--icon-size` `--counter` `--counter` `--counter` `--counter` `--counter` `--disabled` · :active, :disabled, :hover |
| Elements | `.ds-elements` · `--cell` `--cell` `--cell` `--cell` `--cell` `--cell` `--cell` `--cell` `--cell` `--cell` `--cell` `--cell` `--cell` `--year` `--cell` `--cell` `--year` `--year` `--year` `--year` `--year` `--year` `--year` `--year` `--year` `--year` `--month` `--month` `--month` `--month` `--month` `--disabled` · :active, :disabled, :hover |
| Elements | `.ds-elements-2` · `--selected` `--default` `--default` `--default` `--default` `--default` `--disabled` · :active, :disabled, :hover |
| Expansion content | `.ds-expansion-content` · `--true` `--false` |
| Expansion group panel | `.ds-expansion-group-panel` · `--collaps` `--expand` |
| Form field cell | `.ds-form-field-cell` |
| Hint container | `.ds-hint-container` · `--up` `--down` `--right` `--left` `--default` |
| Hint content | `.ds-hint-content` · `--group-content` `--single-content` |
| Hint footer | `.ds-hint-footer` · `--default` |
| Hint header | `.ds-hint-header` · `--neutral` `--primary` `--secondary` `--warning` `--error` |
| Icon group | `.ds-icon-group` · `--4x` |
| Input cell | `.ds-input-cell` · `--disabled` · :disabled, :focus, :hover |
| Input Datepicker | `.ds-input-datepicker` · `--empty` `--populated` |
| Input number | `.ds-input-number` · `--s` `--xs` `--xs` `--populated` `--empty` `--populated` `--populated` `--empty` `--populated` `--populated` `--empty` `--empty` `--disabled` · :disabled, :focus, :hover |
| Input number_but icon | `.ds-input-number-but-icon` |
| Input Timepicker | `.ds-input-timepicker` · `--empty` `--populated` |
| List (Сontainer) | `.ds-list-container` · `--container` |
| List item | `.ds-list-item` · `--disabled` · :active, :disabled, :hover |
| Logo iiko | `.ds-logo-iiko` |
| Logo Syrve | `.ds-logo-syrve` |
| Menu (Container) | `.ds-menu-container` · `--container` |
| Menu item | `.ds-menu-item` · `--disabled` · :active, :disabled, :hover |
| Picture | `.ds-picture` |
| Radio button label | `.ds-radio-button-label` · `--normal` `--normal` `--error` `--error` `--disable` `--disable` |
| Scroll | `.ds-scroll` · `--s` `--first` `--middle` `--middle` `--last` · :hover |
| Scroll tabs | `.ds-scroll-tabs` · `--left` |
| Search | `.ds-search` · `--s` `--s` `--xs` `--xs` `--disabled` · :disabled, :focus, :hover |
| Select (Сontainer) | `.ds-select-container` · `--container` |
| Select cell | `.ds-select-cell` · `--disabled` · :disabled, :focus, :hover |
| Select form | `.ds-select-form` · `--s` `--xs` `--empty` `--populated` `--empty` `--populated` `--populated` `--empty` `--empty` `--populated` `--populated` `--disabled` · :disabled, :focus, :hover |
| Select item | `.ds-select-item` · `--true` `--false` `--false` `--false` `--false` `--false` `--disabled` · :active, :disabled, :hover |
| Sidenav control | `.ds-sidenav-control` · `--collapsed` `--collapsed` `--expanded` `--expanded` `--expanded` `--collapsed` · :active, :hover |
| Sidenav Footer | `.ds-sidenav-footer` · `--l2` `--l1` `--l1` |
| Sidenav header | `.ds-sidenav-header` · `--l1` `--l2` `--l1` |
| Sidenav item | `.ds-sidenav-item` · `--l3` `--l3` `--l2` `--l2` `--l1` `--l1` `--l1` `--l1` · :hover |
| Sidenav View | `.ds-sidenav-view` |
| Snackbar | `.ds-snackbar` · `--single` `--single` `--complex` `--complex` |
| State | `.ds-state` · :active, :hover |
| Status | `.ds-status` · `--neutral` `--accent` `--positive` `--warning` `--negative` `--contrast-1` `--contrast-2` `--contrast-3` `--contrast-4` `--neutral` `--accent` `--positive` `--warning` `--negative` `--contrast-1` `--contrast-2` `--contrast-3` `--contrast-4` |
| Table 2 lvl | `.ds-table-2-lvl` · `--table-cell-2-lvl` `--table-row-2-lvl` |
| Table Chips Input | `.ds-table-chips-input` · `--default` `--hover` `--focus` `--focus-placeholder` `--vocus-value` `--error` `--error-hover` `--disable` |
| Table content cell | `.ds-table-content-cell` · `--disabled` · :disabled, :hover |
| Table content row | `.ds-table-content-row` · `--disabled` · :disabled, :hover |
| Table footer | `.ds-table-footer` · `--default` |
| Table header cell | `.ds-table-header-cell` · `--disabled` · :disabled, :hover |
| Table header row | `.ds-table-header-row` |
| Text UI | `.ds-text-ui` · `--disabled` · :disabled |
| Textarea | `.ds-textarea` · `--populated` `--populated` `--empty` `--empty` `--populated` `--populated` `--empty` `--populated` `--empty` `--disabled` · :disabled, :focus, :hover |
| Timepicker | `.ds-timepicker` · `--time-grid` `--time-line` |
| Tree | `.ds-tree` · `--2` `--2` `--3` `--3` `--2` `--2` `--3` `--3` |
| Tree item | `.ds-tree-item` · `--end` `--end-long` `--middle` `--middle-long` `--start` |

#### Ручные (выверенные по Figma) файлы — их классы

Эти компоненты сняты с узлов Figma поштучно и живут в отдельных файлах (`button, input, selection, selection-icons, badge, navigation, card, expansion, stepper, toggle`). Имена классов КОРОЧЕ имени компонента в Figma — писать в разметке именно их.

| Класс | Модификаторы | Элементы |
|---|---|---|
| `.ds-btn` | `--accent` `--disabled` `--filled` `--m` `--negative` `--neutral` `--outlined` `--positive` `--s` `--text` `--warning` `--xs` | `__icon` `__label` |
| `.ds-btn-group` | `--horizontal` `--margins` `--vertical` | — |
| `.ds-btn-icon` | `--accent` `--disabled` `--m` `--negative` `--neutral` `--outlined` `--positive` `--s` `--text` `--warning` `--xs` | `__icon` |
| `.ds-btn-icon-group` | `--vertically` | — |
| `.ds-input` | `--disabled` `--error` `--m` `--s` `--xs` | `__content` `__field` `__frame` `__hint` `__icon` `__label` `__stepper` `__support` `__support-row` |
| `.ds-checkbox` | `--disabled` `--error` | `__box` `__input` `__label` `__support` |
| `.ds-radio` | `--disabled` `--error` | `__box` `__input` `__label` `__state` `__support` |
| `.ds-checkbox-wrap` | — | — |
| `.ds-checkbox-group` | `--horizontal` `--vertical` | — |
| `.ds-radio-group` | `--horizontal` `--vertical` | — |
| `.ds-badge` | `--accent` `--counter` `--negative` `--point` `--positive` `--warning` | — |
| `.ds-tabs` | `--lvl2` | — |
| `.ds-tab` | `--active` `--disabled` | `__counter` `__icon` |
| `.ds-divider` | `--dashed` `--disable` `--l` `--lite` `--m` `--selected` | — |
| `.ds-divider-line` | `--dashed` `--disable` `--lite` `--selected` | — |
| `.ds-banner` | `--accent` `--horizontal` `--negative` `--neutral` `--positive` `--vertical` `--warning` | `__buttons` `__icon` `__row` `__text` |
| `.ds-field-label` | — | — |
| `.ds-card` | `--custom` `--filled` `--outlined` `--shadow` | `__content` `__divider` `__footer` `__footer--right` `__footer__action` `__header` `__label-down` `__label-up` `__title` |
| `.ds-expansion` | `--disabled` `--info` `--open` | `__actions` `__arrow` `__content` `__content--no-padding` `__header` `__icon` `__title` |
| `.ds-stepper` | — | `__divider` |
| `.ds-step` | `--bg` `--disabled` `--error` `--selected` | `__icon` `__num` |
| `.ds-stepper-button` | — | `__counter` `__group` |
| `.ds-slide-toggle` | `--disabled` `--error` | `__icon` `__input` `__row` `__support` `__title` `__track` |


### Реализованные компоненты (готовая разметка)

Разметка ниже — для компонентов, уже переведённых в код. Остальные компоненты каталога собираются по своим вариантам из раздела выше (структура и значения 1:1 из Figma).


### Button (кнопка)

**Варианты** (1:1 из Figma):
- **Размеры**: `--xs` (24px) · `--s` (28px) · `--m` (36px)
- **Стили**: `--accent` · `--neutral` · `--positive` · `--negative` · `--warning`
- **Типы**: `--filled` · `--outlined` · `--text`
- **Состояния**: Default / Hover / Press — нативные CSS (`:hover`, `:active`); Disabled — атрибут `disabled` (или класс `ds-btn--disabled`)
- **Иконки**: слева — для действий, справа — для навигации

| Стиль | Семантика (из ДС) |
|---|---|
| **Accent** | Основная кнопка: ключевые действия («Сохранить», «Опубликовать»). Не более одной основной кнопки в области просмотра. |
| **Neutral** | Второстепенные действия («Отмена»), опции без активного привлечения внимания. |
| **Positive** | Действия среднего приоритета с благоприятным исходом, позитивные альтернативы. |
| **Warning** | Действия, требующие осторожности, но не разрушительные («Выйти из аккаунта»). |
| **Negative** | Разрушительные действия («Удалить», «Заблокировать»). Использовать экономно. |
| **Disabled** | Недоступное действие: `disabled`-атрибут или класс `ds-btn--disabled`. |

Разметка (все комбинации образуются классами `ds-btn` + размер + стиль + тип):

```html
<button class="ds-btn ds-btn--m ds-btn--accent ds-btn--filled" type="button"><span class="ds-btn__label">Сохранить</span></button>
```
```html
<button class="ds-btn ds-btn--m ds-btn--accent ds-btn--outlined" type="button"><span class="ds-btn__label">Отмена</span></button>
```
```html
<button class="ds-btn ds-btn--m ds-btn--neutral ds-btn--text" type="button"><span class="ds-btn__label">Ещё</span></button>
```
```html
<button class="ds-btn ds-btn--m ds-btn--accent ds-btn--filled" type="button"><span class="ds-btn__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill="currentColor"/> </svg></span><span class="ds-btn__label">Create New</span></button>
```
```html
<button class="ds-btn ds-btn--m ds-btn--accent ds-btn--outlined" type="button"><span class="ds-btn__label">Next Step</span><span class="ds-btn__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" fill="currentColor"/> </svg></span></button>
```
```html
<button class="ds-btn ds-btn--m ds-btn--accent ds-btn--filled" type="button" disabled><span class="ds-btn__label">Disabled</span></button>
```
```html
<button class="ds-btn ds-btn--xs ds-btn--accent ds-btn--filled" type="button"><span class="ds-btn__label">Action</span></button>
```
```html
<button class="ds-btn ds-btn--s ds-btn--accent ds-btn--filled" type="button"><span class="ds-btn__label">Action</span></button>
```

Группа кнопок (горизонтальная / вертикальная):

```html
<div class="ds-btn-group ds-btn-group--horizontal">
  <button class="ds-btn ds-btn--m ds-btn--accent ds-btn--filled" type="button"><span class="ds-btn__label">Сохранить</span></button>
  <button class="ds-btn ds-btn--m ds-btn--neutral ds-btn--outlined" type="button"><span class="ds-btn__label">Отмена</span></button>
</div>
```

CSS-правила компонента (значения — только токены):

```css
/* ============================================================
   iiko DS — Button (кнопка)
   Источник: Figma, страница «🔵Готово 🧾 → Button»
   Варианты: Size XS/S/M · Style Accent/Neutral/Positive/Negative/Warning/Disable
             Type Filled/Outlined/Text · State Default/Hover/Press/Disable
   Все значения — только токены из tokens.css
   ============================================================ */

.ds-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: var(--ds-radius-2x);            /* 8px */
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-size: var(--ds-typography-font-size-3-5x); /* 14px */
  font-weight: var(--ds-typography-font-weight-medium); /* 500 */
  letter-spacing: var(--ds-typography-letter-spacing-s); /* 0.5px */
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.ds-btn:focus-visible {
  outline: 2px solid var(--ds-palette-accent-300);
  outline-offset: 2px;
}

.ds-btn:disabled,
.ds-btn--disabled {
  pointer-events: none;
}

/* ── Размеры ─────────────────────────────────────────────── */

.ds-btn--xs {
  height: 24px;
  padding: 4px 6px;
  gap: var(--ds-space-1x);                        /* 4px */
  font-size: var(--ds-typography-font-size-3x);   /* 12px */
}
.ds-btn--xs /* Контейнер текста (Figma: «Button Container» — HUG, выравнивание по центру).
   Своей типографики нет: размер/вес/цвет наследуются от .ds-btn */
.ds-btn__label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.ds-btn__icon { font-size: 16px; }

.ds-btn--s {
  height: 28px;
  padding: 4px 8px;
  gap: var(--ds-space-1x);
}
.ds-btn--s .ds-btn__icon { font-size: 20px; }

.ds-btn--m {
  height: 36px;
  padding: 8px 12px;
  gap: var(--ds-space-2x);                        /* 8px */
}
.ds-btn--m .ds-btn__icon { font-size: 20px; }

/* ── Группа кнопок (Button group из Figma) ───────────────── */

.ds-btn-group {
  display: flex;
}
.ds-btn-group--horizontal { flex-direction: row; gap: var(--ds-space-2x); }   /* 8px */
.ds-btn-group--vertical   { flex-direction: column; gap: var(--ds-space-2x); }
.ds-btn-group--margins {
  padding: 8px 16px;
}

/* ── Иконки ──────────────────────────────────────────────── */

.ds-btn__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 20px;
  line-height: 1;
}

/* ── Стили: Accent ───────────────────────────────────────── */

.ds-btn--accent.ds-btn--filled {
  background: var(--ds-color-button-accent-default);   /* #448AFF */
  color: var(--ds-color-text-inversive);               /* #FFFFFF */
}
.ds-btn--accent.ds-btn--filled:hover  { background: var(--ds-color-button-accent-hover); }   /* #3969D5 */
.ds-btn--accent.ds-btn--filled:active { background: var(--ds-color-button-accent-press); }   /* #2651B5 */

.ds-btn--accent.ds-btn--outlined {
  background: var(--ds-color-button-accent-lite-default); /* #FFFFFF */
  border-color: var(--ds-color-button-accent-default);
  color: var(--ds-color-button-accent-default);
}
.ds-btn--accent.ds-btn--outlined:hover  { background: var(--ds-color-button-accent-lite-hover); } /* #F5F9FF */
.ds-btn--accent.ds-btn--outlined:active { background: var(--ds-color-button-accent-lite-press); } /* #E8F0FF */

.ds-btn--accent.ds-btn--text {
  background: var(--ds-color-button-accent-lite-default);
  color: var(--ds-color-button-accent-default);
}
.ds-btn--accent.ds-btn--text:hover  { background: var(--ds-color-button-accent-lite-hover); }
.ds-btn--accent.ds-btn--text:active { background: var(--ds-color-button-accent-lite-press); }

/* ── Стили: Neutral ──────────────────────────────────────── */

.ds-btn--neutral.ds-btn--filled {
  background: var(--ds-color-button-neutral-default); /* #FFFFFF */
  color: var(--ds-color-text-primary);                /* #333333 */
}
.ds-btn--neutral.ds-btn--filled:hover  { background: var(--ds-color-button-neutral-hover); } /* #FAFAFA */
.ds-btn--neutral.ds-btn--filled:active { background: var(--ds-color-button-neutral-press); } /* #EBEBEB */

.ds-btn--neutral.ds-btn--outlined {
  background: var(--ds-color-button-neutral-default);
  border-color: var(--ds-color-stroke-default);      /* #E0E0E0 */
  color: var(--ds-color-text-primary);
}
.ds-btn--neutral.ds-btn--outlined:hover  { background: var(--ds-color-button-neutral-hover); }
.ds-btn--neutral.ds-btn--outlined:active { background: var(--ds-color-button-neutral-press); }

.ds-btn--neutral.ds-btn--text {
  background: var(--ds-color-button-neutral-default);
  color: var(--ds-color-text-primary);
}
.ds-btn--neutral.ds-btn--text:hover  { background: var(--ds-color-button-neutral-hover); }
.ds-btn--neutral.ds-btn--text:active { background: var(--ds-color-button-neutral-press); }

/* ── Стили: Positive ─────────────────────────────────────── */

.ds-btn--positive.ds-btn--filled {
  background: var(--ds-color-button-positive-default); /* #14B456 */
  color: var(--ds-color-text-inversive);
}
.ds-btn--positive.ds-btn--filled:hover  { background: var(--ds-color-button-positive-hover); } /* #119C34 */
.ds-btn--positive.ds-btn--filled:active { background: var(--ds-color-button-positive-press); } /* #0F852C */

.ds-btn--positive.ds-btn--outlined {
  background: var(--ds-color-button-positive-lite-default);
  border-color: var(--ds-color-button-positive-default);
  color: var(--ds-color-button-positive-default);
}
.ds-btn--positive.ds-btn--outlined:hover  { background: var(--ds-color-button-positive-lite-hover); } /* #F3FCF7 */
.ds-btn--positive.ds-btn--outlined:active { background: var(--ds-color-button-positive-lite-press); } /* #E0F8EA */

.ds-btn--positive.ds-btn--text {
  background: var(--ds-color-button-positive-lite-default);
  color: var(--ds-color-button-positive-default);
}
.ds-btn--positive.ds-btn--text:hover  { background: var(--ds-color-button-positive-lite-hover); }
.ds-btn--positive.ds-btn--text:active { background: var(--ds-color-button-positive-lite-press); }

/* ── Стили: Negative ─────────────────────────────────────── */

.ds-btn--negative.ds-btn--filled {
  background: var(--ds-color-button-negative-default); /* #FF5252 */
  color: var(--ds-color-text-inversive);
}
.ds-btn--negative.ds-btn--filled:hover  { background: var(--ds-color-button-negative-hover); } /* #F4372F */
.ds-btn--negative.ds-btn--filled:active { background: var(--ds-color-button-negative-press); } /* #DE1A12 */

.ds-btn--negative.ds-btn--outlined {
  background: var(--ds-color-button-negative-lite-default);
  border-color: var(--ds-color-button-negative-default);
  color: var(--ds-color-button-negative-default);
}
.ds-btn--negative.ds-btn--outlined:hover  { background: var(--ds-color-button-negative-lite-hover); } /* #FFF8F8 */
.ds-btn--negative.ds-btn--outlined:active { background: var(--ds-color-button-negative-lite-press); } /* #FFE5E5 */

.ds-btn--negative.ds-btn--text {
  background: var(--ds-color-button-negative-lite-default);
  color: var(--ds-color-button-negative-default);
}
.ds-btn--negative.ds-btn--text:hover  { background: var(--ds-color-button-negative-lite-hover); }
.ds-btn--negative.ds-btn--text:active { background: var(--ds-color-button-negative-lite-press); }

/* ── Стили: Warning ──────────────────────────────────────── */

.ds-btn--warning.ds-btn--filled {
  background: var(--ds-color-button-warning-default); /* #FFAB40 */
  color: var(--ds-color-text-inversive);
}
.ds-btn--warning.ds-btn--filled:hover  { background: var(--ds-color-button-warning-hover); } /* #FE8C06 */
.ds-btn--warning.ds-btn--filled:active { background: var(--ds-color-button-warning-press); } /* #EA7806 */

.ds-btn--warning.ds-btn--outlined {
  background: var(--ds-color-button-warning-lite-default);
  border-color: var(--ds-color-button-warning-default);
  color: var(--ds-color-button-warning-press);      /* по ДС текст #EA7806 */
}
.ds-btn--warning.ds-btn--outlined:hover  { background: var(--ds-color-button-warning-lite-hover); } /* #FFFCF8 */
.ds-btn--warning.ds-btn--outlined:active { background: var(--ds-color-button-warning-lite-press); } /* #FFF4E5 */

.ds-btn--warning.ds-btn--text {
  background: var(--ds-color-button-warning-lite-default);
  color: var(--ds-color-button-warning-press);
}
.ds-btn--warning.ds-btn--text:hover  { background: var(--ds-color-button-warning-lite-hover); }
.ds-btn--warning.ds-btn--text:active { background: var(--ds-color-button-warning-lite-press); }

/* ── Стили: Disable / disabled ───────────────────────────── */

.ds-btn--filled:disabled,
.ds-btn--filled.ds-btn--disabled {
  background: var(--ds-color-button-neutral-disable); /* #EBEBEB */
  color: var(--ds-color-text-disable);                /* #9E9E9E */
}

.ds-btn--outlined:disabled,
.ds-btn--outlined.ds-btn--disabled {
  background: var(--ds-color-button-neutral-default);
  border-color: var(--ds-color-button-neutral-disable);
  color: var(--ds-color-text-disable);
}

.ds-btn--text:disabled,
.ds-btn--text.ds-btn--disabled {
  background: var(--ds-color-button-neutral-default);
  color: var(--ds-color-text-disable);
}

```



### Input (поле ввода)

**Варианты** (1:1 из Figma):
- **Размеры**: `--m` (48px, лейбл сверху) · `--s` (36px, без лейбла) · `--xs` (28px, без лейбла, радиус 0, прозрачный фон)
- **Состояния**: Default / Hover / Focus (рамка акцент) / Error / Disabled
- **Дополнительно**: иконка слева (`Element left`), Support text + Hint text внизу

Разметка:

```html
<div class="ds-input ds-input--m">
  <div class="ds-input__frame">
    <div class="ds-input__content"><label class="ds-input__label">Название</label><input class="ds-input__field" type="text" value="Касса 1" ></div>
  </div>
</div>
```
```html
<div class="ds-input ds-input--m">
  <div class="ds-input__frame">
    <div class="ds-input__content"><label class="ds-input__label">Название</label><input class="ds-input__field" type="text"  placeholder="Введите название"></div>
  </div>
</div>
```
```html
<div class="ds-input ds-input--m">
  <div class="ds-input__frame"><span class="ds-input__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z" fill="currentColor"/> </svg></span>
    <div class="ds-input__content"><label class="ds-input__label">Поиск</label><input class="ds-input__field" type="text"  placeholder="Поиск по меню"></div>
  </div>
</div>
```
```html
<div class="ds-input ds-input--m ds-input--error">
  <div class="ds-input__frame">
    <div class="ds-input__content"><label class="ds-input__label">Название</label><input class="ds-input__field" type="text" value="Касса 1" ></div>
  </div>
<div class="ds-input__support-row"><span class="ds-input__support">Обязательное поле</span></div></div>
```
```html
<div class="ds-input ds-input--m ds-input--disabled">
  <div class="ds-input__frame">
    <div class="ds-input__content"><label class="ds-input__label">Название</label><input class="ds-input__field" type="text" value="Касса 1" ></div>
  </div>
</div>
```
```html
<div class="ds-input ds-input--s">
  <div class="ds-input__frame">
    <div class="ds-input__content"><input class="ds-input__field" type="text" value="Касса 1" ></div>
  </div>
</div>
```
```html
<div class="ds-input ds-input--xs">
  <div class="ds-input__frame">
    <div class="ds-input__content"><input class="ds-input__field" type="text" value="Касса 1" ></div>
  </div>
</div>
```

CSS-правила компонента:

```css
/* ============================================================
   iiko DS — Input (Form field + Input)
   Источник: Figma, страница «     Form field+Input», COMPONENT_SET «Input»
   Свойства: Size (M/S/XS) · Variant (Empty/Populated/No label up) · State (8)
   M — лейбл сверху (48px), S — 36px, XS — 28px (S/XS без лейбла)
   XS: Border radius = 0px, фон прозрачный (fill visible=false) — 1:1 из Figma
   Все значения — только токены из tokens.css
   ============================================================ */

.ds-input {
  display: flex;
  flex-direction: column;
  gap: var(--ds-space-1x);            /* 4px — Input/Gap input support */
  width: 100%;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* ── Рамка поля (Input Frame) ─────────────────────────── */

.ds-input__frame {
  display: flex;
  align-items: center;
  gap: var(--ds-space-2x);            /* 8px — Input/Gap input frame */
  box-sizing: border-box;
  border: 1px solid var(--ds-color-stroke-default);   /* #E0E0E0 */
  border-radius: var(--ds-radius-3x);                 /* 12px — Input/Border radius */
  background: var(--ds-color-shapes-default-variant); /* #F8F9FC — Input/Input filled background */
  transition: background-color 0.15s ease, border-color 0.15s ease;
}

.ds-input--m .ds-input__frame { height: 48px; padding: 12px; }               /* M: Pad 12/12 */
.ds-input--s .ds-input__frame { height: 36px; padding: 6px 12px; }           /* S: Pad 6/12 */
.ds-input--xs .ds-input__frame {
  height: 28px;
  padding: 4px 8px;                 /* XS: Pad 4/8 */
  border-radius: var(--ds-radius-0);   /* XS: Border radius = 0px */
  background: transparent;             /* XS: заливка выключена в Figma */
}

/* ── Иконки слева/справа (Element left / Element right) ── */

.ds-input__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 20px;                   /* Input/[M|S|XS] size/Icon: узлы 20×20 */
  color: var(--ds-color-icon-primary);  /* #616161 */
}

/* ── Содержимое: лейбл + поле ─────────────────────────── */

.ds-input__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  min-width: 0;
}

.ds-input__label {
  font-size: var(--ds-typography-font-size-3x);    /* 12px — Input/[M|S|XS] size/Text label */
  font-weight: var(--ds-typography-font-weight-regular);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  line-height: 16px;
  color: var(--ds-color-text-secondary);           /* #616161 — Input/Input label text color */
  transition: color 0.15s ease;
}

.ds-input__field {
  width: 100%;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  font-family: inherit;
  font-size: var(--ds-typography-font-size-4x);    /* 16px — M/S: Text */
  font-weight: var(--ds-typography-font-weight-regular);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  line-height: 24px;
  color: var(--ds-color-text-primary);             /* #333333 */
}

.ds-input--xs .ds-input__field {
  font-size: var(--ds-typography-font-size-3-5x);  /* 14px — XS: Text */
  line-height: 20px;
}
.ds-input--xs .ds-input__label,
.ds-input--s  .ds-input__label { display: none; }  /* S/XS — No label up */

.ds-input__field::placeholder {
  color: var(--ds-color-text-placeholder);         /* #D6D6D6 */
  opacity: 1;
}

/* ── Поддержка: Support text + Hint text (Support-блок) ── */

.ds-input__support-row {
  display: flex;
  align-items: center;
  justify-content: space-between;   /* как в Figma: Support text слева, Hint text справа (фреймы 176/74) */
}

.ds-input__support,
.ds-input__hint {
  font-size: var(--ds-typography-font-size-3x);    /* 12px — Text support */
  font-weight: var(--ds-typography-font-weight-regular);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  line-height: 16px;
  color: var(--ds-color-text-secondary);           /* #616161 */
  transition: color 0.15s ease;
}

/* ── Состояния (Input/Filled/[State]/*) ────────────────── */

/* Hover */
.ds-input__frame:hover {
  background: var(--ds-color-shapes-hover);        /* #F5F5F5 */
  border-color: var(--ds-color-stroke-hover);      /* #9E9E9E */
}

/* Focus (рамка подсвечивается, когда фокус внутри) */
.ds-input__frame:focus-within {
  background: var(--ds-color-shapes-default-variant); /* #F8F9FC */
  border-color: var(--ds-color-stroke-accent);        /* #448AFF */
}
.ds-input__frame:focus-within .ds-input__label { color: var(--ds-color-text-accent); }

/* Error / Error+Hover */
.ds-input--error .ds-input__frame {
  border-color: var(--ds-color-stroke-negative);   /* #FF5252 */
  background: var(--ds-color-shapes-default-variant);
}
.ds-input--error .ds-input__frame:hover {
  background: var(--ds-color-shapes-hover);        /* Error+Hover: фон #F5F5F5 */
}
.ds-input--error .ds-input__label,
.ds-input--error .ds-input__support {
  color: var(--ds-color-text-negative);            /* #FF5252 */
}

/* Disabled */
.ds-input--disabled .ds-input__frame,
.ds-input--disabled .ds-input__frame:hover {
  background: var(--ds-color-surface-disable);     /* #F5F5F5 */
  border-color: var(--ds-color-stroke-disable);    /* #EBEBEB */
}
.ds-input--disabled .ds-input__label,
.ds-input--disabled .ds-input__field,
.ds-input--disabled .ds-input__support,
.ds-input--disabled .ds-input__hint,
.ds-input--disabled .ds-input__icon {
  color: var(--ds-color-text-disable);             /* #9E9E9E */
}
.ds-input--disabled .ds-input__field { cursor: not-allowed; }

```



### Checkbox (чекбокс)

**Варианты**: Selected / Deselected / **Indeterminate** × Normal / Error / Disabled.
Indeterminate задаётся через JS: `input.indeterminate = true` (класс/атрибут не работает).

Разметка:

```html
<label class="ds-checkbox">
  <input type="checkbox" class="ds-checkbox__input" checked>
  <span class="ds-checkbox__box"></span>
  <span class="ds-checkbox__label">Обед</span>
</label>
```
```html
<label class="ds-checkbox">
  <input type="checkbox" class="ds-checkbox__input">
  <span class="ds-checkbox__box"></span>
  <span class="ds-checkbox__label">Ужин</span>
</label>
```
```html
<label class="ds-checkbox">
  <input type="checkbox" class="ds-checkbox__input" indeterminate>
  <span class="ds-checkbox__box"></span>
  <span class="ds-checkbox__label">Завтрак</span>
</label>
```
```html
<label class="ds-checkbox ds-checkbox--error">
  <input type="checkbox" class="ds-checkbox__input" checked>
  <span class="ds-checkbox__box"></span>
  <span class="ds-checkbox__label">Акция</span>
  <span class="ds-checkbox__support">Ошибка</span>
</label>
```
```html
<label class="ds-checkbox ds-checkbox--disabled">
  <input type="checkbox" class="ds-checkbox__input" checked disabled>
  <span class="ds-checkbox__box"></span>
  <span class="ds-checkbox__label">Архив</span>
</label>
```
```html
<label class="ds-checkbox ds-checkbox--disabled">
  <input type="checkbox" class="ds-checkbox__input" disabled>
  <span class="ds-checkbox__box"></span>
  <span class="ds-checkbox__label">Черновик</span>
</label>
```

Группа чекбоксов:

```html
<div class="ds-checkbox-group ds-checkbox-group--vertical">
  <label class="ds-checkbox">
  <input type="checkbox" class="ds-checkbox__input" checked>
  <span class="ds-checkbox__box"></span>
  <span class="ds-checkbox__label">Обед</span>
</label>
  <label class="ds-checkbox">
  <input type="checkbox" class="ds-checkbox__input">
  <span class="ds-checkbox__box"></span>
  <span class="ds-checkbox__label">Ужин</span>
</label>
</div>
```


### Radio button (радиокнопка)

**Варианты**: Selected / Deselected × Normal / Error / Disabled.
Радиокнопки объединяются общим `name` (в примере — `pay`).

Разметка:

```html
<label class="ds-radio">
  <input type="radio" class="ds-radio__input" checked>
  <span class="ds-radio__box"></span>
  <span class="ds-radio__label">Наличные</span>
</label>
```
```html
<label class="ds-radio">
  <input type="radio" class="ds-radio__input">
  <span class="ds-radio__box"></span>
  <span class="ds-radio__label">Карта</span>
</label>
```
```html
<label class="ds-radio ds-radio--error">
  <input type="radio" class="ds-radio__input" checked>
  <span class="ds-radio__box"></span>
  <span class="ds-radio__label">Самовывоз</span>
  <span class="ds-radio__support">Ошибка</span>
</label>
```
```html
<label class="ds-radio ds-radio--disabled">
  <input type="radio" class="ds-radio__input" checked disabled>
  <span class="ds-radio__box"></span>
  <span class="ds-radio__label">Курьер</span>
</label>
```
```html
<label class="ds-radio ds-radio--disabled">
  <input type="radio" class="ds-radio__input" disabled>
  <span class="ds-radio__box"></span>
  <span class="ds-radio__label">Пункт выдачи</span>
</label>
```

Группа радиокнопок:

```html
<div class="ds-radio-group ds-radio-group--vertical">
  <label class="ds-radio">
  <input type="radio" class="ds-radio__input" checked>
  <span class="ds-radio__box"></span>
  <span class="ds-radio__label">Наличные</span>
</label>
  <label class="ds-radio">
  <input type="radio" class="ds-radio__input">
  <span class="ds-radio__box"></span>
  <span class="ds-radio__label">Карта</span>
</label>
</div>
```

CSS-правила компонентов (иконки checkbox/radio — SVG 20×20, цвета из токенов `--ds-color-checkbox-*` / `--ds-color-radio-button-*`):

```css
/* ============================================================
   iiko DS — Checkbox (чекбокс) и Radio button (радиокнопка)
   Источник: Figma, страницы «🔵Готово 🧾 → Checkbox / Radio button»
   Варианты: Normal / Error / Disable · Selected / Deselected / Indeterminate
   Иконки — Material Icons 20px, цвета из токенов
   ============================================================ */

.ds-checkbox,
.ds-radio {
  display: inline-flex;
  align-items: center;
  gap: var(--ds-space-2x);              /* 8px */
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  cursor: pointer;
  user-select: none;
}

/* скрываем нативный контрол, рисуем иконку */
.ds-checkbox__input,
.ds-radio__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.ds-checkbox__box,
.ds-radio__box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  font-size: 20px;
  line-height: 1;
  color: var(--ds-color-icon-primary);            /* #616161 — deselected */
  transition: color 0.15s ease;
}

/* иконки подставляются автоматически по состоянию контрола */
.ds-checkbox__box::before { content: 'check_box_outline_blank'; }

.ds-checkbox__label,
.ds-radio__label {
  font-size: var(--ds-typography-font-size-3-5x); /* 14px */
  font-weight: var(--ds-typography-font-weight-regular);
  letter-spacing: 0.25px;
  line-height: 20px;
  color: var(--ds-color-text-primary);            /* #333333 */
}
.ds-checkbox__label { color: var(--ds-color-checkbox-label-text-color); }
.ds-radio__label { color: var(--ds-color-radio-button-label-text-color); }

/* ── Checkbox: выбран / не выбран / indeterminate ────────── */

.ds-checkbox__box { color: var(--ds-color-checkbox-normal-deselected-icon-color); }
.ds-checkbox__input:checked ~ .ds-checkbox__box {
  color: var(--ds-color-checkbox-normal-selected-icon-color);             /* #448AFF */
}
.ds-checkbox__input:indeterminate ~ .ds-checkbox__box {
  color: var(--ds-color-checkbox-normal-inderterminate-icon-color);       /* #448AFF */
}
.ds-checkbox__input:checked ~ .ds-checkbox__box::before { content: 'check_box'; }
.ds-checkbox__input:indeterminate ~ .ds-checkbox__box::before { content: 'indeterminate_check_box'; }

/* Checkbox label — обёртка (Form + Support) как авто-лейаут Figma: 20 + 4 + 16 = 40 */
.ds-checkbox-wrap {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
}
.ds-checkbox-wrap .ds-checkbox { align-self: flex-start; }

/* ── Radio: выбран / не выбран ───────────────────────────── */

.ds-radio__box { color: var(--ds-color-radio-button-normal-deselected-icon-color); }  /* #616161 */
.ds-radio__input:checked + .ds-radio__box {
  color: var(--ds-color-radio-button-normal-selected-icon-color);             /* #448AFF */
}

/* ── Error ───────────────────────────────────────────────── */

.ds-checkbox--error .ds-checkbox__box,
.ds-checkbox--error .ds-checkbox__input:checked ~ .ds-checkbox__box,
.ds-checkbox--error .ds-checkbox__input:indeterminate ~ .ds-checkbox__box {
  color: var(--ds-color-checkbox-error-icon-color);           /* #FF5252 */
}
.ds-radio--error .ds-radio__box,
.ds-radio--error .ds-radio__input:checked + .ds-radio__box {
  color: var(--ds-color-radio-button-error-icon-color);       /* #FF5252 */
}
.ds-checkbox--error .ds-checkbox__label,
.ds-radio--error .ds-radio__label {
  color: var(--ds-color-text-primary);  /* в Figma текст лейбла Error = #333333 (Text/Primary) */
}

/* ── Disabled ────────────────────────────────────────────── */

.ds-checkbox--disabled,
.ds-radio--disabled {
  cursor: not-allowed;
}
.ds-checkbox--disabled .ds-checkbox__box { color: var(--ds-color-checkbox-disable-deselected-icon-color); }
.ds-checkbox--disabled .ds-checkbox__input:checked ~ .ds-checkbox__box { color: var(--ds-color-checkbox-disable-selected-icon-color); }
.ds-checkbox--disabled .ds-checkbox__input:indeterminate ~ .ds-checkbox__box { color: var(--ds-color-checkbox-disable-inderterminate-icon-color); }
.ds-checkbox--disabled .ds-checkbox__label { color: var(--ds-color-checkbox-label-text-disable-color); }
.ds-radio--disabled .ds-radio__box,
.ds-radio--disabled .ds-radio__input:checked + .ds-radio__box {
  color: var(--ds-color-radio-button-disable-deselected-icon-color);          /* #9E9E9E */
}
.ds-radio--disabled .ds-radio__label {
  color: var(--ds-color-radio-button-label-text-disable-color);               /* #9E9E9E */
}

/* ── Группа контролов (Checkbox group / Radio button group) ─ */

.ds-checkbox-group,
.ds-radio-group {
  display: flex;
}
.ds-checkbox-group--vertical,
.ds-radio-group--vertical { flex-direction: column; gap: var(--ds-space-2x); }  /* 8px */
.ds-checkbox-group--horizontal,
.ds-radio-group--horizontal { flex-direction: row; gap: var(--ds-space-8x); }  /* 32px */

/* ── Подпись под контролом (Support/Error text) ──────────── */

.ds-checkbox__support,
.ds-radio__support {
  display: block;
  margin-top: var(--ds-space-1x);                 /* 4px */
  margin-left: 28px;                              /* выравнивание по тексту (Pad left support 7x) */
  font-size: var(--ds-typography-font-size-3x);   /* 12px (Text support size) */
  line-height: 16px;
}
.ds-checkbox__support { color: var(--ds-color-checkbox-label-text-support-color); }  /* #616161 */
.ds-radio__support { color: var(--ds-color-radio-button-label-text-support-color); } /* #616161 */
.ds-checkbox--error ~ .ds-checkbox__support,
.ds-radio--error .ds-radio__support {
  color: var(--ds-color-text-negative);           /* #FF5252 */
}

/* ── Подложка состояния (State 28×28) — hover/press в Figma ──
   Внутри .ds-radio__box: круг под иконкой 20px. Используется
   в превью «Интерактивного компонента» и матрице вариантов. */

.ds-radio__box {
  position: relative;
}
.ds-radio__box svg {
  position: relative;
  z-index: 1;
  width: 20px;
  height: 20px;
  display: block;
}
.ds-radio__state {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 28px;
  height: 28px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

```



### Badge (счётчик / точка)

**Варианты**: Тип Counter (пилюля 19×18, скругление 9999px) / Point (точка 8×8) × Стили Accent / Positive / Warning / Negative.
Состояний нет.

Разметка:

```html
<span class="ds-badge ds-badge--counter ds-badge--accent">3</span>
```
```html
<span class="ds-badge ds-badge--counter ds-badge--positive">12</span>
```
```html
<span class="ds-badge ds-badge--counter ds-badge--warning">99+</span>
```
```html
<span class="ds-badge ds-badge--counter ds-badge--negative">4</span>
```
```html
<span class="ds-badge ds-badge--point ds-badge--accent"></span>
```
```html
<span class="ds-badge ds-badge--point ds-badge--negative"></span>
```

CSS-правила компонента:

```css
/* ============================================================
   iiko DS — Badge (счётчик / точка)
   Источник: Figma, страница «🔵Готово 🧾 → Badge»
   Варианты: Style Accent/Positive/Warning/Negative
             Type Counter (19×18, паддинг 1px 6px, скругление 9999px) / Point (8×8, скругление 9999px)
   Все значения — только токены из tokens.css
   ============================================================ */

.ds-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-size: var(--ds-typography-font-size-3x);      /* 12px */
  font-weight: var(--ds-typography-font-weight-medium); /* 500 */
  line-height: var(--ds-typography-caption-line-height-l); /* 16px */
  color: var(--ds-color-text-inversive);             /* #FFFFFF */
  vertical-align: middle;
}

/* ── Counter: пилюля 19×18 ──────────────────────────────── */

.ds-badge--counter {
  height: 18px;
  min-width: 19px;
  padding: var(--ds-size-0-25x) var(--ds-space-1-5x); /* 1px 6px */
  border-radius: var(--ds-radius-circular);          /* 9999px */
}

/* ── Point: точка 8×8 ───────────────────────────────────── */

.ds-badge--point {
  width: 8px;
  height: 8px;
  border-radius: var(--ds-radius-circular);          /* 9999px */
}

/* ── Стили ──────────────────────────────────────────────── */

.ds-badge--accent   { background: var(--ds-color-badge-accent-background); }   /* #448AFF */
.ds-badge--positive { background: var(--ds-color-badge-positive-background); } /* #14B456 */
.ds-badge--warning  { background: var(--ds-color-badge-warning-background); }  /* #FFAB40 */
.ds-badge--negative { background: var(--ds-color-badge-negative-background); } /* #FF5252 */

/* ── Матрица вариантов Badge (страница badge.html) ────────────────
   У Badge нет размеров и состояний (только Style × Type), поэтому:
   подписи типов без сдвига под шапку размера, ряд — 2 колонки.
   Скоуплено под .page-badge, чтобы не протекать на другие страницы
   (у Button/Checkbox 3 состояния → ряд должен быть 3-колоночным). */

.page-badge #matrix-root .matrix-types { padding-top: 16px; }
.page-badge #matrix-root .matrix-row { grid-template-columns: repeat(2, 1fr); }

```



### Button icon (кнопка-иконка)

Кнопка без текста: квадрат с иконкой по центру. Источник — Figma `Button icon`, 153 варианта.

**Варианты** (1:1 из Figma):
- **Размеры**: `--m` 36×36 (иконка 20) · `--s` 28×28 (иконка 20) · `--xs` 24×24 (иконка 16)
- **Стили**: `--accent` · `--neutral` · `--positive` · `--negative` · `--warning`
- **Типы**: `--filled` · `--outlined` · `--text`
- **Состояния**: Hover / Press — нативные `:hover` / `:active`; недоступна — атрибут `disabled` или класс `ds-btn-icon--disabled`
- Скругление 8px (`Button icon/Border radius` → `Radius/2x`), внутренние отступы 8px (M) / 4px (S, XS)

Структура из Figma: `Button icon` → `Icon size` (20×20) → вектор иконки.
Текста внутри нет, поэтому **обязателен `aria-label`**.

```html
<button class="ds-btn-icon ds-btn-icon--m ds-btn-icon--accent ds-btn-icon--filled" type="button" aria-label="Добавить">\n  <span class="ds-btn-icon__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill="currentColor"/> </svg></span>\n</button>
```
```html
<button class="ds-btn-icon ds-btn-icon--s ds-btn-icon--neutral ds-btn-icon--outlined" type="button" aria-label="Настройки">\n  <span class="ds-btn-icon__icon"></span>\n</button>
```
```html
<button class="ds-btn-icon ds-btn-icon--xs ds-btn-icon--negative ds-btn-icon--text" type="button" aria-label="Закрыть">\n  <span class="ds-btn-icon__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="currentColor"/> </svg></span>\n</button>
```
```html
<button class="ds-btn-icon ds-btn-icon--m ds-btn-icon--neutral ds-btn-icon--outlined" type="button" aria-label="Изменить" disabled>\n  <span class="ds-btn-icon__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill="currentColor"/> </svg></span>\n</button>
```

Группа кнопок-иконок — `ds-btn-icon-group` (по горизонтали) или `ds-btn-icon-group ds-btn-icon-group--vertically`:

```html
<div class="ds-btn-icon-group">\n  <button class="ds-btn-icon ds-btn-icon--m ds-btn-icon--neutral ds-btn-icon--text" type="button" aria-label="Назад"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="currentColor"/> </svg></button>\n  <button class="ds-btn-icon ds-btn-icon--m ds-btn-icon--neutral ds-btn-icon--text" type="button" aria-label="Вперёд"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" fill="currentColor"/> </svg></button>\n</div>
```


### Card view (карточка)

Контейнер с тремя необязательными частями. Источник — Figma `Card view`, 3 варианта.

**Варианты** (1:1 из Figma):
- `--filled` — без рамки и тени (фон `Surface/Default`)
- `--outlined` — рамка 1px `Stroke/Default` (#E0E0E0)
- `--shadow` — тень эффект-стиля ДС `Shadows/01 dp Sl`
- `--custom` — карточка только с контентом (SLOT, 500×88, pad 16)
- Скругление 8px (`Card/Border radius` → `Radius/2x`); паддинги из текущего дерева:
  header сверху/бока 16, низ 4 · content 16/16/16 · footer action сверху 4, бока/низ 16

Структура из Figma: `Card header` (Label up · Title · Label down) → `Divider` →
`Card content` (SLOT · Title · Content) → `Divider` → `Card footer` (Action с кнопками).

Размер представителя: 501×256 (header 112 · content 88 · footer 56).
Разметка автогена `Card view` строится по классам `ds-card`, `ds-card__header`,
`ds-card__label-up|down`, `ds-card__title`, `ds-card__divider`, `ds-card__content`,
`ds-card__footer`, `ds-card__footer__action`, `ds-card--custom`.

**Части необязательные.** Если на референсе нет подвала — блок `ds-card__footer`
в разметку не добавлять (правило: состав экрана берётся с референса).

```html
<div class="ds-card ds-card--outlined">\n  <div class="ds-card__header">\n    <span class="ds-card__label-up">Подпись сверху</span>\n    <h3 class="ds-card__title">Заголовок карточки</h3>\n    <span class="ds-card__label-down">Подпись снизу</span>\n  </div>\n  <div class="ds-card__divider"></div>\n  <div class="ds-card__content">\n    <span>Содержимое карточки</span>\n  </div>\n  <div class="ds-card__footer ds-card__footer--right">\n    <div class="ds-card__divider"></div>\n    <div class="ds-card__footer__action">\n      <button class="ds-btn ds-btn--m ds-btn--neutral ds-btn--text" type="button"><span class="ds-btn__label">Отмена</span></button>\n      <button class="ds-btn ds-btn--m ds-btn--accent ds-btn--filled" type="button"><span class="ds-btn__label">Сохранить</span></button>\n    </div>\n  </div>\n</div>
```

Минимальная карточка — только контент:

```html
<div class="ds-card ds-card--shadow">\n  <div class="ds-card__content">Текст</div>\n</div>
```


### Slide toggle (переключатель)

Двухпозиционный переключатель. Источник — Figma `Slide toggle`, 6 вариантов.

**Варианты** (1:1 из Figma):
- **Active**: On / Off — состояние нативного `<input type="checkbox">`
- **Состояния**: Hover — `:hover`; недоступен — `disabled` + класс `ds-slide-toggle--disabled`; ошибка — `ds-slide-toggle--error`
- Трек 34×20, скругление 12px (`Radius/3x`); кружок 16×16, круглый, белый; отступ 2px
- Off — `#9E9E9E` (hover `#757575`), On — `#448AFF` (hover `#3969D5`), Disabled — `#E0E0E0`
- Заголовок 14px/400 `Text/Primary`; подпись снизу 12px `Text/Secondary`

Структура из Figma: `Form` (трек + `Title` + иконка) и `Support down` (`Support text`).
Обёртка — `<label>`, чтобы клик по тексту переключал.

```html
<label class="ds-slide-toggle">\n  <span class="ds-slide-toggle__row">\n    <input class="ds-slide-toggle__input" type="checkbox" checked>\n    <span class="ds-slide-toggle__track"></span>\n    <span class="ds-slide-toggle__title">Название настройки</span>\n    <span class="ds-slide-toggle__icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 17H13V11H11V17ZM12 9C12.2833 9 12.5208 8.90417 12.7125 8.7125C12.9042 8.52083 13 8.28333 13 8C13 7.71667 12.9042 7.47917 12.7125 7.2875C12.5208 7.09583 12.2833 7 12 7C11.7167 7 11.4792 7.09583 11.2875 7.2875C11.0958 7.47917 11 7.71667 11 8C11 8.28333 11.0958 8.52083 11.2875 8.7125C11.4792 8.90417 11.7167 9 12 9ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="currentColor"/> </svg></span>\n  </span>\n  <span class="ds-slide-toggle__support">Пояснение под переключателем</span>\n</label>
```

Выключенный и недоступный:

```html
<label class="ds-slide-toggle">\n  <span class="ds-slide-toggle__row">\n    <input class="ds-slide-toggle__input" type="checkbox">\n    <span class="ds-slide-toggle__track"></span>\n    <span class="ds-slide-toggle__title">Выключено</span>\n  </span>\n</label>
```
```html
<label class="ds-slide-toggle ds-slide-toggle--disabled">\n  <span class="ds-slide-toggle__row">\n    <input class="ds-slide-toggle__input" type="checkbox" disabled>\n    <span class="ds-slide-toggle__track"></span>\n    <span class="ds-slide-toggle__title">Недоступно</span>\n  </span>\n</label>
```



### Иконки (SVG-вектор из файла иконок ДС)

Иконки — **SVG-вектор 20×20**, выгружены из файла иконок ДС iiko (Figma `skjpVJUl8ir0JazrrPAMOW`), **не шрифт** и не PNG. Вставляются внутрь `.ds-btn__icon` / `.ds-btn-icon__icon` / `.ds-input__icon`. Цвет — `currentColor`, то есть наследуется от цвета текста компонента.

**Своих иконок не рисовать.** Нужной нет в наборе — запросить выгрузку из файла иконок ДС.

Всего в наборе: **35** иконок.

| Имя | Иконка | Назначение | Вставка |
|---|---|---|---|
| `account_circle` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.85 17.1C6.7 16.45 7.65 15.9375 8.7 15.5625C9.75 15.1875 10.85 15 12 15C13.15 15 14.25 15.1875 15.3 15.5625C16.35 15.9375 17.3 16.45 18.15 17.1C18.7333 16.4167 19.1875 15.6417 19.5125 14.775C19.8375 13.9083 20 12.9833 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 12.9833 4.1625 13.9083 4.4875 14.775C4.8125 15.6417 5.26667 16.4167 5.85 17.1ZM12 13C11.0167 13 10.1875 12.6625 9.5125 11.9875C8.8375 11.3125 8.5 10.4833 8.5 9.5C8.5 8.51667 8.8375 7.6875 9.5125 7.0125C10.1875 6.3375 11.0167 6 12 6C12.9833 6 13.8125 6.3375 14.4875 7.0125C15.1625 7.6875 15.5 8.51667 15.5 9.5C15.5 10.4833 15.1625 11.3125 14.4875 11.9875C13.8125 12.6625 12.9833 13 12 13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C12.8833 20 13.7167 19.8708 14.5 19.6125C15.2833 19.3542 16 18.9833 16.65 18.5C16 18.0167 15.2833 17.6458 14.5 17.3875C13.7167 17.1292 12.8833 17 12 17C11.1167 17 10.2833 17.1292 9.5 17.3875C8.71667 17.6458 8 18.0167 7.35 18.5C8 18.9833 8.71667 19.3542 9.5 19.6125C10.2833 19.8708 11.1167 20 12 20ZM12 11C12.4333 11 12.7917 10.8583 13.075 10.575C13.3583 10.2917 13.5 9.93333 13.5 9.5C13.5 9.06667 13.3583 8.70833 13.075 8.425C12.7917 8.14167 12.4333 8 12 8C11.5667 8 11.2083 8.14167 10.925 8.425C10.6417 8.70833 10.5 9.06667 10.5 9.5C10.5 9.93333 10.6417 10.2917 10.925 10.575C11.2083 10.8583 11.5667 11 12 11Z" fill="currentColor"/> </svg> | Профиль пользователя | `<span class="ds-btn__icon">…SVG…</span>` |
| `add` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill="currentColor"/> </svg> | Создать / добавить | `<span class="ds-btn__icon">…SVG…</span>` |
| `apps` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18C4 17.45 4.19583 16.9792 4.5875 16.5875C4.97917 16.1958 5.45 16 6 16C6.55 16 7.02083 16.1958 7.4125 16.5875C7.80417 16.9792 8 17.45 8 18C8 18.55 7.80417 19.0208 7.4125 19.4125C7.02083 19.8042 6.55 20 6 20ZM12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20ZM18 20C17.45 20 16.9792 19.8042 16.5875 19.4125C16.1958 19.0208 16 18.55 16 18C16 17.45 16.1958 16.9792 16.5875 16.5875C16.9792 16.1958 17.45 16 18 16C18.55 16 19.0208 16.1958 19.4125 16.5875C19.8042 16.9792 20 17.45 20 18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20ZM6 14C5.45 14 4.97917 13.8042 4.5875 13.4125C4.19583 13.0208 4 12.55 4 12C4 11.45 4.19583 10.9792 4.5875 10.5875C4.97917 10.1958 5.45 10 6 10C6.55 10 7.02083 10.1958 7.4125 10.5875C7.80417 10.9792 8 11.45 8 12C8 12.55 7.80417 13.0208 7.4125 13.4125C7.02083 13.8042 6.55 14 6 14ZM12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14ZM18 14C17.45 14 16.9792 13.8042 16.5875 13.4125C16.1958 13.0208 16 12.55 16 12C16 11.45 16.1958 10.9792 16.5875 10.5875C16.9792 10.1958 17.45 10 18 10C18.55 10 19.0208 10.1958 19.4125 10.5875C19.8042 10.9792 20 11.45 20 12C20 12.55 19.8042 13.0208 19.4125 13.4125C19.0208 13.8042 18.55 14 18 14ZM6 8C5.45 8 4.97917 7.80417 4.5875 7.4125C4.19583 7.02083 4 6.55 4 6C4 5.45 4.19583 4.97917 4.5875 4.5875C4.97917 4.19583 5.45 4 6 4C6.55 4 7.02083 4.19583 7.4125 4.5875C7.80417 4.97917 8 5.45 8 6C8 6.55 7.80417 7.02083 7.4125 7.4125C7.02083 7.80417 6.55 8 6 8ZM12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8ZM18 8C17.45 8 16.9792 7.80417 16.5875 7.4125C16.1958 7.02083 16 6.55 16 6C16 5.45 16.1958 4.97917 16.5875 4.5875C16.9792 4.19583 17.45 4 18 4C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6C20 6.55 19.8042 7.02083 19.4125 7.4125C19.0208 7.80417 18.55 8 18 8Z" fill="currentColor"/> </svg> | Меню приложений | `<span class="ds-btn__icon">…SVG…</span>` |
| `arrow_back` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z" fill="currentColor"/> </svg> | Назад | `<span class="ds-btn__icon">…SVG…</span>` |
| `arrow_drop_down` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 15L7 10H17L12 15Z" fill="currentColor"/> </svg> | Раскрыть список | `<span class="ds-btn__icon">…SVG…</span>` |
| `arrow_drop_up` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7 14L12 9L17 14H7Z" fill="currentColor"/> </svg> | Свернуть список | `<span class="ds-btn__icon">…SVG…</span>` |
| `arrow_forward` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z" fill="currentColor"/> </svg> | Вперёд | `<span class="ds-btn__icon">…SVG…</span>` |
| `arrow_left` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14 17L9 12L14 7V17Z" fill="currentColor"/> </svg> | Влево | `<span class="ds-btn__icon">…SVG…</span>` |
| `arrow_right` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10 17V7L15 12L10 17Z" fill="currentColor"/> </svg> | Вправо | `<span class="ds-btn__icon">…SVG…</span>` |
| `attach_money` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.025 21V18.85C10.1416 18.65 9.37912 18.2667 8.73745 17.7C8.09578 17.1333 7.62495 16.3333 7.32495 15.3L9.17495 14.55C9.42495 15.35 9.79578 15.9583 10.2875 16.375C10.7791 16.7917 11.425 17 12.225 17C12.9083 17 13.4875 16.8458 13.9625 16.5375C14.4375 16.2292 14.675 15.75 14.675 15.1C14.675 14.5167 14.4916 14.0542 14.125 13.7125C13.7583 13.3708 12.9083 12.9833 11.575 12.55C10.1416 12.1 9.15828 11.5625 8.62495 10.9375C8.09162 10.3125 7.82495 9.55 7.82495 8.65C7.82495 7.56667 8.17495 6.725 8.87495 6.125C9.57495 5.525 10.2916 5.18333 11.025 5.1V3H13.025V5.1C13.8583 5.23333 14.5458 5.5375 15.0875 6.0125C15.6291 6.4875 16.025 7.06667 16.275 7.75L14.425 8.55C14.225 8.01667 13.9416 7.61667 13.575 7.35C13.2083 7.08333 12.7083 6.95 12.075 6.95C11.3416 6.95 10.7833 7.1125 10.4 7.4375C10.0166 7.7625 9.82495 8.16667 9.82495 8.65C9.82495 9.2 10.075 9.63333 10.575 9.95C11.075 10.2667 11.9416 10.6 13.175 10.95C14.325 11.2833 15.1958 11.8125 15.7875 12.5375C16.3791 13.2625 16.675 14.1 16.675 15.05C16.675 16.2333 16.325 17.1333 15.625 17.75C14.925 18.3667 14.0583 18.75 13.025 18.9V21H11.025Z" fill="currentColor"/> </svg> | Денежное значение | `<span class="ds-btn__icon">…SVG…</span>` |
| `check_box` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.6 16.2L17.65 9.15L16.25 7.75L10.6 13.4L7.75 10.55L6.35 11.95L10.6 16.2ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z" fill="currentColor"/> </svg> | Чекбокс выбран | `<span class="ds-btn__icon">…SVG…</span>` |
| `check_box_outline_blank` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z" fill="currentColor"/> </svg> | Чекбокс не выбран | `<span class="ds-btn__icon">…SVG…</span>` |
| `close` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="currentColor"/> </svg> | Закрыть / сбросить | `<span class="ds-btn__icon">…SVG…</span>` |
| `date_range` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8 14C7.71667 14 7.47917 13.9042 7.2875 13.7125C7.09583 13.5208 7 13.2833 7 13C7 12.7167 7.09583 12.4792 7.2875 12.2875C7.47917 12.0958 7.71667 12 8 12C8.28333 12 8.52083 12.0958 8.7125 12.2875C8.90417 12.4792 9 12.7167 9 13C9 13.2833 8.90417 13.5208 8.7125 13.7125C8.52083 13.9042 8.28333 14 8 14ZM12 14C11.7167 14 11.4792 13.9042 11.2875 13.7125C11.0958 13.5208 11 13.2833 11 13C11 12.7167 11.0958 12.4792 11.2875 12.2875C11.4792 12.0958 11.7167 12 12 12C12.2833 12 12.5208 12.0958 12.7125 12.2875C12.9042 12.4792 13 12.7167 13 13C13 13.2833 12.9042 13.5208 12.7125 13.7125C12.5208 13.9042 12.2833 14 12 14ZM16 14C15.7167 14 15.4792 13.9042 15.2875 13.7125C15.0958 13.5208 15 13.2833 15 13C15 12.7167 15.0958 12.4792 15.2875 12.2875C15.4792 12.0958 15.7167 12 16 12C16.2833 12 16.5208 12.0958 16.7125 12.2875C16.9042 12.4792 17 12.7167 17 13C17 13.2833 16.9042 13.5208 16.7125 13.7125C16.5208 13.9042 16.2833 14 16 14ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8Z" fill="currentColor"/> </svg> | Выбор даты (Datepicker) | `<span class="ds-btn__icon">…SVG…</span>` |
| `help` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.95 18C12.3 18 12.5958 17.8792 12.8375 17.6375C13.0792 17.3958 13.2 17.1 13.2 16.75C13.2 16.4 13.0792 16.1042 12.8375 15.8625C12.5958 15.6208 12.3 15.5 11.95 15.5C11.6 15.5 11.3042 15.6208 11.0625 15.8625C10.8208 16.1042 10.7 16.4 10.7 16.75C10.7 17.1 10.8208 17.3958 11.0625 17.6375C11.3042 17.8792 11.6 18 11.95 18ZM11.05 14.15H12.9C12.9 13.6 12.9625 13.1667 13.0875 12.85C13.2125 12.5333 13.5667 12.1 14.15 11.55C14.5833 11.1167 14.925 10.7042 15.175 10.3125C15.425 9.92083 15.55 9.45 15.55 8.9C15.55 7.96667 15.2083 7.25 14.525 6.75C13.8417 6.25 13.0333 6 12.1 6C11.15 6 10.3792 6.25 9.7875 6.75C9.19583 7.25 8.78333 7.85 8.55 8.55L10.2 9.2C10.2833 8.9 10.4708 8.575 10.7625 8.225C11.0542 7.875 11.5 7.7 12.1 7.7C12.6333 7.7 13.0333 7.84583 13.3 8.1375C13.5667 8.42917 13.7 8.75 13.7 9.1C13.7 9.43333 13.6 9.74583 13.4 10.0375C13.2 10.3292 12.95 10.6 12.65 10.85C11.9167 11.5 11.4667 11.9917 11.3 12.325C11.1333 12.6583 11.05 13.2667 11.05 14.15ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="currentColor"/> </svg> | Справка | `<span class="ds-btn__icon">…SVG…</span>` |
| `indeterminate_check_box` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7 13H17V11H7V13ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19Z" fill="currentColor"/> </svg> | Чекбокс частично выбран | `<span class="ds-btn__icon">…SVG…</span>` |
| `info` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11 17H13V11H11V17ZM12 9C12.2833 9 12.5208 8.90417 12.7125 8.7125C12.9042 8.52083 13 8.28333 13 8C13 7.71667 12.9042 7.47917 12.7125 7.2875C12.5208 7.09583 12.2833 7 12 7C11.7167 7 11.4792 7.09583 11.2875 7.2875C11.0958 7.47917 11 7.71667 11 8C11 8.28333 11.0958 8.52083 11.2875 8.7125C11.4792 8.90417 11.7167 9 12 9ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="currentColor"/> </svg> | Подсказка / информация | `<span class="ds-btn__icon">…SVG…</span>` |
| `keyboard_arrow_down` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z" fill="currentColor"/> </svg> | Раскрыть | `<span class="ds-btn__icon">…SVG…</span>` |
| `keyboard_arrow_left` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="currentColor"/> </svg> | Предыдущий | `<span class="ds-btn__icon">…SVG…</span>` |
| `keyboard_arrow_right` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="currentColor"/> </svg> | Следующий | `<span class="ds-btn__icon">…SVG…</span>` |
| `keyboard_arrow_up` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z" fill="currentColor"/> </svg> | Свернуть | `<span class="ds-btn__icon">…SVG…</span>` |
| `logo-iiko` | <svg width="20" height="20" viewBox="0 0 169 72" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_55332_22289)"> <path d="M142.121 27.4503C125.935 27.4503 115.721 35.7723 115.721 49.5734C115.721 63.3744 125.935 71.6712 142.121 71.6712C158.308 71.6712 168.521 63.3491 168.521 49.5734C168.521 35.7976 158.282 27.4503 142.121 27.4503ZM142.121 59.5548C137.728 59.5548 137.626 53.9089 137.626 49.5734C137.626 45.2378 137.723 39.5666 142.121 39.5666C146.519 39.5666 146.58 45.2125 146.58 49.5734C146.58 53.9342 146.514 59.5548 142.121 59.5548Z" fill="currentColor"/> <path d="M20.0802 28.4165H1.73282C1.14173 28.4165 0.662552 28.8922 0.662552 29.4789V69.6324C0.662552 70.2191 1.14173 70.6948 1.73282 70.6948H20.0802C20.6713 70.6948 21.1505 70.2191 21.1505 69.6324V29.4789C21.1505 28.8922 20.6713 28.4165 20.0802 28.4165Z" fill="currentColor"/> <path d="M20.0802 9.87015H1.73282C1.14173 9.87015 0.662552 10.3458 0.662552 10.9325V22.9325C0.662552 23.5193 1.14173 23.9949 1.73282 23.9949H20.0802C20.6713 23.9949 21.1505 23.5193 21.1505 22.9325V10.9325C21.1505 10.3458 20.6713 9.87015 20.0802 9.87015Z" fill="currentColor"/> <path d="M48.6869 28.4165H30.3395C29.7484 28.4165 29.2692 28.8922 29.2692 29.4789V69.6324C29.2692 70.2191 29.7484 70.6948 30.3395 70.6948H48.6869C49.278 70.6948 49.7571 70.2191 49.7571 69.6324V29.4789C49.7571 28.8922 49.278 28.4165 48.6869 28.4165Z" fill="currentColor"/> <path d="M48.6869 9.87015H30.3395C29.7484 9.87015 29.2692 10.3458 29.2692 10.9325V22.9325C29.2692 23.5193 29.7484 23.9949 30.3395 23.9949H48.6869C49.278 23.9949 49.7571 23.5193 49.7571 22.9325V10.9325C49.7571 10.3458 49.278 9.87015 48.6869 9.87015Z" fill="currentColor"/> <path d="M99.6825 48.0506C99.3002 47.4536 99.341 46.6897 99.7691 46.1282L111.338 31.1332C112.199 30.0253 111.394 28.4216 109.988 28.4216H91.1815C90.626 28.4216 90.096 28.6948 89.7851 29.1551L78.69 45.2175H78.3434V11.5599C78.3434 10.629 77.584 9.87521 76.6463 9.87521H59.5832C58.6454 9.87521 57.8861 10.629 57.8861 11.5599V69.0051C57.8861 69.9359 58.6454 70.6897 59.5832 70.6897H76.6463C77.584 70.6897 78.3434 69.9359 78.3434 69.0051V50.2007H78.69L89.6475 69.8246C89.9431 70.3609 90.519 70.6897 91.1356 70.6897H110.925C112.256 70.6897 113.071 69.2277 112.363 68.1045L99.6723 48.0455H99.6774L99.6825 48.0506Z" fill="currentColor"/> <path d="M133.595 11.2766C134.456 12.4098 135.618 13.2293 136.668 14.1956C137.876 15.3288 139.134 16.8364 139.038 18.5565C138.971 19.3457 138.691 20.0337 138.243 20.6863C137.636 21.597 136.933 22.371 136.184 23.1096C135.46 23.8128 135.48 24.9815 136.224 25.6644H136.209L137.31 26.6813C138.003 27.3187 139.094 27.3035 139.766 26.6408C140.169 26.2412 140.567 25.8213 140.944 25.4014C141.015 25.4975 141.097 25.5936 141.193 25.6745H141.188L142.305 26.6863C143.008 27.3238 144.088 27.2985 144.761 26.6358C145.164 26.2361 145.561 25.8263 145.938 25.4064C146.005 25.5025 146.081 25.5936 146.173 25.6695H146.168L147.258 26.6712C147.962 27.3086 149.042 27.2884 149.725 26.6206C150.388 25.968 151.035 25.3002 151.611 24.5818C152.182 23.8584 152.589 22.973 152.849 22.1332C153.068 21.511 153.043 20.7572 152.977 20.0944C152.91 19.5329 152.661 18.8752 152.375 18.3693C151.774 17.2361 150.79 16.2041 149.847 15.3187C148.522 14.0894 147.156 13.1231 146.428 11.3676C146.208 10.8668 146.045 10.2041 146.045 9.67286C146.015 9.01518 146.142 8.44351 146.392 7.85161C146.896 6.59191 147.702 5.63576 148.655 4.79596C149.419 4.10793 149.429 2.90894 148.67 2.20574L147.615 1.21417C146.953 0.596972 145.923 0.576736 145.24 1.15852C144.807 1.52783 144.379 1.91232 143.997 2.35751C143.976 2.37775 143.956 2.41316 143.93 2.43846C143.864 2.35751 143.803 2.27151 143.721 2.19562L142.666 1.20405C142.009 0.586854 140.995 0.566618 140.296 1.13829C139.843 1.51771 139.41 1.90726 139.012 2.35245C138.992 2.37269 138.961 2.4081 138.941 2.43846C138.875 2.35245 138.803 2.27151 138.722 2.19056L137.667 1.199C137.004 0.581795 135.975 0.561559 135.292 1.14335C134.859 1.51265 134.43 1.89714 134.048 2.34233C132.754 3.7538 131.734 5.79259 132.091 7.77572C132.31 9.03542 132.82 10.2243 133.61 11.2563L133.595 11.2664V11.2766ZM141.397 7.86679C141.555 7.4823 141.759 7.12817 141.968 6.78921C141.953 7.12817 141.968 7.46206 142.019 7.80102C142.238 9.06072 142.748 10.2496 143.538 11.2816C144.399 12.4148 145.561 13.2344 146.601 14.2007C147.809 15.3339 149.068 16.8415 148.976 18.5616C148.91 19.3508 148.629 20.0388 148.181 20.6914C148.13 20.7724 148.074 20.8331 148.023 20.914C148.023 20.6358 148.023 20.3626 148.002 20.0944C147.936 19.5329 147.686 18.8752 147.401 18.3693C146.8 17.2361 145.78 16.2041 144.873 15.3187C143.512 14.0894 142.182 13.1231 141.433 11.3676C141.244 10.8668 141.086 10.2041 141.051 9.67286C141.02 9.01518 141.148 8.44351 141.397 7.85161V7.86173V7.86679ZM136.433 7.85667C136.591 7.46206 136.79 7.11299 136.999 6.76392C136.984 7.10793 136.984 7.45195 137.04 7.79596C137.259 9.05566 137.799 10.2445 138.559 11.2766C139.445 12.4098 140.582 13.2293 141.632 14.1956C142.84 15.3288 144.098 16.8364 144.002 18.5565C143.971 19.3457 143.655 20.0337 143.242 20.6863C143.176 20.7723 143.115 20.8533 143.054 20.9444C143.054 20.656 143.038 20.3575 143.013 20.0843C142.947 19.5228 142.697 18.8651 142.412 18.3592C141.81 17.226 140.827 16.1939 139.884 15.3086C138.559 14.0793 137.193 13.113 136.464 11.3575C136.245 10.8567 136.082 10.1939 136.082 9.66274C136.051 9.00507 136.179 8.4334 136.428 7.84149V7.85161L136.433 7.85667Z" fill="currentColor"/> </g> <defs> <clipPath id="clip0_55332_22289"> <rect width="169" height="72" fill="white"/> </clipPath> </defs> </svg> | Логотип iiko | `<span class="ds-btn__icon">…SVG…</span>` |
| `menu` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="currentColor"/> </svg> | Гамбургер-меню | `<span class="ds-btn__icon">…SVG…</span>` |
| `notifications` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4 19V17H6V10C6 8.61667 6.41667 7.3875 7.25 6.3125C8.08333 5.2375 9.16667 4.53333 10.5 4.2V3.5C10.5 3.08333 10.6458 2.72917 10.9375 2.4375C11.2292 2.14583 11.5833 2 12 2C12.4167 2 12.7708 2.14583 13.0625 2.4375C13.3542 2.72917 13.5 3.08333 13.5 3.5V4.2C14.8333 4.53333 15.9167 5.2375 16.75 6.3125C17.5833 7.3875 18 8.61667 18 10V17H20V19H4ZM12 22C11.45 22 10.9792 21.8042 10.5875 21.4125C10.1958 21.0208 10 20.55 10 20H14C14 20.55 13.8042 21.0208 13.4125 21.4125C13.0208 21.8042 12.55 22 12 22ZM8 17H16V10C16 8.9 15.6083 7.95833 14.825 7.175C14.0417 6.39167 13.1 6 12 6C10.9 6 9.95833 6.39167 9.175 7.175C8.39167 7.95833 8 8.9 8 10V17Z" fill="currentColor"/> </svg> | Уведомления | `<span class="ds-btn__icon">…SVG…</span>` |
| `open_in_new` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H12V5H5V19H19V12H21V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM9.7 15.7L8.3 14.3L17.6 5H14V3H21V10H19V6.4L9.7 15.7Z" fill="currentColor"/> </svg> | Открыть в новой вкладке | `<span class="ds-btn__icon">…SVG…</span>` |
| `radio_button_checked` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 17C13.3833 17 14.5625 16.5125 15.5375 15.5375C16.5125 14.5625 17 13.3833 17 12C17 10.6167 16.5125 9.4375 15.5375 8.4625C14.5625 7.4875 13.3833 7 12 7C10.6167 7 9.4375 7.4875 8.4625 8.4625C7.4875 9.4375 7 10.6167 7 12C7 13.3833 7.4875 14.5625 8.4625 15.5375C9.4375 16.5125 10.6167 17 12 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="currentColor"/> </svg> | Радио выбрано | `<span class="ds-btn__icon">…SVG…</span>` |
| `radio_button_unchecked` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="currentColor"/> </svg> | Радио не выбрано | `<span class="ds-btn__icon">…SVG…</span>` |
| `remove` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5 13V11H19V13H5Z" fill="currentColor"/> </svg> | Убрать / минус | `<span class="ds-btn__icon">…SVG…</span>` |
| `schedule` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.3 16.7L16.7 15.3L13 11.6V7H11V12.4L15.3 16.7ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20Z" fill="currentColor"/> </svg> | — | `<span class="ds-btn__icon">…SVG…</span>` |
| `schedule_time` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.3 16.7L16.7 15.3L13 11.6V7H11V12.4L15.3 16.7ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20Z" fill="currentColor"/> </svg> | Выбор времени (Timepicker) | `<span class="ds-btn__icon">…SVG…</span>` |
| `search` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z" fill="currentColor"/> </svg> | Поиск | `<span class="ds-btn__icon">…SVG…</span>` |
| `search_off` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7 22C5.61667 22 4.4375 21.5125 3.4625 20.5375C2.4875 19.5625 2 18.3833 2 17C2 15.6167 2.4875 14.4375 3.4625 13.4625C4.4375 12.4875 5.61667 12 7 12C8.38333 12 9.5625 12.4875 10.5375 13.4625C11.5125 14.4375 12 15.6167 12 17C12 18.3833 11.5125 19.5625 10.5375 20.5375C9.5625 21.5125 8.38333 22 7 22ZM20.6 21L14.2 14.6C14 14.3833 13.7875 14.1625 13.5625 13.9375C13.3375 13.7125 13.1167 13.5 12.9 13.3C13.5333 12.9 14.0417 12.3667 14.425 11.7C14.8083 11.0333 15 10.3 15 9.5C15 8.25 14.5625 7.1875 13.6875 6.3125C12.8125 5.4375 11.75 5 10.5 5C9.25 5 8.1875 5.4375 7.3125 6.3125C6.4375 7.1875 6 8.25 6 9.5C6 9.6 6.00417 9.69583 6.0125 9.7875C6.02083 9.87917 6.03333 9.975 6.05 10.075C5.75 10.1083 5.42083 10.175 5.0625 10.275C4.70417 10.375 4.38333 10.4917 4.1 10.625C4.06667 10.4417 4.04167 10.2583 4.025 10.075C4.00833 9.89167 4 9.7 4 9.5C4 7.68333 4.62917 6.14583 5.8875 4.8875C7.14583 3.62917 8.68333 3 10.5 3C12.3167 3 13.8542 3.62917 15.1125 4.8875C16.3708 6.14583 17 7.68333 17 9.5C17 10.2167 16.8875 10.8958 16.6625 11.5375C16.4375 12.1792 16.125 12.7667 15.725 13.3L22 19.6L20.6 21ZM5.225 19.475L7 17.7L8.75 19.475L9.475 18.775L7.7 17L9.475 15.225L8.775 14.525L7 16.3L5.225 14.525L4.525 15.225L6.3 17L4.525 18.775L5.225 19.475Z" fill="currentColor"/> </svg> | Поиск без результата | `<span class="ds-btn__icon">…SVG…</span>` |
| `unfold_less` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.9 20L7.5 18.6L12 14.1L16.5 18.6L15.1 20L12 16.9L8.9 20ZM12 9.9L7.5 5.4L8.9 4L12 7.1L15.1 4L16.5 5.4L12 9.9Z" fill="currentColor"/> </svg> | Свернуть всё | `<span class="ds-btn__icon">…SVG…</span>` |
| `unfold_more` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 21L7.5 16.5L8.95 15.05L12 18.1L15.05 15.05L16.5 16.5L12 21ZM8.95 9.04998L7.5 7.59998L12 3.09998L16.5 7.59998L15.05 9.04998L12 5.99998L8.95 9.04998Z" fill="currentColor"/> </svg> | Развернуть всё | `<span class="ds-btn__icon">…SVG…</span>` |
| `warning` | <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 21L12 2L23 21H1ZM4.45 19H19.55L12 6L4.45 19ZM12 18C12.2833 18 12.5208 17.9042 12.7125 17.7125C12.9042 17.5208 13 17.2833 13 17C13 16.7167 12.9042 16.4792 12.7125 16.2875C12.5208 16.0958 12.2833 16 12 16C11.7167 16 11.4792 16.0958 11.2875 16.2875C11.0958 16.4792 11 16.7167 11 17C11 17.2833 11.0958 17.5208 11.2875 17.7125C11.4792 17.9042 11.7167 18 12 18ZM11 15H13V10H11V15Z" fill="currentColor"/> </svg> | — | `<span class="ds-btn__icon">…SVG…</span>` |

Полный код иконки — в колонке «Иконка» (вставлять как есть, вместе с тегом `<svg>`).


## Полные CSS-стили всех компонентов

Весь CSS дизайн-системы в одном месте: токены задаются через `tokens.css`, стили компонентов — ниже. При сборке прототипа **скопируйте этот CSS в `<style>` своего прототипа** (или сохраните как `components.css` и подключите `<link rel="stylesheet" href="components.css">`).

### font.css (шрифт Roboto, вшит в base64)

Roboto 400/500, latin + cyrillic, зашит прямо в CSS: прототип отрисуется **без интернета и без Google Fonts**. Подключать первым — иначе метрики (14/20, 16/24) поедут на системном шрифте.

```css
/* Roboto 400/500 (latin + cyrillic), вшит в base64.
   Прототип работает без интернета: подключать этот файл ПЕРВЫМ. */

/* latin 400 */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(data:font/woff2;base64,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) format('woff2');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}

/* latin 500 */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(data:font/woff2;base64,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) format('woff2');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}

/* cyrillic 400 */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(data:font/woff2;base64,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) format('woff2');
  unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
}

/* cyrillic 500 */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(data:font/woff2;base64,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) format('woff2');
  unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;
}


```

### tokens.css (токены)

```css
/* ============================================================
   iiko DS — токены, сгенерированы напрямую из Figma Variables
   Файл: Iiko Web DS (New) · выгрузка 2026-09-01
   Переменных: 1743 в 10 коллекциях
   Источник: плагин iiko DS — Variables Export → ds-variables.json
   ============================================================ */

:root {

  /* ── Base Size (18) ─────────────────────────── */
  --ds-size-0: 0px;   /* Size/0 */
  --ds-size-0-5x: 2px;   /* Size/0,5x */
  --ds-size-1x: 4px;   /* Size/1x */
  --ds-size-1-5x: 6px;   /* Size/1,5x */
  --ds-size-2x: 8px;   /* Size/2x */
  --ds-size-2-5x: 10px;   /* Size/2,5x */
  --ds-size-3x: 12px;   /* Size/3x */
  --ds-size-3-5x: 14px;   /* Size/3,5x */
  --ds-size-4x: 16px;   /* Size/4x */
  --ds-size-5x: 20px;   /* Size/5x */
  --ds-size-6x: 24px;   /* Size/6x */
  --ds-size-7x: 28px;   /* Size/7x */
  --ds-size-8x: 32px;   /* Size/8x */
  --ds-size-circular: 9999px;   /* Size/Circular */
  --ds-size-0-25x: 1px;   /* Size/0,25x */
  --ds-size-8-5x: 34px;   /* Size/8,5x */
  --ds-size-9x: 36px;   /* Size/9x */
  --ds-size-10x: 40px;   /* Size/10x */

  /* ── Base Color (127) ─────────────────────────── */
  --ds-palette-neutral-0: #ffffff;   /* Neutral/0 */
  --ds-palette-neutral-100: #ebebeb;   /* Neutral/100 */
  --ds-palette-neutral-200: #e0e0e0;   /* Neutral/200 */
  --ds-palette-neutral-300: #d6d6d6;   /* Neutral/300 */
  --ds-palette-neutral-400: #bdbdbd;   /* Neutral/400 */
  --ds-palette-neutral-500: #9e9e9e;   /* Neutral/500 */
  --ds-palette-neutral-600: #757575;   /* Neutral/600 */
  --ds-palette-neutral-700: #616161;   /* Neutral/700 */
  --ds-palette-neutral-800: #424242;   /* Neutral/800 */
  --ds-palette-neutral-900: #333333;   /* Neutral/900 */
  --ds-palette-negative-5: #fbf8f8;   /* Negative/5 */
  --ds-palette-negative-200: #ffcccc;   /* Negative/200 */
  --ds-palette-negative-300: #ffb8b8;   /* Negative/300 */
  --ds-palette-negative-500: #ff5252;   /* Negative/500 */
  --ds-palette-negative-700: #de1a12;   /* Negative/700 */
  --ds-palette-negative-900: #7f0f0a;   /* Negative/900 */
  --ds-palette-warning-5: #fdfcfa;   /* Warning/5 */
  --ds-palette-warning-200: #ffe9cc;   /* Warning/200 */
  --ds-palette-warning-300: #ffd9a8;   /* Warning/300 */
  --ds-palette-warning-500: #ffab40;   /* Warning/500 */
  --ds-palette-warning-700: #ea7806;   /* Warning/700 */
  --ds-palette-warning-900: #994000;   /* Warning/900 */
  --ds-palette-positive-5: #f8fbfa;   /* Positive/5 */
  --ds-palette-positive-200: #c1f1d5;   /* Positive/200 */
  --ds-palette-positive-300: #97e8b9;   /* Positive/300 */
  --ds-palette-positive-500: #14b456;   /* Positive/500 */
  --ds-palette-positive-700: #0f852c;   /* Positive/700 */
  --ds-palette-positive-900: #0a571a;   /* Positive/900 */
  --ds-palette-accent-5: #f8f9fc;   /* Accent/5 */
  --ds-palette-accent-200: #ccdfff;   /* Accent/200 */
  --ds-palette-accent-300: #a8c9ff;   /* Accent/300 */
  --ds-palette-accent-500: #448aff;   /* Accent/500 */
  --ds-palette-accent-700: #2651b5;   /* Accent/700 */
  --ds-palette-accent-900: #162a69;   /* Accent/900 */
  --ds-palette-contrast-1-5: #fbf7fc;   /* Contrast-1/5 */
  --ds-palette-contrast-1-700: #9c27b0;   /* Contrast-1/700 */
  --ds-palette-contrast-2-990: #291a14;   /* Contrast-2/990 */
  --ds-palette-contrast-3-5: #f9fafb;   /* Contrast-3/5 */
  --ds-palette-contrast-3-990: #142229;   /* Contrast-3/990 */
  --ds-palette-accent-100: #e8f0ff;   /* Accent/100 */
  --ds-palette-neutral-transparent: rgba(255, 255, 255, 0);   /* Neutral/Transparent */
  --ds-palette-accent-990: #0d111c;   /* Accent/990 */
  --ds-palette-accent-950: #151d37;   /* Accent/950 */
  --ds-palette-accent-800: #123da1;   /* Accent/800 */
  --ds-palette-accent-600: #3969d5;   /* Accent/600 */
  --ds-palette-accent-400: #75a9ff;   /* Accent/400 */
  --ds-palette-accent-50: #f0f5ff;   /* Accent/50 */
  --ds-palette-accent-10: #f5f9ff;   /* Accent/10 */
  --ds-palette-positive-990: #04250b;   /* Positive/990 */
  --ds-palette-positive-950: #074013;   /* Positive/950 */
  --ds-palette-positive-800: #0c6e21;   /* Positive/800 */
  --ds-palette-positive-600: #119c34;   /* Positive/600 */
  --ds-palette-positive-400: #50d889;   /* Positive/400 */
  --ds-palette-positive-100: #e0f8ea;   /* Positive/100 */
  --ds-palette-positive-50: #ebfbf2;   /* Positive/50 */
  --ds-palette-positive-10: #f3fcf7;   /* Positive/10 */
  --ds-palette-warning-950: #662a00;   /* Warning/950 */
  --ds-palette-warning-990: #331500;   /* Warning/990 */
  --ds-palette-warning-800: #cc5f00;   /* Warning/800 */
  --ds-palette-warning-600: #fe8c06;   /* Warning/600 */
  --ds-palette-warning-400: #ffc375;   /* Warning/400 */
  --ds-palette-warning-100: #fff4e5;   /* Warning/100 */
  --ds-palette-warning-50: #fff9f0;   /* Warning/50 */
  --ds-palette-warning-10: #fffcf8;   /* Warning/10 */
  --ds-palette-negative-950: #500907;   /* Negative/950 */
  --ds-palette-negative-990: #300403;   /* Negative/990 */
  --ds-palette-negative-800: #af150e;   /* Negative/800 */
  --ds-palette-negative-600: #f4372f;   /* Negative/600 */
  --ds-palette-negative-400: #ff8585;   /* Negative/400 */
  --ds-palette-negative-100: #ffe5e5;   /* Negative/100 */
  --ds-palette-negative-50: #fff2f2;   /* Negative/50 */
  --ds-palette-negative-10: #fff8f8;   /* Negative/10 */
  --ds-palette-neutral-990: #121212;   /* Neutral/990 */
  --ds-palette-neutral-950: #212121;   /* Neutral/950 */
  --ds-palette-neutral-10: #fafafa;   /* Neutral/10 */
  --ds-palette-neutral-50: #f5f5f5;   /* Neutral/50 */
  --ds-palette-contrast-1-50: #faf2fc;   /* Contrast-1/50 */
  --ds-palette-contrast-1-100: #f4e2f9;   /* Contrast-1/100 */
  --ds-palette-contrast-1-200: #efd5f6;   /* Contrast-1/200 */
  --ds-palette-contrast-1-300: #e4b8ef;   /* Contrast-1/300 */
  --ds-palette-contrast-1-400: #d58ee6;   /* Contrast-1/400 */
  --ds-palette-contrast-1-500: #c564dd;   /* Contrast-1/500 */
  --ds-palette-contrast-1-600: #b53ad4;   /* Contrast-1/600 */
  --ds-palette-contrast-1-800: #761e86;   /* Contrast-1/800 */
  --ds-palette-contrast-1-990: #2c0b32;   /* Contrast-1/990 */
  --ds-palette-contrast-1-950: #3f1047;   /* Contrast-1/950 */
  --ds-palette-contrast-1-900: #641971;   /* Contrast-1/900 */
  --ds-palette-contrast-1-10: #fcf6fd;   /* Contrast-1/10 */
  --ds-palette-contrast-2-5: #faf8f8;   /* Contrast-2/5 */
  --ds-palette-contrast-2-950: #3e261e;   /* Contrast-2/950 */
  --ds-palette-contrast-2-900: #5a3f35;   /* Contrast-2/900 */
  --ds-palette-contrast-2-800: #795548;   /* Contrast-2/800 */
  --ds-palette-contrast-2-700: #896152;   /* Contrast-2/700 */
  --ds-palette-contrast-2-600: #a57969;   /* Contrast-2/600 */
  --ds-palette-contrast-2-500: #c29180;   /* Contrast-2/500 */
  --ds-palette-contrast-2-400: #d9ac9b;   /* Contrast-2/400 */
  --ds-palette-contrast-2-300: #ebc9bc;   /* Contrast-2/300 */
  --ds-palette-contrast-2-200: #f1d9d0;   /* Contrast-2/200 */
  --ds-palette-contrast-2-100: #f7e9e3;   /* Contrast-2/100 */
  --ds-palette-contrast-2-50: #fcf5f3;   /* Contrast-2/50 */
  --ds-palette-contrast-2-10: #fcf8f6;   /* Contrast-2/10 */
  --ds-palette-contrast-3-950: #263136;   /* Contrast-3/950 */
  --ds-palette-contrast-3-900: #36474e;   /* Contrast-3/900 */
  --ds-palette-contrast-3-800: #4b626d;   /* Contrast-3/800 */
  --ds-palette-contrast-3-700: #607d8b;   /* Contrast-3/700 */
  --ds-palette-contrast-3-600: #728f9d;   /* Contrast-3/600 */
  --ds-palette-contrast-3-500: #90a7b2;   /* Contrast-3/500 */
  --ds-palette-contrast-3-400: #a9c0cb;   /* Contrast-3/400 */
  --ds-palette-contrast-3-300: #c9d7de;   /* Contrast-3/300 */
  --ds-palette-contrast-3-200: #d9e3e8;   /* Contrast-3/200 */
  --ds-palette-contrast-3-100: #e7eff3;   /* Contrast-3/100 */
  --ds-palette-contrast-3-50: #f4f9fb;   /* Contrast-3/50 */
  --ds-palette-contrast-3-10: #f8fafc;   /* Contrast-3/10 */
  --ds-palette-contrast-4-5: #f9fbea;   /* Contrast-4/5 */
  --ds-palette-contrast-4-10: #f6f8dd;   /* Contrast-4/10 */
  --ds-palette-contrast-4-50: #f3f6d5;   /* Contrast-4/50 */
  --ds-palette-contrast-4-100: #edf2c0;   /* Contrast-4/100 */
  --ds-palette-contrast-4-200: #e8edab;   /* Contrast-4/200 */
  --ds-palette-contrast-4-300: #e2e996;   /* Contrast-4/300 */
  --ds-palette-contrast-4-400: #dce481;   /* Contrast-4/400 */
  --ds-palette-contrast-4-500: #d6e06c;   /* Contrast-4/500 */
  --ds-palette-contrast-4-600: #cad742;   /* Contrast-4/600 */
  --ds-palette-contrast-4-700: #b1bd28;   /* Contrast-4/700 */
  --ds-palette-contrast-4-800: #8a931f;   /* Contrast-4/800 */
  --ds-palette-contrast-4-900: #626916;   /* Contrast-4/900 */
  --ds-palette-contrast-4-950: #4f5412;   /* Contrast-4/950 */
  --ds-palette-contrast-4-990: #272a09;   /* Contrast-4/990 */

  /* ── Space (13) ─────────────────────────── */
  --ds-space-4x: var(--ds-size-4x);   /* Space/4x */
  --ds-space-3x: var(--ds-size-3x);   /* Space/3x */
  --ds-space-6x: var(--ds-size-6x);   /* Space/6x */
  --ds-space-2-5x: var(--ds-size-2-5x);   /* Space/2,5x */
  --ds-space-1-5x: var(--ds-size-1-5x);   /* Space/1,5x */
  --ds-space-5x: var(--ds-size-5x);   /* Space/5x */
  --ds-space-8x: var(--ds-size-8x);   /* Space/8x */
  --ds-space-3-5x: var(--ds-size-3-5x);   /* Space/3,5x */
  --ds-space-0: var(--ds-size-0);   /* Space/0 */
  --ds-space-2x: var(--ds-size-2x);   /* Space/2x */
  --ds-space-7x: var(--ds-size-7x);   /* Space/7x */
  --ds-space-1x: var(--ds-size-1x);   /* Space/1x */
  --ds-space-0-5x: var(--ds-size-0-5x);   /* Space/0,5x */

  /* ── Radius (9) ─────────────────────────── */
  --ds-radius-4x: var(--ds-size-4x);   /* Radius/4x */
  --ds-radius-2x: var(--ds-size-2x);   /* Radius/2x */
  --ds-radius-6x: var(--ds-size-6x);   /* Radius/6x */
  --ds-radius-0: var(--ds-size-0);   /* Radius/0 */
  --ds-radius-1-5x: var(--ds-size-1-5x);   /* Radius/1,5x */
  --ds-radius-circular: var(--ds-size-circular);   /* Radius/Circular */
  --ds-radius-1x: var(--ds-size-1x);   /* Radius/1x */
  --ds-radius-3x: var(--ds-size-3x);   /* Radius/3x */
  --ds-radius-0-5x: var(--ds-size-0-5x);   /* Radius/0,5x */

  /* ── Base Stroke (5) ─────────────────────────── */
  --ds-stroke-pad: 1px;   /* Stroke/Pad */
  --ds-stroke-1x: 4px;   /* Stroke/1x */
  --ds-stroke-0-5x: 2px;   /* Stroke/0,5x */
  --ds-stroke-0-25x: 1px;   /* Stroke/0,25x */
  --ds-stroke-dash: 1px;   /* Stroke/Dash */

  /* ── Shadows (45) ─────────────────────────── */
  --ds-shadow-shadows-none-blur: var(--ds-size-0);   /* Shadows/None/Blur */
  --ds-shadow-shadows-none-spread: var(--ds-size-0);   /* Shadows/None/Spread */
  --ds-shadow-shadows-none-color: var(--ds-palette-neutral-0);   /* Shadows/None/Color */
  --ds-shadow-shadows-s-1-x: var(--ds-size-0);   /* Shadows/S/1/X */
  --ds-shadow-shadows-s-1-y: var(--ds-size-1x);   /* Shadows/S/1/Y */
  --ds-shadow-shadows-s-1-blur: var(--ds-size-1-5x);   /* Shadows/S/1/Blur */
  --ds-shadow-shadows-s-1-spread: var(--ds-size-0);   /* Shadows/S/1/Spread */
  --ds-shadow-shadows-s-1-color: rgba(33, 33, 33, 0.1);   /* Shadows/S/1/Color */
  --ds-shadow-shadows-s-2-x: var(--ds-size-0);   /* Shadows/S/2/X */
  --ds-shadow-shadows-s-2-y: var(--ds-size-0);   /* Shadows/S/2/Y */
  --ds-shadow-shadows-s-2-blur: var(--ds-size-4x);   /* Shadows/S/2/Blur */
  --ds-shadow-shadows-s-2-spread: var(--ds-size-0);   /* Shadows/S/2/Spread */
  --ds-shadow-shadows-s-2-color: rgba(33, 33, 33, 0.12);   /* Shadows/S/2/Color */
  --ds-shadow-shadows-m-1-x: var(--ds-size-0);   /* Shadows/M/1/X */
  --ds-shadow-shadows-m-1-y: var(--ds-size-2-5x);   /* Shadows/M/1/Y */
  --ds-shadow-shadows-m-1-blur: var(--ds-size-6x);   /* Shadows/M/1/Blur */
  --ds-shadow-shadows-m-1-spread: var(--ds-size-0);   /* Shadows/M/1/Spread */
  --ds-shadow-shadows-m-1-color: rgba(33, 33, 33, 0.12);   /* Shadows/M/1/Color */
  --ds-shadow-shadows-m-2-x: var(--ds-size-0);   /* Shadows/M/2/X */
  --ds-shadow-shadows-m-2-y: var(--ds-size-0);   /* Shadows/M/2/Y */
  --ds-shadow-shadows-m-2-blur: var(--ds-size-7x);   /* Shadows/M/2/Blur */
  --ds-shadow-shadows-m-2-spread: var(--ds-size-0);   /* Shadows/M/2/Spread */
  --ds-shadow-shadows-m-2-color: rgba(33, 33, 33, 0.12);   /* Shadows/M/2/Color */
  --ds-shadow-shadows-xl-1-x: var(--ds-size-0);   /* Shadows/XL/1/X */
  --ds-shadow-shadows-xl-1-y: var(--ds-size-3x);   /* Shadows/XL/1/Y */
  --ds-shadow-shadows-xl-1-blur: var(--ds-size-4x);   /* Shadows/XL/1/Blur */
  --ds-shadow-shadows-xl-1-spread: var(--ds-size-0);   /* Shadows/XL/1/Spread */
  --ds-shadow-shadows-xl-1-color: rgba(33, 33, 33, 0.16);   /* Shadows/XL/1/Color */
  --ds-shadow-shadows-xl-2-x: var(--ds-size-0);   /* Shadows/XL/2/X */
  --ds-shadow-shadows-xl-2-y: var(--ds-size-0);   /* Shadows/XL/2/Y */
  --ds-shadow-shadows-xl-2-blur: var(--ds-size-8x);   /* Shadows/XL/2/Blur */
  --ds-shadow-shadows-xl-2-spread: var(--ds-size-0);   /* Shadows/XL/2/Spread */
  --ds-shadow-shadows-xl-2-color: rgba(33, 33, 33, 0.16);   /* Shadows/XL/2/Color */
  --ds-shadow-shadows-none-y: var(--ds-size-0-5x);   /* Shadows/None/Y */
  --ds-shadow-shadows-none-x: var(--ds-size-0);   /* Shadows/None/X */
  --ds-shadow-shadows-sl-1-x: var(--ds-size-0);   /* Shadows/Sl/1/X */
  --ds-shadow-shadows-sl-1-y: var(--ds-size-0-5x);   /* Shadows/Sl/1/Y */
  --ds-shadow-shadows-sl-1-blur: var(--ds-size-0-5x);   /* Shadows/Sl/1/Blur */
  --ds-shadow-shadows-sl-1-spread: var(--ds-size-0);   /* Shadows/Sl/1/Spread */
  --ds-shadow-shadows-sl-1-color: rgba(33, 33, 33, 0.04);   /* Shadows/Sl/1/Color */
  --ds-shadow-shadows-sl-2-x: var(--ds-size-0);   /* Shadows/Sl/2/X */
  --ds-shadow-shadows-sl-2-y: var(--ds-size-0);   /* Shadows/Sl/2/Y */
  --ds-shadow-shadows-sl-2-blur: var(--ds-size-1x);   /* Shadows/Sl/2/Blur */
  --ds-shadow-shadows-sl-2-spread: var(--ds-size-0);   /* Shadows/Sl/2/Spread */
  --ds-shadow-shadows-sl-2-color: rgba(33, 33, 33, 0.12);   /* Shadows/Sl/2/Color */

  /* ── Base Typography (26) ─────────────────────────── */
  --ds-typography-font-family-family: Roboto;   /* Font Family/Family */
  --ds-typography-font-weight-regular: 400;   /* Font Weight/Regular */
  --ds-typography-font-weight-medium: 500;   /* Font Weight/Medium */
  --ds-typography-font-variant-normal: Normal;   /* Font Variant/Normal */
  --ds-typography-font-variant-caps: Caps;   /* Font Variant/Caps */
  --ds-typography-font-size-3x: 12px;   /* Font Size/3x */
  --ds-typography-font-size-2-5x: 10px;   /* Font Size/2,5x */
  --ds-typography-font-size-2x: 8px;   /* Font Size/2x */
  --ds-typography-line-height-4x: 16px;   /* Line height/4x */
  --ds-typography-line-height-2-5x: 10px;   /* Line height/2,5x */
  --ds-typography-line-height-3x: 12px;   /* Line height/3x */
  --ds-typography-font-size-3-5x: 14px;   /* Font Size/3,5x */
  --ds-typography-font-size-4x: 16px;   /* Font Size/4x */
  --ds-typography-font-size-5x: 20px;   /* Font Size/5x */
  --ds-typography-font-size-6x: 24px;   /* Font Size/6x */
  --ds-typography-font-size-8-5x: 34px;   /* Font Size/8,5x */
  --ds-typography-line-height-6x: 24px;   /* Line height/6x */
  --ds-typography-line-height-5x: 20px;   /* Line height/5x */
  --ds-typography-line-height-8x: 32px;   /* Line height/8x */
  --ds-typography-letter-spacing-0-25x: 1px;   /* Letter spacing/0,25x */
  --ds-typography-letter-spacing-0-125x: 0.5px;   /* Letter spacing/0,125x */
  --ds-typography-letter-spacing-none: 0px;   /* Letter spacing/None */
  --ds-typography-font-family-family-variant: Helvetica;   /* Font Family/Family variant */
  --ds-typography-line-height-7x: 28px;   /* Line height/7x */
  --ds-typography-line-height-10x: 40px;   /* Line height/10x */
  --ds-typography-font-size-4-5x: 18px;   /* Font Size/4,5x */

  /* ── Typography (21) ─────────────────────────── */
  --ds-typography-caption-font-size-s: var(--ds-typography-font-size-2x);   /* Caption/Font size/S */
  --ds-typography-caption-line-height-s: var(--ds-typography-line-height-2-5x);   /* Caption/Line height/S */
  --ds-typography-caption-font-size-m: var(--ds-typography-font-size-2-5x);   /* Caption/Font size/M */
  --ds-typography-caption-font-size-l: var(--ds-typography-font-size-3x);   /* Caption/Font size/L */
  --ds-typography-caption-line-height-m: var(--ds-typography-line-height-3x);   /* Caption/Line height/M */
  --ds-typography-caption-line-height-l: var(--ds-typography-line-height-4x);   /* Caption/Line height/L */
  --ds-typography-body-font-size-s: var(--ds-typography-font-size-3-5x);   /* Body/Font size/S */
  --ds-typography-body-font-size-l: var(--ds-typography-font-size-4-5x);   /* Body/Font size/L */
  --ds-typography-body-line-height-l: var(--ds-typography-line-height-6x);   /* Body/Line height/L */
  --ds-typography-body-line-height-s: var(--ds-typography-line-height-5x);   /* Body/Line height/S */
  --ds-typography-header-font-size-s: var(--ds-typography-font-size-5x);   /* Header/Font size/S */
  --ds-typography-header-font-size-m: var(--ds-typography-font-size-6x);   /* Header/Font size/M */
  --ds-typography-header-line-height-l: var(--ds-typography-line-height-10x);   /* Header/Line height/L */
  --ds-typography-header-line-height-m: var(--ds-typography-line-height-8x);   /* Header/Line height/M */
  --ds-typography-letter-spacing-s: var(--ds-typography-letter-spacing-0-125x);   /* Letter spacing/S */
  --ds-typography-letter-spacing-m: var(--ds-typography-letter-spacing-0-25x);   /* Letter spacing/M */
  --ds-typography-header-font-size-l: var(--ds-typography-font-size-8-5x);   /* Header/Font size/L */
  --ds-typography-letter-spacing-none: var(--ds-typography-letter-spacing-none);   /* Letter spacing/None */
  --ds-typography-header-line-height-s: var(--ds-typography-line-height-7x);   /* Header/Line height/S */
  --ds-typography-body-font-size-m: var(--ds-typography-font-size-4x);   /* Body/Font size/M */
  --ds-typography-body-line-height-m: var(--ds-typography-line-height-6x);   /* Body/Line height/M */

  /* ── Color (133) ─────────────────────────── */
  --ds-color-brand-accent-super-lightest: var(--ds-palette-accent-5);   /* Brand/Accent/Super lightest */
  --ds-color-brand-accent-lighter: var(--ds-palette-accent-50);   /* Brand/Accent/Lighter */
  --ds-color-brand-accent-light: var(--ds-palette-accent-300);   /* Brand/Accent/Light */
  --ds-color-brand-accent-default: var(--ds-palette-accent-500);   /* Brand/Accent/Default */
  --ds-color-brand-accent-dark: var(--ds-palette-accent-600);   /* Brand/Accent/Dark */
  --ds-color-brand-accent-darker: var(--ds-palette-accent-700);   /* Brand/Accent/Darker */
  --ds-color-brand-positive-lightest: var(--ds-palette-positive-10);   /* Brand/Positive/Lightest */
  --ds-color-brand-positive-lighter: var(--ds-palette-positive-50);   /* Brand/Positive/Lighter */
  --ds-color-brand-positive-light: var(--ds-palette-positive-300);   /* Brand/Positive/Light */
  --ds-color-brand-positive-default: var(--ds-palette-positive-500);   /* Brand/Positive/Default */
  --ds-color-brand-positive-dark: var(--ds-palette-positive-700);   /* Brand/Positive/Dark */
  --ds-color-brand-positive-darker: var(--ds-palette-positive-900);   /* Brand/Positive/Darker */
  --ds-color-brand-warning-lightest: var(--ds-palette-warning-10);   /* Brand/Warning/Lightest */
  --ds-color-brand-warning-lighter: var(--ds-palette-warning-50);   /* Brand/Warning/Lighter */
  --ds-color-brand-warning-light: var(--ds-palette-warning-300);   /* Brand/Warning/Light */
  --ds-color-brand-warning-default: var(--ds-palette-warning-500);   /* Brand/Warning/Default */
  --ds-color-brand-warning-dark: var(--ds-palette-warning-700);   /* Brand/Warning/Dark */
  --ds-color-brand-warning-darker: var(--ds-palette-warning-900);   /* Brand/Warning/Darker */
  --ds-color-brand-negative-lightest: var(--ds-palette-negative-10);   /* Brand/Negative/Lightest */
  --ds-color-brand-negative-lighter: var(--ds-palette-negative-50);   /* Brand/Negative/Lighter */
  --ds-color-brand-negative-light: var(--ds-palette-negative-300);   /* Brand/Negative/Light */
  --ds-color-brand-negative-default: var(--ds-palette-negative-500);   /* Brand/Negative/Default */
  --ds-color-brand-negative-dark: var(--ds-palette-negative-700);   /* Brand/Negative/Dark */
  --ds-color-brand-negative-darker: var(--ds-palette-negative-900);   /* Brand/Negative/Darker */
  --ds-color-brand-neutral-default: var(--ds-palette-neutral-0);   /* Brand/Neutral/Default */
  --ds-color-brand-neutral-super-light: var(--ds-palette-neutral-50);   /* Brand/Neutral/Super light */
  --ds-color-brand-neutral-lightest: var(--ds-palette-neutral-100);   /* Brand/Neutral/Lightest */
  --ds-color-brand-neutral-lighter: var(--ds-palette-neutral-200);   /* Brand/Neutral/Lighter */
  --ds-color-brand-neutral-light: var(--ds-palette-neutral-300);   /* Brand/Neutral/Light */
  --ds-color-brand-neutral-neutral: var(--ds-palette-neutral-500);   /* Brand/Neutral/Neutral */
  --ds-color-brand-neutral-dark: var(--ds-palette-neutral-600);   /* Brand/Neutral/Dark */
  --ds-color-brand-neutral-darker: var(--ds-palette-neutral-700);   /* Brand/Neutral/Darker */
  --ds-color-brand-neutral-darkest: var(--ds-palette-neutral-800);   /* Brand/Neutral/Darkest */
  --ds-color-brand-neutral-super-dark: var(--ds-palette-neutral-900);   /* Brand/Neutral/Super Dark */
  --ds-color-brand-contrast-1-lightest: var(--ds-palette-contrast-1-5);   /* Brand/Contrast-1/Lightest */
  --ds-color-brand-contrast-1-dark: var(--ds-palette-contrast-1-700);   /* Brand/Contrast-1/Dark */
  --ds-color-brand-contrast-2-lightest: var(--ds-palette-contrast-2-100);   /* Brand/Contrast-2/Lightest */
  --ds-color-brand-contrast-2-dark: var(--ds-palette-contrast-2-950);   /* Brand/Contrast-2/Dark */
  --ds-color-brand-contrast-3-lightest: var(--ds-palette-contrast-3-5);   /* Brand/Contrast-3/Lightest */
  --ds-color-brand-contrast-3-dark: var(--ds-palette-contrast-3-950);   /* Brand/Contrast-3/Dark */
  --ds-color-surface-default: var(--ds-color-brand-neutral-default);   /* Surface/Default */
  --ds-color-surface-hover: var(--ds-color-brand-neutral-super-light);   /* Surface/Hover */
  --ds-color-surface-selected: var(--ds-color-brand-neutral-super-light);   /* Surface/Selected */
  --ds-color-surface-press: var(--ds-color-brand-neutral-lighter);   /* Surface/Press */
  --ds-color-surface-snack-tooltip: var(--ds-color-brand-neutral-darkest);   /* Surface/Snack tooltip */
  --ds-color-surface-sidebar-selected: var(--ds-color-brand-accent-lighter);   /* Surface/Sidebar selected */
  --ds-color-surface-sidebar-active: var(--ds-color-brand-accent-light);   /* Surface/Sidebar active */
  --ds-color-table-surfase-default: var(--ds-color-brand-neutral-default);   /* Table surfase/Default */
  --ds-color-table-surfase-hover: var(--ds-color-brand-neutral-super-light);   /* Table surfase/Hover */
  --ds-color-table-surfase-selected: var(--ds-color-brand-neutral-lightest);   /* Table surfase/Selected */
  --ds-color-table-surfase-head: var(--ds-palette-accent-50);   /* Table surfase/Head */
  --ds-color-table-surfase-head-group: var(--ds-palette-accent-100);   /* Table surfase/Head group */
  --ds-color-text-primary: var(--ds-color-brand-neutral-super-dark);   /* Text/Primary */
  --ds-color-text-inversive: var(--ds-color-brand-neutral-default);   /* Text/Inversive */
  --ds-color-text-secondary: var(--ds-color-brand-neutral-darker);   /* Text/Secondary */
  --ds-color-text-placeholder: var(--ds-color-brand-neutral-light);   /* Text/Placeholder */
  --ds-color-text-disable: var(--ds-color-brand-neutral-neutral);   /* Text/Disable */
  --ds-color-text-accent: var(--ds-color-brand-accent-default);   /* Text/Accent */
  --ds-color-text-positive: var(--ds-color-brand-positive-default);   /* Text/Positive */
  --ds-color-text-warning: var(--ds-color-brand-warning-dark);   /* Text/Warning */
  --ds-color-text-negative: var(--ds-color-brand-negative-default);   /* Text/Negative */
  --ds-color-shapes-lighter-pr: var(--ds-color-brand-accent-lighter);   /* Shapes/Lighter PR */
  --ds-color-shapes-lighter-sc: var(--ds-color-brand-positive-lighter);   /* Shapes/Lighter SC */
  --ds-color-shapes-lighter-wr: var(--ds-color-brand-warning-lighter);   /* Shapes/Lighter WR */
  --ds-color-shapes-lighter-er: var(--ds-color-brand-negative-lighter);   /* Shapes/Lighter ER */
  --ds-color-shapes-lightest-mg: var(--ds-color-brand-contrast-1-lightest);   /* Shapes/Lightest MG */
  --ds-color-shapes-lightest-br: var(--ds-color-brand-contrast-2-lightest);   /* Shapes/Lightest BR */
  --ds-color-shapes-lightest-db: var(--ds-color-brand-contrast-3-lightest);   /* Shapes/Lightest DB */
  --ds-color-shapes-default: var(--ds-color-brand-neutral-default);   /* Shapes/Default */
  --ds-color-shapes-hover: var(--ds-color-brand-neutral-super-light);   /* Shapes/Hover */
  --ds-color-shapes-press: var(--ds-color-brand-neutral-lighter);   /* Shapes/Press */
  --ds-color-icon-primary: var(--ds-color-brand-neutral-darker);   /* Icon/Primary */
  --ds-color-icon-inversive: var(--ds-color-brand-neutral-default);   /* Icon/Inversive */
  --ds-color-icon-disable: var(--ds-color-brand-neutral-neutral);   /* Icon/Disable */
  --ds-color-icon-accent: var(--ds-color-brand-accent-default);   /* Icon/Accent */
  --ds-color-icon-positive: var(--ds-color-brand-positive-default);   /* Icon/Positive */
  --ds-color-icon-warning: var(--ds-color-brand-warning-dark);   /* Icon/Warning */
  --ds-color-icon-negative: var(--ds-color-brand-negative-default);   /* Icon/Negative */
  --ds-color-stroke-default: var(--ds-color-brand-neutral-lighter);   /* Stroke/Default */
  --ds-color-stroke-hover: var(--ds-color-brand-neutral-neutral);   /* Stroke/Hover */
  --ds-color-stroke-disable: var(--ds-color-brand-neutral-lightest);   /* Stroke/Disable */
  --ds-color-stroke-accent: var(--ds-color-brand-accent-default);   /* Stroke/Accent */
  --ds-color-stroke-positive: var(--ds-color-brand-positive-default);   /* Stroke/Positive */
  --ds-color-stroke-warning: var(--ds-color-brand-warning-default);   /* Stroke/Warning */
  --ds-color-stroke-negative: var(--ds-color-brand-negative-default);   /* Stroke/Negative */
  --ds-color-surface-disable: var(--ds-color-brand-neutral-super-light);   /* Surface/Disable */
  --ds-color-table-surfase-group: var(--ds-color-brand-neutral-lightest);   /* Table surfase/Group */
  --ds-color-button-accent-default: var(--ds-palette-accent-500);   /* Button/Accent/Default */
  --ds-color-button-accent-hover: var(--ds-palette-accent-600);   /* Button/Accent/Hover */
  --ds-color-button-accent-press: var(--ds-palette-accent-700);   /* Button/Accent/Press */
  --ds-color-button-positive-default: var(--ds-palette-positive-500);   /* Button/Positive/Default */
  --ds-color-button-positive-hover: var(--ds-palette-positive-600);   /* Button/Positive/Hover */
  --ds-color-button-positive-press: var(--ds-palette-positive-700);   /* Button/Positive/Press */
  --ds-color-button-warning-default: var(--ds-palette-warning-500);   /* Button/Warning/Default */
  --ds-color-button-warning-hover: var(--ds-palette-warning-600);   /* Button/Warning/Hover */
  --ds-color-button-warning-press: var(--ds-palette-warning-700);   /* Button/Warning/Press */
  --ds-color-button-negative-default: var(--ds-palette-negative-500);   /* Button/Negative/Default */
  --ds-color-button-negative-hover: var(--ds-palette-negative-600);   /* Button/Negative/Hover */
  --ds-color-button-negative-press: var(--ds-palette-negative-700);   /* Button/Negative/Press */
  --ds-color-button-neutral-default: var(--ds-palette-neutral-0);   /* Button/Neutral/Default */
  --ds-color-button-neutral-hover: var(--ds-palette-neutral-10);   /* Button/Neutral/Hover */
  --ds-color-button-neutral-press: var(--ds-palette-neutral-100);   /* Button/Neutral/Press */
  --ds-color-button-neutral-disable: var(--ds-palette-neutral-100);   /* Button/Neutral/Disable */
  --ds-color-button-accent-lite-default: var(--ds-palette-neutral-0);   /* Button/Accent/Lite default */
  --ds-color-button-accent-lite-hover: var(--ds-palette-accent-10);   /* Button/Accent/Lite hover */
  --ds-color-button-accent-lite-press: var(--ds-palette-accent-100);   /* Button/Accent/Lite press */
  --ds-color-button-positive-lite-default: var(--ds-palette-neutral-0);   /* Button/Positive/Lite default */
  --ds-color-button-positive-lite-hover: var(--ds-palette-positive-10);   /* Button/Positive/Lite hover */
  --ds-color-button-positive-lite-press: var(--ds-palette-positive-100);   /* Button/Positive/Lite press */
  --ds-color-button-warning-lite-default: var(--ds-palette-neutral-0);   /* Button/Warning/Lite default */
  --ds-color-button-warning-lite-hover: var(--ds-palette-warning-10);   /* Button/Warning/Lite hover */
  --ds-color-button-warning-lite-press: var(--ds-palette-warning-100);   /* Button/Warning/Lite press */
  --ds-color-button-negative-lite-default: var(--ds-palette-neutral-0);   /* Button/Negative/Lite default */
  --ds-color-button-negative-lite-hover: var(--ds-palette-negative-10);   /* Button/Negative/Lite hover */
  --ds-color-button-negative-lite-press: var(--ds-palette-negative-100);   /* Button/Negative/Lite press */
  --ds-color-surface-default-variant: var(--ds-color-brand-accent-super-lightest);   /* Surface/Default variant */
  --ds-color-brand-accent-lightest: var(--ds-palette-accent-10);   /* Brand/Accent/Lightest */
  --ds-color-shapes-default-variant: var(--ds-color-brand-accent-super-lightest);   /* Shapes/Default variant */
  --ds-color-shapes-disable: var(--ds-color-brand-neutral-lightest);   /* Shapes/Disable */
  --ds-color-brand-neutral-default-transparent: var(--ds-palette-neutral-transparent);   /* Brand/Neutral/Default transparent */
  --ds-color-button-neutral-default-transparent: var(--ds-palette-neutral-transparent);   /* Button/Neutral/Default transparent */
  --ds-color-button-accent-lite-default-transparent: var(--ds-palette-neutral-transparent);   /* Button/Accent/Lite default transparent */
  --ds-color-button-positive-lite-default-transparent: var(--ds-palette-neutral-transparent);   /* Button/Positive/Lite default transparent */
  --ds-color-button-warning-lite-default-transparent: var(--ds-palette-neutral-transparent);   /* Button/Warning/Lite default transparent */
  --ds-color-button-negative-lite-default-transparent: var(--ds-palette-neutral-transparent);   /* Button/Negative/Lite default transparent */
  --ds-color-shapes-default-transparent: var(--ds-color-brand-neutral-default-transparent);   /* Shapes/Default transparent */
  --ds-color-table-surfase-default-transparent: var(--ds-color-brand-neutral-default-transparent);   /* Table surfase/Default transparent */
  --ds-color-table-surfase-zebra: var(--ds-palette-neutral-50);   /* Table surfase/Zebra */
  --ds-color-surface-default-transparent: var(--ds-color-brand-neutral-default-transparent);   /* Surface/Default transparent */
  --ds-color-brand-accent-default-transparent: var(--ds-palette-neutral-transparent);   /* Brand/Accent/Default transparent */
  --ds-color-brand-contrast-4-lightest: var(--ds-palette-contrast-4-5);   /* Brand/Contrast-4/Lightest */
  --ds-color-brand-contrast-4-dark: var(--ds-palette-contrast-4-950);   /* Brand/Contrast-4/Dark */
  --ds-color-icon-primary-light: var(--ds-color-brand-neutral-neutral);   /* Icon/Primary light */

  /* ── Component (1346) ─────────────────────────── */
  --ds-color-button-accent-filled-default-background: var(--ds-color-button-accent-default);   /* Button/Accent/Filled/Default/Background */
  --ds-color-button-accent-filled-default-text-color: var(--ds-color-text-inversive);   /* Button/Accent/Filled/Default/Text color */
  --ds-color-button-accent-filled-default-icon-color: var(--ds-color-icon-inversive);   /* Button/Accent/Filled/Default/Icon color */
  --ds-color-button-accent-filled-hover-background: var(--ds-color-button-accent-hover);   /* Button/Accent/Filled/Hover/Background */
  --ds-color-button-accent-filled-hover-text-color: var(--ds-color-text-inversive);   /* Button/Accent/Filled/Hover/Text color */
  --ds-color-button-accent-filled-hover-icon-color: var(--ds-color-icon-inversive);   /* Button/Accent/Filled/Hover/Icon color */
  --ds-color-button-accent-filled-press-background: var(--ds-color-button-accent-press);   /* Button/Accent/Filled/Press/Background */
  --ds-color-button-accent-filled-press-text-color: var(--ds-color-text-inversive);   /* Button/Accent/Filled/Press/Text color */
  --ds-color-button-accent-filled-press-icon-color: var(--ds-color-icon-inversive);   /* Button/Accent/Filled/Press/Icon color */
  --ds-color-button-accent-outlined-default-background: var(--ds-color-button-accent-lite-default-transparent);   /* Button/Accent/Outlined/Default/Background */
  --ds-color-button-accent-outlined-default-text-color: var(--ds-color-text-accent);   /* Button/Accent/Outlined/Default/Text color */
  --ds-color-button-accent-outlined-default-icon-color: var(--ds-color-icon-accent);   /* Button/Accent/Outlined/Default/Icon color */
  --ds-color-button-accent-outlined-hover-background: var(--ds-color-button-accent-lite-hover);   /* Button/Accent/Outlined/Hover/Background */
  --ds-color-button-accent-outlined-hover-text-color: var(--ds-color-text-accent);   /* Button/Accent/Outlined/Hover/Text color */
  --ds-color-button-accent-outlined-hover-icon-color: var(--ds-color-icon-accent);   /* Button/Accent/Outlined/Hover/Icon color */
  --ds-color-button-accent-outlined-press-background: var(--ds-color-button-accent-lite-press);   /* Button/Accent/Outlined/Press/Background */
  --ds-color-button-accent-outlined-press-text-color: var(--ds-color-text-accent);   /* Button/Accent/Outlined/Press/Text color */
  --ds-color-button-accent-outlined-press-icon-color: var(--ds-color-icon-accent);   /* Button/Accent/Outlined/Press/Icon color */
  --ds-color-button-accent-outlined-default-border-color: var(--ds-color-stroke-accent);   /* Button/Accent/Outlined/Default/Border color */
  --ds-color-button-neutral-filled-default-background: var(--ds-color-button-neutral-default);   /* Button/Neutral/Filled/Default/Background */
  --ds-color-button-neutral-outlined-default-background: var(--ds-color-button-neutral-default-transparent);   /* Button/Neutral/Outlined/Default/Background */
  --ds-color-button-neutral-outlined-default-text-color: var(--ds-color-text-primary);   /* Button/Neutral/Outlined/Default/Text color */
  --ds-color-button-neutral-outlined-default-icon-color: var(--ds-color-icon-primary);   /* Button/Neutral/Outlined/Default/Icon color */
  --ds-color-button-neutral-outlined-default-border-color: var(--ds-color-stroke-default);   /* Button/Neutral/Outlined/Default/Border color */
  --ds-color-button-neutral-filled-default-text-color: var(--ds-color-text-primary);   /* Button/Neutral/Filled/Default/Text color */
  --ds-color-button-neutral-filled-default-icon-color: var(--ds-color-icon-primary);   /* Button/Neutral/Filled/Default/Icon color */
  --ds-button-m-size-icon-size: var(--ds-icon-size-size-5x);   /* Button/M size/Icon size */
  --ds-button-border-radius: var(--ds-radius-2x);   /* Button/Border radius */
  --ds-button-m-size-gap: var(--ds-space-2x);   /* Button/M size/Gap */
  --ds-button-m-size-pad-left: var(--ds-space-3x);   /* Button/M size/Pad left */
  --ds-button-m-size-pad-top: var(--ds-space-2x);   /* Button/M size/Pad top */
  --ds-button-m-size-pad-right: var(--ds-space-3x);   /* Button/M size/Pad right */
  --ds-button-m-size-pad-bottom: var(--ds-space-2x);   /* Button/M size/Pad bottom */
  --ds-color-button-neutral-filled-hover-background: var(--ds-color-button-neutral-hover);   /* Button/Neutral/Filled/Hover/Background */
  --ds-color-button-neutral-filled-hover-text-color: var(--ds-color-text-primary);   /* Button/Neutral/Filled/Hover/Text color */
  --ds-color-button-neutral-filled-hover-icon-color: var(--ds-color-icon-primary);   /* Button/Neutral/Filled/Hover/Icon color */
  --ds-color-button-neutral-filled-press-background: var(--ds-color-button-neutral-press);   /* Button/Neutral/Filled/Press/Background */
  --ds-color-button-neutral-filled-press-text-color: var(--ds-color-text-primary);   /* Button/Neutral/Filled/Press/Text color */
  --ds-color-button-neutral-filled-press-icon-color: var(--ds-color-icon-primary);   /* Button/Neutral/Filled/Press/Icon color */
  --ds-button-s-size-icon-size: var(--ds-icon-size-size-5x);   /* Button/S size/Icon size */
  --ds-button-s-size-gap: var(--ds-space-1x);   /* Button/S size/Gap */
  --ds-button-s-size-pad-right: var(--ds-space-2x);   /* Button/S size/Pad right */
  --ds-button-s-size-pad-bottom: var(--ds-space-1x);   /* Button/S size/Pad bottom */
  --ds-button-s-size-pad-left: var(--ds-space-2x);   /* Button/S size/Pad left */
  --ds-button-s-size-pad-top: var(--ds-space-1x);   /* Button/S size/Pad top */
  --ds-color-button-accent-outlined-hover-border-color: var(--ds-color-stroke-accent);   /* Button/Accent/Outlined/Hover/Border color */
  --ds-color-button-accent-outlined-press-border-color: var(--ds-color-stroke-accent);   /* Button/Accent/Outlined/Press/Border color */
  --ds-color-button-neutral-outlined-hover-background: var(--ds-color-button-neutral-hover);   /* Button/Neutral/Outlined/Hover/Background */
  --ds-color-button-neutral-outlined-hover-text-color: var(--ds-color-text-primary);   /* Button/Neutral/Outlined/Hover/Text color */
  --ds-color-button-neutral-outlined-hover-icon-color: var(--ds-color-icon-primary);   /* Button/Neutral/Outlined/Hover/Icon color */
  --ds-color-button-neutral-outlined-hover-border-color: var(--ds-color-stroke-default);   /* Button/Neutral/Outlined/Hover/Border color */
  --ds-color-button-neutral-outlined-press-background: var(--ds-color-button-neutral-press);   /* Button/Neutral/Outlined/Press/Background */
  --ds-color-button-neutral-outlined-press-text-color: var(--ds-color-text-primary);   /* Button/Neutral/Outlined/Press/Text color */
  --ds-color-button-neutral-outlined-press-icon-color: var(--ds-color-icon-primary);   /* Button/Neutral/Outlined/Press/Icon color */
  --ds-color-button-neutral-outlined-press-border-color: var(--ds-color-stroke-default);   /* Button/Neutral/Outlined/Press/Border color */
  --ds-color-button-neutral-text-default-background: var(--ds-color-button-neutral-default-transparent);   /* Button/Neutral/Text/Default/Background */
  --ds-color-button-neutral-text-default-text-color: var(--ds-color-text-primary);   /* Button/Neutral/Text/Default/Text color */
  --ds-color-button-neutral-text-default-icon-color: var(--ds-color-icon-primary);   /* Button/Neutral/Text/Default/Icon color */
  --ds-color-button-neutral-text-hover-background: var(--ds-color-button-neutral-hover);   /* Button/Neutral/Text/Hover/Background */
  --ds-color-button-neutral-text-hover-text-color: var(--ds-color-text-primary);   /* Button/Neutral/Text/Hover/Text color */
  --ds-color-button-neutral-text-hover-icon-color: var(--ds-color-icon-primary);   /* Button/Neutral/Text/Hover/Icon color */
  --ds-color-button-neutral-text-press-background: var(--ds-color-button-neutral-press);   /* Button/Neutral/Text/Press/Background */
  --ds-color-button-neutral-text-press-text-color: var(--ds-color-text-primary);   /* Button/Neutral/Text/Press/Text color */
  --ds-color-button-neutral-text-press-icon-color: var(--ds-color-icon-primary);   /* Button/Neutral/Text/Press/Icon color */
  --ds-color-button-accent-text-default-background: var(--ds-color-button-accent-lite-default-transparent);   /* Button/Accent/Text/Default/Background */
  --ds-color-button-accent-text-hover-background: var(--ds-color-button-accent-lite-hover);   /* Button/Accent/Text/Hover/Background */
  --ds-color-button-accent-text-press-background: var(--ds-color-button-accent-lite-press);   /* Button/Accent/Text/Press/Background */
  --ds-color-button-accent-text-press-text-color: var(--ds-color-text-accent);   /* Button/Accent/Text/Press/Text color */
  --ds-color-button-accent-text-press-icon-color: var(--ds-color-icon-accent);   /* Button/Accent/Text/Press/Icon color */
  --ds-color-button-accent-text-hover-text-color: var(--ds-color-text-accent);   /* Button/Accent/Text/Hover/Text color */
  --ds-color-button-accent-text-hover-icon-color: var(--ds-color-icon-accent);   /* Button/Accent/Text/Hover/Icon color */
  --ds-color-button-accent-text-default-text-color: var(--ds-color-text-accent);   /* Button/Accent/Text/Default/Text color */
  --ds-color-button-accent-text-default-icon-color: var(--ds-color-icon-accent);   /* Button/Accent/Text/Default/Icon color */
  --ds-color-button-positive-filled-default-background: var(--ds-color-button-positive-default);   /* Button/Positive/Filled/Default/Background */
  --ds-color-button-positive-filled-default-text-color: var(--ds-color-text-inversive);   /* Button/Positive/Filled/Default/Text color */
  --ds-color-button-positive-filled-default-icon-color: var(--ds-color-icon-inversive);   /* Button/Positive/Filled/Default/Icon color */
  --ds-color-button-positive-filled-hover-background: var(--ds-color-button-positive-hover);   /* Button/Positive/Filled/Hover/Background */
  --ds-color-button-positive-filled-hover-text-color: var(--ds-color-text-inversive);   /* Button/Positive/Filled/Hover/Text color */
  --ds-color-button-positive-filled-hover-icon-color: var(--ds-color-icon-inversive);   /* Button/Positive/Filled/Hover/Icon color */
  --ds-color-button-positive-filled-press-background: var(--ds-color-button-positive-press);   /* Button/Positive/Filled/Press/Background */
  --ds-color-button-positive-filled-press-text-color: var(--ds-color-text-inversive);   /* Button/Positive/Filled/Press/Text color */
  --ds-color-button-positive-filled-press-icon-color: var(--ds-color-icon-inversive);   /* Button/Positive/Filled/Press/Icon color */
  --ds-color-button-positive-outlined-default-background: var(--ds-color-button-neutral-default-transparent);   /* Button/Positive/Outlined/Default/Background */
  --ds-color-button-positive-text-default-background: var(--ds-color-button-positive-lite-default-transparent);   /* Button/Positive/Text/Default/Background */
  --ds-color-button-positive-text-default-text-color: var(--ds-color-text-positive);   /* Button/Positive/Text/Default/Text color */
  --ds-color-button-positive-text-default-icon-color: var(--ds-color-icon-positive);   /* Button/Positive/Text/Default/Icon color */
  --ds-color-button-positive-text-hover-background: var(--ds-color-button-positive-lite-hover);   /* Button/Positive/Text/Hover/Background */
  --ds-color-button-positive-text-hover-text-color: var(--ds-color-text-positive);   /* Button/Positive/Text/Hover/Text color */
  --ds-color-button-positive-text-hover-icon-color: var(--ds-color-icon-positive);   /* Button/Positive/Text/Hover/Icon color */
  --ds-color-button-positive-text-press-background: var(--ds-color-button-positive-lite-press);   /* Button/Positive/Text/Press/Background */
  --ds-color-button-positive-text-press-text-color: var(--ds-color-text-positive);   /* Button/Positive/Text/Press/Text color */
  --ds-color-button-positive-text-press-icon-color: var(--ds-color-icon-positive);   /* Button/Positive/Text/Press/Icon color */
  --ds-color-button-positive-outlined-default-text-color: var(--ds-color-text-positive);   /* Button/Positive/Outlined/Default/Text color */
  --ds-color-button-positive-outlined-default-icon-color: var(--ds-color-icon-positive);   /* Button/Positive/Outlined/Default/Icon color */
  --ds-color-button-positive-outlined-default-border-color: var(--ds-color-stroke-positive);   /* Button/Positive/Outlined/Default/Border color */
  --ds-color-button-positive-outlined-hover-background: var(--ds-color-button-positive-lite-hover);   /* Button/Positive/Outlined/Hover/Background */
  --ds-color-button-positive-outlined-hover-text-color: var(--ds-color-text-positive);   /* Button/Positive/Outlined/Hover/Text color */
  --ds-color-button-positive-outlined-hover-icon-color: var(--ds-color-icon-positive);   /* Button/Positive/Outlined/Hover/Icon color */
  --ds-color-button-positive-outlined-hover-border-color: var(--ds-color-stroke-positive);   /* Button/Positive/Outlined/Hover/Border color */
  --ds-color-button-positive-outlined-press-background: var(--ds-color-button-positive-lite-press);   /* Button/Positive/Outlined/Press/Background */
  --ds-color-button-positive-outlined-press-text-color: var(--ds-color-text-positive);   /* Button/Positive/Outlined/Press/Text color */
  --ds-color-button-positive-outlined-press-icon-color: var(--ds-color-icon-positive);   /* Button/Positive/Outlined/Press/Icon color */
  --ds-color-button-positive-outlined-press-border-color: var(--ds-color-stroke-positive);   /* Button/Positive/Outlined/Press/Border color */
  --ds-color-button-warning-filled-default-background: var(--ds-color-button-warning-default);   /* Button/Warning/Filled/Default/Background */
  --ds-color-button-warning-filled-default-text-color: var(--ds-color-text-inversive);   /* Button/Warning/Filled/Default/Text color */
  --ds-color-button-warning-filled-default-icon-color: var(--ds-color-icon-inversive);   /* Button/Warning/Filled/Default/Icon color */
  --ds-color-button-warning-filled-hover-background: var(--ds-color-button-warning-hover);   /* Button/Warning/Filled/Hover/Background */
  --ds-color-button-warning-filled-hover-text-color: var(--ds-color-text-inversive);   /* Button/Warning/Filled/Hover/Text color */
  --ds-color-button-warning-filled-hover-icon-color: var(--ds-color-icon-inversive);   /* Button/Warning/Filled/Hover/Icon color */
  --ds-color-button-warning-filled-press-background: var(--ds-color-button-warning-press);   /* Button/Warning/Filled/Press/Background */
  --ds-color-button-warning-filled-press-text-color: var(--ds-color-text-inversive);   /* Button/Warning/Filled/Press/Text color */
  --ds-color-button-warning-filled-press-icon-color: var(--ds-color-icon-inversive);   /* Button/Warning/Filled/Press/Icon color */
  --ds-color-button-warning-outlined-default-background: var(--ds-color-button-warning-lite-default-transparent);   /* Button/Warning/Outlined/Default/Background */
  --ds-color-button-warning-text-default-background: var(--ds-color-button-warning-lite-default-transparent);   /* Button/Warning/Text/Default/Background */
  --ds-color-button-warning-text-default-text-color: var(--ds-color-text-warning);   /* Button/Warning/Text/Default/Text color */
  --ds-color-button-warning-text-default-icon-color: var(--ds-color-icon-warning);   /* Button/Warning/Text/Default/Icon color */
  --ds-color-button-warning-text-hover-background: var(--ds-color-button-warning-lite-hover);   /* Button/Warning/Text/Hover/Background */
  --ds-color-button-warning-text-hover-text-color: var(--ds-color-text-warning);   /* Button/Warning/Text/Hover/Text color */
  --ds-color-button-warning-text-hover-icon-color: var(--ds-color-icon-warning);   /* Button/Warning/Text/Hover/Icon color */
  --ds-color-button-warning-text-press-background: var(--ds-color-button-warning-lite-press);   /* Button/Warning/Text/Press/Background */
  --ds-color-button-warning-text-press-text-color: var(--ds-color-text-warning);   /* Button/Warning/Text/Press/Text color */
  --ds-color-button-warning-text-press-icon-color: var(--ds-color-icon-warning);   /* Button/Warning/Text/Press/Icon color */
  --ds-color-button-warning-outlined-default-text-color: var(--ds-color-text-warning);   /* Button/Warning/Outlined/Default/Text color */
  --ds-color-button-warning-outlined-default-icon-color: var(--ds-color-icon-warning);   /* Button/Warning/Outlined/Default/Icon color */
  --ds-color-button-warning-outlined-default-border-color: var(--ds-color-stroke-warning);   /* Button/Warning/Outlined/Default/Border color */
  --ds-color-button-warning-outlined-hover-background: var(--ds-color-button-warning-lite-hover);   /* Button/Warning/Outlined/Hover/Background */
  --ds-color-button-warning-outlined-hover-text-color: var(--ds-color-text-warning);   /* Button/Warning/Outlined/Hover/Text color */
  --ds-color-button-warning-outlined-hover-icon-color: var(--ds-color-icon-warning);   /* Button/Warning/Outlined/Hover/Icon color */
  --ds-color-button-warning-outlined-hover-border-color: var(--ds-color-stroke-warning);   /* Button/Warning/Outlined/Hover/Border color */
  --ds-color-button-warning-outlined-press-background: var(--ds-color-button-warning-lite-press);   /* Button/Warning/Outlined/Press/Background */
  --ds-color-button-warning-outlined-press-text-color: var(--ds-color-text-warning);   /* Button/Warning/Outlined/Press/Text color */
  --ds-color-button-warning-outlined-press-icon-color: var(--ds-color-icon-warning);   /* Button/Warning/Outlined/Press/Icon color */
  --ds-color-button-warning-outlined-press-border-color: var(--ds-color-stroke-warning);   /* Button/Warning/Outlined/Press/Border color */
  --ds-color-button-negative-filled-default-background: var(--ds-color-button-negative-default);   /* Button/Negative/Filled/Default/Background */
  --ds-color-button-negative-filled-default-text-color: var(--ds-color-text-inversive);   /* Button/Negative/Filled/Default/Text color */
  --ds-color-button-negative-filled-default-icon-color: var(--ds-color-icon-inversive);   /* Button/Negative/Filled/Default/Icon color */
  --ds-color-button-negative-filled-hover-background: var(--ds-color-button-negative-hover);   /* Button/Negative/Filled/Hover/Background */
  --ds-color-button-negative-filled-hover-text-color: var(--ds-color-text-inversive);   /* Button/Negative/Filled/Hover/Text color */
  --ds-color-button-negative-filled-hover-icon-color: var(--ds-color-icon-inversive);   /* Button/Negative/Filled/Hover/Icon color */
  --ds-color-button-negative-filled-press-background: var(--ds-color-button-negative-press);   /* Button/Negative/Filled/Press/Background */
  --ds-color-button-negative-filled-press-text-color: var(--ds-color-text-inversive);   /* Button/Negative/Filled/Press/Text color */
  --ds-color-button-negative-filled-press-icon-color: var(--ds-color-icon-inversive);   /* Button/Negative/Filled/Press/Icon color */
  --ds-color-button-negative-outlined-default-background: var(--ds-color-button-negative-lite-default-transparent);   /* Button/Negative/Outlined/Default/Background */
  --ds-color-button-negative-text-default-background: var(--ds-color-button-negative-lite-default-transparent);   /* Button/Negative/Text/Default/Background */
  --ds-color-button-negative-text-default-text-color: var(--ds-color-text-negative);   /* Button/Negative/Text/Default/Text color */
  --ds-color-button-negative-text-default-icon-color: var(--ds-color-icon-negative);   /* Button/Negative/Text/Default/Icon color */
  --ds-color-button-negative-text-hover-background: var(--ds-color-button-negative-lite-hover);   /* Button/Negative/Text/Hover/Background */
  --ds-color-button-negative-text-hover-text-color: var(--ds-color-text-negative);   /* Button/Negative/Text/Hover/Text color */
  --ds-color-button-negative-text-hover-icon-color: var(--ds-color-icon-negative);   /* Button/Negative/Text/Hover/Icon color */
  --ds-color-button-negative-text-press-background: var(--ds-color-button-negative-lite-press);   /* Button/Negative/Text/Press/Background */
  --ds-color-button-negative-text-press-text-color: var(--ds-color-text-negative);   /* Button/Negative/Text/Press/Text color */
  --ds-color-button-negative-text-press-icon-color: var(--ds-color-icon-negative);   /* Button/Negative/Text/Press/Icon color */
  --ds-color-button-negative-outlined-default-text-color: var(--ds-color-text-negative);   /* Button/Negative/Outlined/Default/Text color */
  --ds-color-button-negative-outlined-default-icon-color: var(--ds-color-icon-negative);   /* Button/Negative/Outlined/Default/Icon color */
  --ds-color-button-negative-outlined-default-border-color: var(--ds-color-stroke-negative);   /* Button/Negative/Outlined/Default/Border color */
  --ds-color-button-negative-outlined-hover-background: var(--ds-color-button-negative-lite-hover);   /* Button/Negative/Outlined/Hover/Background */
  --ds-color-button-negative-outlined-hover-text-color: var(--ds-color-text-negative);   /* Button/Negative/Outlined/Hover/Text color */
  --ds-color-button-negative-outlined-hover-icon-color: var(--ds-color-icon-negative);   /* Button/Negative/Outlined/Hover/Icon color */
  --ds-color-button-negative-outlined-hover-border-color: var(--ds-color-stroke-negative);   /* Button/Negative/Outlined/Hover/Border color */
  --ds-color-button-negative-outlined-press-background: var(--ds-color-button-negative-lite-press);   /* Button/Negative/Outlined/Press/Background */
  --ds-color-button-negative-outlined-press-text-color: var(--ds-color-text-negative);   /* Button/Negative/Outlined/Press/Text color */
  --ds-color-button-negative-outlined-press-icon-color: var(--ds-color-icon-negative);   /* Button/Negative/Outlined/Press/Icon color */
  --ds-color-button-negative-outlined-press-border-color: var(--ds-color-stroke-negative);   /* Button/Negative/Outlined/Press/Border color */
  --ds-color-button-icon-neutral-filled-default-background: var(--ds-color-button-neutral-default);   /* Button icon/Neutral/Filled/Default/Background */
  --ds-color-button-icon-neutral-filled-icon-color: var(--ds-color-icon-primary);   /* Button icon/Neutral/Filled/Icon color */
  --ds-color-button-icon-neutral-filled-hover-background: var(--ds-color-button-neutral-hover);   /* Button icon/Neutral/Filled/Hover/Background */
  --ds-color-button-icon-neutral-filled-press-background: var(--ds-color-button-neutral-press);   /* Button icon/Neutral/Filled/Press/Background */
  --ds-color-button-icon-neutral-outlined-default-background: var(--ds-color-button-neutral-default);   /* Button icon/Neutral/Outlined/Default/Background */
  --ds-color-button-icon-neutral-outlined-icon-color: var(--ds-color-icon-primary);   /* Button icon/Neutral/Outlined/Icon color */
  --ds-color-button-icon-neutral-outlined-border-color: var(--ds-color-stroke-default);   /* Button icon/Neutral/Outlined/Border color */
  --ds-color-button-icon-neutral-text-default-background: var(--ds-color-button-neutral-default-transparent);   /* Button icon/Neutral/Text/Default/Background */
  --ds-color-button-icon-neutral-text-hover-background: var(--ds-color-button-neutral-hover);   /* Button icon/Neutral/Text/Hover/Background */
  --ds-color-button-icon-neutral-text-press-background: var(--ds-color-button-neutral-press);   /* Button icon/Neutral/Text/Press/Background */
  --ds-color-button-icon-neutral-text-icon-color: var(--ds-color-icon-primary);   /* Button icon/Neutral/Text/Icon color */
  --ds-color-button-icon-accent-filled-default-background: var(--ds-color-button-accent-default);   /* Button icon/Accent/Filled/Default/Background */
  --ds-color-button-icon-accent-filled-icon-color: var(--ds-color-icon-inversive);   /* Button icon/Accent/Filled/Icon color */
  --ds-color-button-icon-accent-filled-hover-background: var(--ds-color-button-accent-hover);   /* Button icon/Accent/Filled/Hover/Background */
  --ds-color-button-icon-accent-filled-press-background: var(--ds-color-button-accent-press);   /* Button icon/Accent/Filled/Press/Background */
  --ds-color-button-icon-accent-outlined-default-background: var(--ds-color-button-accent-lite-default);   /* Button icon/Accent/Outlined/Default/Background */
  --ds-color-button-icon-accent-text-default-background: var(--ds-color-button-accent-lite-default-transparent);   /* Button icon/Accent/Text/Default/Background */
  --ds-color-button-icon-accent-text-icon-color: var(--ds-color-icon-accent);   /* Button icon/Accent/Text/Icon color */
  --ds-color-button-icon-accent-text-hover-background: var(--ds-color-button-accent-lite-hover);   /* Button icon/Accent/Text/Hover/Background */
  --ds-color-button-icon-accent-text-press-background: var(--ds-color-button-accent-lite-press);   /* Button icon/Accent/Text/Press/Background */
  --ds-color-button-icon-accent-outlined-icon-color: var(--ds-color-icon-accent);   /* Button icon/Accent/Outlined/Icon color */
  --ds-color-button-icon-accent-outlined-border-color: var(--ds-color-stroke-accent);   /* Button icon/Accent/Outlined/Border color */
  --ds-color-button-icon-accent-outlined-hover-background: var(--ds-color-button-accent-lite-hover);   /* Button icon/Accent/Outlined/Hover/Background */
  --ds-color-button-icon-accent-outlined-press-background: var(--ds-color-button-accent-lite-press);   /* Button icon/Accent/Outlined/Press/Background */
  --ds-button-icon-m-size-icon-size: var(--ds-icon-size-size-5x);   /* Button icon/M size/Icon size */
  --ds-button-icon-border-radius: var(--ds-radius-2x);   /* Button icon/Border radius */
  --ds-button-icon-m-size-pad-left: var(--ds-space-2x);   /* Button icon/M size/Pad left */
  --ds-button-icon-m-size-pad-right: var(--ds-space-2x);   /* Button icon/M size/Pad right */
  --ds-button-icon-m-size-pad-top: var(--ds-space-2x);   /* Button icon/M size/Pad top */
  --ds-button-icon-m-size-pad-bottom: var(--ds-space-2x);   /* Button icon/M size/Pad bottom */
  --ds-button-icon-s-size-pad-left: var(--ds-space-1x);   /* Button icon/S size/Pad left */
  --ds-button-icon-s-size-pad-right: var(--ds-space-1x);   /* Button icon/S size/Pad right */
  --ds-button-icon-s-size-pad-top: var(--ds-space-1x);   /* Button icon/S size/Pad top */
  --ds-button-icon-s-size-pad-bottom: var(--ds-space-1x);   /* Button icon/S size/Pad bottom */
  --ds-color-button-icon-neutral-outlined-hover-background: var(--ds-color-button-neutral-hover);   /* Button icon/Neutral/Outlined/Hover/Background */
  --ds-color-button-icon-neutral-outlined-press-background: var(--ds-color-button-neutral-press);   /* Button icon/Neutral/Outlined/Press/Background */
  --ds-color-button-icon-positive-filled-default-background: var(--ds-color-button-positive-default);   /* Button icon/Positive/Filled/Default/Background */
  --ds-color-button-icon-positive-filled-icon-color: var(--ds-color-icon-inversive);   /* Button icon/Positive/Filled/Icon color */
  --ds-color-button-icon-positive-filled-hover-background: var(--ds-color-button-positive-hover);   /* Button icon/Positive/Filled/Hover/Background */
  --ds-color-button-icon-positive-filled-press-background: var(--ds-color-button-positive-press);   /* Button icon/Positive/Filled/Press/Background */
  --ds-color-button-icon-positive-outlined-default-background: var(--ds-color-button-positive-lite-default);   /* Button icon/Positive/Outlined/Default/Background */
  --ds-color-button-icon-positive-text-default-background: var(--ds-color-button-positive-lite-default-transparent);   /* Button icon/Positive/Text/Default/Background */
  --ds-color-button-icon-positive-text-icon-color: var(--ds-color-icon-positive);   /* Button icon/Positive/Text/Icon color */
  --ds-color-button-icon-positive-text-hover-background: var(--ds-color-button-positive-lite-hover);   /* Button icon/Positive/Text/Hover/Background */
  --ds-color-button-icon-positive-text-press-background: var(--ds-color-button-positive-lite-press);   /* Button icon/Positive/Text/Press/Background */
  --ds-color-button-icon-positive-outlined-icon-color: var(--ds-color-icon-positive);   /* Button icon/Positive/Outlined/Icon color */
  --ds-color-button-icon-positive-outlined-border-color: var(--ds-color-stroke-positive);   /* Button icon/Positive/Outlined/Border color */
  --ds-color-button-icon-positive-outlined-hover-background: var(--ds-color-button-positive-lite-hover);   /* Button icon/Positive/Outlined/Hover/Background */
  --ds-color-button-icon-positive-outlined-press-background: var(--ds-color-button-positive-lite-press);   /* Button icon/Positive/Outlined/Press/Background */
  --ds-color-button-icon-warning-filled-default-background: var(--ds-color-button-warning-default);   /* Button icon/Warning/Filled/Default/Background */
  --ds-color-button-icon-warning-filled-icon-color: var(--ds-color-icon-inversive);   /* Button icon/Warning/Filled/Icon color */
  --ds-color-button-icon-warning-filled-hover-background: var(--ds-color-button-warning-hover);   /* Button icon/Warning/Filled/Hover/Background */
  --ds-color-button-icon-warning-filled-press-background: var(--ds-color-button-warning-press);   /* Button icon/Warning/Filled/Press/Background */
  --ds-color-button-icon-warning-outlined-default-background: var(--ds-color-button-warning-lite-default);   /* Button icon/Warning/Outlined/Default/Background */
  --ds-color-button-icon-warning-text-default-background: var(--ds-color-button-warning-lite-default-transparent);   /* Button icon/Warning/Text/Default/Background */
  --ds-color-button-icon-warning-text-icon-color: var(--ds-color-icon-warning);   /* Button icon/Warning/Text/Icon color */
  --ds-color-button-icon-warning-text-hover-background: var(--ds-color-button-warning-lite-hover);   /* Button icon/Warning/Text/Hover/Background */
  --ds-color-button-icon-warning-text-press-background: var(--ds-color-button-warning-lite-press);   /* Button icon/Warning/Text/Press/Background */
  --ds-color-button-icon-warning-outlined-icon-color: var(--ds-color-icon-warning);   /* Button icon/Warning/Outlined/Icon color */
  --ds-color-button-icon-warning-outlined-border-color: var(--ds-color-stroke-warning);   /* Button icon/Warning/Outlined/Border color */
  --ds-color-button-icon-warning-outlined-hover-background: var(--ds-color-button-warning-lite-hover);   /* Button icon/Warning/Outlined/Hover/Background */
  --ds-color-button-icon-warning-outlined-press-background: var(--ds-color-button-warning-lite-press);   /* Button icon/Warning/Outlined/Press/Background */
  --ds-color-button-icon-negative-filled-default-background: var(--ds-color-button-negative-default);   /* Button icon/Negative/Filled/Default/Background */
  --ds-color-button-icon-negative-filled-icon-color: var(--ds-color-icon-inversive);   /* Button icon/Negative/Filled/Icon color */
  --ds-color-button-icon-negative-filled-hover-background: var(--ds-color-button-negative-hover);   /* Button icon/Negative/Filled/Hover/Background */
  --ds-color-button-icon-negative-filled-press-background: var(--ds-color-button-negative-press);   /* Button icon/Negative/Filled/Press/Background */
  --ds-color-button-icon-negative-outlined-default-background: var(--ds-color-button-negative-lite-default);   /* Button icon/Negative/Outlined/Default/Background */
  --ds-color-button-icon-negative-text-default-background: var(--ds-color-button-negative-lite-default-transparent);   /* Button icon/Negative/Text/Default/Background */
  --ds-color-button-icon-negative-text-icon-color: var(--ds-color-icon-negative);   /* Button icon/Negative/Text/Icon color */
  --ds-color-button-icon-negative-text-hover-background: var(--ds-color-button-negative-lite-hover);   /* Button icon/Negative/Text/Hover/Background */
  --ds-color-button-icon-negative-text-press-background: var(--ds-color-button-negative-lite-press);   /* Button icon/Negative/Text/Press/Background */
  --ds-color-button-icon-negative-outlined-icon-color: var(--ds-color-icon-negative);   /* Button icon/Negative/Outlined/Icon color */
  --ds-color-button-icon-negative-outlined-border-color: var(--ds-color-stroke-negative);   /* Button icon/Negative/Outlined/Border color */
  --ds-color-button-icon-negative-outlined-hover-background: var(--ds-color-button-negative-lite-hover);   /* Button icon/Negative/Outlined/Hover/Background */
  --ds-color-button-icon-negative-outlined-press-background: var(--ds-color-button-negative-lite-press);   /* Button icon/Negative/Outlined/Press/Background */
  --ds-button-toggle-border-radius: var(--ds-radius-3x);   /* Button toggle/Border radius */
  --ds-button-toggle-pad-left: var(--ds-space-1x);   /* Button toggle/Pad left */
  --ds-button-toggle-pad-right: var(--ds-space-1x);   /* Button toggle/Pad right */
  --ds-button-toggle-pad-top: var(--ds-space-1x);   /* Button toggle/Pad top */
  --ds-button-toggle-pad-bottom: var(--ds-space-1x);   /* Button toggle/Pad bottom */
  --ds-color-button-toggle-filled-background: var(--ds-color-shapes-default);   /* Button toggle/Filled/Background */
  --ds-button-toggle-gap: var(--ds-space-1x);   /* Button toggle/Gap */
  --ds-color-chips-filled-default-background: var(--ds-color-shapes-default-variant);   /* Chips/Filled/Default/Background */
  --ds-color-chips-text-color: var(--ds-color-text-primary);   /* Chips/Text color */
  --ds-color-chips-icon-color: var(--ds-color-icon-primary);   /* Chips/Icon color */
  --ds-color-chips-filled-hover-background: var(--ds-color-shapes-hover);   /* Chips/Filled/Hover/Background */
  --ds-color-chips-filled-press-background: var(--ds-color-shapes-press);   /* Chips/Filled/Press/Background */
  --ds-color-chips-outlined-default-background: var(--ds-color-shapes-default);   /* Chips/Outlined/Default/Background */
  --ds-color-chips-outlined-default-border-color: var(--ds-color-stroke-default);   /* Chips/Outlined/Default/Border color */
  --ds-chips-border-size: var(--ds-stroke-0-25x);   /* Chips/Border size */
  --ds-chips-m-size-text-size: var(--ds-typography-body-font-size-s);   /* Chips/M size/Text size */
  --ds-chips-text-weight: var(--ds-typography-font-weight-medium);   /* Chips/Text weight */
  --ds-chips-m-size-icon-size: var(--ds-icon-size-size-5x);   /* Chips/M size/Icon size */
  --ds-chips-m-size-border-radius: var(--ds-radius-3x);   /* Chips/M size/Border radius */
  --ds-chips-m-size-gap: var(--ds-space-2x);   /* Chips/M size/Gap */
  --ds-chips-m-size-pad-left: var(--ds-space-2x);   /* Chips/M size/Pad left */
  --ds-chips-m-size-pad-right: var(--ds-space-2x);   /* Chips/M size/Pad right */
  --ds-chips-m-size-pad-top: var(--ds-space-1-5x);   /* Chips/M size/Pad top */
  --ds-chips-m-size-pad-bottom: var(--ds-space-1-5x);   /* Chips/M size/Pad bottom */
  --ds-chips-s-size-pad-left: var(--ds-space-1-5x);   /* Chips/S size/Pad left */
  --ds-chips-s-size-pad-right: var(--ds-space-1-5x);   /* Chips/S size/Pad right */
  --ds-chips-s-size-pad-top: var(--ds-space-1x);   /* Chips/S size/Pad top */
  --ds-chips-s-size-pad-bottom: var(--ds-space-1x);   /* Chips/S size/Pad bottom */
  --ds-color-chips-outlined-hover-background: var(--ds-color-shapes-default);   /* Chips/Outlined/Hover/Background */
  --ds-color-chips-outlined-hover-border-color: var(--ds-color-stroke-hover);   /* Chips/Outlined/Hover/Border color */
  --ds-color-chips-outlined-press-background: var(--ds-color-shapes-press);   /* Chips/Outlined/Press/Background */
  --ds-color-chips-outlined-press-border-color: var(--ds-color-stroke-default);   /* Chips/Outlined/Press/Border color */
  --ds-chips-s-size-text-size: var(--ds-typography-caption-font-size-l);   /* Chips/S size/Text size */
  --ds-color-button-disable-background-filled: var(--ds-color-button-neutral-disable);   /* Button/Disable/Background filled */
  --ds-color-button-disable-text-color: var(--ds-color-text-disable);   /* Button/Disable/Text color */
  --ds-color-button-disable-icon-color: var(--ds-color-icon-disable);   /* Button/Disable/Icon color */
  --ds-color-button-disable-background-text: var(--ds-color-button-neutral-default-transparent);   /* Button/Disable/Background text */
  --ds-color-button-disable-background-outlined: var(--ds-color-button-neutral-default-transparent);   /* Button/Disable/Background outlined */
  --ds-color-button-disable-border-color: var(--ds-color-stroke-disable);   /* Button/Disable/Border color */
  --ds-color-button-icon-disable-background-filled: var(--ds-color-button-neutral-disable);   /* Button icon/Disable/Background filled */
  --ds-color-button-icon-disable-icon-color: var(--ds-color-icon-disable);   /* Button icon/Disable/Icon color */
  --ds-color-button-icon-disable-background-text: var(--ds-color-button-neutral-default-transparent);   /* Button icon/Disable/Background text */
  --ds-color-button-icon-disable-background-outlined: var(--ds-color-button-neutral-disable);   /* Button icon/Disable/Background outlined */
  --ds-color-button-icon-disable-border-color: var(--ds-color-stroke-disable);   /* Button icon/Disable/Border color */
  --ds-color-chips-disable-background-filled: var(--ds-color-shapes-disable);   /* Chips/Disable/Background filled */
  --ds-color-chips-disable-text-color: var(--ds-color-text-disable);   /* Chips/Disable/Text color */
  --ds-color-chips-disable-icon-color: var(--ds-color-icon-disable);   /* Chips/Disable/Icon color */
  --ds-color-chips-disable-background-outlined: var(--ds-color-shapes-default);   /* Chips/Disable/Background outlined */
  --ds-color-chips-disable-border-color: var(--ds-color-stroke-disable);   /* Chips/Disable/Border color */
  --ds-button-icon-gap: var(--ds-space-2x);   /* Button icon/Gap */
  --ds-button-icon-border-size: var(--ds-stroke-0-25x);   /* Button icon/Border size */
  --ds-button-border-size: var(--ds-stroke-0-25x);   /* Button/Border size */
  --ds-color-form-field-filled-default-input-text-color: var(--ds-color-text-primary);   /* Form field/Filled/Default/Input text color */
  --ds-color-form-field-filled-default-icon-color-default: var(--ds-color-icon-primary);   /* Form field/Filled/Default/Icon color default */
  --ds-color-form-field-outlined-default-background: var(--ds-color-shapes-default);   /* Form field/Outlined/Default/Background */
  --ds-color-form-field-outlined-default-text-color: var(--ds-color-text-primary);   /* Form field/Outlined/Default/Text color */
  --ds-color-form-field-outlined-default-icon-color: var(--ds-color-icon-primary);   /* Form field/Outlined/Default/Icon color */
  --ds-color-form-field-outlined-default-border-color: var(--ds-color-stroke-default);   /* Form field/Outlined/Default/Border color */
  --ds-form-field-m-size-text: var(--ds-typography-body-font-size-m);   /* Form field/M size/Text */
  --ds-form-field-text-weight: var(--ds-typography-font-weight-medium);   /* Form field/Text weight */
  --ds-form-field-border-size: var(--ds-stroke-0-25x);   /* Form field/Border size */
  --ds-form-field-border-radius: var(--ds-radius-3x);   /* Form field/Border radius */
  --ds-form-field-m-size-icon: var(--ds-icon-size-size-6x);   /* Form field/M size/Icon */
  --ds-form-field-s-size-icon: var(--ds-icon-size-size-6x);   /* Form field/S size/Icon */
  --ds-color-form-field-outlined-hover-background: var(--ds-color-button-neutral-hover);   /* Form field/Outlined/Hover/Background */
  --ds-color-form-field-outlined-hover-text-color: var(--ds-color-text-primary);   /* Form field/Outlined/Hover/Text color */
  --ds-color-form-field-outlined-hover-icon-color: var(--ds-color-icon-primary);   /* Form field/Outlined/Hover/Icon color */
  --ds-color-form-field-outlined-hover-border-color: var(--ds-color-stroke-default);   /* Form field/Outlined/Hover/Border color */
  --ds-color-form-field-outlined-focus-background: var(--ds-color-button-neutral-press);   /* Form field/Outlined/Focus/Background */
  --ds-color-form-field-outlined-focus-text-color: var(--ds-color-text-primary);   /* Form field/Outlined/Focus/Text color */
  --ds-color-form-field-outlined-focus-icon-color: var(--ds-color-icon-primary);   /* Form field/Outlined/Focus/Icon color */
  --ds-color-form-field-outlined-focus-border-color: var(--ds-color-stroke-default);   /* Form field/Outlined/Focus/Border color */
  --ds-form-field-m-size-text-label: var(--ds-typography-caption-font-size-l);   /* Form field/M size/Text label */
  --ds-form-field-s-size-text: var(--ds-typography-body-font-size-m);   /* Form field/S size/Text */
  --ds-form-field-s-size-text-label: var(--ds-typography-caption-font-size-l);   /* Form field/S size/Text label */
  --ds-form-field-gap-input-support: var(--ds-space-1x);   /* Form field/Gap input support */
  --ds-form-field-gap-input-frame: var(--ds-space-2x);   /* Form field/Gap input frame */
  --ds-form-field-gap-input-content: var(--ds-space-0);   /* Form field/Gap input content */
  --ds-form-field-m-size-text-support: var(--ds-typography-caption-font-size-l);   /* Form field/M size/Text support */
  --ds-form-field-s-size-text-support: var(--ds-typography-caption-font-size-l);   /* Form field/S size/Text support */
  --ds-form-field-pad-support-left: var(--ds-space-3x);   /* Form field/Pad support left */
  --ds-form-field-pad-support-right: var(--ds-space-3x);   /* Form field/Pad support right */
  --ds-form-field-m-size-pad-input-right: var(--ds-space-3x);   /* Form field/M size/Pad input right */
  --ds-form-field-m-size-pad-input-left: var(--ds-space-3x);   /* Form field/M size/Pad input left */
  --ds-form-field-m-size-pad-input-bottom: var(--ds-space-3x);   /* Form field/M size/Pad input bottom */
  --ds-form-field-m-size-pad-input-top: var(--ds-space-3x);   /* Form field/M size/Pad input top */
  --ds-color-form-field-background-support: var(--ds-color-shapes-default-transparent);   /* Form field/Background support */
  --ds-color-form-field-outlined-error-background: var(--ds-color-button-neutral-press);   /* Form field/Outlined/Error/Background */
  --ds-color-form-field-outlined-error-text-color: var(--ds-color-text-primary);   /* Form field/Outlined/Error/Text color */
  --ds-color-form-field-outlined-error-icon-color: var(--ds-color-icon-primary);   /* Form field/Outlined/Error/Icon color */
  --ds-color-form-field-outlined-error-border-color: var(--ds-color-stroke-default);   /* Form field/Outlined/Error/Border color */
  --ds-color-form-field-filled-default-label-text-color: var(--ds-color-text-secondary);   /* Form field/Filled/Default/Label text color */
  --ds-color-form-field-filled-default-support-text-color: var(--ds-color-text-secondary);   /* Form field/Filled/Default/Support text color */
  --ds-color-form-field-filled-default-border-color: var(--ds-color-stroke-default);   /* Form field/Filled/Default/Border color */
  --ds-color-form-field-filled-default-icon-color-warning: var(--ds-color-icon-warning);   /* Form field/Filled/Default/Icon color warning */
  --ds-color-form-field-input-filled-background: var(--ds-color-shapes-default-variant);   /* Form field/Input filled background */
  --ds-color-form-field-filled-hover-input-text-color: var(--ds-color-text-primary);   /* Form field/Filled/Hover/Input text color */
  --ds-color-form-field-filled-hover-label-text-color: var(--ds-color-text-secondary);   /* Form field/Filled/Hover/Label text color */
  --ds-color-form-field-filled-hover-text-support-color: var(--ds-color-text-secondary);   /* Form field/Filled/Hover/Text support color */
  --ds-color-form-field-filled-hover-icon-color-default: var(--ds-color-icon-primary);   /* Form field/Filled/Hover/Icon color default */
  --ds-color-form-field-filled-hover-icon-color-warning: var(--ds-color-icon-warning);   /* Form field/Filled/Hover/Icon color warning */
  --ds-color-form-field-filled-hover-border-color: var(--ds-color-stroke-hover);   /* Form field/Filled/Hover/Border color */
  --ds-color-form-field-filled-focus-input-cursor-color: var(--ds-color-text-primary);   /* Form field/Filled/Focus/Input cursor color */
  --ds-color-form-field-filled-focus-label-text-color: var(--ds-color-text-accent);   /* Form field/Filled/Focus/Label text color */
  --ds-color-form-field-filled-focus-support-text-color: var(--ds-color-text-secondary);   /* Form field/Filled/Focus/Support text color */
  --ds-color-form-field-filled-focus-icon-color-default: var(--ds-color-icon-primary);   /* Form field/Filled/Focus/Icon color default */
  --ds-color-form-field-filled-focus-icon-color-warning: var(--ds-color-icon-warning);   /* Form field/Filled/Focus/Icon color warning */
  --ds-color-form-field-filled-focus-border-color: var(--ds-color-stroke-accent);   /* Form field/Filled/Focus/Border color */
  --ds-color-form-field-filled-focus-input-text-placeholder-color: var(--ds-color-text-placeholder);   /* Form field/Filled/Focus/Input text placeholder color */
  --ds-color-form-field-filled-focus-input-text-color: var(--ds-color-text-primary);   /* Form field/Filled/Focus/Input text color */
  --ds-color-form-field-filled-error-input-text-color: var(--ds-color-text-primary);   /* Form field/Filled/Error/Input text color */
  --ds-color-form-field-filled-error-input-text-placeholder-color: var(--ds-color-text-placeholder);   /* Form field/Filled/Error/Input text placeholder color */
  --ds-color-form-field-filled-error-input-cursor-color: var(--ds-color-text-primary);   /* Form field/Filled/Error/Input cursor color */
  --ds-color-form-field-filled-error-label-text-color: var(--ds-color-text-negative);   /* Form field/Filled/Error/Label text color */
  --ds-color-form-field-filled-error-text-support-color: var(--ds-color-text-negative);   /* Form field/Filled/Error/Text support color */
  --ds-color-form-field-filled-error-icon-color-default: var(--ds-color-icon-primary);   /* Form field/Filled/Error/Icon color default */
  --ds-color-form-field-filled-error-icon-color-warning: var(--ds-color-icon-warning);   /* Form field/Filled/Error/Icon color warning */
  --ds-color-form-field-filled-error-border-color: var(--ds-color-stroke-negative);   /* Form field/Filled/Error/Border color */
  --ds-color-form-field-filled-error-icon-color-error: var(--ds-color-icon-negative);   /* Form field/Filled/Error/Icon color error */
  --ds-form-field-filled-focus-border-size-focus: var(--ds-stroke-0-25x);   /* Form field/Filled/Focus/Border size focus */
  --ds-form-field-filled-error-border-size-focus: var(--ds-stroke-0-5x);   /* Form field/Filled/Error/Border size focus */
  --ds-color-form-field-filled-hover-input-background-hover: var(--ds-color-shapes-hover);   /* Form field/Filled/Hover/Input background hover */
  --ds-color-form-field-filled-error-input-background-hover: var(--ds-color-shapes-hover);   /* Form field/Filled/Error/Input background hover */
  --ds-color-form-field-filled-disable-input-text-color: var(--ds-color-text-disable);   /* Form field/Filled/Disable/Input text color */
  --ds-color-form-field-filled-disable-label-text-color: var(--ds-color-text-disable);   /* Form field/Filled/Disable/Label text color */
  --ds-color-form-field-filled-disable-support-text-color: var(--ds-color-text-disable);   /* Form field/Filled/Disable/Support text color */
  --ds-color-form-field-filled-disable-icon-color-disable: var(--ds-color-icon-disable);   /* Form field/Filled/Disable/Icon color disable */
  --ds-color-form-field-filled-disable-icon-color-warning: var(--ds-color-icon-warning);   /* Form field/Filled/Disable/Icon color warning */
  --ds-color-form-field-filled-disable-border-color: var(--ds-color-stroke-disable);   /* Form field/Filled/Disable/Border color */
  --ds-color-form-field-filled-disable-input-background: var(--ds-color-surface-disable);   /* Form field/Filled/Disable/Input background */
  --ds-color-form-field-input-outlined-background: var(--ds-color-shapes-default);   /* Form field/Input outlined background */
  --ds-chips-input-m-size-pad-top: var(--ds-size-1x);   /* Chips input/M size/Pad top */
  --ds-chips-input-m-size-pad-bottom: var(--ds-size-2x);   /* Chips input/M size/Pad bottom */
  --ds-form-field-s-size-pad-input-left: var(--ds-space-3x);   /* Form field/S size/Pad input left */
  --ds-form-field-s-size-pad-input-bottom: var(--ds-space-1-5x);   /* Form field/S size/Pad input bottom */
  --ds-form-field-s-size-pad-input-top: var(--ds-space-1-5x);   /* Form field/S size/Pad input top */
  --ds-form-field-s-size-pad-input-right: var(--ds-space-3x);   /* Form field/S size/Pad input right */
  --ds-color-button-toggle-outlined-background: var(--ds-color-shapes-default);   /* Button toggle/Outlined/Background */
  --ds-button-toggle-outlined-border-size: var(--ds-stroke-0-25x);   /* Button toggle/Outlined/Border size */
  --ds-color-button-toggle-outlined-border-color: var(--ds-color-stroke-default);   /* Button toggle/Outlined/Border color */
  --ds-form-field-xs-size-text: var(--ds-typography-body-font-size-s);   /* Form field/XS size/Text */
  --ds-form-field-xs-size-text-label: var(--ds-typography-caption-font-size-l);   /* Form field/XS size/Text label */
  --ds-form-field-xs-size-text-support: var(--ds-typography-caption-font-size-l);   /* Form field/XS size/Text support */
  --ds-form-field-xs-size-icon: var(--ds-icon-size-size-5x);   /* Form field/XS size/Icon */
  --ds-form-field-xs-size-pad-input-left: var(--ds-space-2x);   /* Form field/XS size/Pad input left */
  --ds-form-field-xs-size-pad-input-right: var(--ds-space-2x);   /* Form field/XS size/Pad input right */
  --ds-form-field-xs-size-pad-input-top: var(--ds-space-1x);   /* Form field/XS size/Pad input top */
  --ds-form-field-xs-size-pad-input-bottom: var(--ds-space-1x);   /* Form field/XS size/Pad input bottom */
  --ds-color-input-number-input-background: var(--ds-color-shapes-default);   /* Input number/Input/Background */
  --ds-color-input-number-input-default-border-color: var(--ds-color-stroke-default);   /* Input number/Input/Default/Border color */
  --ds-input-number-input-border-size: var(--ds-stroke-0-25x);   /* Input number/Input/Border size */
  --ds-color-slide-toggle-selected-default-background: var(--ds-color-brand-accent-default);   /* Slide toggle/Selected/Default/Background */
  --ds-slide-toggle-border-radius-knob: var(--ds-radius-circular);   /* Slide toggle/Border radius knob */
  --ds-slide-toggle-knob-width: var(--ds-size-4x);   /* Slide toggle/Knob width */
  --ds-slide-toggle-knob-height: var(--ds-size-4x);   /* Slide toggle/Knob height */
  --ds-slide-toggle-border-radius: var(--ds-radius-3x);   /* Slide toggle/Border radius */
  --ds-slide-toggle-selected-pad-right: var(--ds-space-0-5x);   /* Slide toggle/Selected/Pad right */
  --ds-slide-toggle-selected-pad-left: var(--ds-space-4x);   /* Slide toggle/Selected/Pad left */
  --ds-slide-toggle-pad-top: var(--ds-space-0-5x);   /* Slide toggle/Pad top */
  --ds-slide-toggle-pad-bottom: var(--ds-space-0-5x);   /* Slide toggle/Pad bottom */
  --ds-slide-toggle-deselected-pad-right: var(--ds-space-4x);   /* Slide toggle/Deselected/Pad right */
  --ds-slide-toggle-deselected-pad-left: var(--ds-space-0-5x);   /* Slide toggle/Deselected/Pad left */
  --ds-icon-size-size-4x: var(--ds-size-4x);   /* Icon size/Size 4x */
  --ds-icon-size-size-9x: var(--ds-size-9x);   /* Icon size/Size 9x */
  --ds-icon-size-size-8x: var(--ds-size-8x);   /* Icon size/Size 8x */
  --ds-icon-size-size-6x: var(--ds-size-6x);   /* Icon size/Size 6x */
  --ds-icon-size-size-5x: var(--ds-size-5x);   /* Icon size/Size 5x */
  --ds-icon-size-size-10x: var(--ds-size-10x);   /* Icon size/Size 10x */
  --ds-status-text-size: var(--ds-typography-caption-font-size-l);   /* Status/Text size */
  --ds-status-pad-left: var(--ds-space-1-5x);   /* Status/Pad left */
  --ds-status-pad-right: var(--ds-space-1-5x);   /* Status/Pad right */
  --ds-status-pad-top: var(--ds-space-1x);   /* Status/Pad top */
  --ds-status-pad-bottom: var(--ds-space-1x);   /* Status/Pad bottom */
  --ds-color-status-neutral-filled-background: var(--ds-palette-neutral-10);   /* Status/Neutral/Filled/Background */
  --ds-color-status-neutral-filled-text-color: var(--ds-color-text-secondary);   /* Status/Neutral/Filled/Text color */
  --ds-status-text-weight: var(--ds-typography-font-weight-medium);   /* Status/Text weight */
  --ds-status-gap: var(--ds-space-1x);   /* Status/Gap */
  --ds-status-icon-size: var(--ds-icon-size-size-4x);   /* Status/Icon size */
  --ds-status-border-radius: var(--ds-radius-2x);   /* Status/Border radius */
  --ds-color-status-neutral-text-text-color: var(--ds-color-text-secondary);   /* Status/Neutral/Text/Text color */
  --ds-color-status-icon-color: var(--ds-color-icon-primary);   /* Status/Icon color */
  --ds-color-status-accent-filled-background: var(--ds-palette-accent-10);   /* Status/Accent/Filled/Background */
  --ds-color-status-accent-filled-text-color: var(--ds-color-text-accent);   /* Status/Accent/Filled/Text color */
  --ds-color-status-accent-text-text-color: var(--ds-color-text-accent);   /* Status/Accent/Text/Text color */
  --ds-color-status-positive-filled-background: var(--ds-palette-positive-10);   /* Status/Positive/Filled/Background */
  --ds-color-status-positive-filled-text-color: var(--ds-color-text-positive);   /* Status/Positive/Filled/Text color */
  --ds-color-status-positive-text-text-color: var(--ds-color-text-positive);   /* Status/Positive/Text/Text color */
  --ds-color-status-warning-filled-background: var(--ds-palette-warning-10);   /* Status/Warning/Filled/Background */
  --ds-color-status-warning-filled-text-color: var(--ds-color-text-warning);   /* Status/Warning/Filled/Text color */
  --ds-color-status-warning-text-text-color: var(--ds-color-text-warning);   /* Status/Warning/Text/Text color */
  --ds-color-status-negative-filled-background: var(--ds-palette-negative-10);   /* Status/Negative/Filled/Background */
  --ds-color-status-negative-filled-text-color: var(--ds-color-text-negative);   /* Status/Negative/Filled/Text color */
  --ds-color-status-negative-text-text-color: var(--ds-color-text-negative);   /* Status/Negative/Text/Text color */
  --ds-color-status-contrast-1-filled-background: var(--ds-palette-contrast-1-10);   /* Status/Contrast-1/Filled/Background */
  --ds-color-status-contrast-1-filled-text-color: var(--ds-palette-contrast-1-700);   /* Status/Contrast-1/Filled/Text color */
  --ds-color-status-contrast-1-text-text-color: var(--ds-color-brand-contrast-1-dark);   /* Status/Contrast-1/Text/Text color */
  --ds-color-status-contrast-2-filled-background: var(--ds-palette-contrast-2-10);   /* Status/Contrast-2/Filled/Background */
  --ds-color-status-contrast-2-filled-text-color: var(--ds-palette-contrast-2-950);   /* Status/Contrast-2/Filled/Text color */
  --ds-color-status-contrast-2-text-text-color: var(--ds-color-brand-contrast-2-dark);   /* Status/Contrast-2/Text/Text color */
  --ds-color-status-contrast-3-filled-background: var(--ds-palette-contrast-3-10);   /* Status/Contrast-3/Filled/Background */
  --ds-color-status-contrast-3-filled-text-color: var(--ds-palette-contrast-3-950);   /* Status/Contrast-3/Filled/Text color */
  --ds-color-status-contrast-3-text-text-color: var(--ds-color-brand-contrast-3-dark);   /* Status/Contrast-3/Text/Text color */
  --ds-expansion-panel-collaps-text-size: var(--ds-typography-body-font-size-s);   /* Expansion panel/Collaps/Text size */
  --ds-expansion-panel-collaps-text-weight: var(--ds-typography-font-weight-medium);   /* Expansion panel/Collaps/Text weight */
  --ds-expansion-panel-collaps-gap: var(--ds-space-2x);   /* Expansion panel/Collaps/Gap */
  --ds-expansion-panel-collaps-border-radius: var(--ds-radius-3x);   /* Expansion panel/Collaps/Border radius */
  --ds-expansion-panel-collaps-pad-left: var(--ds-space-4x);   /* Expansion panel/Collaps/Pad left */
  --ds-expansion-panel-collaps-pad-right: var(--ds-space-4x);   /* Expansion panel/Collaps/Pad right */
  --ds-expansion-panel-collaps-pad-top: var(--ds-space-3x);   /* Expansion panel/Collaps/Pad top */
  --ds-expansion-panel-collaps-pad-bottom: var(--ds-space-3x);   /* Expansion panel/Collaps/Pad bottom */
  --ds-expansion-panel-collaps-gap-icon-group: var(--ds-space-2x);   /* Expansion panel/Collaps/Gap icon group ? */
  --ds-color-expansion-panel-collaps-text-color: var(--ds-color-text-primary);   /* Expansion panel/Collaps/Text color */
  --ds-expansion-panel-collaps-border-size: var(--ds-stroke-0-25x);   /* Expansion panel/Collaps/Border size */
  --ds-color-expansion-panel-collaps-border-color: var(--ds-color-stroke-default);   /* Expansion panel/Collaps/Border color */
  --ds-expansion-panel-content-pad-left: var(--ds-space-4x);   /* Expansion panel/Content/Pad left */
  --ds-expansion-panel-content-pad-right: var(--ds-space-4x);   /* Expansion panel/Content/Pad right */
  --ds-expansion-panel-content-pad-top: var(--ds-space-4x);   /* Expansion panel/Content/Pad top */
  --ds-expansion-panel-content-pad-bottom: var(--ds-space-4x);   /* Expansion panel/Content/Pad bottom */
  --ds-expansion-panel-expand-border-radius: var(--ds-radius-3x);   /* Expansion panel/Expand/Border radius */
  --ds-expansion-panel-expand-border-size: var(--ds-stroke-0-25x);   /* Expansion panel/Expand/Border size */
  --ds-color-expansion-panel-expand-border-color: var(--ds-color-stroke-default);   /* Expansion panel/Expand/Border color */
  --ds-expansion-panel-content-text-size: var(--ds-typography-body-font-size-s);   /* Expansion panel/Content/Text size */
  --ds-color-expansion-panel-content-text-color: var(--ds-color-text-primary);   /* Expansion panel/Content/Text color */
  --ds-expansion-panel-content-text-weight: var(--ds-typography-font-weight-regular);   /* Expansion panel/Content/Text weight */
  --ds-color-dialog-background: var(--ds-color-surface-default);   /* Dialog/Background */
  --ds-dialog-border-radius: var(--ds-radius-3x);   /* Dialog/Border radius */
  --ds-dialog-header-gap: var(--ds-space-2x);   /* Dialog/Header/Gap */
  --ds-dialog-header-pad-top: var(--ds-space-6x);   /* Dialog/Header/Pad top */
  --ds-dialog-header-title-size: var(--ds-typography-font-size-5x);   /* Dialog/Header/Title size */
  --ds-dialog-header-title-weight: var(--ds-typography-font-weight-medium);   /* Dialog/Header/Title weight */
  --ds-color-dialog-header-title-color: var(--ds-color-text-primary);   /* Dialog/Header/Title color */
  --ds-dialog-header-desc-size: var(--ds-typography-font-size-4x);   /* Dialog/Header/Desc size */
  --ds-dialog-header-desc-weight: var(--ds-typography-font-weight-regular);   /* Dialog/Header/Desc weight */
  --ds-color-dialog-header-desc-color: var(--ds-color-text-secondary);   /* Dialog/Header/Desc color */
  --ds-color-table-cell-text-color: var(--ds-color-text-primary);   /* Table cell/Text color */
  --ds-color-table-cell-background: var(--ds-color-table-surfase-default-transparent);   /* Table cell/Background */
  --ds-table-cell-pad-left: var(--ds-space-2x);   /* Table cell/Pad left */
  --ds-table-cell-pad-right: var(--ds-space-2x);   /* Table cell/Pad right */
  --ds-table-cell-pad-top: var(--ds-space-2x);   /* Table cell/Pad top */
  --ds-table-cell-pad-bottom: var(--ds-space-2x);   /* Table cell/Pad bottom */
  --ds-color-table-row-header-background-header: var(--ds-color-table-surfase-head);   /* Table row/Header/Background header */
  --ds-table-row-header-border-radius-top-left: var(--ds-radius-2x);   /* Table row/Header/Border radius top left */
  --ds-table-row-header-border-radius-top-right: var(--ds-radius-2x);   /* Table row/Header/Border radius top right */
  --ds-color-table-row-content-default-background: var(--ds-color-table-surfase-default);   /* Table row/Content/Default/Background */
  --ds-table-row-content-border-bottom-size: var(--ds-stroke-0-25x);   /* Table row/Content/Border bottom size */
  --ds-color-table-row-content-border-color: var(--ds-color-stroke-default);   /* Table row/Content/Border color */
  --ds-color-expansion-panel-collaps-hover-background: var(--ds-color-surface-hover);   /* Expansion panel/Collaps/Hover/Background */
  --ds-color-expansion-panel-collaps-default-background: var(--ds-color-surface-default-variant);   /* Expansion panel/Collaps/Default/Background */
  --ds-slide-toggle-gap: var(--ds-space-2x);   /* Slide toggle/Gap */
  --ds-slide-toggle-text-weight: var(--ds-typography-font-weight-regular);   /* Slide toggle/Text weight */
  --ds-slide-toggle-text-size: var(--ds-typography-body-font-size-s);   /* Slide toggle/Text size */
  --ds-color-slide-toggle-selected-hover-background: var(--ds-color-brand-accent-dark);   /* Slide toggle/Selected/Hover/Background */
  --ds-color-slide-toggle-deselected-default-background: var(--ds-color-brand-neutral-neutral);   /* Slide toggle/Deselected/Default/Background */
  --ds-color-slide-toggle-deselected-hover-background: var(--ds-color-brand-neutral-dark);   /* Slide toggle/Deselected/Hover/Background */
  --ds-color-slide-toggle-deselected-disable-background: var(--ds-color-brand-neutral-lighter);   /* Slide toggle/Deselected/Disable/Background */
  --ds-color-slide-toggle-selected-disable-background: var(--ds-color-brand-neutral-lighter);   /* Slide toggle/Selected/Disable/Background */
  --ds-color-slide-toggle-deselected-disable-text-color: var(--ds-color-text-disable);   /* Slide toggle/Deselected/Disable/Text color */
  --ds-color-slide-toggle-selected-disable-text-color: var(--ds-color-text-disable);   /* Slide toggle/Selected/Disable/Text color */
  --ds-color-slide-toggle-text-color: var(--ds-color-text-primary);   /* Slide toggle/Text color */
  --ds-color-slide-toggle-knob-color: var(--ds-color-brand-neutral-default);   /* Slide toggle/Knob color */
  --ds-table-cell-header-hover-border-size: var(--ds-stroke-0-25x);   /* Table cell/Header/Hover/Border size */
  --ds-color-table-cell-header-default-background: var(--ds-color-table-surfase-head);   /* Table cell/Header/Default/Background */
  --ds-color-table-row-content-hover-background: var(--ds-color-table-surfase-hover);   /* Table row/Content/Hover/Background */
  --ds-color-table-cell-header-disable-text-color: var(--ds-color-text-disable);   /* Table cell/Header/Disable/Text color */
  --ds-color-table-row-content-zebra-background: var(--ds-color-table-surfase-zebra);   /* Table row/Content/Zebra/Background */
  --ds-dialog-content-title-size: var(--ds-typography-font-size-4x);   /* Dialog/Content/Title size */
  --ds-dialog-content-gap: var(--ds-space-4x);   /* Dialog/Content/Gap */
  --ds-color-dialog-content-title-color: var(--ds-color-text-primary);   /* Dialog/Content/Title color */
  --ds-dialog-footer-pad-bottom: var(--ds-space-4x);   /* Dialog/Footer/Pad bottom */
  --ds-dialog-footer-pad-top: var(--ds-space-4x);   /* Dialog/Footer/Pad top */
  --ds-dialog-content-title-weight: var(--ds-typography-font-weight-medium);   /* Dialog/Content/Title weight */
  --ds-dialog-content-text-weight: var(--ds-typography-font-weight-regular);   /* Dialog/Content/Text weight */
  --ds-dialog-content-text-size: var(--ds-typography-font-size-3-5x);   /* Dialog/Content/Text size */
  --ds-color-dialog-content-text-color: var(--ds-color-text-secondary);   /* Dialog/Content/Text color */
  --ds-table-cell-text-size: var(--ds-typography-body-font-size-s);   /* Table cell/Text size */
  --ds-table-cell-text-weight: var(--ds-typography-font-weight-regular);   /* Table cell/Text weight */
  --ds-divider-size-m: var(--ds-stroke-0-25x);   /* Divider/Size M */
  --ds-color-table-cell-header-background: var(--ds-color-table-surfase-default-transparent);   /* Table cell/Header/Background */
  --ds-color-table-cell-content-default-background: var(--ds-color-table-surfase-default-transparent);   /* Table cell/Content/Default/Background */
  --ds-color-table-cell-content-hover-border-color: var(--ds-color-stroke-hover);   /* Table cell/Content/Hover/Border color */
  --ds-table-cell-content-hover-border-size: var(--ds-stroke-0-25x);   /* Table cell/Content/Hover/Border size */
  --ds-color-table-cell-content-focus-border-color: var(--ds-color-stroke-accent);   /* Table cell/Content/Focus/Border color */
  --ds-table-cell-content-focus-border-size: var(--ds-stroke-0-25x);   /* Table cell/Content/Focus/Border size */
  --ds-color-table-cell-content-edit-border-color: var(--ds-color-stroke-accent);   /* Table cell/Content/Edit/Border color */
  --ds-table-cell-content-edit-border-size: var(--ds-stroke-0-25x);   /* Table cell/Content/Edit/Border size */
  --ds-color-table-cell-content-error-border-color: var(--ds-color-stroke-negative);   /* Table cell/Content/Error/Border color */
  --ds-table-cell-content-error-border-size: var(--ds-stroke-0-25x);   /* Table cell/Content/Error/Border size */
  --ds-color-table-cell-content-background: var(--ds-color-table-surfase-default-transparent);   /* Table cell/Content/Background */
  --ds-color-table-cell-content-disable-text-color: var(--ds-color-text-disable);   /* Table cell/Content/Disable/Text Color */
  --ds-color-table-cell-header-hover-background: var(--ds-palette-accent-5);   /* Table cell/Header/Hover/Background */
  --ds-color-table-cell-header-disable-background: var(--ds-color-table-surfase-head);   /* Table cell/Header/Disable/Background */
  --ds-color-divider-solid-lite-color: var(--ds-color-stroke-default);   /* Divider/Solid/Lite/Color */
  --ds-color-divider-solid-default-color: var(--ds-color-stroke-default);   /* Divider/Solid/Default/Color */
  --ds-color-divider-solid-hover-color: var(--ds-color-stroke-accent);   /* Divider/Solid/Hover/Color */
  --ds-color-divider-dashed-default-color: var(--ds-color-stroke-default);   /* Divider/Dashed/Default/Color */
  --ds-color-table-cell-header-disable-icon-color: var(--ds-color-icon-disable);   /* Table cell/Header/Disable/Icon color */
  --ds-color-table-row-content-selected-background: var(--ds-color-table-surfase-selected);   /* Table row/Content/Selected/Background */
  --ds-color-table-cell-content-hover-background: var(--ds-color-table-surfase-hover);   /* Table cell/Content/Hover/Background */
  --ds-dialog-content-pad-top: var(--ds-space-2x);   /* Dialog/Content/Pad top */
  --ds-color-scroll-default-background: var(--ds-palette-neutral-10);   /* Scroll/Default/Background */
  --ds-color-scroll-default-knob-color: var(--ds-palette-neutral-300);   /* Scroll/Default/Knob color */
  --ds-scroll-knob-radius: var(--ds-radius-2x);   /* Scroll/Knob radius */
  --ds-scroll-border-radius: var(--ds-radius-2x);   /* Scroll/Border radius */
  --ds-color-scroll-hover-knob-color: var(--ds-palette-neutral-500);   /* Scroll/Hover/Knob color */
  --ds-color-scroll-hover-background: var(--ds-palette-neutral-100);   /* Scroll/Hover/Background */
  --ds-dialog-header-pad-bottom: var(--ds-space-2x);   /* Dialog/Header/Pad bottom */
  --ds-dialog-content-pad-bottom: var(--ds-space-2x);   /* Dialog/Content/Pad bottom */
  --ds-button-group-gap: var(--ds-space-2x);   /* Button group/Gap */
  --ds-color-backdrop-background: var(--ds-palette-neutral-900);   /* Backdrop/Background */
  --ds-card-header-pad-top: var(--ds-space-6x);   /* Card/Header/Pad top */
  --ds-card-header-pad-bottom: var(--ds-space-2x);   /* Card/Header/Pad bottom */
  --ds-card-header-gap: var(--ds-space-2x);   /* Card/Header/Gap */
  --ds-card-header-title-size: var(--ds-typography-font-size-5x);   /* Card/Header/Title size */
  --ds-card-header-title-weight: var(--ds-typography-font-weight-medium);   /* Card/Header/Title weight */
  --ds-color-card-header-title-color: var(--ds-color-text-primary);   /* Card/Header/Title color */
  --ds-card-header-desc-size: var(--ds-typography-font-size-4x);   /* Card/Header/Desc size */
  --ds-card-header-desc-weight: var(--ds-typography-font-weight-regular);   /* Card/Header/Desc weight */
  --ds-color-card-header-desc-color: var(--ds-color-text-secondary);   /* Card/Header/Desc color */
  --ds-card-content-gap: var(--ds-space-2x);   /* Card/Content/Gap */
  --ds-card-content-pad-top: var(--ds-space-2x);   /* Card/Content/Pad top */
  --ds-card-content-pad-bottom: var(--ds-space-2x);   /* Card/Content/Pad bottom */
  --ds-card-content-title-size: var(--ds-typography-font-size-4x);   /* Card/Content/Title size */
  --ds-card-content-title-weight: var(--ds-typography-font-weight-medium);   /* Card/Content/Title weight */
  --ds-color-card-content-title-color: var(--ds-color-text-primary);   /* Card/Content/Title color */
  --ds-card-content-text-size: var(--ds-typography-font-size-4x);   /* Card/Content/Text size */
  --ds-card-content-text-weight: var(--ds-typography-font-weight-medium);   /* Card/Content/Text weight */
  --ds-color-card-content-text-color: var(--ds-color-text-secondary);   /* Card/Content/Text color */
  --ds-card-footer-pad-top: var(--ds-space-4x);   /* Card/Footer/Pad top */
  --ds-card-footer-pad-bottom: var(--ds-space-4x);   /* Card/Footer/Pad bottom */
  --ds-card-pad-left: var(--ds-space-6x);   /* Card/Pad left */
  --ds-card-pad-right: var(--ds-space-6x);   /* Card/Pad right */
  --ds-card-border-radius: var(--ds-radius-2x);   /* Card/Border radius */
  --ds-color-card-background: var(--ds-color-shapes-default);   /* Card/Background */
  --ds-checkbox-icon-size: var(--ds-icon-size-size-5x);   /* Checkbox/Icon size */
  --ds-color-checkbox-normal-deselected-press-background: var(--ds-palette-neutral-200);   /* Checkbox/Normal/Deselected/Press/Background */
  --ds-color-checkbox-normal-deselected-hover-background: var(--ds-palette-neutral-100);   /* Checkbox/Normal/Deselected/Hover/Background */
  --ds-color-checkbox-normal-deselected-default-background: var(--ds-color-shapes-default-transparent);   /* Checkbox/Normal/Deselected/Default/Background */
  --ds-color-checkbox-normal-selected-default-background: var(--ds-color-shapes-default-transparent);   /* Checkbox/Normal/Selected/Default/Background */
  --ds-color-checkbox-normal-selected-hover-background: var(--ds-palette-accent-100);   /* Checkbox/Normal/Selected/Hover/Background */
  --ds-color-checkbox-normal-selected-press-background: var(--ds-palette-accent-200);   /* Checkbox/Normal/Selected/Press/Background */
  --ds-color-checkbox-normal-selected-icon-color: var(--ds-color-icon-accent);   /* Checkbox/Normal/Selected/Icon color */
  --ds-color-checkbox-normal-inderterminate-default-background: var(--ds-color-shapes-default-transparent);   /* Checkbox/Normal/Inderterminate/Default/Background */
  --ds-color-checkbox-normal-inderterminate-hover-background: var(--ds-palette-accent-100);   /* Checkbox/Normal/Inderterminate/Hover/Background */
  --ds-color-checkbox-normal-inderterminate-press-background: var(--ds-palette-accent-200);   /* Checkbox/Normal/Inderterminate/Press/Background */
  --ds-color-checkbox-normal-inderterminate-icon-color: var(--ds-color-icon-accent);   /* Checkbox/Normal/Inderterminate/Icon color */
  --ds-color-checkbox-error-icon-color: var(--ds-color-icon-negative);   /* Checkbox/Error/Icon color */
  --ds-color-checkbox-error-deselected-default-background: var(--ds-color-shapes-default-transparent);   /* Checkbox/Error/Deselected/Default/Background */
  --ds-color-checkbox-error-deselected-hover-background: var(--ds-palette-negative-100);   /* Checkbox/Error/Deselected/Hover/Background */
  --ds-color-checkbox-error-deselected-press-background: var(--ds-palette-negative-200);   /* Checkbox/Error/Deselected/Press/Background */
  --ds-color-checkbox-error-selected-default-background: var(--ds-color-shapes-default-transparent);   /* Checkbox/Error/Selected/Default/Background */
  --ds-color-checkbox-error-selected-hover-background: var(--ds-palette-negative-100);   /* Checkbox/Error/Selected/Hover/Background */
  --ds-color-checkbox-error-selected-press-background: var(--ds-palette-negative-200);   /* Checkbox/Error/Selected/Press/Background */
  --ds-color-checkbox-error-inderterminate-default-background: var(--ds-color-shapes-default-transparent);   /* Checkbox/Error/Inderterminate/Default/Background */
  --ds-color-checkbox-error-inderterminate-hover-background: var(--ds-palette-negative-100);   /* Checkbox/Error/Inderterminate/Hover/Background */
  --ds-color-checkbox-error-inderterminate-press-background: var(--ds-palette-negative-200);   /* Checkbox/Error/Inderterminate/Press/Background */
  --ds-color-checkbox-disable-deselected-icon-color: var(--ds-color-icon-disable);   /* Checkbox/Disable/Deselected/Icon color */
  --ds-color-checkbox-disable-selected-icon-color: var(--ds-color-icon-disable);   /* Checkbox/Disable/Selected/Icon color */
  --ds-color-checkbox-disable-inderterminate-icon-color: var(--ds-color-icon-disable);   /* Checkbox/Disable/Inderterminate/Icon color */
  --ds-color-checkbox-normal-deselected-icon-color: var(--ds-color-icon-primary);   /* Checkbox/Normal/Deselected/Icon color */
  --ds-color-checkbox-disable-background: var(--ds-color-shapes-default-transparent);   /* Checkbox/Disable/Background */
  --ds-checkbox-label-gap: var(--ds-space-2x);   /* Checkbox label/Gap */
  --ds-checkbox-label-text-weight: var(--ds-typography-font-weight-regular);   /* Checkbox label/Text weight */
  --ds-checkbox-label-text-size: var(--ds-typography-body-font-size-s);   /* Checkbox label/Text size */
  --ds-color-checkbox-label-text-color: var(--ds-color-text-primary);   /* Checkbox label/Text color */
  --ds-color-checkbox-label-text-disable-color: var(--ds-color-text-disable);   /* Checkbox label/Text disable color */
  --ds-checkbox-group-vertical-gap: var(--ds-space-2x);   /* Checkbox group/Vertical/Gap */
  --ds-checkbox-group-text-size: var(--ds-typography-body-font-size-s);   /* Checkbox group/Text size */
  --ds-checkbox-group-text-weight: var(--ds-typography-font-weight-regular);   /* Checkbox group/Text weight */
  --ds-color-checkbox-group-text-color: var(--ds-color-text-primary);   /* Checkbox group/Text color */
  --ds-color-checkbox-group-text-disable: var(--ds-color-text-disable);   /* Checkbox group/Text disable */
  --ds-checkbox-group-horizontal-gap: var(--ds-space-8x);   /* Checkbox group/Horizontal/Gap */
  --ds-checkbox-group-group-gap: var(--ds-space-2x);   /* Checkbox group/Group/Gap */
  --ds-checkbox-group-group-pad-left-0: var(--ds-space-0);   /* Checkbox group/Group/Pad left 0 */
  --ds-checkbox-group-group-pad-left-4x: var(--ds-space-4x);   /* Checkbox group/Group/Pad left 4x */
  --ds-color-radio-button-normal-deselected-default-background: var(--ds-color-shapes-default-transparent);   /* Radio button/Normal/Deselected/Default/Background */
  --ds-color-radio-button-normal-deselected-icon-color: var(--ds-color-icon-primary);   /* Radio button/Normal/Deselected/Icon color */
  --ds-color-radio-button-normal-deselected-hover-background: var(--ds-palette-neutral-100);   /* Radio button/Normal/Deselected/Hover/Background */
  --ds-color-radio-button-normal-deselected-press-background: var(--ds-palette-neutral-200);   /* Radio button/Normal/Deselected/Press/Background */
  --ds-color-radio-button-normal-selected-default-background: var(--ds-color-shapes-default-transparent);   /* Radio button/Normal/Selected/Default/Background */
  --ds-color-radio-button-normal-selected-icon-color: var(--ds-color-icon-accent);   /* Radio button/Normal/Selected/Icon color */
  --ds-color-radio-button-normal-selected-hover-background: var(--ds-palette-accent-100);   /* Radio button/Normal/Selected/Hover/Background */
  --ds-color-radio-button-normal-selected-press-background: var(--ds-palette-accent-200);   /* Radio button/Normal/Selected/Press/Background */
  --ds-radio-button-icon-size: var(--ds-icon-size-size-5x);   /* Radio button/Icon size */
  --ds-color-radio-button-error-deselected-default-background: var(--ds-color-shapes-default-transparent);   /* Radio button/Error/Deselected/Default/Background */
  --ds-color-radio-button-error-deselected-hover-background: var(--ds-palette-negative-100);   /* Radio button/Error/Deselected/Hover/Background */
  --ds-color-radio-button-error-deselected-press-background: var(--ds-palette-negative-200);   /* Radio button/Error/Deselected/Press/Background */
  --ds-color-radio-button-error-selected-default-background: var(--ds-color-shapes-default-transparent);   /* Radio button/Error/Selected/Default/Background */
  --ds-color-radio-button-error-selected-hover-background: var(--ds-palette-negative-100);   /* Radio button/Error/Selected/Hover/Background */
  --ds-color-radio-button-error-selected-press-background: var(--ds-palette-negative-200);   /* Radio button/Error/Selected/Press/Background */
  --ds-color-radio-button-error-icon-color: var(--ds-color-icon-negative);   /* Radio button/Error/Icon color */
  --ds-color-radio-button-disable-background: var(--ds-color-shapes-default-transparent);   /* Radio button/Disable/Background */
  --ds-color-radio-button-disable-deselected-icon-color: var(--ds-color-icon-disable);   /* Radio button/Disable/Deselected/Icon color */
  --ds-color-radio-button-disable-selected-icon-color: var(--ds-color-icon-disable);   /* Radio button/Disable/Selected/Icon color */
  --ds-radio-button-label-gap: var(--ds-space-2x);   /* Radio button label/Gap */
  --ds-radio-button-label-text-size: var(--ds-typography-body-font-size-s);   /* Radio button label/Text size */
  --ds-radio-button-label-text-weight: var(--ds-typography-font-weight-regular);   /* Radio button label/Text weight */
  --ds-color-radio-button-label-text-color: var(--ds-color-text-primary);   /* Radio button label/Text color */
  --ds-color-radio-button-label-text-disable-color: var(--ds-color-text-disable);   /* Radio button label/Text disable color */
  --ds-radio-button-group-vertical-gap: var(--ds-space-2x);   /* Radio button group/Vertical/Gap */
  --ds-radio-button-group-text-size: var(--ds-typography-body-font-size-s);   /* Radio button group/Text size */
  --ds-radio-button-group-text-weight: var(--ds-typography-font-weight-regular);   /* Radio button group/Text weight */
  --ds-color-radio-button-group-text-color: var(--ds-color-text-primary);   /* Radio button group/Text color */
  --ds-color-radio-button-group-text-disable-color: var(--ds-color-text-disable);   /* Radio button group/Text disable color */
  --ds-radio-button-group-horizontal-gap: var(--ds-space-8x);   /* Radio button group/Horizontal/Gap */
  --ds-color-input-number-input-icon-color: var(--ds-color-icon-primary);   /* Input number/Input/Icon color */
  --ds-input-number-input-pad-top: var(--ds-space-2x);   /* Input number/Input/Pad top */
  --ds-input-number-input-pad-right: var(--ds-space-2x);   /* Input number/Input/Pad right */
  --ds-input-number-input-pad-bottom: var(--ds-space-2x);   /* Input number/Input/Pad bottom */
  --ds-input-number-input-pad-left: var(--ds-space-2x);   /* Input number/Input/Pad left */
  --ds-input-number-input-border-radius: var(--ds-radius-2x);   /* Input number/Input/Border radius */
  --ds-input-number-input-gap: var(--ds-space-1x);   /* Input number/Input/Gap */
  --ds-input-number-input-text-size: var(--ds-typography-body-font-size-s);   /* Input number/Input/Text size */
  --ds-input-number-input-text-weight: var(--ds-typography-font-weight-medium);   /* Input number/Input/Text weight */
  --ds-color-input-number-input-text-color: var(--ds-color-text-primary);   /* Input number/Input/Text color */
  --ds-color-input-number-input-hover-border-color: var(--ds-color-stroke-hover);   /* Input number/Input/Hover/Border color */
  --ds-color-input-number-input-focus-border-color: var(--ds-color-stroke-accent);   /* Input number/Input/Focus/Border color */
  --ds-color-input-number-input-error-border-color: var(--ds-color-stroke-negative);   /* Input number/Input/Error/Border color */
  --ds-color-input-number-input-disable-border-color: var(--ds-color-stroke-disable);   /* Input number/Input/Disable/Border color */
  --ds-color-input-number-input-disable-text-color: var(--ds-color-text-disable);   /* Input number/Input/Disable/Text color */
  --ds-color-input-number-input-disable-icon-color: var(--ds-color-icon-disable);   /* Input number/Input/Disable/Icon color */
  --ds-color-input-number-input-error-icon-color: var(--ds-color-icon-negative);   /* Input number/Input/Error/Icon color */
  --ds-banners-pad-left: var(--ds-space-4x);   /* Banners/Pad left */
  --ds-banners-pad-right: var(--ds-space-4x);   /* Banners/Pad right */
  --ds-banners-pad-top: var(--ds-space-3x);   /* Banners/Pad top */
  --ds-banners-pad-bottom: var(--ds-space-3x);   /* Banners/Pad bottom */
  --ds-banners-border-radius: var(--ds-radius-3x);   /* Banners/Border radius */
  --ds-banners-text-size: var(--ds-typography-body-font-size-s);   /* Banners/Text size */
  --ds-banners-text-weight-r: var(--ds-typography-font-weight-regular);   /* Banners/Text weight R */
  --ds-color-banners-neutral-icon-color: var(--ds-color-icon-primary);   /* Banners/Neutral/Icon color */
  --ds-color-banners-text-color: var(--ds-color-text-primary);   /* Banners/Text color */
  --ds-banners-horizontal-gap: var(--ds-space-2x);   /* Banners/Horizontal/Gap */
  --ds-snackbar-pad-left: var(--ds-space-3x);   /* Snackbar/Pad left */
  --ds-snackbar-pad-right: var(--ds-space-3x);   /* Snackbar/Pad right */
  --ds-snackbar-pad-top: var(--ds-space-3x);   /* Snackbar/Pad top */
  --ds-snackbar-pad-bottom: var(--ds-space-3x);   /* Snackbar/Pad bottom */
  --ds-snackbar-border-radius: var(--ds-space-2x);   /* Snackbar/Border radius */
  --ds-snackbar-title-size: var(--ds-typography-body-font-size-s);   /* Snackbar/Title size */
  --ds-snackbar-title-weight: var(--ds-typography-font-weight-regular);   /* Snackbar/Title weight */
  --ds-color-snackbar-complex-dark-background: var(--ds-color-surface-snack-tooltip);   /* Snackbar/Complex/Dark/Background */
  --ds-color-snackbar-complex-dark-text-color: var(--ds-color-text-inversive);   /* Snackbar/Complex/Dark/Text color */
  --ds-snackbar-gap: var(--ds-space-2x);   /* Snackbar/Gap */
  --ds-color-banners-neutral-background: var(--ds-color-shapes-default);   /* Banners/Neutral/Background */
  --ds-color-tab-inactive-default-background: var(--ds-color-shapes-default-transparent);   /* Tab/Inactive/Default/Background */
  --ds-tab-lvl-1-pad-left: var(--ds-space-6x);   /* Tab/Lvl 1/Pad left */
  --ds-tab-lvl-1-pad-right: var(--ds-space-6x);   /* Tab/Lvl 1/Pad right */
  --ds-tab-lvl-1-text-size: var(--ds-typography-body-font-size-m);   /* Tab/Lvl 1/Text size */
  --ds-tab-lvl-1-text-weight: var(--ds-typography-font-weight-medium);   /* Tab/Lvl 1/Text weight */
  --ds-color-tab-inactive-icon-color: var(--ds-color-icon-primary);   /* Tab/Inactive/Icon color */
  --ds-color-tab-inactive-text-color: var(--ds-color-text-primary);   /* Tab/Inactive/Text color */
  --ds-color-tab-active-icon-color: var(--ds-color-icon-accent);   /* Tab/Active/Icon color */
  --ds-color-tab-active-text-color: var(--ds-color-text-accent);   /* Tab/Active/Text color */
  --ds-badge-text-size: var(--ds-typography-caption-font-size-l);   /* Badge/Text size */
  --ds-badge-text-weight: var(--ds-typography-font-weight-medium);   /* Badge/Text weight */
  --ds-color-banners-accent-background: var(--ds-color-shapes-lighter-pr);   /* Banners/Accent/Background */
  --ds-color-banners-warning-background: var(--ds-color-shapes-lighter-wr);   /* Banners/Warning/Background */
  --ds-color-banners-negative-background: var(--ds-color-shapes-lighter-er);   /* Banners/Negative/Background */
  --ds-color-banners-positive-background: var(--ds-color-shapes-lighter-sc);   /* Banners/Positive/Background */
  --ds-color-banners-accent-icon-color: var(--ds-color-icon-accent);   /* Banners/Accent/Icon color */
  --ds-color-banners-warning-icon-color: var(--ds-color-icon-warning);   /* Banners/Warning/Icon color */
  --ds-color-banners-negative-icon-color: var(--ds-color-icon-negative);   /* Banners/Negative/Icon color */
  --ds-color-banners-positive-icon-color: var(--ds-color-icon-positive);   /* Banners/Positive/Icon color */
  --ds-search-m-size-pad-left: var(--ds-space-3x);   /* Search/M size/Pad left */
  --ds-search-m-size-pad-right: var(--ds-space-3x);   /* Search/M size/Pad right */
  --ds-search-m-size-pad-top: var(--ds-space-3x);   /* Search/M size/Pad top */
  --ds-search-m-size-pad-bottom: var(--ds-space-3x);   /* Search/M size/Pad bottom */
  --ds-search-gap: var(--ds-space-2x);   /* Search/Gap */
  --ds-search-border-radius: var(--ds-space-3x);   /* Search/Border radius */
  --ds-search-text-size: var(--ds-typography-body-font-size-m);   /* Search/Text size */
  --ds-search-text-weight: var(--ds-typography-font-weight-regular);   /* Search/Text weight */
  --ds-color-search-focusvalue-text-color: var(--ds-color-text-primary);   /* Search/Focus+Value/Text color */
  --ds-color-search-background: var(--ds-color-shapes-default-variant);   /* Search/Background */
  --ds-color-search-focusvalue-border-color: var(--ds-color-stroke-accent);   /* Search/Focus+Value/Border Color */
  --ds-form-field-filled-focus-border-size-focus-2: var(--ds-stroke-0-5x);   /* Form field/Filled/Focus/Border size focus 2 */
  --ds-tab-lvl-1-pad-top: var(--ds-space-1x);   /* Tab/Lvl 1/Pad top */
  --ds-tab-gap: var(--ds-space-2x);   /* Tab/Gap */
  --ds-color-badge-text-color: var(--ds-color-text-inversive);   /* Badge/Text color */
  --ds-badge-border-radius: var(--ds-radius-circular);   /* Badge/Border radius */
  --ds-badge-counter-pad-left: var(--ds-space-1-5x);   /* Badge/Counter/Pad left */
  --ds-badge-counter-pad-right: var(--ds-space-1-5x);   /* Badge/Counter/Pad right */
  --ds-color-search-focus-border-color: var(--ds-color-stroke-accent);   /* Search/Focus/Border Color */
  --ds-color-search-focus-text-color: var(--ds-color-text-placeholder);   /* Search/Focus/Text color */
  --ds-color-search-focus-cursor-color: var(--ds-color-text-primary);   /* Search/Focus/Cursor color */
  --ds-color-search-default-border-color: var(--ds-color-stroke-default);   /* Search/Default/Border Color */
  --ds-search-border-size: var(--ds-stroke-0-25x);   /* Search/Border size */
  --ds-color-search-default-text-color: var(--ds-color-text-placeholder);   /* Search/Default/Text color */
  --ds-color-search-hover-border-color: var(--ds-color-stroke-hover);   /* Search/Hover/Border Color */
  --ds-color-search-hover-text-color: var(--ds-color-text-placeholder);   /* Search/Hover/Text color */
  --ds-color-search-disable-text-color: var(--ds-color-text-disable);   /* Search/Disable/Text color */
  --ds-color-search-disable-background: var(--ds-color-shapes-disable);   /* Search/Disable/Background */
  --ds-color-search-disable-icon-color: var(--ds-color-icon-disable);   /* Search/Disable/Icon color */
  --ds-color-tab-active-text-color-counter: var(--ds-color-text-accent);   /* Tab/Active/Text color counter */
  --ds-color-tab-inactive-text-color-counter: var(--ds-color-text-primary);   /* Tab/Inactive/Text color counter */
  --ds-color-search-completed-border-color: var(--ds-color-stroke-default);   /* Search/Completed/Border Color */
  --ds-color-search-completed-text-color: var(--ds-color-text-primary);   /* Search/Completed/Text color */
  --ds-color-tab-inactive-hover-background: var(--ds-color-shapes-hover);   /* Tab/Inactive/Hover/Background */
  --ds-color-tab-inactive-press-background: var(--ds-color-shapes-press);   /* Tab/Inactive/Press/Background */
  --ds-color-tab-disable-background: var(--ds-color-shapes-default-transparent);   /* Tab/Disable/Background */
  --ds-color-tab-disable-text-color: var(--ds-color-text-disable);   /* Tab/Disable/Text color */
  --ds-color-tab-disable-icon-color: var(--ds-color-icon-disable);   /* Tab/Disable/Icon color */
  --ds-color-input-number-control-background: var(--ds-color-shapes-default);   /* Input number/Control/Background */
  --ds-input-number-control-pad-left: var(--ds-space-2x);   /* Input number/Control/Pad left */
  --ds-input-number-control-pad-right: var(--ds-space-2x);   /* Input number/Control/Pad right */
  --ds-input-number-control-pad-top: var(--ds-space-2x);   /* Input number/Control/Pad top */
  --ds-input-number-control-pad-bottom: var(--ds-space-2x);   /* Input number/Control/Pad bottom */
  --ds-input-number-control-border-size: var(--ds-stroke-0-25x);   /* Input number/Control/Border size */
  --ds-input-number-control-border-radius: var(--ds-radius-2x);   /* Input number/Control/Border radius */
  --ds-input-number-control-gap: var(--ds-space-0-5x);   /* Input number/Control/Gap */
  --ds-input-number-control-text-size: var(--ds-typography-body-font-size-s);   /* Input number/Control/Text size */
  --ds-color-input-number-control-text-color: var(--ds-color-text-primary);   /* Input number/Control/Text color */
  --ds-input-number-control-text-weight: var(--ds-typography-font-weight-medium);   /* Input number/Control/Text weight */
  --ds-color-input-number-control-icon-color: var(--ds-color-icon-primary);   /* Input number/Control/Icon color */
  --ds-color-input-number-control-default-border-color: var(--ds-color-stroke-default);   /* Input number/Control/Default/Border color */
  --ds-color-input-number-control-hover-border-color: var(--ds-color-stroke-hover);   /* Input number/Control/Hover/Border color */
  --ds-color-input-number-control-focus-border-color: var(--ds-color-stroke-accent);   /* Input number/Control/Focus/Border color */
  --ds-color-input-number-control-error-border-color: var(--ds-color-stroke-negative);   /* Input number/Control/Error/Border color */
  --ds-color-input-number-control-error-icon-color: var(--ds-color-icon-negative);   /* Input number/Control/Error/Icon color */
  --ds-color-input-number-control-disable-border-color: var(--ds-color-stroke-disable);   /* Input number/Control/Disable/Border color */
  --ds-color-input-number-control-disable-text-color: var(--ds-color-text-disable);   /* Input number/Control/Disable/Text color */
  --ds-color-input-number-control-disable-icon-color: var(--ds-color-icon-disable);   /* Input number/Control/Disable/Icon color */
  --ds-color-tab-active-hover-background: var(--ds-color-shapes-hover);   /* Tab/Active/Hover/Background */
  --ds-color-tab-active-press-background: var(--ds-color-shapes-press);   /* Tab/Active/Press/Background */
  --ds-divider-size-l: var(--ds-stroke-0-5x);   /* Divider/Size L */
  --ds-color-tab-active-default-background: var(--ds-color-shapes-default-transparent);   /* Tab/Active/Default/Background */
  --ds-hint-header-pad-left: var(--ds-space-3x);   /* Hint/Header/Pad left */
  --ds-hint-header-pad-right: var(--ds-space-3x);   /* Hint/Header/Pad right */
  --ds-hint-header-pad-top: var(--ds-space-2x);   /* Hint/Header/Pad top */
  --ds-hint-header-pad-bottom: var(--ds-space-1x);   /* Hint/Header/Pad bottom */
  --ds-hint-header-gap: var(--ds-space-2x);   /* Hint/Header/Gap */
  --ds-hint-border-radius: var(--ds-space-2x);   /* Hint/Border radius */
  --ds-hint-header-text-size: var(--ds-typography-body-font-size-s);   /* Hint/Header/Text size */
  --ds-hint-header-text-weight: var(--ds-typography-font-weight-medium);   /* Hint/Header/Text weight */
  --ds-color-hint-header-text-color: var(--ds-color-text-inversive);   /* Hint/Header/Text color */
  --ds-color-hint-header-neutral-icon-color: var(--ds-color-icon-inversive);   /* Hint/Header/Neutral/Icon color */
  --ds-color-hint-header-accent-icon-color: var(--ds-color-icon-accent);   /* Hint/Header/Accent/Icon color */
  --ds-color-hint-header-positive-icon-color: var(--ds-color-icon-positive);   /* Hint/Header/Positive/Icon color */
  --ds-color-hint-header-warning-icon-color: var(--ds-color-icon-warning);   /* Hint/Header/Warning/Icon color */
  --ds-color-hint-header-negative-icon-color: var(--ds-color-icon-negative);   /* Hint/Header/Negative/Icon color */
  --ds-color-hint-background-color: var(--ds-color-surface-snack-tooltip);   /* Hint/Background color */
  --ds-color-hint-header-icon-color: var(--ds-color-icon-inversive);   /* Hint/Header/Icon color */
  --ds-color-hint-content-text-color: var(--ds-color-text-inversive);   /* Hint/Content/Text color */
  --ds-color-hint-content-icon-color: var(--ds-color-icon-inversive);   /* Hint/Content/Icon color */
  --ds-hint-content-gap: var(--ds-space-2x);   /* Hint/Content/Gap */
  --ds-hint-content-pad-top: var(--ds-space-2x);   /* Hint/Content/Pad top */
  --ds-hint-content-pad-right: var(--ds-space-3x);   /* Hint/Content/Pad right */
  --ds-hint-content-pad-bottom: var(--ds-space-2x);   /* Hint/Content/Pad bottom */
  --ds-hint-content-pad-left: var(--ds-space-3x);   /* Hint/Content/Pad left */
  --ds-hint-content-text-weight: var(--ds-typography-font-weight-regular);   /* Hint/Content/Text weight */
  --ds-hint-content-text-size: var(--ds-typography-caption-font-size-l);   /* Hint/Content/Text size */
  --ds-hint-footer-pad-left: var(--ds-space-3x);   /* Hint/Footer/Pad left */
  --ds-hint-footer-pad-right: var(--ds-space-3x);   /* Hint/Footer/Pad right */
  --ds-hint-footer-pad-top: var(--ds-space-4x);   /* Hint/Footer/Pad top */
  --ds-hint-footer-pad-bottom: var(--ds-space-3x);   /* Hint/Footer/Pad bottom */
  --ds-hint-footer-gap: var(--ds-space-3x);   /* Hint/Footer/Gap */
  --ds-color-hint-footer-text-color: var(--ds-color-text-inversive);   /* Hint/Footer/Text color */
  --ds-hint-footer-title-size: var(--ds-typography-body-font-size-s);   /* Hint/Footer/Title size */
  --ds-hint-footer-title-weight: var(--ds-typography-font-weight-medium);   /* Hint/Footer/Title weight */
  --ds-list-item-pad-left: var(--ds-space-4x);   /* List item/Pad left */
  --ds-list-item-pad-right: var(--ds-space-4x);   /* List item/Pad right */
  --ds-list-item-pad-top: var(--ds-space-2x);   /* List item/Pad top */
  --ds-list-item-pad-bottom: var(--ds-space-2x);   /* List item/Pad bottom */
  --ds-color-list-item-text-color: var(--ds-color-text-primary);   /* List item/Text color */
  --ds-list-item-text-weight: var(--ds-typography-font-weight-regular);   /* List item/Text weight */
  --ds-list-item-gap: var(--ds-space-2x);   /* List item/Gap */
  --ds-color-list-item-icon-color: var(--ds-color-icon-primary);   /* List item/Icon color */
  --ds-color-list-item-default-background: var(--ds-color-surface-default);   /* List item/Default/Background */
  --ds-color-list-item-hover-background: var(--ds-color-surface-hover);   /* List item/Hover/Background */
  --ds-color-list-item-press-background: var(--ds-color-surface-press);   /* List item/Press/Background */
  --ds-color-list-item-selected-background: var(--ds-color-surface-default);   /* List item/Selected/Background */
  --ds-color-list-item-negative-background: var(--ds-color-shapes-default);   /* List item/Negative/Background */
  --ds-color-list-item-disable-background: var(--ds-color-surface-default);   /* List item/Disable/Background */
  --ds-color-list-item-text-label-color: var(--ds-color-text-secondary);   /* List item/Text label color */
  --ds-color-list-item-disable-icon-color: var(--ds-color-icon-disable);   /* List item/Disable/Icon color */
  --ds-color-list-item-disable-label-text-color: var(--ds-color-text-disable);   /* List item/Disable/Label text color */
  --ds-color-list-item-disable-text-color: var(--ds-color-text-disable);   /* List item/Disable/Text color */
  --ds-color-list-item-negative-icon-color: var(--ds-color-icon-negative);   /* List item/Negative/Icon color */
  --ds-color-list-item-negative-label-text-color: var(--ds-color-text-negative);   /* List item/Negative/Label text color */
  --ds-color-list-item-negative-text-color: var(--ds-color-text-negative);   /* List item/Negative/Text color */
  --ds-color-list-item-selected-icon-color: var(--ds-color-icon-accent);   /* List item/Selected/Icon color */
  --ds-color-divider-solid-selected-color: var(--ds-color-stroke-accent);   /* Divider/Solid/Selected/Color */
  --ds-color-tab-disable-divider: var(--ds-color-stroke-disable);   /* Tab/Disable/Divider */
  --ds-color-divider-solid-disable-color: var(--ds-color-stroke-disable);   /* Divider/Solid/Disable/Color */
  --ds-tabs-gap: var(--ds-space-0);   /* Tabs/Gap */
  --ds-search-s-size-pad-left: var(--ds-space-3x);   /* Search/S size/Pad left */
  --ds-search-s-size-pad-right: var(--ds-space-3x);   /* Search/S size/Pad right */
  --ds-search-s-size-pad-top: var(--ds-space-2x);   /* Search/S size/Pad top */
  --ds-search-s-size-pad-bottom: var(--ds-space-2x);   /* Search/S size/Pad bottom */
  --ds-banners-vertical-gap: var(--ds-space-2x);   /* Banners/Vertical/Gap */
  --ds-banners-vertical-gap-container: var(--ds-space-2x);   /* Banners/Vertical/Gap container */
  --ds-menu-pad-top: var(--ds-space-2x);   /* Menu/Pad top */
  --ds-menu-pad-bottom: var(--ds-space-2x);   /* Menu/Pad bottom */
  --ds-menu-border-radius: var(--ds-radius-2x);   /* Menu/Border radius */
  --ds-color-menu-background: var(--ds-color-shapes-default);   /* Menu/Background */
  --ds-icon-size-gap-group-2x: var(--ds-space-2x);   /* Icon size/Gap group 2x */
  --ds-icon-size-gap-group-4x: var(--ds-space-4x);   /* Icon size/Gap group 4x */
  --ds-scroll-pad-bottom: var(--ds-space-0-5x);   /* Scroll/Pad bottom */
  --ds-scroll-pad-top: var(--ds-space-0-5x);   /* Scroll/Pad top */
  --ds-color-scroll-background: var(--ds-palette-neutral-transparent);   /* Scroll/Background */
  --ds-menu-gap: var(--ds-space-0);   /* Menu/Gap */
  --ds-menu-gap-list: var(--ds-space-0);   /* Menu/Gap list */
  --ds-button-group-default-pad-bottom: var(--ds-space-0);   /* Button group/Default/Pad bottom */
  --ds-button-group-default-pad-top: var(--ds-space-0);   /* Button group/Default/Pad top */
  --ds-button-group-default-pad-right: var(--ds-space-0);   /* Button group/Default/Pad right */
  --ds-button-group-default-pad-left: var(--ds-space-0);   /* Button group/Default/Pad left */
  --ds-button-group-margins-pad-bottom: var(--ds-space-2x);   /* Button group/Margins/Pad bottom */
  --ds-button-group-margins-pad-top: var(--ds-space-2x);   /* Button group/Margins/Pad top */
  --ds-button-group-margins-pad-right: var(--ds-space-4x);   /* Button group/Margins/Pad right */
  --ds-button-group-margins-pad-left: var(--ds-space-4x);   /* Button group/Margins/Pad left */
  --ds-color-stepper-background: var(--ds-color-surface-default-transparent);   /* Stepper/Background */
  --ds-color-stepper-default-background: var(--ds-palette-neutral-10);   /* Stepper/Default/Background */
  --ds-color-stepper-hover-background: var(--ds-palette-accent-10);   /* Stepper/Hover/Background */
  --ds-color-stepper-hover-text-color: var(--ds-color-text-accent);   /* Stepper/Hover/Text color */
  --ds-color-stepper-hover-icon-color: var(--ds-color-icon-accent);   /* Stepper/Hover/Icon color */
  --ds-color-stepper-press-background: var(--ds-palette-accent-50);   /* Stepper/Press/Background */
  --ds-color-stepper-press-text-color: var(--ds-color-brand-accent-dark);   /* Stepper/Press/Text color */
  --ds-color-stepper-press-icon-color: var(--ds-color-icon-accent);   /* Stepper/Press/Icon color */
  --ds-color-stepper-selected-background: var(--ds-palette-accent-10);   /* Stepper/Selected/Background */
  --ds-color-stepper-selected-text-color: var(--ds-color-text-accent);   /* Stepper/Selected/Text color */
  --ds-color-stepper-selected-icon-color: var(--ds-color-icon-accent);   /* Stepper/Selected/Icon color */
  --ds-color-stepper-error-background: var(--ds-palette-negative-10);   /* Stepper/Error/Background */
  --ds-color-stepper-error-text-color: var(--ds-color-text-negative);   /* Stepper/Error/Text color */
  --ds-color-stepper-error-icon-color: var(--ds-color-icon-negative);   /* Stepper/Error/Icon color */
  --ds-color-stepper-disable-background: var(--ds-palette-neutral-10);   /* Stepper/Disable/Background */
  --ds-color-stepper-disable-text-color: var(--ds-color-text-disable);   /* Stepper/Disable/Text color */
  --ds-color-stepper-disable-icon-color: var(--ds-color-icon-disable);   /* Stepper/Disable/Icon color */
  --ds-color-stepper-default-text-color: var(--ds-color-text-primary);   /* Stepper/Default/Text color */
  --ds-stepper-text-weight: var(--ds-typography-font-weight-regular);   /* Stepper/Text weight */
  --ds-stepper-gap: var(--ds-space-2x);   /* Stepper/Gap */
  --ds-color-stepper-default-icon-color: var(--ds-color-icon-primary);   /* Stepper/Default/Icon color */
  --ds-stepper-selected-border-size: var(--ds-stroke-0-25x);   /* Stepper/Selected/Border size */
  --ds-stepper-pad-left: var(--ds-space-2x);   /* Stepper/Pad left */
  --ds-stepper-pad-right: var(--ds-space-2x);   /* Stepper/Pad right */
  --ds-stepper-pad-bottom: var(--ds-space-1x);   /* Stepper/Pad bottom */
  --ds-stepper-pad-top: var(--ds-space-1x);   /* Stepper/Pad top */
  --ds-stepper-border-radius: var(--ds-radius-2x);   /* Stepper/Border radius */
  --ds-color-stepper-text-color: var(--ds-color-text-primary);   /* Stepper/Text color */
  --ds-stepper-text-size: var(--ds-typography-body-font-size-s);   /* Stepper/Text size */
  --ds-color-stepper-icon-color: var(--ds-color-icon-primary);   /* Stepper/Icon color */
  --ds-color-stepper-selected-border-color: var(--ds-color-stroke-accent);   /* Stepper/Selected/Border color */
  --ds-status-pad-bottom-text: var(--ds-space-0);   /* Status/Pad bottom text */
  --ds-status-pad-top-text: var(--ds-space-0);   /* Status/Pad top text */
  --ds-status-pad-right-text: var(--ds-space-0);   /* Status/Pad right text */
  --ds-status-pad-left-text: var(--ds-space-0);   /* Status/Pad left text */
  --ds-chips-s-size-icon-size: var(--ds-icon-size-size-4x);   /* Chips/S size/Icon size */
  --ds-list-item-text-size: var(--ds-typography-body-font-size-s);   /* List item/Text size */
  --ds-list-item-text-size-label: var(--ds-typography-caption-font-size-l);   /* List item/Text size label */
  --ds-menu-item-pad-left: var(--ds-space-4x);   /* Menu item/Pad left */
  --ds-menu-item-pad-right: var(--ds-space-4x);   /* Menu item/Pad right */
  --ds-menu-item-pad-top: var(--ds-space-2x);   /* Menu item/Pad top */
  --ds-menu-item-pad-bottom: var(--ds-space-2x);   /* Menu item/Pad bottom */
  --ds-color-menu-item-default-background: var(--ds-color-surface-default);   /* Menu item/Default/Background */
  --ds-color-menu-item-hover-background: var(--ds-color-surface-hover);   /* Menu item/Hover/Background */
  --ds-color-menu-item-press-background: var(--ds-color-surface-press);   /* Menu item/Press/Background */
  --ds-color-menu-item-selected-background: var(--ds-color-shapes-default);   /* Menu item/Selected/Background */
  --ds-color-menu-item-selected-icon-color: var(--ds-color-icon-accent);   /* Menu item/Selected/Icon color */
  --ds-color-menu-item-negative-background: var(--ds-color-shapes-default);   /* Menu item/Negative/Background */
  --ds-color-menu-item-negative-text-color: var(--ds-color-text-negative);   /* Menu item/Negative/Text color */
  --ds-color-menu-item-negative-label-text-color: var(--ds-color-text-negative);   /* Menu item/Negative/Label text color */
  --ds-color-menu-item-negative-icon-color: var(--ds-color-icon-negative);   /* Menu item/Negative/Icon color */
  --ds-color-menu-item-disable-background: var(--ds-color-surface-default);   /* Menu item/Disable/Background */
  --ds-color-menu-item-disable-text-color: var(--ds-color-text-disable);   /* Menu item/Disable/Text color */
  --ds-color-menu-item-disable-label-text-color: var(--ds-color-text-disable);   /* Menu item/Disable/Label text color */
  --ds-color-menu-item-disable-icon-color: var(--ds-color-icon-disable);   /* Menu item/Disable/Icon color */
  --ds-menu-item-text-size: var(--ds-typography-body-font-size-s);   /* Menu item/Text size */
  --ds-color-menu-item-text-color: var(--ds-color-text-primary);   /* Menu item/Text color */
  --ds-menu-item-text-size-label: var(--ds-typography-caption-font-size-l);   /* Menu item/Text size label */
  --ds-color-menu-item-text-label-color: var(--ds-color-text-secondary);   /* Menu item/Text label color */
  --ds-menu-item-text-weight: var(--ds-typography-font-weight-regular);   /* Menu item/Text weight */
  --ds-menu-item-gap: var(--ds-space-2x);   /* Menu item/Gap */
  --ds-color-menu-item-icon-color: var(--ds-color-icon-primary);   /* Menu item/Icon color */
  --ds-color-expansion-panel-collaps-press-background: var(--ds-color-surface-press);   /* Expansion panel/Collaps/Press/Background */
  --ds-color-expansion-panel-collaps-disable-background: var(--ds-color-surface-disable);   /* Expansion panel/Collaps/Disable/Background */
  --ds-color-expansion-panel-collaps-disable-text-color: var(--ds-color-text-disable);   /* Expansion panel/Collaps/Disable/Text color */
  --ds-color-expansion-panel-collaps-disable-border-color: var(--ds-color-stroke-disable);   /* Expansion panel/Collaps/Disable/Border color */
  --ds-color-expansion-panel-content-background: var(--ds-color-surface-default);   /* Expansion panel/Content/Background */
  --ds-expansion-panel-collaps-gap-group: var(--ds-space-2x);   /* Expansion panel/Collaps/Gap group */
  --ds-hint-content-gap-content: var(--ds-space-1x);   /* Hint/Content/Gap content */
  --ds-search-xs-size-pad-left: var(--ds-space-3x);   /* Search/XS size/Pad left */
  --ds-search-xs-size-pad-right: var(--ds-space-3x);   /* Search/XS size/Pad right */
  --ds-search-xs-size-pad-top: var(--ds-space-2x);   /* Search/XS size/Pad top */
  --ds-search-xs-size-pad-bottom: var(--ds-space-2x);   /* Search/XS size/Pad bottom */
  --ds-sidenav-footer-l1-collapsed-gap: var(--ds-space-0);   /* Sidenav/Footer/L1/Collapsed/Gap */
  --ds-sidenav-header-l2-gap: var(--ds-space-2x);   /* Sidenav/Header/L2/Gap */
  --ds-color-sidenav-header-l1-background: var(--ds-palette-contrast-3-950);   /* Sidenav/Header/L1/Background */
  --ds-color-sidenav-header-l2-background: var(--ds-color-surface-default);   /* Sidenav/Header/L2/Background */
  --ds-stepper-gap-line: var(--ds-space-2x);   /* Stepper/Gap line */
  --ds-stepper-divider-width: var(--ds-size-2x);   /* Stepper/Divider width */
  --ds-color-stepper-divider-color: var(--ds-palette-neutral-700);   /* Stepper/Divider color */
  --ds-stepper-text-weight-button: var(--ds-typography-font-weight-medium);   /* Stepper/Text weight button */
  --ds-stepper-gap-button: var(--ds-space-4x);   /* Stepper/Gap button */
  --ds-color-search-hover-background-xs: var(--ds-palette-accent-100);   /* Search/Hover/Background XS */
  --ds-color-search-default-background-xs: var(--ds-palette-accent-50);   /* Search/Default/Background XS */
  --ds-hint-arrow-width: var(--ds-space-2x);   /* Hint/Arrow/Width */
  --ds-hint-arrow-height: var(--ds-space-1x);   /* Hint/Arrow/Height */
  --ds-tab-lvv-2-pad-left: var(--ds-space-3x);   /* Tab/Lvv 2/Pad left */
  --ds-tab-lvv-2-pad-right: var(--ds-space-3x);   /* Tab/Lvv 2/Pad right */
  --ds-tab-lvv-2-pad-top: var(--ds-space-1x);   /* Tab/Lvv 2/Pad top */
  --ds-color-divider-dashed-selected-color: var(--ds-color-stroke-accent);   /* Divider/Dashed/Selected/Color */
  --ds-color-divider-dashed-disable-color: var(--ds-color-stroke-disable);   /* Divider/Dashed/Disable/Color */
  --ds-tab-lvv-2-text-weight: var(--ds-typography-font-weight-regular);   /* Tab/Lvv 2/Text weight */
  --ds-sidenav-header-pad-bottom: var(--ds-space-3x);   /* Sidenav/Header/Pad bottom */
  --ds-sidenav-header-pad-top: var(--ds-space-3x);   /* Sidenav/Header/Pad top */
  --ds-sidenav-header-l1-collapsed-pad-right: var(--ds-space-3-5x);   /* Sidenav/Header/L1/Collapsed/Pad right */
  --ds-sidenav-header-l1-collapsed-pad-left: var(--ds-space-3-5x);   /* Sidenav/Header/L1/Collapsed/Pad left */
  --ds-sidenav-header-l1-expanded-pad-right: var(--ds-space-4x);   /* Sidenav/Header/L1/Expanded/Pad right */
  --ds-sidenav-header-l1-expanded-pad-left: var(--ds-space-4x);   /* Sidenav/Header/L1/Expanded/Pad left */
  --ds-sidenav-header-l2-gap-content: var(--ds-space-2x);   /* Sidenav/Header/L2/Gap content */
  --ds-sidenav-header-l2-pad-right: var(--ds-space-4x);   /* Sidenav/Header/L2/Pad right */
  --ds-sidenav-header-l2-pad-left: var(--ds-space-4x);   /* Sidenav/Header/L2/Pad left */
  --ds-sidenav-control-pad-top: var(--ds-space-2x);   /* Sidenav/Control/Pad top */
  --ds-sidenav-control-pad-bottom: var(--ds-space-3x);   /* Sidenav/Control/Pad bottom */
  --ds-color-sidenav-control-background: var(--ds-palette-contrast-3-950);   /* Sidenav/Control/Background */
  --ds-color-sidenav-control-background-hover: var(--ds-palette-contrast-3-900);   /* Sidenav/Control/Background hover */
  --ds-color-sidenav-control-background-press: var(--ds-palette-contrast-3-900);   /* Sidenav/Control/Background press */
  --ds-sidenav-control-pad-left: var(--ds-space-4x);   /* Sidenav/Control/Pad left */
  --ds-sidenav-control-pad-right: var(--ds-space-4x);   /* Sidenav/Control/Pad right */
  --ds-sidenav-header-l2-text-size: var(--ds-typography-body-font-size-m);   /* Sidenav/Header/L2/Text size */
  --ds-color-sidenav-header-l2-text-color: var(--ds-color-text-primary);   /* Sidenav/Header/L2/Text color */
  --ds-sidenav-header-l2-text-weight: var(--ds-typography-font-weight-medium);   /* Sidenav/Header/L2/Text weight */
  --ds-sidenav-element-gap: var(--ds-space-0);   /* Sidenav/Element/Gap */
  --ds-color-sidenav-element-collaps-icon-background: var(--ds-palette-contrast-3-900);   /* Sidenav/Element/Collaps icon/Background */
  --ds-sidenav-control-collapsed-gap: var(--ds-space-0);   /* Sidenav/Control/Collapsed/Gap */
  --ds-sidenav-control-expanded-gap: var(--ds-space-0);   /* Sidenav/Control/Expanded/Gap */
  --ds-sidenav-control-expanded-gap-content: var(--ds-space-2x);   /* Sidenav/Control/Expanded/Gap content */
  --ds-color-sidenav-item-l1-background: var(--ds-palette-contrast-3-950);   /* Sidenav/Item/L1/Background */
  --ds-color-sidenav-item-l1-background-hover: var(--ds-palette-contrast-3-900);   /* Sidenav/Item/L1/Background hover */
  --ds-color-sidenav-item-l1-background-selected: var(--ds-palette-contrast-3-800);   /* Sidenav/Item/L1/Background selected */
  --ds-sidenav-item-l1-pad-left: var(--ds-space-4x);   /* Sidenav/Item/L1/Pad left */
  --ds-sidenav-item-l1-pad-right: var(--ds-space-4x);   /* Sidenav/Item/L1/Pad right */
  --ds-sidenav-item-l2-gap-container: var(--ds-space-2x);   /* Sidenav/Item/L2/Gap container */
  --ds-sidenav-item-l2-gap-content: var(--ds-space-2x);   /* Sidenav/Item/L2/Gap content */
  --ds-sidenav-item-l2-pad-left: var(--ds-space-4x);   /* Sidenav/Item/L2/Pad left */
  --ds-sidenav-item-l2-pad-right: var(--ds-space-4x);   /* Sidenav/Item/L2/Pad right */
  --ds-color-sidenav-item-l2-background: var(--ds-color-surface-default);   /* Sidenav/Item/L2/Background */
  --ds-color-sidenav-item-l2-text-color: var(--ds-color-text-primary);   /* Sidenav/Item/L2/Text color */
  --ds-sidenav-item-l2-text-size: var(--ds-typography-caption-font-size-l);   /* Sidenav/Item/L2/Text size */
  --ds-sidenav-item-l2-text-weight: var(--ds-typography-font-weight-medium);   /* Sidenav/Item/L2/Text weight */
  --ds-sidenav-item-l1-text-weight: var(--ds-typography-font-weight-regular);   /* Sidenav/Item/L1/Text weight */
  --ds-sidenav-item-l1-text-size: var(--ds-typography-caption-font-size-l);   /* Sidenav/Item/L1/Text size */
  --ds-color-sidenav-item-l1-text-color: var(--ds-color-text-inversive);   /* Sidenav/Item/L1/Text color */
  --ds-color-sidenav-item-l2-background-selected: var(--ds-color-brand-accent-lighter);   /* Sidenav/Item/L2/Background selected */
  --ds-color-sidenav-item-l2-background-hover: var(--ds-color-brand-accent-super-lightest);   /* Sidenav/Item/L2/Background hover */
  --ds-sidenav-item-l2-pad-bottom: var(--ds-space-2-5x);   /* Sidenav/Item/L2/Pad bottom */
  --ds-sidenav-item-l2-pad-top: var(--ds-space-2-5x);   /* Sidenav/Item/L2/Pad top */
  --ds-sidenav-item-l3-gap: var(--ds-space-2x);   /* Sidenav/Item/L3/Gap */
  --ds-sidenav-item-l3-pad-left: var(--ds-space-8x);   /* Sidenav/Item/L3/Pad left */
  --ds-sidenav-item-l3-pad-right: var(--ds-space-4x);   /* Sidenav/Item/L3/Pad right */
  --ds-sidenav-item-l3-pad-top: var(--ds-space-2x);   /* Sidenav/Item/L3/Pad top */
  --ds-sidenav-item-l3-pad-bottom: var(--ds-space-2x);   /* Sidenav/Item/L3/Pad bottom */
  --ds-color-sidenav-item-l3-text-color: var(--ds-color-text-primary);   /* Sidenav/Item/L3/Text color */
  --ds-sidenav-item-l3-text-size: var(--ds-typography-caption-font-size-l);   /* Sidenav/Item/L3/Text size */
  --ds-sidenav-item-l3-text-weight: var(--ds-typography-font-weight-regular);   /* Sidenav/Item/L3/Text weight */
  --ds-color-sidenav-item-l3-background: var(--ds-color-surface-default);   /* Sidenav/Item/L3/Background */
  --ds-color-sidenav-item-l3-background-hover: var(--ds-color-brand-accent-super-lightest);   /* Sidenav/Item/L3/Background hover */
  --ds-color-sidenav-item-l3-background-selected: var(--ds-color-brand-accent-lighter);   /* Sidenav/Item/L3/Background selected */
  --ds-color-sidenav-item-l3-text-color-selected: var(--ds-color-text-accent);   /* Sidenav/Item/L3/Text color selected */
  --ds-sidenav-footer-l1-expanded-gap: var(--ds-space-0);   /* Sidenav/Footer/L1/Expanded/Gap */
  --ds-sidenav-footer-l2-gap: var(--ds-space-3x);   /* Sidenav/Footer/L2/Gap */
  --ds-sidenav-footer-l2-pad-bottom: var(--ds-space-3x);   /* Sidenav/Footer/L2/Pad bottom */
  --ds-sidenav-footer-l2-pad-right: var(--ds-space-4x);   /* Sidenav/Footer/L2/Pad right */
  --ds-sidenav-footer-l2-pad-top: var(--ds-space-3x);   /* Sidenav/Footer/L2/Pad top */
  --ds-sidenav-footer-l2-pad-left: var(--ds-space-4x);   /* Sidenav/Footer/L2/Pad left */
  --ds-color-sidenav-footer-l2-background: var(--ds-color-surface-default);   /* Sidenav/Footer/L2/Background */
  --ds-sidenav-footer-l2-text-weight: var(--ds-typography-font-weight-regular);   /* Sidenav/Footer/L2/Text weight */
  --ds-sidenav-footer-l2-text-size: var(--ds-typography-caption-font-size-l);   /* Sidenav/Footer/L2/Text size */
  --ds-color-sidenav-footer-l2-text-color: var(--ds-color-text-secondary);   /* Sidenav/Footer/L2/Text color */
  --ds-sidenav-footer-l2-logo-width: 38px;   /* Sidenav/Footer/L2/Logo width */
  --ds-sidenav-footer-l2-logo-height: 16px;   /* Sidenav/Footer/L2/Logo height */
  --ds-sidenav-sidebar-l1-gap: var(--ds-space-0);   /* Sidenav/Sidebar/L1/Gap */
  --ds-sidenav-sidebar-l2-gap: var(--ds-space-0);   /* Sidenav/Sidebar/L2/Gap */
  --ds-sidenav-sidebar-pad-top: var(--ds-space-2x);   /* Sidenav/Sidebar/Pad top */
  --ds-sidenav-sidebar-pad-bottom: var(--ds-space-2x);   /* Sidenav/Sidebar/Pad bottom */
  --ds-color-sidenav-sidebar-l1-background: var(--ds-palette-contrast-3-950);   /* Sidenav/Sidebar/L1/Background */
  --ds-chips-s-size-border-radius: var(--ds-radius-2x);   /* Chips/S size/Border radius */
  --ds-form-field-xs-size-border-radius: var(--ds-radius-0);   /* Form field/XS size/Border radius */
  --ds-button-xs-size-icon-size: var(--ds-icon-size-size-4x);   /* Button/XS size/Icon size */
  --ds-button-xs-size-gap: var(--ds-space-1x);   /* Button/XS size/Gap */
  --ds-button-xs-size-pad-left: var(--ds-space-1-5x);   /* Button/XS size/Pad left */
  --ds-button-xs-size-pad-right: var(--ds-space-1-5x);   /* Button/XS size/Pad right */
  --ds-button-xs-size-pad-top: var(--ds-space-1x);   /* Button/XS size/Pad top */
  --ds-button-xs-size-pad-bottom: var(--ds-space-1x);   /* Button/XS size/Pad bottom */
  --ds-button-xs-size-text-weight: var(--ds-typography-font-weight-medium);   /* Button/XS size/Text weight */
  --ds-button-xs-size-text-size: var(--ds-typography-caption-font-size-l);   /* Button/XS size/Text size */
  --ds-button-icon-xs-size-pad-left: var(--ds-space-1x);   /* Button icon/XS size/Pad left */
  --ds-button-icon-xs-size-pad-right: var(--ds-space-1x);   /* Button icon/XS size/Pad right */
  --ds-button-icon-xs-size-pad-top: var(--ds-space-1x);   /* Button icon/XS size/Pad top */
  --ds-button-icon-xs-size-pad-bottom: var(--ds-space-1x);   /* Button icon/XS size/Pad bottom */
  --ds-list-gap: var(--ds-space-0);   /* List/Gap */
  --ds-list-gap-list: var(--ds-space-0);   /* List/Gap list */
  --ds-list-pad-top: var(--ds-space-2x);   /* List/Pad top */
  --ds-list-pad-bottom: var(--ds-space-2x);   /* List/Pad bottom */
  --ds-list-border-radius: var(--ds-radius-0);   /* List/Border radius */
  --ds-color-list-background: var(--ds-color-shapes-default);   /* List/Background */
  --ds-scroll-pad-right: var(--ds-space-0-5x);   /* Scroll/Pad right */
  --ds-scroll-pad-left: var(--ds-space-0-5x);   /* Scroll/Pad left */
  --ds-color-menu-item-selected-back-selected: var(--ds-palette-accent-10);   /* Menu item/Selected/Back selected */
  --ds-menu-item-pad-left-s: 32px;   /* Menu item/Pad left S */
  --ds-menu-item-pad-left-m: 48px;   /* Menu item/Pad left M */
  --ds-color-list-item-selected-back-selected: var(--ds-palette-accent-10);   /* List item/Selected/Back selected */
  --ds-color-form-field-input-label-text-color: var(--ds-color-text-secondary);   /* Form field/Input label text color */
  --ds-form-field-pad-textarea-top: var(--ds-space-1x);   /* Form field/Pad textarea top */
  --ds-form-field-pad-textarea-bottom: var(--ds-space-2x);   /* Form field/Pad textarea bottom */
  --ds-color-status-contrast-4-filled-background: var(--ds-palette-contrast-4-5);   /* Status/Contrast-4/Filled/Background */
  --ds-color-status-contrast-4-filled-text-color: var(--ds-palette-contrast-4-950);   /* Status/Contrast-4/Filled/Text color */
  --ds-color-status-contrast-4-text-text-color: var(--ds-color-brand-contrast-4-dark);   /* Status/Contrast-4/Text/Text color */
  --ds-snackbar-cont-size: var(--ds-typography-caption-font-size-l);   /* Snackbar/Cont size */
  --ds-snackbar-cont-weight: var(--ds-typography-font-weight-regular);   /* Snackbar/Cont weight */
  --ds-color-snackbar-complex-light-background: var(--ds-color-surface-default);   /* Snackbar/Complex/Light/Background */
  --ds-snackbar-max-width: 370px;   /* Snackbar/Max width */
  --ds-color-snackbar-complex-light-text-color: var(--ds-color-text-primary);   /* Snackbar/Complex/Light/Text color */
  --ds-color-snackbar-progress-color: var(--ds-color-icon-accent);   /* Snackbar/Progress color */
  --ds-dialog-header-pad-right: var(--ds-space-6x);   /* Dialog/Header/Pad right */
  --ds-dialog-header-pad-left: var(--ds-space-6x);   /* Dialog/Header/Pad left */
  --ds-dialog-content-pad-left: var(--ds-space-6x);   /* Dialog/Content/Pad left */
  --ds-dialog-content-pad-right: var(--ds-space-6x);   /* Dialog/Content/Pad right */
  --ds-dialog-footer-pad-right: var(--ds-space-6x);   /* Dialog/Footer/Pad right */
  --ds-dialog-footer-pad-left: var(--ds-space-6x);   /* Dialog/Footer/Pad left */
  --ds-sidenav-item-l1-pad-bottom: var(--ds-space-3x);   /* Sidenav/Item/L1/Pad bottom */
  --ds-sidenav-item-l1-pad-top: var(--ds-space-3x);   /* Sidenav/Item/L1/Pad top */
  --ds-color-sidenav-item-l1-indicator: var(--ds-color-icon-inversive);   /* Sidenav/Item/L1/Indicator */
  --ds-color-sidenav-item-l1-element-left: var(--ds-color-icon-inversive);   /* Sidenav/Item/L1/Element left */
  --ds-sidenav-item-l1-gap-container: var(--ds-space-2x);   /* Sidenav/Item/L1/Gap container */
  --ds-color-sidenav-item-l1-element-right: var(--ds-color-icon-inversive);   /* Sidenav/Item/L1/Element right */
  --ds-sidenav-item-l1-gap-content: var(--ds-space-2x);   /* Sidenav/Item/L1/Gap content */
  --ds-color-sidenav-item-l3-indicator: var(--ds-color-icon-accent);   /* Sidenav/Item/L3/Indicator */
  --ds-sidenav-control-text-weight: var(--ds-typography-font-weight-regular);   /* Sidenav/Control/Text weight */
  --ds-sidenav-control-text-size: var(--ds-typography-caption-font-size-m);   /* Sidenav/Control/Text size */
  --ds-color-sidenav-control-text-color: var(--ds-color-text-inversive);   /* Sidenav/Control/Text color */
  --ds-color-sidenav-control-divider: var(--ds-palette-contrast-3-900);   /* Sidenav/Control/Divider */
  --ds-sidenav-header-l1-expanded-gap: 92px;   /* Sidenav/Header/L1/Expanded/Gap */
  --ds-color-sidenav-header-l1-expanded-logo: var(--ds-color-shapes-default);   /* Sidenav/Header/L1/Expanded/Logo */
  --ds-color-sidenav-header-l1-collapsed-logo: var(--ds-color-shapes-default);   /* Sidenav/Header/L1/Collapsed/Logo */
  --ds-color-sidenav-header-l1-collapsed-logo-element: var(--ds-palette-negative-500);   /* Sidenav/Header/L1/Collapsed/Logo element */
  --ds-color-sidenav-footer-l2-logo: var(--ds-palette-negative-500);   /* Sidenav/Footer/L2/Logo */
  --ds-sidenav-header-l1-expanded-logo-width: 56px;   /* Sidenav/Header/L1/Expanded/Logo width */
  --ds-sidenav-header-l1-expanded-logo-height: 24px;   /* Sidenav/Header/L1/Expanded/Logo height */
  --ds-color-sidenav-sidebar-l2-background: var(--ds-color-surface-default);   /* Sidenav/Sidebar/L2/Background */
  --ds-sidenav-sidebar-info-pad-top: var(--ds-space-4x);   /* Sidenav/Sidebar/Info/Pad top */
  --ds-color-sidenav-sidebar-info-background-container: var(--ds-color-surface-default-variant);   /* Sidenav/Sidebar/Info/Background container */
  --ds-sidenav-sidebar-info-pad-bottom: var(--ds-space-4x);   /* Sidenav/Sidebar/Info/Pad bottom */
  --ds-sidenav-sidebar-info-pad-left: var(--ds-space-2x);   /* Sidenav/Sidebar/Info/Pad left */
  --ds-sidenav-sidebar-info-pad-right: var(--ds-space-2x);   /* Sidenav/Sidebar/Info/Pad right */
  --ds-color-sidenav-item-l3-background-active: var(--ds-color-brand-accent-lighter);   /* Sidenav/Item/L3/Background active */
  --ds-sidenav-sidebar-info-pad-left-container: var(--ds-space-3x);   /* Sidenav/Sidebar/Info/Pad left container */
  --ds-sidenav-sidebar-info-pad-right-container: var(--ds-space-3x);   /* Sidenav/Sidebar/Info/Pad right container */
  --ds-sidenav-sidebar-info-pad-top-container: var(--ds-space-3x);   /* Sidenav/Sidebar/Info/Pad top container */
  --ds-sidenav-sidebar-info-pad-bottom-container: var(--ds-space-3x);   /* Sidenav/Sidebar/Info/Pad bottom container */
  --ds-sidenav-sidebar-info-gap-container: var(--ds-space-4x);   /* Sidenav/Sidebar/Info/Gap container */
  --ds-table-pad-top: var(--ds-space-3x);   /* Table/Pad top */
  --ds-table-pad-left: var(--ds-space-8x);   /* Table/Pad left */
  --ds-table-pad-right: var(--ds-space-8x);   /* Table/Pad right */
  --ds-table-pad-bottom: var(--ds-space-3x);   /* Table/Pad bottom */
  --ds-table-footer-pad-bottom: var(--ds-space-3x);   /* Table footer/Pad bottom */
  --ds-table-footer-pad-top: var(--ds-space-3x);   /* Table footer/Pad top */
  --ds-table-footer-pad-right: var(--ds-space-8x);   /* Table footer/Pad right */
  --ds-table-footer-pad-left: var(--ds-space-8x);   /* Table footer/Pad left */
  --ds-color-table-footer-background: var(--ds-color-table-surfase-default);   /* Table footer/Background */
  --ds-chips-input-gap-chips-input-frame: var(--ds-size-1x);   /* Chips input/Gap chips input frame */
  --ds-color-status-background: var(--ds-color-shapes-default-transparent);   /* Status/Background */
  --ds-chips-gap-group: var(--ds-space-2x);   /* Chips/Gap group */
  --ds-button-m-size-text-weight: var(--ds-typography-font-weight-medium);   /* Button/M size/Text weight */
  --ds-button-m-size-text-size: var(--ds-typography-body-font-size-s);   /* Button/M size/Text size */
  --ds-button-s-size-text-weight: var(--ds-typography-font-weight-medium);   /* Button/S size/Text weight */
  --ds-button-s-size-text-size: var(--ds-typography-body-font-size-s);   /* Button/S size/Text size */
  --ds-button-icon-s-size-icon-size: var(--ds-icon-size-size-5x);   /* Button icon/S size/Icon size */
  --ds-button-icon-xs-size-icon-size: var(--ds-icon-size-size-4x);   /* Button icon/XS size/Icon size */
  --ds-color-list-item-link-background: var(--ds-color-surface-default);   /* List item/Link/Background */
  --ds-color-list-item-link-text-color: var(--ds-color-text-accent);   /* List item/Link/Text color */
  --ds-checkbox-label-gap-support: var(--ds-space-1x);   /* Checkbox label/Gap support */
  --ds-checkbox-label-pad-left-support-0: var(--ds-space-0);   /* Checkbox label/Pad left support 0 */
  --ds-checkbox-label-pad-left-support-7x: var(--ds-space-7x);   /* Checkbox label/Pad left support 7x */
  --ds-radio-button-label-gap-support: var(--ds-space-1x);   /* Radio button label/Gap support */
  --ds-checkbox-group-vertical-gap-support: var(--ds-space-2x);   /* Checkbox group/Vertical/Gap support */
  --ds-checkbox-group-group-gap-support: var(--ds-space-2x);   /* Checkbox group/Group/Gap support */
  --ds-checkbox-group-horizontal-gap-support: var(--ds-space-2x);   /* Checkbox group/Horizontal/Gap support */
  --ds-radio-button-group-vertical-gap-support: var(--ds-space-2x);   /* Radio button group/Vertical/Gap support */
  --ds-radio-button-group-horizontal-gap-support: var(--ds-space-2x);   /* Radio button group/Horizontal/Gap support */
  --ds-radio-button-label-pad-left-support-7x: var(--ds-space-7x);   /* Radio button label/Pad left support 7x */
  --ds-radio-button-label-pad-left-support-0: var(--ds-space-0);   /* Radio button label/Pad left support 0 */
  --ds-slide-toggle-gap-support: var(--ds-space-1x);   /* Slide toggle/Gap support */
  --ds-slide-toggle-pad-left-support-10-5x: 42px;   /* Slide toggle/Pad left support 10,5x */
  --ds-slide-toggle-pad-left-support-0: var(--ds-space-0);   /* Slide toggle/Pad left support 0 */
  --ds-chips-s-size-gap: var(--ds-space-1x);   /* Chips/S size/Gap */
  --ds-color-slide-toggle-text-support-color: var(--ds-color-text-secondary);   /* Slide toggle/Text support color */
  --ds-slide-toggle-text-support-weight: var(--ds-typography-font-weight-regular);   /* Slide toggle/Text support weight */
  --ds-slide-toggle-text-support-size: var(--ds-typography-caption-font-size-l);   /* Slide toggle/Text support size */
  --ds-color-checkbox-label-text-support-color: var(--ds-color-text-secondary);   /* Checkbox label/Text support color */
  --ds-checkbox-label-text-support-weight: var(--ds-typography-font-weight-regular);   /* Checkbox label/Text support weight */
  --ds-checkbox-label-text-support-size: var(--ds-typography-caption-font-size-l);   /* Checkbox label/Text support size */
  --ds-color-checkbox-group-text-support-color: var(--ds-color-text-secondary);   /* Checkbox group/Text support color */
  --ds-checkbox-group-text-support-weight: var(--ds-typography-font-weight-regular);   /* Checkbox group/Text support weight */
  --ds-checkbox-group-text-support-size: var(--ds-typography-caption-font-size-l);   /* Checkbox group/Text support size */
  --ds-color-slide-toggle-text-error-color: var(--ds-color-text-negative);   /* Slide toggle/Text error color */
  --ds-color-radio-button-label-text-support-color: var(--ds-color-text-secondary);   /* Radio button label/Text support color */
  --ds-radio-button-label-text-support-weight: var(--ds-typography-font-weight-regular);   /* Radio button label/Text support weight */
  --ds-radio-button-label-text-support-size: var(--ds-typography-caption-font-size-l);   /* Radio button label/Text support size */
  --ds-color-radio-button-label-text-error-color: var(--ds-color-text-negative);   /* Radio button label/Text error color */
  --ds-radio-button-group-text-support-weight: var(--ds-typography-font-weight-regular);   /* Radio button group/Text support weight */
  --ds-radio-button-group-text-support-size: var(--ds-typography-caption-font-size-l);   /* Radio button group/Text support size */
  --ds-color-radio-button-group-text-support-color: var(--ds-color-text-secondary);   /* Radio button group/Text support color */
  --ds-color-radio-button-group-text-support-error-color: var(--ds-color-text-negative);   /* Radio button group/Text support error color */
  --ds-color-checkbox-label-text-support-error-color: var(--ds-color-text-negative);   /* Checkbox label/Text support error color */
  --ds-color-checkbox-group-text-support-error-color: var(--ds-color-text-negative);   /* Checkbox group/Text support error color */
  --ds-color-badge-accent-background: var(--ds-color-brand-accent-default);   /* Badge/Accent/Background */
  --ds-color-badge-negative-background: var(--ds-color-brand-negative-default);   /* Badge/Negative/Background */
  --ds-color-badge-positive-background: var(--ds-color-brand-positive-default);   /* Badge/Positive/Background */
  --ds-color-badge-warning-background: var(--ds-color-brand-warning-default);   /* Badge/Warning/Background */
  --ds-badge-point-height: var(--ds-size-2x);   /* Badge/Point/Height */
  --ds-badge-point-width: var(--ds-size-2x);   /* Badge/Point/Width */
  --ds-banners-border-dash-size: var(--ds-stroke-dash);   /* Banners/Border dash size */
  --ds-color-banners-border-color: var(--ds-color-stroke-accent);   /* Banners/Border color */
  --ds-banners-text-weight-m: var(--ds-typography-font-weight-medium);   /* Banners/Text weight M */
  --ds-color-text-ui-default-background: var(--ds-color-surface-default);   /* Text UI/Default/Background */
  --ds-color-text-ui-hover-background: var(--ds-color-surface-hover);   /* Text UI/Hover/Background */
  --ds-color-text-ui-press-background: var(--ds-color-surface-press);   /* Text UI/Press/Background */
  --ds-color-text-ui-selected-background: var(--ds-color-surface-default);   /* Text UI/Selected/Background */
  --ds-color-text-ui-link-background: var(--ds-color-surface-default);   /* Text UI/Link/Background */
  --ds-color-text-ui-link-text-color: var(--ds-color-text-accent);   /* Text UI/Link/Text color */
  --ds-color-text-ui-selected-back-selected: var(--ds-palette-accent-10);   /* Text UI/Selected/Back selected */
  --ds-color-text-ui-selected-icon-color: var(--ds-color-icon-accent);   /* Text UI/Selected/Icon color */
  --ds-color-text-ui-negative-background: var(--ds-color-shapes-default);   /* Text UI/Negative/Background */
  --ds-color-text-ui-negative-text-color: var(--ds-color-text-negative);   /* Text UI/Negative/Text color */
  --ds-color-text-ui-negative-label-text-color: var(--ds-color-text-negative);   /* Text UI/Negative/Label text color */
  --ds-color-text-ui-negative-icon-color: var(--ds-color-icon-negative);   /* Text UI/Negative/Icon color */
  --ds-color-text-ui-disable-background: var(--ds-color-surface-default);   /* Text UI/Disable/Background */
  --ds-color-text-ui-disable-text-color: var(--ds-color-text-disable);   /* Text UI/Disable/Text color */
  --ds-color-text-ui-disable-label-text-color: var(--ds-color-text-disable);   /* Text UI/Disable/Label text color */
  --ds-color-text-ui-disable-icon-color: var(--ds-color-icon-disable);   /* Text UI/Disable/Icon color */
  --ds-text-ui-gap: var(--ds-space-2x);   /* Text UI/Gap */
  --ds-text-ui-text-size: var(--ds-typography-body-font-size-s);   /* Text UI/Text size */
  --ds-color-text-ui-text-color: var(--ds-color-text-primary);   /* Text UI/Text color */
  --ds-text-ui-text-size-label: var(--ds-typography-caption-font-size-l);   /* Text UI/Text size label */
  --ds-color-text-ui-text-label-color: var(--ds-color-text-secondary);   /* Text UI/Text label color */
  --ds-text-ui-text-weight: var(--ds-typography-font-weight-regular);   /* Text UI/Text weight */
  --ds-color-text-ui-icon-color: var(--ds-color-icon-primary);   /* Text UI/Icon color */
  --ds-text-ui-pad-top: var(--ds-space-2x);   /* Text UI/Pad top */
  --ds-text-ui-pad-bottom: var(--ds-space-2x);   /* Text UI/Pad bottom */
  --ds-text-ui-pad-left: var(--ds-space-4x);   /* Text UI/Pad left */
  --ds-text-ui-pad-right: var(--ds-space-4x);   /* Text UI/Pad right */
  --ds-table-cell-pad-left-2x: 36px;   /* Table cell/Pad left 2x */
  --ds-color-text-ui-text-placeholder: var(--ds-color-text-placeholder);   /* Text UI/Text placeholder */
  --ds-badge-counter-pad-bottom: var(--ds-size-0-25x);   /* Badge/Counter/Pad bottom */
  --ds-badge-counter-pad-top: var(--ds-size-0-25x);   /* Badge/Counter/Pad top */
  --ds-color-chips-outlined-focus-background: var(--ds-color-shapes-default);   /* Chips/Outlined/Focus/Background */
  --ds-color-chips-outlined-focus-border-color: var(--ds-color-stroke-accent);   /* Chips/Outlined/Focus/Border color */
  --ds-color-banners-accent-background-tip: var(--ds-color-brand-accent-lightest);   /* Banners/Accent/Background tip */
  --ds-banners-text-size-tip: var(--ds-typography-caption-font-size-l);   /* Banners/Text size tip */
  --ds-dialog-shadows: 12 dp M;   /* Dialog/Shadows */
  --ds-snackbar-gap-group: var(--ds-space-2x);   /* Snackbar/Gap group */
  --ds-color-snackbar-single-dark-background: var(--ds-color-surface-snack-tooltip);   /* Snackbar/Single/Dark/Background */
  --ds-color-snackbar-single-dark-text-color: var(--ds-color-text-inversive);   /* Snackbar/Single/Dark/Text color */
  --ds-color-snackbar-single-light-background: var(--ds-color-surface-default);   /* Snackbar/Single/Light/Background */
  --ds-color-snackbar-single-light-text-color: var(--ds-color-text-primary);   /* Snackbar/Single/Light/Text color */
  --ds-select-item-gap: var(--ds-space-2x);   /* Select item/Gap */
  --ds-select-item-text-size: var(--ds-typography-body-font-size-s);   /* Select item/Text size */
  --ds-color-select-item-text-color: var(--ds-color-text-primary);   /* Select item/Text color */
  --ds-select-item-text-size-label: var(--ds-typography-caption-font-size-l);   /* Select item/Text size label */
  --ds-color-select-item-text-label-color: var(--ds-color-text-secondary);   /* Select item/Text label color */
  --ds-select-item-text-weight: var(--ds-typography-font-weight-regular);   /* Select item/Text weight */
  --ds-color-select-item-icon-color: var(--ds-color-icon-primary);   /* Select item/Icon color */
  --ds-select-item-pad-left-s: 32px;   /* Select item/Pad left S */
  --ds-select-item-pad-left-m: 48px;   /* Select item/Pad left M */
  --ds-select-item-pad-left: var(--ds-space-4x);   /* Select item/Pad left */
  --ds-select-item-pad-right: var(--ds-space-4x);   /* Select item/Pad right */
  --ds-select-item-pad-top: var(--ds-space-2x);   /* Select item/Pad top */
  --ds-select-item-pad-bottom: var(--ds-space-2x);   /* Select item/Pad bottom */
  --ds-color-select-item-default-background: var(--ds-color-surface-default);   /* Select item/Default/Background */
  --ds-color-select-item-hover-background: var(--ds-color-surface-hover);   /* Select item/Hover/Background */
  --ds-color-select-item-press-background: var(--ds-color-surface-press);   /* Select item/Press/Background */
  --ds-color-select-item-selected-background: var(--ds-color-shapes-default);   /* Select item/Selected/Background */
  --ds-color-select-item-selected-back-selected: var(--ds-palette-accent-10);   /* Select item/Selected/Back selected */
  --ds-color-select-item-selected-icon-color: var(--ds-color-icon-accent);   /* Select item/Selected/Icon color */
  --ds-color-select-item-negative-background: var(--ds-color-shapes-default);   /* Select item/Negative/Background */
  --ds-color-select-item-negative-text-color: var(--ds-color-text-negative);   /* Select item/Negative/Text color */
  --ds-color-select-item-negative-label-text-color: var(--ds-color-text-negative);   /* Select item/Negative/Label text color */
  --ds-color-select-item-negative-icon-color: var(--ds-color-icon-negative);   /* Select item/Negative/Icon color */
  --ds-color-select-item-disable-background: var(--ds-color-surface-default);   /* Select item/Disable/Background */
  --ds-color-select-item-disable-text-color: var(--ds-color-text-disable);   /* Select item/Disable/Text color */
  --ds-color-select-item-disable-label-text-color: var(--ds-color-text-disable);   /* Select item/Disable/Label text color */
  --ds-color-select-item-disable-icon-color: var(--ds-color-icon-disable);   /* Select item/Disable/Icon color */
  --ds-select-item-text-size-sub: var(--ds-typography-caption-font-size-m);   /* Select item/Text size sub */
  --ds-select-item-text-weight-sub: var(--ds-typography-font-weight-medium);   /* Select item/Text weight sub */
  --ds-select-item-pad-top-sub: var(--ds-space-3x);   /* Select item/Pad top sub */
  --ds-select-item-pad-bottom-sub: var(--ds-space-1-5x);   /* Select item/Pad bottom sub */
  --ds-dialog-content-gap-text: var(--ds-space-2x);   /* Dialog/Content/Gap text */
  --ds-card-border-size: var(--ds-stroke-0-25x);   /* Card/Border size */
  --ds-color-card-border-color: var(--ds-color-stroke-default);   /* Card/Border color */
  --ds-card-shadows: 01 dp Sl;   /* Card/Shadows */
  --ds-tab-lvl-1-pad-bottom: var(--ds-space-1x);   /* Tab/Lvl 1/Pad bottom */
  --ds-tab-lvv-2-pad-bottom: var(--ds-space-1x);   /* Tab/Lvv 2/Pad bottom */
  --ds-tab-lvv-2-text-size: var(--ds-typography-body-font-size-s);   /* Tab/Lvv 2/Text size */
  --ds-color-tab-icon-color-negative: var(--ds-color-icon-negative);   /* Tab/Icon color negative */
  --ds-color-expansion-panel-collaps-default-background-info: var(--ds-color-brand-accent-lightest);   /* Expansion panel/Collaps/Default/Background info */
  --ds-color-expansion-panel-content-background-info: var(--ds-color-brand-accent-lightest);   /* Expansion panel/Content/Background info */
  --ds-color-expansion-panel-collaps-hover-background-info: var(--ds-color-brand-accent-lighter);   /* Expansion panel/Collaps/Hover/Background info */
  --ds-color-expansion-panel-collaps-press-background-info: var(--ds-palette-accent-100);   /* Expansion panel/Collaps/Press/Background info */
  --ds-color-expansion-panel-collaps-disable-background-info: var(--ds-color-brand-accent-lightest);   /* Expansion panel/Collaps/Disable/Background info */
  --ds-color-expansion-panel-content-text-color-disable: var(--ds-color-text-disable);   /* Expansion panel/Content/Text color disable */
  --ds-color-expansion-panel-expand-background: var(--ds-color-surface-default);   /* Expansion panel/Expand/Background */
  --ds-elements-datepicker-border-radius: var(--ds-radius-circular);   /* Elements Datepicker/Border radius */
  --ds-elements-datepicker-border-size: var(--ds-stroke-0-25x);   /* Elements Datepicker/Border size */
  --ds-elements-datepicker-text-weight: var(--ds-typography-font-weight-regular);   /* Elements Datepicker/Text weight */
  --ds-elements-datepicker-cell-pad-left: var(--ds-space-2-5x);   /* Elements Datepicker/Cell/Pad left */
  --ds-elements-datepicker-cell-pad-right: var(--ds-space-2-5x);   /* Elements Datepicker/Cell/Pad right */
  --ds-elements-datepicker-cell-pad-top: var(--ds-space-2x);   /* Elements Datepicker/Cell/Pad top */
  --ds-elements-datepicker-cell-pad-bottom: var(--ds-space-2x);   /* Elements Datepicker/Cell/Pad bottom */
  --ds-elements-datepicker-cell-text-size: var(--ds-typography-body-font-size-m);   /* Elements Datepicker/Cell/Text size */
  --ds-elements-datepicker-year-pad-left: var(--ds-space-4x);   /* Elements Datepicker/Year/Pad left */
  --ds-elements-datepicker-year-pad-right: var(--ds-space-4x);   /* Elements Datepicker/Year/Pad right */
  --ds-elements-datepicker-year-pad-top: var(--ds-space-2x);   /* Elements Datepicker/Year/Pad top */
  --ds-elements-datepicker-year-pad-bottom: var(--ds-space-2x);   /* Elements Datepicker/Year/Pad bottom */
  --ds-elements-datepicker-year-text-size: var(--ds-typography-body-font-size-m);   /* Elements Datepicker/Year/Text size */
  --ds-elements-datepicker-month-pad-left: var(--ds-space-2x);   /* Elements Datepicker/Month/Pad left */
  --ds-elements-datepicker-month-pad-right: var(--ds-space-1x);   /* Elements Datepicker/Month/Pad right */
  --ds-elements-datepicker-month-pad-top: var(--ds-space-2-5x);   /* Elements Datepicker/Month/Pad top */
  --ds-elements-datepicker-month-pad-bottom: var(--ds-space-2-5x);   /* Elements Datepicker/Month/Pad bottom */
  --ds-elements-datepicker-month-gap: var(--ds-space-2x);   /* Elements Datepicker/Month/Gap */
  --ds-elements-datepicker-month-text-size: var(--ds-typography-body-font-size-s);   /* Elements Datepicker/Month/Text size */
  --ds-elements-datepicker-month-icon-size: var(--ds-icon-size-size-5x);   /* Elements Datepicker/Month/Icon size */
  --ds-color-elements-datepicker-cell-text-color: var(--ds-color-text-primary);   /* Elements Datepicker/Cell/Text color */
  --ds-color-elements-datepicker-cell-default-default-background: var(--ds-palette-neutral-transparent);   /* Elements Datepicker/Cell/Default/Default/Background */
  --ds-color-elements-datepicker-cell-default-hover-background: var(--ds-color-brand-neutral-super-light);   /* Elements Datepicker/Cell/Default/Hover/Background */
  --ds-color-elements-datepicker-cell-default-press-background: var(--ds-color-brand-neutral-lighter);   /* Elements Datepicker/Cell/Default/Press/Background */
  --ds-color-elements-datepicker-cell-default-disable-background: var(--ds-palette-neutral-transparent);   /* Elements Datepicker/Cell/Default/Disable/Background */
  --ds-color-elements-datepicker-cell-default-disable-text-color: var(--ds-color-text-disable);   /* Elements Datepicker/Cell/Default/Disable/Text color */
  --ds-color-elements-datepicker-cell-today-border-color: var(--ds-color-stroke-hover);   /* Elements Datepicker/Cell/Today/Border color */
  --ds-color-elements-datepicker-cell-today-default-background: var(--ds-color-brand-neutral-default);   /* Elements Datepicker/Cell/Today/Default/Background */
  --ds-color-elements-datepicker-cell-today-hover-background: var(--ds-color-brand-neutral-super-light);   /* Elements Datepicker/Cell/Today/Hover/Background */
  --ds-color-elements-datepicker-cell-today-press-background: var(--ds-color-brand-neutral-lighter);   /* Elements Datepicker/Cell/Today/Press/Background */
  --ds-color-elements-datepicker-cell-today-disable-background: var(--ds-color-brand-neutral-lighter);   /* Elements Datepicker/Cell/Today/Disable/Background */
  --ds-color-elements-datepicker-cell-today-disable-text-color: var(--ds-color-text-disable);   /* Elements Datepicker/Cell/Today/Disable/Text color */
  --ds-color-elements-datepicker-cell-selected-text-color: var(--ds-color-text-inversive);   /* Elements Datepicker/Cell/Selected/Text color */
  --ds-color-elements-datepicker-cell-selected-default-background: var(--ds-color-button-accent-filled-default-background);   /* Elements Datepicker/Cell/Selected/Default/Background */
  --ds-color-elements-datepicker-cell-selected-hover-background: var(--ds-color-button-accent-filled-hover-background);   /* Elements Datepicker/Cell/Selected/Hover/Background */
  --ds-color-elements-datepicker-cell-selected-press-background: var(--ds-color-button-accent-filled-press-background);   /* Elements Datepicker/Cell/Selected/Press/Background */
  --ds-color-elements-datepicker-cell-range-default-background: var(--ds-color-brand-neutral-default);   /* Elements Datepicker/Cell/Range/Default/Background */
  --ds-color-elements-datepicker-cell-range-press-state-layer: var(--ds-color-brand-neutral-lighter);   /* Elements Datepicker/Cell/Range/Press/State layer */
  --ds-color-elements-datepicker-cell-range-disable-text-color: var(--ds-color-text-disable);   /* Elements Datepicker/Cell/Range/Disable/Text color */
  --ds-color-elements-datepicker-year-default-text-color: var(--ds-color-text-primary);   /* Elements Datepicker/Year/Default/Text color */
  --ds-color-elements-datepicker-year-default-default-background: var(--ds-color-brand-neutral-default);   /* Elements Datepicker/Year/Default/Default/Background */
  --ds-color-elements-datepicker-year-default-hover-background: var(--ds-color-brand-neutral-super-light);   /* Elements Datepicker/Year/Default/Hover/Background */
  --ds-color-elements-datepicker-year-default-press-background: var(--ds-color-brand-neutral-lighter);   /* Elements Datepicker/Year/Default/Press/Background */
  --ds-color-elements-datepicker-year-default-disable-text-color: var(--ds-color-text-disable);   /* Elements Datepicker/Year/Default/Disable/Text color */
  --ds-color-elements-datepicker-year-today-border-color: var(--ds-color-stroke-hover);   /* Elements Datepicker/Year/Today/Border color */
  --ds-color-elements-datepicker-year-today-text-color: var(--ds-color-text-primary);   /* Elements Datepicker/Year/Today/Text color */
  --ds-color-elements-datepicker-year-today-default-background: var(--ds-color-brand-neutral-default);   /* Elements Datepicker/Year/Today/Default/Background */
  --ds-color-elements-datepicker-year-today-hover-background: var(--ds-color-brand-neutral-super-light);   /* Elements Datepicker/Year/Today/Hover/Background */
  --ds-color-elements-datepicker-year-today-press-background: var(--ds-color-brand-neutral-lighter);   /* Elements Datepicker/Year/Today/Press/Background */
  --ds-color-elements-datepicker-year-today-disable-text-color: var(--ds-color-text-disable);   /* Elements Datepicker/Year/Today/Disable/Text color */
  --ds-color-elements-datepicker-year-selected-text-color: var(--ds-color-text-inversive);   /* Elements Datepicker/Year/Selected/Text color */
  --ds-color-elements-datepicker-year-selected-default-background: var(--ds-color-button-accent-filled-default-background);   /* Elements Datepicker/Year/Selected/Default/Background */
  --ds-color-elements-datepicker-year-selected-hover-background: var(--ds-color-button-accent-filled-hover-background);   /* Elements Datepicker/Year/Selected/Hover/Background */
  --ds-color-elements-datepicker-year-selected-press-background: var(--ds-color-button-accent-filled-press-background);   /* Elements Datepicker/Year/Selected/Press/Background */
  --ds-color-elements-datepicker-month-text-color: var(--ds-color-text-primary);   /* Elements Datepicker/Month/Text color */
  --ds-color-elements-datepicker-month-icon-color: var(--ds-color-icon-primary);   /* Elements Datepicker/Month/Icon color */
  --ds-color-elements-datepicker-month-default-default-background: var(--ds-color-brand-neutral-default);   /* Elements Datepicker/Month/Default/Default/Background */
  --ds-color-elements-datepicker-month-default-hover-background: var(--ds-color-brand-neutral-super-light);   /* Elements Datepicker/Month/Default/Hover/Background */
  --ds-color-elements-datepicker-month-default-press-background: var(--ds-color-brand-neutral-lighter);   /* Elements Datepicker/Month/Default/Press/Background */
  --ds-color-elements-datepicker-month-default-disable-text-color: var(--ds-color-text-disable);   /* Elements Datepicker/Month/Default/Disable/Text color */
  --ds-color-elements-datepicker-month-default-disable-icon-color: var(--ds-color-icon-disable);   /* Elements Datepicker/Month/Default/Disable/Icon color */
  --ds-elements-datepicker-year-selected-gap: var(--ds-space-2x);   /* Elements Datepicker/Year/Selected/Gap */
  --ds-input-datepicker-icon: date_range;   /* Input Datepicker/Icon */
  --ds-input-datepicker-empty-placeholder-text: ДД.ММ.ГГГГ;   /* Input Datepicker/Empty/Placeholder text */
  --ds-input-datepicker-populated-label-text: Дата;   /* Input Datepicker/Populated/Label text */
  --ds-input-datepicker-populated-placeholder-text: ДД.ММ.ГГГГ;   /* Input Datepicker/Populated/Placeholder text */
  --ds-control-panel-datepicker-pad-top: var(--ds-space-1x);   /* Control Panel Datepicker/Pad top */
  --ds-control-panel-datepicker-pad-bottom: var(--ds-space-1x);   /* Control Panel Datepicker/Pad bottom */
  --ds-control-panel-datepicker-control-gap: Auto;   /* Control Panel Datepicker/Control/Gap */
  --ds-control-panel-datepicker-week-pad-top: var(--ds-space-0-5x);   /* Control Panel Datepicker/Week/Pad top */
  --ds-control-panel-datepicker-week-pad-bottom: var(--ds-space-0-5x);   /* Control Panel Datepicker/Week/Pad bottom */
  --ds-datepicker-pad-top: var(--ds-space-2x);   /* Datepicker/Pad top */
  --ds-datepicker-pad-bottom: var(--ds-space-2x);   /* Datepicker/Pad bottom */
  --ds-datepicker-pad-left: var(--ds-space-4x);   /* Datepicker/Pad left */
  --ds-datepicker-pad-right: var(--ds-space-4x);   /* Datepicker/Pad right */
  --ds-datepicker-border-radius: var(--ds-radius-3x);   /* Datepicker/Border radius */
  --ds-datepicker-border-size: var(--ds-stroke-0-25x);   /* Datepicker/Border size */
  --ds-color-datepicker-border-color: var(--ds-color-stroke-default);   /* Datepicker/Border color */
  --ds-input-timepicker-icon: schedule_time;   /* Input Timepicker/Icon */
  --ds-input-timepicker-empty-placeholder-text: ЧЧ.ММ;   /* Input Timepicker/Empty/Placeholder text */
  --ds-input-timepicker-populated-label-text: Время;   /* Input Timepicker/Populated/Label text */
  --ds-input-timepicker-populated-placeholder-text: ЧЧ.ММ;   /* Input Timepicker/Populated/Placeholder text */
  --ds-elements-timepicker-border-radius: var(--ds-radius-circular);   /* Elements Timepicker/Border radius */
  --ds-elements-timepicker-text-weight: var(--ds-typography-font-weight-regular);   /* Elements Timepicker/Text weight */
  --ds-elements-timepicker-pad-left: var(--ds-space-4x);   /* Elements Timepicker/Pad left */
  --ds-elements-timepicker-pad-right: var(--ds-space-4x);   /* Elements Timepicker/Pad right */
  --ds-elements-timepicker-pad-top: var(--ds-space-2x);   /* Elements Timepicker/Pad top */
  --ds-elements-timepicker-pad-bottom: var(--ds-space-2x);   /* Elements Timepicker/Pad bottom */
  --ds-elements-timepicker-text-size: var(--ds-typography-body-font-size-m);   /* Elements Timepicker/Text size */
  --ds-color-elements-timepicker-selected-text-color: var(--ds-color-text-inversive);   /* Elements Timepicker/Selected/Text color */
  --ds-color-elements-timepicker-selected-default-background: var(--ds-color-button-accent-filled-default-background);   /* Elements Timepicker/Selected/Default/Background */
  --ds-color-elements-timepicker-selected-hover-background: var(--ds-color-button-accent-filled-hover-background);   /* Elements Timepicker/Selected/Hover/Background */
  --ds-color-elements-timepicker-selected-press-background: var(--ds-color-button-accent-filled-press-background);   /* Elements Timepicker/Selected/Press/Background */
  --ds-color-elements-timepicker-default-text-color: var(--ds-color-text-primary);   /* Elements Timepicker/Default/Text color */
  --ds-color-elements-timepicker-default-default-background: var(--ds-color-brand-neutral-default);   /* Elements Timepicker/Default/Default/Background */
  --ds-color-elements-timepicker-default-hover-background: var(--ds-color-brand-neutral-super-light);   /* Elements Timepicker/Default/Hover/Background */
  --ds-color-elements-timepicker-default-press-background: var(--ds-color-brand-neutral-lighter);   /* Elements Timepicker/Default/Press/Background */
  --ds-color-elements-timepicker-default-range-background: var(--ds-palette-accent-50);   /* Elements Timepicker/Default/Range/Background */
  --ds-color-elements-timepicker-default-disable-text-color: var(--ds-color-text-disable);   /* Elements Timepicker/Default/Disable/Text color */
  --ds-control-panel-timepicker-pad-top: var(--ds-space-1x);   /* Control Panel Timepicker/Pad top */
  --ds-control-panel-timepicker-pad-bottom: var(--ds-space-1x);   /* Control Panel Timepicker/Pad bottom */
  --ds-control-panel-timepicker-control-gap: Auto;   /* Control Panel Timepicker/Control/Gap */
  --ds-control-panel-timepicker-time-pad-top: var(--ds-space-0-5x);   /* Control Panel Timepicker/Time/Pad top */
  --ds-control-panel-timepicker-time-pad-bottom: var(--ds-space-0-5x);   /* Control Panel Timepicker/Time/Pad bottom */
  --ds-timepicker-time-grid-pad-top: var(--ds-space-2x);   /* Timepicker/Time grid/Pad top */
  --ds-timepicker-time-grid-pad-bottom: var(--ds-space-2x);   /* Timepicker/Time grid/Pad bottom */
  --ds-timepicker-time-grid-border-radius: var(--ds-radius-3x);   /* Timepicker/Time grid/Border radius */
  --ds-timepicker-time-grid-border-size: var(--ds-stroke-0-25x);   /* Timepicker/Time grid/Border size */
  --ds-color-timepicker-time-grid-border-color: var(--ds-color-stroke-default);   /* Timepicker/Time grid/Border color */
  --ds-timepicker-time-line-component: Select (Container);   /* Timepicker/Time line/Component */

  /* ── Совместимость: токены прежнего набора (140) ── */
  --ds-color-chips-input-background-support: rgba(255, 255, 255, 0.0);
  --ds-color-chips-input-default-action-text-color: #616161;
  --ds-color-chips-input-default-background: #f8f9fc;
  --ds-color-chips-input-default-border-color: #e0e0e0;
  --ds-color-chips-input-default-label-text-color: #616161;
  --ds-color-chips-input-default-support-text-color: #616161;
  --ds-color-chips-input-disable-action-text-color: #9e9e9e;
  --ds-color-chips-input-disable-background: #f5f5f5;
  --ds-color-chips-input-disable-border-color: #ebebeb;
  --ds-color-chips-input-disable-icon-color: #9e9e9e;
  --ds-color-chips-input-disable-label-text-color: #9e9e9e;
  --ds-color-chips-input-disable-support-text-color: #9e9e9e;
  --ds-color-chips-input-error-action-text-color: #616161;
  --ds-color-chips-input-error-background: #f8f9fc;
  --ds-color-chips-input-error-background-hover: #f5f5f5;
  --ds-color-chips-input-error-border-color: #ff5252;
  --ds-color-chips-input-error-cursor-color: #333333;
  --ds-color-chips-input-error-icon-color: #ff5252;
  --ds-color-chips-input-error-label-text-color: #ff5252;
  --ds-color-chips-input-error-support-text-color: #ff5252;
  --ds-color-chips-input-error-text-placeholder-color: #d6d6d6;
  --ds-color-chips-input-focus-background: #f8f9fc;
  --ds-color-chips-input-focus-border-color: #448aff;
  --ds-color-chips-input-focus-label-text-color: #448aff;
  --ds-color-chips-input-focus-support-text-color: #616161;
  --ds-color-chips-input-focus-text-color: #333333;
  --ds-color-chips-input-focus-text-placeholder-color: #d6d6d6;
  --ds-color-chips-input-hover-action-text-color: #616161;
  --ds-color-chips-input-hover-background: #f5f5f5;
  --ds-color-chips-input-hover-border-color: #9e9e9e;
  --ds-color-chips-input-hover-label-text-color: #616161;
  --ds-color-chips-input-hover-support-text-color: #616161;
  --ds-color-expansion-panel-block-collaps-border-color: #e0e0e0;
  --ds-color-expansion-panel-block-collaps-content-background: #ffffff;
  --ds-color-expansion-panel-block-collaps-content-text-color: #333333;
  --ds-color-expansion-panel-block-expand-header-border-color: #e0e0e0;
  --ds-color-expansion-panel-block-expand-header-icon-color: #616161;
  --ds-color-expansion-panel-block-expand-header-text-color: #333333;
  --ds-color-expansion-panel-block-expand-header-default-background: #f8f9fc;
  --ds-color-expansion-panel-block-expand-header-disable-background: #f5f5f5;
  --ds-color-expansion-panel-block-expand-header-disable-border-color: #ebebeb;
  --ds-color-expansion-panel-block-expand-header-disable-text-color: #9e9e9e;
  --ds-color-expansion-panel-block-expand-header-hover-background: #f5f5f5;
  --ds-color-expansion-panel-block-expand-header-press-background: #e0e0e0;
  --ds-color-input-background-support: rgba(255, 255, 255, 0.0);
  --ds-color-input-input-filled-background: #f8f9fc;
  --ds-color-input-input-label-text-color: #616161;
  --ds-color-input-input-outlined-background: #ffffff;
  --ds-color-input-filled-default-border-color: #e0e0e0;
  --ds-color-input-filled-default-icon-color-default: #616161;
  --ds-color-input-filled-default-icon-color-warning: #ea7806;
  --ds-color-input-filled-default-input-text-color: #333333;
  --ds-color-input-filled-default-label-text-color: #616161;
  --ds-color-input-filled-default-support-text-color: #616161;
  --ds-color-input-filled-disable-border-color: #ebebeb;
  --ds-color-input-filled-disable-icon-color-disable: #9e9e9e;
  --ds-color-input-filled-disable-icon-color-warning: #ea7806;
  --ds-color-input-filled-disable-input-background: #f5f5f5;
  --ds-color-input-filled-disable-input-text-color: #9e9e9e;
  --ds-color-input-filled-disable-label-text-color: #9e9e9e;
  --ds-color-input-filled-disable-support-text-color: #9e9e9e;
  --ds-color-input-filled-error-border-color: #ff5252;
  --ds-color-input-filled-error-icon-color-default: #616161;
  --ds-color-input-filled-error-icon-color-error: #ff5252;
  --ds-color-input-filled-error-icon-color-warning: #ea7806;
  --ds-color-input-filled-error-input-background-hover: #f5f5f5;
  --ds-color-input-filled-error-input-cursor-color: #333333;
  --ds-color-input-filled-error-input-text-color: #333333;
  --ds-color-input-filled-error-input-text-placeholder-color: #d6d6d6;
  --ds-color-input-filled-error-label-text-color: #ff5252;
  --ds-color-input-filled-error-text-support-color: #ff5252;
  --ds-color-input-filled-focus-border-color: #448aff;
  --ds-color-input-filled-focus-icon-color-default: #616161;
  --ds-color-input-filled-focus-icon-color-warning: #ea7806;
  --ds-color-input-filled-focus-input-cursor-color: #333333;
  --ds-color-input-filled-focus-input-text-color: #333333;
  --ds-color-input-filled-focus-input-text-placeholder-color: #d6d6d6;
  --ds-color-input-filled-focus-label-text-color: #448aff;
  --ds-color-input-filled-focus-support-text-color: #616161;
  --ds-color-input-filled-hover-border-color: #9e9e9e;
  --ds-color-input-filled-hover-icon-color-default: #616161;
  --ds-color-input-filled-hover-icon-color-warning: #ea7806;
  --ds-color-input-filled-hover-input-background-hover: #f5f5f5;
  --ds-color-input-filled-hover-input-text-color: #333333;
  --ds-color-input-filled-hover-label-text-color: #616161;
  --ds-color-input-filled-hover-text-support-color: #616161;
  --ds-color-input-outlined-default-background: #ffffff;
  --ds-color-input-outlined-default-border-color: #e0e0e0;
  --ds-color-input-outlined-default-icon-color: #616161;
  --ds-color-input-outlined-default-text-color: #333333;
  --ds-color-input-outlined-error-background: #ebebeb;
  --ds-color-input-outlined-error-border-color: #e0e0e0;
  --ds-color-input-outlined-error-icon-color: #616161;
  --ds-color-input-outlined-error-text-color: #333333;
  --ds-color-input-outlined-focus-background: #ebebeb;
  --ds-color-input-outlined-focus-border-color: #e0e0e0;
  --ds-color-input-outlined-focus-icon-color: #616161;
  --ds-color-input-outlined-focus-text-color: #333333;
  --ds-color-input-outlined-hover-background: #fafafa;
  --ds-color-input-outlined-hover-border-color: #e0e0e0;
  --ds-color-input-outlined-hover-icon-color: #616161;
  --ds-color-input-outlined-hover-text-color: #333333;
  --ds-color-search-focus-value-border-color: #448aff;
  --ds-color-search-focus-value-text-color: #333333;
  --ds-color-snackbar-dark-background: #424242;
  --ds-color-snackbar-dark-text-color: #ffffff;
  --ds-color-snackbar-dark-complex-accent-icon-color: #448aff;
  --ds-color-snackbar-dark-complex-negative-icon-color: #ff5252;
  --ds-color-snackbar-dark-complex-neutral-icon-color: #ffffff;
  --ds-color-snackbar-dark-complex-positive-icon-color: #14b456;
  --ds-color-snackbar-dark-complex-warning-icon-color: #ea7806;
  --ds-color-snackbar-dark-single-accent-icon-color: #448aff;
  --ds-color-snackbar-dark-single-negative-icon-color: #ff5252;
  --ds-color-snackbar-dark-single-neutral-icon-color: #ffffff;
  --ds-color-snackbar-dark-single-positive-icon-color: #14b456;
  --ds-color-snackbar-dark-single-warning-icon-color: #ea7806;
  --ds-color-snackbar-light-background: #ffffff;
  --ds-color-snackbar-light-text-color: #333333;
  --ds-color-snackbar-light-complex-accent-icon-color: #448aff;
  --ds-color-snackbar-light-complex-negative-icon-color: #ff5252;
  --ds-color-snackbar-light-complex-neutral-icon-color: #616161;
  --ds-color-snackbar-light-complex-positive-icon-color: #14b456;
  --ds-color-snackbar-light-complex-warning-icon-color: #ea7806;
  --ds-color-snackbar-light-single-accent-icon-color: #448aff;
  --ds-color-snackbar-light-single-negative-icon-color: #ff5252;
  --ds-color-snackbar-light-single-neutral-icon-color: #616161;
  --ds-color-snackbar-light-single-positive-icon-color: #14b456;
  --ds-color-snackbar-light-single-warning-icon-color: #ea7806;
  --ds-color-tab-active-counter-text-color: #448aff;
  --ds-color-tab-active-divider: #448aff;
  --ds-color-tab-innactive-counter-text-color: #333333;
  --ds-color-tab-innactive-icon-color: #616161;
  --ds-color-tab-innactive-text-color: #333333;
  --ds-color-tab-innactive-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-tab-innactive-hover-background: #f5f5f5;
  --ds-color-tab-innactive-press-background: #e0e0e0;
  --ds-shadow-sl: 0px 2px 2px 0px rgba(33, 33, 33, 0.039), 0px 0px 4px 0px rgba(33, 33, 33, 0.122);
  --ds-shadow-s: 0px 4px 6px 0px rgba(33, 33, 33, 0.102), 0px 0px 16px 0px rgba(33, 33, 33, 0.122);
  --ds-shadow-m: 0px 10px 24px 0px rgba(33, 33, 33, 0.122), 0px 0px 28px 0px rgba(33, 33, 33, 0.122);
  --ds-shadow-xl: 0px 12px 16px 0px rgba(33, 33, 33, 0.161), 0px 0px 32px 0px rgba(33, 33, 33, 0.161);
}

/* ==== СТИЛИ FIGMA (авто: gen_style_tokens.py) ==== */
/* Стили Figma (текст, тени, цвета) — выгрузка плагина v2. Не править руками. */
:root {
  /* --- Типографика (текстовые стили) --- */
  --ds-font-header-l-34-normal-regular: 400 34px/40px "Roboto";
  --ds-font-header-l-34-normal-regular-size: 34px;
  --ds-font-header-l-34-normal-regular-line: 40px;
  --ds-font-header-l-34-normal-regular-spacing: 0px;
  --ds-font-header-l-34-normal-regular-weight: 400;
  --ds-font-header-l-34-normal-medium: 500 34px/40px "Roboto";
  --ds-font-header-l-34-normal-medium-size: 34px;
  --ds-font-header-l-34-normal-medium-line: 40px;
  --ds-font-header-l-34-normal-medium-spacing: 0px;
  --ds-font-header-l-34-normal-medium-weight: 500;
  --ds-font-header-l-34-caps-regular: 400 34px/40px "Roboto";
  --ds-font-header-l-34-caps-regular-size: 34px;
  --ds-font-header-l-34-caps-regular-line: 40px;
  --ds-font-header-l-34-caps-regular-spacing: 0px;
  --ds-font-header-l-34-caps-regular-weight: 400;
  --ds-font-header-l-34-caps-medium: 500 34px/40px "Roboto";
  --ds-font-header-l-34-caps-medium-size: 34px;
  --ds-font-header-l-34-caps-medium-line: 40px;
  --ds-font-header-l-34-caps-medium-spacing: 0px;
  --ds-font-header-l-34-caps-medium-weight: 500;
  --ds-font-header-m-24-normal-regular: 400 24px/32px "Roboto";
  --ds-font-header-m-24-normal-regular-size: 24px;
  --ds-font-header-m-24-normal-regular-line: 32px;
  --ds-font-header-m-24-normal-regular-spacing: 0.5px;
  --ds-font-header-m-24-normal-regular-weight: 400;
  --ds-font-header-m-24-normal-medium: 500 24px/32px "Roboto";
  --ds-font-header-m-24-normal-medium-size: 24px;
  --ds-font-header-m-24-normal-medium-line: 32px;
  --ds-font-header-m-24-normal-medium-spacing: 0.5px;
  --ds-font-header-m-24-normal-medium-weight: 500;
  --ds-font-header-m-24-caps-regular: 400 24px/32px "Roboto";
  --ds-font-header-m-24-caps-regular-size: 24px;
  --ds-font-header-m-24-caps-regular-line: 32px;
  --ds-font-header-m-24-caps-regular-spacing: 0.5px;
  --ds-font-header-m-24-caps-regular-weight: 400;
  --ds-font-header-m-24-caps-medium: 500 24px/32px "Roboto";
  --ds-font-header-m-24-caps-medium-size: 24px;
  --ds-font-header-m-24-caps-medium-line: 32px;
  --ds-font-header-m-24-caps-medium-spacing: 0.5px;
  --ds-font-header-m-24-caps-medium-weight: 500;
  --ds-font-header-s-20-normal-regular: 400 20px/28px "Roboto";
  --ds-font-header-s-20-normal-regular-size: 20px;
  --ds-font-header-s-20-normal-regular-line: 28px;
  --ds-font-header-s-20-normal-regular-spacing: 0.5px;
  --ds-font-header-s-20-normal-regular-weight: 400;
  --ds-font-header-s-20-normal-medium: 500 20px/28px "Roboto";
  --ds-font-header-s-20-normal-medium-size: 20px;
  --ds-font-header-s-20-normal-medium-line: 28px;
  --ds-font-header-s-20-normal-medium-spacing: 0.5px;
  --ds-font-header-s-20-normal-medium-weight: 500;
  --ds-font-header-s-20-caps-regular: 400 20px/28px "Roboto";
  --ds-font-header-s-20-caps-regular-size: 20px;
  --ds-font-header-s-20-caps-regular-line: 28px;
  --ds-font-header-s-20-caps-regular-spacing: 0.5px;
  --ds-font-header-s-20-caps-regular-weight: 400;
  --ds-font-header-s-20-caps-medium: 500 20px/28px "Roboto";
  --ds-font-header-s-20-caps-medium-size: 20px;
  --ds-font-header-s-20-caps-medium-line: 28px;
  --ds-font-header-s-20-caps-medium-spacing: 0.5px;
  --ds-font-header-s-20-caps-medium-weight: 500;
  --ds-font-body-l-18-normal-regular: 400 18px/24px "Roboto";
  --ds-font-body-l-18-normal-regular-size: 18px;
  --ds-font-body-l-18-normal-regular-line: 24px;
  --ds-font-body-l-18-normal-regular-spacing: 0.5px;
  --ds-font-body-l-18-normal-regular-weight: 400;
  --ds-font-body-l-18-normal-medium: 500 18px/24px "Roboto";
  --ds-font-body-l-18-normal-medium-size: 18px;
  --ds-font-body-l-18-normal-medium-line: 24px;
  --ds-font-body-l-18-normal-medium-spacing: 0.5px;
  --ds-font-body-l-18-normal-medium-weight: 500;
  --ds-font-body-l-18-caps-regular: 400 18px/24px "Roboto";
  --ds-font-body-l-18-caps-regular-size: 18px;
  --ds-font-body-l-18-caps-regular-line: 24px;
  --ds-font-body-l-18-caps-regular-spacing: 0.5px;
  --ds-font-body-l-18-caps-regular-weight: 400;
  --ds-font-body-l-18-caps-medium: 500 18px/24px "Roboto";
  --ds-font-body-l-18-caps-medium-size: 18px;
  --ds-font-body-l-18-caps-medium-line: 24px;
  --ds-font-body-l-18-caps-medium-spacing: 0.5px;
  --ds-font-body-l-18-caps-medium-weight: 500;
  --ds-font-body-m-16-normal-regular: 400 16px/24px "Roboto";
  --ds-font-body-m-16-normal-regular-size: 16px;
  --ds-font-body-m-16-normal-regular-line: 24px;
  --ds-font-body-m-16-normal-regular-spacing: 0.5px;
  --ds-font-body-m-16-normal-regular-weight: 400;
  --ds-font-body-m-16-normal-medium: 500 16px/24px "Roboto";
  --ds-font-body-m-16-normal-medium-size: 16px;
  --ds-font-body-m-16-normal-medium-line: 24px;
  --ds-font-body-m-16-normal-medium-spacing: 0.5px;
  --ds-font-body-m-16-normal-medium-weight: 500;
  --ds-font-body-m-16-caps-regular: 400 16px/24px "Roboto";
  --ds-font-body-m-16-caps-regular-size: 16px;
  --ds-font-body-m-16-caps-regular-line: 24px;
  --ds-font-body-m-16-caps-regular-spacing: 0.5px;
  --ds-font-body-m-16-caps-regular-weight: 400;
  --ds-font-body-m-16-caps-medium: 500 16px/24px "Roboto";
  --ds-font-body-m-16-caps-medium-size: 16px;
  --ds-font-body-m-16-caps-medium-line: 24px;
  --ds-font-body-m-16-caps-medium-spacing: 0.5px;
  --ds-font-body-m-16-caps-medium-weight: 500;
  --ds-font-body-s-14-normal-regular: 400 14px/20px "Roboto";
  --ds-font-body-s-14-normal-regular-size: 14px;
  --ds-font-body-s-14-normal-regular-line: 20px;
  --ds-font-body-s-14-normal-regular-spacing: 0.5px;
  --ds-font-body-s-14-normal-regular-weight: 400;
  --ds-font-body-s-14-normal-medium: 500 14px/20px "Roboto";
  --ds-font-body-s-14-normal-medium-size: 14px;
  --ds-font-body-s-14-normal-medium-line: 20px;
  --ds-font-body-s-14-normal-medium-spacing: 0.5px;
  --ds-font-body-s-14-normal-medium-weight: 500;
  --ds-font-body-s-14-caps-regular: 400 14px/20px "Roboto";
  --ds-font-body-s-14-caps-regular-size: 14px;
  --ds-font-body-s-14-caps-regular-line: 20px;
  --ds-font-body-s-14-caps-regular-spacing: 0.5px;
  --ds-font-body-s-14-caps-regular-weight: 400;
  --ds-font-body-s-14-caps-medium: 500 14px/20px "Roboto";
  --ds-font-body-s-14-caps-medium-size: 14px;
  --ds-font-body-s-14-caps-medium-line: 20px;
  --ds-font-body-s-14-caps-medium-spacing: 0.5px;
  --ds-font-body-s-14-caps-medium-weight: 500;
  --ds-font-caption-l-12-normal-regular: 400 12px/16px "Roboto";
  --ds-font-caption-l-12-normal-regular-size: 12px;
  --ds-font-caption-l-12-normal-regular-line: 16px;
  --ds-font-caption-l-12-normal-regular-spacing: 0.5px;
  --ds-font-caption-l-12-normal-regular-weight: 400;
  --ds-font-caption-l-12-normal-medium: 500 12px/16px "Roboto";
  --ds-font-caption-l-12-normal-medium-size: 12px;
  --ds-font-caption-l-12-normal-medium-line: 16px;
  --ds-font-caption-l-12-normal-medium-spacing: 0.5px;
  --ds-font-caption-l-12-normal-medium-weight: 500;
  --ds-font-caption-l-12-caps-regular: 400 12px/16px "Roboto";
  --ds-font-caption-l-12-caps-regular-size: 12px;
  --ds-font-caption-l-12-caps-regular-line: 16px;
  --ds-font-caption-l-12-caps-regular-spacing: 0.5px;
  --ds-font-caption-l-12-caps-regular-weight: 400;
  --ds-font-caption-l-12-caps-medium: 500 12px/16px "Roboto";
  --ds-font-caption-l-12-caps-medium-size: 12px;
  --ds-font-caption-l-12-caps-medium-line: 16px;
  --ds-font-caption-l-12-caps-medium-spacing: 0.5px;
  --ds-font-caption-l-12-caps-medium-weight: 500;
  --ds-font-caption-m-10-normal-regular: 400 10px/12px "Roboto";
  --ds-font-caption-m-10-normal-regular-size: 10px;
  --ds-font-caption-m-10-normal-regular-line: 12px;
  --ds-font-caption-m-10-normal-regular-spacing: 0.5px;
  --ds-font-caption-m-10-normal-regular-weight: 400;
  --ds-font-caption-m-10-normal-medium: 500 10px/12px "Roboto";
  --ds-font-caption-m-10-normal-medium-size: 10px;
  --ds-font-caption-m-10-normal-medium-line: 12px;
  --ds-font-caption-m-10-normal-medium-spacing: 0.5px;
  --ds-font-caption-m-10-normal-medium-weight: 500;
  --ds-font-caption-m-10-caps-regular: 400 10px/12px "Roboto";
  --ds-font-caption-m-10-caps-regular-size: 10px;
  --ds-font-caption-m-10-caps-regular-line: 12px;
  --ds-font-caption-m-10-caps-regular-spacing: 0.5px;
  --ds-font-caption-m-10-caps-regular-weight: 400;
  --ds-font-caption-m-10-caps-medium: 500 10px/12px "Roboto";
  --ds-font-caption-m-10-caps-medium-size: 10px;
  --ds-font-caption-m-10-caps-medium-line: 12px;
  --ds-font-caption-m-10-caps-medium-spacing: 0.5px;
  --ds-font-caption-m-10-caps-medium-weight: 500;
  --ds-font-caption-s-8-normal-regular: 400 8px/10px "Roboto";
  --ds-font-caption-s-8-normal-regular-size: 8px;
  --ds-font-caption-s-8-normal-regular-line: 10px;
  --ds-font-caption-s-8-normal-regular-spacing: 0.5px;
  --ds-font-caption-s-8-normal-regular-weight: 400;
  --ds-font-caption-s-8-normal-medium: 500 8px/10px "Roboto";
  --ds-font-caption-s-8-normal-medium-size: 8px;
  --ds-font-caption-s-8-normal-medium-line: 10px;
  --ds-font-caption-s-8-normal-medium-spacing: 0.5px;
  --ds-font-caption-s-8-normal-medium-weight: 500;
  --ds-font-caption-s-8-caps-regular: 400 8px/10px "Roboto";
  --ds-font-caption-s-8-caps-regular-size: 8px;
  --ds-font-caption-s-8-caps-regular-line: 10px;
  --ds-font-caption-s-8-caps-regular-spacing: 0.5px;
  --ds-font-caption-s-8-caps-regular-weight: 400;
  --ds-font-caption-s-8-caps-medium: 500 8px/10px "Roboto";
  --ds-font-caption-s-8-caps-medium-size: 8px;
  --ds-font-caption-s-8-caps-medium-line: 10px;
  --ds-font-caption-s-8-caps-medium-spacing: 0.5px;
  --ds-font-caption-s-8-caps-medium-weight: 500;
  /* --- Тени (эффект-стили) --- */
  --ds-shadow-shadows-none: 0px 2px 0px 0px #ffffff;
  --ds-shadow-shadows-01-dp-sl: 0px 0px 4px 0px rgba(33, 33, 33, 0.12), 0px 2px 2px 0px rgba(33, 33, 33, 0.04);
  --ds-shadow-shadows-08-dp-s: 0px 0px 16px 0px rgba(33, 33, 33, 0.12), 0px 4px 6px 0px rgba(33, 33, 33, 0.1);
  --ds-shadow-shadows-12-dp-m: 0px 0px 28px 0px rgba(33, 33, 33, 0.12), 0px 10px 24px 0px rgba(33, 33, 33, 0.12);
  --ds-shadow-shadows-24-dp-xl: 0px 0px 32px 0px rgba(33, 33, 33, 0.16), 0px 12px 16px 0px rgba(33, 33, 33, 0.16);
  /* --- Цветовые стили --- */
  --ds-paint-surface-default: #ffffff;
  --ds-paint-surface-default-v2: #f8f9fc;
  --ds-paint-surface-hover: #f5f5f5;
  --ds-paint-surface-selected: #ebebeb;
  --ds-paint-surface-press: #e0e0e0;
  --ds-paint-surface-disable: #e0e0e0;
  --ds-paint-surface-snacktooltip: #424242;
  --ds-paint-surface-sidebar: #f8f9fc;
  --ds-paint-surface-sidebar-selected: #f0f5ff;
  --ds-paint-surface-sidebar-active: #a8c9ff;
  --ds-paint-table-surfase-default: #ffffff;
  --ds-paint-table-surfase-hover: #f5f5f5;
  --ds-paint-table-surfase-selected: #ebebeb;
  --ds-paint-table-surfase-group: #ebebeb;
  --ds-paint-table-surfase-head: #f0f5ff;
  --ds-paint-table-surfase-head-group: #a8c9ff;
  --ds-paint-text-primary: #333333;
  --ds-paint-text-inversive: #ffffff;
  --ds-paint-text-caption: #616161;
  --ds-paint-text-placeholder: #d6d6d6;
  --ds-paint-text-disable: #9e9e9e;
  --ds-paint-text-accent: #448aff;
  --ds-paint-text-positive: #14b456;
  --ds-paint-text-warning: #ffab40;
  --ds-paint-text-negative: #ff5252;
  --ds-paint-button-neutral-default: #ffffff;
  --ds-paint-button-neutral-hover: #f5f5f5;
  --ds-paint-button-neutral-press: #ebebeb;
  --ds-paint-button-neutral-disable: #ebebeb;
  --ds-paint-button-accent-default: #448aff;
  --ds-paint-button-accent-hover: #3969d5;
  --ds-paint-button-accent-press: #2651b5;
  --ds-paint-button-positive-default: #14b456;
  --ds-paint-button-positive-hover: #0f852c;
  --ds-paint-button-positive-press: #0a571a;
  --ds-paint-button-warning-default: #ffab40;
  --ds-paint-button-warning-hover: #ea7806;
  --ds-paint-button-warning-press: #994000;
  --ds-paint-button-negative-default: #ff5252;
  --ds-paint-button-negative-hover: #de1a12;
  --ds-paint-button-negative-press: #7f0f0a;
  --ds-paint-icon-primary: #616161;
  --ds-paint-icon-inversive: #ffffff;
  --ds-paint-icon-disable: #9e9e9e;
  --ds-paint-icon-accent: #448aff;
  --ds-paint-icon-positive: #14b456;
  --ds-paint-icon-warning: #ea7806;
  --ds-paint-icon-negative: #ff5252;
  --ds-paint-shapes-default: #ffffff;
  --ds-paint-shapes-superlight-nt: #f5f5f5;
  --ds-paint-shapes-lightest-nt: #ebebeb;
  --ds-paint-shapes-lighter-nt: #e0e0e0;
  --ds-paint-shapes-lighter-pr: #f8f9fc;
  --ds-paint-shapes-lighter-sc: #ebfbf2;
  --ds-paint-shapes-lighter-wr: #fff9f0;
  --ds-paint-shapes-lighter-er: #fff2f2;
  --ds-paint-shapes-lightest-mg: #fbf7fc;
  --ds-paint-shapes-lightest-br: #f7e9e3;
  --ds-paint-shapes-lightest-db: #f9fafb;
  --ds-paint-stroke-default: #e0e0e0;
  --ds-paint-stroke-hover: #9e9e9e;
  --ds-paint-stroke-disable: #ebebeb;
  --ds-paint-stroke-primary: #448aff;
  --ds-paint-stroke-secondary: #14b456;
  --ds-paint-stroke-warning: #ffab40;
  --ds-paint-stroke-error: #ff5252;
}

/* Классы типографики: применяются как есть, без хардкода размеров */
.ds-text-header-l-34-normal-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-header-l-34-normal-regular-size);
  line-height: var(--ds-font-header-l-34-normal-regular-line);
  letter-spacing: var(--ds-font-header-l-34-normal-regular-spacing);
  font-weight: var(--ds-font-header-l-34-normal-regular-weight);
}
.ds-text-header-l-34-normal-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-header-l-34-normal-medium-size);
  line-height: var(--ds-font-header-l-34-normal-medium-line);
  letter-spacing: var(--ds-font-header-l-34-normal-medium-spacing);
  font-weight: var(--ds-font-header-l-34-normal-medium-weight);
}
.ds-text-header-l-34-caps-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-header-l-34-caps-regular-size);
  line-height: var(--ds-font-header-l-34-caps-regular-line);
  letter-spacing: var(--ds-font-header-l-34-caps-regular-spacing);
  font-weight: var(--ds-font-header-l-34-caps-regular-weight);
  text-transform: uppercase;
}
.ds-text-header-l-34-caps-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-header-l-34-caps-medium-size);
  line-height: var(--ds-font-header-l-34-caps-medium-line);
  letter-spacing: var(--ds-font-header-l-34-caps-medium-spacing);
  font-weight: var(--ds-font-header-l-34-caps-medium-weight);
  text-transform: uppercase;
}
.ds-text-header-m-24-normal-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-header-m-24-normal-regular-size);
  line-height: var(--ds-font-header-m-24-normal-regular-line);
  letter-spacing: var(--ds-font-header-m-24-normal-regular-spacing);
  font-weight: var(--ds-font-header-m-24-normal-regular-weight);
}
.ds-text-header-m-24-normal-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-header-m-24-normal-medium-size);
  line-height: var(--ds-font-header-m-24-normal-medium-line);
  letter-spacing: var(--ds-font-header-m-24-normal-medium-spacing);
  font-weight: var(--ds-font-header-m-24-normal-medium-weight);
}
.ds-text-header-m-24-caps-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-header-m-24-caps-regular-size);
  line-height: var(--ds-font-header-m-24-caps-regular-line);
  letter-spacing: var(--ds-font-header-m-24-caps-regular-spacing);
  font-weight: var(--ds-font-header-m-24-caps-regular-weight);
  text-transform: uppercase;
}
.ds-text-header-m-24-caps-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-header-m-24-caps-medium-size);
  line-height: var(--ds-font-header-m-24-caps-medium-line);
  letter-spacing: var(--ds-font-header-m-24-caps-medium-spacing);
  font-weight: var(--ds-font-header-m-24-caps-medium-weight);
  text-transform: uppercase;
}
.ds-text-header-s-20-normal-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-header-s-20-normal-regular-size);
  line-height: var(--ds-font-header-s-20-normal-regular-line);
  letter-spacing: var(--ds-font-header-s-20-normal-regular-spacing);
  font-weight: var(--ds-font-header-s-20-normal-regular-weight);
}
.ds-text-header-s-20-normal-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-header-s-20-normal-medium-size);
  line-height: var(--ds-font-header-s-20-normal-medium-line);
  letter-spacing: var(--ds-font-header-s-20-normal-medium-spacing);
  font-weight: var(--ds-font-header-s-20-normal-medium-weight);
}
.ds-text-header-s-20-caps-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-header-s-20-caps-regular-size);
  line-height: var(--ds-font-header-s-20-caps-regular-line);
  letter-spacing: var(--ds-font-header-s-20-caps-regular-spacing);
  font-weight: var(--ds-font-header-s-20-caps-regular-weight);
  text-transform: uppercase;
}
.ds-text-header-s-20-caps-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-header-s-20-caps-medium-size);
  line-height: var(--ds-font-header-s-20-caps-medium-line);
  letter-spacing: var(--ds-font-header-s-20-caps-medium-spacing);
  font-weight: var(--ds-font-header-s-20-caps-medium-weight);
  text-transform: uppercase;
}
.ds-text-body-l-18-normal-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-body-l-18-normal-regular-size);
  line-height: var(--ds-font-body-l-18-normal-regular-line);
  letter-spacing: var(--ds-font-body-l-18-normal-regular-spacing);
  font-weight: var(--ds-font-body-l-18-normal-regular-weight);
}
.ds-text-body-l-18-normal-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-body-l-18-normal-medium-size);
  line-height: var(--ds-font-body-l-18-normal-medium-line);
  letter-spacing: var(--ds-font-body-l-18-normal-medium-spacing);
  font-weight: var(--ds-font-body-l-18-normal-medium-weight);
}
.ds-text-body-l-18-caps-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-body-l-18-caps-regular-size);
  line-height: var(--ds-font-body-l-18-caps-regular-line);
  letter-spacing: var(--ds-font-body-l-18-caps-regular-spacing);
  font-weight: var(--ds-font-body-l-18-caps-regular-weight);
  text-transform: uppercase;
}
.ds-text-body-l-18-caps-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-body-l-18-caps-medium-size);
  line-height: var(--ds-font-body-l-18-caps-medium-line);
  letter-spacing: var(--ds-font-body-l-18-caps-medium-spacing);
  font-weight: var(--ds-font-body-l-18-caps-medium-weight);
  text-transform: uppercase;
}
.ds-text-body-m-16-normal-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
}
.ds-text-body-m-16-normal-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-body-m-16-normal-medium-size);
  line-height: var(--ds-font-body-m-16-normal-medium-line);
  letter-spacing: var(--ds-font-body-m-16-normal-medium-spacing);
  font-weight: var(--ds-font-body-m-16-normal-medium-weight);
}
.ds-text-body-m-16-caps-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-body-m-16-caps-regular-size);
  line-height: var(--ds-font-body-m-16-caps-regular-line);
  letter-spacing: var(--ds-font-body-m-16-caps-regular-spacing);
  font-weight: var(--ds-font-body-m-16-caps-regular-weight);
  text-transform: uppercase;
}
.ds-text-body-m-16-caps-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-body-m-16-caps-medium-size);
  line-height: var(--ds-font-body-m-16-caps-medium-line);
  letter-spacing: var(--ds-font-body-m-16-caps-medium-spacing);
  font-weight: var(--ds-font-body-m-16-caps-medium-weight);
  text-transform: uppercase;
}
.ds-text-body-s-14-normal-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
}
.ds-text-body-s-14-normal-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
}
.ds-text-body-s-14-caps-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-body-s-14-caps-regular-size);
  line-height: var(--ds-font-body-s-14-caps-regular-line);
  letter-spacing: var(--ds-font-body-s-14-caps-regular-spacing);
  font-weight: var(--ds-font-body-s-14-caps-regular-weight);
  text-transform: uppercase;
}
.ds-text-body-s-14-caps-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-body-s-14-caps-medium-size);
  line-height: var(--ds-font-body-s-14-caps-medium-line);
  letter-spacing: var(--ds-font-body-s-14-caps-medium-spacing);
  font-weight: var(--ds-font-body-s-14-caps-medium-weight);
  text-transform: uppercase;
}
.ds-text-caption-l-12-normal-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
}
.ds-text-caption-l-12-normal-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-caption-l-12-normal-medium-size);
  line-height: var(--ds-font-caption-l-12-normal-medium-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-medium-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-medium-weight);
}
.ds-text-caption-l-12-caps-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-caption-l-12-caps-regular-size);
  line-height: var(--ds-font-caption-l-12-caps-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-caps-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-caps-regular-weight);
  text-transform: uppercase;
}
.ds-text-caption-l-12-caps-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-caption-l-12-caps-medium-size);
  line-height: var(--ds-font-caption-l-12-caps-medium-line);
  letter-spacing: var(--ds-font-caption-l-12-caps-medium-spacing);
  font-weight: var(--ds-font-caption-l-12-caps-medium-weight);
  text-transform: uppercase;
}
.ds-text-caption-m-10-normal-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-caption-m-10-normal-regular-size);
  line-height: var(--ds-font-caption-m-10-normal-regular-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-regular-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-regular-weight);
}
.ds-text-caption-m-10-normal-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-caption-m-10-normal-medium-size);
  line-height: var(--ds-font-caption-m-10-normal-medium-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-medium-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-medium-weight);
  text-transform: capitalize;
}
.ds-text-caption-m-10-caps-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-caption-m-10-caps-regular-size);
  line-height: var(--ds-font-caption-m-10-caps-regular-line);
  letter-spacing: var(--ds-font-caption-m-10-caps-regular-spacing);
  font-weight: var(--ds-font-caption-m-10-caps-regular-weight);
  text-transform: uppercase;
}
.ds-text-caption-m-10-caps-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-caption-m-10-caps-medium-size);
  line-height: var(--ds-font-caption-m-10-caps-medium-line);
  letter-spacing: var(--ds-font-caption-m-10-caps-medium-spacing);
  font-weight: var(--ds-font-caption-m-10-caps-medium-weight);
  text-transform: uppercase;
}
.ds-text-caption-s-8-normal-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-caption-s-8-normal-regular-size);
  line-height: var(--ds-font-caption-s-8-normal-regular-line);
  letter-spacing: var(--ds-font-caption-s-8-normal-regular-spacing);
  font-weight: var(--ds-font-caption-s-8-normal-regular-weight);
}
.ds-text-caption-s-8-normal-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-caption-s-8-normal-medium-size);
  line-height: var(--ds-font-caption-s-8-normal-medium-line);
  letter-spacing: var(--ds-font-caption-s-8-normal-medium-spacing);
  font-weight: var(--ds-font-caption-s-8-normal-medium-weight);
}
.ds-text-caption-s-8-caps-regular {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-caption-s-8-caps-regular-size);
  line-height: var(--ds-font-caption-s-8-caps-regular-line);
  letter-spacing: var(--ds-font-caption-s-8-caps-regular-spacing);
  font-weight: var(--ds-font-caption-s-8-caps-regular-weight);
  text-transform: uppercase;
}
.ds-text-caption-s-8-caps-medium {
  font-family: "Roboto", sans-serif;
  font-size: var(--ds-font-caption-s-8-caps-medium-size);
  line-height: var(--ds-font-caption-s-8-caps-medium-line);
  letter-spacing: var(--ds-font-caption-s-8-caps-medium-spacing);
  font-weight: var(--ds-font-caption-s-8-caps-medium-weight);
  text-transform: uppercase;
}
/* ==== /СТИЛИ FIGMA ==== */

```

### Стили компонентов

Порядок важен: сначала автоген всех компонентов, затем ВЫВЕРЕННЫЕ вручную файлы — они должны перекрывать автоген, а не наоборот.

```css
/* ============================================================
   iiko DS — компоненты (все 111, сгенерировано из Figma)
   Классы: .ds-<компонент> + модификаторы --<вариант>
   Все значения — только токены из tokens.css
   ============================================================ */

/* Arrow [55939:14119] — 13 вариантов; оси: Content */
.ds-arrow {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-arrow__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-arrow__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-arrow__icon svg path {
  fill: currentColor;
}
.ds-arrow__drop-down {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}

/* Arrow list [55939:13307] — 13 вариантов; оси: Content */
.ds-arrow-list {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-arrow-list__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-arrow-list__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-arrow-list__icon svg path {
  fill: currentColor;
}
.ds-arrow-list__drop-down {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}

/* Arrow menu [56090:1628] — 13 вариантов; оси: Content */
.ds-arrow-menu {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-arrow-menu__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-arrow-menu__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-arrow-menu__icon svg path {
  fill: currentColor;
}
.ds-arrow-menu__drop-down {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}

/* Arrow select [57735:17989] — 13 вариантов; оси: Content */
.ds-arrow-select {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-arrow-select__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-arrow-select__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-arrow-select__icon svg path {
  fill: currentColor;
}
.ds-arrow-select__drop-down {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}

/* Autocomplete form [58107:8230] — 10 вариантов; оси: Variant, State */
.ds-autocomplete-form {
  min-height: 48px;
  width: 250px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-autocomplete-form__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-form-field-input-label-text-color, #616161);
  white-space: nowrap;
}
.ds-autocomplete-form__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-autocomplete-form__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-autocomplete-form__icon svg path {
  fill: currentColor;
}
.ds-autocomplete-form__input {
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support, 4px);
}
.ds-autocomplete-form__input-frame {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  padding: var(--ds-form-field-m-size-pad-input-top, 12px) var(--ds-form-field-m-size-pad-input-right, 12px) var(--ds-form-field-m-size-pad-input-bottom, 12px) var(--ds-form-field-m-size-pad-input-left, 12px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-autocomplete-form__support {
  display: flex;
  flex-direction: row;
}
.ds-autocomplete-form--empty {
  color: var(--ds-color-form-field-input-label-text-color, #616161);
}
.ds-autocomplete-form--populated {
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
}
.ds-autocomplete-form--empty:hover {
  background: var(--ds-color-form-field-filled-hover-input-background-hover, #f5f5f5);
  border: 1px solid var(--ds-color-form-field-filled-hover-border-color, #9e9e9e);
}
.ds-autocomplete-form--populated:hover {
  color: var(--ds-color-form-field-filled-hover-label-text-color, #616161);
}
.ds-autocomplete-form--populated:focus-visible {
  color: var(--ds-color-form-field-filled-focus-label-text-color, #448aff);
}
.ds-autocomplete-form--empty:disabled {
  color: var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e);
}
.ds-autocomplete-form--empty.ds-autocomplete-form--disabled {
  color: var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e);
}
.ds-autocomplete-form--populated:disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-autocomplete-form--populated.ds-autocomplete-form--disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-autocomplete-form--disabled {
  pointer-events: none;
}

/* Backdrop [53623:806] — 1 вариантов; оси: Type */
/* height из макета Figma: 240px — размер примера, задавайте по месту */
.ds-backdrop {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-backdrop-background, #333333);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* Button toggle [17039:71554] — 12 вариантов; оси: Size, Type, Content */
.ds-button-toggle {
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-toggle-gap, 4px);
  padding: var(--ds-button-toggle-pad-top, 4px) var(--ds-button-toggle-pad-right, 4px) var(--ds-button-toggle-pad-bottom, 4px) var(--ds-button-toggle-pad-left, 4px);
  border-radius: var(--ds-button-toggle-border-radius, 12px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-button-toggle__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-button-accent-outlined-default-text-color, #448aff);
  white-space: nowrap;
}
.ds-button-toggle__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-button-toggle__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-button-toggle__icon svg path {
  fill: currentColor;
}
.ds-button-toggle--s .ds-button-toggle__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-button-toggle--xs .ds-button-toggle__icon {
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
}
.ds-button-toggle--filled.ds-button-toggle--text {
  background: var(--ds-color-button-toggle-filled-background, #ffffff);
  color: var(--ds-color-button-accent-outlined-default-text-color, #448aff);
  border: none;
  box-shadow: none;
}
.ds-button-toggle--outlined.ds-button-toggle--text {
  background: var(--ds-color-button-toggle-outlined-background, #ffffff);
  border: 1px solid var(--ds-color-button-toggle-outlined-border-color, #e0e0e0);
  color: var(--ds-color-button-accent-filled-default-text-color, #ffffff);
  box-shadow: none;
}
.ds-button-toggle--outlined.ds-button-toggle--icon {
  background: var(--ds-color-button-toggle-outlined-background, #ffffff);
  border: 1px solid var(--ds-color-button-toggle-outlined-border-color, #e0e0e0);
}
.ds-button-toggle--filled.ds-button-toggle--icon {
  background: var(--ds-color-button-toggle-filled-background, #ffffff);
}

/* Checkbox label [53810:880] — 9 вариантов; оси: Variant, Type */
.ds-checkbox-label {
  min-height: var(--ds-size-5x);
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: var(--ds-checkbox-label-gap-support, 4px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-checkbox-label__label {
  font-size: var(--ds-typography-font-size-3-5x);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-line-height-5x);
  letter-spacing: 0.25px;
  color: var(--ds-color-checkbox-label-text-color, #333333);
  white-space: nowrap;
}
.ds-checkbox-label__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-checkbox-label__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-checkbox-label__icon svg path {
  fill: currentColor;
}
.ds-checkbox-label__form {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-checkbox-label-gap, 8px);
}
.ds-checkbox-label__left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-checkbox-label__right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-checkbox-label__support {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 var(--ds-checkbox-label-pad-left-support-7x, 28px);
}
.ds-checkbox-label__support-text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-checkbox-label-text-support-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-checkbox-label-text-support-color, #616161);
}
.ds-checkbox-label--normal.ds-checkbox-label--deselected {
  color: var(--ds-color-checkbox-label-text-color, #333333);
}
.ds-checkbox-label--normal.ds-checkbox-label--selected {
  color: var(--ds-color-checkbox-label-text-color, #333333);
}
.ds-checkbox-label--normal.ds-checkbox-label--inderterminate {
  color: var(--ds-color-checkbox-label-text-color, #333333);
}
.ds-checkbox-label--error.ds-checkbox-label--deselected {
  color: var(--ds-color-checkbox-label-text-color, #333333);
}
.ds-checkbox-label--error.ds-checkbox-label--selected {
  color: var(--ds-color-checkbox-label-text-color, #333333);
}
.ds-checkbox-label--error.ds-checkbox-label--inderterminate {
  color: var(--ds-color-checkbox-label-text-color, #333333);
}
.ds-checkbox-label--disable.ds-checkbox-label--deselected {
  color: var(--ds-color-checkbox-label-text-disable-color, #9e9e9e);
}
.ds-checkbox-label--disable.ds-checkbox-label--selected {
  color: var(--ds-color-checkbox-label-text-disable-color, #9e9e9e);
}
.ds-checkbox-label--disable.ds-checkbox-label--inderterminate {
  color: var(--ds-color-checkbox-label-text-disable-color, #9e9e9e);
}

/* Chips [17168:83542] — 18 вариантов; оси: Size, Type, State */
.ds-chips {
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: var(--ds-size-8x);
  padding: var(--ds-chips-m-size-pad-top, 6px) var(--ds-chips-m-size-pad-right, 8px) var(--ds-chips-m-size-pad-bottom, 6px) var(--ds-chips-m-size-pad-left, 8px);
  gap: var(--ds-chips-m-size-gap, 8px);
  border-radius: var(--ds-chips-m-size-border-radius, 12px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-text-color, #333333);
  white-space: nowrap;
}
.ds-chips__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-chips-icon-color);
}
.ds-chips__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-chips__icon svg path {
  fill: currentColor;
}
.ds-chips__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-chips__add {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-chips__chip-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
}
.ds-chips__chip-text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-chips-text-color, #333333);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-text-color, #333333);
}
.ds-chips__close {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-chips--s {
  gap: var(--ds-chips-s-size-gap, 4px);
  padding: var(--ds-chips-s-size-pad-top, 4px) var(--ds-chips-s-size-pad-right, 6px) var(--ds-chips-s-size-pad-bottom, 4px) var(--ds-chips-s-size-pad-left, 6px);
  border-radius: var(--ds-chips-s-size-border-radius, 8px);
}
.ds-chips--s .ds-chips__icon {
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
}
.ds-chips--outlined {
  background: var(--ds-color-chips-outlined-default-background, #ffffff);
  border: 1px solid var(--ds-color-chips-outlined-default-border-color, #e0e0e0);
  color: var(--ds-color-chips-text-color, #333333);
}
.ds-chips--outlined:hover {
  background: var(--ds-color-chips-outlined-hover-background, #ffffff);
  border: 1px solid var(--ds-color-chips-outlined-hover-border-color, #9e9e9e);
}
.ds-chips--outlined:focus-visible {
  background: var(--ds-color-chips-outlined-focus-background, #ffffff);
}
.ds-chips--outlined:active {
  background: var(--ds-color-chips-outlined-press-background, #e0e0e0);
  border: 1px solid var(--ds-color-chips-outlined-press-border-color, #e0e0e0);
}
.ds-chips--outlined:disabled {
  background: var(--ds-color-chips-disable-background-outlined, #ffffff);
  border: 1px solid var(--ds-color-chips-disable-border-color, #ebebeb);
  color: var(--ds-color-chips-disable-text-color, #9e9e9e);
}
.ds-chips--outlined.ds-chips--disabled {
  background: var(--ds-color-chips-disable-background-outlined, #ffffff);
  border: 1px solid var(--ds-color-chips-disable-border-color, #ebebeb);
  color: var(--ds-color-chips-disable-text-color, #9e9e9e);
}
.ds-chips--filled {
  background: var(--ds-color-chips-filled-default-background, #f8f9fc);
  color: var(--ds-color-chips-text-color, #333333);
}
.ds-chips--filled:hover {
  background: var(--ds-color-chips-filled-hover-background, #f5f5f5);
}
.ds-chips--filled:active {
  background: var(--ds-color-chips-filled-press-background, #e0e0e0);
}
.ds-chips--filled:disabled {
  background: var(--ds-color-chips-disable-background-filled, #ebebeb);
  color: var(--ds-color-chips-disable-text-color, #9e9e9e);
}
.ds-chips--filled.ds-chips--disabled {
  background: var(--ds-color-chips-disable-background-filled, #ebebeb);
  color: var(--ds-color-chips-disable-text-color, #9e9e9e);
}
.ds-chips--disabled {
  pointer-events: none;
}

/* Chips group [55750:5485] — 2 вариантов; оси: Size */
.ds-chips-group {
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-chips-gap-group, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips-group__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-text-color, #333333);
  white-space: nowrap;
}
.ds-chips-group__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-chips-icon-color);
}
.ds-chips-group__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-chips-group__icon svg path {
  fill: currentColor;
}
.ds-chips-group--s .ds-chips-group__icon {
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
}

/* Chips Input [52916:14622] — 16 вариантов; оси: Size, State */
.ds-chips-input {
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-1x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips-input__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: #616161;
  white-space: nowrap;
}
.ds-chips-input__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-chips-icon-color);
}
.ds-chips-input__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-chips-input__icon svg path {
  fill: currentColor;
}
.ds-chips-input__frame {
  display: flex;
  flex-direction: column;
  gap: var(--ds-chips-input-gap-chips-input-frame, 4px);
  padding: var(--ds-chips-input-m-size-pad-top, 4px) var(--ds-size-3x) var(--ds-chips-input-m-size-pad-bottom, 8px) var(--ds-size-3x);
  border-radius: var(--ds-size-3x);
  background: #f8f9fc;
  border: 1px solid #e0e0e0;
}
.ds-chips-input__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
}
.ds-chips-input__support {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-1x);
}
.ds-chips-input__text {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: 0 var(--ds-size-3x) 0 var(--ds-size-3x);
}
.ds-chips-input__hint {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: 0 var(--ds-size-3x) 0 var(--ds-size-3x);
}
.ds-chips-input--s {
  gap: var(--ds-form-field-gap-input-support, 4px);
}
.ds-chips-input--s .ds-chips-input__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-chips-input:hover {
  background: #f5f5f5;
  border: 1px solid #9e9e9e;
}
.ds-chips-input:focus-visible {
  color: #448aff;
}
.ds-chips-input:disabled {
  color: #9e9e9e;
}
.ds-chips-input.ds-chips-input--disabled {
  color: #9e9e9e;
}
.ds-chips-input--disabled {
  pointer-events: none;
}

/* Chips Input [61382:55775] — 16 вариантов; оси: Size, State; ДУБЛЬ имени — второй сет «Chips Input», различать по node_id */
.ds-chips-input-2 {
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support, 4px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips-input-2__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
  white-space: nowrap;
}
.ds-chips-input-2__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-chips-icon-color);
}
.ds-chips-input-2__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-chips-input-2__icon svg path {
  fill: currentColor;
}
.ds-chips-input-2__frame {
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  padding: var(--ds-form-field-m-size-pad-input-top, 12px) var(--ds-form-field-m-size-pad-input-right, 12px) var(--ds-form-field-m-size-pad-input-bottom, 12px) var(--ds-form-field-m-size-pad-input-left, 12px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-chips-input-2__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-content);
}
.ds-chips-input-2__support {
  display: flex;
  flex-direction: row;
  gap: var(--ds-form-field-gap-input-support, 4px);
}
.ds-chips-input-2__text {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: 0 var(--ds-form-field-pad-support-right, 12px) 0 var(--ds-form-field-pad-support-left, 12px);
}
.ds-chips-input-2__hint {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: 0 var(--ds-form-field-pad-support-right, 12px) 0 var(--ds-form-field-pad-support-left, 12px);
}
.ds-chips-input-2--s .ds-chips-input-2__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-chips-input-2:hover {
  color: var(--ds-color-form-field-filled-hover-label-text-color, #616161);
}
.ds-chips-input-2:focus-visible {
  color: var(--ds-color-form-field-filled-focus-label-text-color, #448aff);
}
.ds-chips-input-2:disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-chips-input-2.ds-chips-input-2--disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-chips-input-2--disabled {
  pointer-events: none;
}

/* Chips input cell [60231:75648] — 8 вариантов; оси: State */
.ds-chips-input-cell {
  min-height: var(--ds-size-10x);
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips-input-cell__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: #616161;
  white-space: nowrap;
}
.ds-chips-input-cell__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-chips-icon-color);
}
.ds-chips-input-cell__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-chips-input-cell__icon svg path {
  fill: currentColor;
}
.ds-chips-input-cell__frame {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-chips-input-gap-chips-input-frame, 4px);
  border-radius: var(--ds-size-3x);
  background: #f8f9fc;
  border: 1px solid #e0e0e0;
}
.ds-chips-input-cell__support {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-1x);
}
.ds-chips-input-cell:hover {
  border: 1px solid var(--ds-color-table-cell-content-hover-border-color, #9e9e9e);
}
.ds-chips-input-cell:focus-visible {
  color: #333333;
}
.ds-chips-input-cell:disabled {
  color: #9e9e9e;
}
.ds-chips-input-cell.ds-chips-input-cell--disabled {
  color: #9e9e9e;
}
.ds-chips-input-cell--disabled {
  pointer-events: none;
}

/* Control arrow button [52868:3935] — 3 вариантов; оси: Size */
.ds-control-arrow-button {
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-0-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-control-arrow-button__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: var(--ds-size-3x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-control-arrow-button__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-control-arrow-button__icon svg path {
  fill: currentColor;
}
.ds-control-arrow-button__icon-size {
  height: var(--ds-size-3x);
  display: flex;
  flex-direction: row;
}
.ds-control-arrow-button--s .ds-control-arrow-button__icon {
  width: var(--ds-size-3x);
  height: var(--ds-size-3x);
}

/* Control Panel [58501:4052] — 3 вариантов; оси: Type */
.ds-control-panel {
  display: flex;
  width: 280px;
  padding: var(--ds-size-1x) 0 var(--ds-size-1x) 0;
  gap: 74px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-control-panel__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-text-primary, #333333);
  white-space: nowrap;
}
.ds-control-panel__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-control-panel__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-control-panel__icon svg path {
  fill: currentColor;
}
.ds-control-panel__elements {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2-5x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2x);
  border-radius: var(--ds-radius-circular, 9999px);
  background: var(--ds-color-brand-neutral-default, #ffffff);
}
.ds-control-panel__month {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-primary, #333333);
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-text-primary, #333333);
}
.ds-control-panel__button-icon-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap, 8px);
}
.ds-control-panel__button-icon {
  display: flex;
  flex-direction: row;
  gap: var(--ds-button-icon-gap, 8px);
  padding: var(--ds-button-icon-m-size-pad-top, 8px) var(--ds-button-icon-m-size-pad-right, 8px) var(--ds-button-icon-m-size-pad-bottom, 8px) var(--ds-button-icon-m-size-pad-left, 8px);
  border-radius: var(--ds-button-icon-border-radius, 8px);
}
.ds-control-panel--control {
  flex-direction: row;
  align-items: center;
  color: var(--ds-color-text-primary, #333333);
}
.ds-control-panel--week {
  width: fit-content;
  flex-direction: row;
  padding: var(--ds-size-0-5x) 0 var(--ds-size-0-5x) 0;
  color: var(--ds-color-text-primary, #333333);
}
.ds-control-panel--calendar {
  width: fit-content;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  color: var(--ds-color-text-primary, #333333);
}

/* Control Panel [58982:11018] — 2 вариантов; оси: Type; ДУБЛЬ имени — второй сет «Control Panel», различать по node_id */
.ds-control-panel-2 {
  display: flex;
  flex-direction: row;
  width: 280px;
  padding: var(--ds-size-1x) 0 var(--ds-size-1x) 0;
  gap: 74px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-control-panel-2__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-text-primary, #333333);
  white-space: nowrap;
}
.ds-control-panel-2__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-control-panel-2__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-control-panel-2__icon svg path {
  fill: currentColor;
}
.ds-control-panel-2__elements {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2-5x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2x);
  border-radius: var(--ds-radius-circular, 9999px);
  background: var(--ds-color-brand-neutral-default, #ffffff);
}
.ds-control-panel-2__month {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-primary, #333333);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-text-primary, #333333);
}
.ds-control-panel-2__button-icon-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-icon-gap, 8px);
}
.ds-control-panel-2--control {
  align-items: center;
  color: var(--ds-color-text-primary, #333333);
}
.ds-control-panel-2--time {
  width: fit-content;
  padding: var(--ds-size-0-5x) 0 var(--ds-size-0-5x) 0;
  color: var(--ds-color-text-primary, #333333);
}

/* Datepicker [58509:5439] — 3 вариантов; оси: Type */
.ds-datepicker {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--ds-size-2x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-4x);
  border-radius: var(--ds-size-3x);
  border: 1px solid var(--ds-color-stroke-default, #e0e0e0);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-datepicker__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-text-primary, #333333);
  white-space: nowrap;
}
.ds-datepicker__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-datepicker__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-datepicker__icon svg path {
  fill: currentColor;
}
.ds-datepicker__control-panel {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 74px;
  padding: var(--ds-size-1x) 0 var(--ds-size-1x) 0;
}
.ds-datepicker__elements {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2-5x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2x);
  border-radius: var(--ds-radius-circular, 9999px);
  background: var(--ds-color-brand-neutral-default, #ffffff);
}
.ds-datepicker__button-icon-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap, 8px);
}
.ds-datepicker__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-datepicker__week-6 {
  height: 48px;
  display: flex;
  flex-direction: row;
}
.ds-datepicker--day {
  color: var(--ds-color-text-primary, #333333);
}
.ds-datepicker--year {
  color: var(--ds-color-text-primary, #333333);
}
.ds-datepicker--month {
  color: var(--ds-color-text-primary, #333333);
}

/* Dialog content [53535:1369] — 1 вариантов; оси: State */
.ds-dialog-content {
  min-height: 204px;
  width: 500px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-dialog-background, #ffffff);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-content__label {
  font-size: var(--ds-font-body-m-16-normal-medium-size);
  line-height: var(--ds-font-body-m-16-normal-medium-line);
  letter-spacing: var(--ds-font-body-m-16-normal-medium-spacing);
  font-weight: var(--ds-font-body-m-16-normal-medium-weight);
  color: var(--ds-color-dialog-content-title-color, #333333);
  white-space: nowrap;
}
.ds-dialog-content__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: var(--ds-size-3x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-dialog-content__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-dialog-content__icon svg path {
  fill: currentColor;
}
.ds-dialog-content__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-top, 2px) var(--ds-scroll-pad-right, 2px) var(--ds-scroll-pad-bottom, 2px) var(--ds-scroll-pad-left, 2px);
}
.ds-dialog-content__background {
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-scroll-border-radius, 8px);
  background: var(--ds-color-scroll-default-background, #fafafa);
}

/* Dialog footer [53749:638] — 1 вариантов; оси: State */
.ds-dialog-footer {
  min-height: 69px;
  width: 501px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-dialog-background, #ffffff);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-footer__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-button-accent-filled-default-text-color, #ffffff);
  white-space: nowrap;
}
.ds-dialog-footer__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-dialog-footer__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-dialog-footer__icon svg path {
  fill: currentColor;
}
.ds-dialog-footer__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-dialog-footer__action {
  height: 68px;
  display: flex;
  flex-direction: column;
  padding: var(--ds-dialog-footer-pad-top, 16px) var(--ds-dialog-footer-pad-right, 24px) var(--ds-dialog-footer-pad-bottom, 16px) var(--ds-dialog-footer-pad-left, 24px);
}
.ds-dialog-footer__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-m-size-gap, 8px);
  padding: var(--ds-button-m-size-pad-top, 8px) var(--ds-button-m-size-pad-right, 12px) var(--ds-button-m-size-pad-bottom, 8px) var(--ds-button-m-size-pad-left, 12px);
  border-radius: var(--ds-button-border-radius, 8px);
  background: var(--ds-color-button-accent-filled-default-background, #448aff);
  box-shadow: var(--ds-shadow-shadows-01-dp-sl);
}

/* Dialog header [53535:1322] — 2 вариантов; оси: Type */
.ds-dialog-header {
  width: 500px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-dialog-background, #ffffff);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-header__label {
  font-size: var(--ds-font-header-s-20-normal-medium-size);
  line-height: var(--ds-font-header-s-20-normal-medium-line);
  letter-spacing: var(--ds-font-header-s-20-normal-medium-spacing);
  font-weight: var(--ds-font-header-s-20-normal-medium-weight);
  color: var(--ds-color-dialog-header-title-color, #333333);
  white-space: nowrap;
}
.ds-dialog-header__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-dialog-header__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-dialog-header__icon svg path {
  fill: currentColor;
}
.ds-dialog-header__title-container {
  display: flex;
  flex-direction: row;
  gap: var(--ds-dialog-header-gap, 8px);
}
.ds-dialog-header__description {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-dialog-header-desc-color, #616161);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-dialog-header-desc-color, #616161);
}
.ds-dialog-header__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-dialog-header--text {
  color: var(--ds-color-dialog-header-title-color, #333333);
}

/* Dialog view [52952:1285] — 1 вариантов; оси: State */
.ds-dialog-view {
  min-height: 364px;
  width: 500px;
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-dialog-border-radius, 12px);
  background: var(--ds-color-dialog-background, #ffffff);
  box-shadow: var(--ds-shadow-shadows-12-dp-m);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-view__label {
  font-size: var(--ds-font-header-s-20-normal-medium-size);
  line-height: var(--ds-font-header-s-20-normal-medium-line);
  letter-spacing: var(--ds-font-header-s-20-normal-medium-spacing);
  font-weight: var(--ds-font-header-s-20-normal-medium-weight);
  color: var(--ds-color-dialog-header-title-color, #333333);
  white-space: nowrap;
}
.ds-dialog-view__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: var(--ds-size-3x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-dialog-view__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-dialog-view__icon svg path {
  fill: currentColor;
}
.ds-dialog-view__header {
  display: flex;
  flex-direction: column;
  background: var(--ds-color-dialog-background, #ffffff);
}
.ds-dialog-view__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-dialog-view__content {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-dialog-background, #ffffff);
}
.ds-dialog-view__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-top, 2px) var(--ds-scroll-pad-right, 2px) var(--ds-scroll-pad-bottom, 2px) var(--ds-scroll-pad-left, 2px);
}
.ds-dialog-view__footer {
  display: flex;
  flex-direction: column;
  background: var(--ds-color-dialog-background, #ffffff);
}
.ds-dialog-view__action {
  height: 68px;
  display: flex;
  flex-direction: column;
  padding: var(--ds-dialog-footer-pad-top, 16px) var(--ds-dialog-footer-pad-right, 24px) var(--ds-dialog-footer-pad-bottom, 16px) var(--ds-dialog-footer-pad-left, 24px);
}

/* Element [54104:20956] — 9 вариантов; оси: Content */
.ds-element {
  display: flex;
  background: #ffffff;
  width: fit-content;
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-brand-neutral-super-dark, #333333);
  white-space: nowrap;
}
.ds-element__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-element__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-element__icon svg path {
  fill: currentColor;
}
.ds-element__image-size {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  border-radius: var(--ds-size-circular);
}
.ds-element--image-size {
  flex-direction: row;
  align-items: center;
}
.ds-element--icon-size {
  flex-direction: row;
  align-items: center;
}
.ds-element--icon-group {
  flex-direction: row;
  align-items: center;
}
.ds-element--text-default {
  flex-direction: row;
  color: var(--ds-color-brand-neutral-super-dark, #333333);
}
.ds-element--checkbox {
  flex-direction: row;
}
.ds-element--radio-button {
  flex-direction: row;
}
.ds-element--indicator {
  width: var(--ds-size-6x);
  flex-direction: row;
}
.ds-element--slide-toggle {
  flex-direction: row;
  color: var(--ds-color-slide-toggle-text-color, #333333);
}
.ds-element--counter {
  flex-direction: column;
  color: var(--ds-color-badge-text-color, #ffffff);
}

/* Element Form Field [60231:76795] — 3 вариантов; оси: Variant */
.ds-element-form-field {
  width: fit-content;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-form-field__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
  white-space: nowrap;
}
.ds-element-form-field__input-cell {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px);
}
.ds-element-form-field__input {
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support, 4px);
}
.ds-element-form-field--input-cell {
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
}
.ds-element-form-field--select-cell {
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
}
.ds-element-form-field--chips-input-cell {
  color: #616161;
}

/* Element left [59851:11313] — 5 вариантов; оси: Style */
.ds-element-left {
  min-height: var(--ds-size-5x);
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-left__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-element-left__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-element-left__icon svg path {
  fill: currentColor;
}
.ds-element-left__info {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}

/* Element menu [56090:1611] — 8 вариантов; оси: Content */
.ds-element-menu {
  display: flex;
  background: #ffffff;
  width: fit-content;
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-menu__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-brand-neutral-super-dark, #333333);
  white-space: nowrap;
}
.ds-element-menu__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-element-menu__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-element-menu__icon svg path {
  fill: currentColor;
}
.ds-element-menu__image-size {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  border-radius: var(--ds-size-circular);
}
.ds-element-menu--image-size {
  flex-direction: row;
  align-items: center;
}
.ds-element-menu--icon-size {
  flex-direction: row;
  align-items: center;
}
.ds-element-menu--text-default {
  flex-direction: row;
  color: var(--ds-color-brand-neutral-super-dark, #333333);
}
.ds-element-menu--checkbox {
  flex-direction: row;
}
.ds-element-menu--radio-button {
  flex-direction: row;
}
.ds-element-menu--indicator {
  width: var(--ds-size-6x);
  flex-direction: row;
}
.ds-element-menu--slide-toggle {
  flex-direction: row;
  color: var(--ds-color-slide-toggle-text-color, #333333);
}
.ds-element-menu--counter {
  flex-direction: column;
  color: var(--ds-color-badge-text-color, #ffffff);
}

/* Element select [57735:17972] — 8 вариантов; оси: Content */
.ds-element-select {
  display: flex;
  background: #ffffff;
  width: fit-content;
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-select__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-brand-neutral-super-dark, #333333);
  white-space: nowrap;
}
.ds-element-select__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-element-select__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-element-select__icon svg path {
  fill: currentColor;
}
.ds-element-select__image-size {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  border-radius: var(--ds-size-circular);
}
.ds-element-select--image-size {
  flex-direction: row;
  align-items: center;
}
.ds-element-select--icon-size {
  flex-direction: row;
  align-items: center;
}
.ds-element-select--text-default {
  flex-direction: row;
  color: var(--ds-color-brand-neutral-super-dark, #333333);
}
.ds-element-select--checkbox {
  flex-direction: row;
}
.ds-element-select--radio-button {
  flex-direction: row;
}
.ds-element-select--indicator {
  width: var(--ds-size-6x);
  flex-direction: row;
}
.ds-element-select--slide-toggle {
  flex-direction: row;
  color: var(--ds-color-slide-toggle-text-color, #333333);
}
.ds-element-select--counter {
  flex-direction: column;
  color: var(--ds-color-badge-text-color, #ffffff);
}

/* Element sidenav [56598:2991] — 2 вариантов; оси: Content */
.ds-element-sidenav {
  height: var(--ds-size-5x);
  width: var(--ds-size-5x);
  display: flex;
  border-radius: var(--ds-size-1x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-sidenav__label {
  font-size: var(--ds-font-caption-m-10-normal-medium-size);
  line-height: var(--ds-font-caption-m-10-normal-medium-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-medium-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-medium-weight);
  text-transform: capitalize;
  color: var(--ds-color-text-accent, #448aff);
  white-space: nowrap;
}
.ds-element-sidenav__icon {
  flex-shrink: 0;
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-element-sidenav__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-element-sidenav__icon svg path {
  fill: currentColor;
}
.ds-element-sidenav__keyboard-arrow-left {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-element-sidenav--collaps-icon {
  flex-direction: row;
  background: var(--ds-color-sidenav-element-collaps-icon-background, #36474e);
}
.ds-element-sidenav--avatar {
  flex-direction: column;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: 3px var(--ds-size-0-5x) 3px var(--ds-size-0-5x);
  color: var(--ds-color-text-accent, #448aff);
}

/* Element step [55403:7248] — 12 вариантов; оси: Content, State */
.ds-element-step {
  min-height: var(--ds-size-6x);
  width: fit-content;
  display: flex;
  background: #ffffff;
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-step__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-brand-neutral-super-dark, #333333);
  white-space: nowrap;
}
.ds-element-step__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-element-step__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-element-step__icon svg path {
  fill: currentColor;
}
.ds-element-step__icon-size {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
}
.ds-element-step__info {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-element-step--icon-size {
  flex-direction: row;
  align-items: center;
}
.ds-element-step--counter {
  flex-direction: column;
  color: var(--ds-color-brand-neutral-super-dark, #333333);
}
.ds-element-step--counter:hover {
  color: var(--ds-color-brand-neutral-default, #ffffff);
}
.ds-element-step--counter:active {
  color: var(--ds-color-brand-neutral-default, #ffffff);
}
.ds-element-step--counter:disabled {
  color: var(--ds-color-brand-neutral-neutral, #9e9e9e);
}
.ds-element-step--counter.ds-element-step--disabled {
  color: var(--ds-color-brand-neutral-neutral, #9e9e9e);
}
.ds-element-step--disabled {
  pointer-events: none;
}

/* Elements [58501:4220] — 30 вариантов; оси: Type, Variant, State */
.ds-elements {
  display: flex;
  height: var(--ds-size-10x);
  width: var(--ds-size-10x);
  border-radius: var(--ds-radius-circular, 9999px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-elements__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-text-primary, #333333);
  white-space: nowrap;
}
.ds-elements__range-highlight-start {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-50, #f0f5ff);
}
.ds-elements__range-highlight-end {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-50, #f0f5ff);
}
.ds-elements__range-highlight-middle {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-10, #f5f9ff);
}
.ds-elements__date {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-primary, #333333);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-text-primary, #333333);
}
.ds-elements--cell.ds-elements--today:disabled {
  background: var(--ds-color-brand-neutral-lighter, #e0e0e0);
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--cell.ds-elements--today.ds-elements--disabled {
  background: var(--ds-color-brand-neutral-lighter, #e0e0e0);
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--cell.ds-elements--default:disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--cell.ds-elements--default.ds-elements--disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--cell.ds-elements--range:disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--cell.ds-elements--range.ds-elements--disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--cell.ds-elements--selected:active {
  background: var(--ds-color-button-accent-filled-press-background, #2651b5);
}
.ds-elements--cell.ds-elements--today:active {
  background: var(--ds-color-brand-neutral-lighter, #e0e0e0);
}
.ds-elements--cell.ds-elements--default:active {
  background: var(--ds-color-brand-neutral-lighter, #e0e0e0);
}
.ds-elements--cell.ds-elements--today:hover {
  background: var(--ds-color-brand-neutral-super-light, #f5f5f5);
}
.ds-elements--cell.ds-elements--default:hover {
  background: var(--ds-color-brand-neutral-super-light, #f5f5f5);
}
.ds-elements--cell.ds-elements--range {
  flex-direction: row;
  align-items: center;
  background: var(--ds-color-brand-neutral-default, #ffffff);
  color: var(--ds-color-text-primary, #333333);
}
.ds-elements--cell.ds-elements--selected {
  flex-direction: column;
  align-items: center;
  color: var(--ds-color-text-inversive, #ffffff);
}
.ds-elements--year.ds-elements--selected {
  width: fit-content;
  flex-direction: column;
  align-items: center;
  color: var(--ds-color-text-inversive, #ffffff);
}
.ds-elements--cell.ds-elements--today {
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: var(--ds-color-brand-neutral-default, #ffffff);
  border: 1px solid var(--ds-color-stroke-hover, #9e9e9e);
  color: var(--ds-color-text-primary, #333333);
}
.ds-elements--cell.ds-elements--default {
  flex-direction: column;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2x) var(--ds-size-2-5x) var(--ds-size-2x) var(--ds-size-2-5x);
  color: var(--ds-color-text-primary, #333333);
}
.ds-elements--year.ds-elements--default:disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--year.ds-elements--default.ds-elements--disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--year.ds-elements--today:disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--year.ds-elements--today.ds-elements--disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--year.ds-elements--default:active {
  background: var(--ds-color-brand-neutral-lighter, #e0e0e0);
}
.ds-elements--year.ds-elements--today:active {
  background: var(--ds-color-brand-neutral-lighter, #e0e0e0);
}
.ds-elements--year.ds-elements--default:hover {
  background: var(--ds-color-brand-neutral-super-light, #f5f5f5);
}
.ds-elements--year.ds-elements--today:hover {
  background: var(--ds-color-brand-neutral-super-light, #f5f5f5);
}
.ds-elements--year.ds-elements--default {
  width: fit-content;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-4x);
  background: var(--ds-color-brand-neutral-default, #ffffff);
  color: var(--ds-color-text-primary, #333333);
}
.ds-elements--year.ds-elements--today {
  width: fit-content;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-4x);
  background: var(--ds-color-brand-neutral-default, #ffffff);
  border: 1px solid var(--ds-color-stroke-hover, #9e9e9e);
  color: var(--ds-color-text-primary, #333333);
}
.ds-elements--month.ds-elements--default {
  width: fit-content;
  flex-direction: row;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2-5x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2x);
  background: var(--ds-color-brand-neutral-default, #ffffff);
  color: var(--ds-color-text-primary, #333333);
}
.ds-elements--month.ds-elements--default:hover {
  background: var(--ds-color-brand-neutral-super-light, #f5f5f5);
}
.ds-elements--month.ds-elements--default:active {
  background: var(--ds-color-brand-neutral-lighter, #e0e0e0);
}
.ds-elements--month.ds-elements--default:disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--month.ds-elements--default.ds-elements--disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements--disabled {
  pointer-events: none;
}

/* Elements [58982:9594] — 8 вариантов; оси: Variant, State; ДУБЛЬ имени — второй сет «Elements», различать по node_id */
.ds-elements-2 {
  min-height: var(--ds-size-10x);
  width: fit-content;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-elements-2__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-text-inversive, #ffffff);
  white-space: nowrap;
}
.ds-elements-2__range-highlight-start {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-50, #f0f5ff);
}
.ds-elements-2__range-highlight-end {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-50, #f0f5ff);
}
.ds-elements-2__date {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-4x);
  border-radius: var(--ds-radius-circular, 9999px);
  background: var(--ds-color-button-accent-filled-default-background, #448aff);
}
.ds-elements-2--selected {
  flex-direction: column;
  color: var(--ds-color-text-inversive, #ffffff);
}
.ds-elements-2--default:disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements-2--default.ds-elements-2--disabled {
  color: var(--ds-color-text-disable, #9e9e9e);
}
.ds-elements-2--default:active {
  background: var(--ds-color-brand-neutral-lighter, #e0e0e0);
}
.ds-elements-2--default:hover {
  background: var(--ds-color-brand-neutral-super-light, #f5f5f5);
}
.ds-elements-2--default {
  flex-direction: row;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-4x);
  border-radius: var(--ds-radius-circular, 9999px);
  background: var(--ds-color-brand-neutral-default, #ffffff);
  color: var(--ds-color-text-primary, #333333);
}
.ds-elements-2--disabled {
  pointer-events: none;
}

/* Expansion content [61361:99603] — 2 вариантов; оси: Padding off/on */
.ds-expansion-content {
  width: 597px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--ds-expansion-panel-content-pad-top, 16px) var(--ds-expansion-panel-content-pad-right, 16px) var(--ds-expansion-panel-content-pad-bottom, 16px) var(--ds-expansion-panel-content-pad-left, 16px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-expansion-content__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-expansion-panel-content-text-color, #333333);
  white-space: nowrap;
}
.ds-expansion-content--true {
  color: var(--ds-color-expansion-panel-content-text-color, #333333);
}
.ds-expansion-content--false {
  color: var(--ds-color-expansion-panel-content-text-color, #333333);
}

/* Expansion group panel [56155:1676] — 2 вариантов; оси: Type ? */
.ds-expansion-group-panel {
  width: 597px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-expansion-panel-collaps-gap-group, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-expansion-group-panel__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-expansion-panel-collaps-text-color, #333333);
  white-space: nowrap;
}
.ds-expansion-group-panel--collaps {
  color: var(--ds-color-expansion-panel-collaps-text-color, #333333);
}
.ds-expansion-group-panel--expand {
  color: var(--ds-color-expansion-panel-collaps-text-color, #333333);
}

/* Form field cell [60220:72732] — 1 вариантов; оси: Variant */
.ds-form-field-cell {
  min-height: var(--ds-size-10x);
  width: fit-content;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-form-field-cell__table-content-chips-input {
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-form-field-cell__table-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px);
}

/* Hint container [54593:479] — 10 вариантов; оси: Size, Orientation */
.ds-hint-container {
  width: 250px;
  display: flex;
  align-items: center;
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  border-radius: var(--ds-hint-border-radius, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-container__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-hint-header-text-color, #ffffff);
  white-space: nowrap;
}
.ds-hint-container__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-hint-container__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-hint-container__icon svg path {
  fill: currentColor;
}
.ds-hint-container__arrow {
  height: var(--ds-size-1x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-hint-background-color, #424242);
}
.ds-hint-container__header {
  display: flex;
  flex-direction: row;
  gap: var(--ds-hint-header-gap, 8px);
  padding: var(--ds-hint-header-pad-top, 8px) var(--ds-hint-header-pad-right, 12px) var(--ds-hint-header-pad-bottom, 4px) var(--ds-hint-header-pad-left, 12px);
  background: var(--ds-color-hint-background-color, #424242);
}
.ds-hint-container__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-hint-content-gap, 8px);
  padding: var(--ds-hint-content-pad-top, 8px) var(--ds-hint-content-pad-right, 12px) var(--ds-hint-content-pad-bottom, 8px) var(--ds-hint-content-pad-left, 12px);
  background: var(--ds-color-hint-background-color, #424242);
}
.ds-hint-container__footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-hint-footer-gap, 12px);
  padding: var(--ds-hint-footer-pad-top, 16px) var(--ds-hint-footer-pad-right, 12px) var(--ds-hint-footer-pad-bottom, 12px) var(--ds-hint-footer-pad-left, 12px);
  background: var(--ds-color-hint-background-color, #424242);
}
.ds-hint-container--up {
  flex-direction: column;
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-container--down {
  flex-direction: column;
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-container--right {
  flex-direction: row;
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-container--left {
  flex-direction: row;
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-container--default {
  flex-direction: column;
  color: var(--ds-color-hint-header-text-color, #ffffff);
}

/* Hint content [54713:3325] — 2 вариантов; оси: Content */
.ds-hint-content {
  width: 250px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-hint-content-gap, 8px);
  padding: var(--ds-hint-content-pad-top, 8px) var(--ds-hint-content-pad-right, 12px) var(--ds-hint-content-pad-bottom, 8px) var(--ds-hint-content-pad-left, 12px);
  background: var(--ds-color-hint-background-color, #424242);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-content__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-hint-content-text-color, #ffffff);
  white-space: nowrap;
}
.ds-hint-content__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-hint-content__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-hint-content__icon svg path {
  fill: currentColor;
}
.ds-hint-content__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-hint-content__info {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-hint-content__block {
  display: flex;
  flex-direction: column;
  gap: var(--ds-hint-content-gap-content, 4px);
}
.ds-hint-content__clear {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-hint-content__close {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-hint-content--group-content {
  color: var(--ds-color-hint-content-text-color, #ffffff);
}
.ds-hint-content--single-content {
  align-items: center;
  color: var(--ds-color-hint-content-text-color, #ffffff);
}

/* Hint footer [54600:517] — 1 вариантов; оси: Content */
.ds-hint-footer {
  min-height: 56px;
  width: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-hint-footer-gap, 12px);
  padding: var(--ds-hint-footer-pad-top, 16px) var(--ds-hint-footer-pad-right, 12px) var(--ds-hint-footer-pad-bottom, 12px) var(--ds-hint-footer-pad-left, 12px);
  background: var(--ds-color-hint-background-color, #424242);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-footer__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-hint-footer-text-color, #ffffff);
  white-space: nowrap;
}
.ds-hint-footer__icon {
  flex-shrink: 0;
  width: var(--ds-size-7x);
  height: var(--ds-size-7x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-hint-footer__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-hint-footer__icon svg path {
  fill: currentColor;
}
.ds-hint-footer__цвет-и-палитра {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-hint-footer-text-color, #ffffff);
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-hint-footer-text-color, #ffffff);
}
.ds-hint-footer__button-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap, 8px);
}
.ds-hint-footer--default {
  color: var(--ds-color-hint-footer-text-color, #ffffff);
}

/* Hint header [54594:2219] — 5 вариантов; оси: Style */
.ds-hint-header {
  min-height: var(--ds-size-8x);
  width: 250px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-hint-header-gap, 8px);
  padding: var(--ds-hint-header-pad-top, 8px) var(--ds-hint-header-pad-right, 12px) var(--ds-hint-header-pad-bottom, 4px) var(--ds-hint-header-pad-left, 12px);
  background: var(--ds-color-hint-background-color, #424242);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-header__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-hint-header-text-color, #ffffff);
  white-space: nowrap;
}
.ds-hint-header__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-hint-header__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-hint-header__icon svg path {
  fill: currentColor;
}
.ds-hint-header__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-hint-header__info {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-hint-header__title {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-hint-header-text-color, #ffffff);
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-header__clear {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-hint-header__close {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-hint-header--neutral {
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-header--primary {
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-header--secondary {
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-header--warning {
  color: var(--ds-color-hint-header-text-color, #ffffff);
}
.ds-hint-header--error {
  color: var(--ds-color-hint-header-text-color, #ffffff);
}

/* Icon group [53467:1060] — 2 вариантов; оси: Size gap */
.ds-icon-group {
  min-height: var(--ds-size-5x);
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-icon-size-gap-group-2x, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-icon-group__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-icon-group__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-icon-group__icon svg path {
  fill: currentColor;
}
.ds-icon-group--4x {
  gap: var(--ds-icon-size-gap-group-4x, 16px);
}

/* Input cell [60229:74436] — 8 вариантов; оси: State */
.ds-input-cell {
  min-height: var(--ds-size-9x);
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-cell__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
  white-space: nowrap;
}
.ds-input-cell__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-input-cell__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-input-cell__icon svg path {
  fill: currentColor;
}
.ds-input-cell__frame {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-input-cell__support {
  display: flex;
  flex-direction: row;
}
.ds-input-cell:hover {
  background: var(--ds-palette-neutral-50, #f5f5f5);
  border: 1px solid var(--ds-color-table-cell-content-hover-border-color, #9e9e9e);
}
.ds-input-cell:focus-visible {
  color: var(--ds-color-form-field-filled-focus-label-text-color, #448aff);
}
.ds-input-cell:disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-input-cell.ds-input-cell--disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-input-cell--disabled {
  pointer-events: none;
}

/* Input Datepicker [58548:4764] — 2 вариантов; оси: Type */
.ds-input-datepicker {
  min-height: 48px;
  width: 250px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-datepicker__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-form-field-input-label-text-color, #616161);
  white-space: nowrap;
}
.ds-input-datepicker__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-input-datepicker__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-input-datepicker__icon svg path {
  fill: currentColor;
}
.ds-input-datepicker__frame {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  padding: var(--ds-form-field-m-size-pad-input-top, 12px) var(--ds-form-field-m-size-pad-input-right, 12px) var(--ds-form-field-m-size-pad-input-bottom, 12px) var(--ds-form-field-m-size-pad-input-left, 12px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-input-datepicker__support {
  display: flex;
  flex-direction: row;
}
.ds-input-datepicker--empty {
  color: var(--ds-color-form-field-input-label-text-color, #616161);
}
.ds-input-datepicker--populated {
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
}

/* Input number [17193:84750] — 29 вариантов; оси: Size, Variant, State */
.ds-input-number {
  display: flex;
  flex-direction: row;
  width: 138px;
  gap: 18px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-number__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
  white-space: nowrap;
}
.ds-input-number__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-input-number__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-input-number__icon svg path {
  fill: currentColor;
}
.ds-input-number__frame {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  padding: var(--ds-form-field-m-size-pad-input-top, 12px) var(--ds-form-field-m-size-pad-input-right, 12px) var(--ds-form-field-m-size-pad-input-bottom, 12px) var(--ds-form-field-m-size-pad-input-left, 12px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-input-number__support {
  display: flex;
  flex-direction: row;
}
.ds-input-number--s {
  width: fit-content;
}
.ds-input-number--xs {
  width: fit-content;
}
.ds-input-number--xs .ds-input-number__icon {
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
}
.ds-input-number--populated {
  align-items: center;
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
}
.ds-input-number--empty {
  align-items: center;
  color: var(--ds-color-form-field-input-label-text-color, #616161);
}
.ds-input-number--populated:focus-visible {
  color: var(--ds-color-form-field-filled-focus-label-text-color, #448aff);
}
.ds-input-number--populated:hover {
  color: var(--ds-color-form-field-filled-hover-label-text-color, #616161);
}
.ds-input-number--empty:hover {
  background: var(--ds-color-form-field-filled-hover-input-background-hover, #f5f5f5);
  border: 1px solid var(--ds-color-form-field-filled-hover-border-color, #9e9e9e);
}
.ds-input-number--populated:disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-input-number--populated.ds-input-number--disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-input-number--empty:disabled {
  color: var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e);
}
.ds-input-number--empty.ds-input-number--disabled {
  color: var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e);
}
.ds-input-number--disabled {
  pointer-events: none;
}

/* Input number_but icon [56967:10506] — 1 вариантов; оси: — */
.ds-input-number-but-icon {
  min-height: 56px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-1x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-number-but-icon__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
  white-space: nowrap;
}
.ds-input-number-but-icon__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-input-number-but-icon__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-input-number-but-icon__icon svg path {
  fill: currentColor;
}
.ds-input-number-but-icon__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-1x);
}
.ds-input-number-but-icon__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-icon-gap, 8px);
  padding: var(--ds-button-icon-m-size-pad-top, 8px) var(--ds-button-icon-m-size-pad-right, 8px) var(--ds-button-icon-m-size-pad-bottom, 8px) var(--ds-button-icon-m-size-pad-left, 8px);
  border-radius: var(--ds-button-icon-border-radius, 8px);
  background: var(--ds-color-button-icon-neutral-filled-default-background, #ffffff);
  box-shadow: var(--ds-shadow-shadows-01-dp-sl);
}
.ds-input-number-but-icon__text {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-input-number-but-icon__support-text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-form-field-filled-default-support-text-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-form-field-filled-default-support-text-color, #616161);
}

/* Input Timepicker [58982:9561] — 2 вариантов; оси: Type */
.ds-input-timepicker {
  min-height: 48px;
  width: 250px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-timepicker__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-form-field-input-label-text-color, #616161);
  white-space: nowrap;
}
.ds-input-timepicker__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-input-timepicker__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-input-timepicker__icon svg path {
  fill: currentColor;
}
.ds-input-timepicker__frame {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  padding: var(--ds-form-field-m-size-pad-input-top, 12px) var(--ds-form-field-m-size-pad-input-right, 12px) var(--ds-form-field-m-size-pad-input-bottom, 12px) var(--ds-form-field-m-size-pad-input-left, 12px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-input-timepicker__support {
  display: flex;
  flex-direction: row;
}
.ds-input-timepicker--empty {
  color: var(--ds-color-form-field-input-label-text-color, #616161);
}
.ds-input-timepicker--populated {
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
}

/* List (Сontainer) [57604:4762] — 1 вариантов; оси: Type */
.ds-list-container {
  min-height: 257px;
  width: 258px;
  display: flex;
  flex-direction: column;
  padding: var(--ds-list-pad-top, 8px) 0 var(--ds-list-pad-bottom, 8px) 0;
  border-radius: var(--ds-list-border-radius);
  background: var(--ds-color-list-background, #ffffff);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-list-container__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-list-item-text-label-color, #616161);
  white-space: nowrap;
}
.ds-list-container__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: var(--ds-size-3x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-list-container__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-list-container__icon svg path {
  fill: currentColor;
}
.ds-list-container__item {
  display: flex;
  flex-direction: row;
  gap: var(--ds-list-item-gap, 8px);
  padding: var(--ds-list-item-pad-top, 8px) var(--ds-list-item-pad-right, 16px) var(--ds-list-item-pad-bottom, 8px) var(--ds-list-item-pad-left, 16px);
  background: var(--ds-color-list-item-default-background, #ffffff);
}
.ds-list-container__element-left {
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-list-container__content {
  display: flex;
  flex-direction: column;
}
.ds-list-container__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: #ffffff;
}
.ds-list-container__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-list-container__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-top, 2px) var(--ds-scroll-pad-right, 2px) var(--ds-scroll-pad-bottom, 2px) var(--ds-scroll-pad-left, 2px);
}
.ds-list-container--container {
  color: var(--ds-color-list-item-text-label-color, #616161);
}

/* List item [54101:7922] — 8 вариантов; оси: State */
.ds-list-item {
  min-height: 68px;
  width: 258px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-list-item-gap, 8px);
  padding: var(--ds-list-item-pad-top, 8px) var(--ds-list-item-pad-right, 16px) var(--ds-list-item-pad-bottom, 8px) var(--ds-list-item-pad-left, 16px);
  background: var(--ds-color-list-item-default-background, #ffffff);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-list-item__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-list-item-text-label-color, #616161);
  white-space: nowrap;
}
.ds-list-item__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-list-item__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-list-item__icon svg path {
  fill: currentColor;
}
.ds-list-item__element-left {
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-list-item__checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-list-item__content {
  display: flex;
  flex-direction: column;
}
.ds-list-item__label-up {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-list-item-text-label-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-list-item-text-label-color, #616161);
}
.ds-list-item__text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-list-item-text-color, #333333);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-list-item-text-color, #333333);
}
.ds-list-item__label-down {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-list-item-text-label-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-list-item-text-label-color, #616161);
}
.ds-list-item__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: #ffffff;
}
.ds-list-item__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-list-item:hover {
  background: var(--ds-color-list-item-hover-background, #f5f5f5);
}
.ds-list-item:active {
  background: var(--ds-color-list-item-press-background, #e0e0e0);
}
.ds-list-item:disabled {
  background: var(--ds-color-list-item-disable-background, #ffffff);
  color: var(--ds-color-list-item-disable-label-text-color, #9e9e9e);
}
.ds-list-item.ds-list-item--disabled {
  background: var(--ds-color-list-item-disable-background, #ffffff);
  color: var(--ds-color-list-item-disable-label-text-color, #9e9e9e);
}
.ds-list-item--disabled {
  pointer-events: none;
}

/* Logo iiko [55332:19892] — 4 вариантов; оси: Size, Style */
.ds-logo-iiko {
  height: 72px;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-logo-iiko__vector {
  height: 72px;
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-neutral-0, #ffffff);
}

/* Logo Syrve [56079:771] — 4 вариантов; оси: Size, Style */
.ds-logo-syrve {
  height: 72px;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-logo-syrve__vector {
  height: 70.9px;
  display: flex;
  flex-direction: row;
  background: #00062b;
}

/* Menu (Container) [54163:6705] — 1 вариантов; оси: Type */
.ds-menu-container {
  min-height: 418px;
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-menu-gap);
  padding: var(--ds-menu-pad-top, 8px) 0 var(--ds-menu-pad-bottom, 8px) 0;
  border-radius: var(--ds-menu-border-radius, 8px);
  background: var(--ds-color-menu-background, #ffffff);
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-menu-container__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-search-default-text-color, #d6d6d6);
  white-space: nowrap;
}
.ds-menu-container__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: var(--ds-size-3x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-menu-container__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-menu-container__icon svg path {
  fill: currentColor;
}
.ds-menu-container__search {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2-5x);
  padding: 0 var(--ds-size-4x) var(--ds-size-1x) var(--ds-size-4x);
}
.ds-menu-container__title {
  display: flex;
  flex-direction: row;
  gap: var(--ds-menu-item-gap, 8px);
  padding: var(--ds-menu-item-pad-top, 8px) var(--ds-menu-item-pad-right, 16px) var(--ds-menu-item-pad-bottom, 8px) var(--ds-menu-item-pad-left, 16px);
  background: var(--ds-color-menu-item-default-background, #ffffff);
}
.ds-menu-container__element-left {
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-menu-container__content {
  display: flex;
  flex-direction: column;
}
.ds-menu-container__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: #ffffff;
}
.ds-menu-container__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-menu-container__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-top, 2px) var(--ds-scroll-pad-right, 2px) var(--ds-scroll-pad-bottom, 2px) var(--ds-scroll-pad-left, 2px);
}
.ds-menu-container__button-group {
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap, 8px);
  padding: var(--ds-button-group-margins-pad-top, 8px) var(--ds-button-group-margins-pad-right, 16px) var(--ds-button-group-margins-pad-bottom, 8px) var(--ds-button-group-margins-pad-left, 16px);
}
.ds-menu-container--container {
  color: var(--ds-color-search-default-text-color, #d6d6d6);
}

/* Menu item [56090:1476] — 7 вариантов; оси: State */
.ds-menu-item {
  min-height: 68px;
  width: 258px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-menu-item-gap, 8px);
  padding: var(--ds-menu-item-pad-top, 8px) var(--ds-menu-item-pad-right, 16px) var(--ds-menu-item-pad-bottom, 8px) var(--ds-menu-item-pad-left, 16px);
  background: var(--ds-color-menu-item-default-background, #ffffff);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-menu-item__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-menu-item-text-label-color, #616161);
  white-space: nowrap;
}
.ds-menu-item__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-menu-item__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-menu-item__icon svg path {
  fill: currentColor;
}
.ds-menu-item__element-left {
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-menu-item__checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-menu-item__content {
  display: flex;
  flex-direction: column;
}
.ds-menu-item__label-up {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-menu-item-text-label-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-menu-item-text-label-color, #616161);
}
.ds-menu-item__text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-menu-item-text-color, #333333);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-menu-item-text-color, #333333);
}
.ds-menu-item__label-down {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-menu-item-text-label-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-menu-item-text-label-color, #616161);
}
.ds-menu-item__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: #ffffff;
}
.ds-menu-item__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-menu-item:hover {
  background: var(--ds-color-menu-item-hover-background, #f5f5f5);
}
.ds-menu-item:active {
  background: var(--ds-color-menu-item-press-background, #e0e0e0);
}
.ds-menu-item:disabled {
  background: var(--ds-color-menu-item-disable-background, #ffffff);
  color: var(--ds-color-menu-item-disable-label-text-color, #9e9e9e);
}
.ds-menu-item.ds-menu-item--disabled {
  background: var(--ds-color-menu-item-disable-background, #ffffff);
  color: var(--ds-color-menu-item-disable-label-text-color, #9e9e9e);
}
.ds-menu-item--disabled {
  pointer-events: none;
}

/* Picture [58937:3985] — 1 вариантов; оси: — */
.ds-picture {
  min-height: 189px;
  width: 446px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-brand-accent-super-lightest, #f8f9fc);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-picture__crop {
  height: 173px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2-5x);
  border: 1px dashed var(--ds-color-stroke-hover, #9e9e9e);
}
.ds-picture__frame-1000001806 {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 440px;
}

/* Radio button label [54095:4306] — 6 вариантов; оси: Variant, Type */
.ds-radio-button-label {
  min-height: var(--ds-size-5x);
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: var(--ds-radio-button-label-gap-support, 4px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-radio-button-label__label {
  font-size: var(--ds-typography-font-size-3-5x);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-line-height-5x);
  letter-spacing: 0.25px;
  color: var(--ds-color-radio-button-label-text-color, #333333);
  white-space: nowrap;
}
.ds-radio-button-label__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-radio-button-label__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-radio-button-label__icon svg path {
  fill: currentColor;
}
.ds-radio-button-label__form {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-radio-button-label-gap, 8px);
}
.ds-radio-button-label__left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-radio-button-label__цвет-и-палитра {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-radio-button-label-text-color, #333333);
  font-size: var(--ds-typography-font-size-3-5x);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-line-height-5x);
  color: var(--ds-color-radio-button-label-text-color, #333333);
}
.ds-radio-button-label__right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-radio-button-label__support {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 var(--ds-radio-button-label-pad-left-support-7x, 28px);
}
.ds-radio-button-label__support-text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-radio-button-label-text-support-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-radio-button-label-text-support-color, #616161);
}
.ds-radio-button-label--normal.ds-radio-button-label--deselected {
  color: var(--ds-color-radio-button-label-text-color, #333333);
}
.ds-radio-button-label--normal.ds-radio-button-label--selected {
  color: var(--ds-color-radio-button-label-text-color, #333333);
}
.ds-radio-button-label--error.ds-radio-button-label--deselected {
  color: var(--ds-color-radio-button-label-text-color, #333333);
}
.ds-radio-button-label--error.ds-radio-button-label--selected {
  color: var(--ds-color-radio-button-label-text-color, #333333);
}
.ds-radio-button-label--disable.ds-radio-button-label--deselected {
  color: var(--ds-color-radio-button-label-text-disable-color, #9e9e9e);
}
.ds-radio-button-label--disable.ds-radio-button-label--selected {
  color: var(--ds-color-radio-button-label-text-disable-color, #9e9e9e);
}

/* Scroll [53615:15339] — 12 вариантов; оси: Size, Position, State */
.ds-scroll {
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-top, 2px) var(--ds-scroll-pad-right, 2px) var(--ds-scroll-pad-bottom, 2px) var(--ds-scroll-pad-left, 2px);
  width: 184px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-scroll__background {
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-scroll-border-radius, 8px);
  background: var(--ds-color-scroll-default-background, #fafafa);
}
.ds-scroll__knob {
  height: var(--ds-size-2x);
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2-5x) var(--ds-size-2-5x) var(--ds-size-2-5x) var(--ds-size-2-5x);
  border-radius: var(--ds-scroll-knob-radius, 8px);
  background: var(--ds-color-scroll-default-knob-color, #d6d6d6);
}
.ds-scroll--s {
  width: var(--ds-size-2x);
}
.ds-scroll--first:hover {
  background: var(--ds-color-scroll-hover-background, #ebebeb);
}
.ds-scroll--middle {
  align-items: center;
}
.ds-scroll--middle:hover {
  background: var(--ds-color-scroll-hover-background, #ebebeb);
}
.ds-scroll--last:hover {
  background: var(--ds-color-scroll-hover-background, #ebebeb);
}

/* Scroll tabs [59032:1821] — 4 вариантов; оси: Orientation, State */
.ds-scroll-tabs {
  min-height: var(--ds-size-7x);
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: 0 0 0 48px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-scroll-tabs__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-scroll-tabs__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-scroll-tabs__icon svg path {
  fill: currentColor;
}
.ds-scroll-tabs__button-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-icon-gap, 8px);
  padding: var(--ds-button-icon-s-size-pad-top, 4px) var(--ds-button-icon-s-size-pad-right, 4px) var(--ds-button-icon-s-size-pad-bottom, 4px) var(--ds-button-icon-s-size-pad-left, 4px);
  border-radius: var(--ds-button-icon-border-radius, 8px);
  background: var(--ds-color-button-icon-neutral-filled-default-background, #ffffff);
  box-shadow: var(--ds-shadow-shadows-01-dp-sl);
}
.ds-scroll-tabs__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-scroll-tabs--left {
  padding: 0 48px 0 0;
}

/* Search [54453:1620] — 15 вариантов; оси: Size, State */
.ds-search {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-search-gap, 8px);
  width: 243px;
  padding: var(--ds-search-m-size-pad-top, 12px) var(--ds-search-m-size-pad-right, 12px) var(--ds-search-m-size-pad-bottom, 12px) var(--ds-search-m-size-pad-left, 12px);
  border-radius: var(--ds-search-border-radius, 12px);
  background: var(--ds-color-search-background, #f8f9fc);
  border: 1px solid var(--ds-color-search-default-border-color, #e0e0e0);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-search__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-search-default-text-color, #d6d6d6);
  white-space: nowrap;
}
.ds-search__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-search__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-search__icon svg path {
  fill: currentColor;
}
.ds-search__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-search__text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-search-default-text-color, #d6d6d6);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-search-default-text-color, #d6d6d6);
}
.ds-search__right-icon {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
}
.ds-search__divider {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-search--s {
  padding: var(--ds-search-s-size-pad-top, 8px) var(--ds-search-s-size-pad-right, 12px) var(--ds-search-s-size-pad-bottom, 8px) var(--ds-search-s-size-pad-left, 12px);
}
.ds-search--s .ds-search__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-search--xs {
  height: var(--ds-size-9x);
  width: var(--ds-size-9x);
  padding: var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x);
  border-radius: var(--ds-size-circular);
}
.ds-search--xs .ds-search__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-search:disabled {
  background: var(--ds-color-search-disable-background, #ebebeb);
  color: var(--ds-color-search-disable-text-color, #9e9e9e);
}
.ds-search.ds-search--disabled {
  background: var(--ds-color-search-disable-background, #ebebeb);
  color: var(--ds-color-search-disable-text-color, #9e9e9e);
}
.ds-search:focus-visible {
  color: var(--ds-color-search-focusvalue-text-color, #333333);
}
.ds-search:hover {
  border: 1px solid var(--ds-color-search-hover-border-color, #9e9e9e);
}
.ds-search--disabled {
  pointer-events: none;
}

/* Select (Сontainer) [57735:17612] — 1 вариантов; оси: Type */
.ds-select-container {
  min-height: 406px;
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-space-0);
  padding: var(--ds-menu-pad-top, 8px) 0 var(--ds-menu-pad-bottom, 8px) 0;
  border-radius: var(--ds-radius-3x, 12px);
  background: var(--ds-color-menu-background, #ffffff);
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-container__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-search-default-text-color, #d6d6d6);
  white-space: nowrap;
}
.ds-select-container__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: var(--ds-size-3x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-select-container__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-select-container__icon svg path {
  fill: currentColor;
}
.ds-select-container__search {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2-5x);
  padding: 0 var(--ds-size-2x) 0 var(--ds-size-2x);
}
.ds-select-container__title {
  display: flex;
  flex-direction: row;
  gap: var(--ds-select-item-gap, 8px);
  padding: var(--ds-select-item-pad-top, 8px) var(--ds-select-item-pad-right, 16px) var(--ds-select-item-pad-bottom, 8px) var(--ds-select-item-pad-left, 16px);
  background: var(--ds-color-menu-item-default-background, #ffffff);
}
.ds-select-container__element-left {
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-select-container__content {
  display: flex;
  flex-direction: column;
}
.ds-select-container__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: #ffffff;
}
.ds-select-container__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-select-container__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-top, 2px) var(--ds-scroll-pad-right, 2px) var(--ds-scroll-pad-bottom, 2px) var(--ds-scroll-pad-left, 2px);
}
.ds-select-container__button-group {
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap, 8px);
  padding: var(--ds-button-group-margins-pad-top, 8px) var(--ds-button-group-margins-pad-right, 16px) var(--ds-button-group-margins-pad-bottom, 8px) var(--ds-button-group-margins-pad-left, 16px);
}
.ds-select-container__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-s-size-gap, 4px);
  padding: var(--ds-button-s-size-pad-top, 4px) var(--ds-button-s-size-pad-right, 8px) var(--ds-button-s-size-pad-bottom, 4px) var(--ds-button-s-size-pad-left, 8px);
  border-radius: var(--ds-button-border-radius, 8px);
  border: 1px solid var(--ds-color-button-neutral-outlined-default-border-color, #e0e0e0);
}
.ds-select-container--container {
  color: var(--ds-color-search-default-text-color, #d6d6d6);
}

/* Select cell [60231:74976] — 7 вариантов; оси: State */
.ds-select-cell {
  min-height: var(--ds-size-9x);
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-cell__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
  white-space: nowrap;
}
.ds-select-cell__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-select-cell__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-select-cell__icon svg path {
  fill: currentColor;
}
.ds-select-cell__input {
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support, 4px);
}
.ds-select-cell__input-frame {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-select-cell__support {
  display: flex;
  flex-direction: row;
}
.ds-select-cell:hover {
  background: var(--ds-palette-neutral-50, #f5f5f5);
  border: 1px solid var(--ds-color-table-cell-content-hover-border-color, #9e9e9e);
}
.ds-select-cell:focus-visible {
  color: var(--ds-color-form-field-filled-focus-label-text-color, #448aff);
}
.ds-select-cell:disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-select-cell.ds-select-cell--disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-select-cell--disabled {
  pointer-events: none;
}

/* Select form [57862:17226] — 22 вариантов; оси: Size, Variant, State */
.ds-select-form {
  width: 250px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-form__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-form-field-input-label-text-color, #616161);
  white-space: nowrap;
}
.ds-select-form__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-select-form__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-select-form__icon svg path {
  fill: currentColor;
}
.ds-select-form__input {
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support, 4px);
}
.ds-select-form__input-frame {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  padding: var(--ds-form-field-m-size-pad-input-top, 12px) var(--ds-form-field-m-size-pad-input-right, 12px) var(--ds-form-field-m-size-pad-input-bottom, 12px) var(--ds-form-field-m-size-pad-input-left, 12px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-select-form__support {
  display: flex;
  flex-direction: row;
}
.ds-select-form--s .ds-select-form__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-select-form--xs .ds-select-form__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-select-form--empty {
  color: var(--ds-color-form-field-input-label-text-color, #616161);
}
.ds-select-form--populated {
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
}
.ds-select-form--empty:hover {
  background: var(--ds-color-form-field-filled-hover-input-background-hover, #f5f5f5);
  border: 1px solid var(--ds-color-form-field-filled-hover-border-color, #9e9e9e);
}
.ds-select-form--populated:hover {
  color: var(--ds-color-form-field-filled-hover-label-text-color, #616161);
}
.ds-select-form--populated:focus-visible {
  color: var(--ds-color-form-field-filled-focus-label-text-color, #448aff);
}
.ds-select-form--empty:disabled {
  color: var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e);
}
.ds-select-form--empty.ds-select-form--disabled {
  color: var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e);
}
.ds-select-form--populated:disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-select-form--populated.ds-select-form--disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-select-form--disabled {
  pointer-events: none;
}

/* Select item [57735:17872] — 8 вариантов; оси: State, Subtitle */
.ds-select-item {
  width: 258px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-select-item-gap, 8px);
  padding: var(--ds-select-item-pad-top-sub, 12px) var(--ds-select-item-pad-right, 16px) var(--ds-select-item-pad-bottom-sub, 6px) var(--ds-select-item-pad-left, 16px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-item__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-select-item-text-label-color, #616161);
  white-space: nowrap;
}
.ds-select-item__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-select-item__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-select-item__icon svg path {
  fill: currentColor;
}
.ds-select-item__element-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: #ffffff;
}
.ds-select-item__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-select-item__content {
  display: flex;
  flex-direction: column;
}
.ds-select-item__label-up {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-select-item-text-label-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-select-item-text-label-color, #616161);
}
.ds-select-item__subtitle {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-select-item-text-label-color, #616161);
  font-size: var(--ds-font-caption-m-10-normal-medium-size);
  line-height: var(--ds-font-caption-m-10-normal-medium-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-medium-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-medium-weight);
  text-transform: capitalize;
  color: var(--ds-color-select-item-text-label-color, #616161);
}
.ds-select-item__label-down {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-select-item-text-label-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-select-item-text-label-color, #616161);
}
.ds-select-item__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: #ffffff;
}
.ds-select-item--true {
  align-items: center;
  background: var(--ds-color-select-item-default-background, #ffffff);
  color: var(--ds-color-select-item-text-label-color, #616161);
}
.ds-select-item--false {
  padding: var(--ds-select-item-pad-top, 8px) var(--ds-select-item-pad-right, 16px) var(--ds-select-item-pad-bottom, 8px) var(--ds-select-item-pad-left, 16px);
  background: var(--ds-color-select-item-default-background, #ffffff);
  color: var(--ds-color-select-item-text-label-color, #616161);
}
.ds-select-item--false:hover {
  background: var(--ds-color-select-item-hover-background, #f5f5f5);
}
.ds-select-item--false:active {
  background: var(--ds-color-select-item-press-background, #e0e0e0);
}
.ds-select-item--false:disabled {
  background: var(--ds-color-select-item-disable-background, #ffffff);
  color: var(--ds-color-select-item-disable-label-text-color, #9e9e9e);
}
.ds-select-item--false.ds-select-item--disabled {
  background: var(--ds-color-select-item-disable-background, #ffffff);
  color: var(--ds-color-select-item-disable-label-text-color, #9e9e9e);
}
.ds-select-item--disabled {
  pointer-events: none;
}

/* Sidenav control [55142:1734] — 6 вариантов; оси: Mode, State */
.ds-sidenav-control {
  min-height: 41px;
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: var(--ds-sidenav-control-expanded-gap);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-control__label {
  font-size: var(--ds-font-caption-m-10-normal-regular-size);
  line-height: var(--ds-font-caption-m-10-normal-regular-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-regular-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-regular-weight);
  color: var(--ds-color-sidenav-control-text-color, #ffffff);
  white-space: nowrap;
}
.ds-sidenav-control__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-sidenav-control__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-sidenav-control__icon svg path {
  fill: currentColor;
}
.ds-sidenav-control__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-sidenav-control-expanded-gap-content, 8px);
  padding: var(--ds-sidenav-control-pad-top, 8px) var(--ds-sidenav-control-pad-right, 16px) var(--ds-sidenav-control-pad-bottom, 12px) var(--ds-sidenav-control-pad-left, 16px);
  background: var(--ds-color-sidenav-control-background, #263136);
}
.ds-sidenav-control__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-sidenav-control__свернуть-меню {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-control-text-color, #ffffff);
  font-size: var(--ds-font-caption-m-10-normal-regular-size);
  line-height: var(--ds-font-caption-m-10-normal-regular-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-regular-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-regular-weight);
  color: var(--ds-color-sidenav-control-text-color, #ffffff);
}
.ds-sidenav-control__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-sidenav-control--collapsed:hover {
  background: var(--ds-color-sidenav-control-background-hover, #36474e);
}
.ds-sidenav-control--collapsed:active {
  background: var(--ds-color-sidenav-control-background-press, #36474e);
}
.ds-sidenav-control--expanded {
  background: var(--ds-color-sidenav-control-background, #263136);
  color: var(--ds-color-sidenav-control-text-color, #ffffff);
}
.ds-sidenav-control--expanded:hover {
  background: var(--ds-color-sidenav-control-background-hover, #36474e);
}
.ds-sidenav-control--expanded:active {
  background: var(--ds-color-sidenav-control-background-press, #36474e);
}
.ds-sidenav-control--collapsed {
  width: fit-content;
  gap: var(--ds-sidenav-control-collapsed-gap);
}

/* Sidenav Footer [55111:1056] — 3 вариантов; оси: Type, Mode */
.ds-sidenav-footer {
  display: flex;
  width: 260px;
  padding: var(--ds-sidenav-footer-l2-pad-top, 12px) var(--ds-sidenav-footer-l2-pad-right, 16px) var(--ds-sidenav-footer-l2-pad-bottom, 12px) var(--ds-sidenav-footer-l2-pad-left, 16px);
  gap: var(--ds-sidenav-footer-l2-gap, 12px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-footer__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-sidenav-footer-l2-text-color, #616161);
  white-space: nowrap;
}
.ds-sidenav-footer__logo-iiko {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-sidenav-footer__vector {
  height: 9.8px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-footer-l2-logo, #ff5252);
}
.ds-sidenav-footer__divider {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-sidenav-footer__ver-7-8-6-29440 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-footer-l2-text-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-sidenav-footer-l2-text-color, #616161);
}
.ds-sidenav-footer--l2.ds-sidenav-footer--expanded {
  flex-direction: row;
  align-items: center;
  background: var(--ds-color-sidenav-footer-l2-background, #ffffff);
  color: var(--ds-color-sidenav-footer-l2-text-color, #616161);
}
.ds-sidenav-footer--l1.ds-sidenav-footer--expanded {
  width: 200px;
  flex-direction: column;
  color: var(--ds-color-sidenav-item-l1-text-color, #ffffff);
}
.ds-sidenav-footer--l1.ds-sidenav-footer--collapsed {
  width: 52px;
  flex-direction: column;
  color: var(--ds-color-text-accent, #448aff);
}

/* Sidenav header [55045:637] — 3 вариантов; оси: Type, Mode */
.ds-sidenav-header {
  display: flex;
  align-items: center;
  width: 200px;
  padding: var(--ds-sidenav-header-pad-top, 12px) var(--ds-sidenav-header-l1-expanded-pad-right, 16px) var(--ds-sidenav-header-pad-bottom, 12px) var(--ds-sidenav-header-l1-expanded-pad-left, 16px);
  gap: var(--ds-sidenav-header-l1-expanded-gap, 92px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-header__label {
  font-size: var(--ds-font-body-m-16-normal-medium-size);
  line-height: var(--ds-font-body-m-16-normal-medium-line);
  letter-spacing: var(--ds-font-body-m-16-normal-medium-spacing);
  font-weight: var(--ds-font-body-m-16-normal-medium-weight);
  color: var(--ds-color-sidenav-header-l2-text-color, #333333);
  white-space: nowrap;
}
.ds-sidenav-header__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-sidenav-header__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-sidenav-header__icon svg path {
  fill: currentColor;
}
.ds-sidenav-header__logo-iiko {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
}
.ds-sidenav-header__vector {
  height: 14.7px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-header-l1-expanded-logo, #ffffff);
}
.ds-sidenav-header__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-sidenav-header__close {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-sidenav-header--l1.ds-sidenav-header--expanded {
  flex-direction: row;
  background: var(--ds-color-sidenav-header-l1-background, #263136);
}
.ds-sidenav-header--l2.ds-sidenav-header--expanded {
  height: 48px;
  width: 260px;
  flex-direction: row;
  gap: var(--ds-sidenav-header-l2-gap, 8px);
  padding: var(--ds-sidenav-header-pad-top, 12px) var(--ds-sidenav-header-l2-pad-right, 16px) var(--ds-sidenav-header-pad-bottom, 12px) var(--ds-sidenav-header-l2-pad-left, 16px);
  background: var(--ds-color-sidenav-header-l2-background, #ffffff);
  color: var(--ds-color-sidenav-header-l2-text-color, #333333);
}
.ds-sidenav-header--l1.ds-sidenav-header--collapsed {
  width: 52px;
  flex-direction: column;
  padding: var(--ds-sidenav-header-pad-top, 12px) var(--ds-sidenav-header-l1-collapsed-pad-right, 14px) var(--ds-sidenav-header-pad-bottom, 12px) var(--ds-sidenav-header-l1-collapsed-pad-left, 14px);
  background: var(--ds-color-sidenav-header-l1-background, #263136);
}

/* Sidenav item [55070:3734] — 13 вариантов; оси: Type, Mode, State */
.ds-sidenav-item {
  display: flex;
  width: 260px;
  padding: var(--ds-sidenav-item-l3-pad-top, 8px) var(--ds-sidenav-item-l3-pad-right, 16px) var(--ds-sidenav-item-l3-pad-bottom, 8px) var(--ds-sidenav-item-l3-pad-left, 32px);
  gap: var(--ds-sidenav-item-l3-gap, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-item__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-sidenav-item-l3-text-color, #333333);
  white-space: nowrap;
}
.ds-sidenav-item__l3 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-item-l3-text-color, #333333);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-sidenav-item-l3-text-color, #333333);
}
.ds-sidenav-item--l3.ds-sidenav-item--expanded:hover {
  background: var(--ds-color-sidenav-item-l3-background-hover, #f8f9fc);
}
.ds-sidenav-item--l3.ds-sidenav-item--expanded {
  flex-direction: row;
  align-items: center;
  background: var(--ds-color-sidenav-item-l3-background, #ffffff);
  color: var(--ds-color-sidenav-item-l3-text-color, #333333);
}
.ds-sidenav-item--l2.ds-sidenav-item--expanded {
  flex-direction: column;
  background: var(--ds-color-sidenav-item-l2-background, #ffffff);
  color: var(--ds-color-sidenav-item-l2-text-color, #333333);
}
.ds-sidenav-item--l2.ds-sidenav-item--expanded:hover {
  background: var(--ds-color-sidenav-item-l2-background-hover, #f8f9fc);
}
.ds-sidenav-item--l1.ds-sidenav-item--expanded:hover {
  background: var(--ds-color-sidenav-item-l1-background-hover, #36474e);
}
.ds-sidenav-item--l1.ds-sidenav-item--expanded {
  width: 200px;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-sidenav-item-l1-gap-container, 8px);
  padding: var(--ds-sidenav-item-l1-pad-top, 12px) var(--ds-sidenav-item-l1-pad-right, 16px) var(--ds-sidenav-item-l1-pad-bottom, 12px) var(--ds-sidenav-item-l1-pad-left, 16px);
  background: var(--ds-color-sidenav-item-l1-background, #263136);
  color: var(--ds-color-sidenav-item-l1-text-color, #ffffff);
}
.ds-sidenav-item--l1.ds-sidenav-item--collapsed:hover {
  background: var(--ds-color-sidenav-item-l1-background-hover, #36474e);
}
.ds-sidenav-item--l1.ds-sidenav-item--collapsed {
  width: fit-content;
  flex-direction: row;
  padding: var(--ds-sidenav-item-l1-pad-top, 12px) var(--ds-sidenav-item-l1-pad-right, 16px) var(--ds-sidenav-item-l1-pad-bottom, 12px) var(--ds-sidenav-item-l1-pad-left, 16px);
  background: var(--ds-color-sidenav-item-l1-background, #263136);
}

/* Sidenav View [55074:393] — 3 вариантов; оси: Type, State */
/* height из макета Figma: 1024px — размер примера, задавайте по месту */
.ds-sidenav-view {
  display: flex;
  flex-direction: column;
  padding: var(--ds-sidenav-sidebar-pad-top, 8px) 0 var(--ds-sidenav-sidebar-pad-bottom, 8px) 0;
  width: fit-content;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-view__label {
  font-size: var(--ds-font-caption-m-10-normal-regular-size);
  line-height: var(--ds-font-caption-m-10-normal-regular-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-regular-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-regular-weight);
  color: var(--ds-color-sidenav-control-text-color, #ffffff);
  white-space: nowrap;
}
.ds-sidenav-view__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: var(--ds-size-3x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-sidenav-view__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-sidenav-view__icon svg path {
  fill: currentColor;
}
.ds-sidenav-view__container {
  display: flex;
  flex-direction: column;
}
.ds-sidenav-view__header {
  display: flex;
  flex-direction: column;
}
.ds-sidenav-view__body {
  display: flex;
  flex-direction: row;
}
.ds-sidenav-view__footer {
  display: flex;
  flex-direction: column;
}
.ds-sidenav-view__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}

/* Snackbar [54373:10303] — 4 вариантов; оси: Type, Mode */
.ds-snackbar {
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-snackbar-border-radius, 8px);
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  width: fit-content;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-snackbar__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-snackbar-complex-dark-text-color, #ffffff);
  white-space: nowrap;
}
.ds-snackbar__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-snackbar__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-snackbar__icon svg path {
  fill: currentColor;
}
.ds-snackbar__body {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-snackbar-gap, 8px);
  padding: var(--ds-snackbar-pad-top, 12px) var(--ds-snackbar-pad-right, 12px) var(--ds-snackbar-pad-bottom, 12px) var(--ds-snackbar-pad-left, 12px);
}
.ds-snackbar__content {
  display: flex;
  flex-direction: row;
  gap: var(--ds-snackbar-gap, 8px);
  padding: var(--ds-space-0) var(--ds-space-0) var(--ds-space-0) var(--ds-space-0);
  border-radius: var(--ds-radius-0);
}
.ds-snackbar__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-s-size-gap, 4px);
  padding: var(--ds-button-s-size-pad-top, 4px) var(--ds-button-s-size-pad-right, 8px) var(--ds-button-s-size-pad-bottom, 4px) var(--ds-button-s-size-pad-left, 8px);
  border-radius: var(--ds-button-border-radius, 8px);
}
.ds-snackbar__element-right {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-snackbar__progress {
  height: var(--ds-size-1x);
  display: flex;
  flex-direction: row;
  border-radius: var(--ds-snackbar-border-radius, 8px);
  background: var(--ds-color-snackbar-progress-color, #448aff);
}
.ds-snackbar--single.ds-snackbar--dark {
  background: var(--ds-color-snackbar-complex-dark-background, #424242);
  color: var(--ds-color-snackbar-complex-dark-text-color, #ffffff);
}
.ds-snackbar--single.ds-snackbar--light {
  width: 370px;
  background: var(--ds-color-snackbar-complex-light-background, #ffffff);
  color: var(--ds-color-snackbar-complex-light-text-color, #333333);
}
.ds-snackbar--complex.ds-snackbar--dark {
  width: 232px;
  background: var(--ds-color-snackbar-complex-dark-background, #424242);
  color: var(--ds-color-snackbar-complex-dark-text-color, #ffffff);
}
.ds-snackbar--complex.ds-snackbar--light {
  width: 370px;
  background: var(--ds-color-snackbar-complex-light-background, #ffffff);
  color: var(--ds-color-snackbar-complex-light-text-color, #333333);
}

/* State [54063:12395] — 2 вариантов; оси: State */
.ds-state {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-state:hover {
  background: #ebebeb;
}
.ds-state:active {
  background: #e0e0e0;
}

/* Status [52928:6588] — 18 вариантов; оси: Style, Type */
.ds-status {
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-status-gap, 4px);
  border-radius: var(--ds-status-border-radius, 8px);
  padding: var(--ds-status-pad-top, 4px) var(--ds-status-pad-right, 6px) var(--ds-status-pad-bottom, 4px) var(--ds-status-pad-left, 6px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-status__label {
  font-size: var(--ds-font-caption-l-12-normal-medium-size);
  line-height: var(--ds-font-caption-l-12-normal-medium-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-medium-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-medium-weight);
  color: var(--ds-color-status-neutral-filled-text-color, #616161);
  white-space: nowrap;
}
.ds-status__icon {
  flex-shrink: 0;
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-status-icon-color);
}
.ds-status__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-status__icon svg path {
  fill: currentColor;
}
.ds-status__element-left {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-status__info {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-status__content {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-status-neutral-filled-text-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-medium-size);
  line-height: var(--ds-font-caption-l-12-normal-medium-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-medium-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-medium-weight);
  color: var(--ds-color-status-neutral-filled-text-color, #616161);
}
.ds-status__element-right {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-status--neutral.ds-status--filled {
  background: var(--ds-color-status-neutral-filled-background, #fafafa);
  color: var(--ds-color-status-neutral-filled-text-color, #616161);
}
.ds-status--accent.ds-status--filled {
  background: var(--ds-color-status-accent-filled-background, #f5f9ff);
  color: var(--ds-color-status-accent-filled-text-color, #448aff);
}
.ds-status--positive.ds-status--filled {
  background: var(--ds-color-status-positive-filled-background, #f3fcf7);
  color: var(--ds-color-status-positive-filled-text-color, #14b456);
}
.ds-status--warning.ds-status--filled {
  background: var(--ds-color-status-warning-filled-background, #fffcf8);
  color: var(--ds-color-status-warning-filled-text-color, #ea7806);
}
.ds-status--negative.ds-status--filled {
  background: var(--ds-color-status-negative-filled-background, #fff8f8);
  color: var(--ds-color-status-negative-filled-text-color, #ff5252);
}
.ds-status--contrast-1.ds-status--filled {
  background: var(--ds-color-status-contrast-1-filled-background, #fcf6fd);
  color: var(--ds-color-status-contrast-1-filled-text-color, #9c27b0);
}
.ds-status--contrast-2.ds-status--filled {
  background: var(--ds-color-status-contrast-2-filled-background, #fcf8f6);
  color: var(--ds-color-status-contrast-2-filled-text-color, #3e261e);
}
.ds-status--contrast-3.ds-status--filled {
  background: var(--ds-color-status-contrast-3-filled-background, #f8fafc);
  color: var(--ds-color-status-contrast-3-filled-text-color, #263136);
}
.ds-status--contrast-4.ds-status--filled {
  background: var(--ds-color-status-contrast-4-filled-background, #f9fbea);
  color: var(--ds-color-status-contrast-4-filled-text-color, #4f5412);
}
.ds-status--neutral.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-neutral-text-text-color, #616161);
}
.ds-status--accent.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-accent-text-text-color, #448aff);
}
.ds-status--positive.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-positive-text-text-color, #14b456);
}
.ds-status--warning.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-warning-text-text-color, #ea7806);
}
.ds-status--negative.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-negative-text-text-color, #ff5252);
}
.ds-status--contrast-1.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-contrast-1-text-text-color, #9c27b0);
}
.ds-status--contrast-2.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-contrast-2-text-text-color, #3e261e);
}
.ds-status--contrast-3.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-contrast-3-text-text-color, #263136);
}
.ds-status--contrast-4.ds-status--text {
  padding: var(--ds-status-pad-top-text) var(--ds-status-pad-right-text) var(--ds-status-pad-bottom-text) var(--ds-status-pad-left-text);
  color: var(--ds-color-status-contrast-4-text-text-color, #4f5412);
}

/* Table 2 lvl [60074:44684] — 2 вариантов; оси: Type */
.ds-table-2-lvl {
  min-height: 72px;
  display: flex;
  width: 162px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-2-lvl__header-row {
  display: flex;
  flex-direction: column;
  background: var(--ds-color-table-row-header-background-header, #f0f5ff);
  border: 1px solid var(--ds-color-stroke-default, #e0e0e0);
}
.ds-table-2-lvl--table-cell-2-lvl {
  flex-direction: column;
  border: 1px solid var(--ds-color-stroke-default, #e0e0e0);
}
.ds-table-2-lvl--table-row-2-lvl {
  width: fit-content;
  flex-direction: row;
  align-items: center;
}

/* Table Chips Input [60220:70978] — 8 вариантов; оси: Style */
.ds-table-chips-input {
  min-height: var(--ds-size-6x);
  width: fit-content;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-chips-input__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: #616161;
  white-space: nowrap;
}
.ds-table-chips-input__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-chips-icon-color);
}
.ds-table-chips-input__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-table-chips-input__icon svg path {
  fill: currentColor;
}
.ds-table-chips-input__frame {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-chips-input-gap-chips-input-frame, 4px);
  border-radius: var(--ds-size-3x);
  background: #f8f9fc;
  border: 1px solid #e0e0e0;
}
.ds-table-chips-input__support {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-1x);
}
.ds-table-chips-input--default {
  color: #616161;
}
.ds-table-chips-input--hover {
  color: #616161;
}
.ds-table-chips-input--focus {
  color: #333333;
}
.ds-table-chips-input--focus-placeholder {
  color: #333333;
}
.ds-table-chips-input--vocus-value {
  color: #333333;
}
.ds-table-chips-input--error {
  color: #616161;
}
.ds-table-chips-input--error-hover {
  color: #616161;
}
.ds-table-chips-input--disable {
  color: #9e9e9e;
}

/* Table content cell [52954:1253] — 8 вариантов; оси: State */
.ds-table-content-cell {
  min-height: var(--ds-size-9x);
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-content-cell__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-text-ui-text-label-color, #616161);
  white-space: nowrap;
}
.ds-table-content-cell__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-table-content-cell__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-table-content-cell__icon svg path {
  fill: currentColor;
}
.ds-table-content-cell__element {
  display: flex;
  flex-direction: row;
}
.ds-table-content-cell__text-ui {
  display: flex;
  flex-direction: row;
  gap: var(--ds-list-item-gap, 8px);
}
.ds-table-content-cell:disabled {
  color: var(--ds-color-text-ui-disable-label-text-color, #9e9e9e);
}
.ds-table-content-cell.ds-table-content-cell--disabled {
  color: var(--ds-color-text-ui-disable-label-text-color, #9e9e9e);
}
.ds-table-content-cell:hover {
  border: 1px solid var(--ds-color-table-cell-content-hover-border-color, #9e9e9e);
}
.ds-table-content-cell--disabled {
  pointer-events: none;
}

/* Table content row [60105:56764] — 5 вариантов; оси: State */
.ds-table-content-row {
  min-height: var(--ds-size-9x);
  width: fit-content;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--ds-color-stroke-default, #e0e0e0);
  background: var(--ds-color-table-row-content-default-background, #ffffff);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-content-row__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-text-ui-text-label-color, #616161);
  white-space: nowrap;
}
.ds-table-content-row:disabled {
  color: var(--ds-color-text-ui-disable-label-text-color, #9e9e9e);
}
.ds-table-content-row.ds-table-content-row--disabled {
  color: var(--ds-color-text-ui-disable-label-text-color, #9e9e9e);
}
.ds-table-content-row:hover {
  background: var(--ds-color-table-row-content-hover-background, #f5f5f5);
}
.ds-table-content-row--disabled {
  pointer-events: none;
}

/* Table footer [59207:20759] — 1 вариантов; оси: Type */
.ds-table-footer {
  height: 65px;
  width: 980px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-table-footer-background, #ffffff);
  box-shadow: var(--ds-shadow-shadows-01-dp-sl);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-footer__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-expansion-panel-content-text-color, #333333);
  white-space: nowrap;
}
.ds-table-footer__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.ds-table-footer__content {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-table-footer-pad-top, 12px) var(--ds-table-footer-pad-right, 32px) var(--ds-table-footer-pad-bottom, 12px) var(--ds-table-footer-pad-left, 32px);
  background: #ffffff;
}
.ds-table-footer--default {
  color: var(--ds-color-expansion-panel-content-text-color, #333333);
}

/* Table header cell [60098:45424] — 3 вариантов; оси: State */
.ds-table-header-cell {
  min-height: var(--ds-size-9x);
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-top, 8px) var(--ds-table-cell-pad-right, 8px) var(--ds-table-cell-pad-bottom, 8px) var(--ds-table-cell-pad-left, 8px);
  border: 1px solid var(--ds-color-stroke-default, #e0e0e0);
  background: var(--ds-color-table-cell-header-default-background, #f0f5ff);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-header-cell__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-text-ui-text-label-color, #616161);
  white-space: nowrap;
}
.ds-table-header-cell__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-table-header-cell__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-table-header-cell__icon svg path {
  fill: currentColor;
}
.ds-table-header-cell__element {
  display: flex;
  flex-direction: row;
}
.ds-table-header-cell__text-ui {
  display: flex;
  flex-direction: row;
  gap: var(--ds-list-item-gap, 8px);
}
.ds-table-header-cell:hover {
  background: var(--ds-color-table-cell-header-hover-background, #f8f9fc);
}
.ds-table-header-cell:disabled {
  background: var(--ds-color-table-cell-header-disable-background, #f0f5ff);
  color: var(--ds-color-text-ui-disable-label-text-color, #9e9e9e);
}
.ds-table-header-cell.ds-table-header-cell--disabled {
  background: var(--ds-color-table-cell-header-disable-background, #f0f5ff);
  color: var(--ds-color-text-ui-disable-label-text-color, #9e9e9e);
}
.ds-table-header-cell--disabled {
  pointer-events: none;
}

/* Table header row [53556:3571] — 1 вариантов; оси: State */
.ds-table-header-row {
  min-height: var(--ds-size-9x);
  width: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-table-row-header-border-radius-top-left);
  background: var(--ds-color-table-row-header-background-header, #f0f5ff);
  border: 1px solid var(--ds-color-stroke-default, #e0e0e0);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-header-row__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-text-ui-text-label-color, #616161);
  white-space: nowrap;
}

/* Text UI [57938:18290] — 7 вариантов; оси: State */
.ds-text-ui {
  min-height: 52px;
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: var(--ds-list-item-gap, 8px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-text-ui__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-text-ui-text-label-color, #616161);
  white-space: nowrap;
}
.ds-text-ui__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-text-ui__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-text-ui__icon svg path {
  fill: currentColor;
}
.ds-text-ui__element-left {
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
.ds-text-ui__checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-text-ui__content {
  display: flex;
  flex-direction: column;
}
.ds-text-ui__label-up {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-ui-text-label-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-text-ui-text-label-color, #616161);
}
.ds-text-ui__list-item {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-ui-text-color, #333333);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-text-ui-text-color, #333333);
}
.ds-text-ui__label-down {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-ui-text-label-color, #616161);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-text-ui-text-label-color, #616161);
}
.ds-text-ui__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: #ffffff;
}
.ds-text-ui__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-text-ui:disabled {
  color: var(--ds-color-text-ui-disable-label-text-color, #9e9e9e);
}
.ds-text-ui.ds-text-ui--disabled {
  color: var(--ds-color-text-ui-disable-label-text-color, #9e9e9e);
}
.ds-text-ui--disabled {
  pointer-events: none;
}

/* Textarea [57916:9023] — 13 вариантов; оси: Size, Variant, State */
.ds-textarea {
  min-height: 96px;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support, 4px);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-textarea__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
  white-space: nowrap;
}
.ds-textarea__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-textarea__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-textarea__icon svg path {
  fill: currentColor;
}
.ds-textarea__input-frame {
  height: 76px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-form-field-gap-input-frame, 8px);
  padding: var(--ds-form-field-pad-textarea-top, 4px) var(--ds-form-field-m-size-pad-input-right, 12px) var(--ds-form-field-m-size-pad-input-bottom, 12px) var(--ds-form-field-m-size-pad-input-left, 12px);
  border-radius: var(--ds-form-field-border-radius, 12px);
  background: var(--ds-color-form-field-input-filled-background, #f8f9fc);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color, #e0e0e0);
}
.ds-textarea__element-left {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-textarea__input-content {
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-content);
}
.ds-textarea__element-right {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-textarea__scroll {
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-top, 2px) var(--ds-scroll-pad-right, 2px) var(--ds-scroll-pad-bottom, 2px) var(--ds-scroll-pad-left, 2px);
}
.ds-textarea__support {
  display: flex;
  flex-direction: row;
}
.ds-textarea__text {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: 0 var(--ds-form-field-pad-support-right, 12px) 0 var(--ds-form-field-pad-support-left, 12px);
}
.ds-textarea__hint {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: 0 var(--ds-form-field-pad-support-right, 12px) 0 var(--ds-form-field-pad-support-left, 12px);
}
.ds-textarea--populated:disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-textarea--populated.ds-textarea--disabled {
  color: var(--ds-color-form-field-filled-disable-label-text-color, #9e9e9e);
}
.ds-textarea--empty:disabled {
  color: var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e);
}
.ds-textarea--empty.ds-textarea--disabled {
  color: var(--ds-color-form-field-filled-disable-input-text-color, #9e9e9e);
}
.ds-textarea--populated:focus-visible {
  color: var(--ds-color-form-field-filled-focus-label-text-color, #448aff);
}
.ds-textarea--populated {
  color: var(--ds-color-form-field-filled-default-label-text-color, #616161);
}
.ds-textarea--empty {
  color: var(--ds-color-form-field-input-label-text-color, #616161);
}
.ds-textarea--populated:hover {
  color: var(--ds-color-form-field-filled-hover-label-text-color, #616161);
}
.ds-textarea--empty:hover {
  background: var(--ds-color-form-field-filled-hover-input-background-hover, #f5f5f5);
  border: 1px solid var(--ds-color-form-field-filled-hover-border-color, #9e9e9e);
}
.ds-textarea--disabled {
  pointer-events: none;
}

/* Timepicker [58982:9858] — 2 вариантов; оси: Type */
.ds-timepicker {
  width: fit-content;
  display: flex;
  padding: var(--ds-size-2x) 0 var(--ds-size-2x) 0;
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-brand-neutral-default, #ffffff);
  border: 1px solid var(--ds-color-stroke-default, #e0e0e0);
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-timepicker__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-text-primary, #333333);
  white-space: nowrap;
}
.ds-timepicker__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: var(--ds-size-3x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-timepicker__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-timepicker__icon svg path {
  fill: currentColor;
}
.ds-timepicker__control-panel {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-timepicker__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-top, 2px) var(--ds-scroll-pad-right, 2px) var(--ds-scroll-pad-bottom, 2px) var(--ds-scroll-pad-left, 2px);
}
.ds-timepicker--time-grid {
  flex-direction: column;
  align-items: center;
  color: var(--ds-color-text-primary, #333333);
}
.ds-timepicker--time-line {
  flex-direction: row;
  color: var(--ds-color-text-primary, #333333);
}

/* Tree [59564:1473] — 8 вариантов; оси: Level, Mode, For icon */
.ds-tree {
  height: 44px;
  width: fit-content;
  display: flex;
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-tree__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-tree__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-tree__icon svg path {
  fill: currentColor;
}
.ds-tree__item {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: 0 0 var(--ds-size-5x) 11px;
}
.ds-tree__separator-stroke {
  height: 100%;
  display: flex;
  flex-direction: row;
  background: #d7d8d9;
}
.ds-tree--2.ds-tree--end.ds-tree--on {
  flex-direction: row;
}
.ds-tree--2.ds-tree--end.ds-tree--off {
  flex-direction: column;
}
.ds-tree--3.ds-tree--end.ds-tree--on {
  flex-direction: row;
}
.ds-tree--3.ds-tree--end.ds-tree--off {
  flex-direction: row;
}
.ds-tree--2.ds-tree--middle.ds-tree--on {
  flex-direction: row;
  align-items: center;
}
.ds-tree--2.ds-tree--middle.ds-tree--off {
  flex-direction: row;
  align-items: center;
}
.ds-tree--3.ds-tree--middle.ds-tree--on {
  flex-direction: row;
  align-items: center;
}
.ds-tree--3.ds-tree--middle.ds-tree--off {
  flex-direction: row;
  align-items: center;
}

/* Tree item [59564:1504] — 5 вариантов; оси: Mode */
.ds-tree-item {
  height: 44px;
  display: flex;
  width: fit-content;
  padding: 0 0 var(--ds-size-5x) 11px;
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-tree-item__separator-stroke {
  height: 100%;
  display: flex;
  flex-direction: row;
  background: #d7d8d9;
}
.ds-tree-item--end {
  flex-direction: row;
  align-items: center;
}
.ds-tree-item--end-long {
  width: 48px;
  flex-direction: column;
  padding: 0 0 21px 11px;
}
.ds-tree-item--middle {
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 11px;
}
.ds-tree-item--middle-long {
  width: 48px;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 11px;
}
.ds-tree-item--start {
  width: var(--ds-size-6x);
  flex-direction: row;
  align-items: center;
  padding: 0 var(--ds-size-3x) 0 11px;
}

/* ============================================================
   iiko DS — Button (кнопка)
   Источник: Figma, страница «🔵Готово 🧾 → Button»
   Варианты: Size XS/S/M · Style Accent/Neutral/Positive/Negative/Warning/Disable
             Type Filled/Outlined/Text · State Default/Hover/Press/Disable
   Все значения — только токены из tokens.css
   ============================================================ */

.ds-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: var(--ds-radius-2x);            /* 8px */
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-size: var(--ds-typography-font-size-3-5x); /* 14px */
  font-weight: var(--ds-typography-font-weight-medium); /* 500 */
  letter-spacing: var(--ds-typography-letter-spacing-s); /* 0.5px */
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.ds-btn:focus-visible {
  outline: 2px solid var(--ds-palette-accent-300);
  outline-offset: 2px;
}

.ds-btn:disabled,
.ds-btn--disabled {
  pointer-events: none;
}

/* ── Размеры ─────────────────────────────────────────────── */

.ds-btn--xs {
  height: 24px;
  padding: 4px 6px;
  gap: var(--ds-space-1x);                        /* 4px */
  font-size: var(--ds-typography-font-size-3x);   /* 12px */
}
.ds-btn--xs /* Контейнер текста (Figma: «Button Container» — HUG, выравнивание по центру).
   Своей типографики нет: размер/вес/цвет наследуются от .ds-btn */
.ds-btn__label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}

.ds-btn__icon { font-size: 16px; }

.ds-btn--s {
  height: 28px;
  padding: 4px 8px;
  gap: var(--ds-space-1x);
}
.ds-btn--s .ds-btn__icon { font-size: 20px; }

.ds-btn--m {
  height: 36px;
  padding: 8px 12px;
  gap: var(--ds-space-2x);                        /* 8px */
}
.ds-btn--m .ds-btn__icon { font-size: 20px; }

/* ── Группа кнопок (Button group из Figma) ───────────────── */

.ds-btn-group {
  display: flex;
}
.ds-btn-group--horizontal { flex-direction: row; gap: var(--ds-space-2x); }   /* 8px */
.ds-btn-group--vertical   { flex-direction: column; gap: var(--ds-space-2x); }
.ds-btn-group--margins {
  padding: 8px 16px;
}

/* ── Иконки ──────────────────────────────────────────────── */

.ds-btn__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 20px;
  line-height: 1;
}

/* ── Стили: Accent ───────────────────────────────────────── */

.ds-btn--accent.ds-btn--filled {
  background: var(--ds-color-button-accent-default);   /* #448AFF */
  color: var(--ds-color-text-inversive);               /* #FFFFFF */
}
.ds-btn--accent.ds-btn--filled:hover  { background: var(--ds-color-button-accent-hover); }   /* #3969D5 */
.ds-btn--accent.ds-btn--filled:active { background: var(--ds-color-button-accent-press); }   /* #2651B5 */

.ds-btn--accent.ds-btn--outlined {
  background: var(--ds-color-button-accent-lite-default); /* #FFFFFF */
  border-color: var(--ds-color-button-accent-default);
  color: var(--ds-color-button-accent-default);
}
.ds-btn--accent.ds-btn--outlined:hover  { background: var(--ds-color-button-accent-lite-hover); } /* #F5F9FF */
.ds-btn--accent.ds-btn--outlined:active { background: var(--ds-color-button-accent-lite-press); } /* #E8F0FF */

.ds-btn--accent.ds-btn--text {
  background: var(--ds-color-button-accent-lite-default);
  color: var(--ds-color-button-accent-default);
}
.ds-btn--accent.ds-btn--text:hover  { background: var(--ds-color-button-accent-lite-hover); }
.ds-btn--accent.ds-btn--text:active { background: var(--ds-color-button-accent-lite-press); }

/* ── Стили: Neutral ──────────────────────────────────────── */

.ds-btn--neutral.ds-btn--filled {
  background: var(--ds-color-button-neutral-default); /* #FFFFFF */
  color: var(--ds-color-text-primary);                /* #333333 */
}
.ds-btn--neutral.ds-btn--filled:hover  { background: var(--ds-color-button-neutral-hover); } /* #FAFAFA */
.ds-btn--neutral.ds-btn--filled:active { background: var(--ds-color-button-neutral-press); } /* #EBEBEB */

.ds-btn--neutral.ds-btn--outlined {
  background: var(--ds-color-button-neutral-default);
  border-color: var(--ds-color-stroke-default);      /* #E0E0E0 */
  color: var(--ds-color-text-primary);
}
.ds-btn--neutral.ds-btn--outlined:hover  { background: var(--ds-color-button-neutral-hover); }
.ds-btn--neutral.ds-btn--outlined:active { background: var(--ds-color-button-neutral-press); }

.ds-btn--neutral.ds-btn--text {
  background: var(--ds-color-button-neutral-default);
  color: var(--ds-color-text-primary);
}
.ds-btn--neutral.ds-btn--text:hover  { background: var(--ds-color-button-neutral-hover); }
.ds-btn--neutral.ds-btn--text:active { background: var(--ds-color-button-neutral-press); }

/* ── Стили: Positive ─────────────────────────────────────── */

.ds-btn--positive.ds-btn--filled {
  background: var(--ds-color-button-positive-default); /* #14B456 */
  color: var(--ds-color-text-inversive);
}
.ds-btn--positive.ds-btn--filled:hover  { background: var(--ds-color-button-positive-hover); } /* #119C34 */
.ds-btn--positive.ds-btn--filled:active { background: var(--ds-color-button-positive-press); } /* #0F852C */

.ds-btn--positive.ds-btn--outlined {
  background: var(--ds-color-button-positive-lite-default);
  border-color: var(--ds-color-button-positive-default);
  color: var(--ds-color-button-positive-default);
}
.ds-btn--positive.ds-btn--outlined:hover  { background: var(--ds-color-button-positive-lite-hover); } /* #F3FCF7 */
.ds-btn--positive.ds-btn--outlined:active { background: var(--ds-color-button-positive-lite-press); } /* #E0F8EA */

.ds-btn--positive.ds-btn--text {
  background: var(--ds-color-button-positive-lite-default);
  color: var(--ds-color-button-positive-default);
}
.ds-btn--positive.ds-btn--text:hover  { background: var(--ds-color-button-positive-lite-hover); }
.ds-btn--positive.ds-btn--text:active { background: var(--ds-color-button-positive-lite-press); }

/* ── Стили: Negative ─────────────────────────────────────── */

.ds-btn--negative.ds-btn--filled {
  background: var(--ds-color-button-negative-default); /* #FF5252 */
  color: var(--ds-color-text-inversive);
}
.ds-btn--negative.ds-btn--filled:hover  { background: var(--ds-color-button-negative-hover); } /* #F4372F */
.ds-btn--negative.ds-btn--filled:active { background: var(--ds-color-button-negative-press); } /* #DE1A12 */

.ds-btn--negative.ds-btn--outlined {
  background: var(--ds-color-button-negative-lite-default);
  border-color: var(--ds-color-button-negative-default);
  color: var(--ds-color-button-negative-default);
}
.ds-btn--negative.ds-btn--outlined:hover  { background: var(--ds-color-button-negative-lite-hover); } /* #FFF8F8 */
.ds-btn--negative.ds-btn--outlined:active { background: var(--ds-color-button-negative-lite-press); } /* #FFE5E5 */

.ds-btn--negative.ds-btn--text {
  background: var(--ds-color-button-negative-lite-default);
  color: var(--ds-color-button-negative-default);
}
.ds-btn--negative.ds-btn--text:hover  { background: var(--ds-color-button-negative-lite-hover); }
.ds-btn--negative.ds-btn--text:active { background: var(--ds-color-button-negative-lite-press); }

/* ── Стили: Warning ──────────────────────────────────────── */

.ds-btn--warning.ds-btn--filled {
  background: var(--ds-color-button-warning-default); /* #FFAB40 */
  color: var(--ds-color-text-inversive);
}
.ds-btn--warning.ds-btn--filled:hover  { background: var(--ds-color-button-warning-hover); } /* #FE8C06 */
.ds-btn--warning.ds-btn--filled:active { background: var(--ds-color-button-warning-press); } /* #EA7806 */

.ds-btn--warning.ds-btn--outlined {
  background: var(--ds-color-button-warning-lite-default);
  border-color: var(--ds-color-button-warning-default);
  color: var(--ds-color-button-warning-press);      /* по ДС текст #EA7806 */
}
.ds-btn--warning.ds-btn--outlined:hover  { background: var(--ds-color-button-warning-lite-hover); } /* #FFFCF8 */
.ds-btn--warning.ds-btn--outlined:active { background: var(--ds-color-button-warning-lite-press); } /* #FFF4E5 */

.ds-btn--warning.ds-btn--text {
  background: var(--ds-color-button-warning-lite-default);
  color: var(--ds-color-button-warning-press);
}
.ds-btn--warning.ds-btn--text:hover  { background: var(--ds-color-button-warning-lite-hover); }
.ds-btn--warning.ds-btn--text:active { background: var(--ds-color-button-warning-lite-press); }

/* ── Стили: Disable / disabled ───────────────────────────── */

.ds-btn--filled:disabled,
.ds-btn--filled.ds-btn--disabled {
  background: var(--ds-color-button-neutral-disable); /* #EBEBEB */
  color: var(--ds-color-text-disable);                /* #9E9E9E */
}

.ds-btn--outlined:disabled,
.ds-btn--outlined.ds-btn--disabled {
  background: var(--ds-color-button-neutral-default);
  border-color: var(--ds-color-button-neutral-disable);
  color: var(--ds-color-text-disable);
}

.ds-btn--text:disabled,
.ds-btn--text.ds-btn--disabled {
  background: var(--ds-color-button-neutral-default);
  color: var(--ds-color-text-disable);
}

/* ============================================================
   iiko DS — Button icon + Button icon group
   Источник: Figma, страница «Button icon» [17123:81299], 153 варианта
   Оси: Size (M/S/XS) × Style (Accent/Negative/Neutral/Positive/Warning)
        × Type (Filled/Outlined/Text) × State (Default/Hover/Press/Disable/Loading)
   Размеры: M 36×36 (иконка 20) · S 28×28 (иконка 20) · XS 24×24 (иконка 16)
   Радиус 8px у всех размеров
   ============================================================ */

.ds-btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-shrink: 0;
  width: var(--ds-size-9x);                    /* M: 36px */
  height: var(--ds-size-9x);
  padding: var(--ds-space-2x);                 /* 8px */
  border: 1px solid transparent;
  border-radius: var(--ds-radius-2x);          /* 8px */
  background: none;
  cursor: pointer;
  transition: background-color .12s ease, border-color .12s ease;
}

.ds-btn-icon__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--ds-size-5x);                    /* 20px */
  height: var(--ds-size-5x);
  flex-shrink: 0;                              /* иконка не сжимается */
}
.ds-btn-icon__icon svg { width: 100%; height: 100%; display: block; }
.ds-btn-icon__icon svg path { fill: currentColor; }

/* ── Размеры ──────────────────────────────────────────────── */

.ds-btn-icon--m {
  width: var(--ds-size-9x);                    /* 36px */
  height: var(--ds-size-9x);
  padding: var(--ds-space-2x);                 /* 8px */
}
.ds-btn-icon--s {
  width: var(--ds-size-7x);                    /* 28px */
  height: var(--ds-size-7x);
  padding: var(--ds-space-1x);                 /* 4px */
}
.ds-btn-icon--xs {
  width: var(--ds-size-6x);                    /* 24px */
  height: var(--ds-size-6x);
  padding: var(--ds-space-1x);                 /* 4px */
}
.ds-btn-icon--xs .ds-btn-icon__icon {
  width: var(--ds-size-4x);                    /* 16px */
  height: var(--ds-size-4x);
  flex-shrink: 0;                              /* иконка не сжимается */
}

/* ── Состояния: общие ─────────────────────────────────────── */

.ds-btn-icon:disabled,
.ds-btn-icon--disabled {
  pointer-events: none;
  background: var(--ds-color-button-icon-disable-background-filled);
  border-color: var(--ds-color-button-icon-disable-border-color);
  color: var(--ds-color-button-icon-disable-icon-color);
}
.ds-btn-icon--outlined:disabled,
.ds-btn-icon--outlined.ds-btn-icon--disabled {
  background: var(--ds-color-button-icon-disable-background-outlined);
}
.ds-btn-icon--text:disabled,
.ds-btn-icon--text.ds-btn-icon--disabled {
  background: var(--ds-color-button-icon-disable-background-text);
  border-color: transparent;
}

/* ── Button icon group (Orientation=Horizontally / Vertically) ── */

.ds-btn-icon-group {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-space-2x);                     /* 8px */
}
.ds-btn-icon-group--vertically {
  flex-direction: column;
}

/* ── Стиль × Тип (все комбинации, значения из токенов ДС) ── */

.ds-btn-icon--accent.ds-btn-icon--filled {
  background: var(--ds-color-button-icon-accent-filled-default-background);
  color: var(--ds-color-button-icon-accent-filled-icon-color);
}
.ds-btn-icon--accent.ds-btn-icon--filled:hover {
  background: var(--ds-color-button-icon-accent-filled-hover-background);
}
.ds-btn-icon--accent.ds-btn-icon--filled:active {
  background: var(--ds-color-button-icon-accent-filled-press-background);
}
.ds-btn-icon--accent.ds-btn-icon--outlined {
  background: var(--ds-color-button-icon-accent-outlined-default-background);
  color: var(--ds-color-button-icon-accent-outlined-icon-color);
  border-color: var(--ds-color-button-icon-accent-outlined-border-color);
}
.ds-btn-icon--accent.ds-btn-icon--outlined:hover {
  background: var(--ds-color-button-icon-accent-outlined-hover-background);
}
.ds-btn-icon--accent.ds-btn-icon--outlined:active {
  background: var(--ds-color-button-icon-accent-outlined-press-background);
}
.ds-btn-icon--accent.ds-btn-icon--text {
  background: var(--ds-color-button-icon-accent-text-default-background);
  color: var(--ds-color-button-icon-accent-text-icon-color);
}
.ds-btn-icon--accent.ds-btn-icon--text:hover {
  background: var(--ds-color-button-icon-accent-text-hover-background);
}
.ds-btn-icon--accent.ds-btn-icon--text:active {
  background: var(--ds-color-button-icon-accent-text-press-background);
}
.ds-btn-icon--negative.ds-btn-icon--filled {
  background: var(--ds-color-button-icon-negative-filled-default-background);
  color: var(--ds-color-button-icon-negative-filled-icon-color);
}
.ds-btn-icon--negative.ds-btn-icon--filled:hover {
  background: var(--ds-color-button-icon-negative-filled-hover-background);
}
.ds-btn-icon--negative.ds-btn-icon--filled:active {
  background: var(--ds-color-button-icon-negative-filled-press-background);
}
.ds-btn-icon--negative.ds-btn-icon--outlined {
  background: var(--ds-color-button-icon-negative-outlined-default-background);
  color: var(--ds-color-button-icon-negative-outlined-icon-color);
  border-color: var(--ds-color-button-icon-negative-outlined-border-color);
}
.ds-btn-icon--negative.ds-btn-icon--outlined:hover {
  background: var(--ds-color-button-icon-negative-outlined-hover-background);
}
.ds-btn-icon--negative.ds-btn-icon--outlined:active {
  background: var(--ds-color-button-icon-negative-outlined-press-background);
}
.ds-btn-icon--negative.ds-btn-icon--text {
  background: var(--ds-color-button-icon-negative-text-default-background);
  color: var(--ds-color-button-icon-negative-text-icon-color);
}
.ds-btn-icon--negative.ds-btn-icon--text:hover {
  background: var(--ds-color-button-icon-negative-text-hover-background);
}
.ds-btn-icon--negative.ds-btn-icon--text:active {
  background: var(--ds-color-button-icon-negative-text-press-background);
}
.ds-btn-icon--neutral.ds-btn-icon--filled {
  background: var(--ds-color-button-icon-neutral-filled-default-background);
  color: var(--ds-color-button-icon-neutral-filled-icon-color);
}
.ds-btn-icon--neutral.ds-btn-icon--filled:hover {
  background: var(--ds-color-button-icon-neutral-filled-hover-background);
}
.ds-btn-icon--neutral.ds-btn-icon--filled:active {
  background: var(--ds-color-button-icon-neutral-filled-press-background);
}
.ds-btn-icon--neutral.ds-btn-icon--outlined {
  background: var(--ds-color-button-icon-neutral-outlined-default-background);
  color: var(--ds-color-button-icon-neutral-outlined-icon-color);
  border-color: var(--ds-color-button-icon-neutral-outlined-border-color);
}
.ds-btn-icon--neutral.ds-btn-icon--outlined:hover {
  background: var(--ds-color-button-icon-neutral-outlined-hover-background);
}
.ds-btn-icon--neutral.ds-btn-icon--outlined:active {
  background: var(--ds-color-button-icon-neutral-outlined-press-background);
}
.ds-btn-icon--neutral.ds-btn-icon--text {
  background: var(--ds-color-button-icon-neutral-text-default-background);
  color: var(--ds-color-button-icon-neutral-text-icon-color);
}
.ds-btn-icon--neutral.ds-btn-icon--text:hover {
  background: var(--ds-color-button-icon-neutral-text-hover-background);
}
.ds-btn-icon--neutral.ds-btn-icon--text:active {
  background: var(--ds-color-button-icon-neutral-text-press-background);
}
.ds-btn-icon--positive.ds-btn-icon--filled {
  background: var(--ds-color-button-icon-positive-filled-default-background);
  color: var(--ds-color-button-icon-positive-filled-icon-color);
}
.ds-btn-icon--positive.ds-btn-icon--filled:hover {
  background: var(--ds-color-button-icon-positive-filled-hover-background);
}
.ds-btn-icon--positive.ds-btn-icon--filled:active {
  background: var(--ds-color-button-icon-positive-filled-press-background);
}
.ds-btn-icon--positive.ds-btn-icon--outlined {
  background: var(--ds-color-button-icon-positive-outlined-default-background);
  color: var(--ds-color-button-icon-positive-outlined-icon-color);
  border-color: var(--ds-color-button-icon-positive-outlined-border-color);
}
.ds-btn-icon--positive.ds-btn-icon--outlined:hover {
  background: var(--ds-color-button-icon-positive-outlined-hover-background);
}
.ds-btn-icon--positive.ds-btn-icon--outlined:active {
  background: var(--ds-color-button-icon-positive-outlined-press-background);
}
.ds-btn-icon--positive.ds-btn-icon--text {
  background: var(--ds-color-button-icon-positive-text-default-background);
  color: var(--ds-color-button-icon-positive-text-icon-color);
}
.ds-btn-icon--positive.ds-btn-icon--text:hover {
  background: var(--ds-color-button-icon-positive-text-hover-background);
}
.ds-btn-icon--positive.ds-btn-icon--text:active {
  background: var(--ds-color-button-icon-positive-text-press-background);
}
.ds-btn-icon--warning.ds-btn-icon--filled {
  background: var(--ds-color-button-icon-warning-filled-default-background);
  color: var(--ds-color-button-icon-warning-filled-icon-color);
}
.ds-btn-icon--warning.ds-btn-icon--filled:hover {
  background: var(--ds-color-button-icon-warning-filled-hover-background);
}
.ds-btn-icon--warning.ds-btn-icon--filled:active {
  background: var(--ds-color-button-icon-warning-filled-press-background);
}
.ds-btn-icon--warning.ds-btn-icon--outlined {
  background: var(--ds-color-button-icon-warning-outlined-default-background);
  color: var(--ds-color-button-icon-warning-outlined-icon-color);
  border-color: var(--ds-color-button-icon-warning-outlined-border-color);
}
.ds-btn-icon--warning.ds-btn-icon--outlined:hover {
  background: var(--ds-color-button-icon-warning-outlined-hover-background);
}
.ds-btn-icon--warning.ds-btn-icon--outlined:active {
  background: var(--ds-color-button-icon-warning-outlined-press-background);
}
.ds-btn-icon--warning.ds-btn-icon--text {
  background: var(--ds-color-button-icon-warning-text-default-background);
  color: var(--ds-color-button-icon-warning-text-icon-color);
}
.ds-btn-icon--warning.ds-btn-icon--text:hover {
  background: var(--ds-color-button-icon-warning-text-hover-background);
}
.ds-btn-icon--warning.ds-btn-icon--text:active {
  background: var(--ds-color-button-icon-warning-text-press-background);
}

/* ============================================================
   iiko DS — Input (Form field + Input)
   Источник: Figma, страница «     Form field+Input», COMPONENT_SET «Input»
   Свойства: Size (M/S/XS) · Variant (Empty/Populated/No label up) · State (8)
   M — лейбл сверху (48px), S — 36px, XS — 28px (S/XS без лейбла)
   XS: Border radius = 0px, фон прозрачный (fill visible=false) — 1:1 из Figma
   Все значения — только токены из tokens.css
   ============================================================ */

.ds-input {
  display: flex;
  flex-direction: column;
  gap: var(--ds-space-1x);            /* 4px — Input/Gap input support */
  width: 100%;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* ── Рамка поля (Input Frame) ─────────────────────────── */

.ds-input__frame {
  display: flex;
  align-items: center;
  gap: var(--ds-space-2x);            /* 8px — Input/Gap input frame */
  box-sizing: border-box;
  border: 1px solid var(--ds-color-stroke-default);   /* #E0E0E0 */
  border-radius: var(--ds-radius-3x);                 /* 12px — Input/Border radius */
  background: var(--ds-color-shapes-default-variant); /* #F8F9FC — Input/Input filled background */
  transition: background-color 0.15s ease, border-color 0.15s ease;
}

.ds-input--m .ds-input__frame { height: 48px; padding: 12px; }               /* M: Pad 12/12 */
.ds-input--s .ds-input__frame { height: 36px; padding: 6px 12px; }           /* S: Pad 6/12 */
.ds-input--xs .ds-input__frame {
  height: 28px;
  padding: 4px 8px;                 /* XS: Pad 4/8 */
  border-radius: var(--ds-radius-0);   /* XS: Border radius = 0px */
  background: transparent;             /* XS: заливка выключена в Figma */
}

/* ── Иконки слева/справа (Element left / Element right) ── */

.ds-input__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 20px;                   /* Input/[M|S|XS] size/Icon: узлы 20×20 */
  color: var(--ds-color-icon-primary);  /* #616161 */
}

/* ── Содержимое: лейбл + поле ─────────────────────────── */

.ds-input__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  min-width: 0;
}

.ds-input__label {
  font-size: var(--ds-typography-font-size-3x);    /* 12px — Input/[M|S|XS] size/Text label */
  font-weight: var(--ds-typography-font-weight-regular);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  line-height: 16px;
  color: var(--ds-color-text-secondary);           /* #616161 — Input/Input label text color */
  transition: color 0.15s ease;
}

.ds-input__field {
  width: 100%;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  font-family: inherit;
  font-size: var(--ds-typography-font-size-4x);    /* 16px — M/S: Text */
  font-weight: var(--ds-typography-font-weight-regular);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  line-height: 24px;
  color: var(--ds-color-text-primary);             /* #333333 */
}

.ds-input--xs .ds-input__field {
  font-size: var(--ds-typography-font-size-3-5x);  /* 14px — XS: Text */
  line-height: 20px;
}
.ds-input--xs .ds-input__label,
.ds-input--s  .ds-input__label { display: none; }  /* S/XS — No label up */

.ds-input__field::placeholder {
  color: var(--ds-color-text-placeholder);         /* #D6D6D6 */
  opacity: 1;
}

/* ── Поддержка: Support text + Hint text (Support-блок) ── */

.ds-input__support-row {
  display: flex;
  align-items: center;
  justify-content: space-between;   /* как в Figma: Support text слева, Hint text справа (фреймы 176/74) */
}

.ds-input__support,
.ds-input__hint {
  font-size: var(--ds-typography-font-size-3x);    /* 12px — Text support */
  font-weight: var(--ds-typography-font-weight-regular);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  line-height: 16px;
  color: var(--ds-color-text-secondary);           /* #616161 */
  transition: color 0.15s ease;
}

/* ── Состояния (Input/Filled/[State]/*) ────────────────── */

/* Hover */
.ds-input__frame:hover {
  background: var(--ds-color-shapes-hover);        /* #F5F5F5 */
  border-color: var(--ds-color-stroke-hover);      /* #9E9E9E */
}

/* Focus (рамка подсвечивается, когда фокус внутри) */
.ds-input__frame:focus-within {
  background: var(--ds-color-shapes-default-variant); /* #F8F9FC */
  border-color: var(--ds-color-stroke-accent);        /* #448AFF */
}
.ds-input__frame:focus-within .ds-input__label { color: var(--ds-color-text-accent); }

/* Error / Error+Hover */
.ds-input--error .ds-input__frame {
  border-color: var(--ds-color-stroke-negative);   /* #FF5252 */
  background: var(--ds-color-shapes-default-variant);
}
.ds-input--error .ds-input__frame:hover {
  background: var(--ds-color-shapes-hover);        /* Error+Hover: фон #F5F5F5 */
}
.ds-input--error .ds-input__label,
.ds-input--error .ds-input__support {
  color: var(--ds-color-text-negative);            /* #FF5252 */
}

/* Disabled */
.ds-input--disabled .ds-input__frame,
.ds-input--disabled .ds-input__frame:hover {
  background: var(--ds-color-surface-disable);     /* #F5F5F5 */
  border-color: var(--ds-color-stroke-disable);    /* #EBEBEB */
}
.ds-input--disabled .ds-input__label,
.ds-input--disabled .ds-input__field,
.ds-input--disabled .ds-input__support,
.ds-input--disabled .ds-input__hint,
.ds-input--disabled .ds-input__icon {
  color: var(--ds-color-text-disable);             /* #9E9E9E */
}
.ds-input--disabled .ds-input__field { cursor: not-allowed; }

/* ============================================================
   iiko DS — Checkbox (чекбокс) и Radio button (радиокнопка)
   Источник: Figma, страницы «🔵Готово 🧾 → Checkbox / Radio button»
   Варианты: Normal / Error / Disable · Selected / Deselected / Indeterminate
   Иконки — Material Icons 20px, цвета из токенов
   ============================================================ */

.ds-checkbox,
.ds-radio {
  display: inline-flex;
  align-items: center;
  gap: var(--ds-space-2x);              /* 8px */
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  cursor: pointer;
  user-select: none;
}

/* скрываем нативный контрол, рисуем иконку */
.ds-checkbox__input,
.ds-radio__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.ds-checkbox__box,
.ds-radio__box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  font-size: 20px;
  line-height: 1;
  color: var(--ds-color-icon-primary);            /* #616161 — deselected */
  transition: color 0.15s ease;
}

/* иконки подставляются автоматически по состоянию контрола */
.ds-checkbox__box::before { content: 'check_box_outline_blank'; }

.ds-checkbox__label,
.ds-radio__label {
  font-size: var(--ds-typography-font-size-3-5x); /* 14px */
  font-weight: var(--ds-typography-font-weight-regular);
  letter-spacing: 0.25px;
  line-height: 20px;
  color: var(--ds-color-text-primary);            /* #333333 */
}
.ds-checkbox__label { color: var(--ds-color-checkbox-label-text-color); }
.ds-radio__label { color: var(--ds-color-radio-button-label-text-color); }

/* ── Checkbox: выбран / не выбран / indeterminate ────────── */

.ds-checkbox__box { color: var(--ds-color-checkbox-normal-deselected-icon-color); }
.ds-checkbox__input:checked ~ .ds-checkbox__box {
  color: var(--ds-color-checkbox-normal-selected-icon-color);             /* #448AFF */
}
.ds-checkbox__input:indeterminate ~ .ds-checkbox__box {
  color: var(--ds-color-checkbox-normal-inderterminate-icon-color);       /* #448AFF */
}
.ds-checkbox__input:checked ~ .ds-checkbox__box::before { content: 'check_box'; }
.ds-checkbox__input:indeterminate ~ .ds-checkbox__box::before { content: 'indeterminate_check_box'; }

/* Checkbox label — обёртка (Form + Support) как авто-лейаут Figma: 20 + 4 + 16 = 40 */
.ds-checkbox-wrap {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
}
.ds-checkbox-wrap .ds-checkbox { align-self: flex-start; }

/* ── Radio: выбран / не выбран ───────────────────────────── */

.ds-radio__box { color: var(--ds-color-radio-button-normal-deselected-icon-color); }  /* #616161 */
.ds-radio__input:checked + .ds-radio__box {
  color: var(--ds-color-radio-button-normal-selected-icon-color);             /* #448AFF */
}

/* ── Error ───────────────────────────────────────────────── */

.ds-checkbox--error .ds-checkbox__box,
.ds-checkbox--error .ds-checkbox__input:checked ~ .ds-checkbox__box,
.ds-checkbox--error .ds-checkbox__input:indeterminate ~ .ds-checkbox__box {
  color: var(--ds-color-checkbox-error-icon-color);           /* #FF5252 */
}
.ds-radio--error .ds-radio__box,
.ds-radio--error .ds-radio__input:checked + .ds-radio__box {
  color: var(--ds-color-radio-button-error-icon-color);       /* #FF5252 */
}
.ds-checkbox--error .ds-checkbox__label,
.ds-radio--error .ds-radio__label {
  color: var(--ds-color-text-primary);  /* в Figma текст лейбла Error = #333333 (Text/Primary) */
}

/* ── Disabled ────────────────────────────────────────────── */

.ds-checkbox--disabled,
.ds-radio--disabled {
  cursor: not-allowed;
}
.ds-checkbox--disabled .ds-checkbox__box { color: var(--ds-color-checkbox-disable-deselected-icon-color); }
.ds-checkbox--disabled .ds-checkbox__input:checked ~ .ds-checkbox__box { color: var(--ds-color-checkbox-disable-selected-icon-color); }
.ds-checkbox--disabled .ds-checkbox__input:indeterminate ~ .ds-checkbox__box { color: var(--ds-color-checkbox-disable-inderterminate-icon-color); }
.ds-checkbox--disabled .ds-checkbox__label { color: var(--ds-color-checkbox-label-text-disable-color); }
.ds-radio--disabled .ds-radio__box,
.ds-radio--disabled .ds-radio__input:checked + .ds-radio__box {
  color: var(--ds-color-radio-button-disable-deselected-icon-color);          /* #9E9E9E */
}
.ds-radio--disabled .ds-radio__label {
  color: var(--ds-color-radio-button-label-text-disable-color);               /* #9E9E9E */
}

/* ── Группа контролов (Checkbox group / Radio button group) ─ */

.ds-checkbox-group,
.ds-radio-group {
  display: flex;
}
.ds-checkbox-group--vertical,
.ds-radio-group--vertical { flex-direction: column; gap: var(--ds-space-2x); }  /* 8px */
.ds-checkbox-group--horizontal,
.ds-radio-group--horizontal { flex-direction: row; gap: var(--ds-space-8x); }  /* 32px */

/* ── Подпись под контролом (Support/Error text) ──────────── */

.ds-checkbox__support,
.ds-radio__support {
  display: block;
  margin-top: var(--ds-space-1x);                 /* 4px */
  margin-left: 28px;                              /* выравнивание по тексту (Pad left support 7x) */
  font-size: var(--ds-typography-font-size-3x);   /* 12px (Text support size) */
  line-height: 16px;
}
.ds-checkbox__support { color: var(--ds-color-checkbox-label-text-support-color); }  /* #616161 */
.ds-radio__support { color: var(--ds-color-radio-button-label-text-support-color); } /* #616161 */
.ds-checkbox--error ~ .ds-checkbox__support,
.ds-radio--error .ds-radio__support {
  color: var(--ds-color-text-negative);           /* #FF5252 */
}

/* ── Подложка состояния (State 28×28) — hover/press в Figma ──
   Внутри .ds-radio__box: круг под иконкой 20px. Используется
   в превью «Интерактивного компонента» и матрице вариантов. */

.ds-radio__box {
  position: relative;
}
.ds-radio__box svg {
  position: relative;
  z-index: 1;
  width: 20px;
  height: 20px;
  display: block;
}
.ds-radio__state {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 28px;
  height: 28px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

/* ============================================================
   iiko DS — иконки Checkbox / Radio (SVG из файла иконок ДС)
   Сгенерировано scripts/gen_selection_icons.py
   Цвета — компонентные токены; шрифт Material Icons не нужен
   ============================================================ */

.ds-checkbox__box::before, .ds-radio__box::before { content: none !important; }
.ds-checkbox__box, .ds-radio__box { background-repeat: no-repeat; background-position: center; background-size: 20px 20px; }

.ds-checkbox__box {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%2021C4.45%2021%203.97917%2020.8042%203.5875%2020.4125C3.19583%2020.0208%203%2019.55%203%2019V5C3%204.45%203.19583%203.97917%203.5875%203.5875C3.97917%203.19583%204.45%203%205%203H19C19.55%203%2020.0208%203.19583%2020.4125%203.5875C20.8042%203.97917%2021%204.45%2021%205V19C21%2019.55%2020.8042%2020.0208%2020.4125%2020.4125C20.0208%2020.8042%2019.55%2021%2019%2021H5ZM5%2019H19V5H5V19Z%22%20fill%3D%22%23616161%22%2F%3E%3C%2Fsvg%3E");   /* --ds-color-checkbox-normal-deselected-icon-color */
}
.ds-checkbox__input:checked ~ .ds-checkbox__box {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10.6%2016.2L17.65%209.15L16.25%207.75L10.6%2013.4L7.75%2010.55L6.35%2011.95L10.6%2016.2ZM5%2021C4.45%2021%203.97917%2020.8042%203.5875%2020.4125C3.19583%2020.0208%203%2019.55%203%2019V5C3%204.45%203.19583%203.97917%203.5875%203.5875C3.97917%203.19583%204.45%203%205%203H19C19.55%203%2020.0208%203.19583%2020.4125%203.5875C20.8042%203.97917%2021%204.45%2021%205V19C21%2019.55%2020.8042%2020.0208%2020.4125%2020.4125C20.0208%2020.8042%2019.55%2021%2019%2021H5ZM5%2019H19V5H5V19Z%22%20fill%3D%22%23448aff%22%2F%3E%3C%2Fsvg%3E");   /* --ds-color-checkbox-normal-selected-icon-color */
}
.ds-checkbox__input:indeterminate ~ .ds-checkbox__box {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%2013H17V11H7V13ZM5%2021C4.45%2021%203.97917%2020.8042%203.5875%2020.4125C3.19583%2020.0208%203%2019.55%203%2019V5C3%204.45%203.19583%203.97917%203.5875%203.5875C3.97917%203.19583%204.45%203%205%203H19C19.55%203%2020.0208%203.19583%2020.4125%203.5875C20.8042%203.97917%2021%204.45%2021%205V19C21%2019.55%2020.8042%2020.0208%2020.4125%2020.4125C20.0208%2020.8042%2019.55%2021%2019%2021H5ZM5%2019H19V5H5V19Z%22%20fill%3D%22%23448aff%22%2F%3E%3C%2Fsvg%3E");   /* --ds-color-checkbox-normal-inderterminate-icon-color */
}
.ds-checkbox--error .ds-checkbox__box {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%2021C4.45%2021%203.97917%2020.8042%203.5875%2020.4125C3.19583%2020.0208%203%2019.55%203%2019V5C3%204.45%203.19583%203.97917%203.5875%203.5875C3.97917%203.19583%204.45%203%205%203H19C19.55%203%2020.0208%203.19583%2020.4125%203.5875C20.8042%203.97917%2021%204.45%2021%205V19C21%2019.55%2020.8042%2020.0208%2020.4125%2020.4125C20.0208%2020.8042%2019.55%2021%2019%2021H5ZM5%2019H19V5H5V19Z%22%20fill%3D%22%23ff5252%22%2F%3E%3C%2Fsvg%3E");   /* --ds-color-checkbox-error-icon-color */
}
.ds-checkbox--error .ds-checkbox__input:checked ~ .ds-checkbox__box {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10.6%2016.2L17.65%209.15L16.25%207.75L10.6%2013.4L7.75%2010.55L6.35%2011.95L10.6%2016.2ZM5%2021C4.45%2021%203.97917%2020.8042%203.5875%2020.4125C3.19583%2020.0208%203%2019.55%203%2019V5C3%204.45%203.19583%203.97917%203.5875%203.5875C3.97917%203.19583%204.45%203%205%203H19C19.55%203%2020.0208%203.19583%2020.4125%203.5875C20.8042%203.97917%2021%204.45%2021%205V19C21%2019.55%2020.8042%2020.0208%2020.4125%2020.4125C20.0208%2020.8042%2019.55%2021%2019%2021H5ZM5%2019H19V5H5V19Z%22%20fill%3D%22%23ff5252%22%2F%3E%3C%2Fsvg%3E");   /* --ds-color-checkbox-error-icon-color */
}
.ds-checkbox--error .ds-checkbox__input:indeterminate ~ .ds-checkbox__box {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%2013H17V11H7V13ZM5%2021C4.45%2021%203.97917%2020.8042%203.5875%2020.4125C3.19583%2020.0208%203%2019.55%203%2019V5C3%204.45%203.19583%203.97917%203.5875%203.5875C3.97917%203.19583%204.45%203%205%203H19C19.55%203%2020.0208%203.19583%2020.4125%203.5875C20.8042%203.97917%2021%204.45%2021%205V19C21%2019.55%2020.8042%2020.0208%2020.4125%2020.4125C20.0208%2020.8042%2019.55%2021%2019%2021H5ZM5%2019H19V5H5V19Z%22%20fill%3D%22%23ff5252%22%2F%3E%3C%2Fsvg%3E");   /* --ds-color-checkbox-error-icon-color */
}
.ds-checkbox--disabled .ds-checkbox__box {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5%2021C4.45%2021%203.97917%2020.8042%203.5875%2020.4125C3.19583%2020.0208%203%2019.55%203%2019V5C3%204.45%203.19583%203.97917%203.5875%203.5875C3.97917%203.19583%204.45%203%205%203H19C19.55%203%2020.0208%203.19583%2020.4125%203.5875C20.8042%203.97917%2021%204.45%2021%205V19C21%2019.55%2020.8042%2020.0208%2020.4125%2020.4125C20.0208%2020.8042%2019.55%2021%2019%2021H5ZM5%2019H19V5H5V19Z%22%20fill%3D%22%239e9e9e%22%2F%3E%3C%2Fsvg%3E");   /* --ds-color-checkbox-disable-deselected-icon-color */
}
.ds-checkbox--disabled .ds-checkbox__input:checked ~ .ds-checkbox__box {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10.6%2016.2L17.65%209.15L16.25%207.75L10.6%2013.4L7.75%2010.55L6.35%2011.95L10.6%2016.2ZM5%2021C4.45%2021%203.97917%2020.8042%203.5875%2020.4125C3.19583%2020.0208%203%2019.55%203%2019V5C3%204.45%203.19583%203.97917%203.5875%203.5875C3.97917%203.19583%204.45%203%205%203H19C19.55%203%2020.0208%203.19583%2020.4125%203.5875C20.8042%203.97917%2021%204.45%2021%205V19C21%2019.55%2020.8042%2020.0208%2020.4125%2020.4125C20.0208%2020.8042%2019.55%2021%2019%2021H5ZM5%2019H19V5H5V19Z%22%20fill%3D%22%239e9e9e%22%2F%3E%3C%2Fsvg%3E");   /* --ds-color-checkbox-disable-selected-icon-color */
}
.ds-checkbox--disabled .ds-checkbox__input:indeterminate ~ .ds-checkbox__box {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%2013H17V11H7V13ZM5%2021C4.45%2021%203.97917%2020.8042%203.5875%2020.4125C3.19583%2020.0208%203%2019.55%203%2019V5C3%204.45%203.19583%203.97917%203.5875%203.5875C3.97917%203.19583%204.45%203%205%203H19C19.55%203%2020.0208%203.19583%2020.4125%203.5875C20.8042%203.97917%2021%204.45%2021%205V19C21%2019.55%2020.8042%2020.0208%2020.4125%2020.4125C20.0208%2020.8042%2019.55%2021%2019%2021H5ZM5%2019H19V5H5V19Z%22%20fill%3D%22%239e9e9e%22%2F%3E%3C%2Fsvg%3E");   /* --ds-color-checkbox-disable-inderterminate-icon-color */
}
.ds-radio__box {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C10.6167%2022%209.31667%2021.7375%208.1%2021.2125C6.88333%2020.6875%205.825%2019.975%204.925%2019.075C4.025%2018.175%203.3125%2017.1167%202.7875%2015.9C2.2625%2014.6833%202%2013.3833%202%2012C2%2010.6167%202.2625%209.31667%202.7875%208.1C3.3125%206.88333%204.025%205.825%204.925%204.925C5.825%204.025%206.88333%203.3125%208.1%202.7875C9.31667%202.2625%2010.6167%202%2012%202C13.3833%202%2014.6833%202.2625%2015.9%202.7875C17.1167%203.3125%2018.175%204.025%2019.075%204.925C19.975%205.825%2020.6875%206.88333%2021.2125%208.1C21.7375%209.31667%2022%2010.6167%2022%2012C22%2013.3833%2021.7375%2014.6833%2021.2125%2015.9C20.6875%2017.1167%2019.975%2018.175%2019.075%2019.075C18.175%2019.975%2017.1167%2020.6875%2015.9%2021.2125C14.6833%2021.7375%2013.3833%2022%2012%2022ZM12%2020C14.2333%2020%2016.125%2019.225%2017.675%2017.675C19.225%2016.125%2020%2014.2333%2020%2012C20%209.76667%2019.225%207.875%2017.675%206.325C16.125%204.775%2014.2333%204%2012%204C9.76667%204%207.875%204.775%206.325%206.325C4.775%207.875%204%209.76667%204%2012C4%2014.2333%204.775%2016.125%206.325%2017.675C7.875%2019.225%209.76667%2020%2012%2020Z%22%20fill%3D%22%23616161%22%2F%3E%3C%2Fsvg%3E");   /* --ds-color-radio-button-normal-deselected-icon-color */
}
.ds-radio__input:checked + .ds-radio__box {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2017C13.3833%2017%2014.5625%2016.5125%2015.5375%2015.5375C16.5125%2014.5625%2017%2013.3833%2017%2012C17%2010.6167%2016.5125%209.4375%2015.5375%208.4625C14.5625%207.4875%2013.3833%207%2012%207C10.6167%207%209.4375%207.4875%208.4625%208.4625C7.4875%209.4375%207%2010.6167%207%2012C7%2013.3833%207.4875%2014.5625%208.4625%2015.5375C9.4375%2016.5125%2010.6167%2017%2012%2017ZM12%2022C10.6167%2022%209.31667%2021.7375%208.1%2021.2125C6.88333%2020.6875%205.825%2019.975%204.925%2019.075C4.025%2018.175%203.3125%2017.1167%202.7875%2015.9C2.2625%2014.6833%202%2013.3833%202%2012C2%2010.6167%202.2625%209.31667%202.7875%208.1C3.3125%206.88333%204.025%205.825%204.925%204.925C5.825%204.025%206.88333%203.3125%208.1%202.7875C9.31667%202.2625%2010.6167%202%2012%202C13.3833%202%2014.6833%202.2625%2015.9%202.7875C17.1167%203.3125%2018.175%204.025%2019.075%204.925C19.975%205.825%2020.6875%206.88333%2021.2125%208.1C21.7375%209.31667%2022%2010.6167%2022%2012C22%2013.3833%2021.7375%2014.6833%2021.2125%2015.9C20.6875%2017.1167%2019.975%2018.175%2019.075%2019.075C18.175%2019.975%2017.1167%2020.6875%2015.9%2021.2125C14.6833%2021.7375%2013.3833%2022%2012%2022ZM12%2020C14.2333%2020%2016.125%2019.225%2017.675%2017.675C19.225%2016.125%2020%2014.2333%2020%2012C20%209.76667%2019.225%207.875%2017.675%206.325C16.125%204.775%2014.2333%204%2012%204C9.76667%204%207.875%204.775%206.325%206.325C4.775%207.875%204%209.76667%204%2012C4%2014.2333%204.775%2016.125%206.325%2017.675C7.875%2019.225%209.76667%2020%2012%2020Z%22%20fill%3D%22%23448aff%22%2F%3E%3C%2Fsvg%3E");   /* --ds-color-radio-button-normal-selected-icon-color */
}
.ds-radio--error .ds-radio__box {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C10.6167%2022%209.31667%2021.7375%208.1%2021.2125C6.88333%2020.6875%205.825%2019.975%204.925%2019.075C4.025%2018.175%203.3125%2017.1167%202.7875%2015.9C2.2625%2014.6833%202%2013.3833%202%2012C2%2010.6167%202.2625%209.31667%202.7875%208.1C3.3125%206.88333%204.025%205.825%204.925%204.925C5.825%204.025%206.88333%203.3125%208.1%202.7875C9.31667%202.2625%2010.6167%202%2012%202C13.3833%202%2014.6833%202.2625%2015.9%202.7875C17.1167%203.3125%2018.175%204.025%2019.075%204.925C19.975%205.825%2020.6875%206.88333%2021.2125%208.1C21.7375%209.31667%2022%2010.6167%2022%2012C22%2013.3833%2021.7375%2014.6833%2021.2125%2015.9C20.6875%2017.1167%2019.975%2018.175%2019.075%2019.075C18.175%2019.975%2017.1167%2020.6875%2015.9%2021.2125C14.6833%2021.7375%2013.3833%2022%2012%2022ZM12%2020C14.2333%2020%2016.125%2019.225%2017.675%2017.675C19.225%2016.125%2020%2014.2333%2020%2012C20%209.76667%2019.225%207.875%2017.675%206.325C16.125%204.775%2014.2333%204%2012%204C9.76667%204%207.875%204.775%206.325%206.325C4.775%207.875%204%209.76667%204%2012C4%2014.2333%204.775%2016.125%206.325%2017.675C7.875%2019.225%209.76667%2020%2012%2020Z%22%20fill%3D%22%23ff5252%22%2F%3E%3C%2Fsvg%3E");   /* --ds-color-radio-button-error-icon-color */
}
.ds-radio--error .ds-radio__input:checked + .ds-radio__box {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2017C13.3833%2017%2014.5625%2016.5125%2015.5375%2015.5375C16.5125%2014.5625%2017%2013.3833%2017%2012C17%2010.6167%2016.5125%209.4375%2015.5375%208.4625C14.5625%207.4875%2013.3833%207%2012%207C10.6167%207%209.4375%207.4875%208.4625%208.4625C7.4875%209.4375%207%2010.6167%207%2012C7%2013.3833%207.4875%2014.5625%208.4625%2015.5375C9.4375%2016.5125%2010.6167%2017%2012%2017ZM12%2022C10.6167%2022%209.31667%2021.7375%208.1%2021.2125C6.88333%2020.6875%205.825%2019.975%204.925%2019.075C4.025%2018.175%203.3125%2017.1167%202.7875%2015.9C2.2625%2014.6833%202%2013.3833%202%2012C2%2010.6167%202.2625%209.31667%202.7875%208.1C3.3125%206.88333%204.025%205.825%204.925%204.925C5.825%204.025%206.88333%203.3125%208.1%202.7875C9.31667%202.2625%2010.6167%202%2012%202C13.3833%202%2014.6833%202.2625%2015.9%202.7875C17.1167%203.3125%2018.175%204.025%2019.075%204.925C19.975%205.825%2020.6875%206.88333%2021.2125%208.1C21.7375%209.31667%2022%2010.6167%2022%2012C22%2013.3833%2021.7375%2014.6833%2021.2125%2015.9C20.6875%2017.1167%2019.975%2018.175%2019.075%2019.075C18.175%2019.975%2017.1167%2020.6875%2015.9%2021.2125C14.6833%2021.7375%2013.3833%2022%2012%2022ZM12%2020C14.2333%2020%2016.125%2019.225%2017.675%2017.675C19.225%2016.125%2020%2014.2333%2020%2012C20%209.76667%2019.225%207.875%2017.675%206.325C16.125%204.775%2014.2333%204%2012%204C9.76667%204%207.875%204.775%206.325%206.325C4.775%207.875%204%209.76667%204%2012C4%2014.2333%204.775%2016.125%206.325%2017.675C7.875%2019.225%209.76667%2020%2012%2020Z%22%20fill%3D%22%23ff5252%22%2F%3E%3C%2Fsvg%3E");   /* --ds-color-radio-button-error-icon-color */
}
.ds-radio--disabled .ds-radio__box {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2022C10.6167%2022%209.31667%2021.7375%208.1%2021.2125C6.88333%2020.6875%205.825%2019.975%204.925%2019.075C4.025%2018.175%203.3125%2017.1167%202.7875%2015.9C2.2625%2014.6833%202%2013.3833%202%2012C2%2010.6167%202.2625%209.31667%202.7875%208.1C3.3125%206.88333%204.025%205.825%204.925%204.925C5.825%204.025%206.88333%203.3125%208.1%202.7875C9.31667%202.2625%2010.6167%202%2012%202C13.3833%202%2014.6833%202.2625%2015.9%202.7875C17.1167%203.3125%2018.175%204.025%2019.075%204.925C19.975%205.825%2020.6875%206.88333%2021.2125%208.1C21.7375%209.31667%2022%2010.6167%2022%2012C22%2013.3833%2021.7375%2014.6833%2021.2125%2015.9C20.6875%2017.1167%2019.975%2018.175%2019.075%2019.075C18.175%2019.975%2017.1167%2020.6875%2015.9%2021.2125C14.6833%2021.7375%2013.3833%2022%2012%2022ZM12%2020C14.2333%2020%2016.125%2019.225%2017.675%2017.675C19.225%2016.125%2020%2014.2333%2020%2012C20%209.76667%2019.225%207.875%2017.675%206.325C16.125%204.775%2014.2333%204%2012%204C9.76667%204%207.875%204.775%206.325%206.325C4.775%207.875%204%209.76667%204%2012C4%2014.2333%204.775%2016.125%206.325%2017.675C7.875%2019.225%209.76667%2020%2012%2020Z%22%20fill%3D%22%239e9e9e%22%2F%3E%3C%2Fsvg%3E");   /* --ds-color-radio-button-disable-deselected-icon-color */
}
.ds-radio--disabled .ds-radio__input:checked + .ds-radio__box {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12%2017C13.3833%2017%2014.5625%2016.5125%2015.5375%2015.5375C16.5125%2014.5625%2017%2013.3833%2017%2012C17%2010.6167%2016.5125%209.4375%2015.5375%208.4625C14.5625%207.4875%2013.3833%207%2012%207C10.6167%207%209.4375%207.4875%208.4625%208.4625C7.4875%209.4375%207%2010.6167%207%2012C7%2013.3833%207.4875%2014.5625%208.4625%2015.5375C9.4375%2016.5125%2010.6167%2017%2012%2017ZM12%2022C10.6167%2022%209.31667%2021.7375%208.1%2021.2125C6.88333%2020.6875%205.825%2019.975%204.925%2019.075C4.025%2018.175%203.3125%2017.1167%202.7875%2015.9C2.2625%2014.6833%202%2013.3833%202%2012C2%2010.6167%202.2625%209.31667%202.7875%208.1C3.3125%206.88333%204.025%205.825%204.925%204.925C5.825%204.025%206.88333%203.3125%208.1%202.7875C9.31667%202.2625%2010.6167%202%2012%202C13.3833%202%2014.6833%202.2625%2015.9%202.7875C17.1167%203.3125%2018.175%204.025%2019.075%204.925C19.975%205.825%2020.6875%206.88333%2021.2125%208.1C21.7375%209.31667%2022%2010.6167%2022%2012C22%2013.3833%2021.7375%2014.6833%2021.2125%2015.9C20.6875%2017.1167%2019.975%2018.175%2019.075%2019.075C18.175%2019.975%2017.1167%2020.6875%2015.9%2021.2125C14.6833%2021.7375%2013.3833%2022%2012%2022ZM12%2020C14.2333%2020%2016.125%2019.225%2017.675%2017.675C19.225%2016.125%2020%2014.2333%2020%2012C20%209.76667%2019.225%207.875%2017.675%206.325C16.125%204.775%2014.2333%204%2012%204C9.76667%204%207.875%204.775%206.325%206.325C4.775%207.875%204%209.76667%204%2012C4%2014.2333%204.775%2016.125%206.325%2017.675C7.875%2019.225%209.76667%2020%2012%2020Z%22%20fill%3D%22%239e9e9e%22%2F%3E%3C%2Fsvg%3E");   /* --ds-color-radio-button-disable-selected-icon-color */
}

/* ============================================================
   iiko DS — Badge (счётчик / точка)
   Источник: Figma, страница «🔵Готово 🧾 → Badge»
   Варианты: Style Accent/Positive/Warning/Negative
             Type Counter (19×18, паддинг 1px 6px, скругление 9999px) / Point (8×8, скругление 9999px)
   Все значения — только токены из tokens.css
   ============================================================ */

.ds-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-size: var(--ds-typography-font-size-3x);      /* 12px */
  font-weight: var(--ds-typography-font-weight-medium); /* 500 */
  line-height: var(--ds-typography-caption-line-height-l); /* 16px */
  color: var(--ds-color-text-inversive);             /* #FFFFFF */
  vertical-align: middle;
}

/* ── Counter: пилюля 19×18 ──────────────────────────────── */

.ds-badge--counter {
  height: 18px;
  min-width: 19px;
  padding: var(--ds-size-0-25x) var(--ds-space-1-5x); /* 1px 6px */
  border-radius: var(--ds-radius-circular);          /* 9999px */
}

/* ── Point: точка 8×8 ───────────────────────────────────── */

.ds-badge--point {
  width: 8px;
  height: 8px;
  border-radius: var(--ds-radius-circular);          /* 9999px */
}

/* ── Стили ──────────────────────────────────────────────── */

.ds-badge--accent   { background: var(--ds-color-badge-accent-background); }   /* #448AFF */
.ds-badge--positive { background: var(--ds-color-badge-positive-background); } /* #14B456 */
.ds-badge--warning  { background: var(--ds-color-badge-warning-background); }  /* #FFAB40 */
.ds-badge--negative { background: var(--ds-color-badge-negative-background); } /* #FF5252 */

/* ── Матрица вариантов Badge (страница badge.html) ────────────────
   У Badge нет размеров и состояний (только Style × Type), поэтому:
   подписи типов без сдвига под шапку размера, ряд — 2 колонки.
   Скоуплено под .page-badge, чтобы не протекать на другие страницы
   (у Button/Checkbox 3 состояния → ряд должен быть 3-колоночным). */

.page-badge #matrix-root .matrix-types { padding-top: 16px; }
.page-badge #matrix-root .matrix-row { grid-template-columns: repeat(2, 1fr); }

/* ============================================================
   iiko DS — Tabs, Divider, Info panel (выверено по ДС и макету)
   Автогенерация для этих компонентов давала артефакты
   (рамка у .ds-tabs, белый фон у .ds-divider), поэтому правила
   заданы точно: цвета/размеры — только токены из tokens.css
   ============================================================ */

/* ── Tabs (подчёркнутые: актив = акцент + 2px) ────────────── */

.ds-tabs {
  display: flex;
  align-items: stretch;
  gap: var(--ds-space-0);
  border-bottom: 1px solid var(--ds-color-divider-solid-default-color); /* #E0E0E0 */
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

.ds-tab {
  display: inline-flex;
  align-items: center;
  gap: var(--ds-space-2x);                                /* 8px */
  box-sizing: border-box;
  height: 32px;                                           /* ДС Lvl=1: 32px */
  padding: var(--ds-space-1x) var(--ds-space-6x);          /* ДС Lvl=1: 4px 24px */
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  background: var(--ds-color-tab-innactive-default-background);
  color: var(--ds-color-tab-innactive-text-color);        /* #333333 */
  font-family: inherit;
  font-size: var(--ds-typography-body-font-size-m);       /* ДС Lvl=1: 16px */
  font-weight: var(--ds-typography-font-weight-medium);   /* ДС Lvl=1: 500 */
  letter-spacing: var(--ds-typography-letter-spacing-s);
  line-height: var(--ds-typography-body-line-height-m);   /* ДС Lvl=1: 24px */
  white-space: nowrap;
  cursor: pointer;
  transition: background-color .15s ease, color .15s ease, border-color .15s ease;
}

.ds-tab:hover  { background: var(--ds-color-tab-innactive-hover-background); }  /* #F5F5F5 */
.ds-tab:active { background: var(--ds-color-tab-innactive-press-background); }  /* #E0E0E0 */

.ds-tab__icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-tab-innactive-icon-color);        /* #616161 */
}

.ds-tab--active {
  color: var(--ds-color-tab-active-text-color);           /* #448AFF */
  border-bottom-color: var(--ds-color-tab-active-divider);/* #448AFF */
}
.ds-tab--active .ds-tab__icon { color: var(--ds-color-tab-active-icon-color); }
.ds-tab--active:hover  { background: var(--ds-color-tab-active-hover-background); }
.ds-tab--active:active { background: var(--ds-color-tab-active-press-background); }

.ds-tab--disabled,
.ds-tab:disabled {
  color: var(--ds-color-tab-disable-text-color);          /* #9E9E9E */
  pointer-events: none;
}
.ds-tab--disabled .ds-tab__icon { color: var(--ds-color-tab-disable-icon-color); }

/* Уровень 2 — ДС: h28, padding 4/12, шрифт 14px/400, lh 20 (отличается от Lvl=1!) */
.ds-tabs--lvl2 .ds-tab {
  height: 28px;
  padding: var(--ds-space-1x) var(--ds-space-3x);
  font-size: var(--ds-typography-body-font-size-s);       /* 14px */
  font-weight: var(--ds-typography-font-weight-regular);  /* 400 */
  line-height: var(--ds-typography-body-line-height-s);   /* 20px */
}

/* Счётчик в табе (Badge внутри) */
.ds-tab__counter {
  color: var(--ds-color-tab-innactive-counter-text-color);
  font-size: var(--ds-typography-font-size-3x);
}
.ds-tab--active .ds-tab__counter { color: var(--ds-color-tab-active-counter-text-color); }

/* ── Divider ──────────────────────────────────────────────── */

/* ── Divider (Figma 58320:441 — 16 вариантов; 53556:7964 — Type=Solid) ──
   Size=M → 1px, Size=L → 2px
   Solid:  Default/Lite #E0E0E0 · Hover/Selected #448AFF · Disable #EBEBEB
   Dashed: линия 1px dash 4/4, те же цвета по состояниям              */

.ds-divider {
  height: 1px;                                              /* Size=M */
  border: none;
  margin: 0;
  background: var(--ds-color-divider-solid-default-color);  /* #E0E0E0 */
}
.ds-divider--m            { height: 1px; }
.ds-divider--l            { height: 2px; }                  /* Size=L */
.ds-divider--lite         { background: var(--ds-color-divider-solid-lite-color); }
.ds-divider:hover         { background: var(--ds-color-divider-solid-hover-color); }     /* #448AFF */
.ds-divider--selected     { background: var(--ds-color-divider-solid-selected-color); }  /* #448AFF */
.ds-divider--disable      { background: var(--ds-color-divider-solid-disable-color); }   /* #EBEBEB */
.ds-divider--dashed {
  height: 0;
  background: none;
  border-top: 1px dashed var(--ds-color-divider-dashed-default-color);
}
.ds-divider--dashed.ds-divider--l        { border-top-width: 2px; }
.ds-divider--dashed.ds-divider--selected { border-top-color: var(--ds-color-divider-dashed-selected-color); }
.ds-divider--dashed.ds-divider--disable  { border-top-color: var(--ds-color-divider-dashed-disable-color); }

/* совместимость: раньше класс назывался .ds-divider-line */
.ds-divider-line {
  height: 1px;
  border: none;
  margin: 0;
  background: var(--ds-color-divider-solid-default-color);  /* #E0E0E0 */
}
.ds-divider-line--lite     { background: var(--ds-color-divider-solid-lite-color); }
.ds-divider-line--selected { background: var(--ds-color-divider-solid-selected-color); } /* #448AFF */
.ds-divider-line--disable  { background: var(--ds-color-divider-solid-disable-color); }
.ds-divider-line--dashed {
  height: 0;
  background: none;
  border-top: 1px dashed var(--ds-color-divider-dashed-default-color);
}

/* ── (было .ds-info-panel — удалено: в ДС для пояснений
       используется компонент Banners, см. .ds-banner ниже) ── */

/* ── Banners (компонент ДС для информационных сообщений) ───
   Style: Accent / Positive / Warning / Negative / Neutral
   ДС: padding 12px 16px, radius 12px, gap 8px, иконка 20px       */

.ds-banner {
  display: flex;
  gap: var(--ds-space-2x);                                /* 8px */
  box-sizing: border-box;
  padding: var(--ds-space-3x) var(--ds-space-4x);          /* 12px 16px */
  border-radius: var(--ds-radius-3x);                     /* 12px */
  background: var(--ds-color-banners-accent-background);  /* #F0F5FF */
  color: var(--ds-color-banners-text-color);              /* #333333 */
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-size: var(--ds-typography-body-font-size-s);       /* 14px */
  line-height: var(--ds-typography-body-line-height-s);   /* 20px */
  letter-spacing: var(--ds-typography-letter-spacing-s);
}

.ds-banner--horizontal { flex-direction: row; align-items: center; }
.ds-banner--vertical   { flex-direction: column; }

.ds-banner--accent   { background: var(--ds-color-banners-accent-background); }
.ds-banner--positive { background: var(--ds-color-banners-positive-background); }
.ds-banner--warning  { background: var(--ds-color-banners-warning-background); }
.ds-banner--negative { background: var(--ds-color-banners-negative-background); }
.ds-banner--neutral  {
  background: var(--ds-color-banners-neutral-background);
  border: 1px solid var(--ds-color-banners-border-color);
}

.ds-banner__icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-banners-accent-icon-color);       /* #448AFF */
}
.ds-banner--positive .ds-banner__icon { color: var(--ds-color-banners-positive-icon-color); }
.ds-banner--warning  .ds-banner__icon { color: var(--ds-color-banners-warning-icon-color); }
.ds-banner--negative .ds-banner__icon { color: var(--ds-color-banners-negative-icon-color); }
.ds-banner--neutral  .ds-banner__icon { color: var(--ds-color-banners-neutral-icon-color); }

.ds-banner__row {
  display: flex;
  align-items: center;
  gap: var(--ds-space-2x);
  width: 100%;
}

.ds-banner__text { flex: 1; }

.ds-banner__buttons {
  display: flex;
  gap: var(--ds-space-2x);
}

/* ── Иконки в инпутах: SVG из файла иконок ДС ─────────────── */

.ds-input__icon svg { width: 20px; height: 20px; display: block; }
.ds-input__icon svg path { fill: currentColor; }

/* контрол числа (стрелки вверх/вниз, как Control number button в ДС) */
.ds-input__stepper {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  color: var(--ds-color-icon-primary);                     /* #616161 */
}
.ds-input__stepper svg { width: 20px; height: 12px; display: block; }
.ds-input__stepper svg path { fill: currentColor; }
.ds-input__stepper button {
  border: none; background: none; padding: 0; margin: 0;
  display: flex; cursor: pointer; color: inherit;
}

/* ── Подпись группы полей (label над полем) ───────────────── */

.ds-field-label {
  display: block;
  color: var(--ds-color-text-primary);                    /* #333333 */
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-size: var(--ds-typography-font-size-3-5x);         /* 14px */
  font-weight: var(--ds-typography-font-weight-medium);   /* 500 */
  letter-spacing: var(--ds-typography-letter-spacing-s);
  line-height: 20px;
}

/* ============================================================
   iiko DS — Card view (Filled / Outlined / Shadow)
   Источник: Figma, страница «🟡Card_DS», COMPONENT_SET «Card view»
   Обновлено: Card header / Card content (SLOT) / Card footer
   Размер: 501×248 · header 108 · content 88 · footer 52
   Разметка — ровно по свежему дереву Figma.
   ============================================================ */

.ds-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: var(--ds-radius-2x);                 /* 8px */
  background: var(--ds-color-surface-default);        /* #FFFFFF */
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* Type=Filled — без рамки и тени */
.ds-card--filled { }

/* Type=Outlined — рамка 1px #E0E0E0 */
.ds-card--outlined {
  border: 1px solid var(--ds-color-stroke-default);   /* #E0E0E0 */
}

/* Type=Shadow — эффект-стиль ДС «Shadows/01 dp Sl» (Card/Shadows) */
.ds-card--shadow {
  box-shadow: var(--ds-shadow-shadows-01-dp-sl);
}

/* Type=Custom — карточка только с контентом (SLOT, 500×88, pad 16) */
.ds-card--custom {
  padding: 16px;
}

/* ── Card header (16px сверху/по бокам, gap 8) ────────────────
   РЕАЛЬНОЕ значение паддинга = 16px (токен Space/6x устарел=24, не берём). */

.ds-card__header {
  display: flex;
  flex-direction: column;
  gap: var(--ds-space-2x);                            /* 8px */
  padding: 16px 16px 4px;                            /* сверху/бока 16, низ 4 (текущее дерево) */
}

.ds-card__label-up,
.ds-card__label-down {
  color: var(--ds-color-text-secondary);              /* #616161 */
  font-size: var(--ds-typography-body-font-size-m);   /* 16px (Body M) */
  font-weight: var(--ds-typography-font-weight-regular); /* 400 */
  line-height: var(--ds-typography-body-line-height-m); /* 24px */
  letter-spacing: var(--ds-typography-letter-spacing-none);
}

.ds-card__title {
  margin: 0;
  color: var(--ds-color-text-primary);                /* #333333 */
  font-size: var(--ds-typography-header-font-size-s); /* 20px */
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: var(--ds-typography-header-line-height-s); /* 28px */
  letter-spacing: var(--ds-typography-letter-spacing-none);
}

/* ── Card content (SLOT, паддинг 16/16/16) ─────────────────── */

.ds-card__content {
  display: flex;
  flex-direction: column;
  padding: 16px;                                      /* 16/16/16 (было 8/24) */
}

/* ── Card footer — Divider + Action (Action pad 16 по бокам/снизу) ── */

.ds-card__footer {
  display: flex;
  flex-direction: column;
}
.ds-card__divider {
  height: 1px;
  background: var(--ds-color-stroke-default);         /* #E0E0E0 */
  border: none;
}
.ds-card__footer__action {
  display: flex;
  align-items: center;
  gap: var(--ds-space-2x);                            /* 8px */
  padding: 4px 16px 16px;                             /* сверху 4, бока/низ 16 */
}
.ds-card__footer--right .ds-card__footer__action { justify-content: flex-end; }

/* ============================================================
   iiko DS — Expansion panel + Expansion content
   Источник: Figma, страница «Expansion panel»
   Variant=Default : border 1px #E0E0E0, fill #F8F9FC
   Variant=Info    : border 1px #448AFF ПУНКТИР [2,2], fill #F5F9FF
   Шапка панели: h44, pad 12/16, r12, gap 8, иконки 20px
   Состояния: Default / Hover / Press / Disable
   Collaps/Expand: Off / On (стрелка keyboard_arrow_down поворачивается)
   ============================================================ */

.ds-expansion {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: var(--ds-radius-3x);                    /* 12px */
  border: 1px solid var(--ds-color-stroke-default);      /* Default: #E0E0E0 — рамка вокруг шапки И контента */
  background: var(--ds-color-surface-default);           /* #FFFFFF */
  overflow: hidden;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* Variant=Info — пунктирная акцентная рамка вокруг всей панели */
.ds-expansion--info {
  border: 1px dashed var(--ds-color-stroke-accent);      /* #448AFF, пунктир */
  background: var(--ds-palette-accent-10);               /* #F5F9FF */
}

/* ── Шапка панели (44px, рамки нет — она у контейнера) ────── */

.ds-expansion__header {
  display: flex;
  align-items: center;
  gap: var(--ds-space-2x);                               /* 8px */
  box-sizing: border-box;
  min-height: 44px;
  padding: var(--ds-space-3x) var(--ds-space-4x);         /* 12px 16px */
  background: transparent;
  cursor: pointer;
  transition: background-color .15s ease;
}

.ds-expansion__header:hover  { background: var(--ds-color-shapes-hover); }   /* #F5F5F5 */
.ds-expansion__header:active { background: var(--ds-color-shapes-press); }   /* #E0E0E0 */

.ds-expansion--disabled {
  border-color: var(--ds-color-stroke-disable);          /* #EBEBEB */
  background: var(--ds-color-surface-disable);           /* #F5F5F5 */
}
.ds-expansion--disabled .ds-expansion__header {
  color: var(--ds-color-text-disable);
  pointer-events: none;
}

/* ── Элементы шапки ───────────────────────────────────────── */

.ds-expansion__icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-icon-primary);                   /* #616161 */
}
.ds-expansion--info .ds-expansion__icon { color: var(--ds-color-icon-accent); }  /* #448AFF */

.ds-expansion__arrow {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ds-color-icon-primary);
  transition: transform .15s ease;
}
.ds-expansion--open .ds-expansion__arrow { transform: rotate(180deg); }

.ds-expansion__title {
  flex: 1;
  color: var(--ds-color-text-primary);                   /* #333333 */
  font-size: var(--ds-typography-body-font-size-s);      /* 14px */
  font-weight: var(--ds-typography-font-weight-medium);  /* 500 */
  line-height: var(--ds-typography-body-line-height-s);  /* 20px */
  letter-spacing: var(--ds-typography-letter-spacing-s);
}

/* группа иконок справа (Icon group из ДС) */
.ds-expansion__actions {
  display: flex;
  align-items: center;
  gap: var(--ds-space-2x);
  flex-shrink: 0;
}

/* ── Expansion content (Padding off/on = True → pad 16) ───── */

.ds-expansion__content {
  display: flex;
  flex-direction: column;
  padding: var(--ds-space-4x);                           /* 16px */
  color: var(--ds-color-text-primary);
  font-size: var(--ds-typography-body-font-size-s);      /* 14px */
  line-height: var(--ds-typography-body-line-height-s);  /* 20px */
  letter-spacing: var(--ds-typography-letter-spacing-s);
}
.ds-expansion__content--no-padding { padding: 0; }

/* иконки из файла иконок ДС приходят с fill из ДС — красим токеном компонента */
.ds-expansion__icon svg path,
.ds-expansion__arrow svg path { fill: currentColor; }
.ds-expansion:not(.ds-expansion--open) .ds-expansion__content { display: none; }

/* ============================================================
   iiko DS — Stepper (Step + Stepper line)
   Источник: Figma, страница «Stepper»
   Step: h24 (Background=Off) / h32 r8 fill #FAFAFA (Background=On)
         gap 8, Element left 24×24, текст 14/400
   Selected: текст #448AFF, иконка #448AFF
   ============================================================ */

.ds-stepper {
  display: flex;
  align-items: center;
  gap: var(--ds-space-2x);                                  /* 8px */
  background: var(--ds-color-stepper-background);
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* ── Шаг ──────────────────────────────────────────────────── */

.ds-step {
  display: inline-flex;
  align-items: center;
  gap: var(--ds-space-2x);                                  /* 8px */
  box-sizing: border-box;
  min-height: 24px;
  border: none;
  background: none;
  padding: 0;
  color: var(--ds-color-stepper-default-text-color);        /* #333333 */
  font-family: inherit;
  font-size: var(--ds-typography-body-font-size-s);         /* 14px */
  font-weight: var(--ds-typography-font-weight-regular);    /* 400 */
  line-height: var(--ds-typography-body-line-height-s);     /* 20px */
  letter-spacing: var(--ds-typography-letter-spacing-s);
  white-space: nowrap;
  cursor: pointer;
}

/* Background=On — подложка */
.ds-step--bg {
  min-height: 32px;
  padding: var(--ds-space-1x) var(--ds-space-2x);
  border-radius: var(--ds-radius-2x);                       /* 8px */
  background: var(--ds-color-stepper-default-background);   /* #FAFAFA */
}

.ds-step:hover {
  color: var(--ds-color-stepper-hover-text-color);          /* #448AFF */
}
.ds-step--bg:hover { background: var(--ds-color-stepper-hover-background); }

.ds-step--selected {
  color: var(--ds-color-stepper-selected-text-color);       /* #448AFF */
}
.ds-step--bg.ds-step--selected {
  background: var(--ds-color-stepper-selected-background);  /* #F5F9FF */
  border: 1px solid var(--ds-color-stepper-selected-border-color);
}

.ds-step--disabled,
.ds-step:disabled {
  color: var(--ds-color-stepper-disable-text-color);        /* #9E9E9E */
  pointer-events: none;
}

.ds-step--error { color: var(--ds-color-stepper-error-text-color); }

/* ── Номер / иконка шага (Element left 24×24) ─────────────── */

.ds-step__num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: var(--ds-radius-circular);                 /* 9999px */
  color: var(--ds-color-stepper-default-icon-color);        /* #616161 */
  font-size: var(--ds-typography-body-font-size-s);         /* 14px */
  line-height: 20px;
}

/* выбранный шаг — залитый акцентный круг с белой цифрой */
.ds-step--selected .ds-step__num {
  background: var(--ds-color-brand-accent-default);         /* #448AFF */
  color: var(--ds-color-text-inversive);                    /* #FFFFFF */
}
.ds-step--disabled .ds-step__num { color: var(--ds-color-stepper-disable-icon-color); }
.ds-step--error .ds-step__num    { color: var(--ds-color-stepper-error-icon-color); }

.ds-step__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: var(--ds-color-stepper-icon-color);
}
.ds-step__icon svg { width: 24px; height: 24px; display: block; }
.ds-step__icon svg path { fill: currentColor; }

/* ── Разделитель между шагами (Stepper divider) ───────────── */

.ds-stepper__divider {
  flex-shrink: 0;
  width: 8px;
  height: 1px;
  background: var(--ds-color-stepper-divider-color);         /* #616161 */
}

/* ============================================================
   Stepper button (Figma 55419:7330) — счётчик шагов + кнопки навигации
   12 вариантов: Type=Filled|Outlined × Position=First|Middle|Last
                 × Content=Text|Icon      (высота ряда 36, gap 16)
   Состав из Figma (что писать в разметке):
     Position=First  → одна кнопка «Далее» (иконка справа keyboard_arrow_right)
     Position=Middle → Button group (gap 8): «Назад» (keyboard_arrow_left слева)
                       + «Далее» (keyboard_arrow_right справа)
     Position=Last   → одна кнопка «Назад» (keyboard_arrow_left слева)
     Content=Text    → .ds-btn.ds-btn--m ; Content=Icon → .ds-button-icon (36×36)
     Type=Filled     → .ds-btn--accent.ds-btn--filled  (#448AFF + тень)
     Type=Outlined   → .ds-btn--accent.ds-btn--outlined (рамка 1px #448AFF)
   ============================================================ */

.ds-stepper-button {
  display: flex;
  align-items: center;
  gap: var(--ds-space-4x);                                  /* 16px */
  min-height: 36px;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* «N из M» — TEXT 14/500 lh20 #333333 */
.ds-stepper-button__counter {
  flex-shrink: 0;
  color: var(--ds-color-text-primary);                      /* #333333 */
  font-size: var(--ds-typography-body-font-size-s);         /* 14px */
  font-weight: var(--ds-typography-font-weight-medium);     /* 500 */
  line-height: var(--ds-typography-body-line-height-s);     /* 20px */
  white-space: nowrap;
}

/* Button group / Button icon group внутри — gap 8 */
.ds-stepper-button__group {
  display: flex;
  align-items: center;
  gap: var(--ds-space-2x);                                  /* 8px */
}

/* ============================================================
   iiko DS — Slide toggle
   Источник: Figma, страница «Slide toggle»
   Трек 34×20 r12; кнопка (Oval) 16×16 r9999 белая
   Off: фон #9E9E9E (hover #757575) · On: #448AFF (hover #3969D5)
   Disable: #E0E0E0, текст #9E9E9E
   Title 14/400 #333333 · Support down 12px #616161
   ============================================================ */

.ds-slide-toggle {
  display: inline-flex;
  flex-direction: column;
  gap: var(--ds-space-1x);                                    /* 4px */
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* строка: переключатель + заголовок + иконка */
.ds-slide-toggle__row {
  display: flex;
  align-items: center;
  gap: var(--ds-space-2x);                                    /* 8px */
  cursor: pointer;
}

/* нативный чекбокс скрыт */
.ds-slide-toggle__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

/* трек */
.ds-slide-toggle__track {
  position: relative;
  flex-shrink: 0;
  width: 34px;
  height: 20px;
  border-radius: var(--ds-radius-3x);                         /* 12px */
  background: var(--ds-color-slide-toggle-deselected-default-background); /* #9E9E9E */
  transition: background-color .15s ease;
}

/* кнопка-кружок */
.ds-slide-toggle__track::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: var(--ds-radius-circular);                   /* 9999px */
  background: var(--ds-color-slide-toggle-knob-color);        /* #FFFFFF */
  transition: transform .15s ease;
}

.ds-slide-toggle__row:hover .ds-slide-toggle__track {
  background: var(--ds-color-slide-toggle-deselected-hover-background);   /* #757575 */
}

/* включён */
.ds-slide-toggle__input:checked + .ds-slide-toggle__track {
  background: var(--ds-color-slide-toggle-selected-default-background);   /* #448AFF */
}
.ds-slide-toggle__input:checked + .ds-slide-toggle__track::after {
  transform: translateX(14px);
}
.ds-slide-toggle__row:hover .ds-slide-toggle__input:checked + .ds-slide-toggle__track {
  background: var(--ds-color-slide-toggle-selected-hover-background);     /* #3969D5 */
}

/* disabled */
.ds-slide-toggle__input:disabled + .ds-slide-toggle__track {
  background: var(--ds-color-slide-toggle-deselected-disable-background); /* #E0E0E0 */
}
.ds-slide-toggle__input:checked:disabled + .ds-slide-toggle__track {
  background: var(--ds-color-slide-toggle-selected-disable-background);
}
.ds-slide-toggle--disabled { pointer-events: none; }
.ds-slide-toggle--disabled .ds-slide-toggle__title {
  color: var(--ds-color-slide-toggle-deselected-disable-text-color);      /* #9E9E9E */
}

/* тексты */
.ds-slide-toggle__title {
  color: var(--ds-color-slide-toggle-text-color);             /* #333333 */
  font-size: var(--ds-typography-body-font-size-s);           /* 14px */
  font-weight: var(--ds-typography-font-weight-regular);      /* 400 */
  line-height: var(--ds-typography-body-line-height-s);       /* 20px */
  letter-spacing: var(--ds-typography-letter-spacing-s);
}

.ds-slide-toggle__support {
  color: var(--ds-color-slide-toggle-text-support-color);      /* #616161 */
  font-size: var(--ds-typography-caption-font-size-l);         /* 12px */
  line-height: var(--ds-typography-caption-line-height-l);     /* 16px */
  letter-spacing: var(--ds-typography-letter-spacing-s);
  padding-left: 42px;                                          /* под текст: трек 34 + gap 8 */
}
.ds-slide-toggle--error .ds-slide-toggle__support {
  color: var(--ds-color-slide-toggle-text-error-color);        /* #FF5252 */
}

/* иконка-подсказка в строке */
.ds-slide-toggle__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  color: var(--ds-color-icon-primary);                         /* #616161 */
}
.ds-slide-toggle__icon svg { width: 20px; height: 20px; display: block; }
.ds-slide-toggle__icon svg path { fill: currentColor; }

```



### Как собирать прототип (инструкция для человека и ИИ)

1. Возьмите за основу каркас ниже (или свой HTML). **CSS не нужно скачивать отдельно** — он весь в этом файле, раздел «Полные CSS-стили всех компонентов»: скопируйте его в `<style>` прототипа (или сохраните как `components.css` и подключите через `<link>`).
2. Соберите экран из компонентов этой спецификации: скопируйте разметку нужного компонента, поменяйте текст и иконки, **не меняя классы `ds-*`**.
3. Цвета, размеры, радиусы, отступы и шрифты задавайте **только токенами** `var(--ds-*)` — без хардкода.
4. Компонентные цвета брать из `--ds-color-<компонент>-*` (Button/Input/Checkbox/Radio/Badge), не из общих `--ds-color-text-*`/`--ds-color-icon-*`.
5. Состояния: hover/press — нативные, disabled — атрибут `disabled`, error — класс `--error`, focus — нативный фокус.
6. Проверьте результат по чек-листу.


### Каркас прототипа

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Мой прототип</title>
  <style>
    /* 1. CSS из раздела «Полные CSS-стили всех компонентов» этого файла */
  </style>
</head>
<body>
  <div class="screen">
    <!-- СЮДА вставляйте компоненты из этой спецификации -->
    <button class="ds-btn ds-btn--m ds-btn--accent ds-btn--filled">
      <span class="ds-btn__label">Сохранить</span>
    </button>
  </div>
</body>
</html>
```


### Чек-лист соответствия ДС

- [ ] Все цвета, размеры, радиусы — только `var(--ds-*)`, без хардкода
- [ ] Кнопки: класс `ds-btn` + размер (`--xs/--s/--m`) + стиль (`--accent/--neutral/--positive/--negative/--warning`) + тип (`--filled/--outlined/--text`)
- [ ] Одна accent-кнопка на область, negative — экономно
- [ ] Иконки — SVG 20×20 внутри `.ds-btn__icon` / `.ds-input__icon`, цвет через `currentColor`
- [ ] Input: размер из набора M/S/XS, лейбл только у M
- [ ] Checkbox/Radio: иконки-глифы 20×20, цвета из компонентных токенов
- [ ] Badge: Counter или Point, стиль из 4 вариантов
- [ ] Шрифт Roboto 400/500, размеры из токенов типографики

