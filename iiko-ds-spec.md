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

**Типичные ошибки, за которые вёрстку возвращают:** свои классы вместо классов ДС; `style="..."` в разметке;
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


## Компоненты


### Каталог компонентов Figma (все 121)

Полный набор компонентов дизайн-системы (сканирование всех страниц файла Figma CJBjyS1OnRXqiOqaXYVCVd, включая неопубликованные и вложенные): свойства, все значения вариантов и токены компонента.

**Всего компонентов: 121**

#### Arrow `[55939:14119]` — 13 вариантов
- **Content** (VARIANT): arrow_back, arrow_downward_alt, arrow_drop_down, arrow_drop_up, arrow_forward, arrow_left, arrow_right, arrow_upward_alt, keyboard_arrow_down, keyboard_arrow_left, keyboard_arrow_right, keyboard_arrow_up, unfold_less
- Размеры и параметры:
    - высота: `var(--ds-size-6x)` (фикс.)
    - ширина: `var(--ds-size-6x)` (фикс.)
    - фон: `var(--ds-color-expansion-panel-block-collaps-content-background)`
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
```
</details>

#### Arrow list `[55939:13307]` — 13 вариантов
- **Content** (VARIANT): arrow_back, arrow_downward_alt, arrow_drop_down, arrow_drop_up, arrow_forward, arrow_left, arrow_right, arrow_upward_alt, keyboard_arrow_down, keyboard_arrow_left, keyboard_arrow_right, keyboard_arrow_up, unfold_less
- Размеры и параметры:
    - высота: `var(--ds-size-6x)` (фикс.)
    - ширина: `var(--ds-size-6x)` (фикс.)
    - фон: `var(--ds-color-expansion-panel-block-collaps-content-background)`
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
```
</details>

#### Arrow menu `[56090:1628]` — 13 вариантов
- **Content** (VARIANT): arrow_back, arrow_downward_alt, arrow_drop_down, arrow_drop_up, arrow_forward, arrow_left, arrow_right, arrow_upward_alt, keyboard_arrow_down, keyboard_arrow_left, keyboard_arrow_right, keyboard_arrow_up, unfold_less
- Размеры и параметры:
    - высота: `var(--ds-size-6x)` (фикс.)
    - ширина: `var(--ds-size-6x)` (фикс.)
    - фон: `var(--ds-color-expansion-panel-block-collaps-content-background)`
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
```
</details>

#### Arrow select `[57735:17989]` — 13 вариантов
- **Content** (VARIANT): arrow_back, arrow_downward_alt, arrow_drop_down, arrow_drop_up, arrow_forward, arrow_left, arrow_right, arrow_upward_alt, keyboard_arrow_down, keyboard_arrow_left, keyboard_arrow_right, keyboard_arrow_up, unfold_less
- Размеры и параметры:
    - высота: `var(--ds-size-6x)` (фикс.)
    - ширина: `var(--ds-size-6x)` (фикс.)
    - фон: `var(--ds-color-expansion-panel-block-collaps-content-background)`
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
```
</details>

#### Autocomplete form `[58107:8230]` — 10 вариантов
- **Variant** (VARIANT): Empty, Populated
- **State** (VARIANT): Default, Disable, Error, Focus, Focus+Value, Hover
- Размеры и параметры:
    - высота: минимум `48px`, растёт по контенту
    - ширина: по контенту (hug)
    - фон: `var(--ds-color-expansion-panel-block-collaps-content-background)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--empty`: color `var(--ds-color-chips-input-default-action-text-color)`, color `var(--ds-color-chips-input-disable-action-text-color)`
    - `--populated`: color `var(--ds-color-chips-input-default-action-text-color)`, color `var(--ds-color-chips-input-disable-action-text-color)`
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
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-autocomplete-form__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-form-field-gap-input-support);
}
.ds-autocomplete-form__input-frame {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame);
  padding: var(--ds-form-field-m-size-pad-input-left) var(--ds-form-field-m-size-pad-input-right) var(--ds-form-field-m-size-pad-input-top) var(--ds-form-field-m-size-pad-input-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
}
.ds-autocomplete-form__support {
  display: flex;
  flex-direction: row;
}
.ds-autocomplete-form--empty {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-autocomplete-form--populated {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-autocomplete-form--empty:hover {
  background: var(--ds-color-chips-input-disable-background);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-autocomplete-form--populated:hover {
  background: var(--ds-color-chips-input-disable-background);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-autocomplete-form--populated:focus-visible {
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-autocomplete-form--empty:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-autocomplete-form--empty.ds-autocomplete-form--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-autocomplete-form--populated:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-autocomplete-form--populated.ds-autocomplete-form--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-autocomplete-form--disabled {
  pointer-events: none;
}
```
</details>

#### Backdrop `[53623:806]` — 1 вариантов
- **Type** (VARIANT): Default
- CSS не требуется: собственного оформления нет — компонент задаёт только структуру/поведение, вид приходит от вложенных элементов.

#### Badge `[54428:187]` — 8 вариантов
- **Style** (VARIANT): Accent, Negative, Positive, Warning
- **Type** (VARIANT): Counter, Point
- CSS: выверено вручную, см. `components/badge.css` в разделе «Полные CSS-стили всех компонентов»

#### Banners `[54367:2566]` — 12 вариантов
- **Style** (VARIANT): Accent, Negative, Neutral, Positive, Tip, Warning
- **Orientation** (VARIANT): Horizontal, Vertical
- Прочие свойства: Element left#18321:0 (BOOLEAN), Buttons#54443:2 (BOOLEAN), Close#54443:4 (BOOLEAN)
- CSS: выверено вручную, см. `components/navigation.css` в разделе «Полные CSS-стили всех компонентов»

#### Button `[17022:63091]` — 153 вариантов
- **Size** (VARIANT): M, S, XS
- **Style** (VARIANT): Accent, Disable, Negative, Neutral, Positive, Warning
- **Type** (VARIANT): Filled, Outlined, Text
- **State** (VARIANT): Default, Disable, Hover, Loading, Press
- Прочие свойства: Element left#17025:2 (BOOLEAN), Element right#17025:123 (BOOLEAN), Button text#17039:607 (TEXT), Text#17053:733 (BOOLEAN)
- CSS: выверено вручную, см. `components/button.css` в разделе «Полные CSS-стили всех компонентов»

#### Button `[16953:14851]` — 13 вариантов
- **Type** (VARIANT): Icon, Icon_outlined
- **State** (VARIANT): Disable, Enabled, Error, No border, Primary, Secondary, Warning
- **Icon** (VARIANT): Yes
- CSS: выверено вручную, см. `components/button.css` в разделе «Полные CSS-стили всех компонентов»

#### Button group `[53619:15772]` — 4 вариантов
- **Orientation** (VARIANT): Horizontally, Vertically
- **Margins** (VARIANT): Off, On
- Прочие свойства: Slot#60175:12 (SLOT)
- CSS: выверено вручную, см. `components/button.css` в разделе «Полные CSS-стили всех компонентов»

#### Button icon `[17123:81299]` — 153 вариантов
- **Size** (VARIANT): M, S, XS
- **Style** (VARIANT): Accent, Negative, Neutral, Positive, Warning
- **Type** (VARIANT): Filled, Outlined, Text
- **State** (VARIANT): Default, Disable, Hover, Loading, Press
- CSS: выверено вручную, см. `components/button-icon.css` в разделе «Полные CSS-стили всех компонентов»

#### Button icon group `[53828:5738]` — 2 вариантов
- **Orientation** (VARIANT): Horizontally, Vertically
- Прочие свойства: Slot#60176:0 (SLOT)
- CSS: выверено вручную, см. `components/button-icon.css` в разделе «Полные CSS-стили всех компонентов»

#### Button New `[16321:6498]` — 2 вариантов
- **Type** (VARIANT): btn-28, btn-36
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2-5x) var(--ds-size-2-5x)`
    - тень: `var(--ds-shadow-shadows-01-dp-sl)`
- Модификаторы (что меняет каждый):
    - `--btn-28`: внутренние отступы `var(--ds-size-3x) var(--ds-size-3x) var(--ds-size-1-5x) var(--ds-size-1-5x)`, фон `var(--ds-color-chips-input-focus-border-color)`, color `var(--ds-color-expansion-panel-block-collaps-content-background)`
    - `--btn-36`: фон `var(--ds-color-expansion-panel-block-collaps-content-background)`, color `var(--ds-palette-neutral-950)`
- Разметка:

```html
<div class="ds-button-new ds-button-new--btn-28">
  <span class="ds-button-new__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Button New [16321:6498] — 2 вариантов; оси: Type */
.ds-button-new {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--ds-shadow-shadows-01-dp-sl);
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2-5x) var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-button-new__label {
  font-size: var(--ds-typography-font-size-3-5x);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: var(--ds-typography-line-height-4x);
  letter-spacing: 1.25px;
  color: var(--ds-palette-neutral-950);
  white-space: nowrap;
}
.ds-button-new--btn-36 {
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  color: var(--ds-palette-neutral-950);
}
.ds-button-new--btn-28 {
  padding: var(--ds-size-3x) var(--ds-size-3x) var(--ds-size-1-5x) var(--ds-size-1-5x);
  background: var(--ds-color-chips-input-focus-border-color);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
```
</details>

#### Button toggle `[17039:71554]` — 12 вариантов
- **Size** (VARIANT): M, S, XS
- **Type** (VARIANT): Filled, Outlined
- **Content** (VARIANT): Icon, Text
- Прочие свойства: Button container#59885:13 (SLOT)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-button-toggle-pad-left) var(--ds-button-toggle-pad-right) var(--ds-button-toggle-pad-top) var(--ds-button-toggle-pad-bottom)`
    - промежуток между элементами: `var(--ds-button-toggle-gap)`
    - скругление: `var(--ds-size-3x)`
- Модификаторы (что меняет каждый):
    - `--filled`: фон `var(--ds-color-button-toggle-filled-background)`, color `var(--ds-color-chips-input-focus-border-color)`, рамка `none`, тень `none`
    - `--outlined`: фон `var(--ds-color-button-toggle-outlined-background)`, рамка `1px solid var(--ds-color-button-toggle-outlined-border-color)`, color `var(--ds-color-expansion-panel-block-collaps-content-background)`, тень `none`
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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-toggle-gap);
  padding: var(--ds-button-toggle-pad-left) var(--ds-button-toggle-pad-right) var(--ds-button-toggle-pad-top) var(--ds-button-toggle-pad-bottom);
  border-radius: var(--ds-size-3x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-button-toggle__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-chips-input-focus-border-color);
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
  background: var(--ds-color-button-toggle-filled-background);
  color: var(--ds-color-chips-input-focus-border-color);
  border: none;
  box-shadow: none;
}
.ds-button-toggle--outlined.ds-button-toggle--text {
  background: var(--ds-color-button-toggle-outlined-background);
  border: 1px solid var(--ds-color-button-toggle-outlined-border-color);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
  box-shadow: none;
}
.ds-button-toggle--outlined.ds-button-toggle--icon {
  background: var(--ds-color-button-toggle-outlined-background);
  border: 1px solid var(--ds-color-button-toggle-outlined-border-color);
}
.ds-button-toggle--filled.ds-button-toggle--icon {
  background: var(--ds-color-button-toggle-filled-background);
}
```
</details>

#### Card content `[53744:3079]` — 2 вариантов
- **Content** (VARIANT): Custom, Default
- Прочие свойства: Title#56245:7 (BOOLEAN), Content#58799:0 (SLOT)
- CSS: выверено вручную, см. `components/card.css` в разделе «Полные CSS-стили всех компонентов»

#### Card footer `[53744:3139]` — 1 вариантов
- **Content** (VARIANT): Default
- Прочие свойства: Divider#53753:1 (BOOLEAN)
- CSS: выверено вручную, см. `components/card.css` в разделе «Полные CSS-стили всех компонентов»

#### Card header `[52916:15126]` — 1 вариантов
- **Content** (VARIANT): Default
- Прочие свойства: Divider#53766:0 (BOOLEAN), Title#56245:0 (BOOLEAN), Label up#56245:1 (BOOLEAN), Label down#56245:2 (BOOLEAN)
- CSS: выверено вручную, см. `components/card.css` в разделе «Полные CSS-стили всех компонентов»

#### Card view `[53744:3181]` — 3 вариантов
- **Type** (VARIANT): Filled, Outlined, Shadow
- Прочие свойства: Shadow#53237:9 (BOOLEAN)
- CSS: выверено вручную, см. `components/card.css` в разделе «Полные CSS-стили всех компонентов»

#### Checkbox `[53806:5694]` — 21 вариантов
- **Variant** (VARIANT): Disable, Error, Normal
- **Type** (VARIANT): Deselected, Indeterminate, Selected
- **State** (VARIANT): Default, Hover, Press
- CSS: выверено вручную, см. `components/selection.css` в разделе «Полные CSS-стили всех компонентов»

#### Checkbox group `[53810:889]` — 3 вариантов
- **Orientation** (VARIANT): Group, Horizontal, Vertical
- Прочие свойства: Slot vertical#57252:0 (SLOT), Slot group#57252:4 (SLOT), Slot horizontal#57252:8 (SLOT), Support up#58195:66 (BOOLEAN), Support down#58195:70 (BOOLEAN)
- CSS: выверено вручную, см. `components/selection.css` в разделе «Полные CSS-стили всех компонентов»

#### Checkbox label `[53810:880]` — 9 вариантов
- **Variant** (VARIANT): Disable, Error, Normal
- **Type** (VARIANT): Deselected, Inderterminate, Selected
- Прочие свойства: Checkbox left#17172:1340 (BOOLEAN), Checkbox right#17172:1349 (BOOLEAN), Label#54065:0 (BOOLEAN), Support text#58192:0 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `var(--ds-size-5x)`, растёт по контенту
    - ширина: по контенту (hug)
    - промежуток между элементами: `var(--ds-checkbox-label-gap-support)`
- Модификаторы (что меняет каждый):
    - `--disable`: color `var(--ds-color-chips-input-disable-action-text-color)`
    - `--error`: color `var(--ds-color-chips-input-error-cursor-color)`
    - `--normal`: color `var(--ds-color-chips-input-error-cursor-color)`
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
  display: flex;
  flex-direction: column;
  gap: var(--ds-checkbox-label-gap-support);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-checkbox-label__label {
  font-size: var(--ds-typography-font-size-3-5x);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-line-height-5x);
  letter-spacing: 0.25px;
  color: var(--ds-color-chips-input-error-cursor-color);
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
  gap: var(--ds-checkbox-label-gap);
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
  padding: var(--ds-checkbox-label-pad-left-support-7x) 0 0 0;
}
.ds-checkbox-label__support-text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-checkbox-label-text-support-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-checkbox-label--normal.ds-checkbox-label--deselected {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-checkbox-label--normal.ds-checkbox-label--selected {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-checkbox-label--normal.ds-checkbox-label--inderterminate {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-checkbox-label--error.ds-checkbox-label--deselected {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-checkbox-label--error.ds-checkbox-label--selected {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-checkbox-label--error.ds-checkbox-label--inderterminate {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-checkbox-label--disable.ds-checkbox-label--deselected {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-checkbox-label--disable.ds-checkbox-label--selected {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-checkbox-label--disable.ds-checkbox-label--inderterminate {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
```
</details>

#### Chips `[17168:83542]` — 18 вариантов
- **Size** (VARIANT): M, S
- **Type** (VARIANT): Filled, Outlined
- **State** (VARIANT): Default, Disable, Focus, Hover, Press
- Прочие свойства: Element left#17172:1340 (BOOLEAN), Element right#17172:1349 (BOOLEAN)
- Размеры и параметры:
    - высота: `var(--ds-size-8x)` (фикс.)
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-chips-m-size-pad-left) var(--ds-chips-m-size-pad-right) var(--ds-chips-m-size-pad-top) var(--ds-chips-m-size-pad-bottom)`
    - промежуток между элементами: `var(--ds-chips-m-size-gap)`
    - скругление: `var(--ds-size-3x)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--filled`: фон `var(--ds-color-chips-filled-default-background)`, color `var(--ds-color-chips-input-error-cursor-color)`, фон `var(--ds-color-chips-disable-background-filled)`, color `var(--ds-color-chips-input-disable-action-text-color)`
    - `--outlined`: фон `var(--ds-color-chips-outlined-default-background)`, рамка `1px solid var(--ds-color-chips-outlined-default-border-color)`, color `var(--ds-color-chips-input-error-cursor-color)`, фон `var(--ds-color-chips-disable-background-outlined)`
    - `--s`: промежуток между элементами `var(--ds-chips-s-size-gap)`, внутренние отступы `var(--ds-chips-s-size-pad-left) var(--ds-chips-s-size-pad-right) var(--ds-chips-s-size-pad-top) var(--ds-chips-s-size-pad-bottom)`, скругление `var(--ds-size-2x)`, ширина `var(--ds-size-4x)`
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
  display: flex;
  flex-direction: row;
  align-items: center;
  height: var(--ds-size-8x);
  padding: var(--ds-chips-m-size-pad-left) var(--ds-chips-m-size-pad-right) var(--ds-chips-m-size-pad-top) var(--ds-chips-m-size-pad-bottom);
  gap: var(--ds-chips-m-size-gap);
  border-radius: var(--ds-size-3x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-chips-text-color);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-chips__close {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-chips--s {
  gap: var(--ds-chips-s-size-gap);
  padding: var(--ds-chips-s-size-pad-left) var(--ds-chips-s-size-pad-right) var(--ds-chips-s-size-pad-top) var(--ds-chips-s-size-pad-bottom);
  border-radius: var(--ds-size-2x);
}
.ds-chips--s .ds-chips__icon {
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
}
.ds-chips--outlined {
  background: var(--ds-color-chips-outlined-default-background);
  border: 1px solid var(--ds-color-chips-outlined-default-border-color);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-chips--outlined:hover {
  background: var(--ds-color-chips-outlined-hover-background);
  border: 1px solid var(--ds-color-chips-outlined-hover-border-color);
}
.ds-chips--outlined:focus-visible {
  background: var(--ds-color-chips-outlined-focus-background);
}
.ds-chips--outlined:active {
  background: var(--ds-color-chips-outlined-press-background);
  border: 1px solid var(--ds-color-chips-outlined-press-border-color);
}
.ds-chips--outlined:disabled {
  background: var(--ds-color-chips-disable-background-outlined);
  border: 1px solid var(--ds-color-chips-disable-border-color);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips--outlined.ds-chips--disabled {
  background: var(--ds-color-chips-disable-background-outlined);
  border: 1px solid var(--ds-color-chips-disable-border-color);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips--filled {
  background: var(--ds-color-chips-filled-default-background);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-chips--filled:hover {
  background: var(--ds-color-chips-filled-hover-background);
}
.ds-chips--filled:active {
  background: var(--ds-color-chips-filled-press-background);
}
.ds-chips--filled:disabled {
  background: var(--ds-color-chips-disable-background-filled);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips--filled.ds-chips--disabled {
  background: var(--ds-color-chips-disable-background-filled);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips--disabled {
  pointer-events: none;
}
```
</details>

#### Chips group `[55750:5485]` — 2 вариантов
- **Size** (VARIANT): M, S
- Прочие свойства: Slot#60220:1 (SLOT)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - промежуток между элементами: `var(--ds-chips-gap-group)`
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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-chips-gap-group);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips-group__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
- **Size** (VARIANT): M, S
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Прочие свойства: Support text#55693:0 (BOOLEAN), Element right#55751:38 (BOOLEAN), Support#59392:7 (BOOLEAN), Hint text#59430:0 (BOOLEAN), Label text value#59432:1 (TEXT), Support text value#59437:20 (TEXT), Hint text value#59437:40 (TEXT), Action text#59437:60 (BOOLEAN), Action text value#59437:80 (TEXT), Placeholder value#59507:0 (TEXT), Text value#59507:16 (TEXT), Slot#60231:21 (SLOT)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - промежуток между элементами: `var(--ds-size-1x)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--s`: промежуток между элементами `var(--ds-form-field-gap-input-support)`, ширина `var(--ds-size-5x)`, высота `var(--ds-size-5x)`
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
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-chips-input-gap-chips-input-frame);
  padding: var(--ds-size-3x) var(--ds-size-3x) var(--ds-chips-input-m-size-pad-top) var(--ds-chips-input-m-size-pad-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-chips-input-default-background);
  border: 1px solid var(--ds-color-chips-input-default-border-color);
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
  padding: var(--ds-size-3x) var(--ds-size-3x) 0 0;
}
.ds-chips-input__hint {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: var(--ds-size-3x) var(--ds-size-3x) 0 0;
}
.ds-chips-input--s {
  gap: var(--ds-form-field-gap-input-support);
}
.ds-chips-input--s .ds-chips-input__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-chips-input:hover {
  background: var(--ds-color-chips-input-disable-background);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input:focus-visible {
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-chips-input:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input.ds-chips-input--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input--disabled {
  pointer-events: none;
}
```
</details>

#### Chips Input `[61382:55775]` — 16 вариантов
- **Size** (VARIANT): M, S
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Прочие свойства: Support text#55693:0 (BOOLEAN), Element right#55751:38 (BOOLEAN), Support#59392:7 (BOOLEAN), Hint text#59430:0 (BOOLEAN), Label text value#59432:1 (TEXT), Support text value#59437:20 (TEXT), Hint text value#59437:40 (TEXT), Action text#59437:60 (BOOLEAN), Action text value#59437:80 (TEXT), Placeholder value#59507:0 (TEXT), Text value#59507:16 (TEXT), Slot#60231:21 (SLOT)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - промежуток между элементами: `var(--ds-form-field-gap-input-support)`
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
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips-input-2__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-form-field-gap-input-frame);
  padding: var(--ds-form-field-m-size-pad-input-left) var(--ds-form-field-m-size-pad-input-right) var(--ds-form-field-m-size-pad-input-top) var(--ds-form-field-m-size-pad-input-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
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
  gap: var(--ds-form-field-gap-input-support);
}
.ds-chips-input-2__text {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: var(--ds-form-field-pad-support-left) var(--ds-form-field-pad-support-right) 0 0;
}
.ds-chips-input-2__hint {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: var(--ds-form-field-pad-support-left) var(--ds-form-field-pad-support-right) 0 0;
}
.ds-chips-input-2--s .ds-chips-input-2__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-chips-input-2:hover {
  background: var(--ds-color-chips-input-disable-background);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input-2:focus-visible {
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-chips-input-2:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input-2.ds-chips-input-2--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input-2--disabled {
  pointer-events: none;
}
```
</details>

#### Chips input cell `[60231:75648]` — 8 вариантов
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Размеры и параметры:
    - высота: минимум `var(--ds-size-10x)`, растёт по контенту
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom)`
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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips-input-cell__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-chips-input-gap-chips-input-frame);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-chips-input-default-background);
  border: 1px solid var(--ds-color-chips-input-default-border-color);
}
.ds-chips-input-cell__support {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-1x);
}
.ds-chips-input-cell:hover {
  border: 1px solid var(--ds-color-table-cell-content-hover-border-color);
}
.ds-chips-input-cell:focus-visible {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-chips-input-cell:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input-cell.ds-chips-input-cell--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input-cell--disabled {
  pointer-events: none;
}
```
</details>

#### Chrome Header desktop `[56564:1013]` — 1 вариантов
- Размеры и параметры:
    - высота: минимум `86px`, растёт по контенту
    - ширина: по контенту (hug)
- Разметка:

```html
<div class="ds-chrome-header-desktop">
  <div class="ds-chrome-header-desktop__application-controller"></div>
  <div class="ds-chrome-header-desktop__base"></div>
  <span class="ds-chrome-header-desktop__label">Текст</span>
  <div class="ds-chrome-header-desktop__navigation"></div>
  <div class="ds-chrome-header-desktop__tabs"></div>
  <div class="ds-chrome-header-desktop__top"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Chrome Header desktop [56564:1013] — 1 вариантов; оси: — */
.ds-chrome-header-desktop {
  min-height: 86px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chrome-header-desktop__label {
  font-size: var(--ds-typography-font-size-3x);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: 14.522727012634277px;
  white-space: nowrap;
}
.ds-chrome-header-desktop__top {
  height: 43px;
  display: flex;
  flex-direction: row;
}
.ds-chrome-header-desktop__tabs {
  display: flex;
  flex-direction: row;
}
.ds-chrome-header-desktop__application-controller {
  height: 43px;
  display: flex;
  flex-direction: row;
}
.ds-chrome-header-desktop__base {
  height: 43px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: var(--ds-size-3x) var(--ds-size-3x) var(--ds-size-1-5x) var(--ds-size-1-5x);
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-chrome-header-desktop__navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-3x);
}
```
</details>

#### Chrome Header mobile `[56564:1062]` — 2 вариантов
- **Dark** (VARIANT): Off, On
- Размеры и параметры:
    - высота: `66px` (фикс.)
    - ширина: по контенту (hug)
- Модификаторы (что меняет каждый):
    - `--off`: фон `var(--ds-color-expansion-panel-block-collaps-content-background)`, color `var(--ds-color-chips-input-error-cursor-color)`
    - `--on`: фон `var(--ds-color-chips-input-error-cursor-color)`, color `var(--ds-color-expansion-panel-block-collaps-content-background)`
- Разметка:

```html
<div class="ds-chrome-header-mobile ds-chrome-header-mobile--off">
  <div class="ds-chrome-header-mobile__1"></div>
  <div class="ds-chrome-header-mobile__address"></div>
  <div class="ds-chrome-header-mobile__address-field"></div>
  <div class="ds-chrome-header-mobile__home"></div>
  <span class="ds-chrome-header-mobile__label">Текст</span>
  <div class="ds-chrome-header-mobile__lock"></div>
  <div class="ds-chrome-header-mobile__more"></div>
  <div class="ds-chrome-header-mobile__more-vert"></div>
  <div class="ds-chrome-header-mobile__rectangle"></div>
  <div class="ds-chrome-header-mobile__spacer-16px"></div>
  <div class="ds-chrome-header-mobile__spacer-8px"></div>
  <div class="ds-chrome-header-mobile__tabs"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Chrome Header mobile [56564:1062] — 2 вариантов; оси: Dark */
.ds-chrome-header-mobile {
  height: 66px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chrome-header-mobile__label {
  font-size: var(--ds-typography-font-size-2-5x);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: 13px;
  color: var(--ds-color-chips-input-error-cursor-color);
  white-space: nowrap;
}
.ds-chrome-header-mobile__home {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
}
.ds-chrome-header-mobile__spacer-8px {
  height: var(--ds-size-2x);
  display: flex;
  flex-direction: row;
}
.ds-chrome-header-mobile__address-field {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: 11px 11px 9px 9px;
  border-radius: 17px;
}
.ds-chrome-header-mobile__lock {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-chrome-header-mobile__address {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-chrome-header-mobile__spacer-16px {
  height: var(--ds-size-2x);
  display: flex;
  flex-direction: row;
}
.ds-chrome-header-mobile__tabs {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-chrome-header-mobile__rectangle {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  border: 1.5px solid var(--ds-color-chips-input-error-cursor-color);
}
.ds-chrome-header-mobile__1 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-chips-input-error-cursor-color);
  font-size: var(--ds-typography-font-size-2-5x);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: 11.71875px;
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-chrome-header-mobile__more {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-chrome-header-mobile__more-vert {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-chips-input-error-cursor-color);
}
.ds-chrome-header-mobile--off {
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-chrome-header-mobile--on {
  background: var(--ds-color-chips-input-error-cursor-color);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
```
</details>

#### Content `[57375:12699]` — 1 вариантов
- Прочие свойства: Slot#57375:0 (SLOT), Slot 1#57376:0 (SLOT)
- CSS не требуется: собственного оформления нет — компонент задаёт только структуру/поведение, вид приходит от вложенных элементов.

#### Control arrow button `[52868:3935]` — 3 вариантов
- **Size** (VARIANT): M, S, XS
- Размеры и параметры:
    - ширина: по контенту (hug)
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

#### Control group number button `[53828:5569]` — 2 вариантов
- **Size** (VARIANT): S, XS
- Размеры и параметры:
    - ширина: по контенту (hug)
    - промежуток между элементами: `var(--ds-size-0-25x)`
    - скругление: `var(--ds-size-2x)`
    - рамка: `1px solid var(--ds-color-stroke-default)`
    - фон: `var(--ds-palette-neutral-50)`
- Модификаторы (что меняет каждый):
    - `--xs`: ширина `var(--ds-size-4x)`, высота `var(--ds-size-4x)`
- Разметка:

```html
<div class="ds-control-group-number-button ds-control-group-number-button--xs">
  <span class="ds-control-group-number-button__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-control-group-number-button__icon-size"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Control group number button [53828:5569] — 2 вариантов; оси: Size */
.ds-control-group-number-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-0-25x);
  border-radius: var(--ds-size-2x);
  background: var(--ds-palette-neutral-50);
  border: 1px solid var(--ds-color-stroke-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-control-group-number-button__icon {
  flex-shrink: 0;
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-control-group-number-button__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-control-group-number-button__icon svg path {
  fill: currentColor;
}
.ds-control-group-number-button__icon-size {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-control-group-number-button--xs .ds-control-group-number-button__icon {
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
}
```
</details>

#### Control number button `[53829:6130]` — 16 вариантов
- **Size** (VARIANT): S, XS
- **Type** (VARIANT): Left, Right
- **State** (VARIANT): Default, Disable, Hover, Press
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2-5x) var(--ds-size-2-5x)`
    - промежуток между элементами: `var(--ds-button-icon-gap)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--left`: фон `var(--ds-color-button-icon-neutral-filled-default-background)`, фон `var(--ds-color-button-icon-disable-background-filled)`
    - `--right`: фон `var(--ds-color-button-icon-neutral-filled-default-background)`, фон `var(--ds-color-button-icon-disable-background-filled)`
    - `--xs`: внутренние отступы `var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x)`, ширина `var(--ds-size-4x)`, высота `var(--ds-size-4x)`
- Состояния: `:active` (нажатие), `:disabled` (неактивно), `:hover` (наведение)
- Разметка:

```html
<div class="ds-control-number-button ds-control-number-button--disabled">
  <span class="ds-control-number-button__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-control-number-button__icon-size"></div>
  <div class="ds-control-number-button__remove"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Control number button [53829:6130] — 16 вариантов; оси: Size, Type, State */
.ds-control-number-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-icon-gap);
  padding: var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2-5x) var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-control-number-button__icon {
  flex-shrink: 0;
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-control-number-button__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-control-number-button__icon svg path {
  fill: currentColor;
}
.ds-control-number-button__icon-size {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-control-number-button__remove {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-control-number-button--xs {
  padding: var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x);
}
.ds-control-number-button--xs .ds-control-number-button__icon {
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
}
.ds-control-number-button--left {
  background: var(--ds-color-button-icon-neutral-filled-default-background);
}
.ds-control-number-button--left:hover {
  background: var(--ds-color-button-icon-neutral-filled-hover-background);
}
.ds-control-number-button--left:active {
  background: var(--ds-color-button-icon-neutral-filled-press-background);
}
.ds-control-number-button--left:disabled {
  background: var(--ds-color-button-icon-disable-background-filled);
}
.ds-control-number-button--left.ds-control-number-button--disabled {
  background: var(--ds-color-button-icon-disable-background-filled);
}
.ds-control-number-button--right {
  background: var(--ds-color-button-icon-neutral-filled-default-background);
}
.ds-control-number-button--right:hover {
  background: var(--ds-color-button-icon-neutral-filled-hover-background);
}
.ds-control-number-button--right:active {
  background: var(--ds-color-button-icon-neutral-filled-press-background);
}
.ds-control-number-button--right:disabled {
  background: var(--ds-color-button-icon-disable-background-filled);
}
.ds-control-number-button--right.ds-control-number-button--disabled {
  background: var(--ds-color-button-icon-disable-background-filled);
}
.ds-control-number-button--disabled {
  pointer-events: none;
}
```
</details>

#### Control Panel `[58501:4052]` — 3 вариантов
- **Type** (VARIANT): Calendar, Control, Week
- Прочие свойства: Slot Week#58546:5 (SLOT)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `0 0 var(--ds-size-1x) var(--ds-size-1x)`
    - промежуток между элементами: `74px`
- Модификаторы (что меняет каждый):
    - `--calendar`: направление `column`, align-items `center`, фон `var(--ds-color-expansion-panel-block-collaps-content-background)`, color `var(--ds-color-chips-input-error-cursor-color)`
    - `--control`: направление `row`, align-items `center`, color `var(--ds-color-chips-input-error-cursor-color)`
    - `--week`: направление `row`, внутренние отступы `0 0 var(--ds-size-0-5x) var(--ds-size-0-5x)`, color `var(--ds-color-chips-input-error-cursor-color)`
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
  padding: 0 0 var(--ds-size-1x) var(--ds-size-1x);
  gap: 74px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-control-panel__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  padding: var(--ds-size-2x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2-5x);
  border-radius: var(--ds-size-circular);
  background: var(--ds-color-brand-neutral-default);
}
.ds-control-panel__month {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-primary);
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-control-panel__button-icon-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap);
}
.ds-control-panel__button-icon {
  display: flex;
  flex-direction: row;
  gap: var(--ds-button-icon-gap);
  padding: var(--ds-button-icon-m-size-pad-left) var(--ds-button-icon-m-size-pad-right) var(--ds-button-icon-m-size-pad-top) var(--ds-button-icon-m-size-pad-bottom);
  border-radius: var(--ds-size-2x);
}
.ds-control-panel--control {
  flex-direction: row;
  align-items: center;
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-control-panel--week {
  flex-direction: row;
  padding: 0 0 var(--ds-size-0-5x) var(--ds-size-0-5x);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-control-panel--calendar {
  flex-direction: column;
  align-items: center;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  color: var(--ds-color-chips-input-error-cursor-color);
}
```
</details>

#### Control Panel `[58982:11018]` — 2 вариантов
- **Type** (VARIANT): Control, Time
- Прочие свойства: Slot Time#58546:5 (SLOT)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `0 0 var(--ds-size-1x) var(--ds-size-1x)`
    - промежуток между элементами: `74px`
- Модификаторы (что меняет каждый):
    - `--control`: align-items `center`, color `var(--ds-color-chips-input-error-cursor-color)`
    - `--time`: внутренние отступы `0 0 var(--ds-size-0-5x) var(--ds-size-0-5x)`, color `var(--ds-color-chips-input-error-cursor-color)`
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
  padding: 0 0 var(--ds-size-1x) var(--ds-size-1x);
  gap: 74px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-control-panel-2__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  padding: var(--ds-size-2x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2-5x);
  border-radius: var(--ds-size-circular);
  background: var(--ds-color-brand-neutral-default);
}
.ds-control-panel-2__month {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-primary);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-control-panel-2__button-icon-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-icon-gap);
}
.ds-control-panel-2--control {
  align-items: center;
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-control-panel-2--time {
  padding: 0 0 var(--ds-size-0-5x) var(--ds-size-0-5x);
  color: var(--ds-color-chips-input-error-cursor-color);
}
```
</details>

#### Datepicker `[58509:5439]` — 3 вариантов
- **Type** (VARIANT): Day, Month, Year
- Прочие свойства: Headline#53001:0 (TEXT), Supporting text#53001:4 (TEXT), Supporting text (range)#53001:8 (TEXT), Headline (range)#53001:12 (TEXT), Show clear button#54584:0 (BOOLEAN), show controls#58548:10 (BOOLEAN)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x)`
    - скругление: `var(--ds-size-3x)`
    - рамка: `1px solid var(--ds-color-stroke-default)`
- Модификаторы (что меняет каждый):
    - `--day`: color `var(--ds-color-chips-input-error-cursor-color)`
    - `--month`: color `var(--ds-color-chips-input-error-cursor-color)`
    - `--year`: color `var(--ds-color-chips-input-error-cursor-color)`
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-3x);
  border: 1px solid var(--ds-color-stroke-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-datepicker__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  padding: 0 0 var(--ds-size-1x) var(--ds-size-1x);
}
.ds-datepicker__elements {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2-5x);
  border-radius: var(--ds-size-circular);
  background: var(--ds-color-brand-neutral-default);
}
.ds-datepicker__button-icon-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap);
}
.ds-datepicker__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-datepicker__week-6 {
  height: 48px;
  display: flex;
  flex-direction: row;
}
.ds-datepicker--day {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-datepicker--year {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-datepicker--month {
  color: var(--ds-color-chips-input-error-cursor-color);
}
```
</details>

#### Dialog content `[53535:1369]` — 1 вариантов
- **State** (VARIANT): Default
- Прочие свойства: Slot#58937:21 (SLOT), Scroll#58937:24 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `204px`, растёт по контенту
    - ширина: по контенту (hug)
    - фон: `var(--ds-color-dialog-background)`
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
  display: flex;
  flex-direction: row;
  background: var(--ds-color-dialog-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-content__label {
  font-size: var(--ds-font-body-m-16-normal-medium-size);
  line-height: var(--ds-font-body-m-16-normal-medium-line);
  letter-spacing: var(--ds-font-body-m-16-normal-medium-spacing);
  font-weight: var(--ds-font-body-m-16-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  padding: var(--ds-scroll-pad-left) var(--ds-scroll-pad-right) var(--ds-scroll-pad-top) var(--ds-scroll-pad-bottom);
}
.ds-dialog-content__background {
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-scroll-default-background);
}
```
</details>

#### Dialog footer `[53749:638]` — 1 вариантов
- **State** (VARIANT): Default
- Прочие свойства: Divider#53749:3 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `69px`, растёт по контенту
    - ширина: по контенту (hug)
    - фон: `var(--ds-color-dialog-background)`
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
  display: flex;
  flex-direction: column;
  background: var(--ds-color-dialog-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-footer__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-dialog-footer__action {
  height: 68px;
  display: flex;
  flex-direction: column;
  padding: var(--ds-dialog-footer-pad-left) var(--ds-dialog-footer-pad-right) var(--ds-dialog-footer-pad-top) var(--ds-dialog-footer-pad-bottom);
}
.ds-dialog-footer__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-m-size-gap);
  padding: var(--ds-button-m-size-pad-left) var(--ds-button-m-size-pad-right) var(--ds-button-m-size-pad-top) var(--ds-button-m-size-pad-bottom);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-button-accent-filled-default-background);
  box-shadow: var(--ds-shadow-shadows-01-dp-sl);
}
```
</details>

#### Dialog header `[53535:1322]` — 2 вариантов
- **Type** (VARIANT): Picture, Text
- Прочие свойства: Divider#53619:9 (BOOLEAN), Close#59197:0 (BOOLEAN), Picture#59215:10 (SLOT), Description#59215:16 (BOOLEAN)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - фон: `var(--ds-color-dialog-background)`
- Модификаторы (что меняет каждый):
    - `--picture`: ширина `500px`
    - `--text`: color `var(--ds-color-chips-input-error-cursor-color)`
- Разметка:

```html
<div class="ds-dialog-header ds-dialog-header--picture">
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
  display: flex;
  flex-direction: column;
  background: var(--ds-color-dialog-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-header__label {
  font-size: var(--ds-font-header-s-20-normal-medium-size);
  line-height: var(--ds-font-header-s-20-normal-medium-line);
  letter-spacing: var(--ds-font-header-s-20-normal-medium-spacing);
  font-weight: var(--ds-font-header-s-20-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  gap: var(--ds-dialog-header-gap);
}
.ds-dialog-header__description {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-dialog-header-desc-color);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-dialog-header__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-dialog-header--text {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-dialog-header--picture {
  width: 500px;
}
```
</details>

#### Dialog view `[52952:1285]` — 1 вариантов
- **State** (VARIANT): Default
- Прочие свойства: Content#58947:4 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `364px`, растёт по контенту
    - ширина: по контенту (hug)
    - скругление: `var(--ds-size-3x)`
    - фон: `var(--ds-color-dialog-background)`
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
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-dialog-background);
  box-shadow: var(--ds-shadow-shadows-12-dp-m);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-view__label {
  font-size: var(--ds-font-header-s-20-normal-medium-size);
  line-height: var(--ds-font-header-s-20-normal-medium-line);
  letter-spacing: var(--ds-font-header-s-20-normal-medium-spacing);
  font-weight: var(--ds-font-header-s-20-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  background: var(--ds-color-dialog-background);
}
.ds-dialog-view__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-dialog-view__content {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-dialog-background);
}
.ds-dialog-view__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-left) var(--ds-scroll-pad-right) var(--ds-scroll-pad-top) var(--ds-scroll-pad-bottom);
}
.ds-dialog-view__footer {
  display: flex;
  flex-direction: column;
  background: var(--ds-color-dialog-background);
}
.ds-dialog-view__action {
  height: 68px;
  display: flex;
  flex-direction: column;
  padding: var(--ds-dialog-footer-pad-left) var(--ds-dialog-footer-pad-right) var(--ds-dialog-footer-pad-top) var(--ds-dialog-footer-pad-bottom);
}
```
</details>

#### Divider `[58320:441]` — 16 вариантов
- **Size** (VARIANT): L, M
- **Type** (VARIANT): Dashed, Solid
- **State** (VARIANT): Default, Disable, Hover, Lite, Selected
- CSS: выверено вручную, см. `components/navigation.css` в разделе «Полные CSS-стили всех компонентов»

#### Divider `[53556:7964]` — 1 вариантов
- **Type** (VARIANT): Solid
- CSS: выверено вручную, см. `components/navigation.css` в разделе «Полные CSS-стили всех компонентов»

#### Element `[54104:20956]` — 9 вариантов
- **Content** (VARIANT): Checkbox, Counter, Icon group, Icon size, Image size, Indicator, Radio button, Slide toggle, Text default
- Размеры и параметры:
    - ширина: по контенту (hug)
    - промежуток между элементами: `var(--ds-size-2-5x)`
    - фон: `var(--ds-color-expansion-panel-block-collaps-content-background)`
- Модификаторы (что меняет каждый):
    - `--checkbox`: направление `row`
    - `--counter`: направление `column`, color `var(--ds-color-expansion-panel-block-collaps-content-background)`
    - `--icon-group`: направление `row`, align-items `center`
    - `--icon-size`: направление `row`, align-items `center`
    - `--image-size`: направление `row`, align-items `center`
    - `--indicator`: направление `row`
    - `--radio-button`: направление `row`
    - `--slide-toggle`: направление `row`, color `var(--ds-color-chips-input-error-cursor-color)`
    - `--text-default`: направление `row`, color `var(--ds-color-chips-input-error-cursor-color)`
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-element--checkbox {
  flex-direction: row;
}
.ds-element--radio-button {
  flex-direction: row;
}
.ds-element--indicator {
  flex-direction: row;
}
.ds-element--slide-toggle {
  flex-direction: row;
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-element--counter {
  flex-direction: column;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
```
</details>

#### Element cell `[58885:32432]` — 11 вариантов
- **Variant** (VARIANT): Button, Button icon, Cell Input, Checkbox, Chips, Icon group, Icon size, Input number, Slide toggle, Status, Text UI
- CSS не требуется: это **слот-контейнер** — пустая обёртка под вложенный компонент (иконку, ячейку). Оформление задаёт вложенный компонент, а размер — контент.

#### Element Form Field `[60231:76795]` — 3 вариантов
- **Variant** (VARIANT): Chips input cell, Input cell, Select cell
- Размеры и параметры:
    - ширина: по контенту (hug)
    - фон: `var(--ds-color-expansion-panel-block-collaps-content-background)`
- Модификаторы (что меняет каждый):
    - `--chips-input-cell`: color `var(--ds-color-chips-input-default-action-text-color)`
    - `--input-cell`: color `var(--ds-color-chips-input-default-action-text-color)`
    - `--select-cell`: color `var(--ds-color-chips-input-default-action-text-color)`
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
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-form-field__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
  white-space: nowrap;
}
.ds-element-form-field__input-cell {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom);
}
.ds-element-form-field__input {
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support);
}
.ds-element-form-field--input-cell {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-element-form-field--select-cell {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-element-form-field--chips-input-cell {
  color: var(--ds-color-chips-input-default-action-text-color);
}
```
</details>

#### Element left `[59851:11313]` — 5 вариантов
- **Style** (VARIANT): Accent, Negative, Neutral, Positive, Warning
- Размеры и параметры:
    - высота: минимум `var(--ds-size-5x)`, растёт по контенту
    - ширина: по контенту (hug)
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
```
</details>

#### Element menu `[56090:1611]` — 8 вариантов
- **Content** (VARIANT): Checkbox, Counter, Icon size, Image size, Indicator, Radio button, Slide toggle, Text default
- Размеры и параметры:
    - ширина: по контенту (hug)
    - промежуток между элементами: `var(--ds-size-2-5x)`
    - фон: `var(--ds-color-expansion-panel-block-collaps-content-background)`
- Модификаторы (что меняет каждый):
    - `--checkbox`: направление `row`
    - `--counter`: направление `column`, color `var(--ds-color-expansion-panel-block-collaps-content-background)`
    - `--icon-size`: направление `row`, align-items `center`
    - `--image-size`: направление `row`, align-items `center`
    - `--indicator`: направление `row`
    - `--radio-button`: направление `row`
    - `--slide-toggle`: направление `row`, color `var(--ds-color-chips-input-error-cursor-color)`
    - `--text-default`: направление `row`, color `var(--ds-color-chips-input-error-cursor-color)`
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-menu__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-element-menu--checkbox {
  flex-direction: row;
}
.ds-element-menu--radio-button {
  flex-direction: row;
}
.ds-element-menu--indicator {
  flex-direction: row;
}
.ds-element-menu--slide-toggle {
  flex-direction: row;
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-element-menu--counter {
  flex-direction: column;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
```
</details>

#### Element select `[57735:17972]` — 8 вариантов
- **Content** (VARIANT): Checkbox, Counter, Icon size, Image size, Indicator, Radio button, Slide toggle, Text default
- Размеры и параметры:
    - ширина: по контенту (hug)
    - промежуток между элементами: `var(--ds-size-2-5x)`
    - фон: `var(--ds-color-expansion-panel-block-collaps-content-background)`
- Модификаторы (что меняет каждый):
    - `--checkbox`: направление `row`
    - `--counter`: направление `column`, color `var(--ds-color-expansion-panel-block-collaps-content-background)`
    - `--icon-size`: направление `row`, align-items `center`
    - `--image-size`: направление `row`, align-items `center`
    - `--indicator`: направление `row`
    - `--radio-button`: направление `row`
    - `--slide-toggle`: направление `row`, color `var(--ds-color-chips-input-error-cursor-color)`
    - `--text-default`: направление `row`, color `var(--ds-color-chips-input-error-cursor-color)`
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-select__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-element-select--checkbox {
  flex-direction: row;
}
.ds-element-select--radio-button {
  flex-direction: row;
}
.ds-element-select--indicator {
  flex-direction: row;
}
.ds-element-select--slide-toggle {
  flex-direction: row;
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-element-select--counter {
  flex-direction: column;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
```
</details>

#### Element sidenav `[56598:2991]` — 2 вариантов
- **Content** (VARIANT): Avatar, Collaps icon
- Размеры и параметры:
    - высота: `var(--ds-size-5x)` (фикс.)
    - ширина: `var(--ds-size-5x)` (фикс.)
    - скругление: `var(--ds-size-1x)`
- Модификаторы (что меняет каждый):
    - `--avatar`: направление `column`, align-items `center`, промежуток между элементами `var(--ds-size-2-5x)`, внутренние отступы `var(--ds-size-0-5x) var(--ds-size-0-5x) 3px 3px`
    - `--collaps-icon`: направление `row`, фон `var(--ds-color-sidenav-element-collaps-icon-background)`
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
  display: flex;
  width: var(--ds-size-5x);
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
  color: var(--ds-color-chips-input-focus-border-color);
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
  background: var(--ds-color-sidenav-element-collaps-icon-background);
}
.ds-element-sidenav--avatar {
  flex-direction: column;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-0-5x) var(--ds-size-0-5x) 3px 3px;
  color: var(--ds-color-chips-input-focus-border-color);
}
```
</details>

#### Element step `[55403:7248]` — 12 вариантов
- **Content** (VARIANT): Counter, Icon size
- **State** (VARIANT): Default, Disable, Error, Hover, Press, Selected
- Прочие свойства: Text#57060:7 (TEXT)
- Размеры и параметры:
    - высота: минимум `var(--ds-size-6x)`, растёт по контенту
    - ширина: по контенту (hug)
    - промежуток между элементами: `var(--ds-size-2-5x)`
    - фон: `var(--ds-color-expansion-panel-block-collaps-content-background)`
- Модификаторы (что меняет каждый):
    - `--counter`: направление `column`, color `var(--ds-color-chips-input-error-cursor-color)`, color `var(--ds-color-chips-input-disable-action-text-color)`
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
  display: flex;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-step__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-element-step--icon-size {
  flex-direction: row;
  align-items: center;
}
.ds-element-step--counter {
  flex-direction: column;
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-element-step--counter:hover {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-element-step--counter:active {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-element-step--counter:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-element-step--counter.ds-element-step--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-element-step--disabled {
  pointer-events: none;
}
```
</details>

#### Elementare cell `[60220:72578]` — 10 вариантов
- **Variant** (VARIANT): Button, Button icon, Checkbox, Chips, Icon group, Icon size, Input number, Slide toggle, Status, Text UI
- CSS не требуется: это **слот-контейнер** — пустая обёртка под вложенный компонент (иконку, ячейку). Оформление задаёт вложенный компонент, а размер — контент.

#### Elements `[58501:4220]` — 30 вариантов
- **Type** (VARIANT): Cell, Month, Year
- **Variant** (VARIANT): Default, Range, Selected, Today
- **State** (VARIANT): Default, Disable, Hover, Press
- Прочие свойства: Back right#58506:0 (BOOLEAN), Back left#58506:1 (BOOLEAN), Start range#58506:2 (BOOLEAN), End range#58506:3 (BOOLEAN), Date#58506:4 (TEXT), Show focus indicator#58506:5 (BOOLEAN), Year#58506:84 (TEXT), Month#58506:165 (TEXT)
- Размеры и параметры:
    - высота: `var(--ds-size-10x)` (фикс.)
    - ширина: по контенту (hug)
    - скругление: `var(--ds-size-circular)`
- Модификаторы (что меняет каждый):
    - `--cell`: фон `var(--ds-color-brand-neutral-lighter)`, color `var(--ds-color-chips-input-disable-action-text-color)`, направление `row`, align-items `center`
    - `--disabled`: pointer-events `none`
    - `--month`: направление `row`, промежуток между элементами `var(--ds-size-2x)`, внутренние отступы `var(--ds-size-2x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2-5x)`, фон `var(--ds-color-brand-neutral-default)`
    - `--year`: направление `column`, align-items `center`, color `var(--ds-color-expansion-panel-block-collaps-content-background)`, color `var(--ds-color-chips-input-disable-action-text-color)`
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
  border-radius: var(--ds-size-circular);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-elements__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
  white-space: nowrap;
}
.ds-elements__range-highlight-start {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-50);
}
.ds-elements__range-highlight-end {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-50);
}
.ds-elements__range-highlight-middle {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-10);
}
.ds-elements__date {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-primary);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-elements--cell.ds-elements--today:disabled {
  background: var(--ds-color-brand-neutral-lighter);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--cell.ds-elements--today.ds-elements--disabled {
  background: var(--ds-color-brand-neutral-lighter);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--cell.ds-elements--default:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--cell.ds-elements--default.ds-elements--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--cell.ds-elements--range:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--cell.ds-elements--range.ds-elements--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--cell.ds-elements--selected:active {
  background: var(--ds-color-button-accent-filled-press-background);
}
.ds-elements--cell.ds-elements--today:active {
  background: var(--ds-color-brand-neutral-lighter);
}
.ds-elements--cell.ds-elements--default:active {
  background: var(--ds-color-brand-neutral-lighter);
}
.ds-elements--cell.ds-elements--today:hover {
  background: var(--ds-color-brand-neutral-super-light);
}
.ds-elements--cell.ds-elements--default:hover {
  background: var(--ds-color-brand-neutral-super-light);
}
.ds-elements--cell.ds-elements--range {
  flex-direction: row;
  align-items: center;
  background: var(--ds-color-brand-neutral-default);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-elements--cell.ds-elements--selected {
  flex-direction: column;
  align-items: center;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-elements--year.ds-elements--selected {
  flex-direction: column;
  align-items: center;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-elements--cell.ds-elements--today {
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: var(--ds-color-brand-neutral-default);
  border: 1px solid var(--ds-color-stroke-hover);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-elements--cell.ds-elements--default {
  flex-direction: column;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2-5x) var(--ds-size-2-5x) var(--ds-size-2x) var(--ds-size-2x);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-elements--year.ds-elements--default:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--year.ds-elements--default.ds-elements--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--year.ds-elements--today:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--year.ds-elements--today.ds-elements--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--year.ds-elements--default:active {
  background: var(--ds-color-brand-neutral-lighter);
}
.ds-elements--year.ds-elements--today:active {
  background: var(--ds-color-brand-neutral-lighter);
}
.ds-elements--year.ds-elements--default:hover {
  background: var(--ds-color-brand-neutral-super-light);
}
.ds-elements--year.ds-elements--today:hover {
  background: var(--ds-color-brand-neutral-super-light);
}
.ds-elements--year.ds-elements--default {
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  background: var(--ds-color-brand-neutral-default);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-elements--year.ds-elements--today {
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  background: var(--ds-color-brand-neutral-default);
  border: 1px solid var(--ds-color-stroke-hover);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-elements--month.ds-elements--default {
  flex-direction: row;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2-5x);
  background: var(--ds-color-brand-neutral-default);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-elements--month.ds-elements--default:hover {
  background: var(--ds-color-brand-neutral-super-light);
}
.ds-elements--month.ds-elements--default:active {
  background: var(--ds-color-brand-neutral-lighter);
}
.ds-elements--month.ds-elements--default:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--month.ds-elements--default.ds-elements--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--disabled {
  pointer-events: none;
}
```
</details>

#### Elements `[58982:9594]` — 8 вариантов
- **Variant** (VARIANT): Default, Selected
- **State** (VARIANT): Default, Disable, Hover, Press, Range
- Прочие свойства: Start range#58506:2 (BOOLEAN), End range#58506:3 (BOOLEAN), Time#58506:84 (TEXT)
- Размеры и параметры:
    - высота: минимум `var(--ds-size-10x)`, растёт по контенту
    - ширина: по контенту (hug)
- Модификаторы (что меняет каждый):
    - `--default`: color `var(--ds-color-chips-input-disable-action-text-color)`, направление `row`, промежуток между элементами `var(--ds-size-2-5x)`, внутренние отступы `var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x)`
    - `--disabled`: pointer-events `none`
    - `--selected`: направление `column`, color `var(--ds-color-expansion-panel-block-collaps-content-background)`
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
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
  white-space: nowrap;
}
.ds-elements-2__range-highlight-start {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-50);
}
.ds-elements-2__range-highlight-end {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-50);
}
.ds-elements-2__date {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-circular);
  background: var(--ds-color-button-accent-filled-default-background);
}
.ds-elements-2--selected {
  flex-direction: column;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-elements-2--default:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements-2--default.ds-elements-2--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements-2--default:active {
  background: var(--ds-color-brand-neutral-lighter);
}
.ds-elements-2--default:hover {
  background: var(--ds-color-brand-neutral-super-light);
}
.ds-elements-2--default {
  flex-direction: row;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-circular);
  background: var(--ds-color-brand-neutral-default);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-elements-2--disabled {
  pointer-events: none;
}
```
</details>

#### Expansion content `[61361:99603]` — 2 вариантов
- **Padding off/on** (VARIANT): False, True
- Прочие свойства: Slot#61363:19 (SLOT)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-expansion-panel-content-pad-left) var(--ds-expansion-panel-content-pad-right) var(--ds-expansion-panel-content-pad-top) var(--ds-expansion-panel-content-pad-bottom)`
- Модификаторы (что меняет каждый):
    - `--false`: color `var(--ds-color-expansion-panel-block-collaps-content-text-color)`
    - `--true`: color `var(--ds-color-expansion-panel-block-collaps-content-text-color)`
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--ds-expansion-panel-content-pad-left) var(--ds-expansion-panel-content-pad-right) var(--ds-expansion-panel-content-pad-top) var(--ds-expansion-panel-content-pad-bottom);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-expansion-content__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-text-color);
  white-space: nowrap;
}
.ds-expansion-content--true {
  color: var(--ds-color-expansion-panel-block-collaps-content-text-color);
}
.ds-expansion-content--false {
  color: var(--ds-color-expansion-panel-block-collaps-content-text-color);
}
```
</details>

#### Expansion group panel `[56155:1676]` — 2 вариантов
- **Type ?** (VARIANT): Collaps, Expand
- Прочие свойства: Slot#61364:25 (SLOT)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - промежуток между элементами: `var(--ds-expansion-panel-collaps-gap-group)`
- Модификаторы (что меняет каждый):
    - `--collaps`: color `var(--ds-color-expansion-panel-block-collaps-content-text-color)`
    - `--expand`: color `var(--ds-color-expansion-panel-block-collaps-content-text-color)`
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
  display: flex;
  flex-direction: column;
  gap: var(--ds-expansion-panel-collaps-gap-group);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-expansion-group-panel__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-text-color);
  white-space: nowrap;
}
.ds-expansion-group-panel--collaps {
  color: var(--ds-color-expansion-panel-block-collaps-content-text-color);
}
.ds-expansion-group-panel--expand {
  color: var(--ds-color-expansion-panel-block-collaps-content-text-color);
}
```
</details>

#### Expansion panel `[52937:1329]` — 12 вариантов
- **Variant** (VARIANT): Default, Info
- **Collaps/Expand** (VARIANT): Off, On
- **State** (VARIANT): Default, Disable, Hover, Press
- Прочие свойства: Element left#17172:1340 (BOOLEAN), Element right#17172:1349 (BOOLEAN), Icon text#58024:0 (BOOLEAN), Expansion panel_Content#58991:0 (SLOT), Expansion panel_Content2#58991:9 (SLOT), Expansion panel_Content3#58991:18 (SLOT), Expansion panel_Content4#58991:27 (SLOT)
- CSS: выверено вручную, см. `components/expansion.css` в разделе «Полные CSS-стили всех компонентов»

#### Expansion table panel `[56217:15104]` — 0 вариантов
- CSS не требуется: это **слот-контейнер** — пустая обёртка под вложенный компонент (иконку, ячейку). Оформление задаёт вложенный компонент, а размер — контент.

#### Form field cell `[60220:72732]` — 1 вариантов
- **Variant** (VARIANT): Table content cell Chips input
- Размеры и параметры:
    - высота: минимум `var(--ds-size-10x)`, растёт по контенту
    - ширина: по контенту (hug)
    - фон: `var(--ds-color-expansion-panel-block-collaps-content-background)`
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
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-form-field-cell__table-content-chips-input {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-form-field-cell__table-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom);
}
```
</details>

#### Header components `[53535:1244]` — 2 вариантов
- **Type** (VARIANT): Default, Mini
- Прочие свойства: Show Doc#17828:0 (BOOLEAN), Show Designer#17828:1 (BOOLEAN), Show Name#17828:2 (BOOLEAN), Show Figma#17828:3 (BOOLEAN), Description#57740:0 (BOOLEAN)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-size-6x) var(--ds-size-6x) var(--ds-size-6x) var(--ds-size-6x)`
    - скругление: `var(--ds-size-8x)`
- Модификаторы (что меняет каждый):
    - `--default`: направление `column`, фон `var(--ds-color-brand-neutral-default)`, color `var(--ds-color-expansion-panel-block-collaps-content-background)`
    - `--mini`: направление `row`, промежуток между элементами `var(--ds-size-6x)`, скругление `var(--ds-size-6x)`, фон `var(--ds-palette-neutral-50)`
- Разметка:

```html
<div class="ds-header-components ds-header-components--default">
  <div class="ds-header-components__badge-group"></div>
  <div class="ds-header-components__container"></div>
  <div class="ds-header-components__frame-1"></div>
  <span class="ds-header-components__label">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Header components [53535:1244] — 2 вариантов; оси: Type */
.ds-header-components {
  display: flex;
  padding: var(--ds-size-6x) var(--ds-size-6x) var(--ds-size-6x) var(--ds-size-6x);
  border-radius: var(--ds-size-8x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-header-components__label {
  font-size: var(--ds-typography-font-size-6x);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: var(--ds-typography-line-height-6x);
  letter-spacing: 0.18000000715255737px;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
  white-space: nowrap;
}
.ds-header-components__container {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-6x);
  padding: var(--ds-size-6x) var(--ds-size-6x) var(--ds-size-6x) var(--ds-size-6x);
  border-radius: var(--ds-size-6x);
  background: var(--ds-palette-neutral-50);
}
.ds-header-components__badge-group {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2x);
}
.ds-header-components__frame-1 {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2x);
}
.ds-header-components--default {
  flex-direction: column;
  background: var(--ds-color-brand-neutral-default);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-header-components--mini {
  flex-direction: row;
  gap: var(--ds-size-6x);
  border-radius: var(--ds-size-6x);
  background: var(--ds-palette-neutral-50);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
```
</details>

#### Hint container `[54593:479]` — 10 вариантов
- **Size** (VARIANT): Complex, Single
- **Orientation** (VARIANT): Default, Down, Left, Right, Up
- Прочие свойства: Header#54713:4 (BOOLEAN), Content#54713:15 (BOOLEAN), Footer#54713:26 (BOOLEAN)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - скругление: `var(--ds-size-2x)`
    - тень: `var(--ds-shadow-shadows-08-dp-s)`
- Модификаторы (что меняет каждый):
    - `--default`: направление `column`, color `var(--ds-color-expansion-panel-block-collaps-content-background)`
    - `--down`: направление `column`, color `var(--ds-color-expansion-panel-block-collaps-content-background)`
    - `--left`: направление `row`, color `var(--ds-color-expansion-panel-block-collaps-content-background)`
    - `--right`: направление `row`, color `var(--ds-color-expansion-panel-block-collaps-content-background)`
    - `--up`: направление `column`, color `var(--ds-color-expansion-panel-block-collaps-content-background)`
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
  display: flex;
  align-items: center;
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  border-radius: var(--ds-size-2x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-container__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-hint-background-color);
}
.ds-hint-container__header {
  display: flex;
  flex-direction: row;
  gap: var(--ds-hint-header-gap);
  padding: var(--ds-hint-header-pad-left) var(--ds-hint-header-pad-right) var(--ds-hint-header-pad-top) var(--ds-hint-header-pad-bottom);
  background: var(--ds-color-hint-background-color);
}
.ds-hint-container__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-hint-content-gap);
  padding: var(--ds-hint-content-pad-left) var(--ds-hint-content-pad-right) var(--ds-hint-content-pad-top) var(--ds-hint-content-pad-bottom);
  background: var(--ds-color-hint-background-color);
}
.ds-hint-container__footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-hint-footer-gap);
  padding: var(--ds-hint-footer-pad-left) var(--ds-hint-footer-pad-right) var(--ds-hint-footer-pad-top) var(--ds-hint-footer-pad-bottom);
  background: var(--ds-color-hint-background-color);
}
.ds-hint-container--up {
  flex-direction: column;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-container--down {
  flex-direction: column;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-container--right {
  flex-direction: row;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-container--left {
  flex-direction: row;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-container--default {
  flex-direction: column;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
```
</details>

#### Hint content `[54713:3325]` — 2 вариантов
- **Content** (VARIANT): Group content, Single content
- Прочие свойства: Element right#56260:9 (BOOLEAN), Element left#56260:12 (BOOLEAN)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-hint-content-pad-left) var(--ds-hint-content-pad-right) var(--ds-hint-content-pad-top) var(--ds-hint-content-pad-bottom)`
    - промежуток между элементами: `var(--ds-hint-content-gap)`
    - фон: `var(--ds-color-hint-background-color)`
- Модификаторы (что меняет каждый):
    - `--group-content`: color `var(--ds-color-expansion-panel-block-collaps-content-background)`
    - `--single-content`: align-items `center`, color `var(--ds-color-expansion-panel-block-collaps-content-background)`
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
  display: flex;
  flex-direction: row;
  gap: var(--ds-hint-content-gap);
  padding: var(--ds-hint-content-pad-left) var(--ds-hint-content-pad-right) var(--ds-hint-content-pad-top) var(--ds-hint-content-pad-bottom);
  background: var(--ds-color-hint-background-color);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-content__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-content__block {
  display: flex;
  flex-direction: column;
  gap: var(--ds-hint-content-gap-content);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-content--group-content {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-content--single-content {
  align-items: center;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
```
</details>

#### Hint footer `[54600:517]` — 1 вариантов
- **Content** (VARIANT): Default
- Прочие свойства: Step text#54600:1 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `56px`, растёт по контенту
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-hint-footer-pad-left) var(--ds-hint-footer-pad-right) var(--ds-hint-footer-pad-top) var(--ds-hint-footer-pad-bottom)`
    - промежуток между элементами: `var(--ds-hint-footer-gap)`
    - фон: `var(--ds-color-hint-background-color)`
- Модификаторы (что меняет каждый):
    - `--default`: color `var(--ds-color-expansion-panel-block-collaps-content-background)`
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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-hint-footer-gap);
  padding: var(--ds-hint-footer-pad-left) var(--ds-hint-footer-pad-right) var(--ds-hint-footer-pad-top) var(--ds-hint-footer-pad-bottom);
  background: var(--ds-color-hint-background-color);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-footer__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-hint-footer-text-color);
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-footer__button-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap);
}
.ds-hint-footer--default {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
```
</details>

#### Hint header `[54594:2219]` — 5 вариантов
- **Style** (VARIANT): Error, Neutral, Primary, Secondary, Warning
- Прочие свойства: Element left#54594:55 (BOOLEAN), Element right#54594:56 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `var(--ds-size-8x)`, растёт по контенту
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-hint-header-pad-left) var(--ds-hint-header-pad-right) var(--ds-hint-header-pad-top) var(--ds-hint-header-pad-bottom)`
    - промежуток между элементами: `var(--ds-hint-header-gap)`
    - фон: `var(--ds-color-hint-background-color)`
- Модификаторы (что меняет каждый):
    - `--error`: color `var(--ds-color-expansion-panel-block-collaps-content-background)`
    - `--neutral`: color `var(--ds-color-expansion-panel-block-collaps-content-background)`
    - `--primary`: color `var(--ds-color-expansion-panel-block-collaps-content-background)`
    - `--secondary`: color `var(--ds-color-expansion-panel-block-collaps-content-background)`
    - `--warning`: color `var(--ds-color-expansion-panel-block-collaps-content-background)`
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
  display: flex;
  flex-direction: row;
  gap: var(--ds-hint-header-gap);
  padding: var(--ds-hint-header-pad-left) var(--ds-hint-header-pad-right) var(--ds-hint-header-pad-top) var(--ds-hint-header-pad-bottom);
  background: var(--ds-color-hint-background-color);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-header__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-header__title {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-hint-header-text-color);
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-header--neutral {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-header--primary {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-header--secondary {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-header--warning {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-header--error {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
```
</details>

#### Icon group `[53467:1060]` — 2 вариантов
- **Size gap** (VARIANT): 2x, 4x
- Прочие свойства: Slot#60190:14 (SLOT)
- Размеры и параметры:
    - высота: минимум `var(--ds-size-5x)`, растёт по контенту
    - ширина: по контенту (hug)
    - промежуток между элементами: `var(--ds-icon-size-gap-group-2x)`
- Модификаторы (что меняет каждый):
    - `--4x`: промежуток между элементами `var(--ds-icon-size-gap-group-4x)`
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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-icon-size-gap-group-2x);
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
  gap: var(--ds-icon-size-gap-group-4x);
}
```
</details>

#### Icon size `[52927:6286]` — 12 вариантов
- **Size** (VARIANT): 16, 20, 24, 32, 36, 40
- **Content** (VARIANT): Icon, Img
- Прочие свойства: State#54063:8 (BOOLEAN), Instance#60108:34 (INSTANCE_SWAP)
- CSS не требуется: это **слот-контейнер** — пустая обёртка под вложенный компонент (иконку, ячейку). Оформление задаёт вложенный компонент, а размер — контент.

#### Icon size_Draft `[54063:12911]` — 6 вариантов
- **Size** (VARIANT): 16, 20, 24, 32, 36, 40
- CSS не требуется: это **слот-контейнер** — пустая обёртка под вложенный компонент (иконку, ячейку). Оформление задаёт вложенный компонент, а размер — контент.

#### Input `[52670:7573]` — 29 вариантов
- **Size** (VARIANT): M, S, XS
- **Variant** (VARIANT): Empty, No label up, Populated
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Прочие свойства: Input text#52678:0 (TEXT), Label text#52678:3 (TEXT), Support text#52678:6 (TEXT), Label#56934:32 (BOOLEAN), Element left#56934:282 (BOOLEAN), Element right#56934:407 (BOOLEAN), Support text#56934:532 (BOOLEAN), Input text#56968:66 (BOOLEAN), Hint text#57893:0 (BOOLEAN), Support#57893:30 (BOOLEAN), Hint text#57893:60 (TEXT)
- CSS: выверено вручную, см. `components/input.css` в разделе «Полные CSS-стили всех компонентов»

#### Input cell `[60229:74436]` — 8 вариантов
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Hover, Vocus+Value
- Размеры и параметры:
    - высота: минимум `var(--ds-size-9x)`, растёт по контенту
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom)`
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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-cell__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-input-input-label-text-color);
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
  gap: var(--ds-form-field-gap-input-frame);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
}
.ds-input-cell__support {
  display: flex;
  flex-direction: row;
}
.ds-input-cell:hover {
  background: var(--ds-palette-neutral-50);
  border: 1px solid var(--ds-color-table-cell-content-hover-border-color);
}
.ds-input-cell:focus-visible {
  color: var(--ds-color-input-filled-focus-border-color);
}
.ds-input-cell:disabled {
  color: var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-cell.ds-input-cell--disabled {
  color: var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-cell--disabled {
  pointer-events: none;
}
```
</details>

#### Input Datepicker `[58548:4764]` — 2 вариантов
- **Type** (VARIANT): Empty, Populated
- Размеры и параметры:
    - высота: минимум `48px`, растёт по контенту
    - ширина: по контенту (hug)
    - фон: `var(--ds-color-input-input-outlined-background)`
- Модификаторы (что меняет каждый):
    - `--empty`: color `var(--ds-color-input-input-label-text-color)`
    - `--populated`: color `var(--ds-color-input-input-label-text-color)`
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
  display: flex;
  flex-direction: column;
  background: var(--ds-color-input-input-outlined-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-datepicker__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-input-input-label-text-color);
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
  gap: var(--ds-form-field-gap-input-frame);
  padding: var(--ds-form-field-m-size-pad-input-left) var(--ds-form-field-m-size-pad-input-right) var(--ds-form-field-m-size-pad-input-top) var(--ds-form-field-m-size-pad-input-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
}
.ds-input-datepicker__support {
  display: flex;
  flex-direction: row;
}
.ds-input-datepicker--empty {
  color: var(--ds-color-input-input-label-text-color);
}
.ds-input-datepicker--populated {
  color: var(--ds-color-input-input-label-text-color);
}
```
</details>

#### Input for number `[53827:5155]` — 10 вариантов
- **Size** (VARIANT): Compact, Normal
- **State** (VARIANT): Default, Disable, Error, Focus, Hover
- Прочие свойства: Icon left#53827:2 (BOOLEAN), Icon right#53827:3 (BOOLEAN)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-input-number-input-pad-left) var(--ds-input-number-input-pad-right) var(--ds-input-number-input-pad-top) var(--ds-input-number-input-pad-bottom)`
    - промежуток между элементами: `var(--ds-input-number-input-gap)`
    - скругление: `var(--ds-size-2x)`
    - рамка: `1px solid var(--ds-color-input-number-input-default-border-color)`
    - фон: `var(--ds-color-input-number-input-background)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
- Состояния: `:disabled` (неактивно), `:hover` (наведение)
- Разметка:

```html
<div class="ds-input-for-number ds-input-for-number--disabled">
  <div class="ds-input-for-number__content"></div>
  <span class="ds-input-for-number__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-input-for-number__icon-size"></div>
  <div class="ds-input-for-number__info"></div>
  <span class="ds-input-for-number__label">Текст</span>
  <span class="ds-input-for-number__text">Текст</span>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Input for number [53827:5155] — 10 вариантов; оси: Size, State */
.ds-input-for-number {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-input-number-input-gap);
  border-radius: var(--ds-size-2x);
  padding: var(--ds-input-number-input-pad-left) var(--ds-input-number-input-pad-right) var(--ds-input-number-input-pad-top) var(--ds-input-number-input-pad-bottom);
  background: var(--ds-color-input-number-input-background);
  border: 1px solid var(--ds-color-input-number-input-default-border-color);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-for-number__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-input-filled-default-input-text-color);
  white-space: nowrap;
}
.ds-input-for-number__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-input-for-number__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-input-for-number__icon svg path {
  fill: currentColor;
}
.ds-input-for-number__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-input-for-number__info {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-input-input-outlined-background);
}
.ds-input-for-number__content {
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-content);
}
.ds-input-for-number__text {
  display: flex;
  flex-direction: row;
  gap: 3px;
}
.ds-input-for-number:hover {
  border: 1px solid var(--ds-color-input-number-input-hover-border-color);
}
.ds-input-for-number:disabled {
  border: 1px solid var(--ds-color-input-number-input-disable-border-color);
  color: var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-for-number.ds-input-for-number--disabled {
  border: 1px solid var(--ds-color-input-number-input-disable-border-color);
  color: var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-for-number--disabled {
  pointer-events: none;
}
```
</details>

#### Input number `[17193:84750]` — 29 вариантов
- **Size** (VARIANT): M, S, XS
- **Variant** (VARIANT): Empty, No label up, Populated
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Прочие свойства: Close icon#57962:0 (BOOLEAN)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - промежуток между элементами: `18px`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--empty`: align-items `center`, color `var(--ds-color-input-input-label-text-color)`, color `var(--ds-color-input-filled-disable-icon-color-disable)`
    - `--populated`: align-items `center`, color `var(--ds-color-input-input-label-text-color)`, color `var(--ds-color-input-filled-disable-icon-color-disable)`
    - `--xs`: ширина `var(--ds-size-6x)`, высота `var(--ds-size-6x)`
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
  gap: 18px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-number__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-input-input-label-text-color);
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
  gap: var(--ds-form-field-gap-input-frame);
  padding: var(--ds-form-field-m-size-pad-input-left) var(--ds-form-field-m-size-pad-input-right) var(--ds-form-field-m-size-pad-input-top) var(--ds-form-field-m-size-pad-input-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
}
.ds-input-number__support {
  display: flex;
  flex-direction: row;
}
.ds-input-number--xs .ds-input-number__icon {
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
}
.ds-input-number--populated {
  align-items: center;
  color: var(--ds-color-input-input-label-text-color);
}
.ds-input-number--empty {
  align-items: center;
  color: var(--ds-color-input-input-label-text-color);
}
.ds-input-number--populated:focus-visible {
  color: var(--ds-color-input-filled-focus-border-color);
}
.ds-input-number--populated:hover {
  background: var(--ds-color-input-filled-disable-input-background);
  border: 1px solid var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-number--empty:hover {
  background: var(--ds-color-input-filled-disable-input-background);
  border: 1px solid var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-number--populated:disabled {
  color: var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-number--populated.ds-input-number--disabled {
  color: var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-number--empty:disabled {
  color: var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-number--empty.ds-input-number--disabled {
  color: var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-number--disabled {
  pointer-events: none;
}
```
</details>

#### Input number_but icon `[56967:10506]` — 1 вариантов
- Прочие свойства: Support#57977:0 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `56px`, растёт по контенту
    - ширина: по контенту (hug)
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
  color: var(--ds-color-input-input-label-text-color);
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
  gap: var(--ds-button-icon-gap);
  padding: var(--ds-button-icon-m-size-pad-left) var(--ds-button-icon-m-size-pad-right) var(--ds-button-icon-m-size-pad-top) var(--ds-button-icon-m-size-pad-bottom);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-button-icon-neutral-filled-default-background);
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
  background: var(--ds-color-form-field-filled-default-support-text-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-input-input-label-text-color);
}
```
</details>

#### Input Timepicker `[58982:9561]` — 2 вариантов
- **Type** (VARIANT): Empty, Populated
- Размеры и параметры:
    - высота: минимум `48px`, растёт по контенту
    - ширина: по контенту (hug)
    - фон: `var(--ds-color-input-input-outlined-background)`
- Модификаторы (что меняет каждый):
    - `--empty`: color `var(--ds-color-input-input-label-text-color)`
    - `--populated`: color `var(--ds-color-input-input-label-text-color)`
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
  display: flex;
  flex-direction: column;
  background: var(--ds-color-input-input-outlined-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-timepicker__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-input-input-label-text-color);
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
  gap: var(--ds-form-field-gap-input-frame);
  padding: var(--ds-form-field-m-size-pad-input-left) var(--ds-form-field-m-size-pad-input-right) var(--ds-form-field-m-size-pad-input-top) var(--ds-form-field-m-size-pad-input-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
}
.ds-input-timepicker__support {
  display: flex;
  flex-direction: row;
}
.ds-input-timepicker--empty {
  color: var(--ds-color-input-input-label-text-color);
}
.ds-input-timepicker--populated {
  color: var(--ds-color-input-input-label-text-color);
}
```
</details>

#### List (Сontainer) `[57604:4762]` — 1 вариантов
- **Type** (VARIANT): Сontainer
- Прочие свойства: List container#57620:0 (SLOT), Scroll#57620:2 (BOOLEAN), Title#57623:6 (BOOLEAN), Divider header#57862:0 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `257px`, растёт по контенту
    - ширина: по контенту (hug)
    - внутренние отступы: `0 0 var(--ds-list-pad-top) var(--ds-list-pad-bottom)`
    - фон: `var(--ds-color-list-background)`
- Модификаторы (что меняет каждый):
    - `--container`: color `var(--ds-color-chips-input-default-action-text-color)`
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
  display: flex;
  flex-direction: column;
  padding: 0 0 var(--ds-list-pad-top) var(--ds-list-pad-bottom);
  background: var(--ds-color-list-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-list-container__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-list-item-gap);
  padding: var(--ds-list-item-pad-left) var(--ds-list-item-pad-right) var(--ds-list-item-pad-top) var(--ds-list-item-pad-bottom);
  background: var(--ds-color-list-item-default-background);
}
.ds-list-container__element-left {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-list-container__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-list-container__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-left) var(--ds-scroll-pad-right) var(--ds-scroll-pad-top) var(--ds-scroll-pad-bottom);
}
.ds-list-container--container {
  color: var(--ds-color-chips-input-default-action-text-color);
}
```
</details>

#### List item `[54101:7922]` — 8 вариантов
- **State** (VARIANT): Back selected, Default, Disable, Hover, Link, Negative, Press, Selected
- Прочие свойства: Element left#54167:1 (BOOLEAN), Element right#54167:6 (BOOLEAN), Label up#54741:15 (BOOLEAN), Label down#54741:30 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `68px`, растёт по контенту
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-list-item-pad-left) var(--ds-list-item-pad-right) var(--ds-list-item-pad-top) var(--ds-list-item-pad-bottom)`
    - промежуток между элементами: `var(--ds-list-item-gap)`
    - фон: `var(--ds-color-list-item-default-background)`
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
  display: flex;
  flex-direction: row;
  gap: var(--ds-list-item-gap);
  padding: var(--ds-list-item-pad-left) var(--ds-list-item-pad-right) var(--ds-list-item-pad-top) var(--ds-list-item-pad-bottom);
  background: var(--ds-color-list-item-default-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-list-item__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-list-item-text-label-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-list-item__text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-list-item-text-color);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-list-item__label-down {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-list-item-text-label-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-list-item__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-list-item__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-list-item:hover {
  background: var(--ds-color-list-item-hover-background);
}
.ds-list-item:active {
  background: var(--ds-color-list-item-press-background);
}
.ds-list-item:disabled {
  background: var(--ds-color-list-item-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-list-item.ds-list-item--disabled {
  background: var(--ds-color-list-item-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-list-item--disabled {
  pointer-events: none;
}
```
</details>

#### Logo iiko `[55332:19892]` — 4 вариантов
- **Size** (VARIANT): Full, Small
- **Style** (VARIANT): Inverse, Main
- Размеры и параметры:
    - высота: `72px` (фикс.)
    - ширина: по контенту (hug)
    - фон: `var(--ds-color-expansion-panel-block-collaps-content-background)`
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-logo-iiko__vector {
  height: 72px;
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-neutral-0);
}
```
</details>

#### Logo Syrve `[56079:771]` — 4 вариантов
- **Size** (VARIANT): Full, Small
- **Style** (VARIANT): Inverse, Main
- Размеры и параметры:
    - высота: `72px` (фикс.)
    - ширина: по контенту (hug)
    - фон: `var(--ds-color-expansion-panel-block-collaps-content-background)`
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-logo-syrve__vector {
  height: 70.9px;
  display: flex;
  flex-direction: row;
}
```
</details>

#### Menu (Container) `[54163:6705]` — 1 вариантов
- **Type** (VARIANT): Container
- Прочие свойства: Scroll#55632:0 (BOOLEAN), Menu container#56968:88 (SLOT), Title#57636:8 (BOOLEAN), Search#57750:7 (BOOLEAN), Button#57848:0 (BOOLEAN), Divider header#57848:2 (BOOLEAN), Divider footer#57848:4 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `418px`, растёт по контенту
    - ширина: по контенту (hug)
    - внутренние отступы: `0 0 var(--ds-menu-pad-top) var(--ds-menu-pad-bottom)`
    - промежуток между элементами: `var(--ds-menu-gap)`
    - скругление: `var(--ds-size-2x)`
    - фон: `var(--ds-color-menu-background)`
    - тень: `var(--ds-shadow-shadows-08-dp-s)`
- Модификаторы (что меняет каждый):
    - `--container`: color `var(--ds-color-chips-input-error-text-placeholder-color)`
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
  display: flex;
  flex-direction: column;
  gap: var(--ds-menu-gap);
  padding: 0 0 var(--ds-menu-pad-top) var(--ds-menu-pad-bottom);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-menu-background);
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-menu-container__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-text-placeholder-color);
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
  padding: var(--ds-size-4x) var(--ds-size-4x) 0 var(--ds-size-1x);
}
.ds-menu-container__title {
  display: flex;
  flex-direction: row;
  gap: var(--ds-menu-item-gap);
  padding: var(--ds-menu-item-pad-left) var(--ds-menu-item-pad-right) var(--ds-menu-item-pad-top) var(--ds-menu-item-pad-bottom);
  background: var(--ds-color-menu-item-default-background);
}
.ds-menu-container__element-left {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-menu-container__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-menu-container__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-left) var(--ds-scroll-pad-right) var(--ds-scroll-pad-top) var(--ds-scroll-pad-bottom);
}
.ds-menu-container__button-group {
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap);
  padding: var(--ds-button-group-margins-pad-left) var(--ds-button-group-margins-pad-right) var(--ds-button-group-margins-pad-top) var(--ds-button-group-margins-pad-bottom);
}
.ds-menu-container--container {
  color: var(--ds-color-chips-input-error-text-placeholder-color);
}
```
</details>

#### Menu item `[56090:1476]` — 7 вариантов
- **State** (VARIANT): Back selected, Default, Disable, Hover, Negative, Press, Selected
- Прочие свойства: Element left#54167:1 (BOOLEAN), Element right#54167:6 (BOOLEAN), Label up#54741:15 (BOOLEAN), Label down#54741:30 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `68px`, растёт по контенту
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-menu-item-pad-left) var(--ds-menu-item-pad-right) var(--ds-menu-item-pad-top) var(--ds-menu-item-pad-bottom)`
    - промежуток между элементами: `var(--ds-menu-item-gap)`
    - фон: `var(--ds-color-menu-item-default-background)`
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
  display: flex;
  flex-direction: row;
  gap: var(--ds-menu-item-gap);
  padding: var(--ds-menu-item-pad-left) var(--ds-menu-item-pad-right) var(--ds-menu-item-pad-top) var(--ds-menu-item-pad-bottom);
  background: var(--ds-color-menu-item-default-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-menu-item__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-menu-item-text-label-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-menu-item__text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-menu-item-text-color);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-menu-item__label-down {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-menu-item-text-label-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-menu-item__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-menu-item__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-menu-item:hover {
  background: var(--ds-color-menu-item-hover-background);
}
.ds-menu-item:active {
  background: var(--ds-color-menu-item-press-background);
}
.ds-menu-item:disabled {
  background: var(--ds-color-menu-item-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-menu-item.ds-menu-item--disabled {
  background: var(--ds-color-menu-item-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-menu-item--disabled {
  pointer-events: none;
}
```
</details>

#### Navigation Bar `[56564:1057]` — 2 вариантов
- **Dark** (VARIANT): Off, On
- Размеры и параметры:
    - высота: `var(--ds-size-5x)` (фикс.)
    - ширина: по контенту (hug)
- Разметка:

```html
<div class="ds-navigation-bar">
  <div class="ds-navigation-bar__pill"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Navigation Bar [56564:1057] — 2 вариантов; оси: Dark */
.ds-navigation-bar {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-navigation-bar__pill {
  height: var(--ds-size-1x);
  display: flex;
  flex-direction: row;
  border-radius: var(--ds-size-1x);
  background: var(--ds-color-chips-input-error-cursor-color);
}
```
</details>

#### Picture `[58937:3985]` — 1 вариантов
- Прочие свойства: Crop#58947:6 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `189px`, растёт по контенту
    - ширина: `446px` (фикс.)
    - внутренние отступы: `var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x)`
    - промежуток между элементами: `var(--ds-size-2-5x)`
    - скругление: `var(--ds-size-2x)`
    - фон: `var(--ds-color-brand-accent-super-lightest)`
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
  background: var(--ds-color-brand-accent-super-lightest);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-picture__crop {
  height: 173px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2-5x);
  border: 1px dashed var(--ds-color-stroke-hover);
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

#### Preview `[54063:12946]` — 3 вариантов
- **Property 1** (VARIANT): Default, Variant2, Variant3
- Размеры и параметры:
    - высота: `var(--ds-size-6x)` (фикс.)
    - ширина: `var(--ds-size-6x)` (фикс.)
    - внутренние отступы: `var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x)`
    - промежуток между элементами: `var(--ds-size-2-5x)`
- Разметка:

```html
<div class="ds-preview">
  <span class="ds-preview__icon"><!-- SVG-иконка ДС --></span>
  <div class="ds-preview__icon-size-draft"></div>
  <div class="ds-preview__info"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Preview [54063:12946] — 3 вариантов; оси: Property 1 */
.ds-preview {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-preview__icon {
  flex-shrink: 0;
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-preview__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-preview__icon svg path {
  fill: currentColor;
}
.ds-preview__icon-size-draft {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-preview__info {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
```
</details>

#### Radio button `[54095:4263]` — 14 вариантов
- **Variant** (VARIANT): Disable, Error, Normal
- **Type** (VARIANT): Deselected, Selected
- **State** (VARIANT): Default, Hover, Press
- CSS: выверено вручную, см. `components/selection.css` в разделе «Полные CSS-стили всех компонентов»

#### Radio button group `[54095:4392]` — 2 вариантов
- **Orientation** (VARIANT): Horizontal, Vertical
- Прочие свойства: Slot vertical#57257:12 (SLOT), Slot horizontal#57257:15 (SLOT), Support up#58199:15 (BOOLEAN), Support down#58199:18 (BOOLEAN)
- CSS: выверено вручную, см. `components/selection.css` в разделе «Полные CSS-стили всех компонентов»

#### Radio button label `[54095:4306]` — 6 вариантов
- **Variant** (VARIANT): Disable, Error, Normal
- **Type** (VARIANT): Deselected, Selected
- Прочие свойства: Icon left#17172:1340 (BOOLEAN), Icon right#17172:1349 (BOOLEAN), Label#54065:0 (BOOLEAN), Support#58197:0 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `var(--ds-size-5x)`, растёт по контенту
    - ширина: по контенту (hug)
    - промежуток между элементами: `var(--ds-radio-button-label-gap-support)`
- Модификаторы (что меняет каждый):
    - `--disable`: color `var(--ds-color-chips-input-disable-action-text-color)`
    - `--error`: color `var(--ds-color-chips-input-error-cursor-color)`
    - `--normal`: color `var(--ds-color-chips-input-error-cursor-color)`
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
  display: flex;
  flex-direction: column;
  gap: var(--ds-radio-button-label-gap-support);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-radio-button-label__label {
  font-size: var(--ds-typography-font-size-3-5x);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-line-height-5x);
  letter-spacing: 0.25px;
  color: var(--ds-color-chips-input-error-cursor-color);
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
  gap: var(--ds-radio-button-label-gap);
}
.ds-radio-button-label__left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-radio-button-label__цвет-и-палитра {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-radio-button-label-text-color);
  font-size: var(--ds-typography-font-size-3-5x);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-line-height-5x);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  padding: var(--ds-radio-button-label-pad-left-support-7x) 0 0 0;
}
.ds-radio-button-label__support-text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-radio-button-label-text-support-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-radio-button-label--normal.ds-radio-button-label--deselected {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-radio-button-label--normal.ds-radio-button-label--selected {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-radio-button-label--error.ds-radio-button-label--deselected {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-radio-button-label--error.ds-radio-button-label--selected {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-radio-button-label--disable.ds-radio-button-label--deselected {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-radio-button-label--disable.ds-radio-button-label--selected {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
```
</details>

#### Scroll `[53615:15339]` — 12 вариантов
- **Size** (VARIANT): M, S
- **Position** (VARIANT): First, Last, Middle
- **State** (VARIANT): Default, Hover
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-scroll-pad-left) var(--ds-scroll-pad-right) var(--ds-scroll-pad-top) var(--ds-scroll-pad-bottom)`
- Модификаторы (что меняет каждый):
    - `--first`
    - `--last`
    - `--middle`: align-items `center`
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
  padding: var(--ds-scroll-pad-left) var(--ds-scroll-pad-right) var(--ds-scroll-pad-top) var(--ds-scroll-pad-bottom);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-scroll__background {
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-scroll-default-background);
}
.ds-scroll__knob {
  height: var(--ds-size-2x);
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2-5x) var(--ds-size-2-5x) var(--ds-size-2-5x) var(--ds-size-2-5x);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-scroll-default-knob-color);
}
.ds-scroll--first:hover {
  background: var(--ds-color-chips-input-disable-border-color);
}
.ds-scroll--middle {
  align-items: center;
}
.ds-scroll--middle:hover {
  background: var(--ds-color-chips-input-disable-border-color);
}
.ds-scroll--last:hover {
  background: var(--ds-color-chips-input-disable-border-color);
}
```
</details>

#### Scroll tabs `[59032:1821]` — 4 вариантов
- **Orientation** (VARIANT): Left, Right
- **State** (VARIANT): Default, Hover
- Размеры и параметры:
    - высота: минимум `var(--ds-size-7x)`, растёт по контенту
    - ширина: по контенту (hug)
    - внутренние отступы: `48px 0 0 0`
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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: 48px 0 0 0;
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
  gap: var(--ds-button-icon-gap);
  padding: var(--ds-button-icon-s-size-pad-left) var(--ds-button-icon-s-size-pad-right) var(--ds-button-icon-s-size-pad-top) var(--ds-button-icon-s-size-pad-bottom);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-button-icon-neutral-filled-default-background);
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
- **Size** (VARIANT): M, S, XS
- **State** (VARIANT): Completed, Default, Disable, Focus, Focus+Value, Hover
- Прочие свойства: Left icon#54453:0 (BOOLEAN), Right icon#54459:3 (BOOLEAN)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-search-m-size-pad-left) var(--ds-search-m-size-pad-right) var(--ds-search-m-size-pad-top) var(--ds-search-m-size-pad-bottom)`
    - промежуток между элементами: `var(--ds-search-gap)`
    - скругление: `var(--ds-size-3x)`
    - рамка: `1px solid var(--ds-color-search-default-border-color)`
    - фон: `var(--ds-color-search-background)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--s`: внутренние отступы `var(--ds-search-s-size-pad-left) var(--ds-search-s-size-pad-right) var(--ds-search-s-size-pad-top) var(--ds-search-s-size-pad-bottom)`, ширина `var(--ds-size-5x)`, высота `var(--ds-size-5x)`
    - `--xs`: высота `var(--ds-size-9x)`, внутренние отступы `var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x)`, скругление `var(--ds-size-circular)`, ширина `var(--ds-size-5x)`
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
  gap: var(--ds-search-gap);
  padding: var(--ds-search-m-size-pad-left) var(--ds-search-m-size-pad-right) var(--ds-search-m-size-pad-top) var(--ds-search-m-size-pad-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-search-background);
  border: 1px solid var(--ds-color-search-default-border-color);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-search__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-error-text-placeholder-color);
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
  background: var(--ds-color-search-default-text-color);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-error-text-placeholder-color);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-search--s {
  padding: var(--ds-search-s-size-pad-left) var(--ds-search-s-size-pad-right) var(--ds-search-s-size-pad-top) var(--ds-search-s-size-pad-bottom);
}
.ds-search--s .ds-search__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-search--xs {
  height: var(--ds-size-9x);
  padding: var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x);
  border-radius: var(--ds-size-circular);
}
.ds-search--xs .ds-search__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-search:disabled {
  background: var(--ds-color-search-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-search.ds-search--disabled {
  background: var(--ds-color-search-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-search:focus-visible {
  color: var(--ds-color-search-focus-value-text-color);
}
.ds-search:hover {
  border: 1px solid var(--ds-color-search-hover-border-color);
}
.ds-search--disabled {
  pointer-events: none;
}
```
</details>

#### Select (Сontainer) `[57735:17612]` — 1 вариантов
- **Type** (VARIANT): Сontainer
- Прочие свойства: Scroll#55632:0 (BOOLEAN), Item container#56968:88 (SLOT), Title#57636:8 (BOOLEAN), Search#57740:3 (BOOLEAN), Button#57740:5 (BOOLEAN), Divider header#57862:2 (BOOLEAN), Divider footer#57862:4 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `406px`, растёт по контенту
    - ширина: по контенту (hug)
    - внутренние отступы: `0 0 var(--ds-menu-pad-top) var(--ds-menu-pad-bottom)`
    - промежуток между элементами: `var(--ds-space-0)`
    - скругление: `var(--ds-size-3x)`
    - фон: `var(--ds-color-menu-background)`
    - тень: `var(--ds-shadow-shadows-08-dp-s)`
- Модификаторы (что меняет каждый):
    - `--container`: color `var(--ds-color-chips-input-error-text-placeholder-color)`
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
  display: flex;
  flex-direction: column;
  gap: var(--ds-space-0);
  padding: 0 0 var(--ds-menu-pad-top) var(--ds-menu-pad-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-menu-background);
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-container__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-text-placeholder-color);
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
  padding: var(--ds-size-2x) var(--ds-size-2x) 0 0;
}
.ds-select-container__title {
  display: flex;
  flex-direction: row;
  gap: var(--ds-select-item-gap);
  padding: var(--ds-select-item-pad-left) var(--ds-select-item-pad-right) var(--ds-select-item-pad-top) var(--ds-select-item-pad-bottom);
  background: var(--ds-color-menu-item-default-background);
}
.ds-select-container__element-left {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-select-container__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-select-container__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-left) var(--ds-scroll-pad-right) var(--ds-scroll-pad-top) var(--ds-scroll-pad-bottom);
}
.ds-select-container__button-group {
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap);
  padding: var(--ds-button-group-margins-pad-left) var(--ds-button-group-margins-pad-right) var(--ds-button-group-margins-pad-top) var(--ds-button-group-margins-pad-bottom);
}
.ds-select-container__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-s-size-gap);
  padding: var(--ds-button-s-size-pad-left) var(--ds-button-s-size-pad-right) var(--ds-button-s-size-pad-top) var(--ds-button-s-size-pad-bottom);
  border-radius: var(--ds-size-2x);
  border: 1px solid var(--ds-color-button-neutral-outlined-default-border-color);
}
.ds-select-container--container {
  color: var(--ds-color-chips-input-error-text-placeholder-color);
}
```
</details>

#### Select cell `[60231:74976]` — 7 вариантов
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Value, Hover
- Размеры и параметры:
    - высота: минимум `var(--ds-size-9x)`, растёт по контенту
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom)`
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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-cell__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-form-field-gap-input-support);
}
.ds-select-cell__input-frame {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
}
.ds-select-cell__support {
  display: flex;
  flex-direction: row;
}
.ds-select-cell:hover {
  background: var(--ds-palette-neutral-50);
  border: 1px solid var(--ds-color-table-cell-content-hover-border-color);
}
.ds-select-cell:focus-visible {
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-select-cell:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-cell.ds-select-cell--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-cell--disabled {
  pointer-events: none;
}
```
</details>

#### Select form `[57862:17226]` — 22 вариантов
- **Size** (VARIANT): M, S, XS
- **Variant** (VARIANT): Empty, Populated
- **State** (VARIANT): Default, Disable, Error, Focus, Focus+Value, Hover
- Размеры и параметры:
    - ширина: по контенту (hug)
    - фон: `var(--ds-color-expansion-panel-block-collaps-content-background)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--empty`: color `var(--ds-color-chips-input-default-action-text-color)`, color `var(--ds-color-chips-input-disable-action-text-color)`
    - `--populated`: color `var(--ds-color-chips-input-default-action-text-color)`, color `var(--ds-color-chips-input-disable-action-text-color)`
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
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-form__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-form-field-gap-input-support);
}
.ds-select-form__input-frame {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame);
  padding: var(--ds-form-field-m-size-pad-input-left) var(--ds-form-field-m-size-pad-input-right) var(--ds-form-field-m-size-pad-input-top) var(--ds-form-field-m-size-pad-input-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
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
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-select-form--populated {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-select-form--empty:hover {
  background: var(--ds-color-chips-input-disable-background);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-form--populated:hover {
  background: var(--ds-color-chips-input-disable-background);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-form--populated:focus-visible {
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-select-form--empty:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-form--empty.ds-select-form--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-form--populated:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-form--populated.ds-select-form--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-form--disabled {
  pointer-events: none;
}
```
</details>

#### Select item `[57735:17872]` — 8 вариантов
- **State** (VARIANT): Back selected, Default, Disable, Error, Hover, Press, Selected
- **Subtitle** (VARIANT): False, True
- Прочие свойства: Element left#54167:1 (BOOLEAN), Element right#54167:6 (BOOLEAN), Label up#54741:15 (BOOLEAN), Label down#54741:30 (BOOLEAN), Left#60868:0 (BOOLEAN), Right#60868:1 (BOOLEAN)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-select-item-pad-left) var(--ds-select-item-pad-right) var(--ds-select-item-pad-top-sub) var(--ds-select-item-pad-bottom-sub)`
    - промежуток между элементами: `var(--ds-select-item-gap)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--false`: внутренние отступы `var(--ds-select-item-pad-left) var(--ds-select-item-pad-right) var(--ds-select-item-pad-top) var(--ds-select-item-pad-bottom)`, фон `var(--ds-color-select-item-default-background)`, color `var(--ds-color-chips-input-default-action-text-color)`, фон `var(--ds-color-select-item-disable-background)`
    - `--true`: align-items `center`, фон `var(--ds-color-select-item-default-background)`, color `var(--ds-color-chips-input-default-action-text-color)`
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
  display: flex;
  flex-direction: row;
  gap: var(--ds-select-item-gap);
  padding: var(--ds-select-item-pad-left) var(--ds-select-item-pad-right) var(--ds-select-item-pad-top-sub) var(--ds-select-item-pad-bottom-sub);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-item__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-select-item-text-label-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-select-item__subtitle {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-select-item-text-label-color);
  font-size: var(--ds-font-caption-m-10-normal-medium-size);
  line-height: var(--ds-font-caption-m-10-normal-medium-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-medium-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-medium-weight);
  text-transform: capitalize;
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-select-item__label-down {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-select-item-text-label-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-select-item__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-select-item--true {
  align-items: center;
  background: var(--ds-color-select-item-default-background);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-select-item--false {
  padding: var(--ds-select-item-pad-left) var(--ds-select-item-pad-right) var(--ds-select-item-pad-top) var(--ds-select-item-pad-bottom);
  background: var(--ds-color-select-item-default-background);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-select-item--false:hover {
  background: var(--ds-color-select-item-hover-background);
}
.ds-select-item--false:active {
  background: var(--ds-color-select-item-press-background);
}
.ds-select-item--false:disabled {
  background: var(--ds-color-select-item-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-item--false.ds-select-item--disabled {
  background: var(--ds-color-select-item-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-item--disabled {
  pointer-events: none;
}
```
</details>

#### Sidenav control `[55142:1734]` — 6 вариантов
- **Mode** (VARIANT): Collapsed, Expanded
- **State** (VARIANT): Default, Hover, Press
- Прочие свойства: Divider#55147:0 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `41px`, растёт по контенту
    - ширина: по контенту (hug)
    - промежуток между элементами: `var(--ds-sidenav-control-expanded-gap)`
- Модификаторы (что меняет каждый):
    - `--collapsed`: промежуток между элементами `var(--ds-sidenav-control-collapsed-gap)`
    - `--expanded`: фон `var(--ds-color-sidenav-control-background)`, color `var(--ds-color-expansion-panel-block-collaps-content-background)`
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
  gap: var(--ds-sidenav-control-expanded-gap);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-control__label {
  font-size: var(--ds-font-caption-m-10-normal-regular-size);
  line-height: var(--ds-font-caption-m-10-normal-regular-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-regular-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-regular-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  gap: var(--ds-sidenav-control-expanded-gap-content);
  padding: var(--ds-sidenav-control-pad-left) var(--ds-sidenav-control-pad-right) var(--ds-sidenav-control-pad-top) var(--ds-sidenav-control-pad-bottom);
  background: var(--ds-color-sidenav-control-background);
}
.ds-sidenav-control__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-sidenav-control__свернуть-меню {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-control-text-color);
  font-size: var(--ds-font-caption-m-10-normal-regular-size);
  line-height: var(--ds-font-caption-m-10-normal-regular-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-regular-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-regular-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-sidenav-control__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-sidenav-control--collapsed:hover {
  background: var(--ds-color-sidenav-control-background-hover);
}
.ds-sidenav-control--collapsed:active {
  background: var(--ds-palette-contrast-3-900);
}
.ds-sidenav-control--expanded {
  background: var(--ds-color-sidenav-control-background);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-sidenav-control--expanded:hover {
  background: var(--ds-color-sidenav-control-background-hover);
}
.ds-sidenav-control--expanded:active {
  background: var(--ds-color-sidenav-control-background-press);
}
.ds-sidenav-control--collapsed {
  gap: var(--ds-sidenav-control-collapsed-gap);
}
```
</details>

#### Sidenav Footer `[55111:1056]` — 3 вариантов
- **Type** (VARIANT): L1, L2
- **Mode** (VARIANT): Collapsed, Expanded
- Прочие свойства: Divider#55147:10 (BOOLEAN), Container#59128:17 (SLOT), Container#59128:25 (SLOT)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-sidenav-footer-l2-pad-left) var(--ds-sidenav-footer-l2-pad-right) var(--ds-sidenav-footer-l2-pad-top) var(--ds-sidenav-footer-l2-pad-bottom)`
    - промежуток между элементами: `var(--ds-sidenav-footer-l2-gap)`
- Модификаторы (что меняет каждый):
    - `--l1`: направление `column`, color `var(--ds-color-expansion-panel-block-collaps-content-background)`, color `var(--ds-color-chips-input-focus-border-color)`
    - `--l2`: направление `row`, align-items `center`, фон `var(--ds-color-sidenav-footer-l2-background)`, color `var(--ds-color-chips-input-default-action-text-color)`
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
  padding: var(--ds-sidenav-footer-l2-pad-left) var(--ds-sidenav-footer-l2-pad-right) var(--ds-sidenav-footer-l2-pad-top) var(--ds-sidenav-footer-l2-pad-bottom);
  gap: var(--ds-sidenav-footer-l2-gap);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-footer__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
  white-space: nowrap;
}
.ds-sidenav-footer__logo-iiko {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-sidenav-footer__vector {
  height: 9.8px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-footer-l2-logo);
}
.ds-sidenav-footer__divider {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-sidenav-footer__ver-7-8-6-29440 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-footer-l2-text-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-sidenav-footer--l2.ds-sidenav-footer--expanded {
  flex-direction: row;
  align-items: center;
  background: var(--ds-color-sidenav-footer-l2-background);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-sidenav-footer--l1.ds-sidenav-footer--expanded {
  flex-direction: column;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-sidenav-footer--l1.ds-sidenav-footer--collapsed {
  flex-direction: column;
  color: var(--ds-color-chips-input-focus-border-color);
}
```
</details>

#### Sidenav header `[55045:637]` — 3 вариантов
- **Type** (VARIANT): L1, L2
- **Mode** (VARIANT): Collapsed, Expanded
- Прочие свойства: Element right#55074:0 (BOOLEAN), Element left#55661:0 (BOOLEAN), Divider#59107:0 (BOOLEAN), Informer#59128:5 (BOOLEAN)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-sidenav-header-l1-expanded-pad-left) var(--ds-sidenav-header-l1-expanded-pad-right) var(--ds-sidenav-header-pad-top) var(--ds-sidenav-header-pad-bottom)`
    - промежуток между элементами: `var(--ds-sidenav-header-l1-expanded-gap)`
- Модификаторы (что меняет каждый):
    - `--l1`: направление `row`, фон `var(--ds-color-sidenav-header-l1-background)`, направление `column`, внутренние отступы `var(--ds-sidenav-header-l1-collapsed-pad-left) var(--ds-sidenav-header-l1-collapsed-pad-right) var(--ds-sidenav-header-pad-top) var(--ds-sidenav-header-pad-bottom)`
    - `--l2`: высота `48px`, направление `row`, промежуток между элементами `var(--ds-sidenav-header-l2-gap)`, внутренние отступы `var(--ds-sidenav-header-l2-pad-left) var(--ds-sidenav-header-l2-pad-right) var(--ds-sidenav-header-pad-top) var(--ds-sidenav-header-pad-bottom)`
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
  padding: var(--ds-sidenav-header-l1-expanded-pad-left) var(--ds-sidenav-header-l1-expanded-pad-right) var(--ds-sidenav-header-pad-top) var(--ds-sidenav-header-pad-bottom);
  gap: var(--ds-sidenav-header-l1-expanded-gap);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-header__label {
  font-size: var(--ds-font-body-m-16-normal-medium-size);
  line-height: var(--ds-font-body-m-16-normal-medium-line);
  letter-spacing: var(--ds-font-body-m-16-normal-medium-spacing);
  font-weight: var(--ds-font-body-m-16-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  background: var(--ds-color-sidenav-header-l1-expanded-logo);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-sidenav-header--l1.ds-sidenav-header--expanded {
  flex-direction: row;
  background: var(--ds-color-sidenav-header-l1-background);
}
.ds-sidenav-header--l2.ds-sidenav-header--expanded {
  height: 48px;
  flex-direction: row;
  gap: var(--ds-sidenav-header-l2-gap);
  padding: var(--ds-sidenav-header-l2-pad-left) var(--ds-sidenav-header-l2-pad-right) var(--ds-sidenav-header-pad-top) var(--ds-sidenav-header-pad-bottom);
  background: var(--ds-color-sidenav-header-l2-background);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-sidenav-header--l1.ds-sidenav-header--collapsed {
  flex-direction: column;
  padding: var(--ds-sidenav-header-l1-collapsed-pad-left) var(--ds-sidenav-header-l1-collapsed-pad-right) var(--ds-sidenav-header-pad-top) var(--ds-sidenav-header-pad-bottom);
  background: var(--ds-color-sidenav-header-l1-background);
}
```
</details>

#### Sidenav item `[55070:3734]` — 13 вариантов
- **Type** (VARIANT): L1, L2, L3
- **Mode** (VARIANT): Collapsed, Expanded
- **State** (VARIANT): Active, Default, Hover, Selected
- Прочие свойства: Element right#55070:0 (BOOLEAN), Badge#55083:0 (BOOLEAN), Divider#55219:13 (BOOLEAN), Indicator#59087:0 (BOOLEAN)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-sidenav-item-l3-pad-left) var(--ds-sidenav-item-l3-pad-right) var(--ds-sidenav-item-l3-pad-top) var(--ds-sidenav-item-l3-pad-bottom)`
    - промежуток между элементами: `var(--ds-sidenav-item-l3-gap)`
- Модификаторы (что меняет каждый):
    - `--l1`: направление `row`, align-items `center`, промежуток между элементами `var(--ds-sidenav-item-l1-gap-container)`, внутренние отступы `var(--ds-sidenav-item-l1-pad-left) var(--ds-sidenav-item-l1-pad-right) var(--ds-sidenav-item-l1-pad-top) var(--ds-sidenav-item-l1-pad-bottom)`
    - `--l2`: направление `column`, фон `var(--ds-color-sidenav-item-l2-background)`, color `var(--ds-color-chips-input-error-cursor-color)`
    - `--l3`: направление `row`, align-items `center`, фон `var(--ds-color-sidenav-item-l3-background)`, color `var(--ds-color-chips-input-error-cursor-color)`
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
  padding: var(--ds-sidenav-item-l3-pad-left) var(--ds-sidenav-item-l3-pad-right) var(--ds-sidenav-item-l3-pad-top) var(--ds-sidenav-item-l3-pad-bottom);
  gap: var(--ds-sidenav-item-l3-gap);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-item__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
  white-space: nowrap;
}
.ds-sidenav-item__l3 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-item-l3-text-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-sidenav-item--l3.ds-sidenav-item--expanded:hover {
  background: var(--ds-color-sidenav-item-l3-background-hover);
}
.ds-sidenav-item--l3.ds-sidenav-item--expanded {
  flex-direction: row;
  align-items: center;
  background: var(--ds-color-sidenav-item-l3-background);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-sidenav-item--l2.ds-sidenav-item--expanded {
  flex-direction: column;
  background: var(--ds-color-sidenav-item-l2-background);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-sidenav-item--l2.ds-sidenav-item--expanded:hover {
  background: var(--ds-color-sidenav-item-l2-background-hover);
}
.ds-sidenav-item--l1.ds-sidenav-item--expanded:hover {
  background: var(--ds-color-sidenav-item-l1-background-hover);
}
.ds-sidenav-item--l1.ds-sidenav-item--expanded {
  flex-direction: row;
  align-items: center;
  gap: var(--ds-sidenav-item-l1-gap-container);
  padding: var(--ds-sidenav-item-l1-pad-left) var(--ds-sidenav-item-l1-pad-right) var(--ds-sidenav-item-l1-pad-top) var(--ds-sidenav-item-l1-pad-bottom);
  background: var(--ds-color-sidenav-item-l1-background);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-sidenav-item--l1.ds-sidenav-item--collapsed:hover {
  background: var(--ds-color-sidenav-item-l1-background-hover);
}
.ds-sidenav-item--l1.ds-sidenav-item--collapsed {
  flex-direction: row;
  padding: var(--ds-sidenav-item-l1-pad-left) var(--ds-sidenav-item-l1-pad-right) var(--ds-sidenav-item-l1-pad-top) var(--ds-sidenav-item-l1-pad-bottom);
  background: var(--ds-color-sidenav-item-l1-background);
}
```
</details>

#### Sidenav View `[55074:393]` — 3 вариантов
- **Type** (VARIANT): L1, L2
- **State** (VARIANT): Collapsed, Expanded
- Прочие свойства: Scroll#55227:26 (BOOLEAN), Container#59137:0 (SLOT), Container#59137:4 (SLOT), Container#59137:8 (SLOT), Container#59137:12 (SLOT), Info#59160:3 (BOOLEAN), More Pannel#59214:0 (BOOLEAN)
- CSS не требуется: собственного оформления нет — компонент задаёт только структуру/поведение, вид приходит от вложенных элементов.

#### Slide toggle `[52887:2592]` — 6 вариантов
- **Active** (VARIANT): Off, On
- **State** (VARIANT): Default, Disable, Hover
- Прочие свойства: Title#53326:0 (BOOLEAN), Support down#58203:7 (BOOLEAN), Element right#58364:0 (BOOLEAN)
- CSS: выверено вручную, см. `components/toggle.css` в разделе «Полные CSS-стили всех компонентов»

#### Snackbar `[54373:10303]` — 4 вариантов
- **Type** (VARIANT): Complex, Single
- **Mode** (VARIANT): Dark, Light
- Прочие свойства: Element left#54373:16 (BOOLEAN), Element right#54426:0 (BOOLEAN), Progress#58768:0 (BOOLEAN), Content#58768:6 (BOOLEAN), Bottom actions#58768:12 (BOOLEAN)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - скругление: `var(--ds-size-2x)`
    - тень: `var(--ds-shadow-shadows-08-dp-s)`
- Модификаторы (что меняет каждый):
    - `--complex`: фон `var(--ds-color-snackbar-complex-dark-background)`, color `var(--ds-color-snackbar-dark-text-color)`, фон `var(--ds-color-snackbar-complex-light-background)`, color `var(--ds-color-snackbar-light-text-color)`
    - `--single`: фон `var(--ds-color-snackbar-complex-dark-background)`, color `var(--ds-color-snackbar-dark-text-color)`, фон `var(--ds-color-snackbar-complex-light-background)`, color `var(--ds-color-snackbar-light-text-color)`
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
  border-radius: var(--ds-size-2x);
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-snackbar__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-snackbar-dark-text-color);
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
  gap: var(--ds-snackbar-gap);
  padding: var(--ds-snackbar-pad-left) var(--ds-snackbar-pad-right) var(--ds-snackbar-pad-top) var(--ds-snackbar-pad-bottom);
}
.ds-snackbar__content {
  display: flex;
  flex-direction: row;
  gap: var(--ds-snackbar-gap);
  padding: var(--ds-space-0) var(--ds-space-0) var(--ds-space-0) var(--ds-space-0);
}
.ds-snackbar__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-s-size-gap);
  padding: var(--ds-button-s-size-pad-left) var(--ds-button-s-size-pad-right) var(--ds-button-s-size-pad-top) var(--ds-button-s-size-pad-bottom);
  border-radius: var(--ds-size-2x);
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
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-snackbar-progress-color);
}
.ds-snackbar--single.ds-snackbar--dark {
  background: var(--ds-color-snackbar-complex-dark-background);
  color: var(--ds-color-snackbar-dark-text-color);
}
.ds-snackbar--single.ds-snackbar--light {
  background: var(--ds-color-snackbar-complex-light-background);
  color: var(--ds-color-snackbar-light-text-color);
}
.ds-snackbar--complex.ds-snackbar--dark {
  background: var(--ds-color-snackbar-complex-dark-background);
  color: var(--ds-color-snackbar-dark-text-color);
}
.ds-snackbar--complex.ds-snackbar--light {
  background: var(--ds-color-snackbar-complex-light-background);
  color: var(--ds-color-snackbar-light-text-color);
}
```
</details>

#### State `[54063:12395]` — 2 вариантов
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
  background: var(--ds-color-chips-input-disable-border-color);
}
.ds-state:active {
  background: var(--ds-color-chips-input-default-border-color);
}
```
</details>

#### Status `[52928:6588]` — 18 вариантов
- **Style** (VARIANT): Accent, Contrast-1, Contrast-2, Contrast-3, Contrast-4, Negative, Neutral, Positive, Warning
- **Type** (VARIANT): Filled, Text
- Прочие свойства: Element left#17172:1340 (BOOLEAN), Element right#17172:1349 (BOOLEAN)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-status-pad-left) var(--ds-status-pad-right) var(--ds-status-pad-top) var(--ds-status-pad-bottom)`
    - промежуток между элементами: `var(--ds-status-gap)`
    - скругление: `var(--ds-size-2x)`
- Модификаторы (что меняет каждый):
    - `--accent`: фон `var(--ds-color-status-accent-filled-background)`, color `var(--ds-color-chips-input-focus-border-color)`, внутренние отступы `var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text)`
    - `--contrast-1`: фон `var(--ds-color-status-contrast-1-filled-background)`, color `var(--ds-palette-contrast-1-700)`, внутренние отступы `var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text)`
    - `--contrast-2`: фон `var(--ds-color-status-contrast-2-filled-background)`, color `var(--ds-palette-contrast-2-950)`, внутренние отступы `var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text)`
    - `--contrast-3`: фон `var(--ds-color-status-contrast-3-filled-background)`, color `var(--ds-palette-contrast-3-950)`, внутренние отступы `var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text)`
    - `--contrast-4`: фон `var(--ds-color-status-contrast-4-filled-background)`, color `var(--ds-palette-contrast-4-950)`, внутренние отступы `var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text)`
    - `--negative`: фон `var(--ds-color-status-negative-filled-background)`, color `var(--ds-color-chips-input-error-border-color)`, внутренние отступы `var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text)`
    - `--neutral`: фон `var(--ds-color-status-neutral-filled-background)`, color `var(--ds-color-chips-input-default-action-text-color)`, внутренние отступы `var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text)`
    - `--positive`: фон `var(--ds-color-status-positive-filled-background)`, color `var(--ds-color-snackbar-dark-complex-positive-icon-color)`, внутренние отступы `var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text)`
    - `--warning`: фон `var(--ds-color-status-warning-filled-background)`, color `var(--ds-color-input-filled-default-icon-color-warning)`, внутренние отступы `var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text)`
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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-status-gap);
  border-radius: var(--ds-size-2x);
  padding: var(--ds-status-pad-left) var(--ds-status-pad-right) var(--ds-status-pad-top) var(--ds-status-pad-bottom);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-status__label {
  font-size: var(--ds-font-caption-l-12-normal-medium-size);
  line-height: var(--ds-font-caption-l-12-normal-medium-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-medium-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-medium-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-status__content {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-status-neutral-filled-text-color);
  font-size: var(--ds-font-caption-l-12-normal-medium-size);
  line-height: var(--ds-font-caption-l-12-normal-medium-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-medium-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-medium-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-status__element-right {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-status--neutral.ds-status--filled {
  background: var(--ds-color-status-neutral-filled-background);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-status--accent.ds-status--filled {
  background: var(--ds-color-status-accent-filled-background);
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-status--positive.ds-status--filled {
  background: var(--ds-color-status-positive-filled-background);
  color: var(--ds-color-snackbar-dark-complex-positive-icon-color);
}
.ds-status--warning.ds-status--filled {
  background: var(--ds-color-status-warning-filled-background);
  color: var(--ds-color-input-filled-default-icon-color-warning);
}
.ds-status--negative.ds-status--filled {
  background: var(--ds-color-status-negative-filled-background);
  color: var(--ds-color-chips-input-error-border-color);
}
.ds-status--contrast-1.ds-status--filled {
  background: var(--ds-color-status-contrast-1-filled-background);
  color: var(--ds-palette-contrast-1-700);
}
.ds-status--contrast-2.ds-status--filled {
  background: var(--ds-color-status-contrast-2-filled-background);
  color: var(--ds-palette-contrast-2-950);
}
.ds-status--contrast-3.ds-status--filled {
  background: var(--ds-color-status-contrast-3-filled-background);
  color: var(--ds-palette-contrast-3-950);
}
.ds-status--contrast-4.ds-status--filled {
  background: var(--ds-color-status-contrast-4-filled-background);
  color: var(--ds-palette-contrast-4-950);
}
.ds-status--neutral.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-status--accent.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-status--positive.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-color-snackbar-dark-complex-positive-icon-color);
}
.ds-status--warning.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-color-input-filled-default-icon-color-warning);
}
.ds-status--negative.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-color-chips-input-error-border-color);
}
.ds-status--contrast-1.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-palette-contrast-1-700);
}
.ds-status--contrast-2.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-palette-contrast-2-950);
}
.ds-status--contrast-3.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-palette-contrast-3-950);
}
.ds-status--contrast-4.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-palette-contrast-4-950);
}
```
</details>

#### Status Bar `[56564:1236]` — 1 вариантов
- Размеры и параметры:
    - высота: `44px` (фикс.)
    - ширина: по контенту (hug)
- Разметка:

```html
<div class="ds-status-bar">
  <div class="ds-status-bar__8-00"></div>
  <span class="ds-status-bar__label">Текст</span>
  <div class="ds-status-bar__stats"></div>
  <div class="ds-status-bar__time"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Status Bar [56564:1236] — 1 вариантов; оси: — */
.ds-status-bar {
  height: 44px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-status-bar__label {
  font-size: 15px;
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: 18.28499984741211px;
  white-space: nowrap;
}
.ds-status-bar__time {
  height: 18px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-status-bar__8-00 {
  display: flex;
  flex-direction: row;
  font-size: 15px;
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: 18.28499984741211px;
}
.ds-status-bar__stats {
  height: var(--ds-size-3x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
```
</details>

#### Step `[54800:3659]` — 12 вариантов
- **Background** (VARIANT): Off, On
- **State** (VARIANT): Default, Disable, Error, Hover, Press, Selected
- Прочие свойства: Element left#55771:0 (BOOLEAN), Element right#55771:13 (BOOLEAN), Text#57060:20 (TEXT)
- CSS: выверено вручную, см. `components/stepper.css` в разделе «Полные CSS-стили всех компонентов»

#### Stepper button `[55419:7330]` — 12 вариантов
- **Type** (VARIANT): Filled, Outlined
- **Position** (VARIANT): First, Last, Middle
- **Content** (VARIANT): Icon, Text
- Прочие свойства: Text#55442:0 (BOOLEAN)
- CSS: выверено вручную, см. `components/stepper.css` в разделе «Полные CSS-стили всех компонентов»

#### Stepper line `[54689:3072]` — 4 вариантов
- **Step** (VARIANT): Off, On
- **Background** (VARIANT): Off, On
- Прочие свойства: Content step#59393:0 (SLOT), Content step background#59393:5 (SLOT), Content#59393:10 (SLOT), Content background#59393:15 (SLOT), Scroll left#59393:20 (BOOLEAN), Scroll right#59393:25 (BOOLEAN)
- CSS: выверено вручную, см. `components/stepper.css` в разделе «Полные CSS-стили всех компонентов»

#### Tab element `[54404:200]` — 16 вариантов
- **Lvl** (VARIANT): 1, 2
- **State** (VARIANT): Default, Disable, Hover, Press
- **Active** (VARIANT): Off, On
- Прочие свойства: Element left#54447:8 (BOOLEAN), Counter#54447:13 (BOOLEAN), Text#54876:8 (BOOLEAN), Element right#59422:0 (BOOLEAN)
- CSS: выверено вручную, см. `components/navigation.css` в разделе «Полные CSS-стили всех компонентов»

#### Table 2 lvl `[60074:44684]` — 2 вариантов
- **Type** (VARIANT): Table cell 2 lvl, Table row 2 lvl
- Прочие свойства: Header 2 lvl#60074:0 (SLOT)
- Размеры и параметры:
    - высота: минимум `72px`, растёт по контенту
    - ширина: по контенту (hug)
- Модификаторы (что меняет каждый):
    - `--table-cell-2-lvl`: направление `column`, рамка `1px solid var(--ds-color-stroke-default)`
    - `--table-row-2-lvl`: направление `row`, align-items `center`
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
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-2-lvl__header-row {
  display: flex;
  flex-direction: column;
  background: var(--ds-color-table-row-header-background-header);
  border: 1px solid var(--ds-color-stroke-default);
}
.ds-table-2-lvl--table-cell-2-lvl {
  flex-direction: column;
  border: 1px solid var(--ds-color-stroke-default);
}
.ds-table-2-lvl--table-row-2-lvl {
  flex-direction: row;
  align-items: center;
}
```
</details>

#### Table Chips Input `[60220:70978]` — 8 вариантов
- **Style** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Hover, Vocus+Value
- Размеры и параметры:
    - высота: минимум `var(--ds-size-6x)`, растёт по контенту
    - ширина: по контенту (hug)
    - фон: `var(--ds-color-input-input-outlined-background)`
- Модификаторы (что меняет каждый):
    - `--default`: color `var(--ds-color-chips-input-default-action-text-color)`
    - `--disable`: color `var(--ds-color-chips-input-disable-action-text-color)`
    - `--error`: color `var(--ds-color-chips-input-default-action-text-color)`
    - `--error-hover`: color `var(--ds-color-chips-input-default-action-text-color)`
    - `--focus`: color `var(--ds-color-chips-input-error-cursor-color)`
    - `--focus-placeholder`: color `var(--ds-color-chips-input-error-cursor-color)`
    - `--hover`: color `var(--ds-color-chips-input-default-action-text-color)`
    - `--vocus-value`: color `var(--ds-color-chips-input-error-cursor-color)`
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
  display: flex;
  flex-direction: column;
  background: var(--ds-color-input-input-outlined-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-chips-input__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-chips-input-gap-chips-input-frame);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-chips-input-default-background);
  border: 1px solid var(--ds-color-chips-input-default-border-color);
}
.ds-table-chips-input__support {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-1x);
}
.ds-table-chips-input--default {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-table-chips-input--hover {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-table-chips-input--focus {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-table-chips-input--focus-placeholder {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-table-chips-input--vocus-value {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-table-chips-input--error {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-table-chips-input--error-hover {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-table-chips-input--disable {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
```
</details>

#### Table content cell `[52954:1253]` — 8 вариантов
- **State** (VARIANT): Default, Disable, Edit, Error, Focus, Hover, Link, Null
- Размеры и параметры:
    - высота: минимум `var(--ds-size-9x)`, растёт по контенту
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom)`
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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-content-cell__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-tab-innactive-icon-color);
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
  gap: var(--ds-list-item-gap);
}
.ds-table-content-cell:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-table-content-cell.ds-table-content-cell--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-table-content-cell:hover {
  border: 1px solid var(--ds-color-table-cell-content-hover-border-color);
}
.ds-table-content-cell--disabled {
  pointer-events: none;
}
```
</details>

#### Table content row `[60105:56764]` — 5 вариантов
- **State** (VARIANT): Default, Disable, Hover, Selected, Zebra
- Прочие свойства: Content#60036:0 (SLOT)
- Размеры и параметры:
    - высота: минимум `var(--ds-size-9x)`, растёт по контенту
    - ширина: по контенту (hug)
    - рамка: `1px solid var(--ds-color-stroke-default)`
    - фон: `var(--ds-color-table-row-content-default-background)`
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
  display: flex;
  flex-direction: column;
  border: 1px solid var(--ds-color-stroke-default);
  background: var(--ds-color-table-row-content-default-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-content-row__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-tab-innactive-icon-color);
  white-space: nowrap;
}
.ds-table-content-row:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-table-content-row.ds-table-content-row--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-table-content-row:hover {
  background: var(--ds-color-table-row-content-hover-background);
}
.ds-table-content-row--disabled {
  pointer-events: none;
}
```
</details>

#### Table footer `[59207:20759]` — 1 вариантов
- **Type** (VARIANT): Default
- Прочие свойства: Slot Content#59249:0 (SLOT)
- Размеры и параметры:
    - высота: `65px` (фикс.)
    - ширина: по контенту (hug)
    - фон: `var(--ds-color-table-footer-background)`
    - тень: `var(--ds-shadow-shadows-01-dp-sl)`
- Модификаторы (что меняет каждый):
    - `--default`: color `var(--ds-color-tab-innactive-counter-text-color)`
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
  display: flex;
  flex-direction: column;
  background: var(--ds-color-table-footer-background);
  box-shadow: var(--ds-shadow-shadows-01-dp-sl);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-footer__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-tab-innactive-counter-text-color);
  white-space: nowrap;
}
.ds-table-footer__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-table-footer__content {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-table-footer-pad-left) var(--ds-table-footer-pad-right) var(--ds-table-footer-pad-top) var(--ds-table-footer-pad-bottom);
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-table-footer--default {
  color: var(--ds-color-tab-innactive-counter-text-color);
}
```
</details>

#### Table header cell `[60098:45424]` — 3 вариантов
- **State** (VARIANT): Default, Disable, Hover
- Размеры и параметры:
    - высота: минимум `var(--ds-size-9x)`, растёт по контенту
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom)`
    - промежуток между элементами: `var(--ds-size-2x)`
    - рамка: `1px solid var(--ds-color-stroke-default)`
    - фон: `var(--ds-color-table-cell-header-default-background)`
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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom);
  border: 1px solid var(--ds-color-stroke-default);
  background: var(--ds-color-table-cell-header-default-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-header-cell__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-tab-innactive-icon-color);
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
  gap: var(--ds-list-item-gap);
}
.ds-table-header-cell:hover {
  background: var(--ds-color-table-cell-header-hover-background);
}
.ds-table-header-cell:disabled {
  background: var(--ds-color-table-cell-header-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-table-header-cell.ds-table-header-cell--disabled {
  background: var(--ds-color-table-cell-header-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-table-header-cell--disabled {
  pointer-events: none;
}
```
</details>

#### Table header row `[53556:3571]` — 1 вариантов
- **State** (VARIANT): Default
- Прочие свойства: Header#59320:28 (SLOT)
- Размеры и параметры:
    - высота: минимум `var(--ds-size-9x)`, растёт по контенту
    - ширина: по контенту (hug)
    - рамка: `1px solid var(--ds-color-stroke-default)`
    - фон: `var(--ds-color-table-row-header-background-header)`
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
  display: flex;
  flex-direction: column;
  background: var(--ds-color-table-row-header-background-header);
  border: 1px solid var(--ds-color-stroke-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-header-row__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-tab-innactive-icon-color);
  white-space: nowrap;
}
```
</details>

#### Tabs `[54854:3052]` — 4 вариантов
- **Lvl** (VARIANT): 1, 2
- **Content** (VARIANT): Icon, Text
- Прочие свойства: Content text m#58420:0 (SLOT), Content icon m#58420:5 (SLOT), Content text s#58420:10 (SLOT), Content icon s#58420:15 (SLOT), Scroll left#59422:17 (BOOLEAN), Scroll right#59422:22 (BOOLEAN)
- CSS: выверено вручную, см. `components/navigation.css` в разделе «Полные CSS-стили всех компонентов»

#### Text UI `[57938:18290]` — 7 вариантов
- **State** (VARIANT): Default, Disable, Hover, Link, Negative, Press, Selected
- Прочие свойства: Element left#54167:1 (BOOLEAN), Element right#54167:6 (BOOLEAN), Label up#54741:15 (BOOLEAN), Label down#54741:30 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `52px`, растёт по контенту
    - ширина: по контенту (hug)
    - промежуток между элементами: `var(--ds-list-item-gap)`
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
  display: flex;
  flex-direction: row;
  gap: var(--ds-list-item-gap);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-text-ui__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-text-ui-text-label-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-text-ui__list-item {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-ui-text-color);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-text-ui__label-down {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-ui-text-label-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-text-ui__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-text-ui__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-text-ui:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-text-ui.ds-text-ui--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-text-ui--disabled {
  pointer-events: none;
}
```
</details>

#### Textarea `[57916:9023]` — 13 вариантов
- **Size** (VARIANT): M
- **Variant** (VARIANT): Empty, Populated
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Прочие свойства: Input text#52678:0 (TEXT), Label text#52678:3 (TEXT), Support text#52678:6 (TEXT), Label#56934:32 (BOOLEAN), Element left#56934:282 (BOOLEAN), Element right#56934:407 (BOOLEAN), Support text#56934:532 (BOOLEAN), Input text#56968:66 (BOOLEAN), Hint text#57893:0 (BOOLEAN), Support#57893:30 (BOOLEAN), Hint text#57893:60 (TEXT), Scroll#57994:0 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `96px`, растёт по контенту
    - ширина: по контенту (hug)
    - промежуток между элементами: `var(--ds-form-field-gap-input-support)`
- Модификаторы (что меняет каждый):
    - `--disabled`: pointer-events `none`
    - `--empty`: color `var(--ds-color-chips-input-disable-action-text-color)`, color `var(--ds-color-chips-input-default-action-text-color)`
    - `--populated`: color `var(--ds-color-chips-input-disable-action-text-color)`, color `var(--ds-color-chips-input-default-action-text-color)`
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
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-textarea__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-form-field-gap-input-frame);
  padding: var(--ds-form-field-m-size-pad-input-left) var(--ds-form-field-m-size-pad-input-right) var(--ds-form-field-pad-textarea-top) var(--ds-form-field-m-size-pad-input-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
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
  padding: var(--ds-scroll-pad-left) var(--ds-scroll-pad-right) var(--ds-scroll-pad-top) var(--ds-scroll-pad-bottom);
}
.ds-textarea__support {
  display: flex;
  flex-direction: row;
}
.ds-textarea__text {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: var(--ds-form-field-pad-support-left) var(--ds-form-field-pad-support-right) 0 0;
}
.ds-textarea__hint {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: var(--ds-form-field-pad-support-left) var(--ds-form-field-pad-support-right) 0 0;
}
.ds-textarea--populated:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-textarea--populated.ds-textarea--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-textarea--empty:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-textarea--empty.ds-textarea--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-textarea--populated:focus-visible {
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-textarea--populated {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-textarea--empty {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-textarea--populated:hover {
  background: var(--ds-color-chips-input-disable-background);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-textarea--empty:hover {
  background: var(--ds-color-chips-input-disable-background);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-textarea--disabled {
  pointer-events: none;
}
```
</details>

#### Timepicker `[58982:9858]` — 2 вариантов
- **Type** (VARIANT): Time grid, Time line
- Прочие свойства: Slot Time#58983:4 (SLOT), Control Panel#58983:7 (SLOT), Scroll#58983:10 (BOOLEAN)
- Размеры и параметры:
    - ширина: по контенту (hug)
    - внутренние отступы: `0 0 var(--ds-size-2x) var(--ds-size-2x)`
    - скругление: `var(--ds-size-3x)`
    - рамка: `1px solid var(--ds-color-stroke-default)`
    - фон: `var(--ds-color-brand-neutral-default)`
    - тень: `var(--ds-shadow-shadows-08-dp-s)`
- Модификаторы (что меняет каждый):
    - `--time-grid`: направление `column`, align-items `center`, color `var(--ds-color-chips-input-error-cursor-color)`
    - `--time-line`: направление `row`, color `var(--ds-color-chips-input-error-cursor-color)`
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
  display: flex;
  padding: 0 0 var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-brand-neutral-default);
  border: 1px solid var(--ds-color-stroke-default);
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-timepicker__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  padding: var(--ds-scroll-pad-left) var(--ds-scroll-pad-right) var(--ds-scroll-pad-top) var(--ds-scroll-pad-bottom);
}
.ds-timepicker--time-grid {
  flex-direction: column;
  align-items: center;
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-timepicker--time-line {
  flex-direction: row;
  color: var(--ds-color-chips-input-error-cursor-color);
}
```
</details>

#### Title variant `[17034:68611]` — 1 вариантов
- Прочие свойства: Name#53575:0 (BOOLEAN), Size#53575:1 (BOOLEAN), State#53575:2 (BOOLEAN), Style#53575:3 (BOOLEAN)
- Размеры и параметры:
    - высота: минимум `140px`, растёт по контенту
    - ширина: по контенту (hug)
- Разметка:

```html
<div class="ds-title-variant">
  <div class="ds-title-variant__body-4"></div>
  <div class="ds-title-variant__body-5"></div>
  <div class="ds-title-variant__body-6"></div>
  <div class="ds-title-variant__body-7"></div>
  <span class="ds-title-variant__label">Текст</span>
  <div class="ds-title-variant__mode"></div>
  <div class="ds-title-variant__size"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Title variant [17034:68611] — 1 вариантов; оси: — */
.ds-title-variant {
  min-height: 140px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-title-variant__label {
  font-size: var(--ds-font-header-s-20-normal-medium-size);
  line-height: var(--ds-font-header-s-20-normal-medium-line);
  letter-spacing: var(--ds-font-header-s-20-normal-medium-spacing);
  font-weight: var(--ds-font-header-s-20-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
  white-space: nowrap;
}
.ds-title-variant__size {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: 0 0 var(--ds-size-1x) var(--ds-size-1x);
}
.ds-title-variant__body-4 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-brand-neutral-super-dark);
  font-size: var(--ds-font-header-s-20-normal-medium-size);
  line-height: var(--ds-font-header-s-20-normal-medium-line);
  letter-spacing: var(--ds-font-header-s-20-normal-medium-spacing);
  font-weight: var(--ds-font-header-s-20-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-title-variant__body-6 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-brand-neutral-darker);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-title-variant__body-7 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-brand-neutral-darker);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-title-variant__body-5 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-brand-neutral-darker);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-title-variant__mode {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: 0 0 var(--ds-size-1x) var(--ds-size-1x);
}
```
</details>

#### Toggle buttons `[16992:8639]` — 5 вариантов
- **Type** (VARIANT): 1 button, 2 buttons, 3 buttons, 3 text, Text
- Размеры и параметры:
    - высота: минимум `var(--ds-size-9x)`, растёт по контенту
    - ширина: по контенту (hug)
    - внутренние отступы: `var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x)`
    - промежуток между элементами: `var(--ds-size-2-5x)`
    - скругление: `var(--ds-size-0-5x)`
- Модификаторы (что меняет каждый):
    - `--1-button`: фон `var(--ds-color-expansion-panel-block-collaps-content-background)`
    - `--2-buttons`: промежуток между элементами `var(--ds-size-1x)`, фон `var(--ds-color-surface-default)`
    - `--3-buttons`: промежуток между элементами `var(--ds-size-1x)`, фон `var(--ds-color-surface-default)`
    - `--3-text`: скругление `var(--ds-size-1x)`, рамка `1px solid var(--ds-color-stroke-default)`, color `var(--ds-color-chips-input-focus-border-color)`
    - `--text`: внутренние отступы `var(--ds-size-3x) var(--ds-size-3x) var(--ds-size-1-5x) var(--ds-size-1-5x)`, фон `var(--ds-color-expansion-panel-block-collaps-content-background)`, color `var(--ds-color-chips-input-focus-border-color)`, рамка `none`
- Разметка:

```html
<div class="ds-toggle-buttons ds-toggle-buttons--1-button">
  <span class="ds-toggle-buttons__icon"><!-- SVG-иконка ДС --></span>
  <span class="ds-toggle-buttons__label">Текст</span>
  <div class="ds-toggle-buttons__notifications"></div>
  <div class="ds-toggle-buttons__vector"></div>
</div>
```
<details><summary>CSS компонента</summary>

```css
/* Toggle buttons [16992:8639] — 5 вариантов; оси: Type */
.ds-toggle-buttons {
  min-height: var(--ds-size-9x);
  display: flex;
  flex-direction: row;
  padding: var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x);
  gap: var(--ds-size-2-5x);
  border-radius: var(--ds-size-0-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-toggle-buttons__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-focus-border-color);
  white-space: nowrap;
}
.ds-toggle-buttons__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-toggle-buttons__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-toggle-buttons__icon svg path {
  fill: currentColor;
}
.ds-toggle-buttons__notifications {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
}
.ds-toggle-buttons__vector {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
}
.ds-toggle-buttons--1-button {
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-toggle-buttons--text {
  padding: var(--ds-size-3x) var(--ds-size-3x) var(--ds-size-1-5x) var(--ds-size-1-5x);
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  color: var(--ds-color-chips-input-focus-border-color);
  border: none;
  box-shadow: none;
}
.ds-toggle-buttons--2-buttons {
  gap: var(--ds-size-1x);
  background: var(--ds-color-surface-default);
}
.ds-toggle-buttons--3-buttons {
  gap: var(--ds-size-1x);
  background: var(--ds-color-surface-default);
}
.ds-toggle-buttons--3-text {
  border-radius: var(--ds-size-1x);
  border: 1px solid var(--ds-color-stroke-default);
  color: var(--ds-color-chips-input-focus-border-color);
}
```
</details>

#### Tree `[59564:1473]` — 8 вариантов
- **Level** (VARIANT): 2, 3
- **Mode** (VARIANT): End, Middle
- **For icon** (VARIANT): Off, On
- Размеры и параметры:
    - высота: `44px` (фикс.)
    - ширина: по контенту (hug)
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
  padding: 11px 0 0 var(--ds-size-5x);
}
.ds-tree__separator-stroke {
  height: 100%;
  display: flex;
  flex-direction: row;
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
- **Mode** (VARIANT): End, End-long, Middle, Middle-long, Start
- Размеры и параметры:
    - высота: `44px` (фикс.)
    - ширина: по контенту (hug)
    - внутренние отступы: `11px 0 0 var(--ds-size-5x)`
    - промежуток между элементами: `var(--ds-size-2-5x)`
- Модификаторы (что меняет каждый):
    - `--end`: направление `row`, align-items `center`, направление `column`, внутренние отступы `11px 0 0 21px`
    - `--end-long`: направление `column`, внутренние отступы `11px 0 0 21px`
    - `--middle`: направление `row`, align-items `center`, внутренние отступы `11px 0 0 0`
    - `--middle-long`: направление `row`, align-items `center`, внутренние отступы `11px 0 0 0`
    - `--start`: направление `row`, align-items `center`, внутренние отступы `11px var(--ds-size-3x) 0 0`
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
  padding: 11px 0 0 var(--ds-size-5x);
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-tree-item__separator-stroke {
  height: 100%;
  display: flex;
  flex-direction: row;
}
.ds-tree-item--end {
  flex-direction: row;
  align-items: center;
}
.ds-tree-item--end-long {
  flex-direction: column;
  padding: 11px 0 0 21px;
}
.ds-tree-item--middle {
  flex-direction: row;
  align-items: center;
  padding: 11px 0 0 0;
}
.ds-tree-item--middle-long {
  flex-direction: row;
  align-items: center;
  padding: 11px 0 0 0;
}
.ds-tree-item--start {
  flex-direction: row;
  align-items: center;
  padding: 11px var(--ds-size-3x) 0 0;
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
| Button New | `.ds-button-new` · `--btn-36` `--btn-28` |
| Button toggle | `.ds-button-toggle` · `--s` `--xs` `--filled` `--outlined` `--outlined` `--filled` |
| Checkbox label | `.ds-checkbox-label` · `--normal` `--normal` `--normal` `--error` `--error` `--error` `--disable` `--disable` `--disable` |
| Chips | `.ds-chips` · `--s` `--s` `--outlined` `--outlined` `--outlined` `--outlined` `--outlined` `--outlined` `--filled` `--filled` `--filled` `--filled` `--filled` `--disabled` · :active, :disabled, :focus, :hover |
| Chips group | `.ds-chips-group` · `--s` |
| Chips Input | `.ds-chips-input` · `--s` `--s` `--disabled` · :disabled, :focus, :hover |
| Chips Input | `.ds-chips-input-2` · `--s` `--disabled` · :disabled, :focus, :hover |
| Chips input cell | `.ds-chips-input-cell` · `--disabled` · :disabled, :focus, :hover |
| Chrome Header desktop | `.ds-chrome-header-desktop` |
| Chrome Header mobile | `.ds-chrome-header-mobile` · `--off` `--on` |
| Content | `.ds-content` |
| Control arrow button | `.ds-control-arrow-button` · `--s` |
| Control group number button | `.ds-control-group-number-button` · `--xs` |
| Control number button | `.ds-control-number-button` · `--xs` `--xs` `--left` `--left` `--left` `--left` `--left` `--right` `--right` `--right` `--right` `--right` `--disabled` · :active, :disabled, :hover |
| Control Panel | `.ds-control-panel` · `--control` `--week` `--calendar` |
| Control Panel | `.ds-control-panel-2` · `--control` `--time` |
| Datepicker | `.ds-datepicker` · `--day` `--year` `--month` |
| Dialog content | `.ds-dialog-content` |
| Dialog footer | `.ds-dialog-footer` |
| Dialog header | `.ds-dialog-header` · `--text` `--picture` |
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
| Header components | `.ds-header-components` · `--default` `--mini` |
| Hint container | `.ds-hint-container` · `--up` `--down` `--right` `--left` `--default` |
| Hint content | `.ds-hint-content` · `--group-content` `--single-content` |
| Hint footer | `.ds-hint-footer` · `--default` |
| Hint header | `.ds-hint-header` · `--neutral` `--primary` `--secondary` `--warning` `--error` |
| Icon group | `.ds-icon-group` · `--4x` |
| Input cell | `.ds-input-cell` · `--disabled` · :disabled, :focus, :hover |
| Input Datepicker | `.ds-input-datepicker` · `--empty` `--populated` |
| Input for number | `.ds-input-for-number` · `--disabled` · :disabled, :hover |
| Input number | `.ds-input-number` · `--xs` `--populated` `--empty` `--populated` `--populated` `--empty` `--populated` `--populated` `--empty` `--empty` `--disabled` · :disabled, :focus, :hover |
| Input number_but icon | `.ds-input-number-but-icon` |
| Input Timepicker | `.ds-input-timepicker` · `--empty` `--populated` |
| List (Сontainer) | `.ds-list-container` · `--container` |
| List item | `.ds-list-item` · `--disabled` · :active, :disabled, :hover |
| Logo iiko | `.ds-logo-iiko` |
| Logo Syrve | `.ds-logo-syrve` |
| Menu (Container) | `.ds-menu-container` · `--container` |
| Menu item | `.ds-menu-item` · `--disabled` · :active, :disabled, :hover |
| Navigation Bar | `.ds-navigation-bar` |
| Picture | `.ds-picture` |
| Preview | `.ds-preview` |
| Radio button label | `.ds-radio-button-label` · `--normal` `--normal` `--error` `--error` `--disable` `--disable` |
| Scroll | `.ds-scroll` · `--first` `--middle` `--middle` `--last` · :hover |
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
| Status Bar | `.ds-status-bar` |
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
| Title variant | `.ds-title-variant` |
| Toggle buttons | `.ds-toggle-buttons` · `--1-button` `--text` `--2-buttons` `--3-buttons` `--3-text` |
| Tree | `.ds-tree` · `--2` `--2` `--3` `--3` `--2` `--2` `--3` `--3` |
| Tree item | `.ds-tree-item` · `--end` `--end-long` `--middle` `--middle-long` `--start` |

#### Ручные (выверенные по Figma) файлы — их классы

Эти компоненты сняты с узлов Figma поштучно и живут в отдельных файлах (`button, input, selection, selection-icons, badge, navigation, card, expansion, stepper, toggle`). Имена классов КОРОЧЕ имени компонента в Figma — писать в разметке именно их.

| Класс | Модификаторы | Элементы |
|---|---|---|
| `.ds-btn` | `--accent` `--disabled` `--filled` `--m` `--negative` `--neutral` `--outlined` `--positive` `--s` `--text` `--warning` `--xs` | `__icon` |
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
| `.ds-card` | `--filled` `--outlined` `--shadow` | `__content` `__footer` `__footer--right` `__header` `__label-down` `__label-up` `__title` |
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
<button class="ds-btn ds-btn--m ds-btn--accent ds-btn--filled" type="button"><span class="ds-btn__icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></span><span class="ds-btn__label">Create New</span></button>
```
```html
<button class="ds-btn ds-btn--m ds-btn--accent ds-btn--outlined" type="button"><span class="ds-btn__label">Next Step</span><span class="ds-btn__icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12,4l-1.41,1.41L16.17,11H4v2h12.17l-5.58,5.59L12,20l8,-8z"/></svg></span></button>
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
.ds-btn--xs .ds-btn__icon { font-size: 16px; }

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
  <div class="ds-input__frame"><span class="ds-input__icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M15.5,14h-0.79l-0.28,-0.27C15.41,12.59 16,11.11 16,9.5 16,5.91 13.09,3 9.5,3S3,5.91 3,9.5 5.91,16 9.5,16c1.61,0 3.09,-0.59 4.23,-1.57l0.27,0.28v0.79l5,4.99L20.49,19l-4.99,-5zM9.5,14C7.01,14 5,11.99 5,9.5S7.01,5 9.5,5 14,7.01 14,9.5 11.99,14 9.5,14z"/></svg></span>
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



### Иконки (SVG-вектор)

Иконки — **SVG-вектор 20×20** (Material Design глифы), **не шрифт** и не PNG. Вставляются внутрь `.ds-btn__icon` / `.ds-input__icon`. Цвет наследуется от `currentColor` (цвет текста компонента).

| Имя | SVG | Назначение |
|---|---|---|
| `add` | `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>` | Создать / добавить |
| `edit` | `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M3,17.25V21h3.75L17.81,9.94l-3.75,-3.75L3,17.25zM20.71,7.04c0.39,-0.39 0.39,-1.02 0,-1.41l-2.34,-2.34c-0.39,-0.39 -1.02,-0.39 -1.41,0l-1.83,1.83 3.75,3.75 1.83,-1.83z"/></svg>` | Редактировать |
| `delete` | `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M6,19c0,1.1 0.9,2 2,2h8c1.1,0 2,-0.9 2,-2V7H6v12zM19,4h-3.5l-1,-1h-5l-1,1H5v2h14V4z"/></svg>` | Удалить |
| `check` | `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M9,16.17L4.83,12l-1.42,1.41L9,19 21,7l-1.41,-1.41z"/></svg>` | Подтвердить / готово |
| `close` | `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M19,6.41L17.59,5 12,10.59 6.41,5 5,6.41 10.59,12 5,17.59 6.41,19 12,13.41 17.59,19 19,17.59 13.41,12z"/></svg>` | Закрыть |
| `search` | `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M15.5,14h-0.79l-0.28,-0.27C15.41,12.59 16,11.11 16,9.5 16,5.91 13.09,3 9.5,3S3,5.91 3,9.5 5.91,16 9.5,16c1.61,0 3.09,-0.59 4.23,-1.57l0.27,0.28v0.79l5,4.99L20.49,19l-4.99,-5zM9.5,14C7.01,14 5,11.99 5,9.5S7.01,5 9.5,5 14,7.01 14,9.5 11.99,14 9.5,14z"/></svg>` | Поиск |
| `arrow_forward` | `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12,4l-1.41,1.41L16.17,11H4v2h12.17l-5.58,5.59L12,20l8,-8z"/></svg>` | Навигация вперёд |
| `settings` | `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M19.14,12.94c0.04,-0.3 0.06,-0.61 0.06,-0.94c0,-0.32 -0.02,-0.64 -0.07,-0.94l2.03,-1.58c0.18,-0.14 0.23,-0.41 0.12,-0.61l-1.92,-3.32c-0.12,-0.22 -0.37,-0.29 -0.59,-0.22l-2.39,0.96c-0.5,-0.38 -1.03,-0.7 -1.62,-0.94L14.4,2.81c-0.04,-0.24 -0.24,-0.41 -0.48,-0.41h-3.84c-0.24,0 -0.43,0.17 -0.47,0.41L9.25,5.35C8.66,5.59 8.12,5.92 7.63,6.29L5.24,5.33c-0.22,-0.08 -0.47,0 -0.59,0.22L2.74,8.87C2.62,9.08 2.66,9.34 2.86,9.48l2.03,1.58C4.84,11.36 4.8,11.69 4.8,12s0.02,0.64 0.07,0.94l-2.03,1.58c-0.18,0.14 -0.23,0.41 -0.12,0.61l1.92,3.32c0.12,0.22 0.37,0.29 0.59,0.22l2.39,-0.96c0.5,0.38 1.03,0.7 1.62,0.94l0.36,2.54c0.05,0.24 0.24,0.41 0.48,0.41h3.84c0.24,0 0.44,-0.17 0.47,-0.41l0.36,-2.54c0.59,-0.24 1.13,-0.56 1.62,-0.94l2.39,0.96c0.22,0.08 0.47,0 0.59,-0.22l1.92,-3.32c0.12,-0.22 0.07,-0.47 -0.12,-0.61L19.14,12.94zM12,15.6c-1.98,0 -3.6,-1.62 -3.6,-3.6s1.62,-3.6 3.6,-3.6s3.6,1.62 3.6,3.6S13.98,15.6 12,15.6z"/></svg>` | Настройки |
| `more_vert` | `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,10c-1.1,0 -2,0.9 -2,2s0.9,2 2,2 2,-0.9 2,-2 -0.9,-2 -2,-2zM12,16c-1.1,0 -2,0.9 -2,2s0.9,2 2,2 2,-0.9 2,-2 -0.9,-2 -2,-2z"/></svg>` | Ещё (меню) |
| `refresh` | `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M17.65,6.35C16.2,4.9 14.21,4 12,4c-4.42,0 -7.99,3.58 -7.99,8s3.57,8 7.99,8c3.73,0 6.84,-2.55 7.73,-6h-2.08c-0.82,2.33 -3.04,4 -5.65,4 -3.31,0 -6,-2.69 -6,-6s2.69,-6 6,-6c1.66,0 3.14,0.69 4.22,1.78L13,11h7V4l-2.35,2.35z"/></svg>` | Обновить |

В прототипе: `<span class="ds-btn__icon"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></span>`

Если нужна иконка вне набора — взять из Material Icons (путь из глифа 24×24), обернуть в SVG так же.


## Полные CSS-стили всех компонентов

Весь CSS дизайн-системы в одном месте: токены задаются через `tokens.css`, стили компонентов — ниже. При сборке прототипа **скопируйте этот CSS в `<style>` своего прототипа** (или сохраните как `components.css` и подключите `<link rel="stylesheet" href="components.css">`).

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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Arrow list [55939:13307] — 13 вариантов; оси: Content */
.ds-arrow-list {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Arrow menu [56090:1628] — 13 вариантов; оси: Content */
.ds-arrow-menu {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Arrow select [57735:17989] — 13 вариантов; оси: Content */
.ds-arrow-select {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Autocomplete form [58107:8230] — 10 вариантов; оси: Variant, State */
.ds-autocomplete-form {
  min-height: 48px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-autocomplete-form__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-form-field-gap-input-support);
}
.ds-autocomplete-form__input-frame {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame);
  padding: var(--ds-form-field-m-size-pad-input-left) var(--ds-form-field-m-size-pad-input-right) var(--ds-form-field-m-size-pad-input-top) var(--ds-form-field-m-size-pad-input-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
}
.ds-autocomplete-form__support {
  display: flex;
  flex-direction: row;
}
.ds-autocomplete-form--empty {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-autocomplete-form--populated {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-autocomplete-form--empty:hover {
  background: var(--ds-color-chips-input-disable-background);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-autocomplete-form--populated:hover {
  background: var(--ds-color-chips-input-disable-background);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-autocomplete-form--populated:focus-visible {
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-autocomplete-form--empty:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-autocomplete-form--empty.ds-autocomplete-form--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-autocomplete-form--populated:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-autocomplete-form--populated.ds-autocomplete-form--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-autocomplete-form--disabled {
  pointer-events: none;
}

/* Backdrop [53623:806] — 1 вариантов; оси: Type */
/* height из макета Figma: 240px — размер примера, задавайте по месту */
.ds-backdrop {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-backdrop-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* Button New [16321:6498] — 2 вариантов; оси: Type */
.ds-button-new {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--ds-shadow-shadows-01-dp-sl);
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2-5x) var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-button-new__label {
  font-size: var(--ds-typography-font-size-3-5x);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: var(--ds-typography-line-height-4x);
  letter-spacing: 1.25px;
  color: var(--ds-palette-neutral-950);
  white-space: nowrap;
}
.ds-button-new--btn-36 {
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  color: var(--ds-palette-neutral-950);
}
.ds-button-new--btn-28 {
  padding: var(--ds-size-3x) var(--ds-size-3x) var(--ds-size-1-5x) var(--ds-size-1-5x);
  background: var(--ds-color-chips-input-focus-border-color);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Button toggle [17039:71554] — 12 вариантов; оси: Size, Type, Content */
.ds-button-toggle {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-toggle-gap);
  padding: var(--ds-button-toggle-pad-left) var(--ds-button-toggle-pad-right) var(--ds-button-toggle-pad-top) var(--ds-button-toggle-pad-bottom);
  border-radius: var(--ds-size-3x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-button-toggle__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-chips-input-focus-border-color);
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
  background: var(--ds-color-button-toggle-filled-background);
  color: var(--ds-color-chips-input-focus-border-color);
  border: none;
  box-shadow: none;
}
.ds-button-toggle--outlined.ds-button-toggle--text {
  background: var(--ds-color-button-toggle-outlined-background);
  border: 1px solid var(--ds-color-button-toggle-outlined-border-color);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
  box-shadow: none;
}
.ds-button-toggle--outlined.ds-button-toggle--icon {
  background: var(--ds-color-button-toggle-outlined-background);
  border: 1px solid var(--ds-color-button-toggle-outlined-border-color);
}
.ds-button-toggle--filled.ds-button-toggle--icon {
  background: var(--ds-color-button-toggle-filled-background);
}

/* Checkbox label [53810:880] — 9 вариантов; оси: Variant, Type */
.ds-checkbox-label {
  min-height: var(--ds-size-5x);
  display: flex;
  flex-direction: column;
  gap: var(--ds-checkbox-label-gap-support);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-checkbox-label__label {
  font-size: var(--ds-typography-font-size-3-5x);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-line-height-5x);
  letter-spacing: 0.25px;
  color: var(--ds-color-chips-input-error-cursor-color);
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
  gap: var(--ds-checkbox-label-gap);
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
  padding: var(--ds-checkbox-label-pad-left-support-7x) 0 0 0;
}
.ds-checkbox-label__support-text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-checkbox-label-text-support-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-checkbox-label--normal.ds-checkbox-label--deselected {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-checkbox-label--normal.ds-checkbox-label--selected {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-checkbox-label--normal.ds-checkbox-label--inderterminate {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-checkbox-label--error.ds-checkbox-label--deselected {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-checkbox-label--error.ds-checkbox-label--selected {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-checkbox-label--error.ds-checkbox-label--inderterminate {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-checkbox-label--disable.ds-checkbox-label--deselected {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-checkbox-label--disable.ds-checkbox-label--selected {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-checkbox-label--disable.ds-checkbox-label--inderterminate {
  color: var(--ds-color-chips-input-disable-action-text-color);
}

/* Chips [17168:83542] — 18 вариантов; оси: Size, Type, State */
.ds-chips {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: var(--ds-size-8x);
  padding: var(--ds-chips-m-size-pad-left) var(--ds-chips-m-size-pad-right) var(--ds-chips-m-size-pad-top) var(--ds-chips-m-size-pad-bottom);
  gap: var(--ds-chips-m-size-gap);
  border-radius: var(--ds-size-3x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-chips-text-color);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-chips__close {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-chips--s {
  gap: var(--ds-chips-s-size-gap);
  padding: var(--ds-chips-s-size-pad-left) var(--ds-chips-s-size-pad-right) var(--ds-chips-s-size-pad-top) var(--ds-chips-s-size-pad-bottom);
  border-radius: var(--ds-size-2x);
}
.ds-chips--s .ds-chips__icon {
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
}
.ds-chips--outlined {
  background: var(--ds-color-chips-outlined-default-background);
  border: 1px solid var(--ds-color-chips-outlined-default-border-color);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-chips--outlined:hover {
  background: var(--ds-color-chips-outlined-hover-background);
  border: 1px solid var(--ds-color-chips-outlined-hover-border-color);
}
.ds-chips--outlined:focus-visible {
  background: var(--ds-color-chips-outlined-focus-background);
}
.ds-chips--outlined:active {
  background: var(--ds-color-chips-outlined-press-background);
  border: 1px solid var(--ds-color-chips-outlined-press-border-color);
}
.ds-chips--outlined:disabled {
  background: var(--ds-color-chips-disable-background-outlined);
  border: 1px solid var(--ds-color-chips-disable-border-color);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips--outlined.ds-chips--disabled {
  background: var(--ds-color-chips-disable-background-outlined);
  border: 1px solid var(--ds-color-chips-disable-border-color);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips--filled {
  background: var(--ds-color-chips-filled-default-background);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-chips--filled:hover {
  background: var(--ds-color-chips-filled-hover-background);
}
.ds-chips--filled:active {
  background: var(--ds-color-chips-filled-press-background);
}
.ds-chips--filled:disabled {
  background: var(--ds-color-chips-disable-background-filled);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips--filled.ds-chips--disabled {
  background: var(--ds-color-chips-disable-background-filled);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips--disabled {
  pointer-events: none;
}

/* Chips group [55750:5485] — 2 вариантов; оси: Size */
.ds-chips-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-chips-gap-group);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips-group__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-chips-input-gap-chips-input-frame);
  padding: var(--ds-size-3x) var(--ds-size-3x) var(--ds-chips-input-m-size-pad-top) var(--ds-chips-input-m-size-pad-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-chips-input-default-background);
  border: 1px solid var(--ds-color-chips-input-default-border-color);
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
  padding: var(--ds-size-3x) var(--ds-size-3x) 0 0;
}
.ds-chips-input__hint {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: var(--ds-size-3x) var(--ds-size-3x) 0 0;
}
.ds-chips-input--s {
  gap: var(--ds-form-field-gap-input-support);
}
.ds-chips-input--s .ds-chips-input__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-chips-input:hover {
  background: var(--ds-color-chips-input-disable-background);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input:focus-visible {
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-chips-input:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input.ds-chips-input--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input--disabled {
  pointer-events: none;
}

/* Chips Input [61382:55775] — 16 вариантов; оси: Size, State; ДУБЛЬ имени — второй сет «Chips Input», различать по node_id */
.ds-chips-input-2 {
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips-input-2__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-form-field-gap-input-frame);
  padding: var(--ds-form-field-m-size-pad-input-left) var(--ds-form-field-m-size-pad-input-right) var(--ds-form-field-m-size-pad-input-top) var(--ds-form-field-m-size-pad-input-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
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
  gap: var(--ds-form-field-gap-input-support);
}
.ds-chips-input-2__text {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: var(--ds-form-field-pad-support-left) var(--ds-form-field-pad-support-right) 0 0;
}
.ds-chips-input-2__hint {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: var(--ds-form-field-pad-support-left) var(--ds-form-field-pad-support-right) 0 0;
}
.ds-chips-input-2--s .ds-chips-input-2__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-chips-input-2:hover {
  background: var(--ds-color-chips-input-disable-background);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input-2:focus-visible {
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-chips-input-2:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input-2.ds-chips-input-2--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input-2--disabled {
  pointer-events: none;
}

/* Chips input cell [60231:75648] — 8 вариантов; оси: State */
.ds-chips-input-cell {
  min-height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips-input-cell__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-chips-input-gap-chips-input-frame);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-chips-input-default-background);
  border: 1px solid var(--ds-color-chips-input-default-border-color);
}
.ds-chips-input-cell__support {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-1x);
}
.ds-chips-input-cell:hover {
  border: 1px solid var(--ds-color-table-cell-content-hover-border-color);
}
.ds-chips-input-cell:focus-visible {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-chips-input-cell:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input-cell.ds-chips-input-cell--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input-cell--disabled {
  pointer-events: none;
}

/* Chrome Header desktop [56564:1013] — 1 вариантов; оси: — */
.ds-chrome-header-desktop {
  min-height: 86px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chrome-header-desktop__label {
  font-size: var(--ds-typography-font-size-3x);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: 14.522727012634277px;
  white-space: nowrap;
}
.ds-chrome-header-desktop__top {
  height: 43px;
  display: flex;
  flex-direction: row;
}
.ds-chrome-header-desktop__tabs {
  display: flex;
  flex-direction: row;
}
.ds-chrome-header-desktop__application-controller {
  height: 43px;
  display: flex;
  flex-direction: row;
}
.ds-chrome-header-desktop__base {
  height: 43px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: var(--ds-size-3x) var(--ds-size-3x) var(--ds-size-1-5x) var(--ds-size-1-5x);
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-chrome-header-desktop__navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-3x);
}

/* Chrome Header mobile [56564:1062] — 2 вариантов; оси: Dark */
.ds-chrome-header-mobile {
  height: 66px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chrome-header-mobile__label {
  font-size: var(--ds-typography-font-size-2-5x);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: 13px;
  color: var(--ds-color-chips-input-error-cursor-color);
  white-space: nowrap;
}
.ds-chrome-header-mobile__home {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
}
.ds-chrome-header-mobile__spacer-8px {
  height: var(--ds-size-2x);
  display: flex;
  flex-direction: row;
}
.ds-chrome-header-mobile__address-field {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: 11px 11px 9px 9px;
  border-radius: 17px;
}
.ds-chrome-header-mobile__lock {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-chrome-header-mobile__address {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-chrome-header-mobile__spacer-16px {
  height: var(--ds-size-2x);
  display: flex;
  flex-direction: row;
}
.ds-chrome-header-mobile__tabs {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-chrome-header-mobile__rectangle {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  border: 1.5px solid var(--ds-color-chips-input-error-cursor-color);
}
.ds-chrome-header-mobile__1 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-chips-input-error-cursor-color);
  font-size: var(--ds-typography-font-size-2-5x);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: 11.71875px;
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-chrome-header-mobile__more {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-chrome-header-mobile__more-vert {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-chips-input-error-cursor-color);
}
.ds-chrome-header-mobile--off {
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-chrome-header-mobile--on {
  background: var(--ds-color-chips-input-error-cursor-color);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Content [57375:12699] — 1 вариантов; оси: — */
/* height из макета Figma: 750px — размер примера, задавайте по месту */
.ds-content {
  display: flex;
  flex-direction: column;
  gap: var(--ds-space-4x);
  padding: var(--ds-space-6x) var(--ds-space-6x) var(--ds-space-4x) var(--ds-space-6x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-content__label {
  font-size: var(--ds-font-header-s-20-normal-regular-size);
  line-height: var(--ds-font-header-s-20-normal-regular-line);
  letter-spacing: var(--ds-font-header-s-20-normal-regular-spacing);
  font-weight: var(--ds-font-header-s-20-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
  white-space: nowrap;
}

/* Control arrow button [52868:3935] — 3 вариантов; оси: Size */
.ds-control-arrow-button {
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

/* Control group number button [53828:5569] — 2 вариантов; оси: Size */
.ds-control-group-number-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-0-25x);
  border-radius: var(--ds-size-2x);
  background: var(--ds-palette-neutral-50);
  border: 1px solid var(--ds-color-stroke-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-control-group-number-button__icon {
  flex-shrink: 0;
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-control-group-number-button__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-control-group-number-button__icon svg path {
  fill: currentColor;
}
.ds-control-group-number-button__icon-size {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-control-group-number-button--xs .ds-control-group-number-button__icon {
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
}

/* Control number button [53829:6130] — 16 вариантов; оси: Size, Type, State */
.ds-control-number-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-icon-gap);
  padding: var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2-5x) var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-control-number-button__icon {
  flex-shrink: 0;
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-control-number-button__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-control-number-button__icon svg path {
  fill: currentColor;
}
.ds-control-number-button__icon-size {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-control-number-button__remove {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-control-number-button--xs {
  padding: var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x);
}
.ds-control-number-button--xs .ds-control-number-button__icon {
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
}
.ds-control-number-button--left {
  background: var(--ds-color-button-icon-neutral-filled-default-background);
}
.ds-control-number-button--left:hover {
  background: var(--ds-color-button-icon-neutral-filled-hover-background);
}
.ds-control-number-button--left:active {
  background: var(--ds-color-button-icon-neutral-filled-press-background);
}
.ds-control-number-button--left:disabled {
  background: var(--ds-color-button-icon-disable-background-filled);
}
.ds-control-number-button--left.ds-control-number-button--disabled {
  background: var(--ds-color-button-icon-disable-background-filled);
}
.ds-control-number-button--right {
  background: var(--ds-color-button-icon-neutral-filled-default-background);
}
.ds-control-number-button--right:hover {
  background: var(--ds-color-button-icon-neutral-filled-hover-background);
}
.ds-control-number-button--right:active {
  background: var(--ds-color-button-icon-neutral-filled-press-background);
}
.ds-control-number-button--right:disabled {
  background: var(--ds-color-button-icon-disable-background-filled);
}
.ds-control-number-button--right.ds-control-number-button--disabled {
  background: var(--ds-color-button-icon-disable-background-filled);
}
.ds-control-number-button--disabled {
  pointer-events: none;
}

/* Control Panel [58501:4052] — 3 вариантов; оси: Type */
.ds-control-panel {
  display: flex;
  padding: 0 0 var(--ds-size-1x) var(--ds-size-1x);
  gap: 74px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-control-panel__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  padding: var(--ds-size-2x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2-5x);
  border-radius: var(--ds-size-circular);
  background: var(--ds-color-brand-neutral-default);
}
.ds-control-panel__month {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-primary);
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-control-panel__button-icon-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap);
}
.ds-control-panel__button-icon {
  display: flex;
  flex-direction: row;
  gap: var(--ds-button-icon-gap);
  padding: var(--ds-button-icon-m-size-pad-left) var(--ds-button-icon-m-size-pad-right) var(--ds-button-icon-m-size-pad-top) var(--ds-button-icon-m-size-pad-bottom);
  border-radius: var(--ds-size-2x);
}
.ds-control-panel--control {
  flex-direction: row;
  align-items: center;
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-control-panel--week {
  flex-direction: row;
  padding: 0 0 var(--ds-size-0-5x) var(--ds-size-0-5x);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-control-panel--calendar {
  flex-direction: column;
  align-items: center;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  color: var(--ds-color-chips-input-error-cursor-color);
}

/* Control Panel [58982:11018] — 2 вариантов; оси: Type; ДУБЛЬ имени — второй сет «Control Panel», различать по node_id */
.ds-control-panel-2 {
  display: flex;
  flex-direction: row;
  padding: 0 0 var(--ds-size-1x) var(--ds-size-1x);
  gap: 74px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-control-panel-2__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  padding: var(--ds-size-2x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2-5x);
  border-radius: var(--ds-size-circular);
  background: var(--ds-color-brand-neutral-default);
}
.ds-control-panel-2__month {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-primary);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-control-panel-2__button-icon-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-icon-gap);
}
.ds-control-panel-2--control {
  align-items: center;
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-control-panel-2--time {
  padding: 0 0 var(--ds-size-0-5x) var(--ds-size-0-5x);
  color: var(--ds-color-chips-input-error-cursor-color);
}

/* Datepicker [58509:5439] — 3 вариантов; оси: Type */
.ds-datepicker {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-3x);
  border: 1px solid var(--ds-color-stroke-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-datepicker__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  padding: 0 0 var(--ds-size-1x) var(--ds-size-1x);
}
.ds-datepicker__elements {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2-5x);
  border-radius: var(--ds-size-circular);
  background: var(--ds-color-brand-neutral-default);
}
.ds-datepicker__button-icon-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap);
}
.ds-datepicker__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-datepicker__week-6 {
  height: 48px;
  display: flex;
  flex-direction: row;
}
.ds-datepicker--day {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-datepicker--year {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-datepicker--month {
  color: var(--ds-color-chips-input-error-cursor-color);
}

/* Dialog content [53535:1369] — 1 вариантов; оси: State */
.ds-dialog-content {
  min-height: 204px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-dialog-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-content__label {
  font-size: var(--ds-font-body-m-16-normal-medium-size);
  line-height: var(--ds-font-body-m-16-normal-medium-line);
  letter-spacing: var(--ds-font-body-m-16-normal-medium-spacing);
  font-weight: var(--ds-font-body-m-16-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  padding: var(--ds-scroll-pad-left) var(--ds-scroll-pad-right) var(--ds-scroll-pad-top) var(--ds-scroll-pad-bottom);
}
.ds-dialog-content__background {
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-scroll-default-background);
}

/* Dialog footer [53749:638] — 1 вариантов; оси: State */
.ds-dialog-footer {
  min-height: 69px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-dialog-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-footer__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-dialog-footer__action {
  height: 68px;
  display: flex;
  flex-direction: column;
  padding: var(--ds-dialog-footer-pad-left) var(--ds-dialog-footer-pad-right) var(--ds-dialog-footer-pad-top) var(--ds-dialog-footer-pad-bottom);
}
.ds-dialog-footer__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-m-size-gap);
  padding: var(--ds-button-m-size-pad-left) var(--ds-button-m-size-pad-right) var(--ds-button-m-size-pad-top) var(--ds-button-m-size-pad-bottom);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-button-accent-filled-default-background);
  box-shadow: var(--ds-shadow-shadows-01-dp-sl);
}

/* Dialog header [53535:1322] — 2 вариантов; оси: Type */
.ds-dialog-header {
  display: flex;
  flex-direction: column;
  background: var(--ds-color-dialog-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-header__label {
  font-size: var(--ds-font-header-s-20-normal-medium-size);
  line-height: var(--ds-font-header-s-20-normal-medium-line);
  letter-spacing: var(--ds-font-header-s-20-normal-medium-spacing);
  font-weight: var(--ds-font-header-s-20-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  gap: var(--ds-dialog-header-gap);
}
.ds-dialog-header__description {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-dialog-header-desc-color);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-dialog-header__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-dialog-header--text {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-dialog-header--picture {
  width: 500px;
}

/* Dialog view [52952:1285] — 1 вариантов; оси: State */
.ds-dialog-view {
  min-height: 364px;
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-dialog-background);
  box-shadow: var(--ds-shadow-shadows-12-dp-m);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-view__label {
  font-size: var(--ds-font-header-s-20-normal-medium-size);
  line-height: var(--ds-font-header-s-20-normal-medium-line);
  letter-spacing: var(--ds-font-header-s-20-normal-medium-spacing);
  font-weight: var(--ds-font-header-s-20-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  background: var(--ds-color-dialog-background);
}
.ds-dialog-view__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-dialog-view__content {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-dialog-background);
}
.ds-dialog-view__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-left) var(--ds-scroll-pad-right) var(--ds-scroll-pad-top) var(--ds-scroll-pad-bottom);
}
.ds-dialog-view__footer {
  display: flex;
  flex-direction: column;
  background: var(--ds-color-dialog-background);
}
.ds-dialog-view__action {
  height: 68px;
  display: flex;
  flex-direction: column;
  padding: var(--ds-dialog-footer-pad-left) var(--ds-dialog-footer-pad-right) var(--ds-dialog-footer-pad-top) var(--ds-dialog-footer-pad-bottom);
}

/* Element [54104:20956] — 9 вариантов; оси: Content */
.ds-element {
  display: flex;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-element--checkbox {
  flex-direction: row;
}
.ds-element--radio-button {
  flex-direction: row;
}
.ds-element--indicator {
  flex-direction: row;
}
.ds-element--slide-toggle {
  flex-direction: row;
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-element--counter {
  flex-direction: column;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Element Form Field [60231:76795] — 3 вариантов; оси: Variant */
.ds-element-form-field {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-form-field__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
  white-space: nowrap;
}
.ds-element-form-field__input-cell {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom);
}
.ds-element-form-field__input {
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support);
}
.ds-element-form-field--input-cell {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-element-form-field--select-cell {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-element-form-field--chips-input-cell {
  color: var(--ds-color-chips-input-default-action-text-color);
}

/* Element left [59851:11313] — 5 вариантов; оси: Style */
.ds-element-left {
  min-height: var(--ds-size-5x);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Element menu [56090:1611] — 8 вариантов; оси: Content */
.ds-element-menu {
  display: flex;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-menu__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-element-menu--checkbox {
  flex-direction: row;
}
.ds-element-menu--radio-button {
  flex-direction: row;
}
.ds-element-menu--indicator {
  flex-direction: row;
}
.ds-element-menu--slide-toggle {
  flex-direction: row;
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-element-menu--counter {
  flex-direction: column;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Element select [57735:17972] — 8 вариантов; оси: Content */
.ds-element-select {
  display: flex;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-select__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-element-select--checkbox {
  flex-direction: row;
}
.ds-element-select--radio-button {
  flex-direction: row;
}
.ds-element-select--indicator {
  flex-direction: row;
}
.ds-element-select--slide-toggle {
  flex-direction: row;
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-element-select--counter {
  flex-direction: column;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Element sidenav [56598:2991] — 2 вариантов; оси: Content */
.ds-element-sidenav {
  height: var(--ds-size-5x);
  display: flex;
  width: var(--ds-size-5x);
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
  color: var(--ds-color-chips-input-focus-border-color);
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
  background: var(--ds-color-sidenav-element-collaps-icon-background);
}
.ds-element-sidenav--avatar {
  flex-direction: column;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-0-5x) var(--ds-size-0-5x) 3px 3px;
  color: var(--ds-color-chips-input-focus-border-color);
}

/* Element step [55403:7248] — 12 вариантов; оси: Content, State */
.ds-element-step {
  min-height: var(--ds-size-6x);
  display: flex;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-step__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-element-step--icon-size {
  flex-direction: row;
  align-items: center;
}
.ds-element-step--counter {
  flex-direction: column;
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-element-step--counter:hover {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-element-step--counter:active {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-element-step--counter:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-element-step--counter.ds-element-step--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-element-step--disabled {
  pointer-events: none;
}

/* Elements [58501:4220] — 30 вариантов; оси: Type, Variant, State */
.ds-elements {
  display: flex;
  height: var(--ds-size-10x);
  border-radius: var(--ds-size-circular);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-elements__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
  white-space: nowrap;
}
.ds-elements__range-highlight-start {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-50);
}
.ds-elements__range-highlight-end {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-50);
}
.ds-elements__range-highlight-middle {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-10);
}
.ds-elements__date {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-primary);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-elements--cell.ds-elements--today:disabled {
  background: var(--ds-color-brand-neutral-lighter);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--cell.ds-elements--today.ds-elements--disabled {
  background: var(--ds-color-brand-neutral-lighter);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--cell.ds-elements--default:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--cell.ds-elements--default.ds-elements--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--cell.ds-elements--range:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--cell.ds-elements--range.ds-elements--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--cell.ds-elements--selected:active {
  background: var(--ds-color-button-accent-filled-press-background);
}
.ds-elements--cell.ds-elements--today:active {
  background: var(--ds-color-brand-neutral-lighter);
}
.ds-elements--cell.ds-elements--default:active {
  background: var(--ds-color-brand-neutral-lighter);
}
.ds-elements--cell.ds-elements--today:hover {
  background: var(--ds-color-brand-neutral-super-light);
}
.ds-elements--cell.ds-elements--default:hover {
  background: var(--ds-color-brand-neutral-super-light);
}
.ds-elements--cell.ds-elements--range {
  flex-direction: row;
  align-items: center;
  background: var(--ds-color-brand-neutral-default);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-elements--cell.ds-elements--selected {
  flex-direction: column;
  align-items: center;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-elements--year.ds-elements--selected {
  flex-direction: column;
  align-items: center;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-elements--cell.ds-elements--today {
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: var(--ds-color-brand-neutral-default);
  border: 1px solid var(--ds-color-stroke-hover);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-elements--cell.ds-elements--default {
  flex-direction: column;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2-5x) var(--ds-size-2-5x) var(--ds-size-2x) var(--ds-size-2x);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-elements--year.ds-elements--default:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--year.ds-elements--default.ds-elements--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--year.ds-elements--today:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--year.ds-elements--today.ds-elements--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--year.ds-elements--default:active {
  background: var(--ds-color-brand-neutral-lighter);
}
.ds-elements--year.ds-elements--today:active {
  background: var(--ds-color-brand-neutral-lighter);
}
.ds-elements--year.ds-elements--default:hover {
  background: var(--ds-color-brand-neutral-super-light);
}
.ds-elements--year.ds-elements--today:hover {
  background: var(--ds-color-brand-neutral-super-light);
}
.ds-elements--year.ds-elements--default {
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  background: var(--ds-color-brand-neutral-default);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-elements--year.ds-elements--today {
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  background: var(--ds-color-brand-neutral-default);
  border: 1px solid var(--ds-color-stroke-hover);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-elements--month.ds-elements--default {
  flex-direction: row;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2-5x);
  background: var(--ds-color-brand-neutral-default);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-elements--month.ds-elements--default:hover {
  background: var(--ds-color-brand-neutral-super-light);
}
.ds-elements--month.ds-elements--default:active {
  background: var(--ds-color-brand-neutral-lighter);
}
.ds-elements--month.ds-elements--default:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--month.ds-elements--default.ds-elements--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements--disabled {
  pointer-events: none;
}

/* Elements [58982:9594] — 8 вариантов; оси: Variant, State; ДУБЛЬ имени — второй сет «Elements», различать по node_id */
.ds-elements-2 {
  min-height: var(--ds-size-10x);
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
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
  white-space: nowrap;
}
.ds-elements-2__range-highlight-start {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-50);
}
.ds-elements-2__range-highlight-end {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-accent-50);
}
.ds-elements-2__date {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-circular);
  background: var(--ds-color-button-accent-filled-default-background);
}
.ds-elements-2--selected {
  flex-direction: column;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-elements-2--default:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements-2--default.ds-elements-2--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-elements-2--default:active {
  background: var(--ds-color-brand-neutral-lighter);
}
.ds-elements-2--default:hover {
  background: var(--ds-color-brand-neutral-super-light);
}
.ds-elements-2--default {
  flex-direction: row;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-circular);
  background: var(--ds-color-brand-neutral-default);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-elements-2--disabled {
  pointer-events: none;
}

/* Expansion content [61361:99603] — 2 вариантов; оси: Padding off/on */
.ds-expansion-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--ds-expansion-panel-content-pad-left) var(--ds-expansion-panel-content-pad-right) var(--ds-expansion-panel-content-pad-top) var(--ds-expansion-panel-content-pad-bottom);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-expansion-content__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-text-color);
  white-space: nowrap;
}
.ds-expansion-content--true {
  color: var(--ds-color-expansion-panel-block-collaps-content-text-color);
}
.ds-expansion-content--false {
  color: var(--ds-color-expansion-panel-block-collaps-content-text-color);
}

/* Expansion group panel [56155:1676] — 2 вариантов; оси: Type ? */
.ds-expansion-group-panel {
  display: flex;
  flex-direction: column;
  gap: var(--ds-expansion-panel-collaps-gap-group);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-expansion-group-panel__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-text-color);
  white-space: nowrap;
}
.ds-expansion-group-panel--collaps {
  color: var(--ds-color-expansion-panel-block-collaps-content-text-color);
}
.ds-expansion-group-panel--expand {
  color: var(--ds-color-expansion-panel-block-collaps-content-text-color);
}

/* Form field cell [60220:72732] — 1 вариантов; оси: Variant */
.ds-form-field-cell {
  min-height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-form-field-cell__table-content-chips-input {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-form-field-cell__table-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom);
}

/* Header components [53535:1244] — 2 вариантов; оси: Type */
.ds-header-components {
  display: flex;
  padding: var(--ds-size-6x) var(--ds-size-6x) var(--ds-size-6x) var(--ds-size-6x);
  border-radius: var(--ds-size-8x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-header-components__label {
  font-size: var(--ds-typography-font-size-6x);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: var(--ds-typography-line-height-6x);
  letter-spacing: 0.18000000715255737px;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
  white-space: nowrap;
}
.ds-header-components__container {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-6x);
  padding: var(--ds-size-6x) var(--ds-size-6x) var(--ds-size-6x) var(--ds-size-6x);
  border-radius: var(--ds-size-6x);
  background: var(--ds-palette-neutral-50);
}
.ds-header-components__badge-group {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2x);
}
.ds-header-components__frame-1 {
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2x);
}
.ds-header-components--default {
  flex-direction: column;
  background: var(--ds-color-brand-neutral-default);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-header-components--mini {
  flex-direction: row;
  gap: var(--ds-size-6x);
  border-radius: var(--ds-size-6x);
  background: var(--ds-palette-neutral-50);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Hint container [54593:479] — 10 вариантов; оси: Size, Orientation */
.ds-hint-container {
  display: flex;
  align-items: center;
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  border-radius: var(--ds-size-2x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-container__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-hint-background-color);
}
.ds-hint-container__header {
  display: flex;
  flex-direction: row;
  gap: var(--ds-hint-header-gap);
  padding: var(--ds-hint-header-pad-left) var(--ds-hint-header-pad-right) var(--ds-hint-header-pad-top) var(--ds-hint-header-pad-bottom);
  background: var(--ds-color-hint-background-color);
}
.ds-hint-container__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-hint-content-gap);
  padding: var(--ds-hint-content-pad-left) var(--ds-hint-content-pad-right) var(--ds-hint-content-pad-top) var(--ds-hint-content-pad-bottom);
  background: var(--ds-color-hint-background-color);
}
.ds-hint-container__footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-hint-footer-gap);
  padding: var(--ds-hint-footer-pad-left) var(--ds-hint-footer-pad-right) var(--ds-hint-footer-pad-top) var(--ds-hint-footer-pad-bottom);
  background: var(--ds-color-hint-background-color);
}
.ds-hint-container--up {
  flex-direction: column;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-container--down {
  flex-direction: column;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-container--right {
  flex-direction: row;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-container--left {
  flex-direction: row;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-container--default {
  flex-direction: column;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Hint content [54713:3325] — 2 вариантов; оси: Content */
.ds-hint-content {
  display: flex;
  flex-direction: row;
  gap: var(--ds-hint-content-gap);
  padding: var(--ds-hint-content-pad-left) var(--ds-hint-content-pad-right) var(--ds-hint-content-pad-top) var(--ds-hint-content-pad-bottom);
  background: var(--ds-color-hint-background-color);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-content__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-content__block {
  display: flex;
  flex-direction: column;
  gap: var(--ds-hint-content-gap-content);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-content--group-content {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-content--single-content {
  align-items: center;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Hint footer [54600:517] — 1 вариантов; оси: Content */
.ds-hint-footer {
  min-height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-hint-footer-gap);
  padding: var(--ds-hint-footer-pad-left) var(--ds-hint-footer-pad-right) var(--ds-hint-footer-pad-top) var(--ds-hint-footer-pad-bottom);
  background: var(--ds-color-hint-background-color);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-footer__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-hint-footer-text-color);
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-footer__button-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap);
}
.ds-hint-footer--default {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Hint header [54594:2219] — 5 вариантов; оси: Style */
.ds-hint-header {
  min-height: var(--ds-size-8x);
  display: flex;
  flex-direction: row;
  gap: var(--ds-hint-header-gap);
  padding: var(--ds-hint-header-pad-left) var(--ds-hint-header-pad-right) var(--ds-hint-header-pad-top) var(--ds-hint-header-pad-bottom);
  background: var(--ds-color-hint-background-color);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-header__label {
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-header__title {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-hint-header-text-color);
  font-size: var(--ds-font-body-s-14-normal-medium-size);
  line-height: var(--ds-font-body-s-14-normal-medium-line);
  letter-spacing: var(--ds-font-body-s-14-normal-medium-spacing);
  font-weight: var(--ds-font-body-s-14-normal-medium-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-header--neutral {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-header--primary {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-header--secondary {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-header--warning {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-hint-header--error {
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Icon group [53467:1060] — 2 вариантов; оси: Size gap */
.ds-icon-group {
  min-height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-icon-size-gap-group-2x);
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
  gap: var(--ds-icon-size-gap-group-4x);
}

/* Input cell [60229:74436] — 8 вариантов; оси: State */
.ds-input-cell {
  min-height: var(--ds-size-9x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-cell__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-input-input-label-text-color);
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
  gap: var(--ds-form-field-gap-input-frame);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
}
.ds-input-cell__support {
  display: flex;
  flex-direction: row;
}
.ds-input-cell:hover {
  background: var(--ds-palette-neutral-50);
  border: 1px solid var(--ds-color-table-cell-content-hover-border-color);
}
.ds-input-cell:focus-visible {
  color: var(--ds-color-input-filled-focus-border-color);
}
.ds-input-cell:disabled {
  color: var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-cell.ds-input-cell--disabled {
  color: var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-cell--disabled {
  pointer-events: none;
}

/* Input Datepicker [58548:4764] — 2 вариантов; оси: Type */
.ds-input-datepicker {
  min-height: 48px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-input-input-outlined-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-datepicker__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-input-input-label-text-color);
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
  gap: var(--ds-form-field-gap-input-frame);
  padding: var(--ds-form-field-m-size-pad-input-left) var(--ds-form-field-m-size-pad-input-right) var(--ds-form-field-m-size-pad-input-top) var(--ds-form-field-m-size-pad-input-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
}
.ds-input-datepicker__support {
  display: flex;
  flex-direction: row;
}
.ds-input-datepicker--empty {
  color: var(--ds-color-input-input-label-text-color);
}
.ds-input-datepicker--populated {
  color: var(--ds-color-input-input-label-text-color);
}

/* Input for number [53827:5155] — 10 вариантов; оси: Size, State */
.ds-input-for-number {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-input-number-input-gap);
  border-radius: var(--ds-size-2x);
  padding: var(--ds-input-number-input-pad-left) var(--ds-input-number-input-pad-right) var(--ds-input-number-input-pad-top) var(--ds-input-number-input-pad-bottom);
  background: var(--ds-color-input-number-input-background);
  border: 1px solid var(--ds-color-input-number-input-default-border-color);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-for-number__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-input-filled-default-input-text-color);
  white-space: nowrap;
}
.ds-input-for-number__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-input-for-number__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-input-for-number__icon svg path {
  fill: currentColor;
}
.ds-input-for-number__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-input-for-number__info {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-input-input-outlined-background);
}
.ds-input-for-number__content {
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-content);
}
.ds-input-for-number__text {
  display: flex;
  flex-direction: row;
  gap: 3px;
}
.ds-input-for-number:hover {
  border: 1px solid var(--ds-color-input-number-input-hover-border-color);
}
.ds-input-for-number:disabled {
  border: 1px solid var(--ds-color-input-number-input-disable-border-color);
  color: var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-for-number.ds-input-for-number--disabled {
  border: 1px solid var(--ds-color-input-number-input-disable-border-color);
  color: var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-for-number--disabled {
  pointer-events: none;
}

/* Input number [17193:84750] — 29 вариантов; оси: Size, Variant, State */
.ds-input-number {
  display: flex;
  flex-direction: row;
  gap: 18px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-number__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-input-input-label-text-color);
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
  gap: var(--ds-form-field-gap-input-frame);
  padding: var(--ds-form-field-m-size-pad-input-left) var(--ds-form-field-m-size-pad-input-right) var(--ds-form-field-m-size-pad-input-top) var(--ds-form-field-m-size-pad-input-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
}
.ds-input-number__support {
  display: flex;
  flex-direction: row;
}
.ds-input-number--xs .ds-input-number__icon {
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
}
.ds-input-number--populated {
  align-items: center;
  color: var(--ds-color-input-input-label-text-color);
}
.ds-input-number--empty {
  align-items: center;
  color: var(--ds-color-input-input-label-text-color);
}
.ds-input-number--populated:focus-visible {
  color: var(--ds-color-input-filled-focus-border-color);
}
.ds-input-number--populated:hover {
  background: var(--ds-color-input-filled-disable-input-background);
  border: 1px solid var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-number--empty:hover {
  background: var(--ds-color-input-filled-disable-input-background);
  border: 1px solid var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-number--populated:disabled {
  color: var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-number--populated.ds-input-number--disabled {
  color: var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-number--empty:disabled {
  color: var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-number--empty.ds-input-number--disabled {
  color: var(--ds-color-input-filled-disable-icon-color-disable);
}
.ds-input-number--disabled {
  pointer-events: none;
}

/* Input number_but icon [56967:10506] — 1 вариантов; оси: — */
.ds-input-number-but-icon {
  min-height: 56px;
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
  color: var(--ds-color-input-input-label-text-color);
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
  gap: var(--ds-button-icon-gap);
  padding: var(--ds-button-icon-m-size-pad-left) var(--ds-button-icon-m-size-pad-right) var(--ds-button-icon-m-size-pad-top) var(--ds-button-icon-m-size-pad-bottom);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-button-icon-neutral-filled-default-background);
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
  background: var(--ds-color-form-field-filled-default-support-text-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-input-input-label-text-color);
}

/* Input Timepicker [58982:9561] — 2 вариантов; оси: Type */
.ds-input-timepicker {
  min-height: 48px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-input-input-outlined-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-timepicker__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-input-input-label-text-color);
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
  gap: var(--ds-form-field-gap-input-frame);
  padding: var(--ds-form-field-m-size-pad-input-left) var(--ds-form-field-m-size-pad-input-right) var(--ds-form-field-m-size-pad-input-top) var(--ds-form-field-m-size-pad-input-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
}
.ds-input-timepicker__support {
  display: flex;
  flex-direction: row;
}
.ds-input-timepicker--empty {
  color: var(--ds-color-input-input-label-text-color);
}
.ds-input-timepicker--populated {
  color: var(--ds-color-input-input-label-text-color);
}

/* List (Сontainer) [57604:4762] — 1 вариантов; оси: Type */
.ds-list-container {
  min-height: 257px;
  display: flex;
  flex-direction: column;
  padding: 0 0 var(--ds-list-pad-top) var(--ds-list-pad-bottom);
  background: var(--ds-color-list-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-list-container__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-list-item-gap);
  padding: var(--ds-list-item-pad-left) var(--ds-list-item-pad-right) var(--ds-list-item-pad-top) var(--ds-list-item-pad-bottom);
  background: var(--ds-color-list-item-default-background);
}
.ds-list-container__element-left {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-list-container__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-list-container__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-left) var(--ds-scroll-pad-right) var(--ds-scroll-pad-top) var(--ds-scroll-pad-bottom);
}
.ds-list-container--container {
  color: var(--ds-color-chips-input-default-action-text-color);
}

/* List item [54101:7922] — 8 вариантов; оси: State */
.ds-list-item {
  min-height: 68px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-list-item-gap);
  padding: var(--ds-list-item-pad-left) var(--ds-list-item-pad-right) var(--ds-list-item-pad-top) var(--ds-list-item-pad-bottom);
  background: var(--ds-color-list-item-default-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-list-item__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-list-item-text-label-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-list-item__text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-list-item-text-color);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-list-item__label-down {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-list-item-text-label-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-list-item__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-list-item__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-list-item:hover {
  background: var(--ds-color-list-item-hover-background);
}
.ds-list-item:active {
  background: var(--ds-color-list-item-press-background);
}
.ds-list-item:disabled {
  background: var(--ds-color-list-item-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-list-item.ds-list-item--disabled {
  background: var(--ds-color-list-item-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-list-item--disabled {
  pointer-events: none;
}

/* Logo iiko [55332:19892] — 4 вариантов; оси: Size, Style */
.ds-logo-iiko {
  height: 72px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-logo-iiko__vector {
  height: 72px;
  display: flex;
  flex-direction: row;
  background: var(--ds-palette-neutral-0);
}

/* Logo Syrve [56079:771] — 4 вариантов; оси: Size, Style */
.ds-logo-syrve {
  height: 72px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-logo-syrve__vector {
  height: 70.9px;
  display: flex;
  flex-direction: row;
}

/* Menu (Container) [54163:6705] — 1 вариантов; оси: Type */
.ds-menu-container {
  min-height: 418px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-menu-gap);
  padding: 0 0 var(--ds-menu-pad-top) var(--ds-menu-pad-bottom);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-menu-background);
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-menu-container__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-text-placeholder-color);
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
  padding: var(--ds-size-4x) var(--ds-size-4x) 0 var(--ds-size-1x);
}
.ds-menu-container__title {
  display: flex;
  flex-direction: row;
  gap: var(--ds-menu-item-gap);
  padding: var(--ds-menu-item-pad-left) var(--ds-menu-item-pad-right) var(--ds-menu-item-pad-top) var(--ds-menu-item-pad-bottom);
  background: var(--ds-color-menu-item-default-background);
}
.ds-menu-container__element-left {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-menu-container__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-menu-container__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-left) var(--ds-scroll-pad-right) var(--ds-scroll-pad-top) var(--ds-scroll-pad-bottom);
}
.ds-menu-container__button-group {
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap);
  padding: var(--ds-button-group-margins-pad-left) var(--ds-button-group-margins-pad-right) var(--ds-button-group-margins-pad-top) var(--ds-button-group-margins-pad-bottom);
}
.ds-menu-container--container {
  color: var(--ds-color-chips-input-error-text-placeholder-color);
}

/* Menu item [56090:1476] — 7 вариантов; оси: State */
.ds-menu-item {
  min-height: 68px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-menu-item-gap);
  padding: var(--ds-menu-item-pad-left) var(--ds-menu-item-pad-right) var(--ds-menu-item-pad-top) var(--ds-menu-item-pad-bottom);
  background: var(--ds-color-menu-item-default-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-menu-item__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-menu-item-text-label-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-menu-item__text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-menu-item-text-color);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-menu-item__label-down {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-menu-item-text-label-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-menu-item__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-menu-item__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-menu-item:hover {
  background: var(--ds-color-menu-item-hover-background);
}
.ds-menu-item:active {
  background: var(--ds-color-menu-item-press-background);
}
.ds-menu-item:disabled {
  background: var(--ds-color-menu-item-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-menu-item.ds-menu-item--disabled {
  background: var(--ds-color-menu-item-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-menu-item--disabled {
  pointer-events: none;
}

/* Navigation Bar [56564:1057] — 2 вариантов; оси: Dark */
.ds-navigation-bar {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-navigation-bar__pill {
  height: var(--ds-size-1x);
  display: flex;
  flex-direction: row;
  border-radius: var(--ds-size-1x);
  background: var(--ds-color-chips-input-error-cursor-color);
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
  background: var(--ds-color-brand-accent-super-lightest);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-picture__crop {
  height: 173px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2-5x);
  border: 1px dashed var(--ds-color-stroke-hover);
}
.ds-picture__frame-1000001806 {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 440px;
}

/* Preview [54063:12946] — 3 вариантов; оси: Property 1 */
.ds-preview {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-preview__icon {
  flex-shrink: 0;
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-preview__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-preview__icon svg path {
  fill: currentColor;
}
.ds-preview__icon-size-draft {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-preview__info {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Radio button label [54095:4306] — 6 вариантов; оси: Variant, Type */
.ds-radio-button-label {
  min-height: var(--ds-size-5x);
  display: flex;
  flex-direction: column;
  gap: var(--ds-radio-button-label-gap-support);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-radio-button-label__label {
  font-size: var(--ds-typography-font-size-3-5x);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-line-height-5x);
  letter-spacing: 0.25px;
  color: var(--ds-color-chips-input-error-cursor-color);
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
  gap: var(--ds-radio-button-label-gap);
}
.ds-radio-button-label__left {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ds-radio-button-label__цвет-и-палитра {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-radio-button-label-text-color);
  font-size: var(--ds-typography-font-size-3-5x);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-line-height-5x);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  padding: var(--ds-radio-button-label-pad-left-support-7x) 0 0 0;
}
.ds-radio-button-label__support-text {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-radio-button-label-text-support-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-radio-button-label--normal.ds-radio-button-label--deselected {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-radio-button-label--normal.ds-radio-button-label--selected {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-radio-button-label--error.ds-radio-button-label--deselected {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-radio-button-label--error.ds-radio-button-label--selected {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-radio-button-label--disable.ds-radio-button-label--deselected {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-radio-button-label--disable.ds-radio-button-label--selected {
  color: var(--ds-color-chips-input-disable-action-text-color);
}

/* Scroll [53615:15339] — 12 вариантов; оси: Size, Position, State */
.ds-scroll {
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-left) var(--ds-scroll-pad-right) var(--ds-scroll-pad-top) var(--ds-scroll-pad-bottom);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-scroll__background {
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-scroll-default-background);
}
.ds-scroll__knob {
  height: var(--ds-size-2x);
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2-5x) var(--ds-size-2-5x) var(--ds-size-2-5x) var(--ds-size-2-5x);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-scroll-default-knob-color);
}
.ds-scroll--first:hover {
  background: var(--ds-color-chips-input-disable-border-color);
}
.ds-scroll--middle {
  align-items: center;
}
.ds-scroll--middle:hover {
  background: var(--ds-color-chips-input-disable-border-color);
}
.ds-scroll--last:hover {
  background: var(--ds-color-chips-input-disable-border-color);
}

/* Scroll tabs [59032:1821] — 4 вариантов; оси: Orientation, State */
.ds-scroll-tabs {
  min-height: var(--ds-size-7x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: 48px 0 0 0;
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
  gap: var(--ds-button-icon-gap);
  padding: var(--ds-button-icon-s-size-pad-left) var(--ds-button-icon-s-size-pad-right) var(--ds-button-icon-s-size-pad-top) var(--ds-button-icon-s-size-pad-bottom);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-button-icon-neutral-filled-default-background);
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
  gap: var(--ds-search-gap);
  padding: var(--ds-search-m-size-pad-left) var(--ds-search-m-size-pad-right) var(--ds-search-m-size-pad-top) var(--ds-search-m-size-pad-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-search-background);
  border: 1px solid var(--ds-color-search-default-border-color);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-search__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-error-text-placeholder-color);
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
  background: var(--ds-color-search-default-text-color);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-error-text-placeholder-color);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-search--s {
  padding: var(--ds-search-s-size-pad-left) var(--ds-search-s-size-pad-right) var(--ds-search-s-size-pad-top) var(--ds-search-s-size-pad-bottom);
}
.ds-search--s .ds-search__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-search--xs {
  height: var(--ds-size-9x);
  padding: var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x);
  border-radius: var(--ds-size-circular);
}
.ds-search--xs .ds-search__icon {
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
}
.ds-search:disabled {
  background: var(--ds-color-search-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-search.ds-search--disabled {
  background: var(--ds-color-search-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-search:focus-visible {
  color: var(--ds-color-search-focus-value-text-color);
}
.ds-search:hover {
  border: 1px solid var(--ds-color-search-hover-border-color);
}
.ds-search--disabled {
  pointer-events: none;
}

/* Select (Сontainer) [57735:17612] — 1 вариантов; оси: Type */
.ds-select-container {
  min-height: 406px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-space-0);
  padding: 0 0 var(--ds-menu-pad-top) var(--ds-menu-pad-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-menu-background);
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-container__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-text-placeholder-color);
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
  padding: var(--ds-size-2x) var(--ds-size-2x) 0 0;
}
.ds-select-container__title {
  display: flex;
  flex-direction: row;
  gap: var(--ds-select-item-gap);
  padding: var(--ds-select-item-pad-left) var(--ds-select-item-pad-right) var(--ds-select-item-pad-top) var(--ds-select-item-pad-bottom);
  background: var(--ds-color-menu-item-default-background);
}
.ds-select-container__element-left {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-select-container__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-select-container__scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--ds-scroll-pad-left) var(--ds-scroll-pad-right) var(--ds-scroll-pad-top) var(--ds-scroll-pad-bottom);
}
.ds-select-container__button-group {
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-group-gap);
  padding: var(--ds-button-group-margins-pad-left) var(--ds-button-group-margins-pad-right) var(--ds-button-group-margins-pad-top) var(--ds-button-group-margins-pad-bottom);
}
.ds-select-container__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-s-size-gap);
  padding: var(--ds-button-s-size-pad-left) var(--ds-button-s-size-pad-right) var(--ds-button-s-size-pad-top) var(--ds-button-s-size-pad-bottom);
  border-radius: var(--ds-size-2x);
  border: 1px solid var(--ds-color-button-neutral-outlined-default-border-color);
}
.ds-select-container--container {
  color: var(--ds-color-chips-input-error-text-placeholder-color);
}

/* Select cell [60231:74976] — 7 вариантов; оси: State */
.ds-select-cell {
  min-height: var(--ds-size-9x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-cell__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-form-field-gap-input-support);
}
.ds-select-cell__input-frame {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
}
.ds-select-cell__support {
  display: flex;
  flex-direction: row;
}
.ds-select-cell:hover {
  background: var(--ds-palette-neutral-50);
  border: 1px solid var(--ds-color-table-cell-content-hover-border-color);
}
.ds-select-cell:focus-visible {
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-select-cell:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-cell.ds-select-cell--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-cell--disabled {
  pointer-events: none;
}

/* Select form [57862:17226] — 22 вариантов; оси: Size, Variant, State */
.ds-select-form {
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-form__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-form-field-gap-input-support);
}
.ds-select-form__input-frame {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-form-field-gap-input-frame);
  padding: var(--ds-form-field-m-size-pad-input-left) var(--ds-form-field-m-size-pad-input-right) var(--ds-form-field-m-size-pad-input-top) var(--ds-form-field-m-size-pad-input-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
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
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-select-form--populated {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-select-form--empty:hover {
  background: var(--ds-color-chips-input-disable-background);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-form--populated:hover {
  background: var(--ds-color-chips-input-disable-background);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-form--populated:focus-visible {
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-select-form--empty:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-form--empty.ds-select-form--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-form--populated:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-form--populated.ds-select-form--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-form--disabled {
  pointer-events: none;
}

/* Select item [57735:17872] — 8 вариантов; оси: State, Subtitle */
.ds-select-item {
  display: flex;
  flex-direction: row;
  gap: var(--ds-select-item-gap);
  padding: var(--ds-select-item-pad-left) var(--ds-select-item-pad-right) var(--ds-select-item-pad-top-sub) var(--ds-select-item-pad-bottom-sub);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-item__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-select-item-text-label-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-select-item__subtitle {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-select-item-text-label-color);
  font-size: var(--ds-font-caption-m-10-normal-medium-size);
  line-height: var(--ds-font-caption-m-10-normal-medium-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-medium-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-medium-weight);
  text-transform: capitalize;
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-select-item__label-down {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-select-item-text-label-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-select-item__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-select-item--true {
  align-items: center;
  background: var(--ds-color-select-item-default-background);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-select-item--false {
  padding: var(--ds-select-item-pad-left) var(--ds-select-item-pad-right) var(--ds-select-item-pad-top) var(--ds-select-item-pad-bottom);
  background: var(--ds-color-select-item-default-background);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-select-item--false:hover {
  background: var(--ds-color-select-item-hover-background);
}
.ds-select-item--false:active {
  background: var(--ds-color-select-item-press-background);
}
.ds-select-item--false:disabled {
  background: var(--ds-color-select-item-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-item--false.ds-select-item--disabled {
  background: var(--ds-color-select-item-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-select-item--disabled {
  pointer-events: none;
}

/* Sidenav control [55142:1734] — 6 вариантов; оси: Mode, State */
.ds-sidenav-control {
  min-height: 41px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-sidenav-control-expanded-gap);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-control__label {
  font-size: var(--ds-font-caption-m-10-normal-regular-size);
  line-height: var(--ds-font-caption-m-10-normal-regular-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-regular-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-regular-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  gap: var(--ds-sidenav-control-expanded-gap-content);
  padding: var(--ds-sidenav-control-pad-left) var(--ds-sidenav-control-pad-right) var(--ds-sidenav-control-pad-top) var(--ds-sidenav-control-pad-bottom);
  background: var(--ds-color-sidenav-control-background);
}
.ds-sidenav-control__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-sidenav-control__свернуть-меню {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-control-text-color);
  font-size: var(--ds-font-caption-m-10-normal-regular-size);
  line-height: var(--ds-font-caption-m-10-normal-regular-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-regular-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-regular-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-sidenav-control__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-sidenav-control--collapsed:hover {
  background: var(--ds-color-sidenav-control-background-hover);
}
.ds-sidenav-control--collapsed:active {
  background: var(--ds-palette-contrast-3-900);
}
.ds-sidenav-control--expanded {
  background: var(--ds-color-sidenav-control-background);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-sidenav-control--expanded:hover {
  background: var(--ds-color-sidenav-control-background-hover);
}
.ds-sidenav-control--expanded:active {
  background: var(--ds-color-sidenav-control-background-press);
}
.ds-sidenav-control--collapsed {
  gap: var(--ds-sidenav-control-collapsed-gap);
}

/* Sidenav Footer [55111:1056] — 3 вариантов; оси: Type, Mode */
.ds-sidenav-footer {
  display: flex;
  padding: var(--ds-sidenav-footer-l2-pad-left) var(--ds-sidenav-footer-l2-pad-right) var(--ds-sidenav-footer-l2-pad-top) var(--ds-sidenav-footer-l2-pad-bottom);
  gap: var(--ds-sidenav-footer-l2-gap);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-footer__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
  white-space: nowrap;
}
.ds-sidenav-footer__logo-iiko {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-sidenav-footer__vector {
  height: 9.8px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-footer-l2-logo);
}
.ds-sidenav-footer__divider {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-sidenav-footer__ver-7-8-6-29440 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-footer-l2-text-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-sidenav-footer--l2.ds-sidenav-footer--expanded {
  flex-direction: row;
  align-items: center;
  background: var(--ds-color-sidenav-footer-l2-background);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-sidenav-footer--l1.ds-sidenav-footer--expanded {
  flex-direction: column;
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-sidenav-footer--l1.ds-sidenav-footer--collapsed {
  flex-direction: column;
  color: var(--ds-color-chips-input-focus-border-color);
}

/* Sidenav header [55045:637] — 3 вариантов; оси: Type, Mode */
.ds-sidenav-header {
  display: flex;
  align-items: center;
  padding: var(--ds-sidenav-header-l1-expanded-pad-left) var(--ds-sidenav-header-l1-expanded-pad-right) var(--ds-sidenav-header-pad-top) var(--ds-sidenav-header-pad-bottom);
  gap: var(--ds-sidenav-header-l1-expanded-gap);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-header__label {
  font-size: var(--ds-font-body-m-16-normal-medium-size);
  line-height: var(--ds-font-body-m-16-normal-medium-line);
  letter-spacing: var(--ds-font-body-m-16-normal-medium-spacing);
  font-weight: var(--ds-font-body-m-16-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  background: var(--ds-color-sidenav-header-l1-expanded-logo);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-sidenav-header--l1.ds-sidenav-header--expanded {
  flex-direction: row;
  background: var(--ds-color-sidenav-header-l1-background);
}
.ds-sidenav-header--l2.ds-sidenav-header--expanded {
  height: 48px;
  flex-direction: row;
  gap: var(--ds-sidenav-header-l2-gap);
  padding: var(--ds-sidenav-header-l2-pad-left) var(--ds-sidenav-header-l2-pad-right) var(--ds-sidenav-header-pad-top) var(--ds-sidenav-header-pad-bottom);
  background: var(--ds-color-sidenav-header-l2-background);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-sidenav-header--l1.ds-sidenav-header--collapsed {
  flex-direction: column;
  padding: var(--ds-sidenav-header-l1-collapsed-pad-left) var(--ds-sidenav-header-l1-collapsed-pad-right) var(--ds-sidenav-header-pad-top) var(--ds-sidenav-header-pad-bottom);
  background: var(--ds-color-sidenav-header-l1-background);
}

/* Sidenav item [55070:3734] — 13 вариантов; оси: Type, Mode, State */
.ds-sidenav-item {
  display: flex;
  padding: var(--ds-sidenav-item-l3-pad-left) var(--ds-sidenav-item-l3-pad-right) var(--ds-sidenav-item-l3-pad-top) var(--ds-sidenav-item-l3-pad-bottom);
  gap: var(--ds-sidenav-item-l3-gap);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-item__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
  white-space: nowrap;
}
.ds-sidenav-item__l3 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-sidenav-item-l3-text-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-sidenav-item--l3.ds-sidenav-item--expanded:hover {
  background: var(--ds-color-sidenav-item-l3-background-hover);
}
.ds-sidenav-item--l3.ds-sidenav-item--expanded {
  flex-direction: row;
  align-items: center;
  background: var(--ds-color-sidenav-item-l3-background);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-sidenav-item--l2.ds-sidenav-item--expanded {
  flex-direction: column;
  background: var(--ds-color-sidenav-item-l2-background);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-sidenav-item--l2.ds-sidenav-item--expanded:hover {
  background: var(--ds-color-sidenav-item-l2-background-hover);
}
.ds-sidenav-item--l1.ds-sidenav-item--expanded:hover {
  background: var(--ds-color-sidenav-item-l1-background-hover);
}
.ds-sidenav-item--l1.ds-sidenav-item--expanded {
  flex-direction: row;
  align-items: center;
  gap: var(--ds-sidenav-item-l1-gap-container);
  padding: var(--ds-sidenav-item-l1-pad-left) var(--ds-sidenav-item-l1-pad-right) var(--ds-sidenav-item-l1-pad-top) var(--ds-sidenav-item-l1-pad-bottom);
  background: var(--ds-color-sidenav-item-l1-background);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-sidenav-item--l1.ds-sidenav-item--collapsed:hover {
  background: var(--ds-color-sidenav-item-l1-background-hover);
}
.ds-sidenav-item--l1.ds-sidenav-item--collapsed {
  flex-direction: row;
  padding: var(--ds-sidenav-item-l1-pad-left) var(--ds-sidenav-item-l1-pad-right) var(--ds-sidenav-item-l1-pad-top) var(--ds-sidenav-item-l1-pad-bottom);
  background: var(--ds-color-sidenav-item-l1-background);
}

/* Sidenav View [55074:393] — 3 вариантов; оси: Type, State */
/* height из макета Figma: 1024px — размер примера, задавайте по месту */
.ds-sidenav-view {
  display: flex;
  flex-direction: column;
  padding: 0 0 var(--ds-sidenav-sidebar-pad-top) var(--ds-sidenav-sidebar-pad-bottom);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-view__label {
  font-size: var(--ds-font-caption-m-10-normal-regular-size);
  line-height: var(--ds-font-caption-m-10-normal-regular-line);
  letter-spacing: var(--ds-font-caption-m-10-normal-regular-spacing);
  font-weight: var(--ds-font-caption-m-10-normal-regular-weight);
  color: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Snackbar [54373:10303] — 4 вариантов; оси: Type, Mode */
.ds-snackbar {
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-size-2x);
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-snackbar__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-snackbar-dark-text-color);
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
  gap: var(--ds-snackbar-gap);
  padding: var(--ds-snackbar-pad-left) var(--ds-snackbar-pad-right) var(--ds-snackbar-pad-top) var(--ds-snackbar-pad-bottom);
}
.ds-snackbar__content {
  display: flex;
  flex-direction: row;
  gap: var(--ds-snackbar-gap);
  padding: var(--ds-space-0) var(--ds-space-0) var(--ds-space-0) var(--ds-space-0);
}
.ds-snackbar__button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-button-s-size-gap);
  padding: var(--ds-button-s-size-pad-left) var(--ds-button-s-size-pad-right) var(--ds-button-s-size-pad-top) var(--ds-button-s-size-pad-bottom);
  border-radius: var(--ds-size-2x);
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
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-snackbar-progress-color);
}
.ds-snackbar--single.ds-snackbar--dark {
  background: var(--ds-color-snackbar-complex-dark-background);
  color: var(--ds-color-snackbar-dark-text-color);
}
.ds-snackbar--single.ds-snackbar--light {
  background: var(--ds-color-snackbar-complex-light-background);
  color: var(--ds-color-snackbar-light-text-color);
}
.ds-snackbar--complex.ds-snackbar--dark {
  background: var(--ds-color-snackbar-complex-dark-background);
  color: var(--ds-color-snackbar-dark-text-color);
}
.ds-snackbar--complex.ds-snackbar--light {
  background: var(--ds-color-snackbar-complex-light-background);
  color: var(--ds-color-snackbar-light-text-color);
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
  background: var(--ds-color-chips-input-disable-border-color);
}
.ds-state:active {
  background: var(--ds-color-chips-input-default-border-color);
}

/* Status [52928:6588] — 18 вариантов; оси: Style, Type */
.ds-status {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-status-gap);
  border-radius: var(--ds-size-2x);
  padding: var(--ds-status-pad-left) var(--ds-status-pad-right) var(--ds-status-pad-top) var(--ds-status-pad-bottom);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-status__label {
  font-size: var(--ds-font-caption-l-12-normal-medium-size);
  line-height: var(--ds-font-caption-l-12-normal-medium-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-medium-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-medium-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-status__content {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-status-neutral-filled-text-color);
  font-size: var(--ds-font-caption-l-12-normal-medium-size);
  line-height: var(--ds-font-caption-l-12-normal-medium-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-medium-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-medium-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-status__element-right {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
}
.ds-status--neutral.ds-status--filled {
  background: var(--ds-color-status-neutral-filled-background);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-status--accent.ds-status--filled {
  background: var(--ds-color-status-accent-filled-background);
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-status--positive.ds-status--filled {
  background: var(--ds-color-status-positive-filled-background);
  color: var(--ds-color-snackbar-dark-complex-positive-icon-color);
}
.ds-status--warning.ds-status--filled {
  background: var(--ds-color-status-warning-filled-background);
  color: var(--ds-color-input-filled-default-icon-color-warning);
}
.ds-status--negative.ds-status--filled {
  background: var(--ds-color-status-negative-filled-background);
  color: var(--ds-color-chips-input-error-border-color);
}
.ds-status--contrast-1.ds-status--filled {
  background: var(--ds-color-status-contrast-1-filled-background);
  color: var(--ds-palette-contrast-1-700);
}
.ds-status--contrast-2.ds-status--filled {
  background: var(--ds-color-status-contrast-2-filled-background);
  color: var(--ds-palette-contrast-2-950);
}
.ds-status--contrast-3.ds-status--filled {
  background: var(--ds-color-status-contrast-3-filled-background);
  color: var(--ds-palette-contrast-3-950);
}
.ds-status--contrast-4.ds-status--filled {
  background: var(--ds-color-status-contrast-4-filled-background);
  color: var(--ds-palette-contrast-4-950);
}
.ds-status--neutral.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-status--accent.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-status--positive.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-color-snackbar-dark-complex-positive-icon-color);
}
.ds-status--warning.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-color-input-filled-default-icon-color-warning);
}
.ds-status--negative.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-color-chips-input-error-border-color);
}
.ds-status--contrast-1.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-palette-contrast-1-700);
}
.ds-status--contrast-2.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-palette-contrast-2-950);
}
.ds-status--contrast-3.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-palette-contrast-3-950);
}
.ds-status--contrast-4.ds-status--text {
  padding: var(--ds-status-pad-left-text) var(--ds-status-pad-right-text) var(--ds-status-pad-top-text) var(--ds-status-pad-bottom-text);
  color: var(--ds-palette-contrast-4-950);
}

/* Status Bar [56564:1236] — 1 вариантов; оси: — */
.ds-status-bar {
  height: 44px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-status-bar__label {
  font-size: 15px;
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: 18.28499984741211px;
  white-space: nowrap;
}
.ds-status-bar__time {
  height: 18px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-status-bar__8-00 {
  display: flex;
  flex-direction: row;
  font-size: 15px;
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: 18.28499984741211px;
}
.ds-status-bar__stats {
  height: var(--ds-size-3x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}

/* Table 2 lvl [60074:44684] — 2 вариантов; оси: Type */
.ds-table-2-lvl {
  min-height: 72px;
  display: flex;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-2-lvl__header-row {
  display: flex;
  flex-direction: column;
  background: var(--ds-color-table-row-header-background-header);
  border: 1px solid var(--ds-color-stroke-default);
}
.ds-table-2-lvl--table-cell-2-lvl {
  flex-direction: column;
  border: 1px solid var(--ds-color-stroke-default);
}
.ds-table-2-lvl--table-row-2-lvl {
  flex-direction: row;
  align-items: center;
}

/* Table Chips Input [60220:70978] — 8 вариантов; оси: Style */
.ds-table-chips-input {
  min-height: var(--ds-size-6x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-input-input-outlined-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-chips-input__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-chips-input-gap-chips-input-frame);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-chips-input-default-background);
  border: 1px solid var(--ds-color-chips-input-default-border-color);
}
.ds-table-chips-input__support {
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-1x);
}
.ds-table-chips-input--default {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-table-chips-input--hover {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-table-chips-input--focus {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-table-chips-input--focus-placeholder {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-table-chips-input--vocus-value {
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-table-chips-input--error {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-table-chips-input--error-hover {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-table-chips-input--disable {
  color: var(--ds-color-chips-input-disable-action-text-color);
}

/* Table content cell [52954:1253] — 8 вариантов; оси: State */
.ds-table-content-cell {
  min-height: var(--ds-size-9x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-content-cell__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-tab-innactive-icon-color);
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
  gap: var(--ds-list-item-gap);
}
.ds-table-content-cell:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-table-content-cell.ds-table-content-cell--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-table-content-cell:hover {
  border: 1px solid var(--ds-color-table-cell-content-hover-border-color);
}
.ds-table-content-cell--disabled {
  pointer-events: none;
}

/* Table content row [60105:56764] — 5 вариантов; оси: State */
.ds-table-content-row {
  min-height: var(--ds-size-9x);
  display: flex;
  flex-direction: column;
  border: 1px solid var(--ds-color-stroke-default);
  background: var(--ds-color-table-row-content-default-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-content-row__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-tab-innactive-icon-color);
  white-space: nowrap;
}
.ds-table-content-row:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-table-content-row.ds-table-content-row--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-table-content-row:hover {
  background: var(--ds-color-table-row-content-hover-background);
}
.ds-table-content-row--disabled {
  pointer-events: none;
}

/* Table footer [59207:20759] — 1 вариантов; оси: Type */
.ds-table-footer {
  height: 65px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-table-footer-background);
  box-shadow: var(--ds-shadow-shadows-01-dp-sl);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-footer__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-tab-innactive-counter-text-color);
  white-space: nowrap;
}
.ds-table-footer__divider {
  height: var(--ds-size-0-25x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-table-footer__content {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-table-footer-pad-left) var(--ds-table-footer-pad-right) var(--ds-table-footer-pad-top) var(--ds-table-footer-pad-bottom);
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-table-footer--default {
  color: var(--ds-color-tab-innactive-counter-text-color);
}

/* Table header cell [60098:45424] — 3 вариантов; оси: State */
.ds-table-header-cell {
  min-height: var(--ds-size-9x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-table-cell-pad-left) var(--ds-table-cell-pad-right) var(--ds-table-cell-pad-top) var(--ds-table-cell-pad-bottom);
  border: 1px solid var(--ds-color-stroke-default);
  background: var(--ds-color-table-cell-header-default-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-header-cell__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-tab-innactive-icon-color);
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
  gap: var(--ds-list-item-gap);
}
.ds-table-header-cell:hover {
  background: var(--ds-color-table-cell-header-hover-background);
}
.ds-table-header-cell:disabled {
  background: var(--ds-color-table-cell-header-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-table-header-cell.ds-table-header-cell--disabled {
  background: var(--ds-color-table-cell-header-disable-background);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-table-header-cell--disabled {
  pointer-events: none;
}

/* Table header row [53556:3571] — 1 вариантов; оси: State */
.ds-table-header-row {
  min-height: var(--ds-size-9x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-table-row-header-background-header);
  border: 1px solid var(--ds-color-stroke-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-header-row__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-tab-innactive-icon-color);
  white-space: nowrap;
}

/* Text UI [57938:18290] — 7 вариантов; оси: State */
.ds-text-ui {
  min-height: 52px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-list-item-gap);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-text-ui__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
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
  background: var(--ds-color-text-ui-text-label-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-text-ui__list-item {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-ui-text-color);
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-text-ui__label-down {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-text-ui-text-label-color);
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-text-ui__element-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-text-ui__icon-size {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
}
.ds-text-ui:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-text-ui.ds-text-ui--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-text-ui--disabled {
  pointer-events: none;
}

/* Textarea [57916:9023] — 13 вариантов; оси: Size, Variant, State */
.ds-textarea {
  min-height: 96px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-form-field-gap-input-support);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-textarea__label {
  font-size: var(--ds-font-caption-l-12-normal-regular-size);
  line-height: var(--ds-font-caption-l-12-normal-regular-line);
  letter-spacing: var(--ds-font-caption-l-12-normal-regular-spacing);
  font-weight: var(--ds-font-caption-l-12-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
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
  gap: var(--ds-form-field-gap-input-frame);
  padding: var(--ds-form-field-m-size-pad-input-left) var(--ds-form-field-m-size-pad-input-right) var(--ds-form-field-pad-textarea-top) var(--ds-form-field-m-size-pad-input-bottom);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-form-field-input-filled-background);
  border: 1px solid var(--ds-color-form-field-filled-default-border-color);
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
  padding: var(--ds-scroll-pad-left) var(--ds-scroll-pad-right) var(--ds-scroll-pad-top) var(--ds-scroll-pad-bottom);
}
.ds-textarea__support {
  display: flex;
  flex-direction: row;
}
.ds-textarea__text {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: var(--ds-form-field-pad-support-left) var(--ds-form-field-pad-support-right) 0 0;
}
.ds-textarea__hint {
  height: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  padding: var(--ds-form-field-pad-support-left) var(--ds-form-field-pad-support-right) 0 0;
}
.ds-textarea--populated:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-textarea--populated.ds-textarea--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-textarea--empty:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-textarea--empty.ds-textarea--disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-textarea--populated:focus-visible {
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-textarea--populated {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-textarea--empty {
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-textarea--populated:hover {
  background: var(--ds-color-chips-input-disable-background);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-textarea--empty:hover {
  background: var(--ds-color-chips-input-disable-background);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-textarea--disabled {
  pointer-events: none;
}

/* Timepicker [58982:9858] — 2 вариантов; оси: Type */
.ds-timepicker {
  display: flex;
  padding: 0 0 var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-brand-neutral-default);
  border: 1px solid var(--ds-color-stroke-default);
  box-shadow: var(--ds-shadow-shadows-08-dp-s);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-timepicker__label {
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
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
  padding: var(--ds-scroll-pad-left) var(--ds-scroll-pad-right) var(--ds-scroll-pad-top) var(--ds-scroll-pad-bottom);
}
.ds-timepicker--time-grid {
  flex-direction: column;
  align-items: center;
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-timepicker--time-line {
  flex-direction: row;
  color: var(--ds-color-chips-input-error-cursor-color);
}

/* Title variant [17034:68611] — 1 вариантов; оси: — */
.ds-title-variant {
  min-height: 140px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-title-variant__label {
  font-size: var(--ds-font-header-s-20-normal-medium-size);
  line-height: var(--ds-font-header-s-20-normal-medium-line);
  letter-spacing: var(--ds-font-header-s-20-normal-medium-spacing);
  font-weight: var(--ds-font-header-s-20-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
  white-space: nowrap;
}
.ds-title-variant__size {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: 0 0 var(--ds-size-1x) var(--ds-size-1x);
}
.ds-title-variant__body-4 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-brand-neutral-super-dark);
  font-size: var(--ds-font-header-s-20-normal-medium-size);
  line-height: var(--ds-font-header-s-20-normal-medium-line);
  letter-spacing: var(--ds-font-header-s-20-normal-medium-spacing);
  font-weight: var(--ds-font-header-s-20-normal-medium-weight);
  color: var(--ds-color-chips-input-error-cursor-color);
}
.ds-title-variant__body-6 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-brand-neutral-darker);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-title-variant__body-7 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-brand-neutral-darker);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-title-variant__body-5 {
  display: flex;
  flex-direction: row;
  background: var(--ds-color-brand-neutral-darker);
  font-size: var(--ds-font-body-m-16-normal-regular-size);
  line-height: var(--ds-font-body-m-16-normal-regular-line);
  letter-spacing: var(--ds-font-body-m-16-normal-regular-spacing);
  font-weight: var(--ds-font-body-m-16-normal-regular-weight);
  color: var(--ds-color-chips-input-default-action-text-color);
}
.ds-title-variant__mode {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: 0 0 var(--ds-size-1x) var(--ds-size-1x);
}

/* Toggle buttons [16992:8639] — 5 вариантов; оси: Type */
.ds-toggle-buttons {
  min-height: var(--ds-size-9x);
  display: flex;
  flex-direction: row;
  padding: var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x);
  gap: var(--ds-size-2-5x);
  border-radius: var(--ds-size-0-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-toggle-buttons__label {
  font-size: var(--ds-font-body-s-14-normal-regular-size);
  line-height: var(--ds-font-body-s-14-normal-regular-line);
  letter-spacing: var(--ds-font-body-s-14-normal-regular-spacing);
  font-weight: var(--ds-font-body-s-14-normal-regular-weight);
  color: var(--ds-color-chips-input-focus-border-color);
  white-space: nowrap;
}
.ds-toggle-buttons__icon {
  flex-shrink: 0;
  width: var(--ds-size-6x);
  height: var(--ds-size-6x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-toggle-buttons__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-toggle-buttons__icon svg path {
  fill: currentColor;
}
.ds-toggle-buttons__notifications {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
}
.ds-toggle-buttons__vector {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
}
.ds-toggle-buttons--1-button {
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
}
.ds-toggle-buttons--text {
  padding: var(--ds-size-3x) var(--ds-size-3x) var(--ds-size-1-5x) var(--ds-size-1-5x);
  background: var(--ds-color-expansion-panel-block-collaps-content-background);
  color: var(--ds-color-chips-input-focus-border-color);
  border: none;
  box-shadow: none;
}
.ds-toggle-buttons--2-buttons {
  gap: var(--ds-size-1x);
  background: var(--ds-color-surface-default);
}
.ds-toggle-buttons--3-buttons {
  gap: var(--ds-size-1x);
  background: var(--ds-color-surface-default);
}
.ds-toggle-buttons--3-text {
  border-radius: var(--ds-size-1x);
  border: 1px solid var(--ds-color-stroke-default);
  color: var(--ds-color-chips-input-focus-border-color);
}

/* Tree [59564:1473] — 8 вариантов; оси: Level, Mode, For icon */
.ds-tree {
  height: 44px;
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
  padding: 11px 0 0 var(--ds-size-5x);
}
.ds-tree__separator-stroke {
  height: 100%;
  display: flex;
  flex-direction: row;
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
  padding: 11px 0 0 var(--ds-size-5x);
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-tree-item__separator-stroke {
  height: 100%;
  display: flex;
  flex-direction: row;
}
.ds-tree-item--end {
  flex-direction: row;
  align-items: center;
}
.ds-tree-item--end-long {
  flex-direction: column;
  padding: 11px 0 0 21px;
}
.ds-tree-item--middle {
  flex-direction: row;
  align-items: center;
  padding: 11px 0 0 0;
}
.ds-tree-item--middle-long {
  flex-direction: row;
  align-items: center;
  padding: 11px 0 0 0;
}
.ds-tree-item--start {
  flex-direction: row;
  align-items: center;
  padding: 11px var(--ds-size-3x) 0 0;
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
.ds-btn--xs .ds-btn__icon { font-size: 16px; }

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
   Источник: Figma, страница «🟡Card», COMPONENT_SET «Card view»
   Структура: Card header + Card content + Card footer
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

/* ── Card header (Label up / Title / Label down + Divider) ── */

.ds-card__header {
  display: flex;
  flex-direction: column;
  padding: var(--ds-space-2x) var(--ds-space-6x);     /* 8px 24px */
}

.ds-card__label-up,
.ds-card__label-down {
  color: var(--ds-color-text-secondary);              /* #616161 */
  font-size: var(--ds-typography-body-font-size-s);   /* 14px */
  line-height: var(--ds-typography-body-line-height-l); /* 24px */
  letter-spacing: var(--ds-typography-letter-spacing-s);
}

.ds-card__title {
  margin: 0;
  color: var(--ds-color-text-primary);                /* #333333 */
  font-size: var(--ds-typography-header-font-size-s); /* 20px */
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: var(--ds-typography-header-line-height-s); /* 28px */
  letter-spacing: var(--ds-typography-letter-spacing-none);
}

/* ── Card content (pad 8/24) ─────────────────────────────── */

.ds-card__content {
  display: flex;
  flex-direction: column;
  padding: var(--ds-space-2x) var(--ds-space-6x);     /* 8px 24px */
}

/* ── Card footer ─────────────────────────────────────────── */

.ds-card__footer {
  display: flex;
  align-items: center;
  gap: var(--ds-space-2x);
  padding: var(--ds-space-4x) var(--ds-space-6x);     /* 16px 24px */
}
.ds-card__footer--right { justify-content: flex-end; }

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

