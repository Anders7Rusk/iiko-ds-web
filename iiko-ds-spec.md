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
| `--ds-palette-accent-10` | `#f5f9ff` |
| `--ds-palette-accent-100` | `#e8f0ff` |
| `--ds-palette-accent-200` | `#ccdfff` |
| `--ds-palette-accent-300` | `#a8c9ff` |
| `--ds-palette-accent-400` | `#75a9ff` |
| `--ds-palette-accent-5` | `#f8f9fc` |
| `--ds-palette-accent-50` | `#f0f5ff` |
| `--ds-palette-accent-500` | `#448aff` |
| `--ds-palette-accent-600` | `#3969d5` |
| `--ds-palette-accent-700` | `#2651b5` |
| `--ds-palette-accent-800` | `#123da1` |
| `--ds-palette-accent-900` | `#162a69` |
| `--ds-palette-accent-950` | `#151d37` |
| `--ds-palette-accent-990` | `#0d111c` |
| `--ds-palette-contrast-1-10` | `#fcf6fd` |
| `--ds-palette-contrast-1-100` | `#f4e2f9` |
| `--ds-palette-contrast-1-200` | `#efd5f6` |
| `--ds-palette-contrast-1-300` | `#e4b8ef` |
| `--ds-palette-contrast-1-400` | `#d58ee6` |
| `--ds-palette-contrast-1-5` | `#fbf7fc` |
| `--ds-palette-contrast-1-50` | `#faf2fc` |
| `--ds-palette-contrast-1-500` | `#c564dd` |
| `--ds-palette-contrast-1-600` | `#b53ad4` |
| `--ds-palette-contrast-1-700` | `#9c27b0` |
| `--ds-palette-contrast-1-800` | `#761e86` |
| `--ds-palette-contrast-1-900` | `#641971` |
| `--ds-palette-contrast-1-950` | `#3f1047` |
| `--ds-palette-contrast-1-990` | `#2c0b32` |
| `--ds-palette-contrast-2-10` | `#fcf8f6` |
| `--ds-palette-contrast-2-100` | `#f7e9e3` |
| `--ds-palette-contrast-2-200` | `#f1d9d0` |
| `--ds-palette-contrast-2-300` | `#ebc9bc` |
| `--ds-palette-contrast-2-400` | `#d9ac9b` |
| `--ds-palette-contrast-2-5` | `#faf8f8` |
| `--ds-palette-contrast-2-50` | `#fcf5f3` |
| `--ds-palette-contrast-2-500` | `#c29180` |
| `--ds-palette-contrast-2-600` | `#a57969` |
| `--ds-palette-contrast-2-700` | `#896152` |
| `--ds-palette-contrast-2-800` | `#795548` |
| `--ds-palette-contrast-2-900` | `#5a3f35` |
| `--ds-palette-contrast-2-950` | `#3e261e` |
| `--ds-palette-contrast-2-990` | `#291a14` |
| `--ds-palette-contrast-3-10` | `#f8fafc` |
| `--ds-palette-contrast-3-100` | `#e7eff3` |
| `--ds-palette-contrast-3-200` | `#d9e3e8` |
| `--ds-palette-contrast-3-300` | `#c9d7de` |
| `--ds-palette-contrast-3-400` | `#a9c0cb` |
| `--ds-palette-contrast-3-5` | `#f9fafb` |
| `--ds-palette-contrast-3-50` | `#f4f9fb` |
| `--ds-palette-contrast-3-500` | `#90a7b2` |
| `--ds-palette-contrast-3-600` | `#728f9d` |
| `--ds-palette-contrast-3-700` | `#607d8b` |
| `--ds-palette-contrast-3-800` | `#4b626d` |
| `--ds-palette-contrast-3-900` | `#36474e` |
| `--ds-palette-contrast-3-950` | `#263136` |
| `--ds-palette-contrast-3-990` | `#142229` |
| `--ds-palette-contrast-4-10` | `#f6f8dd` |
| `--ds-palette-contrast-4-100` | `#edf2c0` |
| `--ds-palette-contrast-4-200` | `#e8edab` |
| `--ds-palette-contrast-4-300` | `#e2e996` |
| `--ds-palette-contrast-4-400` | `#dce481` |
| `--ds-palette-contrast-4-5` | `#f9fbea` |
| `--ds-palette-contrast-4-50` | `#f3f6d5` |
| `--ds-palette-contrast-4-500` | `#d6e06c` |
| `--ds-palette-contrast-4-600` | `#cad742` |
| `--ds-palette-contrast-4-700` | `#b1bd28` |
| `--ds-palette-contrast-4-800` | `#8a931f` |
| `--ds-palette-contrast-4-900` | `#626916` |
| `--ds-palette-contrast-4-950` | `#4f5412` |
| `--ds-palette-contrast-4-990` | `#272a09` |
| `--ds-palette-negative-10` | `#fff8f8` |
| `--ds-palette-negative-100` | `#ffe5e5` |
| `--ds-palette-negative-200` | `#ffcccc` |
| `--ds-palette-negative-300` | `#ffb8b8` |
| `--ds-palette-negative-400` | `#ff8585` |
| `--ds-palette-negative-5` | `#fbf8f8` |
| `--ds-palette-negative-50` | `#fff2f2` |
| `--ds-palette-negative-500` | `#ff5252` |
| `--ds-palette-negative-600` | `#f4372f` |
| `--ds-palette-negative-700` | `#de1a12` |
| `--ds-palette-negative-800` | `#af150e` |
| `--ds-palette-negative-900` | `#7f0f0a` |
| `--ds-palette-negative-950` | `#500907` |
| `--ds-palette-negative-990` | `#300403` |
| `--ds-palette-neutral-0` | `#ffffff` |
| `--ds-palette-neutral-10` | `#fafafa` |
| `--ds-palette-neutral-100` | `#ebebeb` |
| `--ds-palette-neutral-200` | `#e0e0e0` |
| `--ds-palette-neutral-300` | `#d6d6d6` |
| `--ds-palette-neutral-400` | `#bdbdbd` |
| `--ds-palette-neutral-50` | `#f5f5f5` |
| `--ds-palette-neutral-500` | `#9e9e9e` |
| `--ds-palette-neutral-600` | `#757575` |
| `--ds-palette-neutral-700` | `#616161` |
| `--ds-palette-neutral-800` | `#424242` |
| `--ds-palette-neutral-900` | `#333333` |
| `--ds-palette-neutral-950` | `#212121` |
| `--ds-palette-neutral-990` | `#121212` |
| `--ds-palette-neutral-transparent` | `rgba(255, 255, 255, 0.0)` |
| `--ds-palette-positive-10` | `#f3fcf7` |
| `--ds-palette-positive-100` | `#e0f8ea` |
| `--ds-palette-positive-200` | `#c1f1d5` |
| `--ds-palette-positive-300` | `#97e8b9` |
| `--ds-palette-positive-400` | `#50d889` |
| `--ds-palette-positive-5` | `#f8fbfa` |
| `--ds-palette-positive-50` | `#ebfbf2` |
| `--ds-palette-positive-500` | `#14b456` |
| `--ds-palette-positive-600` | `#119c34` |
| `--ds-palette-positive-700` | `#0f852c` |
| `--ds-palette-positive-800` | `#0c6e21` |
| `--ds-palette-positive-900` | `#0a571a` |
| `--ds-palette-positive-950` | `#074013` |
| `--ds-palette-positive-990` | `#04250b` |
| `--ds-palette-warning-10` | `#fffcf8` |
| `--ds-palette-warning-100` | `#fff4e5` |
| `--ds-palette-warning-200` | `#ffe9cc` |
| `--ds-palette-warning-300` | `#ffd9a8` |
| `--ds-palette-warning-400` | `#ffc375` |
| `--ds-palette-warning-5` | `#fdfcfa` |
| `--ds-palette-warning-50` | `#fff9f0` |
| `--ds-palette-warning-500` | `#ffab40` |
| `--ds-palette-warning-600` | `#fe8c06` |
| `--ds-palette-warning-700` | `#ea7806` |
| `--ds-palette-warning-800` | `#cc5f00` |
| `--ds-palette-warning-900` | `#994000` |
| `--ds-palette-warning-950` | `#662a00` |
| `--ds-palette-warning-990` | `#331500` |

### Семантические цвета (Color)

Цвета смысловых состояний: brand (акцент), positive, negative, neutral, contrast-1…4.

| Токен | Значение |
|---|---|
| `--ds-color-brand-accent-dark` | `#3969d5` |
| `--ds-color-brand-accent-darker` | `#2651b5` |
| `--ds-color-brand-accent-default` | `#448aff` |
| `--ds-color-brand-accent-default-transparent` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-brand-accent-light` | `#a8c9ff` |
| `--ds-color-brand-accent-lighter` | `#f0f5ff` |
| `--ds-color-brand-accent-lightest` | `#f5f9ff` |
| `--ds-color-brand-accent-super-lightest` | `#f8f9fc` |
| `--ds-color-brand-contrast-1-dark` | `#9c27b0` |
| `--ds-color-brand-contrast-1-lightest` | `#fbf7fc` |
| `--ds-color-brand-contrast-2-dark` | `#3e261e` |
| `--ds-color-brand-contrast-2-lightest` | `#f7e9e3` |
| `--ds-color-brand-contrast-3-dark` | `#263136` |
| `--ds-color-brand-contrast-3-lightest` | `#f9fafb` |
| `--ds-color-brand-contrast-4-dark` | `#4f5412` |
| `--ds-color-brand-contrast-4-lightest` | `#f9fbea` |
| `--ds-color-brand-negative-dark` | `#de1a12` |
| `--ds-color-brand-negative-darker` | `#7f0f0a` |
| `--ds-color-brand-negative-default` | `#ff5252` |
| `--ds-color-brand-negative-light` | `#ffb8b8` |
| `--ds-color-brand-negative-lighter` | `#fff2f2` |
| `--ds-color-brand-negative-lightest` | `#fff8f8` |
| `--ds-color-brand-neutral-dark` | `#757575` |
| `--ds-color-brand-neutral-darker` | `#616161` |
| `--ds-color-brand-neutral-darkest` | `#424242` |
| `--ds-color-brand-neutral-default` | `#ffffff` |
| `--ds-color-brand-neutral-default-transparent` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-brand-neutral-light` | `#d6d6d6` |
| `--ds-color-brand-neutral-lighter` | `#e0e0e0` |
| `--ds-color-brand-neutral-lightest` | `#ebebeb` |
| `--ds-color-brand-neutral-neutral` | `#9e9e9e` |
| `--ds-color-brand-neutral-super-dark` | `#333333` |
| `--ds-color-brand-neutral-super-light` | `#f5f5f5` |
| `--ds-color-brand-positive-dark` | `#0f852c` |
| `--ds-color-brand-positive-darker` | `#0a571a` |
| `--ds-color-brand-positive-default` | `#14b456` |
| `--ds-color-brand-positive-light` | `#97e8b9` |
| `--ds-color-brand-positive-lighter` | `#ebfbf2` |
| `--ds-color-brand-positive-lightest` | `#f3fcf7` |
| `--ds-color-brand-warning-dark` | `#ea7806` |
| `--ds-color-brand-warning-darker` | `#994000` |
| `--ds-color-brand-warning-default` | `#ffab40` |
| `--ds-color-brand-warning-light` | `#ffd9a8` |
| `--ds-color-brand-warning-lighter` | `#fff9f0` |
| `--ds-color-brand-warning-lightest` | `#fffcf8` |
| `--ds-color-button-accent-default` | `#448aff` |
| `--ds-color-button-accent-hover` | `#3969d5` |
| `--ds-color-button-accent-lite-default` | `#ffffff` |
| `--ds-color-button-accent-lite-default-transparent` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-accent-lite-hover` | `#f5f9ff` |
| `--ds-color-button-accent-lite-press` | `#e8f0ff` |
| `--ds-color-button-accent-press` | `#2651b5` |
| `--ds-color-button-negative-default` | `#ff5252` |
| `--ds-color-button-negative-hover` | `#f4372f` |
| `--ds-color-button-negative-lite-default` | `#ffffff` |
| `--ds-color-button-negative-lite-default-transparent` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-negative-lite-hover` | `#fff8f8` |
| `--ds-color-button-negative-lite-press` | `#ffe5e5` |
| `--ds-color-button-negative-press` | `#de1a12` |
| `--ds-color-button-neutral-default` | `#ffffff` |
| `--ds-color-button-neutral-default-transparent` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-neutral-disable` | `#ebebeb` |
| `--ds-color-button-neutral-hover` | `#fafafa` |
| `--ds-color-button-neutral-press` | `#ebebeb` |
| `--ds-color-button-positive-default` | `#14b456` |
| `--ds-color-button-positive-hover` | `#119c34` |
| `--ds-color-button-positive-lite-default` | `#ffffff` |
| `--ds-color-button-positive-lite-default-transparent` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-positive-lite-hover` | `#f3fcf7` |
| `--ds-color-button-positive-lite-press` | `#e0f8ea` |
| `--ds-color-button-positive-press` | `#0f852c` |
| `--ds-color-button-warning-default` | `#ffab40` |
| `--ds-color-button-warning-hover` | `#fe8c06` |
| `--ds-color-button-warning-lite-default` | `#ffffff` |
| `--ds-color-button-warning-lite-default-transparent` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-warning-lite-hover` | `#fffcf8` |
| `--ds-color-button-warning-lite-press` | `#fff4e5` |
| `--ds-color-button-warning-press` | `#ea7806` |
| `--ds-color-icon-accent` | `#448aff` |
| `--ds-color-icon-disable` | `#9e9e9e` |
| `--ds-color-icon-inversive` | `#ffffff` |
| `--ds-color-icon-negative` | `#ff5252` |
| `--ds-color-icon-positive` | `#14b456` |
| `--ds-color-icon-primary` | `#616161` |
| `--ds-color-icon-primary-light` | `#9e9e9e` |
| `--ds-color-icon-warning` | `#ea7806` |
| `--ds-color-shapes-default` | `#ffffff` |
| `--ds-color-shapes-default-transparent` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-shapes-default-variant` | `#f8f9fc` |
| `--ds-color-shapes-disable` | `#ebebeb` |
| `--ds-color-shapes-hover` | `#f5f5f5` |
| `--ds-color-shapes-lighter-er` | `#fff2f2` |
| `--ds-color-shapes-lighter-pr` | `#f0f5ff` |
| `--ds-color-shapes-lighter-sc` | `#ebfbf2` |
| `--ds-color-shapes-lighter-wr` | `#fff9f0` |
| `--ds-color-shapes-lightest-br` | `#f7e9e3` |
| `--ds-color-shapes-lightest-db` | `#f9fafb` |
| `--ds-color-shapes-lightest-mg` | `#fbf7fc` |
| `--ds-color-shapes-press` | `#e0e0e0` |
| `--ds-color-stroke-accent` | `#448aff` |
| `--ds-color-stroke-default` | `#e0e0e0` |
| `--ds-color-stroke-disable` | `#ebebeb` |
| `--ds-color-stroke-hover` | `#9e9e9e` |
| `--ds-color-stroke-negative` | `#ff5252` |
| `--ds-color-stroke-positive` | `#14b456` |
| `--ds-color-stroke-warning` | `#ffab40` |
| `--ds-color-surface-default` | `#ffffff` |
| `--ds-color-surface-default-transparent` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-surface-default-variant` | `#f8f9fc` |
| `--ds-color-surface-disable` | `#f5f5f5` |
| `--ds-color-surface-hover` | `#f5f5f5` |
| `--ds-color-surface-press` | `#e0e0e0` |
| `--ds-color-surface-selected` | `#f5f5f5` |
| `--ds-color-surface-sidebar-active` | `#a8c9ff` |
| `--ds-color-surface-sidebar-selected` | `#f0f5ff` |
| `--ds-color-surface-snack-tooltip` | `#424242` |
| `--ds-color-table-surfase-default` | `#ffffff` |
| `--ds-color-table-surfase-default-transparent` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-table-surfase-group` | `#ebebeb` |
| `--ds-color-table-surfase-head` | `#f0f5ff` |
| `--ds-color-table-surfase-head-group` | `#e8f0ff` |
| `--ds-color-table-surfase-hover` | `#f5f5f5` |
| `--ds-color-table-surfase-selected` | `#ebebeb` |
| `--ds-color-table-surfase-zebra` | `#f5f5f5` |
| `--ds-color-text-accent` | `#448aff` |
| `--ds-color-text-disable` | `#9e9e9e` |
| `--ds-color-text-inversive` | `#ffffff` |
| `--ds-color-text-negative` | `#ff5252` |
| `--ds-color-text-placeholder` | `#d6d6d6` |
| `--ds-color-text-positive` | `#14b456` |
| `--ds-color-text-primary` | `#333333` |
| `--ds-color-text-secondary` | `#616161` |
| `--ds-color-text-warning` | `#ea7806` |

### Компонентные цвета (Component)

Цвета конкретных компонентов. **В прототипах использовать именно эти токены**, а не общие (Text/Icon).


#### Button — `--ds-color-button-*`

| Токен | Значение |
|---|---|
| `--ds-color-button-icon-accent-filled-icon-color` | `#ffffff` |
| `--ds-color-button-icon-accent-filled-default-background` | `#448aff` |
| `--ds-color-button-icon-accent-filled-hover-background` | `#3969d5` |
| `--ds-color-button-icon-accent-filled-press-background` | `#2651b5` |
| `--ds-color-button-icon-accent-outlined-border-color` | `#448aff` |
| `--ds-color-button-icon-accent-outlined-icon-color` | `#448aff` |
| `--ds-color-button-icon-accent-outlined-default-background` | `#ffffff` |
| `--ds-color-button-icon-accent-outlined-hover-background` | `#f5f9ff` |
| `--ds-color-button-icon-accent-outlined-press-background` | `#e8f0ff` |
| `--ds-color-button-icon-accent-text-icon-color` | `#448aff` |
| `--ds-color-button-icon-accent-text-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-icon-accent-text-hover-background` | `#f5f9ff` |
| `--ds-color-button-icon-accent-text-press-background` | `#e8f0ff` |
| `--ds-color-button-icon-disable-background-filled` | `#ebebeb` |
| `--ds-color-button-icon-disable-background-outlined` | `#ebebeb` |
| `--ds-color-button-icon-disable-background-text` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-icon-disable-border-color` | `#ebebeb` |
| `--ds-color-button-icon-disable-icon-color` | `#9e9e9e` |
| `--ds-color-button-icon-negative-filled-icon-color` | `#ffffff` |
| `--ds-color-button-icon-negative-filled-default-background` | `#ff5252` |
| `--ds-color-button-icon-negative-filled-hover-background` | `#f4372f` |
| `--ds-color-button-icon-negative-filled-press-background` | `#de1a12` |
| `--ds-color-button-icon-negative-outlined-border-color` | `#ff5252` |
| `--ds-color-button-icon-negative-outlined-icon-color` | `#ff5252` |
| `--ds-color-button-icon-negative-outlined-default-background` | `#ffffff` |
| `--ds-color-button-icon-negative-outlined-hover-background` | `#fff8f8` |
| `--ds-color-button-icon-negative-outlined-press-background` | `#ffe5e5` |
| `--ds-color-button-icon-negative-text-icon-color` | `#ff5252` |
| `--ds-color-button-icon-negative-text-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-icon-negative-text-hover-background` | `#fff8f8` |
| `--ds-color-button-icon-negative-text-press-background` | `#ffe5e5` |
| `--ds-color-button-icon-neutral-filled-icon-color` | `#616161` |
| `--ds-color-button-icon-neutral-filled-default-background` | `#ffffff` |
| `--ds-color-button-icon-neutral-filled-hover-background` | `#fafafa` |
| `--ds-color-button-icon-neutral-filled-press-background` | `#ebebeb` |
| `--ds-color-button-icon-neutral-outlined-border-color` | `#e0e0e0` |
| `--ds-color-button-icon-neutral-outlined-icon-color` | `#616161` |
| `--ds-color-button-icon-neutral-outlined-default-background` | `#ffffff` |
| `--ds-color-button-icon-neutral-outlined-hover-background` | `#fafafa` |
| `--ds-color-button-icon-neutral-outlined-press-background` | `#ebebeb` |
| `--ds-color-button-icon-neutral-text-icon-color` | `#616161` |
| `--ds-color-button-icon-neutral-text-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-icon-neutral-text-hover-background` | `#fafafa` |
| `--ds-color-button-icon-neutral-text-press-background` | `#ebebeb` |
| `--ds-color-button-icon-positive-filled-icon-color` | `#ffffff` |
| `--ds-color-button-icon-positive-filled-default-background` | `#14b456` |
| `--ds-color-button-icon-positive-filled-hover-background` | `#119c34` |
| `--ds-color-button-icon-positive-filled-press-background` | `#0f852c` |
| `--ds-color-button-icon-positive-outlined-border-color` | `#14b456` |
| `--ds-color-button-icon-positive-outlined-icon-color` | `#14b456` |
| `--ds-color-button-icon-positive-outlined-default-background` | `#ffffff` |
| `--ds-color-button-icon-positive-outlined-hover-background` | `#f3fcf7` |
| `--ds-color-button-icon-positive-outlined-press-background` | `#e0f8ea` |
| `--ds-color-button-icon-positive-text-icon-color` | `#14b456` |
| `--ds-color-button-icon-positive-text-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-icon-positive-text-hover-background` | `#f3fcf7` |
| `--ds-color-button-icon-positive-text-press-background` | `#e0f8ea` |
| `--ds-color-button-icon-warning-filled-icon-color` | `#ffffff` |
| `--ds-color-button-icon-warning-filled-default-background` | `#ffab40` |
| `--ds-color-button-icon-warning-filled-hover-background` | `#fe8c06` |
| `--ds-color-button-icon-warning-filled-press-background` | `#ea7806` |
| `--ds-color-button-icon-warning-outlined-border-color` | `#ffab40` |
| `--ds-color-button-icon-warning-outlined-icon-color` | `#ea7806` |
| `--ds-color-button-icon-warning-outlined-default-background` | `#ffffff` |
| `--ds-color-button-icon-warning-outlined-hover-background` | `#fffcf8` |
| `--ds-color-button-icon-warning-outlined-press-background` | `#fff4e5` |
| `--ds-color-button-icon-warning-text-icon-color` | `#ea7806` |
| `--ds-color-button-icon-warning-text-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-icon-warning-text-hover-background` | `#fffcf8` |
| `--ds-color-button-icon-warning-text-press-background` | `#fff4e5` |
| `--ds-color-button-toggle-filled-background` | `#ffffff` |
| `--ds-color-button-toggle-outlined-background` | `#ffffff` |
| `--ds-color-button-toggle-outlined-border-color` | `#e0e0e0` |
| `--ds-color-button-accent-filled-default-background` | `#448aff` |
| `--ds-color-button-accent-filled-default-icon-color` | `#ffffff` |
| `--ds-color-button-accent-filled-default-text-color` | `#ffffff` |
| `--ds-color-button-accent-filled-hover-background` | `#3969d5` |
| `--ds-color-button-accent-filled-hover-icon-color` | `#ffffff` |
| `--ds-color-button-accent-filled-hover-text-color` | `#ffffff` |
| `--ds-color-button-accent-filled-press-background` | `#2651b5` |
| `--ds-color-button-accent-filled-press-icon-color` | `#ffffff` |
| `--ds-color-button-accent-filled-press-text-color` | `#ffffff` |
| `--ds-color-button-accent-outlined-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-accent-outlined-default-border-color` | `#448aff` |
| `--ds-color-button-accent-outlined-default-icon-color` | `#448aff` |
| `--ds-color-button-accent-outlined-default-text-color` | `#448aff` |
| `--ds-color-button-accent-outlined-hover-background` | `#f5f9ff` |
| `--ds-color-button-accent-outlined-hover-border-color` | `#448aff` |
| `--ds-color-button-accent-outlined-hover-icon-color` | `#448aff` |
| `--ds-color-button-accent-outlined-hover-text-color` | `#448aff` |
| `--ds-color-button-accent-outlined-press-background` | `#e8f0ff` |
| `--ds-color-button-accent-outlined-press-border-color` | `#448aff` |
| `--ds-color-button-accent-outlined-press-icon-color` | `#448aff` |
| `--ds-color-button-accent-outlined-press-text-color` | `#448aff` |
| `--ds-color-button-accent-text-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-accent-text-default-icon-color` | `#448aff` |
| `--ds-color-button-accent-text-default-text-color` | `#448aff` |
| `--ds-color-button-accent-text-hover-background` | `#f5f9ff` |
| `--ds-color-button-accent-text-hover-icon-color` | `#448aff` |
| `--ds-color-button-accent-text-hover-text-color` | `#448aff` |
| `--ds-color-button-accent-text-press-background` | `#e8f0ff` |
| `--ds-color-button-accent-text-press-icon-color` | `#448aff` |
| `--ds-color-button-accent-text-press-text-color` | `#448aff` |
| `--ds-color-button-disable-background-filled` | `#ebebeb` |
| `--ds-color-button-disable-background-outlined` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-disable-background-text` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-disable-border-color` | `#ebebeb` |
| `--ds-color-button-disable-icon-color` | `#9e9e9e` |
| `--ds-color-button-disable-text-color` | `#9e9e9e` |
| `--ds-color-button-negative-filled-default-background` | `#ff5252` |
| `--ds-color-button-negative-filled-default-icon-color` | `#ffffff` |
| `--ds-color-button-negative-filled-default-text-color` | `#ffffff` |
| `--ds-color-button-negative-filled-hover-background` | `#f4372f` |
| `--ds-color-button-negative-filled-hover-icon-color` | `#ffffff` |
| `--ds-color-button-negative-filled-hover-text-color` | `#ffffff` |
| `--ds-color-button-negative-filled-press-background` | `#de1a12` |
| `--ds-color-button-negative-filled-press-icon-color` | `#ffffff` |
| `--ds-color-button-negative-filled-press-text-color` | `#ffffff` |
| `--ds-color-button-negative-outlined-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-negative-outlined-default-border-color` | `#ff5252` |
| `--ds-color-button-negative-outlined-default-icon-color` | `#ff5252` |
| `--ds-color-button-negative-outlined-default-text-color` | `#ff5252` |
| `--ds-color-button-negative-outlined-hover-background` | `#fff8f8` |
| `--ds-color-button-negative-outlined-hover-border-color` | `#ff5252` |
| `--ds-color-button-negative-outlined-hover-icon-color` | `#ff5252` |
| `--ds-color-button-negative-outlined-hover-text-color` | `#ff5252` |
| `--ds-color-button-negative-outlined-press-background` | `#ffe5e5` |
| `--ds-color-button-negative-outlined-press-border-color` | `#ff5252` |
| `--ds-color-button-negative-outlined-press-icon-color` | `#ff5252` |
| `--ds-color-button-negative-outlined-press-text-color` | `#ff5252` |
| `--ds-color-button-negative-text-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-negative-text-default-icon-color` | `#ff5252` |
| `--ds-color-button-negative-text-default-text-color` | `#ff5252` |
| `--ds-color-button-negative-text-hover-background` | `#fff8f8` |
| `--ds-color-button-negative-text-hover-icon-color` | `#ff5252` |
| `--ds-color-button-negative-text-hover-text-color` | `#ff5252` |
| `--ds-color-button-negative-text-press-background` | `#ffe5e5` |
| `--ds-color-button-negative-text-press-icon-color` | `#ff5252` |
| `--ds-color-button-negative-text-press-text-color` | `#ff5252` |
| `--ds-color-button-neutral-filled-default-background` | `#ffffff` |
| `--ds-color-button-neutral-filled-default-icon-color` | `#616161` |
| `--ds-color-button-neutral-filled-default-text-color` | `#333333` |
| `--ds-color-button-neutral-filled-hover-background` | `#fafafa` |
| `--ds-color-button-neutral-filled-hover-icon-color` | `#616161` |
| `--ds-color-button-neutral-filled-hover-text-color` | `#333333` |
| `--ds-color-button-neutral-filled-press-background` | `#ebebeb` |
| `--ds-color-button-neutral-filled-press-icon-color` | `#616161` |
| `--ds-color-button-neutral-filled-press-text-color` | `#333333` |
| `--ds-color-button-neutral-outlined-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-neutral-outlined-default-border-color` | `#e0e0e0` |
| `--ds-color-button-neutral-outlined-default-icon-color` | `#616161` |
| `--ds-color-button-neutral-outlined-default-text-color` | `#333333` |
| `--ds-color-button-neutral-outlined-hover-background` | `#fafafa` |
| `--ds-color-button-neutral-outlined-hover-border-color` | `#e0e0e0` |
| `--ds-color-button-neutral-outlined-hover-icon-color` | `#616161` |
| `--ds-color-button-neutral-outlined-hover-text-color` | `#333333` |
| `--ds-color-button-neutral-outlined-press-background` | `#ebebeb` |
| `--ds-color-button-neutral-outlined-press-border-color` | `#e0e0e0` |
| `--ds-color-button-neutral-outlined-press-icon-color` | `#616161` |
| `--ds-color-button-neutral-outlined-press-text-color` | `#333333` |
| `--ds-color-button-neutral-text-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-neutral-text-default-icon-color` | `#616161` |
| `--ds-color-button-neutral-text-default-text-color` | `#333333` |
| `--ds-color-button-neutral-text-hover-background` | `#fafafa` |
| `--ds-color-button-neutral-text-hover-icon-color` | `#616161` |
| `--ds-color-button-neutral-text-hover-text-color` | `#333333` |
| `--ds-color-button-neutral-text-press-background` | `#ebebeb` |
| `--ds-color-button-neutral-text-press-icon-color` | `#616161` |
| `--ds-color-button-neutral-text-press-text-color` | `#333333` |
| `--ds-color-button-positive-filled-default-background` | `#14b456` |
| `--ds-color-button-positive-filled-default-icon-color` | `#ffffff` |
| `--ds-color-button-positive-filled-default-text-color` | `#ffffff` |
| `--ds-color-button-positive-filled-hover-background` | `#119c34` |
| `--ds-color-button-positive-filled-hover-icon-color` | `#ffffff` |
| `--ds-color-button-positive-filled-hover-text-color` | `#ffffff` |
| `--ds-color-button-positive-filled-press-background` | `#0f852c` |
| `--ds-color-button-positive-filled-press-icon-color` | `#ffffff` |
| `--ds-color-button-positive-filled-press-text-color` | `#ffffff` |
| `--ds-color-button-positive-outlined-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-positive-outlined-default-border-color` | `#14b456` |
| `--ds-color-button-positive-outlined-default-icon-color` | `#14b456` |
| `--ds-color-button-positive-outlined-default-text-color` | `#14b456` |
| `--ds-color-button-positive-outlined-hover-background` | `#f3fcf7` |
| `--ds-color-button-positive-outlined-hover-border-color` | `#14b456` |
| `--ds-color-button-positive-outlined-hover-icon-color` | `#14b456` |
| `--ds-color-button-positive-outlined-hover-text-color` | `#14b456` |
| `--ds-color-button-positive-outlined-press-background` | `#e0f8ea` |
| `--ds-color-button-positive-outlined-press-border-color` | `#14b456` |
| `--ds-color-button-positive-outlined-press-icon-color` | `#14b456` |
| `--ds-color-button-positive-outlined-press-text-color` | `#14b456` |
| `--ds-color-button-positive-text-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-positive-text-default-icon-color` | `#14b456` |
| `--ds-color-button-positive-text-default-text-color` | `#14b456` |
| `--ds-color-button-positive-text-hover-background` | `#f3fcf7` |
| `--ds-color-button-positive-text-hover-icon-color` | `#14b456` |
| `--ds-color-button-positive-text-hover-text-color` | `#14b456` |
| `--ds-color-button-positive-text-press-background` | `#e0f8ea` |
| `--ds-color-button-positive-text-press-icon-color` | `#14b456` |
| `--ds-color-button-positive-text-press-text-color` | `#14b456` |
| `--ds-color-button-warning-filled-default-background` | `#ffab40` |
| `--ds-color-button-warning-filled-default-icon-color` | `#ffffff` |
| `--ds-color-button-warning-filled-default-text-color` | `#ffffff` |
| `--ds-color-button-warning-filled-hover-background` | `#fe8c06` |
| `--ds-color-button-warning-filled-hover-icon-color` | `#ffffff` |
| `--ds-color-button-warning-filled-hover-text-color` | `#ffffff` |
| `--ds-color-button-warning-filled-press-background` | `#ea7806` |
| `--ds-color-button-warning-filled-press-icon-color` | `#ffffff` |
| `--ds-color-button-warning-filled-press-text-color` | `#ffffff` |
| `--ds-color-button-warning-outlined-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-warning-outlined-default-border-color` | `#ffab40` |
| `--ds-color-button-warning-outlined-default-icon-color` | `#ea7806` |
| `--ds-color-button-warning-outlined-default-text-color` | `#ea7806` |
| `--ds-color-button-warning-outlined-hover-background` | `#fffcf8` |
| `--ds-color-button-warning-outlined-hover-border-color` | `#ffab40` |
| `--ds-color-button-warning-outlined-hover-icon-color` | `#ea7806` |
| `--ds-color-button-warning-outlined-hover-text-color` | `#ea7806` |
| `--ds-color-button-warning-outlined-press-background` | `#fff4e5` |
| `--ds-color-button-warning-outlined-press-border-color` | `#ffab40` |
| `--ds-color-button-warning-outlined-press-icon-color` | `#ea7806` |
| `--ds-color-button-warning-outlined-press-text-color` | `#ea7806` |
| `--ds-color-button-warning-text-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-button-warning-text-default-icon-color` | `#ea7806` |
| `--ds-color-button-warning-text-default-text-color` | `#ea7806` |
| `--ds-color-button-warning-text-hover-background` | `#fffcf8` |
| `--ds-color-button-warning-text-hover-icon-color` | `#ea7806` |
| `--ds-color-button-warning-text-hover-text-color` | `#ea7806` |
| `--ds-color-button-warning-text-press-background` | `#fff4e5` |
| `--ds-color-button-warning-text-press-icon-color` | `#ea7806` |
| `--ds-color-button-warning-text-press-text-color` | `#ea7806` |

#### Input — `--ds-color-input-*`

| Токен | Значение |
|---|---|
| `--ds-color-input-background-support` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-input-input-filled-background` | `#f8f9fc` |
| `--ds-color-input-input-label-text-color` | `#616161` |
| `--ds-color-input-input-outlined-background` | `#ffffff` |
| `--ds-color-input-number-control-background` | `#ffffff` |
| `--ds-color-input-number-control-icon-color` | `#616161` |
| `--ds-color-input-number-control-text-color` | `#333333` |
| `--ds-color-input-number-control-default-border-color` | `#e0e0e0` |
| `--ds-color-input-number-control-disable-border-color` | `#ebebeb` |
| `--ds-color-input-number-control-disable-icon-color` | `#9e9e9e` |
| `--ds-color-input-number-control-disable-text-color` | `#9e9e9e` |
| `--ds-color-input-number-control-error-border-color` | `#ff5252` |
| `--ds-color-input-number-control-error-icon-color` | `#ff5252` |
| `--ds-color-input-number-control-focus-border-color` | `#448aff` |
| `--ds-color-input-number-control-hover-border-color` | `#9e9e9e` |
| `--ds-color-input-number-input-background` | `#ffffff` |
| `--ds-color-input-number-input-icon-color` | `#616161` |
| `--ds-color-input-number-input-text-color` | `#333333` |
| `--ds-color-input-number-input-default-border-color` | `#e0e0e0` |
| `--ds-color-input-number-input-disable-border-color` | `#ebebeb` |
| `--ds-color-input-number-input-disable-icon-color` | `#9e9e9e` |
| `--ds-color-input-number-input-disable-text-color` | `#9e9e9e` |
| `--ds-color-input-number-input-error-border-color` | `#ff5252` |
| `--ds-color-input-number-input-error-icon-color` | `#ff5252` |
| `--ds-color-input-number-input-focus-border-color` | `#448aff` |
| `--ds-color-input-number-input-hover-border-color` | `#9e9e9e` |
| `--ds-color-input-filled-default-border-color` | `#e0e0e0` |
| `--ds-color-input-filled-default-icon-color-default` | `#616161` |
| `--ds-color-input-filled-default-icon-color-warning` | `#ea7806` |
| `--ds-color-input-filled-default-input-text-color` | `#333333` |
| `--ds-color-input-filled-default-label-text-color` | `#616161` |
| `--ds-color-input-filled-default-support-text-color` | `#616161` |
| `--ds-color-input-filled-disable-border-color` | `#ebebeb` |
| `--ds-color-input-filled-disable-icon-color-disable` | `#9e9e9e` |
| `--ds-color-input-filled-disable-icon-color-warning` | `#ea7806` |
| `--ds-color-input-filled-disable-input-background` | `#f5f5f5` |
| `--ds-color-input-filled-disable-input-text-color` | `#9e9e9e` |
| `--ds-color-input-filled-disable-label-text-color` | `#9e9e9e` |
| `--ds-color-input-filled-disable-support-text-color` | `#9e9e9e` |
| `--ds-color-input-filled-error-border-color` | `#ff5252` |
| `--ds-color-input-filled-error-icon-color-default` | `#616161` |
| `--ds-color-input-filled-error-icon-color-error` | `#ff5252` |
| `--ds-color-input-filled-error-icon-color-warning` | `#ea7806` |
| `--ds-color-input-filled-error-input-background-hover` | `#f5f5f5` |
| `--ds-color-input-filled-error-input-cursor-color` | `#333333` |
| `--ds-color-input-filled-error-input-text-color` | `#333333` |
| `--ds-color-input-filled-error-input-text-placeholder-color` | `#d6d6d6` |
| `--ds-color-input-filled-error-label-text-color` | `#ff5252` |
| `--ds-color-input-filled-error-text-support-color` | `#ff5252` |
| `--ds-color-input-filled-focus-border-color` | `#448aff` |
| `--ds-color-input-filled-focus-icon-color-default` | `#616161` |
| `--ds-color-input-filled-focus-icon-color-warning` | `#ea7806` |
| `--ds-color-input-filled-focus-input-cursor-color` | `#333333` |
| `--ds-color-input-filled-focus-input-text-color` | `#333333` |
| `--ds-color-input-filled-focus-input-text-placeholder-color` | `#d6d6d6` |
| `--ds-color-input-filled-focus-label-text-color` | `#448aff` |
| `--ds-color-input-filled-focus-support-text-color` | `#616161` |
| `--ds-color-input-filled-hover-border-color` | `#9e9e9e` |
| `--ds-color-input-filled-hover-icon-color-default` | `#616161` |
| `--ds-color-input-filled-hover-icon-color-warning` | `#ea7806` |
| `--ds-color-input-filled-hover-input-background-hover` | `#f5f5f5` |
| `--ds-color-input-filled-hover-input-text-color` | `#333333` |
| `--ds-color-input-filled-hover-label-text-color` | `#616161` |
| `--ds-color-input-filled-hover-text-support-color` | `#616161` |
| `--ds-color-input-outlined-default-background` | `#ffffff` |
| `--ds-color-input-outlined-default-border-color` | `#e0e0e0` |
| `--ds-color-input-outlined-default-icon-color` | `#616161` |
| `--ds-color-input-outlined-default-text-color` | `#333333` |
| `--ds-color-input-outlined-error-background` | `#ebebeb` |
| `--ds-color-input-outlined-error-border-color` | `#e0e0e0` |
| `--ds-color-input-outlined-error-icon-color` | `#616161` |
| `--ds-color-input-outlined-error-text-color` | `#333333` |
| `--ds-color-input-outlined-focus-background` | `#ebebeb` |
| `--ds-color-input-outlined-focus-border-color` | `#e0e0e0` |
| `--ds-color-input-outlined-focus-icon-color` | `#616161` |
| `--ds-color-input-outlined-focus-text-color` | `#333333` |
| `--ds-color-input-outlined-hover-background` | `#fafafa` |
| `--ds-color-input-outlined-hover-border-color` | `#e0e0e0` |
| `--ds-color-input-outlined-hover-icon-color` | `#616161` |
| `--ds-color-input-outlined-hover-text-color` | `#333333` |

#### Checkbox — `--ds-color-checkbox-*`

| Токен | Значение |
|---|---|
| `--ds-color-checkbox-group-text-color` | `#333333` |
| `--ds-color-checkbox-group-text-disable` | `#9e9e9e` |
| `--ds-color-checkbox-group-text-support-color` | `#616161` |
| `--ds-color-checkbox-group-text-support-error-color` | `#ff5252` |
| `--ds-color-checkbox-label-text-color` | `#333333` |
| `--ds-color-checkbox-label-text-disable-color` | `#9e9e9e` |
| `--ds-color-checkbox-label-text-support-color` | `#616161` |
| `--ds-color-checkbox-label-text-support-error-color` | `#ff5252` |
| `--ds-color-checkbox-disable-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-checkbox-disable-deselected-icon-color` | `#9e9e9e` |
| `--ds-color-checkbox-disable-inderterminate-icon-color` | `#9e9e9e` |
| `--ds-color-checkbox-disable-selected-icon-color` | `#9e9e9e` |
| `--ds-color-checkbox-error-icon-color` | `#ff5252` |
| `--ds-color-checkbox-error-deselected-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-checkbox-error-deselected-hover-background` | `#ffe5e5` |
| `--ds-color-checkbox-error-deselected-press-background` | `#ffcccc` |
| `--ds-color-checkbox-error-inderterminate-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-checkbox-error-inderterminate-hover-background` | `#ffe5e5` |
| `--ds-color-checkbox-error-inderterminate-press-background` | `#ffcccc` |
| `--ds-color-checkbox-error-selected-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-checkbox-error-selected-hover-background` | `#ffe5e5` |
| `--ds-color-checkbox-error-selected-press-background` | `#ffcccc` |
| `--ds-color-checkbox-normal-deselected-icon-color` | `#616161` |
| `--ds-color-checkbox-normal-deselected-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-checkbox-normal-deselected-hover-background` | `#ebebeb` |
| `--ds-color-checkbox-normal-deselected-press-background` | `#e0e0e0` |
| `--ds-color-checkbox-normal-inderterminate-icon-color` | `#448aff` |
| `--ds-color-checkbox-normal-inderterminate-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-checkbox-normal-inderterminate-hover-background` | `#e8f0ff` |
| `--ds-color-checkbox-normal-inderterminate-press-background` | `#ccdfff` |
| `--ds-color-checkbox-normal-selected-icon-color` | `#448aff` |
| `--ds-color-checkbox-normal-selected-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-checkbox-normal-selected-hover-background` | `#e8f0ff` |
| `--ds-color-checkbox-normal-selected-press-background` | `#ccdfff` |

#### Radio button — `--ds-color-radio-*`

| Токен | Значение |
|---|---|
| `--ds-color-radio-button-group-text-color` | `#333333` |
| `--ds-color-radio-button-group-text-disable-color` | `#9e9e9e` |
| `--ds-color-radio-button-group-text-support-color` | `#616161` |
| `--ds-color-radio-button-group-text-support-error-color` | `#ff5252` |
| `--ds-color-radio-button-label-text-color` | `#333333` |
| `--ds-color-radio-button-label-text-disable-color` | `#9e9e9e` |
| `--ds-color-radio-button-label-text-error-color` | `#ff5252` |
| `--ds-color-radio-button-label-text-support-color` | `#616161` |
| `--ds-color-radio-button-disable-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-radio-button-disable-deselected-icon-color` | `#9e9e9e` |
| `--ds-color-radio-button-disable-selected-icon-color` | `#9e9e9e` |
| `--ds-color-radio-button-error-icon-color` | `#ff5252` |
| `--ds-color-radio-button-error-deselected-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-radio-button-error-deselected-hover-background` | `#ffe5e5` |
| `--ds-color-radio-button-error-deselected-press-background` | `#ffcccc` |
| `--ds-color-radio-button-error-selected-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-radio-button-error-selected-hover-background` | `#ffe5e5` |
| `--ds-color-radio-button-error-selected-press-background` | `#ffcccc` |
| `--ds-color-radio-button-normal-deselected-icon-color` | `#616161` |
| `--ds-color-radio-button-normal-deselected-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-radio-button-normal-deselected-hover-background` | `#ebebeb` |
| `--ds-color-radio-button-normal-deselected-press-background` | `#e0e0e0` |
| `--ds-color-radio-button-normal-selected-icon-color` | `#448aff` |
| `--ds-color-radio-button-normal-selected-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-radio-button-normal-selected-hover-background` | `#e8f0ff` |
| `--ds-color-radio-button-normal-selected-press-background` | `#ccdfff` |

#### Badge — `--ds-color-badge-*`

| Токен | Значение |
|---|---|
| `--ds-color-badge-text-color` | `#ffffff` |
| `--ds-color-badge-accent-background` | `#448aff` |
| `--ds-color-badge-negative-background` | `#ff5252` |
| `--ds-color-badge-positive-background` | `#14b456` |
| `--ds-color-badge-warning-background` | `#ffab40` |

#### Chips — `--ds-color-chips-*`

| Токен | Значение |
|---|---|
| `--ds-color-chips-icon-color` | `#616161` |
| `--ds-color-chips-text-color` | `#333333` |
| `--ds-color-chips-input-background-support` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-chips-input-default-action-text-color` | `#616161` |
| `--ds-color-chips-input-default-background` | `#f8f9fc` |
| `--ds-color-chips-input-default-border-color` | `#e0e0e0` |
| `--ds-color-chips-input-default-label-text-color` | `#616161` |
| `--ds-color-chips-input-default-support-text-color` | `#616161` |
| `--ds-color-chips-input-disable-action-text-color` | `#9e9e9e` |
| `--ds-color-chips-input-disable-background` | `#f5f5f5` |
| `--ds-color-chips-input-disable-border-color` | `#ebebeb` |
| `--ds-color-chips-input-disable-icon-color` | `#9e9e9e` |
| `--ds-color-chips-input-disable-label-text-color` | `#9e9e9e` |
| `--ds-color-chips-input-disable-support-text-color` | `#9e9e9e` |
| `--ds-color-chips-input-error-action-text-color` | `#616161` |
| `--ds-color-chips-input-error-background` | `#f8f9fc` |
| `--ds-color-chips-input-error-background-hover` | `#f5f5f5` |
| `--ds-color-chips-input-error-border-color` | `#ff5252` |
| `--ds-color-chips-input-error-cursor-color` | `#333333` |
| `--ds-color-chips-input-error-icon-color` | `#ff5252` |
| `--ds-color-chips-input-error-label-text-color` | `#ff5252` |
| `--ds-color-chips-input-error-support-text-color` | `#ff5252` |
| `--ds-color-chips-input-error-text-placeholder-color` | `#d6d6d6` |
| `--ds-color-chips-input-focus-background` | `#f8f9fc` |
| `--ds-color-chips-input-focus-border-color` | `#448aff` |
| `--ds-color-chips-input-focus-label-text-color` | `#448aff` |
| `--ds-color-chips-input-focus-support-text-color` | `#616161` |
| `--ds-color-chips-input-focus-text-color` | `#333333` |
| `--ds-color-chips-input-focus-text-placeholder-color` | `#d6d6d6` |
| `--ds-color-chips-input-hover-action-text-color` | `#616161` |
| `--ds-color-chips-input-hover-background` | `#f5f5f5` |
| `--ds-color-chips-input-hover-border-color` | `#9e9e9e` |
| `--ds-color-chips-input-hover-label-text-color` | `#616161` |
| `--ds-color-chips-input-hover-support-text-color` | `#616161` |
| `--ds-color-chips-disable-background-filled` | `#ebebeb` |
| `--ds-color-chips-disable-background-outlined` | `#ffffff` |
| `--ds-color-chips-disable-border-color` | `#ebebeb` |
| `--ds-color-chips-disable-icon-color` | `#9e9e9e` |
| `--ds-color-chips-disable-text-color` | `#9e9e9e` |
| `--ds-color-chips-filled-default-background` | `#f8f9fc` |
| `--ds-color-chips-filled-hover-background` | `#f5f5f5` |
| `--ds-color-chips-filled-press-background` | `#e0e0e0` |
| `--ds-color-chips-outlined-default-background` | `#ffffff` |
| `--ds-color-chips-outlined-default-border-color` | `#e0e0e0` |
| `--ds-color-chips-outlined-focus-background` | `#ffffff` |
| `--ds-color-chips-outlined-focus-border-color` | `#448aff` |
| `--ds-color-chips-outlined-hover-background` | `#ffffff` |
| `--ds-color-chips-outlined-hover-border-color` | `#9e9e9e` |
| `--ds-color-chips-outlined-press-background` | `#e0e0e0` |
| `--ds-color-chips-outlined-press-border-color` | `#e0e0e0` |

#### Side nav — `--ds-color-sidenav-*`

| Токен | Значение |
|---|---|
| `--ds-color-sidenav-control-background` | `#263136` |
| `--ds-color-sidenav-control-background-hover` | `#36474e` |
| `--ds-color-sidenav-control-background-press` | `#36474e` |
| `--ds-color-sidenav-control-divider` | `#36474e` |
| `--ds-color-sidenav-control-text-color` | `#ffffff` |
| `--ds-color-sidenav-element-collaps-icon-background` | `#36474e` |
| `--ds-color-sidenav-footer-l2-background` | `#ffffff` |
| `--ds-color-sidenav-footer-l2-logo` | `#ff5252` |
| `--ds-color-sidenav-footer-l2-text-color` | `#616161` |
| `--ds-color-sidenav-header-l1-background` | `#263136` |
| `--ds-color-sidenav-header-l1-collapsed-logo` | `#ffffff` |
| `--ds-color-sidenav-header-l1-collapsed-logo-element` | `#ff5252` |
| `--ds-color-sidenav-header-l1-expanded-logo` | `#ffffff` |
| `--ds-color-sidenav-header-l2-background` | `#ffffff` |
| `--ds-color-sidenav-header-l2-text-color` | `#333333` |
| `--ds-color-sidenav-item-l1-background` | `#263136` |
| `--ds-color-sidenav-item-l1-background-hover` | `#36474e` |
| `--ds-color-sidenav-item-l1-background-selected` | `#4b626d` |
| `--ds-color-sidenav-item-l1-element-left` | `#ffffff` |
| `--ds-color-sidenav-item-l1-element-right` | `#ffffff` |
| `--ds-color-sidenav-item-l1-indicator` | `#ffffff` |
| `--ds-color-sidenav-item-l1-text-color` | `#ffffff` |
| `--ds-color-sidenav-item-l2-background` | `#ffffff` |
| `--ds-color-sidenav-item-l2-background-hover` | `#f8f9fc` |
| `--ds-color-sidenav-item-l2-background-selected` | `#f0f5ff` |
| `--ds-color-sidenav-item-l2-text-color` | `#333333` |
| `--ds-color-sidenav-item-l3-background` | `#ffffff` |
| `--ds-color-sidenav-item-l3-background-active` | `#f0f5ff` |
| `--ds-color-sidenav-item-l3-background-hover` | `#f8f9fc` |
| `--ds-color-sidenav-item-l3-background-selected` | `#f0f5ff` |
| `--ds-color-sidenav-item-l3-indicator` | `#448aff` |
| `--ds-color-sidenav-item-l3-text-color` | `#333333` |
| `--ds-color-sidenav-item-l3-text-color-selected` | `#448aff` |
| `--ds-color-sidenav-sidebar-info-background-container` | `#f8f9fc` |
| `--ds-color-sidenav-sidebar-l1-background` | `#263136` |
| `--ds-color-sidenav-sidebar-l2-background` | `#ffffff` |

#### Table — `--ds-color-table-*`

| Токен | Значение |
|---|---|
| `--ds-color-table-cell-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-table-cell-text-color` | `#333333` |
| `--ds-color-table-cell-content-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-table-cell-content-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-table-cell-content-disable-text-color` | `#9e9e9e` |
| `--ds-color-table-cell-content-edit-border-color` | `#448aff` |
| `--ds-color-table-cell-content-error-border-color` | `#ff5252` |
| `--ds-color-table-cell-content-focus-border-color` | `#448aff` |
| `--ds-color-table-cell-content-hover-background` | `#f5f5f5` |
| `--ds-color-table-cell-content-hover-border-color` | `#9e9e9e` |
| `--ds-color-table-cell-header-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-table-cell-header-default-background` | `#f0f5ff` |
| `--ds-color-table-cell-header-disable-background` | `#f0f5ff` |
| `--ds-color-table-cell-header-disable-icon-color` | `#9e9e9e` |
| `--ds-color-table-cell-header-disable-text-color` | `#9e9e9e` |
| `--ds-color-table-cell-header-hover-background` | `#f8f9fc` |
| `--ds-color-table-footer-background` | `#ffffff` |
| `--ds-color-table-row-content-border-color` | `#e0e0e0` |
| `--ds-color-table-row-content-default-background` | `#ffffff` |
| `--ds-color-table-row-content-hover-background` | `#f5f5f5` |
| `--ds-color-table-row-content-selected-background` | `#ebebeb` |
| `--ds-color-table-row-content-zebra-background` | `#f5f5f5` |
| `--ds-color-table-row-header-background-header` | `#f0f5ff` |

#### Status — `--ds-color-status-*`

| Токен | Значение |
|---|---|
| `--ds-color-status-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-status-icon-color` | `#616161` |
| `--ds-color-status-accent-filled-background` | `#f5f9ff` |
| `--ds-color-status-accent-filled-text-color` | `#448aff` |
| `--ds-color-status-accent-text-text-color` | `#448aff` |
| `--ds-color-status-contrast-1-filled-background` | `#fcf6fd` |
| `--ds-color-status-contrast-1-filled-text-color` | `#9c27b0` |
| `--ds-color-status-contrast-1-text-text-color` | `#9c27b0` |
| `--ds-color-status-contrast-2-filled-background` | `#fcf8f6` |
| `--ds-color-status-contrast-2-filled-text-color` | `#3e261e` |
| `--ds-color-status-contrast-2-text-text-color` | `#3e261e` |
| `--ds-color-status-contrast-3-filled-background` | `#f8fafc` |
| `--ds-color-status-contrast-3-filled-text-color` | `#263136` |
| `--ds-color-status-contrast-3-text-text-color` | `#263136` |
| `--ds-color-status-contrast-4-filled-background` | `#f9fbea` |
| `--ds-color-status-contrast-4-filled-text-color` | `#4f5412` |
| `--ds-color-status-contrast-4-text-text-color` | `#4f5412` |
| `--ds-color-status-negative-filled-background` | `#fff8f8` |
| `--ds-color-status-negative-filled-text-color` | `#ff5252` |
| `--ds-color-status-negative-text-text-color` | `#ff5252` |
| `--ds-color-status-neutral-filled-background` | `#fafafa` |
| `--ds-color-status-neutral-filled-text-color` | `#616161` |
| `--ds-color-status-neutral-text-text-color` | `#616161` |
| `--ds-color-status-positive-filled-background` | `#f3fcf7` |
| `--ds-color-status-positive-filled-text-color` | `#14b456` |
| `--ds-color-status-positive-text-text-color` | `#14b456` |
| `--ds-color-status-warning-filled-background` | `#fffcf8` |
| `--ds-color-status-warning-filled-text-color` | `#ea7806` |
| `--ds-color-status-warning-text-text-color` | `#ea7806` |

#### Snackbar — `--ds-color-snackbar-*`

| Токен | Значение |
|---|---|
| `--ds-color-snackbar-progress-color` | `#448aff` |
| `--ds-color-snackbar-dark-background` | `#424242` |
| `--ds-color-snackbar-dark-text-color` | `#ffffff` |
| `--ds-color-snackbar-dark-complex-accent-icon-color` | `#448aff` |
| `--ds-color-snackbar-dark-complex-negative-icon-color` | `#ff5252` |
| `--ds-color-snackbar-dark-complex-neutral-icon-color` | `#ffffff` |
| `--ds-color-snackbar-dark-complex-positive-icon-color` | `#14b456` |
| `--ds-color-snackbar-dark-complex-warning-icon-color` | `#ea7806` |
| `--ds-color-snackbar-dark-single-accent-icon-color` | `#448aff` |
| `--ds-color-snackbar-dark-single-negative-icon-color` | `#ff5252` |
| `--ds-color-snackbar-dark-single-neutral-icon-color` | `#ffffff` |
| `--ds-color-snackbar-dark-single-positive-icon-color` | `#14b456` |
| `--ds-color-snackbar-dark-single-warning-icon-color` | `#ea7806` |
| `--ds-color-snackbar-light-background` | `#ffffff` |
| `--ds-color-snackbar-light-text-color` | `#333333` |
| `--ds-color-snackbar-light-complex-accent-icon-color` | `#448aff` |
| `--ds-color-snackbar-light-complex-negative-icon-color` | `#ff5252` |
| `--ds-color-snackbar-light-complex-neutral-icon-color` | `#616161` |
| `--ds-color-snackbar-light-complex-positive-icon-color` | `#14b456` |
| `--ds-color-snackbar-light-complex-warning-icon-color` | `#ea7806` |
| `--ds-color-snackbar-light-single-accent-icon-color` | `#448aff` |
| `--ds-color-snackbar-light-single-negative-icon-color` | `#ff5252` |
| `--ds-color-snackbar-light-single-neutral-icon-color` | `#616161` |
| `--ds-color-snackbar-light-single-positive-icon-color` | `#14b456` |
| `--ds-color-snackbar-light-single-warning-icon-color` | `#ea7806` |

#### Stepper — `--ds-color-stepper-*`

| Токен | Значение |
|---|---|
| `--ds-color-stepper-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-stepper-divider-color` | `#616161` |
| `--ds-color-stepper-icon-color` | `#616161` |
| `--ds-color-stepper-text-color` | `#333333` |
| `--ds-color-stepper-default-background` | `#fafafa` |
| `--ds-color-stepper-default-icon-color` | `#616161` |
| `--ds-color-stepper-default-text-color` | `#333333` |
| `--ds-color-stepper-disable-background` | `#fafafa` |
| `--ds-color-stepper-disable-icon-color` | `#9e9e9e` |
| `--ds-color-stepper-disable-text-color` | `#9e9e9e` |
| `--ds-color-stepper-error-background` | `#fff8f8` |
| `--ds-color-stepper-error-icon-color` | `#ff5252` |
| `--ds-color-stepper-error-text-color` | `#ff5252` |
| `--ds-color-stepper-hover-background` | `#f5f9ff` |
| `--ds-color-stepper-hover-icon-color` | `#448aff` |
| `--ds-color-stepper-hover-text-color` | `#448aff` |
| `--ds-color-stepper-press-background` | `#f0f5ff` |
| `--ds-color-stepper-press-icon-color` | `#448aff` |
| `--ds-color-stepper-press-text-color` | `#3969d5` |
| `--ds-color-stepper-selected-background` | `#f5f9ff` |
| `--ds-color-stepper-selected-border-color` | `#448aff` |
| `--ds-color-stepper-selected-icon-color` | `#448aff` |
| `--ds-color-stepper-selected-text-color` | `#448aff` |

#### List — `--ds-color-list-*`

| Токен | Значение |
|---|---|
| `--ds-color-list-background` | `#ffffff` |
| `--ds-color-list-item-icon-color` | `#616161` |
| `--ds-color-list-item-text-color` | `#333333` |
| `--ds-color-list-item-text-label-color` | `#616161` |
| `--ds-color-list-item-default-background` | `#ffffff` |
| `--ds-color-list-item-disable-background` | `#ffffff` |
| `--ds-color-list-item-disable-icon-color` | `#9e9e9e` |
| `--ds-color-list-item-disable-label-text-color` | `#9e9e9e` |
| `--ds-color-list-item-disable-text-color` | `#9e9e9e` |
| `--ds-color-list-item-hover-background` | `#f5f5f5` |
| `--ds-color-list-item-link-background` | `#ffffff` |
| `--ds-color-list-item-link-text-color` | `#448aff` |
| `--ds-color-list-item-negative-background` | `#ffffff` |
| `--ds-color-list-item-negative-icon-color` | `#ff5252` |
| `--ds-color-list-item-negative-label-text-color` | `#ff5252` |
| `--ds-color-list-item-negative-text-color` | `#ff5252` |
| `--ds-color-list-item-press-background` | `#e0e0e0` |
| `--ds-color-list-item-selected-back-selected` | `#f5f9ff` |
| `--ds-color-list-item-selected-background` | `#ffffff` |
| `--ds-color-list-item-selected-icon-color` | `#448aff` |

#### Menu — `--ds-color-menu-*`

| Токен | Значение |
|---|---|
| `--ds-color-menu-background` | `#ffffff` |
| `--ds-color-menu-item-icon-color` | `#616161` |
| `--ds-color-menu-item-text-color` | `#333333` |
| `--ds-color-menu-item-text-label-color` | `#616161` |
| `--ds-color-menu-item-default-background` | `#ffffff` |
| `--ds-color-menu-item-disable-background` | `#ffffff` |
| `--ds-color-menu-item-disable-icon-color` | `#9e9e9e` |
| `--ds-color-menu-item-disable-label-text-color` | `#9e9e9e` |
| `--ds-color-menu-item-disable-text-color` | `#9e9e9e` |
| `--ds-color-menu-item-hover-background` | `#f5f5f5` |
| `--ds-color-menu-item-negative-background` | `#ffffff` |
| `--ds-color-menu-item-negative-icon-color` | `#ff5252` |
| `--ds-color-menu-item-negative-label-text-color` | `#ff5252` |
| `--ds-color-menu-item-negative-text-color` | `#ff5252` |
| `--ds-color-menu-item-press-background` | `#e0e0e0` |
| `--ds-color-menu-item-selected-back-selected` | `#f5f9ff` |
| `--ds-color-menu-item-selected-background` | `#ffffff` |
| `--ds-color-menu-item-selected-icon-color` | `#448aff` |

#### Expansion — `--ds-color-expansion-*`

| Токен | Значение |
|---|---|
| `--ds-color-expansion-panel-block-collaps-border-color` | `#e0e0e0` |
| `--ds-color-expansion-panel-block-collaps-content-background` | `#ffffff` |
| `--ds-color-expansion-panel-block-collaps-content-text-color` | `#333333` |
| `--ds-color-expansion-panel-block-expand-header-border-color` | `#e0e0e0` |
| `--ds-color-expansion-panel-block-expand-header-icon-color` | `#616161` |
| `--ds-color-expansion-panel-block-expand-header-text-color` | `#333333` |
| `--ds-color-expansion-panel-block-expand-header-default-background` | `#f8f9fc` |
| `--ds-color-expansion-panel-block-expand-header-disable-background` | `#f5f5f5` |
| `--ds-color-expansion-panel-block-expand-header-disable-border-color` | `#ebebeb` |
| `--ds-color-expansion-panel-block-expand-header-disable-text-color` | `#9e9e9e` |
| `--ds-color-expansion-panel-block-expand-header-hover-background` | `#f5f5f5` |
| `--ds-color-expansion-panel-block-expand-header-press-background` | `#e0e0e0` |

#### Tab — `--ds-color-tab-*`

| Токен | Значение |
|---|---|
| `--ds-color-tab-active-counter-text-color` | `#448aff` |
| `--ds-color-tab-active-divider` | `#448aff` |
| `--ds-color-tab-active-icon-color` | `#448aff` |
| `--ds-color-tab-active-text-color` | `#448aff` |
| `--ds-color-tab-active-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-tab-active-hover-background` | `#f5f5f5` |
| `--ds-color-tab-active-press-background` | `#e0e0e0` |
| `--ds-color-tab-disable-background` | `#ebebeb` |
| `--ds-color-tab-disable-divider` | `#ebebeb` |
| `--ds-color-tab-disable-icon-color` | `#9e9e9e` |
| `--ds-color-tab-disable-text-color` | `#9e9e9e` |
| `--ds-color-tab-innactive-counter-text-color` | `#333333` |
| `--ds-color-tab-innactive-icon-color` | `#616161` |
| `--ds-color-tab-innactive-text-color` | `#333333` |
| `--ds-color-tab-innactive-default-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-tab-innactive-hover-background` | `#f5f5f5` |
| `--ds-color-tab-innactive-press-background` | `#e0e0e0` |

#### Search — `--ds-color-search-*`

| Токен | Значение |
|---|---|
| `--ds-color-search-background` | `#f8f9fc` |
| `--ds-color-search-completed-border-color` | `#e0e0e0` |
| `--ds-color-search-completed-text-color` | `#333333` |
| `--ds-color-search-default-background-xs` | `#f0f5ff` |
| `--ds-color-search-default-border-color` | `#e0e0e0` |
| `--ds-color-search-default-text-color` | `#d6d6d6` |
| `--ds-color-search-disable-background` | `#ebebeb` |
| `--ds-color-search-disable-icon-color` | `#9e9e9e` |
| `--ds-color-search-disable-text-color` | `#9e9e9e` |
| `--ds-color-search-focus-border-color` | `#448aff` |
| `--ds-color-search-focus-cursor-color` | `#333333` |
| `--ds-color-search-focus-text-color` | `#d6d6d6` |
| `--ds-color-search-focus-value-border-color` | `#448aff` |
| `--ds-color-search-focus-value-text-color` | `#333333` |
| `--ds-color-search-hover-background-xs` | `#e8f0ff` |
| `--ds-color-search-hover-border-color` | `#9e9e9e` |
| `--ds-color-search-hover-text-color` | `#d6d6d6` |

#### Slide — `--ds-color-slide-*`

| Токен | Значение |
|---|---|
| `--ds-color-slide-toggle-knob-color` | `#ffffff` |
| `--ds-color-slide-toggle-text-color` | `#333333` |
| `--ds-color-slide-toggle-text-error-color` | `#ff5252` |
| `--ds-color-slide-toggle-text-support-color` | `#616161` |
| `--ds-color-slide-toggle-deselected-default-background` | `#9e9e9e` |
| `--ds-color-slide-toggle-deselected-disable-background` | `#e0e0e0` |
| `--ds-color-slide-toggle-deselected-disable-text-color` | `#9e9e9e` |
| `--ds-color-slide-toggle-deselected-hover-background` | `#757575` |
| `--ds-color-slide-toggle-selected-default-background` | `#448aff` |
| `--ds-color-slide-toggle-selected-disable-background` | `#e0e0e0` |
| `--ds-color-slide-toggle-selected-disable-text-color` | `#9e9e9e` |
| `--ds-color-slide-toggle-selected-hover-background` | `#3969d5` |

#### Banners — `--ds-color-banners-*`

| Токен | Значение |
|---|---|
| `--ds-color-banners-border-color` | `#448aff` |
| `--ds-color-banners-text-color` | `#333333` |
| `--ds-color-banners-accent-background` | `#f0f5ff` |
| `--ds-color-banners-accent-icon-color` | `#448aff` |
| `--ds-color-banners-negative-background` | `#fff2f2` |
| `--ds-color-banners-negative-icon-color` | `#ff5252` |
| `--ds-color-banners-neutral-background` | `#ffffff` |
| `--ds-color-banners-neutral-icon-color` | `#616161` |
| `--ds-color-banners-positive-background` | `#ebfbf2` |
| `--ds-color-banners-positive-icon-color` | `#14b456` |
| `--ds-color-banners-warning-background` | `#fff9f0` |
| `--ds-color-banners-warning-icon-color` | `#ea7806` |

#### Hint — `--ds-color-hint-*`

| Токен | Значение |
|---|---|
| `--ds-color-hint-background-color` | `#424242` |
| `--ds-color-hint-content-icon-color` | `#ffffff` |
| `--ds-color-hint-content-text-color` | `#ffffff` |
| `--ds-color-hint-footer-text-color` | `#ffffff` |
| `--ds-color-hint-header-icon-color` | `#ffffff` |
| `--ds-color-hint-header-text-color` | `#ffffff` |
| `--ds-color-hint-header-accent-icon-color` | `#448aff` |
| `--ds-color-hint-header-negative-icon-color` | `#ff5252` |
| `--ds-color-hint-header-neutral-icon-color` | `#ffffff` |
| `--ds-color-hint-header-positive-icon-color` | `#14b456` |
| `--ds-color-hint-header-warning-icon-color` | `#ea7806` |

#### Divider — `--ds-color-divider-*`

| Токен | Значение |
|---|---|
| `--ds-color-divider-dashed-default-color` | `#e0e0e0` |
| `--ds-color-divider-dashed-disable-color` | `#ebebeb` |
| `--ds-color-divider-dashed-selected-color` | `#448aff` |
| `--ds-color-divider-solid-default-color` | `#e0e0e0` |
| `--ds-color-divider-solid-disable-color` | `#ebebeb` |
| `--ds-color-divider-solid-hover-color` | `#448aff` |
| `--ds-color-divider-solid-lite-color` | `#e0e0e0` |
| `--ds-color-divider-solid-selected-color` | `#448aff` |

#### Текст (Text) — `--ds-color-text-*`

| Токен | Значение |
|---|---|
| `--ds-color-text-ui-icon-color` | `#616161` |
| `--ds-color-text-ui-text-color` | `#333333` |
| `--ds-color-text-ui-text-label-color` | `#616161` |
| `--ds-color-text-ui-text-placeholder` | `#d6d6d6` |
| `--ds-color-text-ui-default-background` | `#ffffff` |
| `--ds-color-text-ui-disable-background` | `#ffffff` |
| `--ds-color-text-ui-disable-icon-color` | `#9e9e9e` |
| `--ds-color-text-ui-disable-label-text-color` | `#9e9e9e` |
| `--ds-color-text-ui-disable-text-color` | `#9e9e9e` |
| `--ds-color-text-ui-hover-background` | `#f5f5f5` |
| `--ds-color-text-ui-link-background` | `#ffffff` |
| `--ds-color-text-ui-link-text-color` | `#448aff` |
| `--ds-color-text-ui-negative-background` | `#ffffff` |
| `--ds-color-text-ui-negative-icon-color` | `#ff5252` |
| `--ds-color-text-ui-negative-label-text-color` | `#ff5252` |
| `--ds-color-text-ui-negative-text-color` | `#ff5252` |
| `--ds-color-text-ui-press-background` | `#e0e0e0` |
| `--ds-color-text-ui-selected-back-selected` | `#f5f9ff` |
| `--ds-color-text-ui-selected-background` | `#ffffff` |
| `--ds-color-text-ui-selected-icon-color` | `#448aff` |

#### Прочее — `--ds-color-backdrop-*`

| Токен | Значение |
|---|---|
| `--ds-color-backdrop-background` | `#333333` |

#### Прочее — `--ds-color-card-*`

| Токен | Значение |
|---|---|
| `--ds-color-card-background` | `#ffffff` |
| `--ds-color-card-content-text-color` | `#616161` |
| `--ds-color-card-content-title-color` | `#333333` |
| `--ds-color-card-header-desc-color` | `#616161` |
| `--ds-color-card-header-title-color` | `#333333` |

#### Прочее — `--ds-color-dialog-*`

| Токен | Значение |
|---|---|
| `--ds-color-dialog-background` | `#ffffff` |
| `--ds-color-dialog-content-text-color` | `#616161` |
| `--ds-color-dialog-content-title-color` | `#333333` |
| `--ds-color-dialog-header-desc-color` | `#616161` |
| `--ds-color-dialog-header-title-color` | `#333333` |

#### Прочее — `--ds-color-scroll-*`

| Токен | Значение |
|---|---|
| `--ds-color-scroll-background` | `rgba(255, 255, 255, 0.0)` |
| `--ds-color-scroll-default-background` | `#fafafa` |
| `--ds-color-scroll-default-knob-color` | `#d6d6d6` |
| `--ds-color-scroll-hover-background` | `#ebebeb` |
| `--ds-color-scroll-hover-knob-color` | `#9e9e9e` |

### Base Size

| Токен | Значение |
|---|---|
| `--ds-size-0` | `0px` |
| `--ds-size-0-25x` | `1px` |
| `--ds-size-0-5x` | `2px` |
| `--ds-size-1x` | `4px` |
| `--ds-size-1-5x` | `6px` |
| `--ds-size-2x` | `8px` |
| `--ds-size-2-5x` | `10px` |
| `--ds-size-3x` | `12px` |
| `--ds-size-3-5x` | `14px` |
| `--ds-size-4x` | `16px` |
| `--ds-size-5x` | `20px` |
| `--ds-size-6x` | `24px` |
| `--ds-size-7x` | `28px` |
| `--ds-size-8x` | `32px` |
| `--ds-size-8-5x` | `34px` |
| `--ds-size-9x` | `36px` |
| `--ds-size-10x` | `40px` |
| `--ds-size-circular` | `9999px` |

### Space

| Токен | Значение |
|---|---|
| `--ds-space-0` | `0px` |
| `--ds-space-0-5x` | `2px` |
| `--ds-space-1x` | `4px` |
| `--ds-space-1-5x` | `6px` |
| `--ds-space-2x` | `8px` |
| `--ds-space-2-5x` | `10px` |
| `--ds-space-3x` | `12px` |
| `--ds-space-3-5x` | `14px` |
| `--ds-space-4x` | `16px` |
| `--ds-space-5x` | `20px` |
| `--ds-space-6x` | `24px` |
| `--ds-space-7x` | `28px` |
| `--ds-space-8x` | `32px` |

### Radius

| Токен | Значение |
|---|---|
| `--ds-radius-0` | `0px` |
| `--ds-radius-0-5x` | `2px` |
| `--ds-radius-1x` | `4px` |
| `--ds-radius-1-5x` | `6px` |
| `--ds-radius-2x` | `8px` |
| `--ds-radius-3x` | `12px` |
| `--ds-radius-4x` | `16px` |
| `--ds-radius-6x` | `24px` |
| `--ds-radius-circular` | `9999px` |

### Base Stroke

| Токен | Значение |
|---|---|
| `--ds-stroke-0-25x` | `1px` |
| `--ds-stroke-dash` | `1px` |
| `--ds-stroke-pad` | `1px` |
| `--ds-stroke-0-5x` | `2px` |
| `--ds-stroke-1x` | `4px` |

### Типографика (Typography + Base Typography)

Шрифт: **Roboto** (400/500). Размеры, веса, межбуквенные расстояния и высоты строк — только из токенов.

| Токен | Значение |
|---|---|
| `--ds-typography-body-font-size-s` | `14px` |
| `--ds-typography-body-font-size-m` | `16px` |
| `--ds-typography-body-font-size-l` | `18px` |
| `--ds-typography-body-line-height-s` | `20px` |
| `--ds-typography-body-line-height-l` | `24px` |
| `--ds-typography-body-line-height-m` | `24px` |
| `--ds-typography-caption-font-size-s` | `8px` |
| `--ds-typography-caption-font-size-m` | `10px` |
| `--ds-typography-caption-font-size-l` | `12px` |
| `--ds-typography-caption-line-height-s` | `10px` |
| `--ds-typography-caption-line-height-m` | `12px` |
| `--ds-typography-caption-line-height-l` | `16px` |
| `--ds-typography-header-font-size-s` | `20px` |
| `--ds-typography-header-font-size-m` | `24px` |
| `--ds-typography-header-font-size-l` | `34px` |
| `--ds-typography-header-line-height-s` | `28px` |
| `--ds-typography-header-line-height-m` | `32px` |
| `--ds-typography-header-line-height-l` | `40px` |
| `--ds-typography-letter-spacing-none` | `0px` |
| `--ds-typography-letter-spacing-s` | `0.5px` |
| `--ds-typography-letter-spacing-m` | `1px` |
| `--ds-typography-font-size-2x` | `8px` |
| `--ds-typography-font-size-2-5x` | `10px` |
| `--ds-typography-font-size-3x` | `12px` |
| `--ds-typography-font-size-3-5x` | `14px` |
| `--ds-typography-font-size-4x` | `16px` |
| `--ds-typography-font-size-4-5x` | `18px` |
| `--ds-typography-font-size-5x` | `20px` |
| `--ds-typography-font-size-6x` | `24px` |
| `--ds-typography-font-size-8-5x` | `34px` |
| `--ds-typography-font-weight-regular` | `400` |
| `--ds-typography-font-weight-medium` | `500` |
| `--ds-typography-letter-spacing-none` | `0px` |
| `--ds-typography-letter-spacing-0-125x` | `0.5px` |
| `--ds-typography-letter-spacing-0-25x` | `1px` |
| `--ds-typography-line-height-2-5x` | `10px` |
| `--ds-typography-line-height-3x` | `12px` |
| `--ds-typography-line-height-4x` | `16px` |
| `--ds-typography-line-height-5x` | `20px` |
| `--ds-typography-line-height-6x` | `24px` |
| `--ds-typography-line-height-7x` | `28px` |
| `--ds-typography-line-height-8x` | `32px` |
| `--ds-typography-line-height-10x` | `40px` |

### Тени (Shadows)

| Токен | Значение |
|---|---|
| `--ds-shadow-sl` | `0px 2px 2px 0px rgba(33, 33, 33, 0.039), 0px 0px 4px 0px rgba(33, 33, 33, 0.122)` |
| `--ds-shadow-s` | `0px 4px 6px 0px rgba(33, 33, 33, 0.102), 0px 0px 16px 0px rgba(33, 33, 33, 0.122)` |
| `--ds-shadow-m` | `0px 10px 24px 0px rgba(33, 33, 33, 0.122), 0px 0px 28px 0px rgba(33, 33, 33, 0.122)` |
| `--ds-shadow-xl` | `0px 12px 16px 0px rgba(33, 33, 33, 0.161), 0px 0px 32px 0px rgba(33, 33, 33, 0.161)` |


## Компоненты


### Каталог компонентов Figma (все 121)

Полный набор компонентов дизайн-системы (сканирование всех страниц файла Figma CJBjyS1OnRXqiOqaXYVCVd, включая неопубликованные и вложенные): свойства, все значения вариантов и токены компонента.

**Всего компонентов: 121**

#### Arrow `[55939:14119]` — 13 вариантов
- **Content** (VARIANT): arrow_back, arrow_downward_alt, arrow_drop_down, arrow_drop_up, arrow_forward, arrow_left, arrow_right, arrow_upward_alt, keyboard_arrow_down, keyboard_arrow_left, keyboard_arrow_right, keyboard_arrow_up, unfold_less

#### Arrow list `[55939:13307]` — 13 вариантов
- **Content** (VARIANT): arrow_back, arrow_downward_alt, arrow_drop_down, arrow_drop_up, arrow_forward, arrow_left, arrow_right, arrow_upward_alt, keyboard_arrow_down, keyboard_arrow_left, keyboard_arrow_right, keyboard_arrow_up, unfold_less

#### Arrow menu `[56090:1628]` — 13 вариантов
- **Content** (VARIANT): arrow_back, arrow_downward_alt, arrow_drop_down, arrow_drop_up, arrow_forward, arrow_left, arrow_right, arrow_upward_alt, keyboard_arrow_down, keyboard_arrow_left, keyboard_arrow_right, keyboard_arrow_up, unfold_less

#### Arrow select `[57735:17989]` — 13 вариантов
- **Content** (VARIANT): arrow_back, arrow_downward_alt, arrow_drop_down, arrow_drop_up, arrow_forward, arrow_left, arrow_right, arrow_upward_alt, keyboard_arrow_down, keyboard_arrow_left, keyboard_arrow_right, keyboard_arrow_up, unfold_less

#### Autocomplete form `[58107:8230]` — 10 вариантов
- **Variant** (VARIANT): Empty, Populated
- **State** (VARIANT): Default, Disable, Error, Focus, Focus+Value, Hover

#### Backdrop `[53623:806]` — 1 вариантов
- **Type** (VARIANT): Default
- Токены компонента (1):
    - `--ds-color-backdrop-background`: `#333333`

#### Badge `[54428:187]` — 8 вариантов
- **Style** (VARIANT): Accent, Negative, Positive, Warning
- **Type** (VARIANT): Counter, Point
- Токены компонента (5):
    - `--ds-color-badge-text-color`: `#ffffff`
    - `--ds-color-badge-accent-background`: `#448aff`
    - `--ds-color-badge-negative-background`: `#ff5252`
    - `--ds-color-badge-positive-background`: `#14b456`
    - `--ds-color-badge-warning-background`: `#ffab40`

#### Banners `[54367:2566]` — 12 вариантов
- **Style** (VARIANT): Accent, Negative, Neutral, Positive, Tip, Warning
- **Orientation** (VARIANT): Horizontal, Vertical
- Прочие свойства: Element left#18321:0 (BOOLEAN), Buttons#54443:2 (BOOLEAN), Close#54443:4 (BOOLEAN)
- Токены компонента (12):
    - `--ds-color-banners-border-color`: `#448aff`
    - `--ds-color-banners-text-color`: `#333333`
    - `--ds-color-banners-accent-background`: `#f0f5ff`
    - `--ds-color-banners-accent-icon-color`: `#448aff`
    - `--ds-color-banners-negative-background`: `#fff2f2`
    - `--ds-color-banners-negative-icon-color`: `#ff5252`
    - `--ds-color-banners-neutral-background`: `#ffffff`
    - `--ds-color-banners-neutral-icon-color`: `#616161`
    - `--ds-color-banners-positive-background`: `#ebfbf2`
    - `--ds-color-banners-positive-icon-color`: `#14b456`
    - `--ds-color-banners-warning-background`: `#fff9f0`
    - `--ds-color-banners-warning-icon-color`: `#ea7806`

#### Button `[17022:63091]` — 153 вариантов
- **Size** (VARIANT): M, S, XS
- **Style** (VARIANT): Accent, Disable, Negative, Neutral, Positive, Warning
- **Type** (VARIANT): Filled, Outlined, Text
- **State** (VARIANT): Default, Disable, Hover, Loading, Press
- Прочие свойства: Element left#17025:2 (BOOLEAN), Element right#17025:123 (BOOLEAN), Button text#17039:607 (TEXT), Text#17053:733 (BOOLEAN)
- Токены компонента (229):
    - `--ds-color-button-icon-accent-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-accent-filled-default-background`: `#448aff`
    - `--ds-color-button-icon-accent-filled-hover-background`: `#3969d5`
    - `--ds-color-button-icon-accent-filled-press-background`: `#2651b5`
    - `--ds-color-button-icon-accent-outlined-border-color`: `#448aff`
    - `--ds-color-button-icon-accent-outlined-icon-color`: `#448aff`
    - `--ds-color-button-icon-accent-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-accent-outlined-hover-background`: `#f5f9ff`
    - `--ds-color-button-icon-accent-outlined-press-background`: `#e8f0ff`
    - `--ds-color-button-icon-accent-text-icon-color`: `#448aff`
    - `--ds-color-button-icon-accent-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-accent-text-hover-background`: `#f5f9ff`
    - `--ds-color-button-icon-accent-text-press-background`: `#e8f0ff`
    - `--ds-color-button-icon-disable-background-filled`: `#ebebeb`
    - `--ds-color-button-icon-disable-background-outlined`: `#ebebeb`
    - `--ds-color-button-icon-disable-background-text`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-disable-border-color`: `#ebebeb`
    - `--ds-color-button-icon-disable-icon-color`: `#9e9e9e`
    - `--ds-color-button-icon-negative-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-negative-filled-default-background`: `#ff5252`
    - `--ds-color-button-icon-negative-filled-hover-background`: `#f4372f`
    - `--ds-color-button-icon-negative-filled-press-background`: `#de1a12`
    - `--ds-color-button-icon-negative-outlined-border-color`: `#ff5252`
    - `--ds-color-button-icon-negative-outlined-icon-color`: `#ff5252`
    - `--ds-color-button-icon-negative-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-negative-outlined-hover-background`: `#fff8f8`
    - `--ds-color-button-icon-negative-outlined-press-background`: `#ffe5e5`
    - `--ds-color-button-icon-negative-text-icon-color`: `#ff5252`
    - `--ds-color-button-icon-negative-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-negative-text-hover-background`: `#fff8f8`
    - `--ds-color-button-icon-negative-text-press-background`: `#ffe5e5`
    - `--ds-color-button-icon-neutral-filled-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-filled-default-background`: `#ffffff`
    - `--ds-color-button-icon-neutral-filled-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-filled-press-background`: `#ebebeb`
    - `--ds-color-button-icon-neutral-outlined-border-color`: `#e0e0e0`
    - `--ds-color-button-icon-neutral-outlined-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-neutral-outlined-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-outlined-press-background`: `#ebebeb`
    - `--ds-color-button-icon-neutral-text-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-neutral-text-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-text-press-background`: `#ebebeb`
    - `--ds-color-button-icon-positive-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-positive-filled-default-background`: `#14b456`
    - `--ds-color-button-icon-positive-filled-hover-background`: `#119c34`
    - `--ds-color-button-icon-positive-filled-press-background`: `#0f852c`
    - `--ds-color-button-icon-positive-outlined-border-color`: `#14b456`
    - `--ds-color-button-icon-positive-outlined-icon-color`: `#14b456`
    - `--ds-color-button-icon-positive-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-positive-outlined-hover-background`: `#f3fcf7`
    - `--ds-color-button-icon-positive-outlined-press-background`: `#e0f8ea`
    - `--ds-color-button-icon-positive-text-icon-color`: `#14b456`
    - `--ds-color-button-icon-positive-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-positive-text-hover-background`: `#f3fcf7`
    - `--ds-color-button-icon-positive-text-press-background`: `#e0f8ea`
    - `--ds-color-button-icon-warning-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-warning-filled-default-background`: `#ffab40`
    - `--ds-color-button-icon-warning-filled-hover-background`: `#fe8c06`
    - `--ds-color-button-icon-warning-filled-press-background`: `#ea7806`
    - `--ds-color-button-icon-warning-outlined-border-color`: `#ffab40`
    - `--ds-color-button-icon-warning-outlined-icon-color`: `#ea7806`
    - `--ds-color-button-icon-warning-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-warning-outlined-hover-background`: `#fffcf8`
    - `--ds-color-button-icon-warning-outlined-press-background`: `#fff4e5`
    - `--ds-color-button-icon-warning-text-icon-color`: `#ea7806`
    - `--ds-color-button-icon-warning-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-warning-text-hover-background`: `#fffcf8`
    - `--ds-color-button-icon-warning-text-press-background`: `#fff4e5`
    - `--ds-color-button-toggle-filled-background`: `#ffffff`
    - `--ds-color-button-toggle-outlined-background`: `#ffffff`
    - `--ds-color-button-toggle-outlined-border-color`: `#e0e0e0`
    - `--ds-color-button-accent-filled-default-background`: `#448aff`
    - `--ds-color-button-accent-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-accent-filled-hover-background`: `#3969d5`
    - `--ds-color-button-accent-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-accent-filled-press-background`: `#2651b5`
    - `--ds-color-button-accent-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-accent-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-accent-outlined-default-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-default-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-default-text-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-background`: `#f5f9ff`
    - `--ds-color-button-accent-outlined-hover-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-text-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-background`: `#e8f0ff`
    - `--ds-color-button-accent-outlined-press-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-text-color`: `#448aff`
    - `--ds-color-button-accent-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-accent-text-default-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-default-text-color`: `#448aff`
    - `--ds-color-button-accent-text-hover-background`: `#f5f9ff`
    - `--ds-color-button-accent-text-hover-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-hover-text-color`: `#448aff`
    - `--ds-color-button-accent-text-press-background`: `#e8f0ff`
    - `--ds-color-button-accent-text-press-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-press-text-color`: `#448aff`
    - `--ds-color-button-disable-background-filled`: `#ebebeb`
    - `--ds-color-button-disable-background-outlined`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-disable-background-text`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-disable-border-color`: `#ebebeb`
    - `--ds-color-button-disable-icon-color`: `#9e9e9e`
    - `--ds-color-button-disable-text-color`: `#9e9e9e`
    - `--ds-color-button-negative-filled-default-background`: `#ff5252`
    - `--ds-color-button-negative-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-negative-filled-hover-background`: `#f4372f`
    - `--ds-color-button-negative-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-negative-filled-press-background`: `#de1a12`
    - `--ds-color-button-negative-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-negative-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-negative-outlined-default-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-default-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-default-text-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-background`: `#fff8f8`
    - `--ds-color-button-negative-outlined-hover-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-text-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-background`: `#ffe5e5`
    - `--ds-color-button-negative-outlined-press-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-negative-text-default-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-default-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-hover-background`: `#fff8f8`
    - `--ds-color-button-negative-text-hover-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-hover-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-press-background`: `#ffe5e5`
    - `--ds-color-button-negative-text-press-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-press-text-color`: `#ff5252`
    - `--ds-color-button-neutral-filled-default-background`: `#ffffff`
    - `--ds-color-button-neutral-filled-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-default-text-color`: `#333333`
    - `--ds-color-button-neutral-filled-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-filled-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-filled-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-filled-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-press-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-neutral-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-default-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-outlined-hover-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-outlined-press-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-press-text-color`: `#333333`
    - `--ds-color-button-neutral-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-neutral-text-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-default-text-color`: `#333333`
    - `--ds-color-button-neutral-text-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-text-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-text-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-text-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-press-text-color`: `#333333`
    - `--ds-color-button-positive-filled-default-background`: `#14b456`
    - `--ds-color-button-positive-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-positive-filled-hover-background`: `#119c34`
    - `--ds-color-button-positive-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-positive-filled-press-background`: `#0f852c`
    - `--ds-color-button-positive-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-positive-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-positive-outlined-default-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-default-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-default-text-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-background`: `#f3fcf7`
    - `--ds-color-button-positive-outlined-hover-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-text-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-background`: `#e0f8ea`
    - `--ds-color-button-positive-outlined-press-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-text-color`: `#14b456`
    - `--ds-color-button-positive-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-positive-text-default-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-default-text-color`: `#14b456`
    - `--ds-color-button-positive-text-hover-background`: `#f3fcf7`
    - `--ds-color-button-positive-text-hover-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-hover-text-color`: `#14b456`
    - `--ds-color-button-positive-text-press-background`: `#e0f8ea`
    - `--ds-color-button-positive-text-press-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-press-text-color`: `#14b456`
    - `--ds-color-button-warning-filled-default-background`: `#ffab40`
    - `--ds-color-button-warning-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-warning-filled-hover-background`: `#fe8c06`
    - `--ds-color-button-warning-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-warning-filled-press-background`: `#ea7806`
    - `--ds-color-button-warning-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-warning-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-warning-outlined-default-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-default-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-default-text-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-hover-background`: `#fffcf8`
    - `--ds-color-button-warning-outlined-hover-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-hover-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-hover-text-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-press-background`: `#fff4e5`
    - `--ds-color-button-warning-outlined-press-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-press-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-press-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-warning-text-default-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-default-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-hover-background`: `#fffcf8`
    - `--ds-color-button-warning-text-hover-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-hover-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-press-background`: `#fff4e5`
    - `--ds-color-button-warning-text-press-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-press-text-color`: `#ea7806`

#### Button `[16953:14851]` — 13 вариантов
- **Type** (VARIANT): Icon, Icon_outlined
- **State** (VARIANT): Disable, Enabled, Error, No border, Primary, Secondary, Warning
- **Icon** (VARIANT): Yes
- Токены компонента (229):
    - `--ds-color-button-icon-accent-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-accent-filled-default-background`: `#448aff`
    - `--ds-color-button-icon-accent-filled-hover-background`: `#3969d5`
    - `--ds-color-button-icon-accent-filled-press-background`: `#2651b5`
    - `--ds-color-button-icon-accent-outlined-border-color`: `#448aff`
    - `--ds-color-button-icon-accent-outlined-icon-color`: `#448aff`
    - `--ds-color-button-icon-accent-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-accent-outlined-hover-background`: `#f5f9ff`
    - `--ds-color-button-icon-accent-outlined-press-background`: `#e8f0ff`
    - `--ds-color-button-icon-accent-text-icon-color`: `#448aff`
    - `--ds-color-button-icon-accent-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-accent-text-hover-background`: `#f5f9ff`
    - `--ds-color-button-icon-accent-text-press-background`: `#e8f0ff`
    - `--ds-color-button-icon-disable-background-filled`: `#ebebeb`
    - `--ds-color-button-icon-disable-background-outlined`: `#ebebeb`
    - `--ds-color-button-icon-disable-background-text`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-disable-border-color`: `#ebebeb`
    - `--ds-color-button-icon-disable-icon-color`: `#9e9e9e`
    - `--ds-color-button-icon-negative-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-negative-filled-default-background`: `#ff5252`
    - `--ds-color-button-icon-negative-filled-hover-background`: `#f4372f`
    - `--ds-color-button-icon-negative-filled-press-background`: `#de1a12`
    - `--ds-color-button-icon-negative-outlined-border-color`: `#ff5252`
    - `--ds-color-button-icon-negative-outlined-icon-color`: `#ff5252`
    - `--ds-color-button-icon-negative-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-negative-outlined-hover-background`: `#fff8f8`
    - `--ds-color-button-icon-negative-outlined-press-background`: `#ffe5e5`
    - `--ds-color-button-icon-negative-text-icon-color`: `#ff5252`
    - `--ds-color-button-icon-negative-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-negative-text-hover-background`: `#fff8f8`
    - `--ds-color-button-icon-negative-text-press-background`: `#ffe5e5`
    - `--ds-color-button-icon-neutral-filled-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-filled-default-background`: `#ffffff`
    - `--ds-color-button-icon-neutral-filled-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-filled-press-background`: `#ebebeb`
    - `--ds-color-button-icon-neutral-outlined-border-color`: `#e0e0e0`
    - `--ds-color-button-icon-neutral-outlined-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-neutral-outlined-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-outlined-press-background`: `#ebebeb`
    - `--ds-color-button-icon-neutral-text-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-neutral-text-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-text-press-background`: `#ebebeb`
    - `--ds-color-button-icon-positive-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-positive-filled-default-background`: `#14b456`
    - `--ds-color-button-icon-positive-filled-hover-background`: `#119c34`
    - `--ds-color-button-icon-positive-filled-press-background`: `#0f852c`
    - `--ds-color-button-icon-positive-outlined-border-color`: `#14b456`
    - `--ds-color-button-icon-positive-outlined-icon-color`: `#14b456`
    - `--ds-color-button-icon-positive-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-positive-outlined-hover-background`: `#f3fcf7`
    - `--ds-color-button-icon-positive-outlined-press-background`: `#e0f8ea`
    - `--ds-color-button-icon-positive-text-icon-color`: `#14b456`
    - `--ds-color-button-icon-positive-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-positive-text-hover-background`: `#f3fcf7`
    - `--ds-color-button-icon-positive-text-press-background`: `#e0f8ea`
    - `--ds-color-button-icon-warning-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-warning-filled-default-background`: `#ffab40`
    - `--ds-color-button-icon-warning-filled-hover-background`: `#fe8c06`
    - `--ds-color-button-icon-warning-filled-press-background`: `#ea7806`
    - `--ds-color-button-icon-warning-outlined-border-color`: `#ffab40`
    - `--ds-color-button-icon-warning-outlined-icon-color`: `#ea7806`
    - `--ds-color-button-icon-warning-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-warning-outlined-hover-background`: `#fffcf8`
    - `--ds-color-button-icon-warning-outlined-press-background`: `#fff4e5`
    - `--ds-color-button-icon-warning-text-icon-color`: `#ea7806`
    - `--ds-color-button-icon-warning-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-warning-text-hover-background`: `#fffcf8`
    - `--ds-color-button-icon-warning-text-press-background`: `#fff4e5`
    - `--ds-color-button-toggle-filled-background`: `#ffffff`
    - `--ds-color-button-toggle-outlined-background`: `#ffffff`
    - `--ds-color-button-toggle-outlined-border-color`: `#e0e0e0`
    - `--ds-color-button-accent-filled-default-background`: `#448aff`
    - `--ds-color-button-accent-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-accent-filled-hover-background`: `#3969d5`
    - `--ds-color-button-accent-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-accent-filled-press-background`: `#2651b5`
    - `--ds-color-button-accent-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-accent-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-accent-outlined-default-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-default-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-default-text-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-background`: `#f5f9ff`
    - `--ds-color-button-accent-outlined-hover-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-text-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-background`: `#e8f0ff`
    - `--ds-color-button-accent-outlined-press-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-text-color`: `#448aff`
    - `--ds-color-button-accent-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-accent-text-default-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-default-text-color`: `#448aff`
    - `--ds-color-button-accent-text-hover-background`: `#f5f9ff`
    - `--ds-color-button-accent-text-hover-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-hover-text-color`: `#448aff`
    - `--ds-color-button-accent-text-press-background`: `#e8f0ff`
    - `--ds-color-button-accent-text-press-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-press-text-color`: `#448aff`
    - `--ds-color-button-disable-background-filled`: `#ebebeb`
    - `--ds-color-button-disable-background-outlined`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-disable-background-text`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-disable-border-color`: `#ebebeb`
    - `--ds-color-button-disable-icon-color`: `#9e9e9e`
    - `--ds-color-button-disable-text-color`: `#9e9e9e`
    - `--ds-color-button-negative-filled-default-background`: `#ff5252`
    - `--ds-color-button-negative-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-negative-filled-hover-background`: `#f4372f`
    - `--ds-color-button-negative-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-negative-filled-press-background`: `#de1a12`
    - `--ds-color-button-negative-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-negative-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-negative-outlined-default-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-default-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-default-text-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-background`: `#fff8f8`
    - `--ds-color-button-negative-outlined-hover-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-text-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-background`: `#ffe5e5`
    - `--ds-color-button-negative-outlined-press-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-negative-text-default-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-default-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-hover-background`: `#fff8f8`
    - `--ds-color-button-negative-text-hover-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-hover-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-press-background`: `#ffe5e5`
    - `--ds-color-button-negative-text-press-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-press-text-color`: `#ff5252`
    - `--ds-color-button-neutral-filled-default-background`: `#ffffff`
    - `--ds-color-button-neutral-filled-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-default-text-color`: `#333333`
    - `--ds-color-button-neutral-filled-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-filled-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-filled-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-filled-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-press-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-neutral-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-default-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-outlined-hover-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-outlined-press-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-press-text-color`: `#333333`
    - `--ds-color-button-neutral-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-neutral-text-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-default-text-color`: `#333333`
    - `--ds-color-button-neutral-text-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-text-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-text-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-text-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-press-text-color`: `#333333`
    - `--ds-color-button-positive-filled-default-background`: `#14b456`
    - `--ds-color-button-positive-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-positive-filled-hover-background`: `#119c34`
    - `--ds-color-button-positive-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-positive-filled-press-background`: `#0f852c`
    - `--ds-color-button-positive-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-positive-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-positive-outlined-default-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-default-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-default-text-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-background`: `#f3fcf7`
    - `--ds-color-button-positive-outlined-hover-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-text-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-background`: `#e0f8ea`
    - `--ds-color-button-positive-outlined-press-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-text-color`: `#14b456`
    - `--ds-color-button-positive-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-positive-text-default-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-default-text-color`: `#14b456`
    - `--ds-color-button-positive-text-hover-background`: `#f3fcf7`
    - `--ds-color-button-positive-text-hover-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-hover-text-color`: `#14b456`
    - `--ds-color-button-positive-text-press-background`: `#e0f8ea`
    - `--ds-color-button-positive-text-press-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-press-text-color`: `#14b456`
    - `--ds-color-button-warning-filled-default-background`: `#ffab40`
    - `--ds-color-button-warning-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-warning-filled-hover-background`: `#fe8c06`
    - `--ds-color-button-warning-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-warning-filled-press-background`: `#ea7806`
    - `--ds-color-button-warning-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-warning-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-warning-outlined-default-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-default-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-default-text-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-hover-background`: `#fffcf8`
    - `--ds-color-button-warning-outlined-hover-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-hover-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-hover-text-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-press-background`: `#fff4e5`
    - `--ds-color-button-warning-outlined-press-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-press-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-press-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-warning-text-default-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-default-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-hover-background`: `#fffcf8`
    - `--ds-color-button-warning-text-hover-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-hover-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-press-background`: `#fff4e5`
    - `--ds-color-button-warning-text-press-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-press-text-color`: `#ea7806`

#### Button group `[53619:15772]` — 4 вариантов
- **Orientation** (VARIANT): Horizontally, Vertically
- **Margins** (VARIANT): Off, On
- Прочие свойства: Slot#60175:12 (SLOT)
- Токены компонента (229):
    - `--ds-color-button-icon-accent-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-accent-filled-default-background`: `#448aff`
    - `--ds-color-button-icon-accent-filled-hover-background`: `#3969d5`
    - `--ds-color-button-icon-accent-filled-press-background`: `#2651b5`
    - `--ds-color-button-icon-accent-outlined-border-color`: `#448aff`
    - `--ds-color-button-icon-accent-outlined-icon-color`: `#448aff`
    - `--ds-color-button-icon-accent-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-accent-outlined-hover-background`: `#f5f9ff`
    - `--ds-color-button-icon-accent-outlined-press-background`: `#e8f0ff`
    - `--ds-color-button-icon-accent-text-icon-color`: `#448aff`
    - `--ds-color-button-icon-accent-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-accent-text-hover-background`: `#f5f9ff`
    - `--ds-color-button-icon-accent-text-press-background`: `#e8f0ff`
    - `--ds-color-button-icon-disable-background-filled`: `#ebebeb`
    - `--ds-color-button-icon-disable-background-outlined`: `#ebebeb`
    - `--ds-color-button-icon-disable-background-text`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-disable-border-color`: `#ebebeb`
    - `--ds-color-button-icon-disable-icon-color`: `#9e9e9e`
    - `--ds-color-button-icon-negative-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-negative-filled-default-background`: `#ff5252`
    - `--ds-color-button-icon-negative-filled-hover-background`: `#f4372f`
    - `--ds-color-button-icon-negative-filled-press-background`: `#de1a12`
    - `--ds-color-button-icon-negative-outlined-border-color`: `#ff5252`
    - `--ds-color-button-icon-negative-outlined-icon-color`: `#ff5252`
    - `--ds-color-button-icon-negative-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-negative-outlined-hover-background`: `#fff8f8`
    - `--ds-color-button-icon-negative-outlined-press-background`: `#ffe5e5`
    - `--ds-color-button-icon-negative-text-icon-color`: `#ff5252`
    - `--ds-color-button-icon-negative-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-negative-text-hover-background`: `#fff8f8`
    - `--ds-color-button-icon-negative-text-press-background`: `#ffe5e5`
    - `--ds-color-button-icon-neutral-filled-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-filled-default-background`: `#ffffff`
    - `--ds-color-button-icon-neutral-filled-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-filled-press-background`: `#ebebeb`
    - `--ds-color-button-icon-neutral-outlined-border-color`: `#e0e0e0`
    - `--ds-color-button-icon-neutral-outlined-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-neutral-outlined-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-outlined-press-background`: `#ebebeb`
    - `--ds-color-button-icon-neutral-text-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-neutral-text-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-text-press-background`: `#ebebeb`
    - `--ds-color-button-icon-positive-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-positive-filled-default-background`: `#14b456`
    - `--ds-color-button-icon-positive-filled-hover-background`: `#119c34`
    - `--ds-color-button-icon-positive-filled-press-background`: `#0f852c`
    - `--ds-color-button-icon-positive-outlined-border-color`: `#14b456`
    - `--ds-color-button-icon-positive-outlined-icon-color`: `#14b456`
    - `--ds-color-button-icon-positive-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-positive-outlined-hover-background`: `#f3fcf7`
    - `--ds-color-button-icon-positive-outlined-press-background`: `#e0f8ea`
    - `--ds-color-button-icon-positive-text-icon-color`: `#14b456`
    - `--ds-color-button-icon-positive-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-positive-text-hover-background`: `#f3fcf7`
    - `--ds-color-button-icon-positive-text-press-background`: `#e0f8ea`
    - `--ds-color-button-icon-warning-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-warning-filled-default-background`: `#ffab40`
    - `--ds-color-button-icon-warning-filled-hover-background`: `#fe8c06`
    - `--ds-color-button-icon-warning-filled-press-background`: `#ea7806`
    - `--ds-color-button-icon-warning-outlined-border-color`: `#ffab40`
    - `--ds-color-button-icon-warning-outlined-icon-color`: `#ea7806`
    - `--ds-color-button-icon-warning-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-warning-outlined-hover-background`: `#fffcf8`
    - `--ds-color-button-icon-warning-outlined-press-background`: `#fff4e5`
    - `--ds-color-button-icon-warning-text-icon-color`: `#ea7806`
    - `--ds-color-button-icon-warning-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-warning-text-hover-background`: `#fffcf8`
    - `--ds-color-button-icon-warning-text-press-background`: `#fff4e5`
    - `--ds-color-button-toggle-filled-background`: `#ffffff`
    - `--ds-color-button-toggle-outlined-background`: `#ffffff`
    - `--ds-color-button-toggle-outlined-border-color`: `#e0e0e0`
    - `--ds-color-button-accent-filled-default-background`: `#448aff`
    - `--ds-color-button-accent-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-accent-filled-hover-background`: `#3969d5`
    - `--ds-color-button-accent-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-accent-filled-press-background`: `#2651b5`
    - `--ds-color-button-accent-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-accent-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-accent-outlined-default-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-default-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-default-text-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-background`: `#f5f9ff`
    - `--ds-color-button-accent-outlined-hover-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-text-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-background`: `#e8f0ff`
    - `--ds-color-button-accent-outlined-press-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-text-color`: `#448aff`
    - `--ds-color-button-accent-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-accent-text-default-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-default-text-color`: `#448aff`
    - `--ds-color-button-accent-text-hover-background`: `#f5f9ff`
    - `--ds-color-button-accent-text-hover-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-hover-text-color`: `#448aff`
    - `--ds-color-button-accent-text-press-background`: `#e8f0ff`
    - `--ds-color-button-accent-text-press-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-press-text-color`: `#448aff`
    - `--ds-color-button-disable-background-filled`: `#ebebeb`
    - `--ds-color-button-disable-background-outlined`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-disable-background-text`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-disable-border-color`: `#ebebeb`
    - `--ds-color-button-disable-icon-color`: `#9e9e9e`
    - `--ds-color-button-disable-text-color`: `#9e9e9e`
    - `--ds-color-button-negative-filled-default-background`: `#ff5252`
    - `--ds-color-button-negative-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-negative-filled-hover-background`: `#f4372f`
    - `--ds-color-button-negative-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-negative-filled-press-background`: `#de1a12`
    - `--ds-color-button-negative-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-negative-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-negative-outlined-default-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-default-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-default-text-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-background`: `#fff8f8`
    - `--ds-color-button-negative-outlined-hover-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-text-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-background`: `#ffe5e5`
    - `--ds-color-button-negative-outlined-press-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-negative-text-default-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-default-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-hover-background`: `#fff8f8`
    - `--ds-color-button-negative-text-hover-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-hover-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-press-background`: `#ffe5e5`
    - `--ds-color-button-negative-text-press-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-press-text-color`: `#ff5252`
    - `--ds-color-button-neutral-filled-default-background`: `#ffffff`
    - `--ds-color-button-neutral-filled-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-default-text-color`: `#333333`
    - `--ds-color-button-neutral-filled-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-filled-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-filled-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-filled-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-press-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-neutral-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-default-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-outlined-hover-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-outlined-press-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-press-text-color`: `#333333`
    - `--ds-color-button-neutral-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-neutral-text-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-default-text-color`: `#333333`
    - `--ds-color-button-neutral-text-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-text-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-text-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-text-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-press-text-color`: `#333333`
    - `--ds-color-button-positive-filled-default-background`: `#14b456`
    - `--ds-color-button-positive-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-positive-filled-hover-background`: `#119c34`
    - `--ds-color-button-positive-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-positive-filled-press-background`: `#0f852c`
    - `--ds-color-button-positive-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-positive-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-positive-outlined-default-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-default-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-default-text-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-background`: `#f3fcf7`
    - `--ds-color-button-positive-outlined-hover-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-text-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-background`: `#e0f8ea`
    - `--ds-color-button-positive-outlined-press-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-text-color`: `#14b456`
    - `--ds-color-button-positive-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-positive-text-default-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-default-text-color`: `#14b456`
    - `--ds-color-button-positive-text-hover-background`: `#f3fcf7`
    - `--ds-color-button-positive-text-hover-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-hover-text-color`: `#14b456`
    - `--ds-color-button-positive-text-press-background`: `#e0f8ea`
    - `--ds-color-button-positive-text-press-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-press-text-color`: `#14b456`
    - `--ds-color-button-warning-filled-default-background`: `#ffab40`
    - `--ds-color-button-warning-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-warning-filled-hover-background`: `#fe8c06`
    - `--ds-color-button-warning-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-warning-filled-press-background`: `#ea7806`
    - `--ds-color-button-warning-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-warning-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-warning-outlined-default-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-default-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-default-text-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-hover-background`: `#fffcf8`
    - `--ds-color-button-warning-outlined-hover-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-hover-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-hover-text-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-press-background`: `#fff4e5`
    - `--ds-color-button-warning-outlined-press-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-press-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-press-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-warning-text-default-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-default-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-hover-background`: `#fffcf8`
    - `--ds-color-button-warning-text-hover-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-hover-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-press-background`: `#fff4e5`
    - `--ds-color-button-warning-text-press-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-press-text-color`: `#ea7806`

#### Button icon `[17123:81299]` — 153 вариантов
- **Size** (VARIANT): M, S, XS
- **Style** (VARIANT): Accent, Negative, Neutral, Positive, Warning
- **Type** (VARIANT): Filled, Outlined, Text
- **State** (VARIANT): Default, Disable, Hover, Loading, Press
- Токены компонента (229):
    - `--ds-color-button-icon-accent-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-accent-filled-default-background`: `#448aff`
    - `--ds-color-button-icon-accent-filled-hover-background`: `#3969d5`
    - `--ds-color-button-icon-accent-filled-press-background`: `#2651b5`
    - `--ds-color-button-icon-accent-outlined-border-color`: `#448aff`
    - `--ds-color-button-icon-accent-outlined-icon-color`: `#448aff`
    - `--ds-color-button-icon-accent-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-accent-outlined-hover-background`: `#f5f9ff`
    - `--ds-color-button-icon-accent-outlined-press-background`: `#e8f0ff`
    - `--ds-color-button-icon-accent-text-icon-color`: `#448aff`
    - `--ds-color-button-icon-accent-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-accent-text-hover-background`: `#f5f9ff`
    - `--ds-color-button-icon-accent-text-press-background`: `#e8f0ff`
    - `--ds-color-button-icon-disable-background-filled`: `#ebebeb`
    - `--ds-color-button-icon-disable-background-outlined`: `#ebebeb`
    - `--ds-color-button-icon-disable-background-text`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-disable-border-color`: `#ebebeb`
    - `--ds-color-button-icon-disable-icon-color`: `#9e9e9e`
    - `--ds-color-button-icon-negative-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-negative-filled-default-background`: `#ff5252`
    - `--ds-color-button-icon-negative-filled-hover-background`: `#f4372f`
    - `--ds-color-button-icon-negative-filled-press-background`: `#de1a12`
    - `--ds-color-button-icon-negative-outlined-border-color`: `#ff5252`
    - `--ds-color-button-icon-negative-outlined-icon-color`: `#ff5252`
    - `--ds-color-button-icon-negative-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-negative-outlined-hover-background`: `#fff8f8`
    - `--ds-color-button-icon-negative-outlined-press-background`: `#ffe5e5`
    - `--ds-color-button-icon-negative-text-icon-color`: `#ff5252`
    - `--ds-color-button-icon-negative-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-negative-text-hover-background`: `#fff8f8`
    - `--ds-color-button-icon-negative-text-press-background`: `#ffe5e5`
    - `--ds-color-button-icon-neutral-filled-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-filled-default-background`: `#ffffff`
    - `--ds-color-button-icon-neutral-filled-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-filled-press-background`: `#ebebeb`
    - `--ds-color-button-icon-neutral-outlined-border-color`: `#e0e0e0`
    - `--ds-color-button-icon-neutral-outlined-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-neutral-outlined-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-outlined-press-background`: `#ebebeb`
    - `--ds-color-button-icon-neutral-text-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-neutral-text-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-text-press-background`: `#ebebeb`
    - `--ds-color-button-icon-positive-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-positive-filled-default-background`: `#14b456`
    - `--ds-color-button-icon-positive-filled-hover-background`: `#119c34`
    - `--ds-color-button-icon-positive-filled-press-background`: `#0f852c`
    - `--ds-color-button-icon-positive-outlined-border-color`: `#14b456`
    - `--ds-color-button-icon-positive-outlined-icon-color`: `#14b456`
    - `--ds-color-button-icon-positive-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-positive-outlined-hover-background`: `#f3fcf7`
    - `--ds-color-button-icon-positive-outlined-press-background`: `#e0f8ea`
    - `--ds-color-button-icon-positive-text-icon-color`: `#14b456`
    - `--ds-color-button-icon-positive-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-positive-text-hover-background`: `#f3fcf7`
    - `--ds-color-button-icon-positive-text-press-background`: `#e0f8ea`
    - `--ds-color-button-icon-warning-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-warning-filled-default-background`: `#ffab40`
    - `--ds-color-button-icon-warning-filled-hover-background`: `#fe8c06`
    - `--ds-color-button-icon-warning-filled-press-background`: `#ea7806`
    - `--ds-color-button-icon-warning-outlined-border-color`: `#ffab40`
    - `--ds-color-button-icon-warning-outlined-icon-color`: `#ea7806`
    - `--ds-color-button-icon-warning-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-warning-outlined-hover-background`: `#fffcf8`
    - `--ds-color-button-icon-warning-outlined-press-background`: `#fff4e5`
    - `--ds-color-button-icon-warning-text-icon-color`: `#ea7806`
    - `--ds-color-button-icon-warning-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-warning-text-hover-background`: `#fffcf8`
    - `--ds-color-button-icon-warning-text-press-background`: `#fff4e5`
    - `--ds-color-button-toggle-filled-background`: `#ffffff`
    - `--ds-color-button-toggle-outlined-background`: `#ffffff`
    - `--ds-color-button-toggle-outlined-border-color`: `#e0e0e0`
    - `--ds-color-button-accent-filled-default-background`: `#448aff`
    - `--ds-color-button-accent-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-accent-filled-hover-background`: `#3969d5`
    - `--ds-color-button-accent-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-accent-filled-press-background`: `#2651b5`
    - `--ds-color-button-accent-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-accent-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-accent-outlined-default-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-default-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-default-text-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-background`: `#f5f9ff`
    - `--ds-color-button-accent-outlined-hover-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-text-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-background`: `#e8f0ff`
    - `--ds-color-button-accent-outlined-press-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-text-color`: `#448aff`
    - `--ds-color-button-accent-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-accent-text-default-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-default-text-color`: `#448aff`
    - `--ds-color-button-accent-text-hover-background`: `#f5f9ff`
    - `--ds-color-button-accent-text-hover-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-hover-text-color`: `#448aff`
    - `--ds-color-button-accent-text-press-background`: `#e8f0ff`
    - `--ds-color-button-accent-text-press-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-press-text-color`: `#448aff`
    - `--ds-color-button-disable-background-filled`: `#ebebeb`
    - `--ds-color-button-disable-background-outlined`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-disable-background-text`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-disable-border-color`: `#ebebeb`
    - `--ds-color-button-disable-icon-color`: `#9e9e9e`
    - `--ds-color-button-disable-text-color`: `#9e9e9e`
    - `--ds-color-button-negative-filled-default-background`: `#ff5252`
    - `--ds-color-button-negative-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-negative-filled-hover-background`: `#f4372f`
    - `--ds-color-button-negative-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-negative-filled-press-background`: `#de1a12`
    - `--ds-color-button-negative-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-negative-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-negative-outlined-default-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-default-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-default-text-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-background`: `#fff8f8`
    - `--ds-color-button-negative-outlined-hover-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-text-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-background`: `#ffe5e5`
    - `--ds-color-button-negative-outlined-press-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-negative-text-default-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-default-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-hover-background`: `#fff8f8`
    - `--ds-color-button-negative-text-hover-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-hover-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-press-background`: `#ffe5e5`
    - `--ds-color-button-negative-text-press-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-press-text-color`: `#ff5252`
    - `--ds-color-button-neutral-filled-default-background`: `#ffffff`
    - `--ds-color-button-neutral-filled-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-default-text-color`: `#333333`
    - `--ds-color-button-neutral-filled-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-filled-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-filled-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-filled-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-press-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-neutral-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-default-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-outlined-hover-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-outlined-press-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-press-text-color`: `#333333`
    - `--ds-color-button-neutral-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-neutral-text-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-default-text-color`: `#333333`
    - `--ds-color-button-neutral-text-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-text-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-text-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-text-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-press-text-color`: `#333333`
    - `--ds-color-button-positive-filled-default-background`: `#14b456`
    - `--ds-color-button-positive-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-positive-filled-hover-background`: `#119c34`
    - `--ds-color-button-positive-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-positive-filled-press-background`: `#0f852c`
    - `--ds-color-button-positive-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-positive-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-positive-outlined-default-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-default-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-default-text-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-background`: `#f3fcf7`
    - `--ds-color-button-positive-outlined-hover-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-text-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-background`: `#e0f8ea`
    - `--ds-color-button-positive-outlined-press-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-text-color`: `#14b456`
    - `--ds-color-button-positive-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-positive-text-default-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-default-text-color`: `#14b456`
    - `--ds-color-button-positive-text-hover-background`: `#f3fcf7`
    - `--ds-color-button-positive-text-hover-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-hover-text-color`: `#14b456`
    - `--ds-color-button-positive-text-press-background`: `#e0f8ea`
    - `--ds-color-button-positive-text-press-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-press-text-color`: `#14b456`
    - `--ds-color-button-warning-filled-default-background`: `#ffab40`
    - `--ds-color-button-warning-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-warning-filled-hover-background`: `#fe8c06`
    - `--ds-color-button-warning-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-warning-filled-press-background`: `#ea7806`
    - `--ds-color-button-warning-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-warning-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-warning-outlined-default-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-default-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-default-text-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-hover-background`: `#fffcf8`
    - `--ds-color-button-warning-outlined-hover-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-hover-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-hover-text-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-press-background`: `#fff4e5`
    - `--ds-color-button-warning-outlined-press-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-press-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-press-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-warning-text-default-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-default-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-hover-background`: `#fffcf8`
    - `--ds-color-button-warning-text-hover-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-hover-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-press-background`: `#fff4e5`
    - `--ds-color-button-warning-text-press-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-press-text-color`: `#ea7806`

#### Button icon group `[53828:5738]` — 2 вариантов
- **Orientation** (VARIANT): Horizontally, Vertically
- Прочие свойства: Slot#60176:0 (SLOT)
- Токены компонента (229):
    - `--ds-color-button-icon-accent-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-accent-filled-default-background`: `#448aff`
    - `--ds-color-button-icon-accent-filled-hover-background`: `#3969d5`
    - `--ds-color-button-icon-accent-filled-press-background`: `#2651b5`
    - `--ds-color-button-icon-accent-outlined-border-color`: `#448aff`
    - `--ds-color-button-icon-accent-outlined-icon-color`: `#448aff`
    - `--ds-color-button-icon-accent-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-accent-outlined-hover-background`: `#f5f9ff`
    - `--ds-color-button-icon-accent-outlined-press-background`: `#e8f0ff`
    - `--ds-color-button-icon-accent-text-icon-color`: `#448aff`
    - `--ds-color-button-icon-accent-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-accent-text-hover-background`: `#f5f9ff`
    - `--ds-color-button-icon-accent-text-press-background`: `#e8f0ff`
    - `--ds-color-button-icon-disable-background-filled`: `#ebebeb`
    - `--ds-color-button-icon-disable-background-outlined`: `#ebebeb`
    - `--ds-color-button-icon-disable-background-text`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-disable-border-color`: `#ebebeb`
    - `--ds-color-button-icon-disable-icon-color`: `#9e9e9e`
    - `--ds-color-button-icon-negative-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-negative-filled-default-background`: `#ff5252`
    - `--ds-color-button-icon-negative-filled-hover-background`: `#f4372f`
    - `--ds-color-button-icon-negative-filled-press-background`: `#de1a12`
    - `--ds-color-button-icon-negative-outlined-border-color`: `#ff5252`
    - `--ds-color-button-icon-negative-outlined-icon-color`: `#ff5252`
    - `--ds-color-button-icon-negative-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-negative-outlined-hover-background`: `#fff8f8`
    - `--ds-color-button-icon-negative-outlined-press-background`: `#ffe5e5`
    - `--ds-color-button-icon-negative-text-icon-color`: `#ff5252`
    - `--ds-color-button-icon-negative-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-negative-text-hover-background`: `#fff8f8`
    - `--ds-color-button-icon-negative-text-press-background`: `#ffe5e5`
    - `--ds-color-button-icon-neutral-filled-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-filled-default-background`: `#ffffff`
    - `--ds-color-button-icon-neutral-filled-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-filled-press-background`: `#ebebeb`
    - `--ds-color-button-icon-neutral-outlined-border-color`: `#e0e0e0`
    - `--ds-color-button-icon-neutral-outlined-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-neutral-outlined-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-outlined-press-background`: `#ebebeb`
    - `--ds-color-button-icon-neutral-text-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-neutral-text-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-text-press-background`: `#ebebeb`
    - `--ds-color-button-icon-positive-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-positive-filled-default-background`: `#14b456`
    - `--ds-color-button-icon-positive-filled-hover-background`: `#119c34`
    - `--ds-color-button-icon-positive-filled-press-background`: `#0f852c`
    - `--ds-color-button-icon-positive-outlined-border-color`: `#14b456`
    - `--ds-color-button-icon-positive-outlined-icon-color`: `#14b456`
    - `--ds-color-button-icon-positive-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-positive-outlined-hover-background`: `#f3fcf7`
    - `--ds-color-button-icon-positive-outlined-press-background`: `#e0f8ea`
    - `--ds-color-button-icon-positive-text-icon-color`: `#14b456`
    - `--ds-color-button-icon-positive-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-positive-text-hover-background`: `#f3fcf7`
    - `--ds-color-button-icon-positive-text-press-background`: `#e0f8ea`
    - `--ds-color-button-icon-warning-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-warning-filled-default-background`: `#ffab40`
    - `--ds-color-button-icon-warning-filled-hover-background`: `#fe8c06`
    - `--ds-color-button-icon-warning-filled-press-background`: `#ea7806`
    - `--ds-color-button-icon-warning-outlined-border-color`: `#ffab40`
    - `--ds-color-button-icon-warning-outlined-icon-color`: `#ea7806`
    - `--ds-color-button-icon-warning-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-warning-outlined-hover-background`: `#fffcf8`
    - `--ds-color-button-icon-warning-outlined-press-background`: `#fff4e5`
    - `--ds-color-button-icon-warning-text-icon-color`: `#ea7806`
    - `--ds-color-button-icon-warning-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-warning-text-hover-background`: `#fffcf8`
    - `--ds-color-button-icon-warning-text-press-background`: `#fff4e5`
    - `--ds-color-button-toggle-filled-background`: `#ffffff`
    - `--ds-color-button-toggle-outlined-background`: `#ffffff`
    - `--ds-color-button-toggle-outlined-border-color`: `#e0e0e0`
    - `--ds-color-button-accent-filled-default-background`: `#448aff`
    - `--ds-color-button-accent-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-accent-filled-hover-background`: `#3969d5`
    - `--ds-color-button-accent-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-accent-filled-press-background`: `#2651b5`
    - `--ds-color-button-accent-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-accent-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-accent-outlined-default-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-default-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-default-text-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-background`: `#f5f9ff`
    - `--ds-color-button-accent-outlined-hover-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-text-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-background`: `#e8f0ff`
    - `--ds-color-button-accent-outlined-press-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-text-color`: `#448aff`
    - `--ds-color-button-accent-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-accent-text-default-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-default-text-color`: `#448aff`
    - `--ds-color-button-accent-text-hover-background`: `#f5f9ff`
    - `--ds-color-button-accent-text-hover-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-hover-text-color`: `#448aff`
    - `--ds-color-button-accent-text-press-background`: `#e8f0ff`
    - `--ds-color-button-accent-text-press-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-press-text-color`: `#448aff`
    - `--ds-color-button-disable-background-filled`: `#ebebeb`
    - `--ds-color-button-disable-background-outlined`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-disable-background-text`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-disable-border-color`: `#ebebeb`
    - `--ds-color-button-disable-icon-color`: `#9e9e9e`
    - `--ds-color-button-disable-text-color`: `#9e9e9e`
    - `--ds-color-button-negative-filled-default-background`: `#ff5252`
    - `--ds-color-button-negative-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-negative-filled-hover-background`: `#f4372f`
    - `--ds-color-button-negative-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-negative-filled-press-background`: `#de1a12`
    - `--ds-color-button-negative-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-negative-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-negative-outlined-default-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-default-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-default-text-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-background`: `#fff8f8`
    - `--ds-color-button-negative-outlined-hover-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-text-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-background`: `#ffe5e5`
    - `--ds-color-button-negative-outlined-press-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-negative-text-default-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-default-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-hover-background`: `#fff8f8`
    - `--ds-color-button-negative-text-hover-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-hover-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-press-background`: `#ffe5e5`
    - `--ds-color-button-negative-text-press-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-press-text-color`: `#ff5252`
    - `--ds-color-button-neutral-filled-default-background`: `#ffffff`
    - `--ds-color-button-neutral-filled-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-default-text-color`: `#333333`
    - `--ds-color-button-neutral-filled-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-filled-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-filled-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-filled-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-press-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-neutral-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-default-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-outlined-hover-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-outlined-press-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-press-text-color`: `#333333`
    - `--ds-color-button-neutral-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-neutral-text-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-default-text-color`: `#333333`
    - `--ds-color-button-neutral-text-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-text-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-text-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-text-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-press-text-color`: `#333333`
    - `--ds-color-button-positive-filled-default-background`: `#14b456`
    - `--ds-color-button-positive-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-positive-filled-hover-background`: `#119c34`
    - `--ds-color-button-positive-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-positive-filled-press-background`: `#0f852c`
    - `--ds-color-button-positive-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-positive-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-positive-outlined-default-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-default-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-default-text-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-background`: `#f3fcf7`
    - `--ds-color-button-positive-outlined-hover-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-text-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-background`: `#e0f8ea`
    - `--ds-color-button-positive-outlined-press-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-text-color`: `#14b456`
    - `--ds-color-button-positive-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-positive-text-default-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-default-text-color`: `#14b456`
    - `--ds-color-button-positive-text-hover-background`: `#f3fcf7`
    - `--ds-color-button-positive-text-hover-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-hover-text-color`: `#14b456`
    - `--ds-color-button-positive-text-press-background`: `#e0f8ea`
    - `--ds-color-button-positive-text-press-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-press-text-color`: `#14b456`
    - `--ds-color-button-warning-filled-default-background`: `#ffab40`
    - `--ds-color-button-warning-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-warning-filled-hover-background`: `#fe8c06`
    - `--ds-color-button-warning-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-warning-filled-press-background`: `#ea7806`
    - `--ds-color-button-warning-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-warning-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-warning-outlined-default-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-default-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-default-text-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-hover-background`: `#fffcf8`
    - `--ds-color-button-warning-outlined-hover-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-hover-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-hover-text-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-press-background`: `#fff4e5`
    - `--ds-color-button-warning-outlined-press-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-press-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-press-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-warning-text-default-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-default-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-hover-background`: `#fffcf8`
    - `--ds-color-button-warning-text-hover-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-hover-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-press-background`: `#fff4e5`
    - `--ds-color-button-warning-text-press-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-press-text-color`: `#ea7806`

#### Button New `[16321:6498]` — 2 вариантов
- **Type** (VARIANT): btn-28, btn-36
- Токены компонента (229):
    - `--ds-color-button-icon-accent-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-accent-filled-default-background`: `#448aff`
    - `--ds-color-button-icon-accent-filled-hover-background`: `#3969d5`
    - `--ds-color-button-icon-accent-filled-press-background`: `#2651b5`
    - `--ds-color-button-icon-accent-outlined-border-color`: `#448aff`
    - `--ds-color-button-icon-accent-outlined-icon-color`: `#448aff`
    - `--ds-color-button-icon-accent-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-accent-outlined-hover-background`: `#f5f9ff`
    - `--ds-color-button-icon-accent-outlined-press-background`: `#e8f0ff`
    - `--ds-color-button-icon-accent-text-icon-color`: `#448aff`
    - `--ds-color-button-icon-accent-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-accent-text-hover-background`: `#f5f9ff`
    - `--ds-color-button-icon-accent-text-press-background`: `#e8f0ff`
    - `--ds-color-button-icon-disable-background-filled`: `#ebebeb`
    - `--ds-color-button-icon-disable-background-outlined`: `#ebebeb`
    - `--ds-color-button-icon-disable-background-text`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-disable-border-color`: `#ebebeb`
    - `--ds-color-button-icon-disable-icon-color`: `#9e9e9e`
    - `--ds-color-button-icon-negative-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-negative-filled-default-background`: `#ff5252`
    - `--ds-color-button-icon-negative-filled-hover-background`: `#f4372f`
    - `--ds-color-button-icon-negative-filled-press-background`: `#de1a12`
    - `--ds-color-button-icon-negative-outlined-border-color`: `#ff5252`
    - `--ds-color-button-icon-negative-outlined-icon-color`: `#ff5252`
    - `--ds-color-button-icon-negative-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-negative-outlined-hover-background`: `#fff8f8`
    - `--ds-color-button-icon-negative-outlined-press-background`: `#ffe5e5`
    - `--ds-color-button-icon-negative-text-icon-color`: `#ff5252`
    - `--ds-color-button-icon-negative-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-negative-text-hover-background`: `#fff8f8`
    - `--ds-color-button-icon-negative-text-press-background`: `#ffe5e5`
    - `--ds-color-button-icon-neutral-filled-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-filled-default-background`: `#ffffff`
    - `--ds-color-button-icon-neutral-filled-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-filled-press-background`: `#ebebeb`
    - `--ds-color-button-icon-neutral-outlined-border-color`: `#e0e0e0`
    - `--ds-color-button-icon-neutral-outlined-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-neutral-outlined-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-outlined-press-background`: `#ebebeb`
    - `--ds-color-button-icon-neutral-text-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-neutral-text-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-text-press-background`: `#ebebeb`
    - `--ds-color-button-icon-positive-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-positive-filled-default-background`: `#14b456`
    - `--ds-color-button-icon-positive-filled-hover-background`: `#119c34`
    - `--ds-color-button-icon-positive-filled-press-background`: `#0f852c`
    - `--ds-color-button-icon-positive-outlined-border-color`: `#14b456`
    - `--ds-color-button-icon-positive-outlined-icon-color`: `#14b456`
    - `--ds-color-button-icon-positive-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-positive-outlined-hover-background`: `#f3fcf7`
    - `--ds-color-button-icon-positive-outlined-press-background`: `#e0f8ea`
    - `--ds-color-button-icon-positive-text-icon-color`: `#14b456`
    - `--ds-color-button-icon-positive-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-positive-text-hover-background`: `#f3fcf7`
    - `--ds-color-button-icon-positive-text-press-background`: `#e0f8ea`
    - `--ds-color-button-icon-warning-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-warning-filled-default-background`: `#ffab40`
    - `--ds-color-button-icon-warning-filled-hover-background`: `#fe8c06`
    - `--ds-color-button-icon-warning-filled-press-background`: `#ea7806`
    - `--ds-color-button-icon-warning-outlined-border-color`: `#ffab40`
    - `--ds-color-button-icon-warning-outlined-icon-color`: `#ea7806`
    - `--ds-color-button-icon-warning-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-warning-outlined-hover-background`: `#fffcf8`
    - `--ds-color-button-icon-warning-outlined-press-background`: `#fff4e5`
    - `--ds-color-button-icon-warning-text-icon-color`: `#ea7806`
    - `--ds-color-button-icon-warning-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-warning-text-hover-background`: `#fffcf8`
    - `--ds-color-button-icon-warning-text-press-background`: `#fff4e5`
    - `--ds-color-button-toggle-filled-background`: `#ffffff`
    - `--ds-color-button-toggle-outlined-background`: `#ffffff`
    - `--ds-color-button-toggle-outlined-border-color`: `#e0e0e0`
    - `--ds-color-button-accent-filled-default-background`: `#448aff`
    - `--ds-color-button-accent-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-accent-filled-hover-background`: `#3969d5`
    - `--ds-color-button-accent-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-accent-filled-press-background`: `#2651b5`
    - `--ds-color-button-accent-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-accent-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-accent-outlined-default-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-default-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-default-text-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-background`: `#f5f9ff`
    - `--ds-color-button-accent-outlined-hover-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-text-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-background`: `#e8f0ff`
    - `--ds-color-button-accent-outlined-press-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-text-color`: `#448aff`
    - `--ds-color-button-accent-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-accent-text-default-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-default-text-color`: `#448aff`
    - `--ds-color-button-accent-text-hover-background`: `#f5f9ff`
    - `--ds-color-button-accent-text-hover-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-hover-text-color`: `#448aff`
    - `--ds-color-button-accent-text-press-background`: `#e8f0ff`
    - `--ds-color-button-accent-text-press-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-press-text-color`: `#448aff`
    - `--ds-color-button-disable-background-filled`: `#ebebeb`
    - `--ds-color-button-disable-background-outlined`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-disable-background-text`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-disable-border-color`: `#ebebeb`
    - `--ds-color-button-disable-icon-color`: `#9e9e9e`
    - `--ds-color-button-disable-text-color`: `#9e9e9e`
    - `--ds-color-button-negative-filled-default-background`: `#ff5252`
    - `--ds-color-button-negative-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-negative-filled-hover-background`: `#f4372f`
    - `--ds-color-button-negative-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-negative-filled-press-background`: `#de1a12`
    - `--ds-color-button-negative-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-negative-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-negative-outlined-default-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-default-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-default-text-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-background`: `#fff8f8`
    - `--ds-color-button-negative-outlined-hover-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-text-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-background`: `#ffe5e5`
    - `--ds-color-button-negative-outlined-press-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-negative-text-default-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-default-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-hover-background`: `#fff8f8`
    - `--ds-color-button-negative-text-hover-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-hover-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-press-background`: `#ffe5e5`
    - `--ds-color-button-negative-text-press-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-press-text-color`: `#ff5252`
    - `--ds-color-button-neutral-filled-default-background`: `#ffffff`
    - `--ds-color-button-neutral-filled-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-default-text-color`: `#333333`
    - `--ds-color-button-neutral-filled-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-filled-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-filled-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-filled-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-press-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-neutral-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-default-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-outlined-hover-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-outlined-press-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-press-text-color`: `#333333`
    - `--ds-color-button-neutral-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-neutral-text-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-default-text-color`: `#333333`
    - `--ds-color-button-neutral-text-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-text-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-text-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-text-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-press-text-color`: `#333333`
    - `--ds-color-button-positive-filled-default-background`: `#14b456`
    - `--ds-color-button-positive-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-positive-filled-hover-background`: `#119c34`
    - `--ds-color-button-positive-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-positive-filled-press-background`: `#0f852c`
    - `--ds-color-button-positive-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-positive-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-positive-outlined-default-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-default-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-default-text-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-background`: `#f3fcf7`
    - `--ds-color-button-positive-outlined-hover-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-text-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-background`: `#e0f8ea`
    - `--ds-color-button-positive-outlined-press-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-text-color`: `#14b456`
    - `--ds-color-button-positive-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-positive-text-default-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-default-text-color`: `#14b456`
    - `--ds-color-button-positive-text-hover-background`: `#f3fcf7`
    - `--ds-color-button-positive-text-hover-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-hover-text-color`: `#14b456`
    - `--ds-color-button-positive-text-press-background`: `#e0f8ea`
    - `--ds-color-button-positive-text-press-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-press-text-color`: `#14b456`
    - `--ds-color-button-warning-filled-default-background`: `#ffab40`
    - `--ds-color-button-warning-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-warning-filled-hover-background`: `#fe8c06`
    - `--ds-color-button-warning-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-warning-filled-press-background`: `#ea7806`
    - `--ds-color-button-warning-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-warning-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-warning-outlined-default-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-default-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-default-text-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-hover-background`: `#fffcf8`
    - `--ds-color-button-warning-outlined-hover-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-hover-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-hover-text-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-press-background`: `#fff4e5`
    - `--ds-color-button-warning-outlined-press-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-press-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-press-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-warning-text-default-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-default-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-hover-background`: `#fffcf8`
    - `--ds-color-button-warning-text-hover-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-hover-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-press-background`: `#fff4e5`
    - `--ds-color-button-warning-text-press-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-press-text-color`: `#ea7806`

#### Button toggle `[17039:71554]` — 12 вариантов
- **Size** (VARIANT): M, S, XS
- **Type** (VARIANT): Filled, Outlined
- **Content** (VARIANT): Icon, Text
- Прочие свойства: Button container#59885:13 (SLOT)
- Токены компонента (229):
    - `--ds-color-button-icon-accent-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-accent-filled-default-background`: `#448aff`
    - `--ds-color-button-icon-accent-filled-hover-background`: `#3969d5`
    - `--ds-color-button-icon-accent-filled-press-background`: `#2651b5`
    - `--ds-color-button-icon-accent-outlined-border-color`: `#448aff`
    - `--ds-color-button-icon-accent-outlined-icon-color`: `#448aff`
    - `--ds-color-button-icon-accent-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-accent-outlined-hover-background`: `#f5f9ff`
    - `--ds-color-button-icon-accent-outlined-press-background`: `#e8f0ff`
    - `--ds-color-button-icon-accent-text-icon-color`: `#448aff`
    - `--ds-color-button-icon-accent-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-accent-text-hover-background`: `#f5f9ff`
    - `--ds-color-button-icon-accent-text-press-background`: `#e8f0ff`
    - `--ds-color-button-icon-disable-background-filled`: `#ebebeb`
    - `--ds-color-button-icon-disable-background-outlined`: `#ebebeb`
    - `--ds-color-button-icon-disable-background-text`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-disable-border-color`: `#ebebeb`
    - `--ds-color-button-icon-disable-icon-color`: `#9e9e9e`
    - `--ds-color-button-icon-negative-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-negative-filled-default-background`: `#ff5252`
    - `--ds-color-button-icon-negative-filled-hover-background`: `#f4372f`
    - `--ds-color-button-icon-negative-filled-press-background`: `#de1a12`
    - `--ds-color-button-icon-negative-outlined-border-color`: `#ff5252`
    - `--ds-color-button-icon-negative-outlined-icon-color`: `#ff5252`
    - `--ds-color-button-icon-negative-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-negative-outlined-hover-background`: `#fff8f8`
    - `--ds-color-button-icon-negative-outlined-press-background`: `#ffe5e5`
    - `--ds-color-button-icon-negative-text-icon-color`: `#ff5252`
    - `--ds-color-button-icon-negative-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-negative-text-hover-background`: `#fff8f8`
    - `--ds-color-button-icon-negative-text-press-background`: `#ffe5e5`
    - `--ds-color-button-icon-neutral-filled-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-filled-default-background`: `#ffffff`
    - `--ds-color-button-icon-neutral-filled-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-filled-press-background`: `#ebebeb`
    - `--ds-color-button-icon-neutral-outlined-border-color`: `#e0e0e0`
    - `--ds-color-button-icon-neutral-outlined-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-neutral-outlined-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-outlined-press-background`: `#ebebeb`
    - `--ds-color-button-icon-neutral-text-icon-color`: `#616161`
    - `--ds-color-button-icon-neutral-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-neutral-text-hover-background`: `#fafafa`
    - `--ds-color-button-icon-neutral-text-press-background`: `#ebebeb`
    - `--ds-color-button-icon-positive-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-positive-filled-default-background`: `#14b456`
    - `--ds-color-button-icon-positive-filled-hover-background`: `#119c34`
    - `--ds-color-button-icon-positive-filled-press-background`: `#0f852c`
    - `--ds-color-button-icon-positive-outlined-border-color`: `#14b456`
    - `--ds-color-button-icon-positive-outlined-icon-color`: `#14b456`
    - `--ds-color-button-icon-positive-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-positive-outlined-hover-background`: `#f3fcf7`
    - `--ds-color-button-icon-positive-outlined-press-background`: `#e0f8ea`
    - `--ds-color-button-icon-positive-text-icon-color`: `#14b456`
    - `--ds-color-button-icon-positive-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-positive-text-hover-background`: `#f3fcf7`
    - `--ds-color-button-icon-positive-text-press-background`: `#e0f8ea`
    - `--ds-color-button-icon-warning-filled-icon-color`: `#ffffff`
    - `--ds-color-button-icon-warning-filled-default-background`: `#ffab40`
    - `--ds-color-button-icon-warning-filled-hover-background`: `#fe8c06`
    - `--ds-color-button-icon-warning-filled-press-background`: `#ea7806`
    - `--ds-color-button-icon-warning-outlined-border-color`: `#ffab40`
    - `--ds-color-button-icon-warning-outlined-icon-color`: `#ea7806`
    - `--ds-color-button-icon-warning-outlined-default-background`: `#ffffff`
    - `--ds-color-button-icon-warning-outlined-hover-background`: `#fffcf8`
    - `--ds-color-button-icon-warning-outlined-press-background`: `#fff4e5`
    - `--ds-color-button-icon-warning-text-icon-color`: `#ea7806`
    - `--ds-color-button-icon-warning-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-icon-warning-text-hover-background`: `#fffcf8`
    - `--ds-color-button-icon-warning-text-press-background`: `#fff4e5`
    - `--ds-color-button-toggle-filled-background`: `#ffffff`
    - `--ds-color-button-toggle-outlined-background`: `#ffffff`
    - `--ds-color-button-toggle-outlined-border-color`: `#e0e0e0`
    - `--ds-color-button-accent-filled-default-background`: `#448aff`
    - `--ds-color-button-accent-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-accent-filled-hover-background`: `#3969d5`
    - `--ds-color-button-accent-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-accent-filled-press-background`: `#2651b5`
    - `--ds-color-button-accent-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-accent-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-accent-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-accent-outlined-default-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-default-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-default-text-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-background`: `#f5f9ff`
    - `--ds-color-button-accent-outlined-hover-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-hover-text-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-background`: `#e8f0ff`
    - `--ds-color-button-accent-outlined-press-border-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-icon-color`: `#448aff`
    - `--ds-color-button-accent-outlined-press-text-color`: `#448aff`
    - `--ds-color-button-accent-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-accent-text-default-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-default-text-color`: `#448aff`
    - `--ds-color-button-accent-text-hover-background`: `#f5f9ff`
    - `--ds-color-button-accent-text-hover-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-hover-text-color`: `#448aff`
    - `--ds-color-button-accent-text-press-background`: `#e8f0ff`
    - `--ds-color-button-accent-text-press-icon-color`: `#448aff`
    - `--ds-color-button-accent-text-press-text-color`: `#448aff`
    - `--ds-color-button-disable-background-filled`: `#ebebeb`
    - `--ds-color-button-disable-background-outlined`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-disable-background-text`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-disable-border-color`: `#ebebeb`
    - `--ds-color-button-disable-icon-color`: `#9e9e9e`
    - `--ds-color-button-disable-text-color`: `#9e9e9e`
    - `--ds-color-button-negative-filled-default-background`: `#ff5252`
    - `--ds-color-button-negative-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-negative-filled-hover-background`: `#f4372f`
    - `--ds-color-button-negative-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-negative-filled-press-background`: `#de1a12`
    - `--ds-color-button-negative-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-negative-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-negative-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-negative-outlined-default-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-default-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-default-text-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-background`: `#fff8f8`
    - `--ds-color-button-negative-outlined-hover-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-hover-text-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-background`: `#ffe5e5`
    - `--ds-color-button-negative-outlined-press-border-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-icon-color`: `#ff5252`
    - `--ds-color-button-negative-outlined-press-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-negative-text-default-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-default-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-hover-background`: `#fff8f8`
    - `--ds-color-button-negative-text-hover-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-hover-text-color`: `#ff5252`
    - `--ds-color-button-negative-text-press-background`: `#ffe5e5`
    - `--ds-color-button-negative-text-press-icon-color`: `#ff5252`
    - `--ds-color-button-negative-text-press-text-color`: `#ff5252`
    - `--ds-color-button-neutral-filled-default-background`: `#ffffff`
    - `--ds-color-button-neutral-filled-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-default-text-color`: `#333333`
    - `--ds-color-button-neutral-filled-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-filled-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-filled-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-filled-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-filled-press-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-neutral-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-default-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-outlined-hover-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-outlined-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-outlined-press-border-color`: `#e0e0e0`
    - `--ds-color-button-neutral-outlined-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-outlined-press-text-color`: `#333333`
    - `--ds-color-button-neutral-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-neutral-text-default-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-default-text-color`: `#333333`
    - `--ds-color-button-neutral-text-hover-background`: `#fafafa`
    - `--ds-color-button-neutral-text-hover-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-hover-text-color`: `#333333`
    - `--ds-color-button-neutral-text-press-background`: `#ebebeb`
    - `--ds-color-button-neutral-text-press-icon-color`: `#616161`
    - `--ds-color-button-neutral-text-press-text-color`: `#333333`
    - `--ds-color-button-positive-filled-default-background`: `#14b456`
    - `--ds-color-button-positive-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-positive-filled-hover-background`: `#119c34`
    - `--ds-color-button-positive-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-positive-filled-press-background`: `#0f852c`
    - `--ds-color-button-positive-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-positive-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-positive-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-positive-outlined-default-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-default-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-default-text-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-background`: `#f3fcf7`
    - `--ds-color-button-positive-outlined-hover-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-hover-text-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-background`: `#e0f8ea`
    - `--ds-color-button-positive-outlined-press-border-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-icon-color`: `#14b456`
    - `--ds-color-button-positive-outlined-press-text-color`: `#14b456`
    - `--ds-color-button-positive-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-positive-text-default-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-default-text-color`: `#14b456`
    - `--ds-color-button-positive-text-hover-background`: `#f3fcf7`
    - `--ds-color-button-positive-text-hover-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-hover-text-color`: `#14b456`
    - `--ds-color-button-positive-text-press-background`: `#e0f8ea`
    - `--ds-color-button-positive-text-press-icon-color`: `#14b456`
    - `--ds-color-button-positive-text-press-text-color`: `#14b456`
    - `--ds-color-button-warning-filled-default-background`: `#ffab40`
    - `--ds-color-button-warning-filled-default-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-default-text-color`: `#ffffff`
    - `--ds-color-button-warning-filled-hover-background`: `#fe8c06`
    - `--ds-color-button-warning-filled-hover-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-hover-text-color`: `#ffffff`
    - `--ds-color-button-warning-filled-press-background`: `#ea7806`
    - `--ds-color-button-warning-filled-press-icon-color`: `#ffffff`
    - `--ds-color-button-warning-filled-press-text-color`: `#ffffff`
    - `--ds-color-button-warning-outlined-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-warning-outlined-default-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-default-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-default-text-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-hover-background`: `#fffcf8`
    - `--ds-color-button-warning-outlined-hover-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-hover-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-hover-text-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-press-background`: `#fff4e5`
    - `--ds-color-button-warning-outlined-press-border-color`: `#ffab40`
    - `--ds-color-button-warning-outlined-press-icon-color`: `#ea7806`
    - `--ds-color-button-warning-outlined-press-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-button-warning-text-default-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-default-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-hover-background`: `#fffcf8`
    - `--ds-color-button-warning-text-hover-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-hover-text-color`: `#ea7806`
    - `--ds-color-button-warning-text-press-background`: `#fff4e5`
    - `--ds-color-button-warning-text-press-icon-color`: `#ea7806`
    - `--ds-color-button-warning-text-press-text-color`: `#ea7806`

#### Card content `[53744:3079]` — 2 вариантов
- **Content** (VARIANT): Custom, Default
- Прочие свойства: Title#56245:7 (BOOLEAN), Content#58799:0 (SLOT)
- Токены компонента (5):
    - `--ds-color-card-background`: `#ffffff`
    - `--ds-color-card-content-text-color`: `#616161`
    - `--ds-color-card-content-title-color`: `#333333`
    - `--ds-color-card-header-desc-color`: `#616161`
    - `--ds-color-card-header-title-color`: `#333333`

#### Card footer `[53744:3139]` — 1 вариантов
- **Content** (VARIANT): Default
- Прочие свойства: Divider#53753:1 (BOOLEAN)
- Токены компонента (5):
    - `--ds-color-card-background`: `#ffffff`
    - `--ds-color-card-content-text-color`: `#616161`
    - `--ds-color-card-content-title-color`: `#333333`
    - `--ds-color-card-header-desc-color`: `#616161`
    - `--ds-color-card-header-title-color`: `#333333`

#### Card header `[52916:15126]` — 1 вариантов
- **Content** (VARIANT): Default
- Прочие свойства: Divider#53766:0 (BOOLEAN), Title#56245:0 (BOOLEAN), Label up#56245:1 (BOOLEAN), Label down#56245:2 (BOOLEAN)
- Токены компонента (5):
    - `--ds-color-card-background`: `#ffffff`
    - `--ds-color-card-content-text-color`: `#616161`
    - `--ds-color-card-content-title-color`: `#333333`
    - `--ds-color-card-header-desc-color`: `#616161`
    - `--ds-color-card-header-title-color`: `#333333`

#### Card view `[53744:3181]` — 3 вариантов
- **Type** (VARIANT): Filled, Outlined, Shadow
- Прочие свойства: Shadow#53237:9 (BOOLEAN)
- Токены компонента (5):
    - `--ds-color-card-background`: `#ffffff`
    - `--ds-color-card-content-text-color`: `#616161`
    - `--ds-color-card-content-title-color`: `#333333`
    - `--ds-color-card-header-desc-color`: `#616161`
    - `--ds-color-card-header-title-color`: `#333333`

#### Checkbox `[53806:5694]` — 21 вариантов
- **Variant** (VARIANT): Disable, Error, Normal
- **Type** (VARIANT): Deselected, Indeterminate, Selected
- **State** (VARIANT): Default, Hover, Press
- Токены компонента (34):
    - `--ds-color-checkbox-group-text-color`: `#333333`
    - `--ds-color-checkbox-group-text-disable`: `#9e9e9e`
    - `--ds-color-checkbox-group-text-support-color`: `#616161`
    - `--ds-color-checkbox-group-text-support-error-color`: `#ff5252`
    - `--ds-color-checkbox-label-text-color`: `#333333`
    - `--ds-color-checkbox-label-text-disable-color`: `#9e9e9e`
    - `--ds-color-checkbox-label-text-support-color`: `#616161`
    - `--ds-color-checkbox-label-text-support-error-color`: `#ff5252`
    - `--ds-color-checkbox-disable-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-disable-deselected-icon-color`: `#9e9e9e`
    - `--ds-color-checkbox-disable-inderterminate-icon-color`: `#9e9e9e`
    - `--ds-color-checkbox-disable-selected-icon-color`: `#9e9e9e`
    - `--ds-color-checkbox-error-icon-color`: `#ff5252`
    - `--ds-color-checkbox-error-deselected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-error-deselected-hover-background`: `#ffe5e5`
    - `--ds-color-checkbox-error-deselected-press-background`: `#ffcccc`
    - `--ds-color-checkbox-error-inderterminate-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-error-inderterminate-hover-background`: `#ffe5e5`
    - `--ds-color-checkbox-error-inderterminate-press-background`: `#ffcccc`
    - `--ds-color-checkbox-error-selected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-error-selected-hover-background`: `#ffe5e5`
    - `--ds-color-checkbox-error-selected-press-background`: `#ffcccc`
    - `--ds-color-checkbox-normal-deselected-icon-color`: `#616161`
    - `--ds-color-checkbox-normal-deselected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-normal-deselected-hover-background`: `#ebebeb`
    - `--ds-color-checkbox-normal-deselected-press-background`: `#e0e0e0`
    - `--ds-color-checkbox-normal-inderterminate-icon-color`: `#448aff`
    - `--ds-color-checkbox-normal-inderterminate-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-normal-inderterminate-hover-background`: `#e8f0ff`
    - `--ds-color-checkbox-normal-inderterminate-press-background`: `#ccdfff`
    - `--ds-color-checkbox-normal-selected-icon-color`: `#448aff`
    - `--ds-color-checkbox-normal-selected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-normal-selected-hover-background`: `#e8f0ff`
    - `--ds-color-checkbox-normal-selected-press-background`: `#ccdfff`

#### Checkbox group `[53810:889]` — 3 вариантов
- **Orientation** (VARIANT): Group, Horizontal, Vertical
- Прочие свойства: Slot vertical#57252:0 (SLOT), Slot group#57252:4 (SLOT), Slot horizontal#57252:8 (SLOT), Support up#58195:66 (BOOLEAN), Support down#58195:70 (BOOLEAN)
- Токены компонента (34):
    - `--ds-color-checkbox-group-text-color`: `#333333`
    - `--ds-color-checkbox-group-text-disable`: `#9e9e9e`
    - `--ds-color-checkbox-group-text-support-color`: `#616161`
    - `--ds-color-checkbox-group-text-support-error-color`: `#ff5252`
    - `--ds-color-checkbox-label-text-color`: `#333333`
    - `--ds-color-checkbox-label-text-disable-color`: `#9e9e9e`
    - `--ds-color-checkbox-label-text-support-color`: `#616161`
    - `--ds-color-checkbox-label-text-support-error-color`: `#ff5252`
    - `--ds-color-checkbox-disable-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-disable-deselected-icon-color`: `#9e9e9e`
    - `--ds-color-checkbox-disable-inderterminate-icon-color`: `#9e9e9e`
    - `--ds-color-checkbox-disable-selected-icon-color`: `#9e9e9e`
    - `--ds-color-checkbox-error-icon-color`: `#ff5252`
    - `--ds-color-checkbox-error-deselected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-error-deselected-hover-background`: `#ffe5e5`
    - `--ds-color-checkbox-error-deselected-press-background`: `#ffcccc`
    - `--ds-color-checkbox-error-inderterminate-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-error-inderterminate-hover-background`: `#ffe5e5`
    - `--ds-color-checkbox-error-inderterminate-press-background`: `#ffcccc`
    - `--ds-color-checkbox-error-selected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-error-selected-hover-background`: `#ffe5e5`
    - `--ds-color-checkbox-error-selected-press-background`: `#ffcccc`
    - `--ds-color-checkbox-normal-deselected-icon-color`: `#616161`
    - `--ds-color-checkbox-normal-deselected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-normal-deselected-hover-background`: `#ebebeb`
    - `--ds-color-checkbox-normal-deselected-press-background`: `#e0e0e0`
    - `--ds-color-checkbox-normal-inderterminate-icon-color`: `#448aff`
    - `--ds-color-checkbox-normal-inderterminate-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-normal-inderterminate-hover-background`: `#e8f0ff`
    - `--ds-color-checkbox-normal-inderterminate-press-background`: `#ccdfff`
    - `--ds-color-checkbox-normal-selected-icon-color`: `#448aff`
    - `--ds-color-checkbox-normal-selected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-normal-selected-hover-background`: `#e8f0ff`
    - `--ds-color-checkbox-normal-selected-press-background`: `#ccdfff`

#### Checkbox label `[53810:880]` — 9 вариантов
- **Variant** (VARIANT): Disable, Error, Normal
- **Type** (VARIANT): Deselected, Inderterminate, Selected
- Прочие свойства: Checkbox left#17172:1340 (BOOLEAN), Checkbox right#17172:1349 (BOOLEAN), Label#54065:0 (BOOLEAN), Support text#58192:0 (BOOLEAN)
- Токены компонента (34):
    - `--ds-color-checkbox-group-text-color`: `#333333`
    - `--ds-color-checkbox-group-text-disable`: `#9e9e9e`
    - `--ds-color-checkbox-group-text-support-color`: `#616161`
    - `--ds-color-checkbox-group-text-support-error-color`: `#ff5252`
    - `--ds-color-checkbox-label-text-color`: `#333333`
    - `--ds-color-checkbox-label-text-disable-color`: `#9e9e9e`
    - `--ds-color-checkbox-label-text-support-color`: `#616161`
    - `--ds-color-checkbox-label-text-support-error-color`: `#ff5252`
    - `--ds-color-checkbox-disable-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-disable-deselected-icon-color`: `#9e9e9e`
    - `--ds-color-checkbox-disable-inderterminate-icon-color`: `#9e9e9e`
    - `--ds-color-checkbox-disable-selected-icon-color`: `#9e9e9e`
    - `--ds-color-checkbox-error-icon-color`: `#ff5252`
    - `--ds-color-checkbox-error-deselected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-error-deselected-hover-background`: `#ffe5e5`
    - `--ds-color-checkbox-error-deselected-press-background`: `#ffcccc`
    - `--ds-color-checkbox-error-inderterminate-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-error-inderterminate-hover-background`: `#ffe5e5`
    - `--ds-color-checkbox-error-inderterminate-press-background`: `#ffcccc`
    - `--ds-color-checkbox-error-selected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-error-selected-hover-background`: `#ffe5e5`
    - `--ds-color-checkbox-error-selected-press-background`: `#ffcccc`
    - `--ds-color-checkbox-normal-deselected-icon-color`: `#616161`
    - `--ds-color-checkbox-normal-deselected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-normal-deselected-hover-background`: `#ebebeb`
    - `--ds-color-checkbox-normal-deselected-press-background`: `#e0e0e0`
    - `--ds-color-checkbox-normal-inderterminate-icon-color`: `#448aff`
    - `--ds-color-checkbox-normal-inderterminate-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-normal-inderterminate-hover-background`: `#e8f0ff`
    - `--ds-color-checkbox-normal-inderterminate-press-background`: `#ccdfff`
    - `--ds-color-checkbox-normal-selected-icon-color`: `#448aff`
    - `--ds-color-checkbox-normal-selected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-checkbox-normal-selected-hover-background`: `#e8f0ff`
    - `--ds-color-checkbox-normal-selected-press-background`: `#ccdfff`

#### Chips `[17168:83542]` — 18 вариантов
- **Size** (VARIANT): M, S
- **Type** (VARIANT): Filled, Outlined
- **State** (VARIANT): Default, Disable, Focus, Hover, Press
- Прочие свойства: Element left#17172:1340 (BOOLEAN), Element right#17172:1349 (BOOLEAN)
- Токены компонента (50):
    - `--ds-color-chips-icon-color`: `#616161`
    - `--ds-color-chips-text-color`: `#333333`
    - `--ds-color-chips-input-background-support`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-chips-input-default-action-text-color`: `#616161`
    - `--ds-color-chips-input-default-background`: `#f8f9fc`
    - `--ds-color-chips-input-default-border-color`: `#e0e0e0`
    - `--ds-color-chips-input-default-label-text-color`: `#616161`
    - `--ds-color-chips-input-default-support-text-color`: `#616161`
    - `--ds-color-chips-input-disable-action-text-color`: `#9e9e9e`
    - `--ds-color-chips-input-disable-background`: `#f5f5f5`
    - `--ds-color-chips-input-disable-border-color`: `#ebebeb`
    - `--ds-color-chips-input-disable-icon-color`: `#9e9e9e`
    - `--ds-color-chips-input-disable-label-text-color`: `#9e9e9e`
    - `--ds-color-chips-input-disable-support-text-color`: `#9e9e9e`
    - `--ds-color-chips-input-error-action-text-color`: `#616161`
    - `--ds-color-chips-input-error-background`: `#f8f9fc`
    - `--ds-color-chips-input-error-background-hover`: `#f5f5f5`
    - `--ds-color-chips-input-error-border-color`: `#ff5252`
    - `--ds-color-chips-input-error-cursor-color`: `#333333`
    - `--ds-color-chips-input-error-icon-color`: `#ff5252`
    - `--ds-color-chips-input-error-label-text-color`: `#ff5252`
    - `--ds-color-chips-input-error-support-text-color`: `#ff5252`
    - `--ds-color-chips-input-error-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-chips-input-focus-background`: `#f8f9fc`
    - `--ds-color-chips-input-focus-border-color`: `#448aff`
    - `--ds-color-chips-input-focus-label-text-color`: `#448aff`
    - `--ds-color-chips-input-focus-support-text-color`: `#616161`
    - `--ds-color-chips-input-focus-text-color`: `#333333`
    - `--ds-color-chips-input-focus-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-chips-input-hover-action-text-color`: `#616161`
    - `--ds-color-chips-input-hover-background`: `#f5f5f5`
    - `--ds-color-chips-input-hover-border-color`: `#9e9e9e`
    - `--ds-color-chips-input-hover-label-text-color`: `#616161`
    - `--ds-color-chips-input-hover-support-text-color`: `#616161`
    - `--ds-color-chips-disable-background-filled`: `#ebebeb`
    - `--ds-color-chips-disable-background-outlined`: `#ffffff`
    - `--ds-color-chips-disable-border-color`: `#ebebeb`
    - `--ds-color-chips-disable-icon-color`: `#9e9e9e`
    - `--ds-color-chips-disable-text-color`: `#9e9e9e`
    - `--ds-color-chips-filled-default-background`: `#f8f9fc`
    - `--ds-color-chips-filled-hover-background`: `#f5f5f5`
    - `--ds-color-chips-filled-press-background`: `#e0e0e0`
    - `--ds-color-chips-outlined-default-background`: `#ffffff`
    - `--ds-color-chips-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-chips-outlined-focus-background`: `#ffffff`
    - `--ds-color-chips-outlined-focus-border-color`: `#448aff`
    - `--ds-color-chips-outlined-hover-background`: `#ffffff`
    - `--ds-color-chips-outlined-hover-border-color`: `#9e9e9e`
    - `--ds-color-chips-outlined-press-background`: `#e0e0e0`
    - `--ds-color-chips-outlined-press-border-color`: `#e0e0e0`

#### Chips group `[55750:5485]` — 2 вариантов
- **Size** (VARIANT): M, S
- Прочие свойства: Slot#60220:1 (SLOT)
- Токены компонента (50):
    - `--ds-color-chips-icon-color`: `#616161`
    - `--ds-color-chips-text-color`: `#333333`
    - `--ds-color-chips-input-background-support`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-chips-input-default-action-text-color`: `#616161`
    - `--ds-color-chips-input-default-background`: `#f8f9fc`
    - `--ds-color-chips-input-default-border-color`: `#e0e0e0`
    - `--ds-color-chips-input-default-label-text-color`: `#616161`
    - `--ds-color-chips-input-default-support-text-color`: `#616161`
    - `--ds-color-chips-input-disable-action-text-color`: `#9e9e9e`
    - `--ds-color-chips-input-disable-background`: `#f5f5f5`
    - `--ds-color-chips-input-disable-border-color`: `#ebebeb`
    - `--ds-color-chips-input-disable-icon-color`: `#9e9e9e`
    - `--ds-color-chips-input-disable-label-text-color`: `#9e9e9e`
    - `--ds-color-chips-input-disable-support-text-color`: `#9e9e9e`
    - `--ds-color-chips-input-error-action-text-color`: `#616161`
    - `--ds-color-chips-input-error-background`: `#f8f9fc`
    - `--ds-color-chips-input-error-background-hover`: `#f5f5f5`
    - `--ds-color-chips-input-error-border-color`: `#ff5252`
    - `--ds-color-chips-input-error-cursor-color`: `#333333`
    - `--ds-color-chips-input-error-icon-color`: `#ff5252`
    - `--ds-color-chips-input-error-label-text-color`: `#ff5252`
    - `--ds-color-chips-input-error-support-text-color`: `#ff5252`
    - `--ds-color-chips-input-error-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-chips-input-focus-background`: `#f8f9fc`
    - `--ds-color-chips-input-focus-border-color`: `#448aff`
    - `--ds-color-chips-input-focus-label-text-color`: `#448aff`
    - `--ds-color-chips-input-focus-support-text-color`: `#616161`
    - `--ds-color-chips-input-focus-text-color`: `#333333`
    - `--ds-color-chips-input-focus-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-chips-input-hover-action-text-color`: `#616161`
    - `--ds-color-chips-input-hover-background`: `#f5f5f5`
    - `--ds-color-chips-input-hover-border-color`: `#9e9e9e`
    - `--ds-color-chips-input-hover-label-text-color`: `#616161`
    - `--ds-color-chips-input-hover-support-text-color`: `#616161`
    - `--ds-color-chips-disable-background-filled`: `#ebebeb`
    - `--ds-color-chips-disable-background-outlined`: `#ffffff`
    - `--ds-color-chips-disable-border-color`: `#ebebeb`
    - `--ds-color-chips-disable-icon-color`: `#9e9e9e`
    - `--ds-color-chips-disable-text-color`: `#9e9e9e`
    - `--ds-color-chips-filled-default-background`: `#f8f9fc`
    - `--ds-color-chips-filled-hover-background`: `#f5f5f5`
    - `--ds-color-chips-filled-press-background`: `#e0e0e0`
    - `--ds-color-chips-outlined-default-background`: `#ffffff`
    - `--ds-color-chips-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-chips-outlined-focus-background`: `#ffffff`
    - `--ds-color-chips-outlined-focus-border-color`: `#448aff`
    - `--ds-color-chips-outlined-hover-background`: `#ffffff`
    - `--ds-color-chips-outlined-hover-border-color`: `#9e9e9e`
    - `--ds-color-chips-outlined-press-background`: `#e0e0e0`
    - `--ds-color-chips-outlined-press-border-color`: `#e0e0e0`

#### Chips Input `[52916:14622]` — 16 вариантов
- **Size** (VARIANT): M, S
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Прочие свойства: Support text#55693:0 (BOOLEAN), Element right#55751:38 (BOOLEAN), Support#59392:7 (BOOLEAN), Hint text#59430:0 (BOOLEAN), Label text value#59432:1 (TEXT), Support text value#59437:20 (TEXT), Hint text value#59437:40 (TEXT), Action text#59437:60 (BOOLEAN), Action text value#59437:80 (TEXT), Placeholder value#59507:0 (TEXT), Text value#59507:16 (TEXT), Slot#60231:21 (SLOT)
- Токены компонента (50):
    - `--ds-color-chips-icon-color`: `#616161`
    - `--ds-color-chips-text-color`: `#333333`
    - `--ds-color-chips-input-background-support`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-chips-input-default-action-text-color`: `#616161`
    - `--ds-color-chips-input-default-background`: `#f8f9fc`
    - `--ds-color-chips-input-default-border-color`: `#e0e0e0`
    - `--ds-color-chips-input-default-label-text-color`: `#616161`
    - `--ds-color-chips-input-default-support-text-color`: `#616161`
    - `--ds-color-chips-input-disable-action-text-color`: `#9e9e9e`
    - `--ds-color-chips-input-disable-background`: `#f5f5f5`
    - `--ds-color-chips-input-disable-border-color`: `#ebebeb`
    - `--ds-color-chips-input-disable-icon-color`: `#9e9e9e`
    - `--ds-color-chips-input-disable-label-text-color`: `#9e9e9e`
    - `--ds-color-chips-input-disable-support-text-color`: `#9e9e9e`
    - `--ds-color-chips-input-error-action-text-color`: `#616161`
    - `--ds-color-chips-input-error-background`: `#f8f9fc`
    - `--ds-color-chips-input-error-background-hover`: `#f5f5f5`
    - `--ds-color-chips-input-error-border-color`: `#ff5252`
    - `--ds-color-chips-input-error-cursor-color`: `#333333`
    - `--ds-color-chips-input-error-icon-color`: `#ff5252`
    - `--ds-color-chips-input-error-label-text-color`: `#ff5252`
    - `--ds-color-chips-input-error-support-text-color`: `#ff5252`
    - `--ds-color-chips-input-error-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-chips-input-focus-background`: `#f8f9fc`
    - `--ds-color-chips-input-focus-border-color`: `#448aff`
    - `--ds-color-chips-input-focus-label-text-color`: `#448aff`
    - `--ds-color-chips-input-focus-support-text-color`: `#616161`
    - `--ds-color-chips-input-focus-text-color`: `#333333`
    - `--ds-color-chips-input-focus-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-chips-input-hover-action-text-color`: `#616161`
    - `--ds-color-chips-input-hover-background`: `#f5f5f5`
    - `--ds-color-chips-input-hover-border-color`: `#9e9e9e`
    - `--ds-color-chips-input-hover-label-text-color`: `#616161`
    - `--ds-color-chips-input-hover-support-text-color`: `#616161`
    - `--ds-color-chips-disable-background-filled`: `#ebebeb`
    - `--ds-color-chips-disable-background-outlined`: `#ffffff`
    - `--ds-color-chips-disable-border-color`: `#ebebeb`
    - `--ds-color-chips-disable-icon-color`: `#9e9e9e`
    - `--ds-color-chips-disable-text-color`: `#9e9e9e`
    - `--ds-color-chips-filled-default-background`: `#f8f9fc`
    - `--ds-color-chips-filled-hover-background`: `#f5f5f5`
    - `--ds-color-chips-filled-press-background`: `#e0e0e0`
    - `--ds-color-chips-outlined-default-background`: `#ffffff`
    - `--ds-color-chips-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-chips-outlined-focus-background`: `#ffffff`
    - `--ds-color-chips-outlined-focus-border-color`: `#448aff`
    - `--ds-color-chips-outlined-hover-background`: `#ffffff`
    - `--ds-color-chips-outlined-hover-border-color`: `#9e9e9e`
    - `--ds-color-chips-outlined-press-background`: `#e0e0e0`
    - `--ds-color-chips-outlined-press-border-color`: `#e0e0e0`

#### Chips Input `[61382:55775]` — 16 вариантов
- **Size** (VARIANT): M, S
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Прочие свойства: Support text#55693:0 (BOOLEAN), Element right#55751:38 (BOOLEAN), Support#59392:7 (BOOLEAN), Hint text#59430:0 (BOOLEAN), Label text value#59432:1 (TEXT), Support text value#59437:20 (TEXT), Hint text value#59437:40 (TEXT), Action text#59437:60 (BOOLEAN), Action text value#59437:80 (TEXT), Placeholder value#59507:0 (TEXT), Text value#59507:16 (TEXT), Slot#60231:21 (SLOT)
- Токены компонента (50):
    - `--ds-color-chips-icon-color`: `#616161`
    - `--ds-color-chips-text-color`: `#333333`
    - `--ds-color-chips-input-background-support`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-chips-input-default-action-text-color`: `#616161`
    - `--ds-color-chips-input-default-background`: `#f8f9fc`
    - `--ds-color-chips-input-default-border-color`: `#e0e0e0`
    - `--ds-color-chips-input-default-label-text-color`: `#616161`
    - `--ds-color-chips-input-default-support-text-color`: `#616161`
    - `--ds-color-chips-input-disable-action-text-color`: `#9e9e9e`
    - `--ds-color-chips-input-disable-background`: `#f5f5f5`
    - `--ds-color-chips-input-disable-border-color`: `#ebebeb`
    - `--ds-color-chips-input-disable-icon-color`: `#9e9e9e`
    - `--ds-color-chips-input-disable-label-text-color`: `#9e9e9e`
    - `--ds-color-chips-input-disable-support-text-color`: `#9e9e9e`
    - `--ds-color-chips-input-error-action-text-color`: `#616161`
    - `--ds-color-chips-input-error-background`: `#f8f9fc`
    - `--ds-color-chips-input-error-background-hover`: `#f5f5f5`
    - `--ds-color-chips-input-error-border-color`: `#ff5252`
    - `--ds-color-chips-input-error-cursor-color`: `#333333`
    - `--ds-color-chips-input-error-icon-color`: `#ff5252`
    - `--ds-color-chips-input-error-label-text-color`: `#ff5252`
    - `--ds-color-chips-input-error-support-text-color`: `#ff5252`
    - `--ds-color-chips-input-error-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-chips-input-focus-background`: `#f8f9fc`
    - `--ds-color-chips-input-focus-border-color`: `#448aff`
    - `--ds-color-chips-input-focus-label-text-color`: `#448aff`
    - `--ds-color-chips-input-focus-support-text-color`: `#616161`
    - `--ds-color-chips-input-focus-text-color`: `#333333`
    - `--ds-color-chips-input-focus-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-chips-input-hover-action-text-color`: `#616161`
    - `--ds-color-chips-input-hover-background`: `#f5f5f5`
    - `--ds-color-chips-input-hover-border-color`: `#9e9e9e`
    - `--ds-color-chips-input-hover-label-text-color`: `#616161`
    - `--ds-color-chips-input-hover-support-text-color`: `#616161`
    - `--ds-color-chips-disable-background-filled`: `#ebebeb`
    - `--ds-color-chips-disable-background-outlined`: `#ffffff`
    - `--ds-color-chips-disable-border-color`: `#ebebeb`
    - `--ds-color-chips-disable-icon-color`: `#9e9e9e`
    - `--ds-color-chips-disable-text-color`: `#9e9e9e`
    - `--ds-color-chips-filled-default-background`: `#f8f9fc`
    - `--ds-color-chips-filled-hover-background`: `#f5f5f5`
    - `--ds-color-chips-filled-press-background`: `#e0e0e0`
    - `--ds-color-chips-outlined-default-background`: `#ffffff`
    - `--ds-color-chips-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-chips-outlined-focus-background`: `#ffffff`
    - `--ds-color-chips-outlined-focus-border-color`: `#448aff`
    - `--ds-color-chips-outlined-hover-background`: `#ffffff`
    - `--ds-color-chips-outlined-hover-border-color`: `#9e9e9e`
    - `--ds-color-chips-outlined-press-background`: `#e0e0e0`
    - `--ds-color-chips-outlined-press-border-color`: `#e0e0e0`

#### Chips input cell `[60231:75648]` — 8 вариантов
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Токены компонента (50):
    - `--ds-color-chips-icon-color`: `#616161`
    - `--ds-color-chips-text-color`: `#333333`
    - `--ds-color-chips-input-background-support`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-chips-input-default-action-text-color`: `#616161`
    - `--ds-color-chips-input-default-background`: `#f8f9fc`
    - `--ds-color-chips-input-default-border-color`: `#e0e0e0`
    - `--ds-color-chips-input-default-label-text-color`: `#616161`
    - `--ds-color-chips-input-default-support-text-color`: `#616161`
    - `--ds-color-chips-input-disable-action-text-color`: `#9e9e9e`
    - `--ds-color-chips-input-disable-background`: `#f5f5f5`
    - `--ds-color-chips-input-disable-border-color`: `#ebebeb`
    - `--ds-color-chips-input-disable-icon-color`: `#9e9e9e`
    - `--ds-color-chips-input-disable-label-text-color`: `#9e9e9e`
    - `--ds-color-chips-input-disable-support-text-color`: `#9e9e9e`
    - `--ds-color-chips-input-error-action-text-color`: `#616161`
    - `--ds-color-chips-input-error-background`: `#f8f9fc`
    - `--ds-color-chips-input-error-background-hover`: `#f5f5f5`
    - `--ds-color-chips-input-error-border-color`: `#ff5252`
    - `--ds-color-chips-input-error-cursor-color`: `#333333`
    - `--ds-color-chips-input-error-icon-color`: `#ff5252`
    - `--ds-color-chips-input-error-label-text-color`: `#ff5252`
    - `--ds-color-chips-input-error-support-text-color`: `#ff5252`
    - `--ds-color-chips-input-error-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-chips-input-focus-background`: `#f8f9fc`
    - `--ds-color-chips-input-focus-border-color`: `#448aff`
    - `--ds-color-chips-input-focus-label-text-color`: `#448aff`
    - `--ds-color-chips-input-focus-support-text-color`: `#616161`
    - `--ds-color-chips-input-focus-text-color`: `#333333`
    - `--ds-color-chips-input-focus-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-chips-input-hover-action-text-color`: `#616161`
    - `--ds-color-chips-input-hover-background`: `#f5f5f5`
    - `--ds-color-chips-input-hover-border-color`: `#9e9e9e`
    - `--ds-color-chips-input-hover-label-text-color`: `#616161`
    - `--ds-color-chips-input-hover-support-text-color`: `#616161`
    - `--ds-color-chips-disable-background-filled`: `#ebebeb`
    - `--ds-color-chips-disable-background-outlined`: `#ffffff`
    - `--ds-color-chips-disable-border-color`: `#ebebeb`
    - `--ds-color-chips-disable-icon-color`: `#9e9e9e`
    - `--ds-color-chips-disable-text-color`: `#9e9e9e`
    - `--ds-color-chips-filled-default-background`: `#f8f9fc`
    - `--ds-color-chips-filled-hover-background`: `#f5f5f5`
    - `--ds-color-chips-filled-press-background`: `#e0e0e0`
    - `--ds-color-chips-outlined-default-background`: `#ffffff`
    - `--ds-color-chips-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-chips-outlined-focus-background`: `#ffffff`
    - `--ds-color-chips-outlined-focus-border-color`: `#448aff`
    - `--ds-color-chips-outlined-hover-background`: `#ffffff`
    - `--ds-color-chips-outlined-hover-border-color`: `#9e9e9e`
    - `--ds-color-chips-outlined-press-background`: `#e0e0e0`
    - `--ds-color-chips-outlined-press-border-color`: `#e0e0e0`

#### Chrome Header desktop `[56564:1013]` — 1 вариантов

#### Chrome Header mobile `[56564:1062]` — 2 вариантов
- **Dark** (VARIANT): Off, On

#### Content `[57375:12699]` — 1 вариантов
- Прочие свойства: Slot#57375:0 (SLOT), Slot 1#57376:0 (SLOT)

#### Control arrow button `[52868:3935]` — 3 вариантов
- **Size** (VARIANT): M, S, XS

#### Control group number button `[53828:5569]` — 2 вариантов
- **Size** (VARIANT): S, XS

#### Control number button `[53829:6130]` — 16 вариантов
- **Size** (VARIANT): S, XS
- **Type** (VARIANT): Left, Right
- **State** (VARIANT): Default, Disable, Hover, Press

#### Control Panel `[58501:4052]` — 3 вариантов
- **Type** (VARIANT): Calendar, Control, Week
- Прочие свойства: Slot Week#58546:5 (SLOT)

#### Control Panel `[58982:11018]` — 2 вариантов
- **Type** (VARIANT): Control, Time
- Прочие свойства: Slot Time#58546:5 (SLOT)

#### Datepicker `[58509:5439]` — 3 вариантов
- **Type** (VARIANT): Day, Month, Year
- Прочие свойства: Headline#53001:0 (TEXT), Supporting text#53001:4 (TEXT), Supporting text (range)#53001:8 (TEXT), Headline (range)#53001:12 (TEXT), Show clear button#54584:0 (BOOLEAN), show controls#58548:10 (BOOLEAN)

#### Dialog content `[53535:1369]` — 1 вариантов
- **State** (VARIANT): Default
- Прочие свойства: Slot#58937:21 (SLOT), Scroll#58937:24 (BOOLEAN)
- Токены компонента (5):
    - `--ds-color-dialog-background`: `#ffffff`
    - `--ds-color-dialog-content-text-color`: `#616161`
    - `--ds-color-dialog-content-title-color`: `#333333`
    - `--ds-color-dialog-header-desc-color`: `#616161`
    - `--ds-color-dialog-header-title-color`: `#333333`

#### Dialog footer `[53749:638]` — 1 вариантов
- **State** (VARIANT): Default
- Прочие свойства: Divider#53749:3 (BOOLEAN)
- Токены компонента (5):
    - `--ds-color-dialog-background`: `#ffffff`
    - `--ds-color-dialog-content-text-color`: `#616161`
    - `--ds-color-dialog-content-title-color`: `#333333`
    - `--ds-color-dialog-header-desc-color`: `#616161`
    - `--ds-color-dialog-header-title-color`: `#333333`

#### Dialog header `[53535:1322]` — 2 вариантов
- **Type** (VARIANT): Picture, Text
- Прочие свойства: Divider#53619:9 (BOOLEAN), Close#59197:0 (BOOLEAN), Picture#59215:10 (SLOT), Description#59215:16 (BOOLEAN)
- Токены компонента (5):
    - `--ds-color-dialog-background`: `#ffffff`
    - `--ds-color-dialog-content-text-color`: `#616161`
    - `--ds-color-dialog-content-title-color`: `#333333`
    - `--ds-color-dialog-header-desc-color`: `#616161`
    - `--ds-color-dialog-header-title-color`: `#333333`

#### Dialog view `[52952:1285]` — 1 вариантов
- **State** (VARIANT): Default
- Прочие свойства: Content#58947:4 (BOOLEAN)
- Токены компонента (5):
    - `--ds-color-dialog-background`: `#ffffff`
    - `--ds-color-dialog-content-text-color`: `#616161`
    - `--ds-color-dialog-content-title-color`: `#333333`
    - `--ds-color-dialog-header-desc-color`: `#616161`
    - `--ds-color-dialog-header-title-color`: `#333333`

#### Divider `[58320:441]` — 16 вариантов
- **Size** (VARIANT): L, M
- **Type** (VARIANT): Dashed, Solid
- **State** (VARIANT): Default, Disable, Hover, Lite, Selected
- Токены компонента (8):
    - `--ds-color-divider-dashed-default-color`: `#e0e0e0`
    - `--ds-color-divider-dashed-disable-color`: `#ebebeb`
    - `--ds-color-divider-dashed-selected-color`: `#448aff`
    - `--ds-color-divider-solid-default-color`: `#e0e0e0`
    - `--ds-color-divider-solid-disable-color`: `#ebebeb`
    - `--ds-color-divider-solid-hover-color`: `#448aff`
    - `--ds-color-divider-solid-lite-color`: `#e0e0e0`
    - `--ds-color-divider-solid-selected-color`: `#448aff`

#### Divider `[53556:7964]` — 1 вариантов
- **Type** (VARIANT): Solid
- Токены компонента (8):
    - `--ds-color-divider-dashed-default-color`: `#e0e0e0`
    - `--ds-color-divider-dashed-disable-color`: `#ebebeb`
    - `--ds-color-divider-dashed-selected-color`: `#448aff`
    - `--ds-color-divider-solid-default-color`: `#e0e0e0`
    - `--ds-color-divider-solid-disable-color`: `#ebebeb`
    - `--ds-color-divider-solid-hover-color`: `#448aff`
    - `--ds-color-divider-solid-lite-color`: `#e0e0e0`
    - `--ds-color-divider-solid-selected-color`: `#448aff`

#### Element `[54104:20956]` — 9 вариантов
- **Content** (VARIANT): Checkbox, Counter, Icon group, Icon size, Image size, Indicator, Radio button, Slide toggle, Text default

#### Element cell `[58885:32432]` — 11 вариантов
- **Variant** (VARIANT): Button, Button icon, Cell Input, Checkbox, Chips, Icon group, Icon size, Input number, Slide toggle, Status, Text UI

#### Element Form Field `[60231:76795]` — 3 вариантов
- **Variant** (VARIANT): Chips input cell, Input cell, Select cell

#### Element left `[59851:11313]` — 5 вариантов
- **Style** (VARIANT): Accent, Negative, Neutral, Positive, Warning

#### Element menu `[56090:1611]` — 8 вариантов
- **Content** (VARIANT): Checkbox, Counter, Icon size, Image size, Indicator, Radio button, Slide toggle, Text default

#### Element select `[57735:17972]` — 8 вариантов
- **Content** (VARIANT): Checkbox, Counter, Icon size, Image size, Indicator, Radio button, Slide toggle, Text default

#### Element sidenav `[56598:2991]` — 2 вариантов
- **Content** (VARIANT): Avatar, Collaps icon

#### Element step `[55403:7248]` — 12 вариантов
- **Content** (VARIANT): Counter, Icon size
- **State** (VARIANT): Default, Disable, Error, Hover, Press, Selected
- Прочие свойства: Text#57060:7 (TEXT)

#### Elementare cell `[60220:72578]` — 10 вариантов
- **Variant** (VARIANT): Button, Button icon, Checkbox, Chips, Icon group, Icon size, Input number, Slide toggle, Status, Text UI

#### Elements `[58501:4220]` — 30 вариантов
- **Type** (VARIANT): Cell, Month, Year
- **Variant** (VARIANT): Default, Range, Selected, Today
- **State** (VARIANT): Default, Disable, Hover, Press
- Прочие свойства: Back right#58506:0 (BOOLEAN), Back left#58506:1 (BOOLEAN), Start range#58506:2 (BOOLEAN), End range#58506:3 (BOOLEAN), Date#58506:4 (TEXT), Show focus indicator#58506:5 (BOOLEAN), Year#58506:84 (TEXT), Month#58506:165 (TEXT)

#### Elements `[58982:9594]` — 8 вариантов
- **Variant** (VARIANT): Default, Selected
- **State** (VARIANT): Default, Disable, Hover, Press, Range
- Прочие свойства: Start range#58506:2 (BOOLEAN), End range#58506:3 (BOOLEAN), Time#58506:84 (TEXT)

#### Expansion content `[61361:99603]` — 2 вариантов
- **Padding off/on** (VARIANT): False, True
- Прочие свойства: Slot#61363:19 (SLOT)
- Токены компонента (12):
    - `--ds-color-expansion-panel-block-collaps-border-color`: `#e0e0e0`
    - `--ds-color-expansion-panel-block-collaps-content-background`: `#ffffff`
    - `--ds-color-expansion-panel-block-collaps-content-text-color`: `#333333`
    - `--ds-color-expansion-panel-block-expand-header-border-color`: `#e0e0e0`
    - `--ds-color-expansion-panel-block-expand-header-icon-color`: `#616161`
    - `--ds-color-expansion-panel-block-expand-header-text-color`: `#333333`
    - `--ds-color-expansion-panel-block-expand-header-default-background`: `#f8f9fc`
    - `--ds-color-expansion-panel-block-expand-header-disable-background`: `#f5f5f5`
    - `--ds-color-expansion-panel-block-expand-header-disable-border-color`: `#ebebeb`
    - `--ds-color-expansion-panel-block-expand-header-disable-text-color`: `#9e9e9e`
    - `--ds-color-expansion-panel-block-expand-header-hover-background`: `#f5f5f5`
    - `--ds-color-expansion-panel-block-expand-header-press-background`: `#e0e0e0`

#### Expansion group panel `[56155:1676]` — 2 вариантов
- **Type ?** (VARIANT): Collaps, Expand
- Прочие свойства: Slot#61364:25 (SLOT)
- Токены компонента (12):
    - `--ds-color-expansion-panel-block-collaps-border-color`: `#e0e0e0`
    - `--ds-color-expansion-panel-block-collaps-content-background`: `#ffffff`
    - `--ds-color-expansion-panel-block-collaps-content-text-color`: `#333333`
    - `--ds-color-expansion-panel-block-expand-header-border-color`: `#e0e0e0`
    - `--ds-color-expansion-panel-block-expand-header-icon-color`: `#616161`
    - `--ds-color-expansion-panel-block-expand-header-text-color`: `#333333`
    - `--ds-color-expansion-panel-block-expand-header-default-background`: `#f8f9fc`
    - `--ds-color-expansion-panel-block-expand-header-disable-background`: `#f5f5f5`
    - `--ds-color-expansion-panel-block-expand-header-disable-border-color`: `#ebebeb`
    - `--ds-color-expansion-panel-block-expand-header-disable-text-color`: `#9e9e9e`
    - `--ds-color-expansion-panel-block-expand-header-hover-background`: `#f5f5f5`
    - `--ds-color-expansion-panel-block-expand-header-press-background`: `#e0e0e0`

#### Expansion panel `[52937:1329]` — 12 вариантов
- **Variant** (VARIANT): Default, Info
- **Collaps/Expand** (VARIANT): Off, On
- **State** (VARIANT): Default, Disable, Hover, Press
- Прочие свойства: Element left#17172:1340 (BOOLEAN), Element right#17172:1349 (BOOLEAN), Icon text#58024:0 (BOOLEAN), Expansion panel_Content#58991:0 (SLOT), Expansion panel_Content2#58991:9 (SLOT), Expansion panel_Content3#58991:18 (SLOT), Expansion panel_Content4#58991:27 (SLOT)
- Токены компонента (12):
    - `--ds-color-expansion-panel-block-collaps-border-color`: `#e0e0e0`
    - `--ds-color-expansion-panel-block-collaps-content-background`: `#ffffff`
    - `--ds-color-expansion-panel-block-collaps-content-text-color`: `#333333`
    - `--ds-color-expansion-panel-block-expand-header-border-color`: `#e0e0e0`
    - `--ds-color-expansion-panel-block-expand-header-icon-color`: `#616161`
    - `--ds-color-expansion-panel-block-expand-header-text-color`: `#333333`
    - `--ds-color-expansion-panel-block-expand-header-default-background`: `#f8f9fc`
    - `--ds-color-expansion-panel-block-expand-header-disable-background`: `#f5f5f5`
    - `--ds-color-expansion-panel-block-expand-header-disable-border-color`: `#ebebeb`
    - `--ds-color-expansion-panel-block-expand-header-disable-text-color`: `#9e9e9e`
    - `--ds-color-expansion-panel-block-expand-header-hover-background`: `#f5f5f5`
    - `--ds-color-expansion-panel-block-expand-header-press-background`: `#e0e0e0`

#### Expansion table panel `[56217:15104]` — 0 вариантов
- Токены компонента (12):
    - `--ds-color-expansion-panel-block-collaps-border-color`: `#e0e0e0`
    - `--ds-color-expansion-panel-block-collaps-content-background`: `#ffffff`
    - `--ds-color-expansion-panel-block-collaps-content-text-color`: `#333333`
    - `--ds-color-expansion-panel-block-expand-header-border-color`: `#e0e0e0`
    - `--ds-color-expansion-panel-block-expand-header-icon-color`: `#616161`
    - `--ds-color-expansion-panel-block-expand-header-text-color`: `#333333`
    - `--ds-color-expansion-panel-block-expand-header-default-background`: `#f8f9fc`
    - `--ds-color-expansion-panel-block-expand-header-disable-background`: `#f5f5f5`
    - `--ds-color-expansion-panel-block-expand-header-disable-border-color`: `#ebebeb`
    - `--ds-color-expansion-panel-block-expand-header-disable-text-color`: `#9e9e9e`
    - `--ds-color-expansion-panel-block-expand-header-hover-background`: `#f5f5f5`
    - `--ds-color-expansion-panel-block-expand-header-press-background`: `#e0e0e0`

#### Form field cell `[60220:72732]` — 1 вариантов
- **Variant** (VARIANT): Table content cell Chips input

#### Header components `[53535:1244]` — 2 вариантов
- **Type** (VARIANT): Default, Mini
- Прочие свойства: Show Doc#17828:0 (BOOLEAN), Show Designer#17828:1 (BOOLEAN), Show Name#17828:2 (BOOLEAN), Show Figma#17828:3 (BOOLEAN), Description#57740:0 (BOOLEAN)

#### Hint container `[54593:479]` — 10 вариантов
- **Size** (VARIANT): Complex, Single
- **Orientation** (VARIANT): Default, Down, Left, Right, Up
- Прочие свойства: Header#54713:4 (BOOLEAN), Content#54713:15 (BOOLEAN), Footer#54713:26 (BOOLEAN)
- Токены компонента (11):
    - `--ds-color-hint-background-color`: `#424242`
    - `--ds-color-hint-content-icon-color`: `#ffffff`
    - `--ds-color-hint-content-text-color`: `#ffffff`
    - `--ds-color-hint-footer-text-color`: `#ffffff`
    - `--ds-color-hint-header-icon-color`: `#ffffff`
    - `--ds-color-hint-header-text-color`: `#ffffff`
    - `--ds-color-hint-header-accent-icon-color`: `#448aff`
    - `--ds-color-hint-header-negative-icon-color`: `#ff5252`
    - `--ds-color-hint-header-neutral-icon-color`: `#ffffff`
    - `--ds-color-hint-header-positive-icon-color`: `#14b456`
    - `--ds-color-hint-header-warning-icon-color`: `#ea7806`

#### Hint content `[54713:3325]` — 2 вариантов
- **Content** (VARIANT): Group content, Single content
- Прочие свойства: Element right#56260:9 (BOOLEAN), Element left#56260:12 (BOOLEAN)
- Токены компонента (11):
    - `--ds-color-hint-background-color`: `#424242`
    - `--ds-color-hint-content-icon-color`: `#ffffff`
    - `--ds-color-hint-content-text-color`: `#ffffff`
    - `--ds-color-hint-footer-text-color`: `#ffffff`
    - `--ds-color-hint-header-icon-color`: `#ffffff`
    - `--ds-color-hint-header-text-color`: `#ffffff`
    - `--ds-color-hint-header-accent-icon-color`: `#448aff`
    - `--ds-color-hint-header-negative-icon-color`: `#ff5252`
    - `--ds-color-hint-header-neutral-icon-color`: `#ffffff`
    - `--ds-color-hint-header-positive-icon-color`: `#14b456`
    - `--ds-color-hint-header-warning-icon-color`: `#ea7806`

#### Hint footer `[54600:517]` — 1 вариантов
- **Content** (VARIANT): Default
- Прочие свойства: Step text#54600:1 (BOOLEAN)
- Токены компонента (11):
    - `--ds-color-hint-background-color`: `#424242`
    - `--ds-color-hint-content-icon-color`: `#ffffff`
    - `--ds-color-hint-content-text-color`: `#ffffff`
    - `--ds-color-hint-footer-text-color`: `#ffffff`
    - `--ds-color-hint-header-icon-color`: `#ffffff`
    - `--ds-color-hint-header-text-color`: `#ffffff`
    - `--ds-color-hint-header-accent-icon-color`: `#448aff`
    - `--ds-color-hint-header-negative-icon-color`: `#ff5252`
    - `--ds-color-hint-header-neutral-icon-color`: `#ffffff`
    - `--ds-color-hint-header-positive-icon-color`: `#14b456`
    - `--ds-color-hint-header-warning-icon-color`: `#ea7806`

#### Hint header `[54594:2219]` — 5 вариантов
- **Style** (VARIANT): Error, Neutral, Primary, Secondary, Warning
- Прочие свойства: Element left#54594:55 (BOOLEAN), Element right#54594:56 (BOOLEAN)
- Токены компонента (11):
    - `--ds-color-hint-background-color`: `#424242`
    - `--ds-color-hint-content-icon-color`: `#ffffff`
    - `--ds-color-hint-content-text-color`: `#ffffff`
    - `--ds-color-hint-footer-text-color`: `#ffffff`
    - `--ds-color-hint-header-icon-color`: `#ffffff`
    - `--ds-color-hint-header-text-color`: `#ffffff`
    - `--ds-color-hint-header-accent-icon-color`: `#448aff`
    - `--ds-color-hint-header-negative-icon-color`: `#ff5252`
    - `--ds-color-hint-header-neutral-icon-color`: `#ffffff`
    - `--ds-color-hint-header-positive-icon-color`: `#14b456`
    - `--ds-color-hint-header-warning-icon-color`: `#ea7806`

#### Icon group `[53467:1060]` — 2 вариантов
- **Size gap** (VARIANT): 2x, 4x
- Прочие свойства: Slot#60190:14 (SLOT)

#### Icon size `[52927:6286]` — 12 вариантов
- **Size** (VARIANT): 16, 20, 24, 32, 36, 40
- **Content** (VARIANT): Icon, Img
- Прочие свойства: State#54063:8 (BOOLEAN), Instance#60108:34 (INSTANCE_SWAP)

#### Icon size_Draft `[54063:12911]` — 6 вариантов
- **Size** (VARIANT): 16, 20, 24, 32, 36, 40

#### Input `[52670:7573]` — 29 вариантов
- **Size** (VARIANT): M, S, XS
- **Variant** (VARIANT): Empty, No label up, Populated
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Прочие свойства: Input text#52678:0 (TEXT), Label text#52678:3 (TEXT), Support text#52678:6 (TEXT), Label#56934:32 (BOOLEAN), Element left#56934:282 (BOOLEAN), Element right#56934:407 (BOOLEAN), Support text#56934:532 (BOOLEAN), Input text#56968:66 (BOOLEAN), Hint text#57893:0 (BOOLEAN), Support#57893:30 (BOOLEAN), Hint text#57893:60 (TEXT)
- Токены компонента (80):
    - `--ds-color-input-background-support`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-input-input-filled-background`: `#f8f9fc`
    - `--ds-color-input-input-label-text-color`: `#616161`
    - `--ds-color-input-input-outlined-background`: `#ffffff`
    - `--ds-color-input-number-control-background`: `#ffffff`
    - `--ds-color-input-number-control-icon-color`: `#616161`
    - `--ds-color-input-number-control-text-color`: `#333333`
    - `--ds-color-input-number-control-default-border-color`: `#e0e0e0`
    - `--ds-color-input-number-control-disable-border-color`: `#ebebeb`
    - `--ds-color-input-number-control-disable-icon-color`: `#9e9e9e`
    - `--ds-color-input-number-control-disable-text-color`: `#9e9e9e`
    - `--ds-color-input-number-control-error-border-color`: `#ff5252`
    - `--ds-color-input-number-control-error-icon-color`: `#ff5252`
    - `--ds-color-input-number-control-focus-border-color`: `#448aff`
    - `--ds-color-input-number-control-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-number-input-background`: `#ffffff`
    - `--ds-color-input-number-input-icon-color`: `#616161`
    - `--ds-color-input-number-input-text-color`: `#333333`
    - `--ds-color-input-number-input-default-border-color`: `#e0e0e0`
    - `--ds-color-input-number-input-disable-border-color`: `#ebebeb`
    - `--ds-color-input-number-input-disable-icon-color`: `#9e9e9e`
    - `--ds-color-input-number-input-disable-text-color`: `#9e9e9e`
    - `--ds-color-input-number-input-error-border-color`: `#ff5252`
    - `--ds-color-input-number-input-error-icon-color`: `#ff5252`
    - `--ds-color-input-number-input-focus-border-color`: `#448aff`
    - `--ds-color-input-number-input-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-filled-default-border-color`: `#e0e0e0`
    - `--ds-color-input-filled-default-icon-color-default`: `#616161`
    - `--ds-color-input-filled-default-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-default-input-text-color`: `#333333`
    - `--ds-color-input-filled-default-label-text-color`: `#616161`
    - `--ds-color-input-filled-default-support-text-color`: `#616161`
    - `--ds-color-input-filled-disable-border-color`: `#ebebeb`
    - `--ds-color-input-filled-disable-icon-color-disable`: `#9e9e9e`
    - `--ds-color-input-filled-disable-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-disable-input-background`: `#f5f5f5`
    - `--ds-color-input-filled-disable-input-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-disable-label-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-disable-support-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-error-border-color`: `#ff5252`
    - `--ds-color-input-filled-error-icon-color-default`: `#616161`
    - `--ds-color-input-filled-error-icon-color-error`: `#ff5252`
    - `--ds-color-input-filled-error-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-error-input-background-hover`: `#f5f5f5`
    - `--ds-color-input-filled-error-input-cursor-color`: `#333333`
    - `--ds-color-input-filled-error-input-text-color`: `#333333`
    - `--ds-color-input-filled-error-input-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-input-filled-error-label-text-color`: `#ff5252`
    - `--ds-color-input-filled-error-text-support-color`: `#ff5252`
    - `--ds-color-input-filled-focus-border-color`: `#448aff`
    - `--ds-color-input-filled-focus-icon-color-default`: `#616161`
    - `--ds-color-input-filled-focus-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-focus-input-cursor-color`: `#333333`
    - `--ds-color-input-filled-focus-input-text-color`: `#333333`
    - `--ds-color-input-filled-focus-input-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-input-filled-focus-label-text-color`: `#448aff`
    - `--ds-color-input-filled-focus-support-text-color`: `#616161`
    - `--ds-color-input-filled-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-filled-hover-icon-color-default`: `#616161`
    - `--ds-color-input-filled-hover-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-hover-input-background-hover`: `#f5f5f5`
    - `--ds-color-input-filled-hover-input-text-color`: `#333333`
    - `--ds-color-input-filled-hover-label-text-color`: `#616161`
    - `--ds-color-input-filled-hover-text-support-color`: `#616161`
    - `--ds-color-input-outlined-default-background`: `#ffffff`
    - `--ds-color-input-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-default-icon-color`: `#616161`
    - `--ds-color-input-outlined-default-text-color`: `#333333`
    - `--ds-color-input-outlined-error-background`: `#ebebeb`
    - `--ds-color-input-outlined-error-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-error-icon-color`: `#616161`
    - `--ds-color-input-outlined-error-text-color`: `#333333`
    - `--ds-color-input-outlined-focus-background`: `#ebebeb`
    - `--ds-color-input-outlined-focus-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-focus-icon-color`: `#616161`
    - `--ds-color-input-outlined-focus-text-color`: `#333333`
    - `--ds-color-input-outlined-hover-background`: `#fafafa`
    - `--ds-color-input-outlined-hover-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-hover-icon-color`: `#616161`
    - `--ds-color-input-outlined-hover-text-color`: `#333333`

#### Input cell `[60229:74436]` — 8 вариантов
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Hover, Vocus+Value
- Токены компонента (80):
    - `--ds-color-input-background-support`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-input-input-filled-background`: `#f8f9fc`
    - `--ds-color-input-input-label-text-color`: `#616161`
    - `--ds-color-input-input-outlined-background`: `#ffffff`
    - `--ds-color-input-number-control-background`: `#ffffff`
    - `--ds-color-input-number-control-icon-color`: `#616161`
    - `--ds-color-input-number-control-text-color`: `#333333`
    - `--ds-color-input-number-control-default-border-color`: `#e0e0e0`
    - `--ds-color-input-number-control-disable-border-color`: `#ebebeb`
    - `--ds-color-input-number-control-disable-icon-color`: `#9e9e9e`
    - `--ds-color-input-number-control-disable-text-color`: `#9e9e9e`
    - `--ds-color-input-number-control-error-border-color`: `#ff5252`
    - `--ds-color-input-number-control-error-icon-color`: `#ff5252`
    - `--ds-color-input-number-control-focus-border-color`: `#448aff`
    - `--ds-color-input-number-control-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-number-input-background`: `#ffffff`
    - `--ds-color-input-number-input-icon-color`: `#616161`
    - `--ds-color-input-number-input-text-color`: `#333333`
    - `--ds-color-input-number-input-default-border-color`: `#e0e0e0`
    - `--ds-color-input-number-input-disable-border-color`: `#ebebeb`
    - `--ds-color-input-number-input-disable-icon-color`: `#9e9e9e`
    - `--ds-color-input-number-input-disable-text-color`: `#9e9e9e`
    - `--ds-color-input-number-input-error-border-color`: `#ff5252`
    - `--ds-color-input-number-input-error-icon-color`: `#ff5252`
    - `--ds-color-input-number-input-focus-border-color`: `#448aff`
    - `--ds-color-input-number-input-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-filled-default-border-color`: `#e0e0e0`
    - `--ds-color-input-filled-default-icon-color-default`: `#616161`
    - `--ds-color-input-filled-default-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-default-input-text-color`: `#333333`
    - `--ds-color-input-filled-default-label-text-color`: `#616161`
    - `--ds-color-input-filled-default-support-text-color`: `#616161`
    - `--ds-color-input-filled-disable-border-color`: `#ebebeb`
    - `--ds-color-input-filled-disable-icon-color-disable`: `#9e9e9e`
    - `--ds-color-input-filled-disable-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-disable-input-background`: `#f5f5f5`
    - `--ds-color-input-filled-disable-input-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-disable-label-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-disable-support-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-error-border-color`: `#ff5252`
    - `--ds-color-input-filled-error-icon-color-default`: `#616161`
    - `--ds-color-input-filled-error-icon-color-error`: `#ff5252`
    - `--ds-color-input-filled-error-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-error-input-background-hover`: `#f5f5f5`
    - `--ds-color-input-filled-error-input-cursor-color`: `#333333`
    - `--ds-color-input-filled-error-input-text-color`: `#333333`
    - `--ds-color-input-filled-error-input-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-input-filled-error-label-text-color`: `#ff5252`
    - `--ds-color-input-filled-error-text-support-color`: `#ff5252`
    - `--ds-color-input-filled-focus-border-color`: `#448aff`
    - `--ds-color-input-filled-focus-icon-color-default`: `#616161`
    - `--ds-color-input-filled-focus-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-focus-input-cursor-color`: `#333333`
    - `--ds-color-input-filled-focus-input-text-color`: `#333333`
    - `--ds-color-input-filled-focus-input-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-input-filled-focus-label-text-color`: `#448aff`
    - `--ds-color-input-filled-focus-support-text-color`: `#616161`
    - `--ds-color-input-filled-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-filled-hover-icon-color-default`: `#616161`
    - `--ds-color-input-filled-hover-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-hover-input-background-hover`: `#f5f5f5`
    - `--ds-color-input-filled-hover-input-text-color`: `#333333`
    - `--ds-color-input-filled-hover-label-text-color`: `#616161`
    - `--ds-color-input-filled-hover-text-support-color`: `#616161`
    - `--ds-color-input-outlined-default-background`: `#ffffff`
    - `--ds-color-input-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-default-icon-color`: `#616161`
    - `--ds-color-input-outlined-default-text-color`: `#333333`
    - `--ds-color-input-outlined-error-background`: `#ebebeb`
    - `--ds-color-input-outlined-error-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-error-icon-color`: `#616161`
    - `--ds-color-input-outlined-error-text-color`: `#333333`
    - `--ds-color-input-outlined-focus-background`: `#ebebeb`
    - `--ds-color-input-outlined-focus-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-focus-icon-color`: `#616161`
    - `--ds-color-input-outlined-focus-text-color`: `#333333`
    - `--ds-color-input-outlined-hover-background`: `#fafafa`
    - `--ds-color-input-outlined-hover-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-hover-icon-color`: `#616161`
    - `--ds-color-input-outlined-hover-text-color`: `#333333`

#### Input Datepicker `[58548:4764]` — 2 вариантов
- **Type** (VARIANT): Empty, Populated
- Токены компонента (80):
    - `--ds-color-input-background-support`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-input-input-filled-background`: `#f8f9fc`
    - `--ds-color-input-input-label-text-color`: `#616161`
    - `--ds-color-input-input-outlined-background`: `#ffffff`
    - `--ds-color-input-number-control-background`: `#ffffff`
    - `--ds-color-input-number-control-icon-color`: `#616161`
    - `--ds-color-input-number-control-text-color`: `#333333`
    - `--ds-color-input-number-control-default-border-color`: `#e0e0e0`
    - `--ds-color-input-number-control-disable-border-color`: `#ebebeb`
    - `--ds-color-input-number-control-disable-icon-color`: `#9e9e9e`
    - `--ds-color-input-number-control-disable-text-color`: `#9e9e9e`
    - `--ds-color-input-number-control-error-border-color`: `#ff5252`
    - `--ds-color-input-number-control-error-icon-color`: `#ff5252`
    - `--ds-color-input-number-control-focus-border-color`: `#448aff`
    - `--ds-color-input-number-control-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-number-input-background`: `#ffffff`
    - `--ds-color-input-number-input-icon-color`: `#616161`
    - `--ds-color-input-number-input-text-color`: `#333333`
    - `--ds-color-input-number-input-default-border-color`: `#e0e0e0`
    - `--ds-color-input-number-input-disable-border-color`: `#ebebeb`
    - `--ds-color-input-number-input-disable-icon-color`: `#9e9e9e`
    - `--ds-color-input-number-input-disable-text-color`: `#9e9e9e`
    - `--ds-color-input-number-input-error-border-color`: `#ff5252`
    - `--ds-color-input-number-input-error-icon-color`: `#ff5252`
    - `--ds-color-input-number-input-focus-border-color`: `#448aff`
    - `--ds-color-input-number-input-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-filled-default-border-color`: `#e0e0e0`
    - `--ds-color-input-filled-default-icon-color-default`: `#616161`
    - `--ds-color-input-filled-default-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-default-input-text-color`: `#333333`
    - `--ds-color-input-filled-default-label-text-color`: `#616161`
    - `--ds-color-input-filled-default-support-text-color`: `#616161`
    - `--ds-color-input-filled-disable-border-color`: `#ebebeb`
    - `--ds-color-input-filled-disable-icon-color-disable`: `#9e9e9e`
    - `--ds-color-input-filled-disable-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-disable-input-background`: `#f5f5f5`
    - `--ds-color-input-filled-disable-input-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-disable-label-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-disable-support-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-error-border-color`: `#ff5252`
    - `--ds-color-input-filled-error-icon-color-default`: `#616161`
    - `--ds-color-input-filled-error-icon-color-error`: `#ff5252`
    - `--ds-color-input-filled-error-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-error-input-background-hover`: `#f5f5f5`
    - `--ds-color-input-filled-error-input-cursor-color`: `#333333`
    - `--ds-color-input-filled-error-input-text-color`: `#333333`
    - `--ds-color-input-filled-error-input-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-input-filled-error-label-text-color`: `#ff5252`
    - `--ds-color-input-filled-error-text-support-color`: `#ff5252`
    - `--ds-color-input-filled-focus-border-color`: `#448aff`
    - `--ds-color-input-filled-focus-icon-color-default`: `#616161`
    - `--ds-color-input-filled-focus-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-focus-input-cursor-color`: `#333333`
    - `--ds-color-input-filled-focus-input-text-color`: `#333333`
    - `--ds-color-input-filled-focus-input-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-input-filled-focus-label-text-color`: `#448aff`
    - `--ds-color-input-filled-focus-support-text-color`: `#616161`
    - `--ds-color-input-filled-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-filled-hover-icon-color-default`: `#616161`
    - `--ds-color-input-filled-hover-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-hover-input-background-hover`: `#f5f5f5`
    - `--ds-color-input-filled-hover-input-text-color`: `#333333`
    - `--ds-color-input-filled-hover-label-text-color`: `#616161`
    - `--ds-color-input-filled-hover-text-support-color`: `#616161`
    - `--ds-color-input-outlined-default-background`: `#ffffff`
    - `--ds-color-input-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-default-icon-color`: `#616161`
    - `--ds-color-input-outlined-default-text-color`: `#333333`
    - `--ds-color-input-outlined-error-background`: `#ebebeb`
    - `--ds-color-input-outlined-error-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-error-icon-color`: `#616161`
    - `--ds-color-input-outlined-error-text-color`: `#333333`
    - `--ds-color-input-outlined-focus-background`: `#ebebeb`
    - `--ds-color-input-outlined-focus-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-focus-icon-color`: `#616161`
    - `--ds-color-input-outlined-focus-text-color`: `#333333`
    - `--ds-color-input-outlined-hover-background`: `#fafafa`
    - `--ds-color-input-outlined-hover-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-hover-icon-color`: `#616161`
    - `--ds-color-input-outlined-hover-text-color`: `#333333`

#### Input for number `[53827:5155]` — 10 вариантов
- **Size** (VARIANT): Compact, Normal
- **State** (VARIANT): Default, Disable, Error, Focus, Hover
- Прочие свойства: Icon left#53827:2 (BOOLEAN), Icon right#53827:3 (BOOLEAN)
- Токены компонента (80):
    - `--ds-color-input-background-support`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-input-input-filled-background`: `#f8f9fc`
    - `--ds-color-input-input-label-text-color`: `#616161`
    - `--ds-color-input-input-outlined-background`: `#ffffff`
    - `--ds-color-input-number-control-background`: `#ffffff`
    - `--ds-color-input-number-control-icon-color`: `#616161`
    - `--ds-color-input-number-control-text-color`: `#333333`
    - `--ds-color-input-number-control-default-border-color`: `#e0e0e0`
    - `--ds-color-input-number-control-disable-border-color`: `#ebebeb`
    - `--ds-color-input-number-control-disable-icon-color`: `#9e9e9e`
    - `--ds-color-input-number-control-disable-text-color`: `#9e9e9e`
    - `--ds-color-input-number-control-error-border-color`: `#ff5252`
    - `--ds-color-input-number-control-error-icon-color`: `#ff5252`
    - `--ds-color-input-number-control-focus-border-color`: `#448aff`
    - `--ds-color-input-number-control-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-number-input-background`: `#ffffff`
    - `--ds-color-input-number-input-icon-color`: `#616161`
    - `--ds-color-input-number-input-text-color`: `#333333`
    - `--ds-color-input-number-input-default-border-color`: `#e0e0e0`
    - `--ds-color-input-number-input-disable-border-color`: `#ebebeb`
    - `--ds-color-input-number-input-disable-icon-color`: `#9e9e9e`
    - `--ds-color-input-number-input-disable-text-color`: `#9e9e9e`
    - `--ds-color-input-number-input-error-border-color`: `#ff5252`
    - `--ds-color-input-number-input-error-icon-color`: `#ff5252`
    - `--ds-color-input-number-input-focus-border-color`: `#448aff`
    - `--ds-color-input-number-input-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-filled-default-border-color`: `#e0e0e0`
    - `--ds-color-input-filled-default-icon-color-default`: `#616161`
    - `--ds-color-input-filled-default-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-default-input-text-color`: `#333333`
    - `--ds-color-input-filled-default-label-text-color`: `#616161`
    - `--ds-color-input-filled-default-support-text-color`: `#616161`
    - `--ds-color-input-filled-disable-border-color`: `#ebebeb`
    - `--ds-color-input-filled-disable-icon-color-disable`: `#9e9e9e`
    - `--ds-color-input-filled-disable-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-disable-input-background`: `#f5f5f5`
    - `--ds-color-input-filled-disable-input-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-disable-label-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-disable-support-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-error-border-color`: `#ff5252`
    - `--ds-color-input-filled-error-icon-color-default`: `#616161`
    - `--ds-color-input-filled-error-icon-color-error`: `#ff5252`
    - `--ds-color-input-filled-error-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-error-input-background-hover`: `#f5f5f5`
    - `--ds-color-input-filled-error-input-cursor-color`: `#333333`
    - `--ds-color-input-filled-error-input-text-color`: `#333333`
    - `--ds-color-input-filled-error-input-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-input-filled-error-label-text-color`: `#ff5252`
    - `--ds-color-input-filled-error-text-support-color`: `#ff5252`
    - `--ds-color-input-filled-focus-border-color`: `#448aff`
    - `--ds-color-input-filled-focus-icon-color-default`: `#616161`
    - `--ds-color-input-filled-focus-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-focus-input-cursor-color`: `#333333`
    - `--ds-color-input-filled-focus-input-text-color`: `#333333`
    - `--ds-color-input-filled-focus-input-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-input-filled-focus-label-text-color`: `#448aff`
    - `--ds-color-input-filled-focus-support-text-color`: `#616161`
    - `--ds-color-input-filled-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-filled-hover-icon-color-default`: `#616161`
    - `--ds-color-input-filled-hover-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-hover-input-background-hover`: `#f5f5f5`
    - `--ds-color-input-filled-hover-input-text-color`: `#333333`
    - `--ds-color-input-filled-hover-label-text-color`: `#616161`
    - `--ds-color-input-filled-hover-text-support-color`: `#616161`
    - `--ds-color-input-outlined-default-background`: `#ffffff`
    - `--ds-color-input-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-default-icon-color`: `#616161`
    - `--ds-color-input-outlined-default-text-color`: `#333333`
    - `--ds-color-input-outlined-error-background`: `#ebebeb`
    - `--ds-color-input-outlined-error-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-error-icon-color`: `#616161`
    - `--ds-color-input-outlined-error-text-color`: `#333333`
    - `--ds-color-input-outlined-focus-background`: `#ebebeb`
    - `--ds-color-input-outlined-focus-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-focus-icon-color`: `#616161`
    - `--ds-color-input-outlined-focus-text-color`: `#333333`
    - `--ds-color-input-outlined-hover-background`: `#fafafa`
    - `--ds-color-input-outlined-hover-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-hover-icon-color`: `#616161`
    - `--ds-color-input-outlined-hover-text-color`: `#333333`

#### Input number `[17193:84750]` — 29 вариантов
- **Size** (VARIANT): M, S, XS
- **Variant** (VARIANT): Empty, No label up, Populated
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Прочие свойства: Close icon#57962:0 (BOOLEAN)
- Токены компонента (80):
    - `--ds-color-input-background-support`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-input-input-filled-background`: `#f8f9fc`
    - `--ds-color-input-input-label-text-color`: `#616161`
    - `--ds-color-input-input-outlined-background`: `#ffffff`
    - `--ds-color-input-number-control-background`: `#ffffff`
    - `--ds-color-input-number-control-icon-color`: `#616161`
    - `--ds-color-input-number-control-text-color`: `#333333`
    - `--ds-color-input-number-control-default-border-color`: `#e0e0e0`
    - `--ds-color-input-number-control-disable-border-color`: `#ebebeb`
    - `--ds-color-input-number-control-disable-icon-color`: `#9e9e9e`
    - `--ds-color-input-number-control-disable-text-color`: `#9e9e9e`
    - `--ds-color-input-number-control-error-border-color`: `#ff5252`
    - `--ds-color-input-number-control-error-icon-color`: `#ff5252`
    - `--ds-color-input-number-control-focus-border-color`: `#448aff`
    - `--ds-color-input-number-control-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-number-input-background`: `#ffffff`
    - `--ds-color-input-number-input-icon-color`: `#616161`
    - `--ds-color-input-number-input-text-color`: `#333333`
    - `--ds-color-input-number-input-default-border-color`: `#e0e0e0`
    - `--ds-color-input-number-input-disable-border-color`: `#ebebeb`
    - `--ds-color-input-number-input-disable-icon-color`: `#9e9e9e`
    - `--ds-color-input-number-input-disable-text-color`: `#9e9e9e`
    - `--ds-color-input-number-input-error-border-color`: `#ff5252`
    - `--ds-color-input-number-input-error-icon-color`: `#ff5252`
    - `--ds-color-input-number-input-focus-border-color`: `#448aff`
    - `--ds-color-input-number-input-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-filled-default-border-color`: `#e0e0e0`
    - `--ds-color-input-filled-default-icon-color-default`: `#616161`
    - `--ds-color-input-filled-default-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-default-input-text-color`: `#333333`
    - `--ds-color-input-filled-default-label-text-color`: `#616161`
    - `--ds-color-input-filled-default-support-text-color`: `#616161`
    - `--ds-color-input-filled-disable-border-color`: `#ebebeb`
    - `--ds-color-input-filled-disable-icon-color-disable`: `#9e9e9e`
    - `--ds-color-input-filled-disable-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-disable-input-background`: `#f5f5f5`
    - `--ds-color-input-filled-disable-input-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-disable-label-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-disable-support-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-error-border-color`: `#ff5252`
    - `--ds-color-input-filled-error-icon-color-default`: `#616161`
    - `--ds-color-input-filled-error-icon-color-error`: `#ff5252`
    - `--ds-color-input-filled-error-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-error-input-background-hover`: `#f5f5f5`
    - `--ds-color-input-filled-error-input-cursor-color`: `#333333`
    - `--ds-color-input-filled-error-input-text-color`: `#333333`
    - `--ds-color-input-filled-error-input-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-input-filled-error-label-text-color`: `#ff5252`
    - `--ds-color-input-filled-error-text-support-color`: `#ff5252`
    - `--ds-color-input-filled-focus-border-color`: `#448aff`
    - `--ds-color-input-filled-focus-icon-color-default`: `#616161`
    - `--ds-color-input-filled-focus-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-focus-input-cursor-color`: `#333333`
    - `--ds-color-input-filled-focus-input-text-color`: `#333333`
    - `--ds-color-input-filled-focus-input-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-input-filled-focus-label-text-color`: `#448aff`
    - `--ds-color-input-filled-focus-support-text-color`: `#616161`
    - `--ds-color-input-filled-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-filled-hover-icon-color-default`: `#616161`
    - `--ds-color-input-filled-hover-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-hover-input-background-hover`: `#f5f5f5`
    - `--ds-color-input-filled-hover-input-text-color`: `#333333`
    - `--ds-color-input-filled-hover-label-text-color`: `#616161`
    - `--ds-color-input-filled-hover-text-support-color`: `#616161`
    - `--ds-color-input-outlined-default-background`: `#ffffff`
    - `--ds-color-input-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-default-icon-color`: `#616161`
    - `--ds-color-input-outlined-default-text-color`: `#333333`
    - `--ds-color-input-outlined-error-background`: `#ebebeb`
    - `--ds-color-input-outlined-error-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-error-icon-color`: `#616161`
    - `--ds-color-input-outlined-error-text-color`: `#333333`
    - `--ds-color-input-outlined-focus-background`: `#ebebeb`
    - `--ds-color-input-outlined-focus-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-focus-icon-color`: `#616161`
    - `--ds-color-input-outlined-focus-text-color`: `#333333`
    - `--ds-color-input-outlined-hover-background`: `#fafafa`
    - `--ds-color-input-outlined-hover-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-hover-icon-color`: `#616161`
    - `--ds-color-input-outlined-hover-text-color`: `#333333`

#### Input number_but icon `[56967:10506]` — 1 вариантов
- Прочие свойства: Support#57977:0 (BOOLEAN)
- Токены компонента (80):
    - `--ds-color-input-background-support`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-input-input-filled-background`: `#f8f9fc`
    - `--ds-color-input-input-label-text-color`: `#616161`
    - `--ds-color-input-input-outlined-background`: `#ffffff`
    - `--ds-color-input-number-control-background`: `#ffffff`
    - `--ds-color-input-number-control-icon-color`: `#616161`
    - `--ds-color-input-number-control-text-color`: `#333333`
    - `--ds-color-input-number-control-default-border-color`: `#e0e0e0`
    - `--ds-color-input-number-control-disable-border-color`: `#ebebeb`
    - `--ds-color-input-number-control-disable-icon-color`: `#9e9e9e`
    - `--ds-color-input-number-control-disable-text-color`: `#9e9e9e`
    - `--ds-color-input-number-control-error-border-color`: `#ff5252`
    - `--ds-color-input-number-control-error-icon-color`: `#ff5252`
    - `--ds-color-input-number-control-focus-border-color`: `#448aff`
    - `--ds-color-input-number-control-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-number-input-background`: `#ffffff`
    - `--ds-color-input-number-input-icon-color`: `#616161`
    - `--ds-color-input-number-input-text-color`: `#333333`
    - `--ds-color-input-number-input-default-border-color`: `#e0e0e0`
    - `--ds-color-input-number-input-disable-border-color`: `#ebebeb`
    - `--ds-color-input-number-input-disable-icon-color`: `#9e9e9e`
    - `--ds-color-input-number-input-disable-text-color`: `#9e9e9e`
    - `--ds-color-input-number-input-error-border-color`: `#ff5252`
    - `--ds-color-input-number-input-error-icon-color`: `#ff5252`
    - `--ds-color-input-number-input-focus-border-color`: `#448aff`
    - `--ds-color-input-number-input-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-filled-default-border-color`: `#e0e0e0`
    - `--ds-color-input-filled-default-icon-color-default`: `#616161`
    - `--ds-color-input-filled-default-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-default-input-text-color`: `#333333`
    - `--ds-color-input-filled-default-label-text-color`: `#616161`
    - `--ds-color-input-filled-default-support-text-color`: `#616161`
    - `--ds-color-input-filled-disable-border-color`: `#ebebeb`
    - `--ds-color-input-filled-disable-icon-color-disable`: `#9e9e9e`
    - `--ds-color-input-filled-disable-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-disable-input-background`: `#f5f5f5`
    - `--ds-color-input-filled-disable-input-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-disable-label-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-disable-support-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-error-border-color`: `#ff5252`
    - `--ds-color-input-filled-error-icon-color-default`: `#616161`
    - `--ds-color-input-filled-error-icon-color-error`: `#ff5252`
    - `--ds-color-input-filled-error-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-error-input-background-hover`: `#f5f5f5`
    - `--ds-color-input-filled-error-input-cursor-color`: `#333333`
    - `--ds-color-input-filled-error-input-text-color`: `#333333`
    - `--ds-color-input-filled-error-input-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-input-filled-error-label-text-color`: `#ff5252`
    - `--ds-color-input-filled-error-text-support-color`: `#ff5252`
    - `--ds-color-input-filled-focus-border-color`: `#448aff`
    - `--ds-color-input-filled-focus-icon-color-default`: `#616161`
    - `--ds-color-input-filled-focus-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-focus-input-cursor-color`: `#333333`
    - `--ds-color-input-filled-focus-input-text-color`: `#333333`
    - `--ds-color-input-filled-focus-input-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-input-filled-focus-label-text-color`: `#448aff`
    - `--ds-color-input-filled-focus-support-text-color`: `#616161`
    - `--ds-color-input-filled-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-filled-hover-icon-color-default`: `#616161`
    - `--ds-color-input-filled-hover-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-hover-input-background-hover`: `#f5f5f5`
    - `--ds-color-input-filled-hover-input-text-color`: `#333333`
    - `--ds-color-input-filled-hover-label-text-color`: `#616161`
    - `--ds-color-input-filled-hover-text-support-color`: `#616161`
    - `--ds-color-input-outlined-default-background`: `#ffffff`
    - `--ds-color-input-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-default-icon-color`: `#616161`
    - `--ds-color-input-outlined-default-text-color`: `#333333`
    - `--ds-color-input-outlined-error-background`: `#ebebeb`
    - `--ds-color-input-outlined-error-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-error-icon-color`: `#616161`
    - `--ds-color-input-outlined-error-text-color`: `#333333`
    - `--ds-color-input-outlined-focus-background`: `#ebebeb`
    - `--ds-color-input-outlined-focus-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-focus-icon-color`: `#616161`
    - `--ds-color-input-outlined-focus-text-color`: `#333333`
    - `--ds-color-input-outlined-hover-background`: `#fafafa`
    - `--ds-color-input-outlined-hover-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-hover-icon-color`: `#616161`
    - `--ds-color-input-outlined-hover-text-color`: `#333333`

#### Input Timepicker `[58982:9561]` — 2 вариантов
- **Type** (VARIANT): Empty, Populated
- Токены компонента (80):
    - `--ds-color-input-background-support`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-input-input-filled-background`: `#f8f9fc`
    - `--ds-color-input-input-label-text-color`: `#616161`
    - `--ds-color-input-input-outlined-background`: `#ffffff`
    - `--ds-color-input-number-control-background`: `#ffffff`
    - `--ds-color-input-number-control-icon-color`: `#616161`
    - `--ds-color-input-number-control-text-color`: `#333333`
    - `--ds-color-input-number-control-default-border-color`: `#e0e0e0`
    - `--ds-color-input-number-control-disable-border-color`: `#ebebeb`
    - `--ds-color-input-number-control-disable-icon-color`: `#9e9e9e`
    - `--ds-color-input-number-control-disable-text-color`: `#9e9e9e`
    - `--ds-color-input-number-control-error-border-color`: `#ff5252`
    - `--ds-color-input-number-control-error-icon-color`: `#ff5252`
    - `--ds-color-input-number-control-focus-border-color`: `#448aff`
    - `--ds-color-input-number-control-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-number-input-background`: `#ffffff`
    - `--ds-color-input-number-input-icon-color`: `#616161`
    - `--ds-color-input-number-input-text-color`: `#333333`
    - `--ds-color-input-number-input-default-border-color`: `#e0e0e0`
    - `--ds-color-input-number-input-disable-border-color`: `#ebebeb`
    - `--ds-color-input-number-input-disable-icon-color`: `#9e9e9e`
    - `--ds-color-input-number-input-disable-text-color`: `#9e9e9e`
    - `--ds-color-input-number-input-error-border-color`: `#ff5252`
    - `--ds-color-input-number-input-error-icon-color`: `#ff5252`
    - `--ds-color-input-number-input-focus-border-color`: `#448aff`
    - `--ds-color-input-number-input-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-filled-default-border-color`: `#e0e0e0`
    - `--ds-color-input-filled-default-icon-color-default`: `#616161`
    - `--ds-color-input-filled-default-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-default-input-text-color`: `#333333`
    - `--ds-color-input-filled-default-label-text-color`: `#616161`
    - `--ds-color-input-filled-default-support-text-color`: `#616161`
    - `--ds-color-input-filled-disable-border-color`: `#ebebeb`
    - `--ds-color-input-filled-disable-icon-color-disable`: `#9e9e9e`
    - `--ds-color-input-filled-disable-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-disable-input-background`: `#f5f5f5`
    - `--ds-color-input-filled-disable-input-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-disable-label-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-disable-support-text-color`: `#9e9e9e`
    - `--ds-color-input-filled-error-border-color`: `#ff5252`
    - `--ds-color-input-filled-error-icon-color-default`: `#616161`
    - `--ds-color-input-filled-error-icon-color-error`: `#ff5252`
    - `--ds-color-input-filled-error-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-error-input-background-hover`: `#f5f5f5`
    - `--ds-color-input-filled-error-input-cursor-color`: `#333333`
    - `--ds-color-input-filled-error-input-text-color`: `#333333`
    - `--ds-color-input-filled-error-input-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-input-filled-error-label-text-color`: `#ff5252`
    - `--ds-color-input-filled-error-text-support-color`: `#ff5252`
    - `--ds-color-input-filled-focus-border-color`: `#448aff`
    - `--ds-color-input-filled-focus-icon-color-default`: `#616161`
    - `--ds-color-input-filled-focus-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-focus-input-cursor-color`: `#333333`
    - `--ds-color-input-filled-focus-input-text-color`: `#333333`
    - `--ds-color-input-filled-focus-input-text-placeholder-color`: `#d6d6d6`
    - `--ds-color-input-filled-focus-label-text-color`: `#448aff`
    - `--ds-color-input-filled-focus-support-text-color`: `#616161`
    - `--ds-color-input-filled-hover-border-color`: `#9e9e9e`
    - `--ds-color-input-filled-hover-icon-color-default`: `#616161`
    - `--ds-color-input-filled-hover-icon-color-warning`: `#ea7806`
    - `--ds-color-input-filled-hover-input-background-hover`: `#f5f5f5`
    - `--ds-color-input-filled-hover-input-text-color`: `#333333`
    - `--ds-color-input-filled-hover-label-text-color`: `#616161`
    - `--ds-color-input-filled-hover-text-support-color`: `#616161`
    - `--ds-color-input-outlined-default-background`: `#ffffff`
    - `--ds-color-input-outlined-default-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-default-icon-color`: `#616161`
    - `--ds-color-input-outlined-default-text-color`: `#333333`
    - `--ds-color-input-outlined-error-background`: `#ebebeb`
    - `--ds-color-input-outlined-error-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-error-icon-color`: `#616161`
    - `--ds-color-input-outlined-error-text-color`: `#333333`
    - `--ds-color-input-outlined-focus-background`: `#ebebeb`
    - `--ds-color-input-outlined-focus-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-focus-icon-color`: `#616161`
    - `--ds-color-input-outlined-focus-text-color`: `#333333`
    - `--ds-color-input-outlined-hover-background`: `#fafafa`
    - `--ds-color-input-outlined-hover-border-color`: `#e0e0e0`
    - `--ds-color-input-outlined-hover-icon-color`: `#616161`
    - `--ds-color-input-outlined-hover-text-color`: `#333333`

#### List (Сontainer) `[57604:4762]` — 1 вариантов
- **Type** (VARIANT): Сontainer
- Прочие свойства: List container#57620:0 (SLOT), Scroll#57620:2 (BOOLEAN), Title#57623:6 (BOOLEAN), Divider header#57862:0 (BOOLEAN)
- Токены компонента (20):
    - `--ds-color-list-background`: `#ffffff`
    - `--ds-color-list-item-icon-color`: `#616161`
    - `--ds-color-list-item-text-color`: `#333333`
    - `--ds-color-list-item-text-label-color`: `#616161`
    - `--ds-color-list-item-default-background`: `#ffffff`
    - `--ds-color-list-item-disable-background`: `#ffffff`
    - `--ds-color-list-item-disable-icon-color`: `#9e9e9e`
    - `--ds-color-list-item-disable-label-text-color`: `#9e9e9e`
    - `--ds-color-list-item-disable-text-color`: `#9e9e9e`
    - `--ds-color-list-item-hover-background`: `#f5f5f5`
    - `--ds-color-list-item-link-background`: `#ffffff`
    - `--ds-color-list-item-link-text-color`: `#448aff`
    - `--ds-color-list-item-negative-background`: `#ffffff`
    - `--ds-color-list-item-negative-icon-color`: `#ff5252`
    - `--ds-color-list-item-negative-label-text-color`: `#ff5252`
    - `--ds-color-list-item-negative-text-color`: `#ff5252`
    - `--ds-color-list-item-press-background`: `#e0e0e0`
    - `--ds-color-list-item-selected-back-selected`: `#f5f9ff`
    - `--ds-color-list-item-selected-background`: `#ffffff`
    - `--ds-color-list-item-selected-icon-color`: `#448aff`

#### List item `[54101:7922]` — 8 вариантов
- **State** (VARIANT): Back selected, Default, Disable, Hover, Link, Negative, Press, Selected
- Прочие свойства: Element left#54167:1 (BOOLEAN), Element right#54167:6 (BOOLEAN), Label up#54741:15 (BOOLEAN), Label down#54741:30 (BOOLEAN)
- Токены компонента (20):
    - `--ds-color-list-background`: `#ffffff`
    - `--ds-color-list-item-icon-color`: `#616161`
    - `--ds-color-list-item-text-color`: `#333333`
    - `--ds-color-list-item-text-label-color`: `#616161`
    - `--ds-color-list-item-default-background`: `#ffffff`
    - `--ds-color-list-item-disable-background`: `#ffffff`
    - `--ds-color-list-item-disable-icon-color`: `#9e9e9e`
    - `--ds-color-list-item-disable-label-text-color`: `#9e9e9e`
    - `--ds-color-list-item-disable-text-color`: `#9e9e9e`
    - `--ds-color-list-item-hover-background`: `#f5f5f5`
    - `--ds-color-list-item-link-background`: `#ffffff`
    - `--ds-color-list-item-link-text-color`: `#448aff`
    - `--ds-color-list-item-negative-background`: `#ffffff`
    - `--ds-color-list-item-negative-icon-color`: `#ff5252`
    - `--ds-color-list-item-negative-label-text-color`: `#ff5252`
    - `--ds-color-list-item-negative-text-color`: `#ff5252`
    - `--ds-color-list-item-press-background`: `#e0e0e0`
    - `--ds-color-list-item-selected-back-selected`: `#f5f9ff`
    - `--ds-color-list-item-selected-background`: `#ffffff`
    - `--ds-color-list-item-selected-icon-color`: `#448aff`

#### Logo iiko `[55332:19892]` — 4 вариантов
- **Size** (VARIANT): Full, Small
- **Style** (VARIANT): Inverse, Main

#### Logo Syrve `[56079:771]` — 4 вариантов
- **Size** (VARIANT): Full, Small
- **Style** (VARIANT): Inverse, Main

#### Menu (Container) `[54163:6705]` — 1 вариантов
- **Type** (VARIANT): Container
- Прочие свойства: Scroll#55632:0 (BOOLEAN), Menu container#56968:88 (SLOT), Title#57636:8 (BOOLEAN), Search#57750:7 (BOOLEAN), Button#57848:0 (BOOLEAN), Divider header#57848:2 (BOOLEAN), Divider footer#57848:4 (BOOLEAN)
- Токены компонента (18):
    - `--ds-color-menu-background`: `#ffffff`
    - `--ds-color-menu-item-icon-color`: `#616161`
    - `--ds-color-menu-item-text-color`: `#333333`
    - `--ds-color-menu-item-text-label-color`: `#616161`
    - `--ds-color-menu-item-default-background`: `#ffffff`
    - `--ds-color-menu-item-disable-background`: `#ffffff`
    - `--ds-color-menu-item-disable-icon-color`: `#9e9e9e`
    - `--ds-color-menu-item-disable-label-text-color`: `#9e9e9e`
    - `--ds-color-menu-item-disable-text-color`: `#9e9e9e`
    - `--ds-color-menu-item-hover-background`: `#f5f5f5`
    - `--ds-color-menu-item-negative-background`: `#ffffff`
    - `--ds-color-menu-item-negative-icon-color`: `#ff5252`
    - `--ds-color-menu-item-negative-label-text-color`: `#ff5252`
    - `--ds-color-menu-item-negative-text-color`: `#ff5252`
    - `--ds-color-menu-item-press-background`: `#e0e0e0`
    - `--ds-color-menu-item-selected-back-selected`: `#f5f9ff`
    - `--ds-color-menu-item-selected-background`: `#ffffff`
    - `--ds-color-menu-item-selected-icon-color`: `#448aff`

#### Menu item `[56090:1476]` — 7 вариантов
- **State** (VARIANT): Back selected, Default, Disable, Hover, Negative, Press, Selected
- Прочие свойства: Element left#54167:1 (BOOLEAN), Element right#54167:6 (BOOLEAN), Label up#54741:15 (BOOLEAN), Label down#54741:30 (BOOLEAN)
- Токены компонента (18):
    - `--ds-color-menu-background`: `#ffffff`
    - `--ds-color-menu-item-icon-color`: `#616161`
    - `--ds-color-menu-item-text-color`: `#333333`
    - `--ds-color-menu-item-text-label-color`: `#616161`
    - `--ds-color-menu-item-default-background`: `#ffffff`
    - `--ds-color-menu-item-disable-background`: `#ffffff`
    - `--ds-color-menu-item-disable-icon-color`: `#9e9e9e`
    - `--ds-color-menu-item-disable-label-text-color`: `#9e9e9e`
    - `--ds-color-menu-item-disable-text-color`: `#9e9e9e`
    - `--ds-color-menu-item-hover-background`: `#f5f5f5`
    - `--ds-color-menu-item-negative-background`: `#ffffff`
    - `--ds-color-menu-item-negative-icon-color`: `#ff5252`
    - `--ds-color-menu-item-negative-label-text-color`: `#ff5252`
    - `--ds-color-menu-item-negative-text-color`: `#ff5252`
    - `--ds-color-menu-item-press-background`: `#e0e0e0`
    - `--ds-color-menu-item-selected-back-selected`: `#f5f9ff`
    - `--ds-color-menu-item-selected-background`: `#ffffff`
    - `--ds-color-menu-item-selected-icon-color`: `#448aff`

#### Navigation Bar `[56564:1057]` — 2 вариантов
- **Dark** (VARIANT): Off, On

#### Picture `[58937:3985]` — 1 вариантов
- Прочие свойства: Crop#58947:6 (BOOLEAN)

#### Preview `[54063:12946]` — 3 вариантов
- **Property 1** (VARIANT): Default, Variant2, Variant3

#### Radio button `[54095:4263]` — 14 вариантов
- **Variant** (VARIANT): Disable, Error, Normal
- **Type** (VARIANT): Deselected, Selected
- **State** (VARIANT): Default, Hover, Press
- Токены компонента (26):
    - `--ds-color-radio-button-group-text-color`: `#333333`
    - `--ds-color-radio-button-group-text-disable-color`: `#9e9e9e`
    - `--ds-color-radio-button-group-text-support-color`: `#616161`
    - `--ds-color-radio-button-group-text-support-error-color`: `#ff5252`
    - `--ds-color-radio-button-label-text-color`: `#333333`
    - `--ds-color-radio-button-label-text-disable-color`: `#9e9e9e`
    - `--ds-color-radio-button-label-text-error-color`: `#ff5252`
    - `--ds-color-radio-button-label-text-support-color`: `#616161`
    - `--ds-color-radio-button-disable-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-radio-button-disable-deselected-icon-color`: `#9e9e9e`
    - `--ds-color-radio-button-disable-selected-icon-color`: `#9e9e9e`
    - `--ds-color-radio-button-error-icon-color`: `#ff5252`
    - `--ds-color-radio-button-error-deselected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-radio-button-error-deselected-hover-background`: `#ffe5e5`
    - `--ds-color-radio-button-error-deselected-press-background`: `#ffcccc`
    - `--ds-color-radio-button-error-selected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-radio-button-error-selected-hover-background`: `#ffe5e5`
    - `--ds-color-radio-button-error-selected-press-background`: `#ffcccc`
    - `--ds-color-radio-button-normal-deselected-icon-color`: `#616161`
    - `--ds-color-radio-button-normal-deselected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-radio-button-normal-deselected-hover-background`: `#ebebeb`
    - `--ds-color-radio-button-normal-deselected-press-background`: `#e0e0e0`
    - `--ds-color-radio-button-normal-selected-icon-color`: `#448aff`
    - `--ds-color-radio-button-normal-selected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-radio-button-normal-selected-hover-background`: `#e8f0ff`
    - `--ds-color-radio-button-normal-selected-press-background`: `#ccdfff`

#### Radio button group `[54095:4392]` — 2 вариантов
- **Orientation** (VARIANT): Horizontal, Vertical
- Прочие свойства: Slot vertical#57257:12 (SLOT), Slot horizontal#57257:15 (SLOT), Support up#58199:15 (BOOLEAN), Support down#58199:18 (BOOLEAN)
- Токены компонента (26):
    - `--ds-color-radio-button-group-text-color`: `#333333`
    - `--ds-color-radio-button-group-text-disable-color`: `#9e9e9e`
    - `--ds-color-radio-button-group-text-support-color`: `#616161`
    - `--ds-color-radio-button-group-text-support-error-color`: `#ff5252`
    - `--ds-color-radio-button-label-text-color`: `#333333`
    - `--ds-color-radio-button-label-text-disable-color`: `#9e9e9e`
    - `--ds-color-radio-button-label-text-error-color`: `#ff5252`
    - `--ds-color-radio-button-label-text-support-color`: `#616161`
    - `--ds-color-radio-button-disable-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-radio-button-disable-deselected-icon-color`: `#9e9e9e`
    - `--ds-color-radio-button-disable-selected-icon-color`: `#9e9e9e`
    - `--ds-color-radio-button-error-icon-color`: `#ff5252`
    - `--ds-color-radio-button-error-deselected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-radio-button-error-deselected-hover-background`: `#ffe5e5`
    - `--ds-color-radio-button-error-deselected-press-background`: `#ffcccc`
    - `--ds-color-radio-button-error-selected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-radio-button-error-selected-hover-background`: `#ffe5e5`
    - `--ds-color-radio-button-error-selected-press-background`: `#ffcccc`
    - `--ds-color-radio-button-normal-deselected-icon-color`: `#616161`
    - `--ds-color-radio-button-normal-deselected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-radio-button-normal-deselected-hover-background`: `#ebebeb`
    - `--ds-color-radio-button-normal-deselected-press-background`: `#e0e0e0`
    - `--ds-color-radio-button-normal-selected-icon-color`: `#448aff`
    - `--ds-color-radio-button-normal-selected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-radio-button-normal-selected-hover-background`: `#e8f0ff`
    - `--ds-color-radio-button-normal-selected-press-background`: `#ccdfff`

#### Radio button label `[54095:4306]` — 6 вариантов
- **Variant** (VARIANT): Disable, Error, Normal
- **Type** (VARIANT): Deselected, Selected
- Прочие свойства: Icon left#17172:1340 (BOOLEAN), Icon right#17172:1349 (BOOLEAN), Label#54065:0 (BOOLEAN), Support#58197:0 (BOOLEAN)
- Токены компонента (26):
    - `--ds-color-radio-button-group-text-color`: `#333333`
    - `--ds-color-radio-button-group-text-disable-color`: `#9e9e9e`
    - `--ds-color-radio-button-group-text-support-color`: `#616161`
    - `--ds-color-radio-button-group-text-support-error-color`: `#ff5252`
    - `--ds-color-radio-button-label-text-color`: `#333333`
    - `--ds-color-radio-button-label-text-disable-color`: `#9e9e9e`
    - `--ds-color-radio-button-label-text-error-color`: `#ff5252`
    - `--ds-color-radio-button-label-text-support-color`: `#616161`
    - `--ds-color-radio-button-disable-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-radio-button-disable-deselected-icon-color`: `#9e9e9e`
    - `--ds-color-radio-button-disable-selected-icon-color`: `#9e9e9e`
    - `--ds-color-radio-button-error-icon-color`: `#ff5252`
    - `--ds-color-radio-button-error-deselected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-radio-button-error-deselected-hover-background`: `#ffe5e5`
    - `--ds-color-radio-button-error-deselected-press-background`: `#ffcccc`
    - `--ds-color-radio-button-error-selected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-radio-button-error-selected-hover-background`: `#ffe5e5`
    - `--ds-color-radio-button-error-selected-press-background`: `#ffcccc`
    - `--ds-color-radio-button-normal-deselected-icon-color`: `#616161`
    - `--ds-color-radio-button-normal-deselected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-radio-button-normal-deselected-hover-background`: `#ebebeb`
    - `--ds-color-radio-button-normal-deselected-press-background`: `#e0e0e0`
    - `--ds-color-radio-button-normal-selected-icon-color`: `#448aff`
    - `--ds-color-radio-button-normal-selected-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-radio-button-normal-selected-hover-background`: `#e8f0ff`
    - `--ds-color-radio-button-normal-selected-press-background`: `#ccdfff`

#### Scroll `[53615:15339]` — 12 вариантов
- **Size** (VARIANT): M, S
- **Position** (VARIANT): First, Last, Middle
- **State** (VARIANT): Default, Hover
- Токены компонента (5):
    - `--ds-color-scroll-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-scroll-default-background`: `#fafafa`
    - `--ds-color-scroll-default-knob-color`: `#d6d6d6`
    - `--ds-color-scroll-hover-background`: `#ebebeb`
    - `--ds-color-scroll-hover-knob-color`: `#9e9e9e`

#### Scroll tabs `[59032:1821]` — 4 вариантов
- **Orientation** (VARIANT): Left, Right
- **State** (VARIANT): Default, Hover
- Токены компонента (5):
    - `--ds-color-scroll-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-scroll-default-background`: `#fafafa`
    - `--ds-color-scroll-default-knob-color`: `#d6d6d6`
    - `--ds-color-scroll-hover-background`: `#ebebeb`
    - `--ds-color-scroll-hover-knob-color`: `#9e9e9e`

#### Search `[54453:1620]` — 15 вариантов
- **Size** (VARIANT): M, S, XS
- **State** (VARIANT): Completed, Default, Disable, Focus, Focus+Value, Hover
- Прочие свойства: Left icon#54453:0 (BOOLEAN), Right icon#54459:3 (BOOLEAN)
- Токены компонента (17):
    - `--ds-color-search-background`: `#f8f9fc`
    - `--ds-color-search-completed-border-color`: `#e0e0e0`
    - `--ds-color-search-completed-text-color`: `#333333`
    - `--ds-color-search-default-background-xs`: `#f0f5ff`
    - `--ds-color-search-default-border-color`: `#e0e0e0`
    - `--ds-color-search-default-text-color`: `#d6d6d6`
    - `--ds-color-search-disable-background`: `#ebebeb`
    - `--ds-color-search-disable-icon-color`: `#9e9e9e`
    - `--ds-color-search-disable-text-color`: `#9e9e9e`
    - `--ds-color-search-focus-border-color`: `#448aff`
    - `--ds-color-search-focus-cursor-color`: `#333333`
    - `--ds-color-search-focus-text-color`: `#d6d6d6`
    - `--ds-color-search-focus-value-border-color`: `#448aff`
    - `--ds-color-search-focus-value-text-color`: `#333333`
    - `--ds-color-search-hover-background-xs`: `#e8f0ff`
    - `--ds-color-search-hover-border-color`: `#9e9e9e`
    - `--ds-color-search-hover-text-color`: `#d6d6d6`

#### Select (Сontainer) `[57735:17612]` — 1 вариантов
- **Type** (VARIANT): Сontainer
- Прочие свойства: Scroll#55632:0 (BOOLEAN), Item container#56968:88 (SLOT), Title#57636:8 (BOOLEAN), Search#57740:3 (BOOLEAN), Button#57740:5 (BOOLEAN), Divider header#57862:2 (BOOLEAN), Divider footer#57862:4 (BOOLEAN)

#### Select cell `[60231:74976]` — 7 вариантов
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Value, Hover

#### Select form `[57862:17226]` — 22 вариантов
- **Size** (VARIANT): M, S, XS
- **Variant** (VARIANT): Empty, Populated
- **State** (VARIANT): Default, Disable, Error, Focus, Focus+Value, Hover

#### Select item `[57735:17872]` — 8 вариантов
- **State** (VARIANT): Back selected, Default, Disable, Error, Hover, Press, Selected
- **Subtitle** (VARIANT): False, True
- Прочие свойства: Element left#54167:1 (BOOLEAN), Element right#54167:6 (BOOLEAN), Label up#54741:15 (BOOLEAN), Label down#54741:30 (BOOLEAN), Left#60868:0 (BOOLEAN), Right#60868:1 (BOOLEAN)

#### Sidenav control `[55142:1734]` — 6 вариантов
- **Mode** (VARIANT): Collapsed, Expanded
- **State** (VARIANT): Default, Hover, Press
- Прочие свойства: Divider#55147:0 (BOOLEAN)
- Токены компонента (36):
    - `--ds-color-sidenav-control-background`: `#263136`
    - `--ds-color-sidenav-control-background-hover`: `#36474e`
    - `--ds-color-sidenav-control-background-press`: `#36474e`
    - `--ds-color-sidenav-control-divider`: `#36474e`
    - `--ds-color-sidenav-control-text-color`: `#ffffff`
    - `--ds-color-sidenav-element-collaps-icon-background`: `#36474e`
    - `--ds-color-sidenav-footer-l2-background`: `#ffffff`
    - `--ds-color-sidenav-footer-l2-logo`: `#ff5252`
    - `--ds-color-sidenav-footer-l2-text-color`: `#616161`
    - `--ds-color-sidenav-header-l1-background`: `#263136`
    - `--ds-color-sidenav-header-l1-collapsed-logo`: `#ffffff`
    - `--ds-color-sidenav-header-l1-collapsed-logo-element`: `#ff5252`
    - `--ds-color-sidenav-header-l1-expanded-logo`: `#ffffff`
    - `--ds-color-sidenav-header-l2-background`: `#ffffff`
    - `--ds-color-sidenav-header-l2-text-color`: `#333333`
    - `--ds-color-sidenav-item-l1-background`: `#263136`
    - `--ds-color-sidenav-item-l1-background-hover`: `#36474e`
    - `--ds-color-sidenav-item-l1-background-selected`: `#4b626d`
    - `--ds-color-sidenav-item-l1-element-left`: `#ffffff`
    - `--ds-color-sidenav-item-l1-element-right`: `#ffffff`
    - `--ds-color-sidenav-item-l1-indicator`: `#ffffff`
    - `--ds-color-sidenav-item-l1-text-color`: `#ffffff`
    - `--ds-color-sidenav-item-l2-background`: `#ffffff`
    - `--ds-color-sidenav-item-l2-background-hover`: `#f8f9fc`
    - `--ds-color-sidenav-item-l2-background-selected`: `#f0f5ff`
    - `--ds-color-sidenav-item-l2-text-color`: `#333333`
    - `--ds-color-sidenav-item-l3-background`: `#ffffff`
    - `--ds-color-sidenav-item-l3-background-active`: `#f0f5ff`
    - `--ds-color-sidenav-item-l3-background-hover`: `#f8f9fc`
    - `--ds-color-sidenav-item-l3-background-selected`: `#f0f5ff`
    - `--ds-color-sidenav-item-l3-indicator`: `#448aff`
    - `--ds-color-sidenav-item-l3-text-color`: `#333333`
    - `--ds-color-sidenav-item-l3-text-color-selected`: `#448aff`
    - `--ds-color-sidenav-sidebar-info-background-container`: `#f8f9fc`
    - `--ds-color-sidenav-sidebar-l1-background`: `#263136`
    - `--ds-color-sidenav-sidebar-l2-background`: `#ffffff`

#### Sidenav Footer `[55111:1056]` — 3 вариантов
- **Type** (VARIANT): L1, L2
- **Mode** (VARIANT): Collapsed, Expanded
- Прочие свойства: Divider#55147:10 (BOOLEAN), Container#59128:17 (SLOT), Container#59128:25 (SLOT)
- Токены компонента (36):
    - `--ds-color-sidenav-control-background`: `#263136`
    - `--ds-color-sidenav-control-background-hover`: `#36474e`
    - `--ds-color-sidenav-control-background-press`: `#36474e`
    - `--ds-color-sidenav-control-divider`: `#36474e`
    - `--ds-color-sidenav-control-text-color`: `#ffffff`
    - `--ds-color-sidenav-element-collaps-icon-background`: `#36474e`
    - `--ds-color-sidenav-footer-l2-background`: `#ffffff`
    - `--ds-color-sidenav-footer-l2-logo`: `#ff5252`
    - `--ds-color-sidenav-footer-l2-text-color`: `#616161`
    - `--ds-color-sidenav-header-l1-background`: `#263136`
    - `--ds-color-sidenav-header-l1-collapsed-logo`: `#ffffff`
    - `--ds-color-sidenav-header-l1-collapsed-logo-element`: `#ff5252`
    - `--ds-color-sidenav-header-l1-expanded-logo`: `#ffffff`
    - `--ds-color-sidenav-header-l2-background`: `#ffffff`
    - `--ds-color-sidenav-header-l2-text-color`: `#333333`
    - `--ds-color-sidenav-item-l1-background`: `#263136`
    - `--ds-color-sidenav-item-l1-background-hover`: `#36474e`
    - `--ds-color-sidenav-item-l1-background-selected`: `#4b626d`
    - `--ds-color-sidenav-item-l1-element-left`: `#ffffff`
    - `--ds-color-sidenav-item-l1-element-right`: `#ffffff`
    - `--ds-color-sidenav-item-l1-indicator`: `#ffffff`
    - `--ds-color-sidenav-item-l1-text-color`: `#ffffff`
    - `--ds-color-sidenav-item-l2-background`: `#ffffff`
    - `--ds-color-sidenav-item-l2-background-hover`: `#f8f9fc`
    - `--ds-color-sidenav-item-l2-background-selected`: `#f0f5ff`
    - `--ds-color-sidenav-item-l2-text-color`: `#333333`
    - `--ds-color-sidenav-item-l3-background`: `#ffffff`
    - `--ds-color-sidenav-item-l3-background-active`: `#f0f5ff`
    - `--ds-color-sidenav-item-l3-background-hover`: `#f8f9fc`
    - `--ds-color-sidenav-item-l3-background-selected`: `#f0f5ff`
    - `--ds-color-sidenav-item-l3-indicator`: `#448aff`
    - `--ds-color-sidenav-item-l3-text-color`: `#333333`
    - `--ds-color-sidenav-item-l3-text-color-selected`: `#448aff`
    - `--ds-color-sidenav-sidebar-info-background-container`: `#f8f9fc`
    - `--ds-color-sidenav-sidebar-l1-background`: `#263136`
    - `--ds-color-sidenav-sidebar-l2-background`: `#ffffff`

#### Sidenav header `[55045:637]` — 3 вариантов
- **Type** (VARIANT): L1, L2
- **Mode** (VARIANT): Collapsed, Expanded
- Прочие свойства: Element right#55074:0 (BOOLEAN), Element left#55661:0 (BOOLEAN), Divider#59107:0 (BOOLEAN), Informer#59128:5 (BOOLEAN)
- Токены компонента (36):
    - `--ds-color-sidenav-control-background`: `#263136`
    - `--ds-color-sidenav-control-background-hover`: `#36474e`
    - `--ds-color-sidenav-control-background-press`: `#36474e`
    - `--ds-color-sidenav-control-divider`: `#36474e`
    - `--ds-color-sidenav-control-text-color`: `#ffffff`
    - `--ds-color-sidenav-element-collaps-icon-background`: `#36474e`
    - `--ds-color-sidenav-footer-l2-background`: `#ffffff`
    - `--ds-color-sidenav-footer-l2-logo`: `#ff5252`
    - `--ds-color-sidenav-footer-l2-text-color`: `#616161`
    - `--ds-color-sidenav-header-l1-background`: `#263136`
    - `--ds-color-sidenav-header-l1-collapsed-logo`: `#ffffff`
    - `--ds-color-sidenav-header-l1-collapsed-logo-element`: `#ff5252`
    - `--ds-color-sidenav-header-l1-expanded-logo`: `#ffffff`
    - `--ds-color-sidenav-header-l2-background`: `#ffffff`
    - `--ds-color-sidenav-header-l2-text-color`: `#333333`
    - `--ds-color-sidenav-item-l1-background`: `#263136`
    - `--ds-color-sidenav-item-l1-background-hover`: `#36474e`
    - `--ds-color-sidenav-item-l1-background-selected`: `#4b626d`
    - `--ds-color-sidenav-item-l1-element-left`: `#ffffff`
    - `--ds-color-sidenav-item-l1-element-right`: `#ffffff`
    - `--ds-color-sidenav-item-l1-indicator`: `#ffffff`
    - `--ds-color-sidenav-item-l1-text-color`: `#ffffff`
    - `--ds-color-sidenav-item-l2-background`: `#ffffff`
    - `--ds-color-sidenav-item-l2-background-hover`: `#f8f9fc`
    - `--ds-color-sidenav-item-l2-background-selected`: `#f0f5ff`
    - `--ds-color-sidenav-item-l2-text-color`: `#333333`
    - `--ds-color-sidenav-item-l3-background`: `#ffffff`
    - `--ds-color-sidenav-item-l3-background-active`: `#f0f5ff`
    - `--ds-color-sidenav-item-l3-background-hover`: `#f8f9fc`
    - `--ds-color-sidenav-item-l3-background-selected`: `#f0f5ff`
    - `--ds-color-sidenav-item-l3-indicator`: `#448aff`
    - `--ds-color-sidenav-item-l3-text-color`: `#333333`
    - `--ds-color-sidenav-item-l3-text-color-selected`: `#448aff`
    - `--ds-color-sidenav-sidebar-info-background-container`: `#f8f9fc`
    - `--ds-color-sidenav-sidebar-l1-background`: `#263136`
    - `--ds-color-sidenav-sidebar-l2-background`: `#ffffff`

#### Sidenav item `[55070:3734]` — 13 вариантов
- **Type** (VARIANT): L1, L2, L3
- **Mode** (VARIANT): Collapsed, Expanded
- **State** (VARIANT): Active, Default, Hover, Selected
- Прочие свойства: Element right#55070:0 (BOOLEAN), Badge#55083:0 (BOOLEAN), Divider#55219:13 (BOOLEAN), Indicator#59087:0 (BOOLEAN)
- Токены компонента (36):
    - `--ds-color-sidenav-control-background`: `#263136`
    - `--ds-color-sidenav-control-background-hover`: `#36474e`
    - `--ds-color-sidenav-control-background-press`: `#36474e`
    - `--ds-color-sidenav-control-divider`: `#36474e`
    - `--ds-color-sidenav-control-text-color`: `#ffffff`
    - `--ds-color-sidenav-element-collaps-icon-background`: `#36474e`
    - `--ds-color-sidenav-footer-l2-background`: `#ffffff`
    - `--ds-color-sidenav-footer-l2-logo`: `#ff5252`
    - `--ds-color-sidenav-footer-l2-text-color`: `#616161`
    - `--ds-color-sidenav-header-l1-background`: `#263136`
    - `--ds-color-sidenav-header-l1-collapsed-logo`: `#ffffff`
    - `--ds-color-sidenav-header-l1-collapsed-logo-element`: `#ff5252`
    - `--ds-color-sidenav-header-l1-expanded-logo`: `#ffffff`
    - `--ds-color-sidenav-header-l2-background`: `#ffffff`
    - `--ds-color-sidenav-header-l2-text-color`: `#333333`
    - `--ds-color-sidenav-item-l1-background`: `#263136`
    - `--ds-color-sidenav-item-l1-background-hover`: `#36474e`
    - `--ds-color-sidenav-item-l1-background-selected`: `#4b626d`
    - `--ds-color-sidenav-item-l1-element-left`: `#ffffff`
    - `--ds-color-sidenav-item-l1-element-right`: `#ffffff`
    - `--ds-color-sidenav-item-l1-indicator`: `#ffffff`
    - `--ds-color-sidenav-item-l1-text-color`: `#ffffff`
    - `--ds-color-sidenav-item-l2-background`: `#ffffff`
    - `--ds-color-sidenav-item-l2-background-hover`: `#f8f9fc`
    - `--ds-color-sidenav-item-l2-background-selected`: `#f0f5ff`
    - `--ds-color-sidenav-item-l2-text-color`: `#333333`
    - `--ds-color-sidenav-item-l3-background`: `#ffffff`
    - `--ds-color-sidenav-item-l3-background-active`: `#f0f5ff`
    - `--ds-color-sidenav-item-l3-background-hover`: `#f8f9fc`
    - `--ds-color-sidenav-item-l3-background-selected`: `#f0f5ff`
    - `--ds-color-sidenav-item-l3-indicator`: `#448aff`
    - `--ds-color-sidenav-item-l3-text-color`: `#333333`
    - `--ds-color-sidenav-item-l3-text-color-selected`: `#448aff`
    - `--ds-color-sidenav-sidebar-info-background-container`: `#f8f9fc`
    - `--ds-color-sidenav-sidebar-l1-background`: `#263136`
    - `--ds-color-sidenav-sidebar-l2-background`: `#ffffff`

#### Sidenav View `[55074:393]` — 3 вариантов
- **Type** (VARIANT): L1, L2
- **State** (VARIANT): Collapsed, Expanded
- Прочие свойства: Scroll#55227:26 (BOOLEAN), Container#59137:0 (SLOT), Container#59137:4 (SLOT), Container#59137:8 (SLOT), Container#59137:12 (SLOT), Info#59160:3 (BOOLEAN), More Pannel#59214:0 (BOOLEAN)
- Токены компонента (36):
    - `--ds-color-sidenav-control-background`: `#263136`
    - `--ds-color-sidenav-control-background-hover`: `#36474e`
    - `--ds-color-sidenav-control-background-press`: `#36474e`
    - `--ds-color-sidenav-control-divider`: `#36474e`
    - `--ds-color-sidenav-control-text-color`: `#ffffff`
    - `--ds-color-sidenav-element-collaps-icon-background`: `#36474e`
    - `--ds-color-sidenav-footer-l2-background`: `#ffffff`
    - `--ds-color-sidenav-footer-l2-logo`: `#ff5252`
    - `--ds-color-sidenav-footer-l2-text-color`: `#616161`
    - `--ds-color-sidenav-header-l1-background`: `#263136`
    - `--ds-color-sidenav-header-l1-collapsed-logo`: `#ffffff`
    - `--ds-color-sidenav-header-l1-collapsed-logo-element`: `#ff5252`
    - `--ds-color-sidenav-header-l1-expanded-logo`: `#ffffff`
    - `--ds-color-sidenav-header-l2-background`: `#ffffff`
    - `--ds-color-sidenav-header-l2-text-color`: `#333333`
    - `--ds-color-sidenav-item-l1-background`: `#263136`
    - `--ds-color-sidenav-item-l1-background-hover`: `#36474e`
    - `--ds-color-sidenav-item-l1-background-selected`: `#4b626d`
    - `--ds-color-sidenav-item-l1-element-left`: `#ffffff`
    - `--ds-color-sidenav-item-l1-element-right`: `#ffffff`
    - `--ds-color-sidenav-item-l1-indicator`: `#ffffff`
    - `--ds-color-sidenav-item-l1-text-color`: `#ffffff`
    - `--ds-color-sidenav-item-l2-background`: `#ffffff`
    - `--ds-color-sidenav-item-l2-background-hover`: `#f8f9fc`
    - `--ds-color-sidenav-item-l2-background-selected`: `#f0f5ff`
    - `--ds-color-sidenav-item-l2-text-color`: `#333333`
    - `--ds-color-sidenav-item-l3-background`: `#ffffff`
    - `--ds-color-sidenav-item-l3-background-active`: `#f0f5ff`
    - `--ds-color-sidenav-item-l3-background-hover`: `#f8f9fc`
    - `--ds-color-sidenav-item-l3-background-selected`: `#f0f5ff`
    - `--ds-color-sidenav-item-l3-indicator`: `#448aff`
    - `--ds-color-sidenav-item-l3-text-color`: `#333333`
    - `--ds-color-sidenav-item-l3-text-color-selected`: `#448aff`
    - `--ds-color-sidenav-sidebar-info-background-container`: `#f8f9fc`
    - `--ds-color-sidenav-sidebar-l1-background`: `#263136`
    - `--ds-color-sidenav-sidebar-l2-background`: `#ffffff`

#### Slide toggle `[52887:2592]` — 6 вариантов
- **Active** (VARIANT): Off, On
- **State** (VARIANT): Default, Disable, Hover
- Прочие свойства: Title#53326:0 (BOOLEAN), Support down#58203:7 (BOOLEAN), Element right#58364:0 (BOOLEAN)
- Токены компонента (12):
    - `--ds-color-slide-toggle-knob-color`: `#ffffff`
    - `--ds-color-slide-toggle-text-color`: `#333333`
    - `--ds-color-slide-toggle-text-error-color`: `#ff5252`
    - `--ds-color-slide-toggle-text-support-color`: `#616161`
    - `--ds-color-slide-toggle-deselected-default-background`: `#9e9e9e`
    - `--ds-color-slide-toggle-deselected-disable-background`: `#e0e0e0`
    - `--ds-color-slide-toggle-deselected-disable-text-color`: `#9e9e9e`
    - `--ds-color-slide-toggle-deselected-hover-background`: `#757575`
    - `--ds-color-slide-toggle-selected-default-background`: `#448aff`
    - `--ds-color-slide-toggle-selected-disable-background`: `#e0e0e0`
    - `--ds-color-slide-toggle-selected-disable-text-color`: `#9e9e9e`
    - `--ds-color-slide-toggle-selected-hover-background`: `#3969d5`

#### Snackbar `[54373:10303]` — 4 вариантов
- **Type** (VARIANT): Complex, Single
- **Mode** (VARIANT): Dark, Light
- Прочие свойства: Element left#54373:16 (BOOLEAN), Element right#54426:0 (BOOLEAN), Progress#58768:0 (BOOLEAN), Content#58768:6 (BOOLEAN), Bottom actions#58768:12 (BOOLEAN)
- Токены компонента (25):
    - `--ds-color-snackbar-progress-color`: `#448aff`
    - `--ds-color-snackbar-dark-background`: `#424242`
    - `--ds-color-snackbar-dark-text-color`: `#ffffff`
    - `--ds-color-snackbar-dark-complex-accent-icon-color`: `#448aff`
    - `--ds-color-snackbar-dark-complex-negative-icon-color`: `#ff5252`
    - `--ds-color-snackbar-dark-complex-neutral-icon-color`: `#ffffff`
    - `--ds-color-snackbar-dark-complex-positive-icon-color`: `#14b456`
    - `--ds-color-snackbar-dark-complex-warning-icon-color`: `#ea7806`
    - `--ds-color-snackbar-dark-single-accent-icon-color`: `#448aff`
    - `--ds-color-snackbar-dark-single-negative-icon-color`: `#ff5252`
    - `--ds-color-snackbar-dark-single-neutral-icon-color`: `#ffffff`
    - `--ds-color-snackbar-dark-single-positive-icon-color`: `#14b456`
    - `--ds-color-snackbar-dark-single-warning-icon-color`: `#ea7806`
    - `--ds-color-snackbar-light-background`: `#ffffff`
    - `--ds-color-snackbar-light-text-color`: `#333333`
    - `--ds-color-snackbar-light-complex-accent-icon-color`: `#448aff`
    - `--ds-color-snackbar-light-complex-negative-icon-color`: `#ff5252`
    - `--ds-color-snackbar-light-complex-neutral-icon-color`: `#616161`
    - `--ds-color-snackbar-light-complex-positive-icon-color`: `#14b456`
    - `--ds-color-snackbar-light-complex-warning-icon-color`: `#ea7806`
    - `--ds-color-snackbar-light-single-accent-icon-color`: `#448aff`
    - `--ds-color-snackbar-light-single-negative-icon-color`: `#ff5252`
    - `--ds-color-snackbar-light-single-neutral-icon-color`: `#616161`
    - `--ds-color-snackbar-light-single-positive-icon-color`: `#14b456`
    - `--ds-color-snackbar-light-single-warning-icon-color`: `#ea7806`

#### State `[54063:12395]` — 2 вариантов
- **State** (VARIANT): Hover, Press

#### Status `[52928:6588]` — 18 вариантов
- **Style** (VARIANT): Accent, Contrast-1, Contrast-2, Contrast-3, Contrast-4, Negative, Neutral, Positive, Warning
- **Type** (VARIANT): Filled, Text
- Прочие свойства: Element left#17172:1340 (BOOLEAN), Element right#17172:1349 (BOOLEAN)
- Токены компонента (29):
    - `--ds-color-status-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-status-icon-color`: `#616161`
    - `--ds-color-status-accent-filled-background`: `#f5f9ff`
    - `--ds-color-status-accent-filled-text-color`: `#448aff`
    - `--ds-color-status-accent-text-text-color`: `#448aff`
    - `--ds-color-status-contrast-1-filled-background`: `#fcf6fd`
    - `--ds-color-status-contrast-1-filled-text-color`: `#9c27b0`
    - `--ds-color-status-contrast-1-text-text-color`: `#9c27b0`
    - `--ds-color-status-contrast-2-filled-background`: `#fcf8f6`
    - `--ds-color-status-contrast-2-filled-text-color`: `#3e261e`
    - `--ds-color-status-contrast-2-text-text-color`: `#3e261e`
    - `--ds-color-status-contrast-3-filled-background`: `#f8fafc`
    - `--ds-color-status-contrast-3-filled-text-color`: `#263136`
    - `--ds-color-status-contrast-3-text-text-color`: `#263136`
    - `--ds-color-status-contrast-4-filled-background`: `#f9fbea`
    - `--ds-color-status-contrast-4-filled-text-color`: `#4f5412`
    - `--ds-color-status-contrast-4-text-text-color`: `#4f5412`
    - `--ds-color-status-negative-filled-background`: `#fff8f8`
    - `--ds-color-status-negative-filled-text-color`: `#ff5252`
    - `--ds-color-status-negative-text-text-color`: `#ff5252`
    - `--ds-color-status-neutral-filled-background`: `#fafafa`
    - `--ds-color-status-neutral-filled-text-color`: `#616161`
    - `--ds-color-status-neutral-text-text-color`: `#616161`
    - `--ds-color-status-positive-filled-background`: `#f3fcf7`
    - `--ds-color-status-positive-filled-text-color`: `#14b456`
    - `--ds-color-status-positive-text-text-color`: `#14b456`
    - `--ds-color-status-warning-filled-background`: `#fffcf8`
    - `--ds-color-status-warning-filled-text-color`: `#ea7806`
    - `--ds-color-status-warning-text-text-color`: `#ea7806`

#### Status Bar `[56564:1236]` — 1 вариантов
- Токены компонента (29):
    - `--ds-color-status-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-status-icon-color`: `#616161`
    - `--ds-color-status-accent-filled-background`: `#f5f9ff`
    - `--ds-color-status-accent-filled-text-color`: `#448aff`
    - `--ds-color-status-accent-text-text-color`: `#448aff`
    - `--ds-color-status-contrast-1-filled-background`: `#fcf6fd`
    - `--ds-color-status-contrast-1-filled-text-color`: `#9c27b0`
    - `--ds-color-status-contrast-1-text-text-color`: `#9c27b0`
    - `--ds-color-status-contrast-2-filled-background`: `#fcf8f6`
    - `--ds-color-status-contrast-2-filled-text-color`: `#3e261e`
    - `--ds-color-status-contrast-2-text-text-color`: `#3e261e`
    - `--ds-color-status-contrast-3-filled-background`: `#f8fafc`
    - `--ds-color-status-contrast-3-filled-text-color`: `#263136`
    - `--ds-color-status-contrast-3-text-text-color`: `#263136`
    - `--ds-color-status-contrast-4-filled-background`: `#f9fbea`
    - `--ds-color-status-contrast-4-filled-text-color`: `#4f5412`
    - `--ds-color-status-contrast-4-text-text-color`: `#4f5412`
    - `--ds-color-status-negative-filled-background`: `#fff8f8`
    - `--ds-color-status-negative-filled-text-color`: `#ff5252`
    - `--ds-color-status-negative-text-text-color`: `#ff5252`
    - `--ds-color-status-neutral-filled-background`: `#fafafa`
    - `--ds-color-status-neutral-filled-text-color`: `#616161`
    - `--ds-color-status-neutral-text-text-color`: `#616161`
    - `--ds-color-status-positive-filled-background`: `#f3fcf7`
    - `--ds-color-status-positive-filled-text-color`: `#14b456`
    - `--ds-color-status-positive-text-text-color`: `#14b456`
    - `--ds-color-status-warning-filled-background`: `#fffcf8`
    - `--ds-color-status-warning-filled-text-color`: `#ea7806`
    - `--ds-color-status-warning-text-text-color`: `#ea7806`

#### Step `[54800:3659]` — 12 вариантов
- **Background** (VARIANT): Off, On
- **State** (VARIANT): Default, Disable, Error, Hover, Press, Selected
- Прочие свойства: Element left#55771:0 (BOOLEAN), Element right#55771:13 (BOOLEAN), Text#57060:20 (TEXT)
- Токены компонента (23):
    - `--ds-color-stepper-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-stepper-divider-color`: `#616161`
    - `--ds-color-stepper-icon-color`: `#616161`
    - `--ds-color-stepper-text-color`: `#333333`
    - `--ds-color-stepper-default-background`: `#fafafa`
    - `--ds-color-stepper-default-icon-color`: `#616161`
    - `--ds-color-stepper-default-text-color`: `#333333`
    - `--ds-color-stepper-disable-background`: `#fafafa`
    - `--ds-color-stepper-disable-icon-color`: `#9e9e9e`
    - `--ds-color-stepper-disable-text-color`: `#9e9e9e`
    - `--ds-color-stepper-error-background`: `#fff8f8`
    - `--ds-color-stepper-error-icon-color`: `#ff5252`
    - `--ds-color-stepper-error-text-color`: `#ff5252`
    - `--ds-color-stepper-hover-background`: `#f5f9ff`
    - `--ds-color-stepper-hover-icon-color`: `#448aff`
    - `--ds-color-stepper-hover-text-color`: `#448aff`
    - `--ds-color-stepper-press-background`: `#f0f5ff`
    - `--ds-color-stepper-press-icon-color`: `#448aff`
    - `--ds-color-stepper-press-text-color`: `#3969d5`
    - `--ds-color-stepper-selected-background`: `#f5f9ff`
    - `--ds-color-stepper-selected-border-color`: `#448aff`
    - `--ds-color-stepper-selected-icon-color`: `#448aff`
    - `--ds-color-stepper-selected-text-color`: `#448aff`

#### Stepper button `[55419:7330]` — 12 вариантов
- **Type** (VARIANT): Filled, Outlined
- **Position** (VARIANT): First, Last, Middle
- **Content** (VARIANT): Icon, Text
- Прочие свойства: Text#55442:0 (BOOLEAN)
- Токены компонента (23):
    - `--ds-color-stepper-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-stepper-divider-color`: `#616161`
    - `--ds-color-stepper-icon-color`: `#616161`
    - `--ds-color-stepper-text-color`: `#333333`
    - `--ds-color-stepper-default-background`: `#fafafa`
    - `--ds-color-stepper-default-icon-color`: `#616161`
    - `--ds-color-stepper-default-text-color`: `#333333`
    - `--ds-color-stepper-disable-background`: `#fafafa`
    - `--ds-color-stepper-disable-icon-color`: `#9e9e9e`
    - `--ds-color-stepper-disable-text-color`: `#9e9e9e`
    - `--ds-color-stepper-error-background`: `#fff8f8`
    - `--ds-color-stepper-error-icon-color`: `#ff5252`
    - `--ds-color-stepper-error-text-color`: `#ff5252`
    - `--ds-color-stepper-hover-background`: `#f5f9ff`
    - `--ds-color-stepper-hover-icon-color`: `#448aff`
    - `--ds-color-stepper-hover-text-color`: `#448aff`
    - `--ds-color-stepper-press-background`: `#f0f5ff`
    - `--ds-color-stepper-press-icon-color`: `#448aff`
    - `--ds-color-stepper-press-text-color`: `#3969d5`
    - `--ds-color-stepper-selected-background`: `#f5f9ff`
    - `--ds-color-stepper-selected-border-color`: `#448aff`
    - `--ds-color-stepper-selected-icon-color`: `#448aff`
    - `--ds-color-stepper-selected-text-color`: `#448aff`

#### Stepper line `[54689:3072]` — 4 вариантов
- **Step** (VARIANT): Off, On
- **Background** (VARIANT): Off, On
- Прочие свойства: Content step#59393:0 (SLOT), Content step background#59393:5 (SLOT), Content#59393:10 (SLOT), Content background#59393:15 (SLOT), Scroll left#59393:20 (BOOLEAN), Scroll right#59393:25 (BOOLEAN)
- Токены компонента (23):
    - `--ds-color-stepper-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-stepper-divider-color`: `#616161`
    - `--ds-color-stepper-icon-color`: `#616161`
    - `--ds-color-stepper-text-color`: `#333333`
    - `--ds-color-stepper-default-background`: `#fafafa`
    - `--ds-color-stepper-default-icon-color`: `#616161`
    - `--ds-color-stepper-default-text-color`: `#333333`
    - `--ds-color-stepper-disable-background`: `#fafafa`
    - `--ds-color-stepper-disable-icon-color`: `#9e9e9e`
    - `--ds-color-stepper-disable-text-color`: `#9e9e9e`
    - `--ds-color-stepper-error-background`: `#fff8f8`
    - `--ds-color-stepper-error-icon-color`: `#ff5252`
    - `--ds-color-stepper-error-text-color`: `#ff5252`
    - `--ds-color-stepper-hover-background`: `#f5f9ff`
    - `--ds-color-stepper-hover-icon-color`: `#448aff`
    - `--ds-color-stepper-hover-text-color`: `#448aff`
    - `--ds-color-stepper-press-background`: `#f0f5ff`
    - `--ds-color-stepper-press-icon-color`: `#448aff`
    - `--ds-color-stepper-press-text-color`: `#3969d5`
    - `--ds-color-stepper-selected-background`: `#f5f9ff`
    - `--ds-color-stepper-selected-border-color`: `#448aff`
    - `--ds-color-stepper-selected-icon-color`: `#448aff`
    - `--ds-color-stepper-selected-text-color`: `#448aff`

#### Tab element `[54404:200]` — 16 вариантов
- **Lvl** (VARIANT): 1, 2
- **State** (VARIANT): Default, Disable, Hover, Press
- **Active** (VARIANT): Off, On
- Прочие свойства: Element left#54447:8 (BOOLEAN), Counter#54447:13 (BOOLEAN), Text#54876:8 (BOOLEAN), Element right#59422:0 (BOOLEAN)
- Токены компонента (17):
    - `--ds-color-tab-active-counter-text-color`: `#448aff`
    - `--ds-color-tab-active-divider`: `#448aff`
    - `--ds-color-tab-active-icon-color`: `#448aff`
    - `--ds-color-tab-active-text-color`: `#448aff`
    - `--ds-color-tab-active-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-tab-active-hover-background`: `#f5f5f5`
    - `--ds-color-tab-active-press-background`: `#e0e0e0`
    - `--ds-color-tab-disable-background`: `#ebebeb`
    - `--ds-color-tab-disable-divider`: `#ebebeb`
    - `--ds-color-tab-disable-icon-color`: `#9e9e9e`
    - `--ds-color-tab-disable-text-color`: `#9e9e9e`
    - `--ds-color-tab-innactive-counter-text-color`: `#333333`
    - `--ds-color-tab-innactive-icon-color`: `#616161`
    - `--ds-color-tab-innactive-text-color`: `#333333`
    - `--ds-color-tab-innactive-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-tab-innactive-hover-background`: `#f5f5f5`
    - `--ds-color-tab-innactive-press-background`: `#e0e0e0`

#### Table 2 lvl `[60074:44684]` — 2 вариантов
- **Type** (VARIANT): Table cell 2 lvl, Table row 2 lvl
- Прочие свойства: Header 2 lvl#60074:0 (SLOT)
- Токены компонента (23):
    - `--ds-color-table-cell-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-text-color`: `#333333`
    - `--ds-color-table-cell-content-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-content-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-content-disable-text-color`: `#9e9e9e`
    - `--ds-color-table-cell-content-edit-border-color`: `#448aff`
    - `--ds-color-table-cell-content-error-border-color`: `#ff5252`
    - `--ds-color-table-cell-content-focus-border-color`: `#448aff`
    - `--ds-color-table-cell-content-hover-background`: `#f5f5f5`
    - `--ds-color-table-cell-content-hover-border-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-header-default-background`: `#f0f5ff`
    - `--ds-color-table-cell-header-disable-background`: `#f0f5ff`
    - `--ds-color-table-cell-header-disable-icon-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-disable-text-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-hover-background`: `#f8f9fc`
    - `--ds-color-table-footer-background`: `#ffffff`
    - `--ds-color-table-row-content-border-color`: `#e0e0e0`
    - `--ds-color-table-row-content-default-background`: `#ffffff`
    - `--ds-color-table-row-content-hover-background`: `#f5f5f5`
    - `--ds-color-table-row-content-selected-background`: `#ebebeb`
    - `--ds-color-table-row-content-zebra-background`: `#f5f5f5`
    - `--ds-color-table-row-header-background-header`: `#f0f5ff`

#### Table Chips Input `[60220:70978]` — 8 вариантов
- **Style** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Hover, Vocus+Value
- Токены компонента (23):
    - `--ds-color-table-cell-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-text-color`: `#333333`
    - `--ds-color-table-cell-content-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-content-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-content-disable-text-color`: `#9e9e9e`
    - `--ds-color-table-cell-content-edit-border-color`: `#448aff`
    - `--ds-color-table-cell-content-error-border-color`: `#ff5252`
    - `--ds-color-table-cell-content-focus-border-color`: `#448aff`
    - `--ds-color-table-cell-content-hover-background`: `#f5f5f5`
    - `--ds-color-table-cell-content-hover-border-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-header-default-background`: `#f0f5ff`
    - `--ds-color-table-cell-header-disable-background`: `#f0f5ff`
    - `--ds-color-table-cell-header-disable-icon-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-disable-text-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-hover-background`: `#f8f9fc`
    - `--ds-color-table-footer-background`: `#ffffff`
    - `--ds-color-table-row-content-border-color`: `#e0e0e0`
    - `--ds-color-table-row-content-default-background`: `#ffffff`
    - `--ds-color-table-row-content-hover-background`: `#f5f5f5`
    - `--ds-color-table-row-content-selected-background`: `#ebebeb`
    - `--ds-color-table-row-content-zebra-background`: `#f5f5f5`
    - `--ds-color-table-row-header-background-header`: `#f0f5ff`

#### Table content cell `[52954:1253]` — 8 вариантов
- **State** (VARIANT): Default, Disable, Edit, Error, Focus, Hover, Link, Null
- Токены компонента (23):
    - `--ds-color-table-cell-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-text-color`: `#333333`
    - `--ds-color-table-cell-content-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-content-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-content-disable-text-color`: `#9e9e9e`
    - `--ds-color-table-cell-content-edit-border-color`: `#448aff`
    - `--ds-color-table-cell-content-error-border-color`: `#ff5252`
    - `--ds-color-table-cell-content-focus-border-color`: `#448aff`
    - `--ds-color-table-cell-content-hover-background`: `#f5f5f5`
    - `--ds-color-table-cell-content-hover-border-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-header-default-background`: `#f0f5ff`
    - `--ds-color-table-cell-header-disable-background`: `#f0f5ff`
    - `--ds-color-table-cell-header-disable-icon-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-disable-text-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-hover-background`: `#f8f9fc`
    - `--ds-color-table-footer-background`: `#ffffff`
    - `--ds-color-table-row-content-border-color`: `#e0e0e0`
    - `--ds-color-table-row-content-default-background`: `#ffffff`
    - `--ds-color-table-row-content-hover-background`: `#f5f5f5`
    - `--ds-color-table-row-content-selected-background`: `#ebebeb`
    - `--ds-color-table-row-content-zebra-background`: `#f5f5f5`
    - `--ds-color-table-row-header-background-header`: `#f0f5ff`

#### Table content row `[60105:56764]` — 5 вариантов
- **State** (VARIANT): Default, Disable, Hover, Selected, Zebra
- Прочие свойства: Content#60036:0 (SLOT)
- Токены компонента (23):
    - `--ds-color-table-cell-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-text-color`: `#333333`
    - `--ds-color-table-cell-content-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-content-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-content-disable-text-color`: `#9e9e9e`
    - `--ds-color-table-cell-content-edit-border-color`: `#448aff`
    - `--ds-color-table-cell-content-error-border-color`: `#ff5252`
    - `--ds-color-table-cell-content-focus-border-color`: `#448aff`
    - `--ds-color-table-cell-content-hover-background`: `#f5f5f5`
    - `--ds-color-table-cell-content-hover-border-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-header-default-background`: `#f0f5ff`
    - `--ds-color-table-cell-header-disable-background`: `#f0f5ff`
    - `--ds-color-table-cell-header-disable-icon-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-disable-text-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-hover-background`: `#f8f9fc`
    - `--ds-color-table-footer-background`: `#ffffff`
    - `--ds-color-table-row-content-border-color`: `#e0e0e0`
    - `--ds-color-table-row-content-default-background`: `#ffffff`
    - `--ds-color-table-row-content-hover-background`: `#f5f5f5`
    - `--ds-color-table-row-content-selected-background`: `#ebebeb`
    - `--ds-color-table-row-content-zebra-background`: `#f5f5f5`
    - `--ds-color-table-row-header-background-header`: `#f0f5ff`

#### Table footer `[59207:20759]` — 1 вариантов
- **Type** (VARIANT): Default
- Прочие свойства: Slot Content#59249:0 (SLOT)
- Токены компонента (23):
    - `--ds-color-table-cell-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-text-color`: `#333333`
    - `--ds-color-table-cell-content-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-content-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-content-disable-text-color`: `#9e9e9e`
    - `--ds-color-table-cell-content-edit-border-color`: `#448aff`
    - `--ds-color-table-cell-content-error-border-color`: `#ff5252`
    - `--ds-color-table-cell-content-focus-border-color`: `#448aff`
    - `--ds-color-table-cell-content-hover-background`: `#f5f5f5`
    - `--ds-color-table-cell-content-hover-border-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-header-default-background`: `#f0f5ff`
    - `--ds-color-table-cell-header-disable-background`: `#f0f5ff`
    - `--ds-color-table-cell-header-disable-icon-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-disable-text-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-hover-background`: `#f8f9fc`
    - `--ds-color-table-footer-background`: `#ffffff`
    - `--ds-color-table-row-content-border-color`: `#e0e0e0`
    - `--ds-color-table-row-content-default-background`: `#ffffff`
    - `--ds-color-table-row-content-hover-background`: `#f5f5f5`
    - `--ds-color-table-row-content-selected-background`: `#ebebeb`
    - `--ds-color-table-row-content-zebra-background`: `#f5f5f5`
    - `--ds-color-table-row-header-background-header`: `#f0f5ff`

#### Table header cell `[60098:45424]` — 3 вариантов
- **State** (VARIANT): Default, Disable, Hover
- Токены компонента (23):
    - `--ds-color-table-cell-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-text-color`: `#333333`
    - `--ds-color-table-cell-content-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-content-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-content-disable-text-color`: `#9e9e9e`
    - `--ds-color-table-cell-content-edit-border-color`: `#448aff`
    - `--ds-color-table-cell-content-error-border-color`: `#ff5252`
    - `--ds-color-table-cell-content-focus-border-color`: `#448aff`
    - `--ds-color-table-cell-content-hover-background`: `#f5f5f5`
    - `--ds-color-table-cell-content-hover-border-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-header-default-background`: `#f0f5ff`
    - `--ds-color-table-cell-header-disable-background`: `#f0f5ff`
    - `--ds-color-table-cell-header-disable-icon-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-disable-text-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-hover-background`: `#f8f9fc`
    - `--ds-color-table-footer-background`: `#ffffff`
    - `--ds-color-table-row-content-border-color`: `#e0e0e0`
    - `--ds-color-table-row-content-default-background`: `#ffffff`
    - `--ds-color-table-row-content-hover-background`: `#f5f5f5`
    - `--ds-color-table-row-content-selected-background`: `#ebebeb`
    - `--ds-color-table-row-content-zebra-background`: `#f5f5f5`
    - `--ds-color-table-row-header-background-header`: `#f0f5ff`

#### Table header row `[53556:3571]` — 1 вариантов
- **State** (VARIANT): Default
- Прочие свойства: Header#59320:28 (SLOT)
- Токены компонента (23):
    - `--ds-color-table-cell-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-text-color`: `#333333`
    - `--ds-color-table-cell-content-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-content-default-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-content-disable-text-color`: `#9e9e9e`
    - `--ds-color-table-cell-content-edit-border-color`: `#448aff`
    - `--ds-color-table-cell-content-error-border-color`: `#ff5252`
    - `--ds-color-table-cell-content-focus-border-color`: `#448aff`
    - `--ds-color-table-cell-content-hover-background`: `#f5f5f5`
    - `--ds-color-table-cell-content-hover-border-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-background`: `rgba(255, 255, 255, 0.0)`
    - `--ds-color-table-cell-header-default-background`: `#f0f5ff`
    - `--ds-color-table-cell-header-disable-background`: `#f0f5ff`
    - `--ds-color-table-cell-header-disable-icon-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-disable-text-color`: `#9e9e9e`
    - `--ds-color-table-cell-header-hover-background`: `#f8f9fc`
    - `--ds-color-table-footer-background`: `#ffffff`
    - `--ds-color-table-row-content-border-color`: `#e0e0e0`
    - `--ds-color-table-row-content-default-background`: `#ffffff`
    - `--ds-color-table-row-content-hover-background`: `#f5f5f5`
    - `--ds-color-table-row-content-selected-background`: `#ebebeb`
    - `--ds-color-table-row-content-zebra-background`: `#f5f5f5`
    - `--ds-color-table-row-header-background-header`: `#f0f5ff`

#### Tabs `[54854:3052]` — 4 вариантов
- **Lvl** (VARIANT): 1, 2
- **Content** (VARIANT): Icon, Text
- Прочие свойства: Content text m#58420:0 (SLOT), Content icon m#58420:5 (SLOT), Content text s#58420:10 (SLOT), Content icon s#58420:15 (SLOT), Scroll left#59422:17 (BOOLEAN), Scroll right#59422:22 (BOOLEAN)

#### Text UI `[57938:18290]` — 7 вариантов
- **State** (VARIANT): Default, Disable, Hover, Link, Negative, Press, Selected
- Прочие свойства: Element left#54167:1 (BOOLEAN), Element right#54167:6 (BOOLEAN), Label up#54741:15 (BOOLEAN), Label down#54741:30 (BOOLEAN)
- Токены компонента (20):
    - `--ds-color-text-ui-icon-color`: `#616161`
    - `--ds-color-text-ui-text-color`: `#333333`
    - `--ds-color-text-ui-text-label-color`: `#616161`
    - `--ds-color-text-ui-text-placeholder`: `#d6d6d6`
    - `--ds-color-text-ui-default-background`: `#ffffff`
    - `--ds-color-text-ui-disable-background`: `#ffffff`
    - `--ds-color-text-ui-disable-icon-color`: `#9e9e9e`
    - `--ds-color-text-ui-disable-label-text-color`: `#9e9e9e`
    - `--ds-color-text-ui-disable-text-color`: `#9e9e9e`
    - `--ds-color-text-ui-hover-background`: `#f5f5f5`
    - `--ds-color-text-ui-link-background`: `#ffffff`
    - `--ds-color-text-ui-link-text-color`: `#448aff`
    - `--ds-color-text-ui-negative-background`: `#ffffff`
    - `--ds-color-text-ui-negative-icon-color`: `#ff5252`
    - `--ds-color-text-ui-negative-label-text-color`: `#ff5252`
    - `--ds-color-text-ui-negative-text-color`: `#ff5252`
    - `--ds-color-text-ui-press-background`: `#e0e0e0`
    - `--ds-color-text-ui-selected-back-selected`: `#f5f9ff`
    - `--ds-color-text-ui-selected-background`: `#ffffff`
    - `--ds-color-text-ui-selected-icon-color`: `#448aff`

#### Textarea `[57916:9023]` — 13 вариантов
- **Size** (VARIANT): M
- **Variant** (VARIANT): Empty, Populated
- **State** (VARIANT): Default, Disable, Error, Error+Hover, Focus, Focus+Placeholder, Focus+Value, Hover
- Прочие свойства: Input text#52678:0 (TEXT), Label text#52678:3 (TEXT), Support text#52678:6 (TEXT), Label#56934:32 (BOOLEAN), Element left#56934:282 (BOOLEAN), Element right#56934:407 (BOOLEAN), Support text#56934:532 (BOOLEAN), Input text#56968:66 (BOOLEAN), Hint text#57893:0 (BOOLEAN), Support#57893:30 (BOOLEAN), Hint text#57893:60 (TEXT), Scroll#57994:0 (BOOLEAN)

#### Timepicker `[58982:9858]` — 2 вариантов
- **Type** (VARIANT): Time grid, Time line
- Прочие свойства: Slot Time#58983:4 (SLOT), Control Panel#58983:7 (SLOT), Scroll#58983:10 (BOOLEAN)

#### Title variant `[17034:68611]` — 1 вариантов
- Прочие свойства: Name#53575:0 (BOOLEAN), Size#53575:1 (BOOLEAN), State#53575:2 (BOOLEAN), Style#53575:3 (BOOLEAN)

#### Toggle buttons `[16992:8639]` — 5 вариантов
- **Type** (VARIANT): 1 button, 2 buttons, 3 buttons, 3 text, Text

#### Tree `[59564:1473]` — 8 вариантов
- **Level** (VARIANT): 2, 3
- **Mode** (VARIANT): End, Middle
- **For icon** (VARIANT): Off, On

#### Tree item `[59564:1504]` — 5 вариантов
- **Mode** (VARIANT): End, End-long, Middle, Middle-long, Start


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
| Autocomplete form | `.ds-autocomplete-form` · `--disabled` |
| Backdrop | `.ds-backdrop` |
| Button icon | `.ds-button-icon` · `--m` `--s` `--xs` `--negative` `--neutral` `--positive` `--warning` `--filled` `--outlined` `--default` `--disable` `--hover` `--loading` `--press` `--disabled` · :active, :disabled, :hover |
| Button icon group | `.ds-button-icon-group` · `--vertically` |
| Button New | `.ds-button-new` · `--btn-28` `--btn-36` |
| Button toggle | `.ds-button-toggle` · `--s` `--xs` `--outlined` `--icon` |
| Checkbox label | `.ds-checkbox-label` |
| Chips | `.ds-chips` · `--m` `--s` `--filled` `--outlined` `--default` `--disable` `--focus` `--hover` `--press` `--disabled` · :active, :disabled, :focus, :hover |
| Chips group | `.ds-chips-group` · `--s` |
| Chips Input | `.ds-chips-input` · `--s` `--disabled` · :disabled, :focus |
| Chips Input | `.ds-chips-input-2` · `--s` `--disabled` · :disabled, :focus |
| Chips input cell | `.ds-chips-input-cell` · `--error` `--error-hover` `--hover` `--disabled` · :hover |
| Chrome Header desktop | `.ds-chrome-header-desktop` |
| Chrome Header mobile | `.ds-chrome-header-mobile` · `--on` |
| Content | `.ds-content` |
| Control arrow button | `.ds-control-arrow-button` · `--s` `--xs` |
| Control group number button | `.ds-control-group-number-button` · `--xs` |
| Control number button | `.ds-control-number-button` · `--s` `--disable` `--hover` `--press` `--disabled` · :active, :disabled, :hover |
| Control Panel | `.ds-control-panel` · `--calendar` `--week` |
| Control Panel | `.ds-control-panel-2` · `--time` |
| Datepicker | `.ds-datepicker` · `--month` `--year` |
| Dialog content | `.ds-dialog-content` |
| Dialog footer | `.ds-dialog-footer` |
| Dialog header | `.ds-dialog-header` · `--picture` |
| Dialog view | `.ds-dialog-view` |
| Element | `.ds-element` · `--checkbox` `--counter` `--icon-group` `--icon-size` `--radio-button` `--slide-toggle` `--text-default` |
| Element cell | `.ds-element-cell` · `--button` `--button-icon` `--chips` `--icon-group` `--input-number` `--slide-toggle` `--status` `--text-ui` |
| Element Form Field | `.ds-element-form-field` · `--chips-input-cell` |
| Element left | `.ds-element-left` |
| Element menu | `.ds-element-menu` · `--checkbox` `--counter` `--icon-size` `--radio-button` `--slide-toggle` `--text-default` |
| Element select | `.ds-element-select` · `--checkbox` `--counter` `--icon-size` `--radio-button` `--slide-toggle` `--text-default` |
| Element sidenav | `.ds-element-sidenav` · `--avatar` |
| Element step | `.ds-element-step` · `--disabled` · :active, :disabled, :hover |
| Elementare cell | `.ds-elementare-cell` · `--button` `--button-icon` `--chips` `--icon-group` `--input-number` `--slide-toggle` `--status` `--text-ui` |
| Elements | `.ds-elements` · `--cell` `--month` `--year` `--default` `--range` `--selected` `--today` `--default` `--disable` `--hover` `--press` `--disabled` · :active, :disabled, :hover |
| Elements | `.ds-elements-2` · `--default` `--selected` `--default` `--disable` `--hover` `--press` `--range` `--disabled` · :active, :disabled, :hover |
| Expansion content | `.ds-expansion-content` · `--false` |
| Expansion group panel | `.ds-expansion-group-panel` · `--expand` |
| Form field cell | `.ds-form-field-cell` |
| Header components | `.ds-header-components` · `--mini` |
| Hint container | `.ds-hint-container` · `--single` `--default` `--left` `--right` |
| Hint content | `.ds-hint-content` · `--single-content` |
| Hint footer | `.ds-hint-footer` |
| Hint header | `.ds-hint-header` |
| Icon group | `.ds-icon-group` · `--4x` |
| Icon size | `.ds-icon-size` · `--20` `--24` `--32` `--36` `--40` |
| Icon size_Draft | `.ds-icon-size-draft` · `--20` `--24` `--32` `--36` `--40` |
| Input cell | `.ds-input-cell` · `--error` `--error-hover` `--hover` `--disabled` · :hover |
| Input Datepicker | `.ds-input-datepicker` |
| Input for number | `.ds-input-for-number` · `--compact` `--normal` `--default` `--disable` `--error` `--focus` `--hover` `--disabled` · :disabled, :hover |
| Input number | `.ds-input-number` · `--s` `--xs` `--no-label-up` `--disable` `--error` `--error-hover` `--focus` `--focus-placeholder` `--focus-value` `--hover` `--disabled` · :disabled, :focus, :hover |
| Input number_but icon | `.ds-input-number-but-icon` |
| Input Timepicker | `.ds-input-timepicker` |
| List (Сontainer) | `.ds-list-container` |
| List item | `.ds-list-item` · `--back-selected` `--hover` `--press` `--disabled` · :active, :disabled, :hover |
| Logo iiko | `.ds-logo-iiko` |
| Logo Syrve | `.ds-logo-syrve` · `--small` |
| Menu (Container) | `.ds-menu-container` |
| Menu item | `.ds-menu-item` · `--back-selected` `--hover` `--press` `--disabled` · :active, :disabled, :hover |
| Navigation Bar | `.ds-navigation-bar` |
| Picture | `.ds-picture` |
| Preview | `.ds-preview` |
| Radio button label | `.ds-radio-button-label` |
| Scroll | `.ds-scroll` · `--s` |
| Scroll tabs | `.ds-scroll-tabs` · `--left` |
| Search | `.ds-search` · `--s` `--xs` `--disable` `--hover` `--disabled` · :disabled, :focus, :hover |
| Select (Сontainer) | `.ds-select-container` |
| Select cell | `.ds-select-cell` · `--error` `--error-hover` `--hover` `--disabled` · :hover |
| Select form | `.ds-select-form` · `--s` `--xs` `--disabled` |
| Select item | `.ds-select-item` · `--back-selected` `--disable` `--error` `--hover` `--press` `--selected` `--false` `--disabled` · :active, :disabled, :hover |
| Sidenav control | `.ds-sidenav-control` · `--collapsed` `--hover` `--press` · :active, :hover |
| Sidenav Footer | `.ds-sidenav-footer` · `--l1` `--collapsed` |
| Sidenav header | `.ds-sidenav-header` · `--l2` `--collapsed` |
| Sidenav item | `.ds-sidenav-item` · `--l1` `--l2` `--collapsed` `--active` `--hover` `--selected` · :hover |
| Sidenav View | `.ds-sidenav-view` · `--l2` `--collapsed` |
| Snackbar | `.ds-snackbar` · `--complex` `--light` |
| State | `.ds-state` |
| Status | `.ds-status` · `--accent` `--contrast-1` `--contrast-2` `--contrast-3` `--contrast-4` `--negative` `--neutral` `--positive` `--warning` `--filled` `--text` |
| Status Bar | `.ds-status-bar` |
| Table 2 lvl | `.ds-table-2-lvl` |
| Table Chips Input | `.ds-table-chips-input` |
| Table content cell | `.ds-table-content-cell` · `--error` `--hover` `--disabled` · :hover |
| Table content row | `.ds-table-content-row` · `--hover` `--selected` `--zebra` `--disabled` · :hover |
| Table footer | `.ds-table-footer` |
| Table header cell | `.ds-table-header-cell` · `--hover` `--disabled` · :hover |
| Table header row | `.ds-table-header-row` |
| Text UI | `.ds-text-ui` · `--disabled` · :disabled |
| Textarea | `.ds-textarea` · `--disabled` · :disabled |
| Timepicker | `.ds-timepicker` · `--time-line` |
| Title variant | `.ds-title-variant` |
| Toggle buttons | `.ds-toggle-buttons` · `--2-buttons` `--3-buttons` `--3-text` `--text` |
| Tree | `.ds-tree` · `--3` `--off` |
| Tree item | `.ds-tree-item` · `--end-long` `--middle` `--middle-long` `--start` |

#### Ручные (выверенные по Figma) файлы — их классы

Эти компоненты сняты с узлов Figma поштучно и живут в отдельных файлах (`button, input, selection, selection-icons, badge, navigation, card, expansion, stepper, toggle`). Имена классов КОРОЧЕ имени компонента в Figma — писать в разметке именно их.

| Класс | Модификаторы | Элементы |
|---|---|---|
| `.ds-btn` | `--accent` `--disabled` `--filled` `--m` `--negative` `--neutral` `--outlined` `--positive` `--s` `--text` `--warning` `--xs` | `__icon` |
| `.ds-btn-group` | `--horizontal` `--margins` `--vertical` | — |
| `.ds-button-icon` | `--disabled` `--filled` `--m` `--outlined` `--s` `--text` `--xs` | `__icon` |
| `.ds-button-icon-group` | `--vertically` | — |
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
   iiko Design System — токены
   Генерируется из DS.json (выгрузка из Figma) скриптом ds_tokens.py
   НЕ ПРАВИТЬ ВРУЧНУЮ — перезапусти генератор после обновления ДС
   ============================================================ */
:root {

  /* ── Палитра (Base Color) ─────────────────────────── */
  --ds-palette-accent-10: #f5f9ff;
  --ds-palette-accent-100: #e8f0ff;
  --ds-palette-accent-200: #ccdfff;
  --ds-palette-accent-300: #a8c9ff;
  --ds-palette-accent-400: #75a9ff;
  --ds-palette-accent-5: #f8f9fc;
  --ds-palette-accent-50: #f0f5ff;
  --ds-palette-accent-500: #448aff;
  --ds-palette-accent-600: #3969d5;
  --ds-palette-accent-700: #2651b5;
  --ds-palette-accent-800: #123da1;
  --ds-palette-accent-900: #162a69;
  --ds-palette-accent-950: #151d37;
  --ds-palette-accent-990: #0d111c;
  --ds-palette-contrast-1-10: #fcf6fd;
  --ds-palette-contrast-1-100: #f4e2f9;
  --ds-palette-contrast-1-200: #efd5f6;
  --ds-palette-contrast-1-300: #e4b8ef;
  --ds-palette-contrast-1-400: #d58ee6;
  --ds-palette-contrast-1-5: #fbf7fc;
  --ds-palette-contrast-1-50: #faf2fc;
  --ds-palette-contrast-1-500: #c564dd;
  --ds-palette-contrast-1-600: #b53ad4;
  --ds-palette-contrast-1-700: #9c27b0;
  --ds-palette-contrast-1-800: #761e86;
  --ds-palette-contrast-1-900: #641971;
  --ds-palette-contrast-1-950: #3f1047;
  --ds-palette-contrast-1-990: #2c0b32;
  --ds-palette-contrast-2-10: #fcf8f6;
  --ds-palette-contrast-2-100: #f7e9e3;
  --ds-palette-contrast-2-200: #f1d9d0;
  --ds-palette-contrast-2-300: #ebc9bc;
  --ds-palette-contrast-2-400: #d9ac9b;
  --ds-palette-contrast-2-5: #faf8f8;
  --ds-palette-contrast-2-50: #fcf5f3;
  --ds-palette-contrast-2-500: #c29180;
  --ds-palette-contrast-2-600: #a57969;
  --ds-palette-contrast-2-700: #896152;
  --ds-palette-contrast-2-800: #795548;
  --ds-palette-contrast-2-900: #5a3f35;
  --ds-palette-contrast-2-950: #3e261e;
  --ds-palette-contrast-2-990: #291a14;
  --ds-palette-contrast-3-10: #f8fafc;
  --ds-palette-contrast-3-100: #e7eff3;
  --ds-palette-contrast-3-200: #d9e3e8;
  --ds-palette-contrast-3-300: #c9d7de;
  --ds-palette-contrast-3-400: #a9c0cb;
  --ds-palette-contrast-3-5: #f9fafb;
  --ds-palette-contrast-3-50: #f4f9fb;
  --ds-palette-contrast-3-500: #90a7b2;
  --ds-palette-contrast-3-600: #728f9d;
  --ds-palette-contrast-3-700: #607d8b;
  --ds-palette-contrast-3-800: #4b626d;
  --ds-palette-contrast-3-900: #36474e;
  --ds-palette-contrast-3-950: #263136;
  --ds-palette-contrast-3-990: #142229;
  --ds-palette-contrast-4-10: #f6f8dd;
  --ds-palette-contrast-4-100: #edf2c0;
  --ds-palette-contrast-4-200: #e8edab;
  --ds-palette-contrast-4-300: #e2e996;
  --ds-palette-contrast-4-400: #dce481;
  --ds-palette-contrast-4-5: #f9fbea;
  --ds-palette-contrast-4-50: #f3f6d5;
  --ds-palette-contrast-4-500: #d6e06c;
  --ds-palette-contrast-4-600: #cad742;
  --ds-palette-contrast-4-700: #b1bd28;
  --ds-palette-contrast-4-800: #8a931f;
  --ds-palette-contrast-4-900: #626916;
  --ds-palette-contrast-4-950: #4f5412;
  --ds-palette-contrast-4-990: #272a09;
  --ds-palette-negative-10: #fff8f8;
  --ds-palette-negative-100: #ffe5e5;
  --ds-palette-negative-200: #ffcccc;
  --ds-palette-negative-300: #ffb8b8;
  --ds-palette-negative-400: #ff8585;
  --ds-palette-negative-5: #fbf8f8;
  --ds-palette-negative-50: #fff2f2;
  --ds-palette-negative-500: #ff5252;
  --ds-palette-negative-600: #f4372f;
  --ds-palette-negative-700: #de1a12;
  --ds-palette-negative-800: #af150e;
  --ds-palette-negative-900: #7f0f0a;
  --ds-palette-negative-950: #500907;
  --ds-palette-negative-990: #300403;
  --ds-palette-neutral-0: #ffffff;
  --ds-palette-neutral-10: #fafafa;
  --ds-palette-neutral-100: #ebebeb;
  --ds-palette-neutral-200: #e0e0e0;
  --ds-palette-neutral-300: #d6d6d6;
  --ds-palette-neutral-400: #bdbdbd;
  --ds-palette-neutral-50: #f5f5f5;
  --ds-palette-neutral-500: #9e9e9e;
  --ds-palette-neutral-600: #757575;
  --ds-palette-neutral-700: #616161;
  --ds-palette-neutral-800: #424242;
  --ds-palette-neutral-900: #333333;
  --ds-palette-neutral-950: #212121;
  --ds-palette-neutral-990: #121212;
  --ds-palette-neutral-transparent: rgba(255, 255, 255, 0.0);
  --ds-palette-positive-10: #f3fcf7;
  --ds-palette-positive-100: #e0f8ea;
  --ds-palette-positive-200: #c1f1d5;
  --ds-palette-positive-300: #97e8b9;
  --ds-palette-positive-400: #50d889;
  --ds-palette-positive-5: #f8fbfa;
  --ds-palette-positive-50: #ebfbf2;
  --ds-palette-positive-500: #14b456;
  --ds-palette-positive-600: #119c34;
  --ds-palette-positive-700: #0f852c;
  --ds-palette-positive-800: #0c6e21;
  --ds-palette-positive-900: #0a571a;
  --ds-palette-positive-950: #074013;
  --ds-palette-positive-990: #04250b;
  --ds-palette-warning-10: #fffcf8;
  --ds-palette-warning-100: #fff4e5;
  --ds-palette-warning-200: #ffe9cc;
  --ds-palette-warning-300: #ffd9a8;
  --ds-palette-warning-400: #ffc375;
  --ds-palette-warning-5: #fdfcfa;
  --ds-palette-warning-50: #fff9f0;
  --ds-palette-warning-500: #ffab40;
  --ds-palette-warning-600: #fe8c06;
  --ds-palette-warning-700: #ea7806;
  --ds-palette-warning-800: #cc5f00;
  --ds-palette-warning-900: #994000;
  --ds-palette-warning-950: #662a00;
  --ds-palette-warning-990: #331500;

  /* ── Семантические цвета (Color) ──────────────────── */
  --ds-color-brand-accent-dark: #3969d5;
  --ds-color-brand-accent-darker: #2651b5;
  --ds-color-brand-accent-default: #448aff;
  --ds-color-brand-accent-default-transparent: rgba(255, 255, 255, 0.0);
  --ds-color-brand-accent-light: #a8c9ff;
  --ds-color-brand-accent-lighter: #f0f5ff;
  --ds-color-brand-accent-lightest: #f5f9ff;
  --ds-color-brand-accent-super-lightest: #f8f9fc;
  --ds-color-brand-contrast-1-dark: #9c27b0;
  --ds-color-brand-contrast-1-lightest: #fbf7fc;
  --ds-color-brand-contrast-2-dark: #3e261e;
  --ds-color-brand-contrast-2-lightest: #f7e9e3;
  --ds-color-brand-contrast-3-dark: #263136;
  --ds-color-brand-contrast-3-lightest: #f9fafb;
  --ds-color-brand-contrast-4-dark: #4f5412;
  --ds-color-brand-contrast-4-lightest: #f9fbea;
  --ds-color-brand-negative-dark: #de1a12;
  --ds-color-brand-negative-darker: #7f0f0a;
  --ds-color-brand-negative-default: #ff5252;
  --ds-color-brand-negative-light: #ffb8b8;
  --ds-color-brand-negative-lighter: #fff2f2;
  --ds-color-brand-negative-lightest: #fff8f8;
  --ds-color-brand-neutral-dark: #757575;
  --ds-color-brand-neutral-darker: #616161;
  --ds-color-brand-neutral-darkest: #424242;
  --ds-color-brand-neutral-default: #ffffff;
  --ds-color-brand-neutral-default-transparent: rgba(255, 255, 255, 0.0);
  --ds-color-brand-neutral-light: #d6d6d6;
  --ds-color-brand-neutral-lighter: #e0e0e0;
  --ds-color-brand-neutral-lightest: #ebebeb;
  --ds-color-brand-neutral-neutral: #9e9e9e;
  --ds-color-brand-neutral-super-dark: #333333;
  --ds-color-brand-neutral-super-light: #f5f5f5;
  --ds-color-brand-positive-dark: #0f852c;
  --ds-color-brand-positive-darker: #0a571a;
  --ds-color-brand-positive-default: #14b456;
  --ds-color-brand-positive-light: #97e8b9;
  --ds-color-brand-positive-lighter: #ebfbf2;
  --ds-color-brand-positive-lightest: #f3fcf7;
  --ds-color-brand-warning-dark: #ea7806;
  --ds-color-brand-warning-darker: #994000;
  --ds-color-brand-warning-default: #ffab40;
  --ds-color-brand-warning-light: #ffd9a8;
  --ds-color-brand-warning-lighter: #fff9f0;
  --ds-color-brand-warning-lightest: #fffcf8;
  --ds-color-button-accent-default: #448aff;
  --ds-color-button-accent-hover: #3969d5;
  --ds-color-button-accent-lite-default: #ffffff;
  --ds-color-button-accent-lite-default-transparent: rgba(255, 255, 255, 0.0);
  --ds-color-button-accent-lite-hover: #f5f9ff;
  --ds-color-button-accent-lite-press: #e8f0ff;
  --ds-color-button-accent-press: #2651b5;
  --ds-color-button-negative-default: #ff5252;
  --ds-color-button-negative-hover: #f4372f;
  --ds-color-button-negative-lite-default: #ffffff;
  --ds-color-button-negative-lite-default-transparent: rgba(255, 255, 255, 0.0);
  --ds-color-button-negative-lite-hover: #fff8f8;
  --ds-color-button-negative-lite-press: #ffe5e5;
  --ds-color-button-negative-press: #de1a12;
  --ds-color-button-neutral-default: #ffffff;
  --ds-color-button-neutral-default-transparent: rgba(255, 255, 255, 0.0);
  --ds-color-button-neutral-disable: #ebebeb;
  --ds-color-button-neutral-hover: #fafafa;
  --ds-color-button-neutral-press: #ebebeb;
  --ds-color-button-positive-default: #14b456;
  --ds-color-button-positive-hover: #119c34;
  --ds-color-button-positive-lite-default: #ffffff;
  --ds-color-button-positive-lite-default-transparent: rgba(255, 255, 255, 0.0);
  --ds-color-button-positive-lite-hover: #f3fcf7;
  --ds-color-button-positive-lite-press: #e0f8ea;
  --ds-color-button-positive-press: #0f852c;
  --ds-color-button-warning-default: #ffab40;
  --ds-color-button-warning-hover: #fe8c06;
  --ds-color-button-warning-lite-default: #ffffff;
  --ds-color-button-warning-lite-default-transparent: rgba(255, 255, 255, 0.0);
  --ds-color-button-warning-lite-hover: #fffcf8;
  --ds-color-button-warning-lite-press: #fff4e5;
  --ds-color-button-warning-press: #ea7806;
  --ds-color-icon-accent: #448aff;
  --ds-color-icon-disable: #9e9e9e;
  --ds-color-icon-inversive: #ffffff;
  --ds-color-icon-negative: #ff5252;
  --ds-color-icon-positive: #14b456;
  --ds-color-icon-primary: #616161;
  --ds-color-icon-primary-light: #9e9e9e;
  --ds-color-icon-warning: #ea7806;
  --ds-color-shapes-default: #ffffff;
  --ds-color-shapes-default-transparent: rgba(255, 255, 255, 0.0);
  --ds-color-shapes-default-variant: #f8f9fc;
  --ds-color-shapes-disable: #ebebeb;
  --ds-color-shapes-hover: #f5f5f5;
  --ds-color-shapes-lighter-er: #fff2f2;
  --ds-color-shapes-lighter-pr: #f0f5ff;
  --ds-color-shapes-lighter-sc: #ebfbf2;
  --ds-color-shapes-lighter-wr: #fff9f0;
  --ds-color-shapes-lightest-br: #f7e9e3;
  --ds-color-shapes-lightest-db: #f9fafb;
  --ds-color-shapes-lightest-mg: #fbf7fc;
  --ds-color-shapes-press: #e0e0e0;
  --ds-color-stroke-accent: #448aff;
  --ds-color-stroke-default: #e0e0e0;
  --ds-color-stroke-disable: #ebebeb;
  --ds-color-stroke-hover: #9e9e9e;
  --ds-color-stroke-negative: #ff5252;
  --ds-color-stroke-positive: #14b456;
  --ds-color-stroke-warning: #ffab40;
  --ds-color-surface-default: #ffffff;
  --ds-color-surface-default-transparent: rgba(255, 255, 255, 0.0);
  --ds-color-surface-default-variant: #f8f9fc;
  --ds-color-surface-disable: #f5f5f5;
  --ds-color-surface-hover: #f5f5f5;
  --ds-color-surface-press: #e0e0e0;
  --ds-color-surface-selected: #f5f5f5;
  --ds-color-surface-sidebar-active: #a8c9ff;
  --ds-color-surface-sidebar-selected: #f0f5ff;
  --ds-color-surface-snack-tooltip: #424242;
  --ds-color-table-surfase-default: #ffffff;
  --ds-color-table-surfase-default-transparent: rgba(255, 255, 255, 0.0);
  --ds-color-table-surfase-group: #ebebeb;
  --ds-color-table-surfase-head: #f0f5ff;
  --ds-color-table-surfase-head-group: #e8f0ff;
  --ds-color-table-surfase-hover: #f5f5f5;
  --ds-color-table-surfase-selected: #ebebeb;
  --ds-color-table-surfase-zebra: #f5f5f5;
  --ds-color-text-accent: #448aff;
  --ds-color-text-disable: #9e9e9e;
  --ds-color-text-inversive: #ffffff;
  --ds-color-text-negative: #ff5252;
  --ds-color-text-placeholder: #d6d6d6;
  --ds-color-text-positive: #14b456;
  --ds-color-text-primary: #333333;
  --ds-color-text-secondary: #616161;
  --ds-color-text-warning: #ea7806;

  /* ── Цвета компонентов (Component) ────────────────── */
  --ds-color-backdrop-background: #333333;
  --ds-color-badge-text-color: #ffffff;
  --ds-color-badge-accent-background: #448aff;
  --ds-color-badge-negative-background: #ff5252;
  --ds-color-badge-positive-background: #14b456;
  --ds-color-badge-warning-background: #ffab40;
  --ds-color-banners-border-color: #448aff;
  --ds-color-banners-text-color: #333333;
  --ds-color-banners-accent-background: #f0f5ff;
  --ds-color-banners-accent-icon-color: #448aff;
  --ds-color-banners-negative-background: #fff2f2;
  --ds-color-banners-negative-icon-color: #ff5252;
  --ds-color-banners-neutral-background: #ffffff;
  --ds-color-banners-neutral-icon-color: #616161;
  --ds-color-banners-positive-background: #ebfbf2;
  --ds-color-banners-positive-icon-color: #14b456;
  --ds-color-banners-warning-background: #fff9f0;
  --ds-color-banners-warning-icon-color: #ea7806;
  --ds-color-button-icon-accent-filled-icon-color: #ffffff;
  --ds-color-button-icon-accent-filled-default-background: #448aff;
  --ds-color-button-icon-accent-filled-hover-background: #3969d5;
  --ds-color-button-icon-accent-filled-press-background: #2651b5;
  --ds-color-button-icon-accent-outlined-border-color: #448aff;
  --ds-color-button-icon-accent-outlined-icon-color: #448aff;
  --ds-color-button-icon-accent-outlined-default-background: #ffffff;
  --ds-color-button-icon-accent-outlined-hover-background: #f5f9ff;
  --ds-color-button-icon-accent-outlined-press-background: #e8f0ff;
  --ds-color-button-icon-accent-text-icon-color: #448aff;
  --ds-color-button-icon-accent-text-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-button-icon-accent-text-hover-background: #f5f9ff;
  --ds-color-button-icon-accent-text-press-background: #e8f0ff;
  --ds-color-button-icon-disable-background-filled: #ebebeb;
  --ds-color-button-icon-disable-background-outlined: #ebebeb;
  --ds-color-button-icon-disable-background-text: rgba(255, 255, 255, 0.0);
  --ds-color-button-icon-disable-border-color: #ebebeb;
  --ds-color-button-icon-disable-icon-color: #9e9e9e;
  --ds-color-button-icon-negative-filled-icon-color: #ffffff;
  --ds-color-button-icon-negative-filled-default-background: #ff5252;
  --ds-color-button-icon-negative-filled-hover-background: #f4372f;
  --ds-color-button-icon-negative-filled-press-background: #de1a12;
  --ds-color-button-icon-negative-outlined-border-color: #ff5252;
  --ds-color-button-icon-negative-outlined-icon-color: #ff5252;
  --ds-color-button-icon-negative-outlined-default-background: #ffffff;
  --ds-color-button-icon-negative-outlined-hover-background: #fff8f8;
  --ds-color-button-icon-negative-outlined-press-background: #ffe5e5;
  --ds-color-button-icon-negative-text-icon-color: #ff5252;
  --ds-color-button-icon-negative-text-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-button-icon-negative-text-hover-background: #fff8f8;
  --ds-color-button-icon-negative-text-press-background: #ffe5e5;
  --ds-color-button-icon-neutral-filled-icon-color: #616161;
  --ds-color-button-icon-neutral-filled-default-background: #ffffff;
  --ds-color-button-icon-neutral-filled-hover-background: #fafafa;
  --ds-color-button-icon-neutral-filled-press-background: #ebebeb;
  --ds-color-button-icon-neutral-outlined-border-color: #e0e0e0;
  --ds-color-button-icon-neutral-outlined-icon-color: #616161;
  --ds-color-button-icon-neutral-outlined-default-background: #ffffff;
  --ds-color-button-icon-neutral-outlined-hover-background: #fafafa;
  --ds-color-button-icon-neutral-outlined-press-background: #ebebeb;
  --ds-color-button-icon-neutral-text-icon-color: #616161;
  --ds-color-button-icon-neutral-text-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-button-icon-neutral-text-hover-background: #fafafa;
  --ds-color-button-icon-neutral-text-press-background: #ebebeb;
  --ds-color-button-icon-positive-filled-icon-color: #ffffff;
  --ds-color-button-icon-positive-filled-default-background: #14b456;
  --ds-color-button-icon-positive-filled-hover-background: #119c34;
  --ds-color-button-icon-positive-filled-press-background: #0f852c;
  --ds-color-button-icon-positive-outlined-border-color: #14b456;
  --ds-color-button-icon-positive-outlined-icon-color: #14b456;
  --ds-color-button-icon-positive-outlined-default-background: #ffffff;
  --ds-color-button-icon-positive-outlined-hover-background: #f3fcf7;
  --ds-color-button-icon-positive-outlined-press-background: #e0f8ea;
  --ds-color-button-icon-positive-text-icon-color: #14b456;
  --ds-color-button-icon-positive-text-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-button-icon-positive-text-hover-background: #f3fcf7;
  --ds-color-button-icon-positive-text-press-background: #e0f8ea;
  --ds-color-button-icon-warning-filled-icon-color: #ffffff;
  --ds-color-button-icon-warning-filled-default-background: #ffab40;
  --ds-color-button-icon-warning-filled-hover-background: #fe8c06;
  --ds-color-button-icon-warning-filled-press-background: #ea7806;
  --ds-color-button-icon-warning-outlined-border-color: #ffab40;
  --ds-color-button-icon-warning-outlined-icon-color: #ea7806;
  --ds-color-button-icon-warning-outlined-default-background: #ffffff;
  --ds-color-button-icon-warning-outlined-hover-background: #fffcf8;
  --ds-color-button-icon-warning-outlined-press-background: #fff4e5;
  --ds-color-button-icon-warning-text-icon-color: #ea7806;
  --ds-color-button-icon-warning-text-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-button-icon-warning-text-hover-background: #fffcf8;
  --ds-color-button-icon-warning-text-press-background: #fff4e5;
  --ds-color-button-toggle-filled-background: #ffffff;
  --ds-color-button-toggle-outlined-background: #ffffff;
  --ds-color-button-toggle-outlined-border-color: #e0e0e0;
  --ds-color-button-accent-filled-default-background: #448aff;
  --ds-color-button-accent-filled-default-icon-color: #ffffff;
  --ds-color-button-accent-filled-default-text-color: #ffffff;
  --ds-color-button-accent-filled-hover-background: #3969d5;
  --ds-color-button-accent-filled-hover-icon-color: #ffffff;
  --ds-color-button-accent-filled-hover-text-color: #ffffff;
  --ds-color-button-accent-filled-press-background: #2651b5;
  --ds-color-button-accent-filled-press-icon-color: #ffffff;
  --ds-color-button-accent-filled-press-text-color: #ffffff;
  --ds-color-button-accent-outlined-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-button-accent-outlined-default-border-color: #448aff;
  --ds-color-button-accent-outlined-default-icon-color: #448aff;
  --ds-color-button-accent-outlined-default-text-color: #448aff;
  --ds-color-button-accent-outlined-hover-background: #f5f9ff;
  --ds-color-button-accent-outlined-hover-border-color: #448aff;
  --ds-color-button-accent-outlined-hover-icon-color: #448aff;
  --ds-color-button-accent-outlined-hover-text-color: #448aff;
  --ds-color-button-accent-outlined-press-background: #e8f0ff;
  --ds-color-button-accent-outlined-press-border-color: #448aff;
  --ds-color-button-accent-outlined-press-icon-color: #448aff;
  --ds-color-button-accent-outlined-press-text-color: #448aff;
  --ds-color-button-accent-text-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-button-accent-text-default-icon-color: #448aff;
  --ds-color-button-accent-text-default-text-color: #448aff;
  --ds-color-button-accent-text-hover-background: #f5f9ff;
  --ds-color-button-accent-text-hover-icon-color: #448aff;
  --ds-color-button-accent-text-hover-text-color: #448aff;
  --ds-color-button-accent-text-press-background: #e8f0ff;
  --ds-color-button-accent-text-press-icon-color: #448aff;
  --ds-color-button-accent-text-press-text-color: #448aff;
  --ds-color-button-disable-background-filled: #ebebeb;
  --ds-color-button-disable-background-outlined: rgba(255, 255, 255, 0.0);
  --ds-color-button-disable-background-text: rgba(255, 255, 255, 0.0);
  --ds-color-button-disable-border-color: #ebebeb;
  --ds-color-button-disable-icon-color: #9e9e9e;
  --ds-color-button-disable-text-color: #9e9e9e;
  --ds-color-button-negative-filled-default-background: #ff5252;
  --ds-color-button-negative-filled-default-icon-color: #ffffff;
  --ds-color-button-negative-filled-default-text-color: #ffffff;
  --ds-color-button-negative-filled-hover-background: #f4372f;
  --ds-color-button-negative-filled-hover-icon-color: #ffffff;
  --ds-color-button-negative-filled-hover-text-color: #ffffff;
  --ds-color-button-negative-filled-press-background: #de1a12;
  --ds-color-button-negative-filled-press-icon-color: #ffffff;
  --ds-color-button-negative-filled-press-text-color: #ffffff;
  --ds-color-button-negative-outlined-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-button-negative-outlined-default-border-color: #ff5252;
  --ds-color-button-negative-outlined-default-icon-color: #ff5252;
  --ds-color-button-negative-outlined-default-text-color: #ff5252;
  --ds-color-button-negative-outlined-hover-background: #fff8f8;
  --ds-color-button-negative-outlined-hover-border-color: #ff5252;
  --ds-color-button-negative-outlined-hover-icon-color: #ff5252;
  --ds-color-button-negative-outlined-hover-text-color: #ff5252;
  --ds-color-button-negative-outlined-press-background: #ffe5e5;
  --ds-color-button-negative-outlined-press-border-color: #ff5252;
  --ds-color-button-negative-outlined-press-icon-color: #ff5252;
  --ds-color-button-negative-outlined-press-text-color: #ff5252;
  --ds-color-button-negative-text-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-button-negative-text-default-icon-color: #ff5252;
  --ds-color-button-negative-text-default-text-color: #ff5252;
  --ds-color-button-negative-text-hover-background: #fff8f8;
  --ds-color-button-negative-text-hover-icon-color: #ff5252;
  --ds-color-button-negative-text-hover-text-color: #ff5252;
  --ds-color-button-negative-text-press-background: #ffe5e5;
  --ds-color-button-negative-text-press-icon-color: #ff5252;
  --ds-color-button-negative-text-press-text-color: #ff5252;
  --ds-color-button-neutral-filled-default-background: #ffffff;
  --ds-color-button-neutral-filled-default-icon-color: #616161;
  --ds-color-button-neutral-filled-default-text-color: #333333;
  --ds-color-button-neutral-filled-hover-background: #fafafa;
  --ds-color-button-neutral-filled-hover-icon-color: #616161;
  --ds-color-button-neutral-filled-hover-text-color: #333333;
  --ds-color-button-neutral-filled-press-background: #ebebeb;
  --ds-color-button-neutral-filled-press-icon-color: #616161;
  --ds-color-button-neutral-filled-press-text-color: #333333;
  --ds-color-button-neutral-outlined-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-button-neutral-outlined-default-border-color: #e0e0e0;
  --ds-color-button-neutral-outlined-default-icon-color: #616161;
  --ds-color-button-neutral-outlined-default-text-color: #333333;
  --ds-color-button-neutral-outlined-hover-background: #fafafa;
  --ds-color-button-neutral-outlined-hover-border-color: #e0e0e0;
  --ds-color-button-neutral-outlined-hover-icon-color: #616161;
  --ds-color-button-neutral-outlined-hover-text-color: #333333;
  --ds-color-button-neutral-outlined-press-background: #ebebeb;
  --ds-color-button-neutral-outlined-press-border-color: #e0e0e0;
  --ds-color-button-neutral-outlined-press-icon-color: #616161;
  --ds-color-button-neutral-outlined-press-text-color: #333333;
  --ds-color-button-neutral-text-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-button-neutral-text-default-icon-color: #616161;
  --ds-color-button-neutral-text-default-text-color: #333333;
  --ds-color-button-neutral-text-hover-background: #fafafa;
  --ds-color-button-neutral-text-hover-icon-color: #616161;
  --ds-color-button-neutral-text-hover-text-color: #333333;
  --ds-color-button-neutral-text-press-background: #ebebeb;
  --ds-color-button-neutral-text-press-icon-color: #616161;
  --ds-color-button-neutral-text-press-text-color: #333333;
  --ds-color-button-positive-filled-default-background: #14b456;
  --ds-color-button-positive-filled-default-icon-color: #ffffff;
  --ds-color-button-positive-filled-default-text-color: #ffffff;
  --ds-color-button-positive-filled-hover-background: #119c34;
  --ds-color-button-positive-filled-hover-icon-color: #ffffff;
  --ds-color-button-positive-filled-hover-text-color: #ffffff;
  --ds-color-button-positive-filled-press-background: #0f852c;
  --ds-color-button-positive-filled-press-icon-color: #ffffff;
  --ds-color-button-positive-filled-press-text-color: #ffffff;
  --ds-color-button-positive-outlined-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-button-positive-outlined-default-border-color: #14b456;
  --ds-color-button-positive-outlined-default-icon-color: #14b456;
  --ds-color-button-positive-outlined-default-text-color: #14b456;
  --ds-color-button-positive-outlined-hover-background: #f3fcf7;
  --ds-color-button-positive-outlined-hover-border-color: #14b456;
  --ds-color-button-positive-outlined-hover-icon-color: #14b456;
  --ds-color-button-positive-outlined-hover-text-color: #14b456;
  --ds-color-button-positive-outlined-press-background: #e0f8ea;
  --ds-color-button-positive-outlined-press-border-color: #14b456;
  --ds-color-button-positive-outlined-press-icon-color: #14b456;
  --ds-color-button-positive-outlined-press-text-color: #14b456;
  --ds-color-button-positive-text-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-button-positive-text-default-icon-color: #14b456;
  --ds-color-button-positive-text-default-text-color: #14b456;
  --ds-color-button-positive-text-hover-background: #f3fcf7;
  --ds-color-button-positive-text-hover-icon-color: #14b456;
  --ds-color-button-positive-text-hover-text-color: #14b456;
  --ds-color-button-positive-text-press-background: #e0f8ea;
  --ds-color-button-positive-text-press-icon-color: #14b456;
  --ds-color-button-positive-text-press-text-color: #14b456;
  --ds-color-button-warning-filled-default-background: #ffab40;
  --ds-color-button-warning-filled-default-icon-color: #ffffff;
  --ds-color-button-warning-filled-default-text-color: #ffffff;
  --ds-color-button-warning-filled-hover-background: #fe8c06;
  --ds-color-button-warning-filled-hover-icon-color: #ffffff;
  --ds-color-button-warning-filled-hover-text-color: #ffffff;
  --ds-color-button-warning-filled-press-background: #ea7806;
  --ds-color-button-warning-filled-press-icon-color: #ffffff;
  --ds-color-button-warning-filled-press-text-color: #ffffff;
  --ds-color-button-warning-outlined-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-button-warning-outlined-default-border-color: #ffab40;
  --ds-color-button-warning-outlined-default-icon-color: #ea7806;
  --ds-color-button-warning-outlined-default-text-color: #ea7806;
  --ds-color-button-warning-outlined-hover-background: #fffcf8;
  --ds-color-button-warning-outlined-hover-border-color: #ffab40;
  --ds-color-button-warning-outlined-hover-icon-color: #ea7806;
  --ds-color-button-warning-outlined-hover-text-color: #ea7806;
  --ds-color-button-warning-outlined-press-background: #fff4e5;
  --ds-color-button-warning-outlined-press-border-color: #ffab40;
  --ds-color-button-warning-outlined-press-icon-color: #ea7806;
  --ds-color-button-warning-outlined-press-text-color: #ea7806;
  --ds-color-button-warning-text-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-button-warning-text-default-icon-color: #ea7806;
  --ds-color-button-warning-text-default-text-color: #ea7806;
  --ds-color-button-warning-text-hover-background: #fffcf8;
  --ds-color-button-warning-text-hover-icon-color: #ea7806;
  --ds-color-button-warning-text-hover-text-color: #ea7806;
  --ds-color-button-warning-text-press-background: #fff4e5;
  --ds-color-button-warning-text-press-icon-color: #ea7806;
  --ds-color-button-warning-text-press-text-color: #ea7806;
  --ds-color-card-background: #ffffff;
  --ds-color-card-content-text-color: #616161;
  --ds-color-card-content-title-color: #333333;
  --ds-color-card-header-desc-color: #616161;
  --ds-color-card-header-title-color: #333333;
  --ds-color-checkbox-group-text-color: #333333;
  --ds-color-checkbox-group-text-disable: #9e9e9e;
  --ds-color-checkbox-group-text-support-color: #616161;
  --ds-color-checkbox-group-text-support-error-color: #ff5252;
  --ds-color-checkbox-label-text-color: #333333;
  --ds-color-checkbox-label-text-disable-color: #9e9e9e;
  --ds-color-checkbox-label-text-support-color: #616161;
  --ds-color-checkbox-label-text-support-error-color: #ff5252;
  --ds-color-checkbox-disable-background: rgba(255, 255, 255, 0.0);
  --ds-color-checkbox-disable-deselected-icon-color: #9e9e9e;
  --ds-color-checkbox-disable-inderterminate-icon-color: #9e9e9e;
  --ds-color-checkbox-disable-selected-icon-color: #9e9e9e;
  --ds-color-checkbox-error-icon-color: #ff5252;
  --ds-color-checkbox-error-deselected-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-checkbox-error-deselected-hover-background: #ffe5e5;
  --ds-color-checkbox-error-deselected-press-background: #ffcccc;
  --ds-color-checkbox-error-inderterminate-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-checkbox-error-inderterminate-hover-background: #ffe5e5;
  --ds-color-checkbox-error-inderterminate-press-background: #ffcccc;
  --ds-color-checkbox-error-selected-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-checkbox-error-selected-hover-background: #ffe5e5;
  --ds-color-checkbox-error-selected-press-background: #ffcccc;
  --ds-color-checkbox-normal-deselected-icon-color: #616161;
  --ds-color-checkbox-normal-deselected-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-checkbox-normal-deselected-hover-background: #ebebeb;
  --ds-color-checkbox-normal-deselected-press-background: #e0e0e0;
  --ds-color-checkbox-normal-inderterminate-icon-color: #448aff;
  --ds-color-checkbox-normal-inderterminate-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-checkbox-normal-inderterminate-hover-background: #e8f0ff;
  --ds-color-checkbox-normal-inderterminate-press-background: #ccdfff;
  --ds-color-checkbox-normal-selected-icon-color: #448aff;
  --ds-color-checkbox-normal-selected-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-checkbox-normal-selected-hover-background: #e8f0ff;
  --ds-color-checkbox-normal-selected-press-background: #ccdfff;
  --ds-color-chips-icon-color: #616161;
  --ds-color-chips-text-color: #333333;
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
  --ds-color-chips-disable-background-filled: #ebebeb;
  --ds-color-chips-disable-background-outlined: #ffffff;
  --ds-color-chips-disable-border-color: #ebebeb;
  --ds-color-chips-disable-icon-color: #9e9e9e;
  --ds-color-chips-disable-text-color: #9e9e9e;
  --ds-color-chips-filled-default-background: #f8f9fc;
  --ds-color-chips-filled-hover-background: #f5f5f5;
  --ds-color-chips-filled-press-background: #e0e0e0;
  --ds-color-chips-outlined-default-background: #ffffff;
  --ds-color-chips-outlined-default-border-color: #e0e0e0;
  --ds-color-chips-outlined-focus-background: #ffffff;
  --ds-color-chips-outlined-focus-border-color: #448aff;
  --ds-color-chips-outlined-hover-background: #ffffff;
  --ds-color-chips-outlined-hover-border-color: #9e9e9e;
  --ds-color-chips-outlined-press-background: #e0e0e0;
  --ds-color-chips-outlined-press-border-color: #e0e0e0;
  --ds-color-dialog-background: #ffffff;
  --ds-color-dialog-content-text-color: #616161;
  --ds-color-dialog-content-title-color: #333333;
  --ds-color-dialog-header-desc-color: #616161;
  --ds-color-dialog-header-title-color: #333333;
  --ds-color-divider-dashed-default-color: #e0e0e0;
  --ds-color-divider-dashed-disable-color: #ebebeb;
  --ds-color-divider-dashed-selected-color: #448aff;
  --ds-color-divider-solid-default-color: #e0e0e0;
  --ds-color-divider-solid-disable-color: #ebebeb;
  --ds-color-divider-solid-hover-color: #448aff;
  --ds-color-divider-solid-lite-color: #e0e0e0;
  --ds-color-divider-solid-selected-color: #448aff;
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
  --ds-color-expansion-panel-table-условно-collaps-border-color: #e0e0e0;
  --ds-color-expansion-panel-table-условно-collaps-content-text-color: #333333;
  --ds-color-expansion-panel-table-условно-expand-header-bakground-header: #f8f9fc;
  --ds-color-expansion-panel-table-условно-expand-header-border-color: #e0e0e0;
  --ds-color-expansion-panel-table-условно-expand-header-icon-color: #616161;
  --ds-color-expansion-panel-table-условно-expand-header-text-color: #333333;
  --ds-color-hint-background-color: #424242;
  --ds-color-hint-content-icon-color: #ffffff;
  --ds-color-hint-content-text-color: #ffffff;
  --ds-color-hint-footer-text-color: #ffffff;
  --ds-color-hint-header-icon-color: #ffffff;
  --ds-color-hint-header-text-color: #ffffff;
  --ds-color-hint-header-accent-icon-color: #448aff;
  --ds-color-hint-header-negative-icon-color: #ff5252;
  --ds-color-hint-header-neutral-icon-color: #ffffff;
  --ds-color-hint-header-positive-icon-color: #14b456;
  --ds-color-hint-header-warning-icon-color: #ea7806;
  --ds-color-input-background-support: rgba(255, 255, 255, 0.0);
  --ds-color-input-input-filled-background: #f8f9fc;
  --ds-color-input-input-label-text-color: #616161;
  --ds-color-input-input-outlined-background: #ffffff;
  --ds-color-input-number-control-background: #ffffff;
  --ds-color-input-number-control-icon-color: #616161;
  --ds-color-input-number-control-text-color: #333333;
  --ds-color-input-number-control-default-border-color: #e0e0e0;
  --ds-color-input-number-control-disable-border-color: #ebebeb;
  --ds-color-input-number-control-disable-icon-color: #9e9e9e;
  --ds-color-input-number-control-disable-text-color: #9e9e9e;
  --ds-color-input-number-control-error-border-color: #ff5252;
  --ds-color-input-number-control-error-icon-color: #ff5252;
  --ds-color-input-number-control-focus-border-color: #448aff;
  --ds-color-input-number-control-hover-border-color: #9e9e9e;
  --ds-color-input-number-input-background: #ffffff;
  --ds-color-input-number-input-icon-color: #616161;
  --ds-color-input-number-input-text-color: #333333;
  --ds-color-input-number-input-default-border-color: #e0e0e0;
  --ds-color-input-number-input-disable-border-color: #ebebeb;
  --ds-color-input-number-input-disable-icon-color: #9e9e9e;
  --ds-color-input-number-input-disable-text-color: #9e9e9e;
  --ds-color-input-number-input-error-border-color: #ff5252;
  --ds-color-input-number-input-error-icon-color: #ff5252;
  --ds-color-input-number-input-focus-border-color: #448aff;
  --ds-color-input-number-input-hover-border-color: #9e9e9e;
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
  --ds-color-list-background: #ffffff;
  --ds-color-list-item-icon-color: #616161;
  --ds-color-list-item-text-color: #333333;
  --ds-color-list-item-text-label-color: #616161;
  --ds-color-list-item-default-background: #ffffff;
  --ds-color-list-item-disable-background: #ffffff;
  --ds-color-list-item-disable-icon-color: #9e9e9e;
  --ds-color-list-item-disable-label-text-color: #9e9e9e;
  --ds-color-list-item-disable-text-color: #9e9e9e;
  --ds-color-list-item-hover-background: #f5f5f5;
  --ds-color-list-item-link-background: #ffffff;
  --ds-color-list-item-link-text-color: #448aff;
  --ds-color-list-item-negative-background: #ffffff;
  --ds-color-list-item-negative-icon-color: #ff5252;
  --ds-color-list-item-negative-label-text-color: #ff5252;
  --ds-color-list-item-negative-text-color: #ff5252;
  --ds-color-list-item-press-background: #e0e0e0;
  --ds-color-list-item-selected-back-selected: #f5f9ff;
  --ds-color-list-item-selected-background: #ffffff;
  --ds-color-list-item-selected-icon-color: #448aff;
  --ds-color-menu-background: #ffffff;
  --ds-color-menu-item-icon-color: #616161;
  --ds-color-menu-item-text-color: #333333;
  --ds-color-menu-item-text-label-color: #616161;
  --ds-color-menu-item-default-background: #ffffff;
  --ds-color-menu-item-disable-background: #ffffff;
  --ds-color-menu-item-disable-icon-color: #9e9e9e;
  --ds-color-menu-item-disable-label-text-color: #9e9e9e;
  --ds-color-menu-item-disable-text-color: #9e9e9e;
  --ds-color-menu-item-hover-background: #f5f5f5;
  --ds-color-menu-item-negative-background: #ffffff;
  --ds-color-menu-item-negative-icon-color: #ff5252;
  --ds-color-menu-item-negative-label-text-color: #ff5252;
  --ds-color-menu-item-negative-text-color: #ff5252;
  --ds-color-menu-item-press-background: #e0e0e0;
  --ds-color-menu-item-selected-back-selected: #f5f9ff;
  --ds-color-menu-item-selected-background: #ffffff;
  --ds-color-menu-item-selected-icon-color: #448aff;
  --ds-color-radio-button-group-text-color: #333333;
  --ds-color-radio-button-group-text-disable-color: #9e9e9e;
  --ds-color-radio-button-group-text-support-color: #616161;
  --ds-color-radio-button-group-text-support-error-color: #ff5252;
  --ds-color-radio-button-label-text-color: #333333;
  --ds-color-radio-button-label-text-disable-color: #9e9e9e;
  --ds-color-radio-button-label-text-error-color: #ff5252;
  --ds-color-radio-button-label-text-support-color: #616161;
  --ds-color-radio-button-disable-background: rgba(255, 255, 255, 0.0);
  --ds-color-radio-button-disable-deselected-icon-color: #9e9e9e;
  --ds-color-radio-button-disable-selected-icon-color: #9e9e9e;
  --ds-color-radio-button-error-icon-color: #ff5252;
  --ds-color-radio-button-error-deselected-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-radio-button-error-deselected-hover-background: #ffe5e5;
  --ds-color-radio-button-error-deselected-press-background: #ffcccc;
  --ds-color-radio-button-error-selected-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-radio-button-error-selected-hover-background: #ffe5e5;
  --ds-color-radio-button-error-selected-press-background: #ffcccc;
  --ds-color-radio-button-normal-deselected-icon-color: #616161;
  --ds-color-radio-button-normal-deselected-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-radio-button-normal-deselected-hover-background: #ebebeb;
  --ds-color-radio-button-normal-deselected-press-background: #e0e0e0;
  --ds-color-radio-button-normal-selected-icon-color: #448aff;
  --ds-color-radio-button-normal-selected-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-radio-button-normal-selected-hover-background: #e8f0ff;
  --ds-color-radio-button-normal-selected-press-background: #ccdfff;
  --ds-color-scroll-background: rgba(255, 255, 255, 0.0);
  --ds-color-scroll-default-background: #fafafa;
  --ds-color-scroll-default-knob-color: #d6d6d6;
  --ds-color-scroll-hover-background: #ebebeb;
  --ds-color-scroll-hover-knob-color: #9e9e9e;
  --ds-color-search-background: #f8f9fc;
  --ds-color-search-completed-border-color: #e0e0e0;
  --ds-color-search-completed-text-color: #333333;
  --ds-color-search-default-background-xs: #f0f5ff;
  --ds-color-search-default-border-color: #e0e0e0;
  --ds-color-search-default-text-color: #d6d6d6;
  --ds-color-search-disable-background: #ebebeb;
  --ds-color-search-disable-icon-color: #9e9e9e;
  --ds-color-search-disable-text-color: #9e9e9e;
  --ds-color-search-focus-border-color: #448aff;
  --ds-color-search-focus-cursor-color: #333333;
  --ds-color-search-focus-text-color: #d6d6d6;
  --ds-color-search-focus-value-border-color: #448aff;
  --ds-color-search-focus-value-text-color: #333333;
  --ds-color-search-hover-background-xs: #e8f0ff;
  --ds-color-search-hover-border-color: #9e9e9e;
  --ds-color-search-hover-text-color: #d6d6d6;
  --ds-color-sidenav-control-background: #263136;
  --ds-color-sidenav-control-background-hover: #36474e;
  --ds-color-sidenav-control-background-press: #36474e;
  --ds-color-sidenav-control-divider: #36474e;
  --ds-color-sidenav-control-text-color: #ffffff;
  --ds-color-sidenav-element-collaps-icon-background: #36474e;
  --ds-color-sidenav-footer-l2-background: #ffffff;
  --ds-color-sidenav-footer-l2-logo: #ff5252;
  --ds-color-sidenav-footer-l2-text-color: #616161;
  --ds-color-sidenav-header-l1-background: #263136;
  --ds-color-sidenav-header-l1-collapsed-logo: #ffffff;
  --ds-color-sidenav-header-l1-collapsed-logo-element: #ff5252;
  --ds-color-sidenav-header-l1-expanded-logo: #ffffff;
  --ds-color-sidenav-header-l2-background: #ffffff;
  --ds-color-sidenav-header-l2-text-color: #333333;
  --ds-color-sidenav-item-l1-background: #263136;
  --ds-color-sidenav-item-l1-background-hover: #36474e;
  --ds-color-sidenav-item-l1-background-selected: #4b626d;
  --ds-color-sidenav-item-l1-element-left: #ffffff;
  --ds-color-sidenav-item-l1-element-right: #ffffff;
  --ds-color-sidenav-item-l1-indicator: #ffffff;
  --ds-color-sidenav-item-l1-text-color: #ffffff;
  --ds-color-sidenav-item-l2-background: #ffffff;
  --ds-color-sidenav-item-l2-background-hover: #f8f9fc;
  --ds-color-sidenav-item-l2-background-selected: #f0f5ff;
  --ds-color-sidenav-item-l2-text-color: #333333;
  --ds-color-sidenav-item-l3-background: #ffffff;
  --ds-color-sidenav-item-l3-background-active: #f0f5ff;
  --ds-color-sidenav-item-l3-background-hover: #f8f9fc;
  --ds-color-sidenav-item-l3-background-selected: #f0f5ff;
  --ds-color-sidenav-item-l3-indicator: #448aff;
  --ds-color-sidenav-item-l3-text-color: #333333;
  --ds-color-sidenav-item-l3-text-color-selected: #448aff;
  --ds-color-sidenav-sidebar-info-background-container: #f8f9fc;
  --ds-color-sidenav-sidebar-l1-background: #263136;
  --ds-color-sidenav-sidebar-l2-background: #ffffff;
  --ds-color-slide-toggle-knob-color: #ffffff;
  --ds-color-slide-toggle-text-color: #333333;
  --ds-color-slide-toggle-text-error-color: #ff5252;
  --ds-color-slide-toggle-text-support-color: #616161;
  --ds-color-slide-toggle-deselected-default-background: #9e9e9e;
  --ds-color-slide-toggle-deselected-disable-background: #e0e0e0;
  --ds-color-slide-toggle-deselected-disable-text-color: #9e9e9e;
  --ds-color-slide-toggle-deselected-hover-background: #757575;
  --ds-color-slide-toggle-selected-default-background: #448aff;
  --ds-color-slide-toggle-selected-disable-background: #e0e0e0;
  --ds-color-slide-toggle-selected-disable-text-color: #9e9e9e;
  --ds-color-slide-toggle-selected-hover-background: #3969d5;
  --ds-color-snackbar-progress-color: #448aff;
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
  --ds-color-status-background: rgba(255, 255, 255, 0.0);
  --ds-color-status-icon-color: #616161;
  --ds-color-status-accent-filled-background: #f5f9ff;
  --ds-color-status-accent-filled-text-color: #448aff;
  --ds-color-status-accent-text-text-color: #448aff;
  --ds-color-status-contrast-1-filled-background: #fcf6fd;
  --ds-color-status-contrast-1-filled-text-color: #9c27b0;
  --ds-color-status-contrast-1-text-text-color: #9c27b0;
  --ds-color-status-contrast-2-filled-background: #fcf8f6;
  --ds-color-status-contrast-2-filled-text-color: #3e261e;
  --ds-color-status-contrast-2-text-text-color: #3e261e;
  --ds-color-status-contrast-3-filled-background: #f8fafc;
  --ds-color-status-contrast-3-filled-text-color: #263136;
  --ds-color-status-contrast-3-text-text-color: #263136;
  --ds-color-status-contrast-4-filled-background: #f9fbea;
  --ds-color-status-contrast-4-filled-text-color: #4f5412;
  --ds-color-status-contrast-4-text-text-color: #4f5412;
  --ds-color-status-negative-filled-background: #fff8f8;
  --ds-color-status-negative-filled-text-color: #ff5252;
  --ds-color-status-negative-text-text-color: #ff5252;
  --ds-color-status-neutral-filled-background: #fafafa;
  --ds-color-status-neutral-filled-text-color: #616161;
  --ds-color-status-neutral-text-text-color: #616161;
  --ds-color-status-positive-filled-background: #f3fcf7;
  --ds-color-status-positive-filled-text-color: #14b456;
  --ds-color-status-positive-text-text-color: #14b456;
  --ds-color-status-warning-filled-background: #fffcf8;
  --ds-color-status-warning-filled-text-color: #ea7806;
  --ds-color-status-warning-text-text-color: #ea7806;
  --ds-color-stepper-background: rgba(255, 255, 255, 0.0);
  --ds-color-stepper-divider-color: #616161;
  --ds-color-stepper-icon-color: #616161;
  --ds-color-stepper-text-color: #333333;
  --ds-color-stepper-default-background: #fafafa;
  --ds-color-stepper-default-icon-color: #616161;
  --ds-color-stepper-default-text-color: #333333;
  --ds-color-stepper-disable-background: #fafafa;
  --ds-color-stepper-disable-icon-color: #9e9e9e;
  --ds-color-stepper-disable-text-color: #9e9e9e;
  --ds-color-stepper-error-background: #fff8f8;
  --ds-color-stepper-error-icon-color: #ff5252;
  --ds-color-stepper-error-text-color: #ff5252;
  --ds-color-stepper-hover-background: #f5f9ff;
  --ds-color-stepper-hover-icon-color: #448aff;
  --ds-color-stepper-hover-text-color: #448aff;
  --ds-color-stepper-press-background: #f0f5ff;
  --ds-color-stepper-press-icon-color: #448aff;
  --ds-color-stepper-press-text-color: #3969d5;
  --ds-color-stepper-selected-background: #f5f9ff;
  --ds-color-stepper-selected-border-color: #448aff;
  --ds-color-stepper-selected-icon-color: #448aff;
  --ds-color-stepper-selected-text-color: #448aff;
  --ds-color-tab-active-counter-text-color: #448aff;
  --ds-color-tab-active-divider: #448aff;
  --ds-color-tab-active-icon-color: #448aff;
  --ds-color-tab-active-text-color: #448aff;
  --ds-color-tab-active-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-tab-active-hover-background: #f5f5f5;
  --ds-color-tab-active-press-background: #e0e0e0;
  --ds-color-tab-disable-background: #ebebeb;
  --ds-color-tab-disable-divider: #ebebeb;
  --ds-color-tab-disable-icon-color: #9e9e9e;
  --ds-color-tab-disable-text-color: #9e9e9e;
  --ds-color-tab-innactive-counter-text-color: #333333;
  --ds-color-tab-innactive-icon-color: #616161;
  --ds-color-tab-innactive-text-color: #333333;
  --ds-color-tab-innactive-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-tab-innactive-hover-background: #f5f5f5;
  --ds-color-tab-innactive-press-background: #e0e0e0;
  --ds-color-table-cell-background: rgba(255, 255, 255, 0.0);
  --ds-color-table-cell-text-color: #333333;
  --ds-color-table-cell-content-background: rgba(255, 255, 255, 0.0);
  --ds-color-table-cell-content-default-background: rgba(255, 255, 255, 0.0);
  --ds-color-table-cell-content-disable-text-color: #9e9e9e;
  --ds-color-table-cell-content-edit-border-color: #448aff;
  --ds-color-table-cell-content-error-border-color: #ff5252;
  --ds-color-table-cell-content-focus-border-color: #448aff;
  --ds-color-table-cell-content-hover-background: #f5f5f5;
  --ds-color-table-cell-content-hover-border-color: #9e9e9e;
  --ds-color-table-cell-header-background: rgba(255, 255, 255, 0.0);
  --ds-color-table-cell-header-default-background: #f0f5ff;
  --ds-color-table-cell-header-disable-background: #f0f5ff;
  --ds-color-table-cell-header-disable-icon-color: #9e9e9e;
  --ds-color-table-cell-header-disable-text-color: #9e9e9e;
  --ds-color-table-cell-header-hover-background: #f8f9fc;
  --ds-color-table-footer-background: #ffffff;
  --ds-color-table-row-content-border-color: #e0e0e0;
  --ds-color-table-row-content-default-background: #ffffff;
  --ds-color-table-row-content-hover-background: #f5f5f5;
  --ds-color-table-row-content-selected-background: #ebebeb;
  --ds-color-table-row-content-zebra-background: #f5f5f5;
  --ds-color-table-row-header-background-header: #f0f5ff;
  --ds-color-text-ui-icon-color: #616161;
  --ds-color-text-ui-text-color: #333333;
  --ds-color-text-ui-text-label-color: #616161;
  --ds-color-text-ui-text-placeholder: #d6d6d6;
  --ds-color-text-ui-default-background: #ffffff;
  --ds-color-text-ui-disable-background: #ffffff;
  --ds-color-text-ui-disable-icon-color: #9e9e9e;
  --ds-color-text-ui-disable-label-text-color: #9e9e9e;
  --ds-color-text-ui-disable-text-color: #9e9e9e;
  --ds-color-text-ui-hover-background: #f5f5f5;
  --ds-color-text-ui-link-background: #ffffff;
  --ds-color-text-ui-link-text-color: #448aff;
  --ds-color-text-ui-negative-background: #ffffff;
  --ds-color-text-ui-negative-icon-color: #ff5252;
  --ds-color-text-ui-negative-label-text-color: #ff5252;
  --ds-color-text-ui-negative-text-color: #ff5252;
  --ds-color-text-ui-press-background: #e0e0e0;
  --ds-color-text-ui-selected-back-selected: #f5f9ff;
  --ds-color-text-ui-selected-background: #ffffff;
  --ds-color-text-ui-selected-icon-color: #448aff;

  /* ── Base Size ──────────────────────────────────────── */
  --ds-size-0: 0px;
  --ds-size-0-25x: 1px;
  --ds-size-0-5x: 2px;
  --ds-size-1x: 4px;
  --ds-size-1-5x: 6px;
  --ds-size-2x: 8px;
  --ds-size-2-5x: 10px;
  --ds-size-3x: 12px;
  --ds-size-3-5x: 14px;
  --ds-size-4x: 16px;
  --ds-size-5x: 20px;
  --ds-size-6x: 24px;
  --ds-size-7x: 28px;
  --ds-size-8x: 32px;
  --ds-size-8-5x: 34px;
  --ds-size-9x: 36px;
  --ds-size-10x: 40px;
  --ds-size-circular: 9999px;

  /* ── Space ──────────────────────────────────────── */
  --ds-space-0: 0px;
  --ds-space-0-5x: 2px;
  --ds-space-1x: 4px;
  --ds-space-1-5x: 6px;
  --ds-space-2x: 8px;
  --ds-space-2-5x: 10px;
  --ds-space-3x: 12px;
  --ds-space-3-5x: 14px;
  --ds-space-4x: 16px;
  --ds-space-5x: 20px;
  --ds-space-6x: 24px;
  --ds-space-7x: 28px;
  --ds-space-8x: 32px;

  /* ── Radius ──────────────────────────────────────── */
  --ds-radius-0: 0px;
  --ds-radius-0-5x: 2px;
  --ds-radius-1x: 4px;
  --ds-radius-1-5x: 6px;
  --ds-radius-2x: 8px;
  --ds-radius-3x: 12px;
  --ds-radius-4x: 16px;
  --ds-radius-6x: 24px;
  --ds-radius-circular: 9999px;

  /* ── Base Stroke ──────────────────────────────────── */
  --ds-stroke-0-25x: 1px;
  --ds-stroke-dash: 1px;
  --ds-stroke-pad: 1px;
  --ds-stroke-0-5x: 2px;
  --ds-stroke-1x: 4px;

  /* ── Типографика (Typography) ─────────────────────── */
  --ds-typography-body-font-size-s: 14px;
  --ds-typography-body-font-size-m: 16px;
  --ds-typography-body-font-size-l: 18px;
  --ds-typography-body-line-height-s: 20px;
  --ds-typography-body-line-height-l: 24px;
  --ds-typography-body-line-height-m: 24px;
  --ds-typography-caption-font-size-s: 8px;
  --ds-typography-caption-font-size-m: 10px;
  --ds-typography-caption-font-size-l: 12px;
  --ds-typography-caption-line-height-s: 10px;
  --ds-typography-caption-line-height-m: 12px;
  --ds-typography-caption-line-height-l: 16px;
  --ds-typography-header-font-size-s: 20px;
  --ds-typography-header-font-size-m: 24px;
  --ds-typography-header-font-size-l: 34px;
  --ds-typography-header-line-height-s: 28px;
  --ds-typography-header-line-height-m: 32px;
  --ds-typography-header-line-height-l: 40px;
  --ds-typography-letter-spacing-none: 0px;
  --ds-typography-letter-spacing-s: 0.5px;
  --ds-typography-letter-spacing-m: 1px;

  /* ── Базовая типографика (Base Typography) ─────────── */
  --ds-typography-font-size-2x: 8px;
  --ds-typography-font-size-2-5x: 10px;
  --ds-typography-font-size-3x: 12px;
  --ds-typography-font-size-3-5x: 14px;
  --ds-typography-font-size-4x: 16px;
  --ds-typography-font-size-4-5x: 18px;
  --ds-typography-font-size-5x: 20px;
  --ds-typography-font-size-6x: 24px;
  --ds-typography-font-size-8-5x: 34px;
  --ds-typography-font-weight-regular: 400;
  --ds-typography-font-weight-medium: 500;
  --ds-typography-letter-spacing-none: 0px;
  --ds-typography-letter-spacing-0-125x: 0.5px;
  --ds-typography-letter-spacing-0-25x: 1px;
  --ds-typography-line-height-2-5x: 10px;
  --ds-typography-line-height-3x: 12px;
  --ds-typography-line-height-4x: 16px;
  --ds-typography-line-height-5x: 20px;
  --ds-typography-line-height-6x: 24px;
  --ds-typography-line-height-7x: 28px;
  --ds-typography-line-height-8x: 32px;
  --ds-typography-line-height-10x: 40px;

  /* ── Тени (Shadows) ────────────────────────────────── */
  --ds-shadow-sl: 0px 2px 2px 0px rgba(33, 33, 33, 0.039), 0px 0px 4px 0px rgba(33, 33, 33, 0.122);
  --ds-shadow-s: 0px 4px 6px 0px rgba(33, 33, 33, 0.102), 0px 0px 16px 0px rgba(33, 33, 33, 0.122);
  --ds-shadow-m: 0px 10px 24px 0px rgba(33, 33, 33, 0.122), 0px 0px 28px 0px rgba(33, 33, 33, 0.122);
  --ds-shadow-xl: 0px 12px 16px 0px rgba(33, 33, 33, 0.161), 0px 0px 32px 0px rgba(33, 33, 33, 0.161);
}

```

### Стили компонентов

Порядок важен: сначала автоген всех компонентов, затем ВЫВЕРЕННЫЕ вручную файлы — они должны перекрывать автоген, а не наоборот.

```css
/* ============================================================
   iiko DS — компоненты (все 111, сгенерировано из Figma)
   Классы: .ds-<компонент> + модификаторы --<вариант>
   Все значения — только токены из tokens.css
   ============================================================ */

/* Arrow [55939:14119] — 13 вариантов */
.ds-arrow {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-brand-neutral-default);
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

/* Arrow list [55939:13307] — 13 вариантов */
.ds-arrow-list {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-list-background);
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

/* Arrow menu [56090:1628] — 13 вариантов */
.ds-arrow-menu {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-menu-background);
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

/* Arrow select [57735:17989] — 13 вариантов */
.ds-arrow-select {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-brand-neutral-default);
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

/* Autocomplete form [58107:8230] — 10 вариантов */
.ds-autocomplete-form {
  height: 48px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-brand-neutral-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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
.ds-autocomplete-form--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Backdrop [53623:806] — 1 вариантов */
.ds-backdrop {
  height: 240px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-backdrop-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* Button icon [17123:81299] — 153 вариантов */
.ds-button-icon {
  height: var(--ds-size-9x);
  width: var(--ds-size-9x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-button-accent-default);
  box-shadow: 0.0px 0.0px 4.0px 0px #2121211f;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-button-icon__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-button-icon__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-button-icon__icon svg path {
  fill: currentColor;
}
.ds-button-icon--m {
  background: var(--ds-color-button-accent-lite-default);
}
.ds-button-icon--s {
  height: var(--ds-size-7x);
  width: var(--ds-size-7x);
  padding: var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x);
  background: var(--ds-color-button-accent-lite-default);
}
.ds-button-icon--xs {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  padding: var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x);
  background: var(--ds-color-button-accent-lite-default);
}
.ds-button-icon--negative {
  background: var(--ds-color-button-negative-default);
}
.ds-button-icon--neutral {
  background: var(--ds-color-button-accent-lite-default);
}
.ds-button-icon--positive {
  background: var(--ds-color-button-positive-default);
}
.ds-button-icon--warning {
  background: var(--ds-color-button-warning-default);
}
.ds-button-icon--filled {
  background: var(--ds-color-button-accent-lite-default);
}
.ds-button-icon--outlined {
  background: var(--ds-color-button-accent-lite-default);
  border: 1px solid var(--ds-color-button-icon-neutral-outlined-border-color);
}
.ds-button-icon--default {
  background: var(--ds-color-button-accent-lite-default);
}
.ds-button-icon--disable {
  background: var(--ds-color-button-neutral-disable);
}
.ds-button-icon--hover {
  background: var(--ds-color-button-neutral-hover);
}
.ds-button-icon--loading {
  height: var(--ds-size-8x);
  width: var(--ds-size-8x);
  background: var(--ds-color-button-neutral-disable);
}
.ds-button-icon--press {
  background: var(--ds-color-button-neutral-disable);
}
.ds-button-icon:hover {
  background: var(--ds-color-button-neutral-hover);
}
.ds-button-icon:active {
  background: var(--ds-color-button-neutral-disable);
}
.ds-button-icon:disabled {
  background: var(--ds-color-button-neutral-disable);
}
.ds-button-icon--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Button icon group [53828:5738] — 2 вариантов */
.ds-button-icon-group {
  height: var(--ds-size-9x);
  width: 124px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-button-icon-group__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-button-icon-group__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-button-icon-group__icon svg path {
  fill: currentColor;
}
.ds-button-icon-group--vertically {
  height: 124px;
  width: var(--ds-size-9x);
}

/* Button New [16321:6498] — 2 вариантов */
.ds-button-new {
  height: var(--ds-size-9x);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2-5x) var(--ds-size-2-5x);
  background: var(--ds-color-button-accent-lite-default);
  box-shadow: 0.0px 0.0px 4.0px 0px #2121211f;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-button-new__label {
  font-size: var(--ds-typography-body-font-size-s);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: var(--ds-typography-caption-line-height-l);
  letter-spacing: 1.25px;
  color: var(--ds-palette-neutral-950);
  white-space: nowrap;
}
.ds-button-new--btn-28 {
  height: var(--ds-size-7x);
  width: 66px;
  padding: var(--ds-size-3x) var(--ds-size-3x) var(--ds-size-1-5x) var(--ds-size-1-5x);
  background: var(--ds-color-button-accent-default);
}
.ds-button-new--btn-36 {
  width: 95px;
}

/* Button toggle [17039:71554] — 12 вариантов */
.ds-button-toggle {
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-1x);
  padding: var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-button-accent-lite-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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
.ds-button-toggle--s {
  height: var(--ds-size-9x);
  width: 100px;
  border: 1px solid var(--ds-color-button-icon-neutral-outlined-border-color);
}
.ds-button-toggle--xs {
  height: var(--ds-size-8x);
  width: 88px;
  border: 1px solid var(--ds-color-button-icon-neutral-outlined-border-color);
}
.ds-button-toggle--outlined {
  border: 1px solid var(--ds-color-button-icon-neutral-outlined-border-color);
}
.ds-button-toggle--icon {
  width: 124px;
  border: 1px solid var(--ds-color-button-icon-neutral-outlined-border-color);
}

/* Checkbox label [53810:880] — 9 вариантов */
.ds-checkbox-label {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-1x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-checkbox-label__label {
  font-size: var(--ds-typography-body-font-size-s);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-body-line-height-s);
  letter-spacing: 0.25px;
  color: var(--ds-color-checkbox-group-text-color);
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

/* Chips [17168:83542] — 18 вариантов */
.ds-chips {
  height: var(--ds-size-8x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-1-5x) var(--ds-size-1-5x);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-chips-input-default-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips__label {
  font-size: var(--ds-typography-body-font-size-s);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-body-line-height-s);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-chips-text-color);
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
.ds-chips--m {
  width: 132px;
  background: var(--ds-color-chips-disable-background-outlined);
  border: 1px solid var(--ds-color-chips-input-default-border-color);
}
.ds-chips--s {
  height: var(--ds-size-6x);
  width: 104px;
  gap: var(--ds-size-1x);
  padding: var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1x) var(--ds-size-1x);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-chips-disable-background-outlined);
  border: 1px solid var(--ds-color-chips-input-default-border-color);
}
.ds-chips--filled {
  width: 132px;
}
.ds-chips--outlined {
  width: 132px;
  background: var(--ds-color-chips-disable-background-outlined);
  border: 1px solid var(--ds-color-chips-input-default-border-color);
}
.ds-chips--default {
  width: 132px;
  background: var(--ds-color-chips-disable-background-outlined);
  border: 1px solid var(--ds-color-chips-input-default-border-color);
}
.ds-chips--disable {
  width: 132px;
  background: var(--ds-color-chips-disable-background-outlined);
  border: 1px solid var(--ds-color-chips-input-disable-border-color);
}
.ds-chips--focus {
  width: 136px;
  background: var(--ds-color-chips-disable-background-outlined);
}
.ds-chips--hover {
  width: 132px;
  background: var(--ds-color-chips-disable-background-outlined);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips--press {
  width: 132px;
  background: var(--ds-color-chips-input-default-border-color);
  border: 1px solid var(--ds-color-chips-input-default-border-color);
}
.ds-chips:hover {
  background: var(--ds-color-chips-disable-background-outlined);
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips:active {
  background: var(--ds-color-chips-input-default-border-color);
  border: 1px solid var(--ds-color-chips-input-default-border-color);
}
.ds-chips:disabled {
  background: var(--ds-color-chips-disable-background-outlined);
  border: 1px solid var(--ds-color-chips-input-disable-border-color);
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips:focus-visible {
  background: var(--ds-color-chips-disable-background-outlined);
}
.ds-chips--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Chips group [55750:5485] — 2 вариантов */
.ds-chips-group {
  height: var(--ds-size-8x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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
.ds-chips-group--s {
  height: var(--ds-size-6x);
}

/* Chips Input [52916:14622] — 16 вариантов */
.ds-chips-input {
  height: 64px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-1x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips-input__label {
  font-size: var(--ds-typography-caption-font-size-l);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-caption-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-chips-icon-color);
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
.ds-chips-input--s {
  height: var(--ds-size-9x);
}
.ds-chips-input:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input:focus-visible {
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-chips-input--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Chips Input [61382:55775] — 16 вариантов (ДУБЛЬ имени: второй сет «Chips Input»,
   первый — [52916:14622] → .ds-chips-input; различать по node_id) */
.ds-chips-input-2 {
  height: 80px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-1x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chips-input-2__label {
  font-size: var(--ds-typography-caption-font-size-l);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-caption-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-chips-icon-color);
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
.ds-chips-input-2--s {
  height: var(--ds-size-9x);
}
.ds-chips-input-2:disabled {
  color: var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input-2:focus-visible {
  color: var(--ds-color-chips-input-focus-border-color);
}
.ds-chips-input-2--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Chips input cell [60231:75648] — 8 вариантов */
.ds-chips-input-cell {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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
.ds-chips-input-cell--error {
  border: 1px solid var(--ds-color-chips-input-error-border-color);
}
.ds-chips-input-cell--error-hover {
  background: var(--ds-color-chips-input-disable-background);
  border: 1px solid var(--ds-color-chips-input-error-border-color);
}
.ds-chips-input-cell--hover {
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input-cell:hover {
  border: 1px solid var(--ds-color-chips-input-disable-action-text-color);
}
.ds-chips-input-cell--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Chrome Header desktop [56564:1013] — 1 вариантов */
.ds-chrome-header-desktop {
  height: 86px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* Chrome Header mobile [56564:1062] — 2 вариантов */
.ds-chrome-header-mobile {
  height: 66px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-brand-neutral-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-chrome-header-mobile__label {
  font-size: var(--ds-typography-caption-font-size-m);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: 13px;
  color: var(--ds-color-brand-neutral-super-dark);
  white-space: nowrap;
}
.ds-chrome-header-mobile--on {
  background: var(--ds-color-brand-neutral-super-dark);
}

/* Content [57375:12699] — 1 вариантов */
.ds-content {
  height: 750px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-4x);
  padding: var(--ds-size-6x) var(--ds-size-6x) var(--ds-size-4x) var(--ds-size-6x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-content__label {
  font-size: var(--ds-typography-header-font-size-s);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-header-line-height-s);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-brand-neutral-super-dark);
  white-space: nowrap;
}

/* Control arrow button [52868:3935] — 3 вариантов */
.ds-control-arrow-button {
  height: var(--ds-size-9x);
  width: var(--ds-size-5x);
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
.ds-control-arrow-button--s {
  height: var(--ds-size-8x);
  width: 18px;
}
.ds-control-arrow-button--xs {
  height: var(--ds-size-6x);
  width: var(--ds-size-3x);
}

/* Control group number button [53828:5569] — 2 вариантов */
.ds-control-group-number-button {
  height: var(--ds-size-9x);
  width: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-0-25x);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-brand-neutral-super-light);
  border: 1px solid var(--ds-color-button-icon-neutral-outlined-border-color);
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
.ds-control-group-number-button--xs {
  height: var(--ds-size-6x);
  width: 49px;
}

/* Control number button [53829:6130] — 16 вариантов */
.ds-control-number-button {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x) var(--ds-size-1x);
  background: var(--ds-color-button-accent-lite-default);
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
.ds-control-number-button--s {
  height: var(--ds-size-9x);
  width: var(--ds-size-8x);
  padding: var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2-5x) var(--ds-size-2-5x);
}
.ds-control-number-button--disable {
  background: var(--ds-color-button-neutral-disable);
}
.ds-control-number-button--hover {
  background: var(--ds-color-button-neutral-hover);
}
.ds-control-number-button--press {
  background: var(--ds-color-button-neutral-disable);
}
.ds-control-number-button:hover {
  background: var(--ds-color-button-neutral-hover);
}
.ds-control-number-button:active {
  background: var(--ds-color-button-neutral-disable);
}
.ds-control-number-button:disabled {
  background: var(--ds-color-button-neutral-disable);
}
.ds-control-number-button--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Control Panel [58501:4052] — 3 вариантов */
.ds-control-panel {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 74px;
  padding: 0 0 var(--ds-size-1x) var(--ds-size-1x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-control-panel__label {
  font-size: var(--ds-typography-body-font-size-s);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: var(--ds-typography-body-line-height-s);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-brand-neutral-super-dark);
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
.ds-control-panel--calendar {
  height: 228px;
  background: var(--ds-color-brand-neutral-default);
}
.ds-control-panel--week {
  height: 44px;
  padding: 0 0 var(--ds-size-0-5x) var(--ds-size-0-5x);
}

/* Control Panel [58982:11018] — 2 вариантов (ДУБЛЬ имени: второй сет «Control Panel»,
   первый — [58501:4052] → .ds-control-panel; различать по node_id) */
.ds-control-panel-2 {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 74px;
  padding: 0 0 var(--ds-size-1x) var(--ds-size-1x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-control-panel-2__label {
  font-size: var(--ds-typography-body-font-size-s);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-body-line-height-s);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-brand-neutral-super-dark);
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
.ds-control-panel-2--time {
  height: 44px;
  padding: 0 0 var(--ds-size-0-5x) var(--ds-size-0-5x);
}

/* Datepicker [58509:5439] — 3 вариантов */
.ds-datepicker {
  height: 337px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-3x);
  border: 1px solid var(--ds-color-brand-neutral-lighter);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-datepicker__label {
  font-size: var(--ds-typography-body-font-size-s);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: var(--ds-typography-body-line-height-s);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-brand-neutral-super-dark);
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
.ds-datepicker--month {
  height: 248px;
}
.ds-datepicker--year {
  height: 292px;
}

/* Dialog content [53535:1369] — 1 вариантов */
.ds-dialog-content {
  height: 204px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-dialog-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-content__label {
  font-size: var(--ds-typography-body-font-size-m);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: var(--ds-typography-body-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-dialog-content-title-color);
  white-space: nowrap;
}
.ds-dialog-content__icon {
  flex-shrink: 0;
  width: 11.999999380380132px;
  height: 204.00000052453623px;
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

/* Dialog footer [53749:638] — 1 вариантов */
.ds-dialog-footer {
  height: 69px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-dialog-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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

/* Dialog header [53535:1322] — 2 вариантов */
.ds-dialog-header {
  height: 93px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-dialog-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-header__label {
  font-size: var(--ds-typography-header-font-size-s);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: var(--ds-typography-header-line-height-s);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-dialog-content-title-color);
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
.ds-dialog-header--picture {
  height: 200px;
}

/* Dialog view [52952:1285] — 1 вариантов */
.ds-dialog-view {
  height: 364px;
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-dialog-background);
  box-shadow: 0.0px 0.0px 28.0px 0px #2121211f;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-dialog-view__label {
  font-size: var(--ds-typography-body-font-size-m);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-body-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-dialog-content-text-color);
  white-space: nowrap;
}
.ds-dialog-view__icon {
  flex-shrink: 0;
  width: 11.999999380380359px;
  height: 204.00000052453623px;
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

/* Element [54104:20956] — 9 вариантов */
.ds-element {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: var(--ds-color-brand-neutral-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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
.ds-element--checkbox {
  height: var(--ds-size-5x);
  width: var(--ds-size-5x);
}
.ds-element--counter {
  height: var(--ds-size-3-5x);
  width: var(--ds-size-5x);
}
.ds-element--icon-group {
  height: var(--ds-size-5x);
  width: 76px;
}
.ds-element--icon-size {
  height: var(--ds-size-5x);
  width: var(--ds-size-5x);
}
.ds-element--radio-button {
  height: var(--ds-size-5x);
  width: var(--ds-size-5x);
}
.ds-element--slide-toggle {
  height: var(--ds-size-5x);
  width: var(--ds-size-8-5x);
}
.ds-element--text-default {
  height: var(--ds-size-5x);
  width: 86px;
}

/* Element cell [58885:32432] — 11 вариантов */
.ds-element-cell {
  height: var(--ds-size-5x);
  width: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--ds-color-brand-neutral-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-cell__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-element-cell__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-element-cell__icon svg path {
  fill: currentColor;
}
.ds-element-cell--button {
  height: var(--ds-size-6x);
  width: 91px;
}
.ds-element-cell--button-icon {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
}
.ds-element-cell--chips {
  height: var(--ds-size-6x);
  width: 104px;
}
.ds-element-cell--icon-group {
  width: 76px;
}
.ds-element-cell--input-number {
  height: var(--ds-size-7x);
  width: 123px;
}
.ds-element-cell--slide-toggle {
  width: 72px;
}
.ds-element-cell--status {
  height: var(--ds-size-6x);
  width: 116px;
}
.ds-element-cell--text-ui {
  height: 52px;
}

/* Element Form Field [60231:76795] — 3 вариантов */
.ds-element-form-field {
  height: var(--ds-size-9x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-brand-neutral-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-element-form-field--chips-input-cell {
  height: var(--ds-size-10x);
}

/* Element left [59851:11313] — 5 вариантов */
.ds-element-left {
  height: var(--ds-size-5x);
  width: var(--ds-size-5x);
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

/* Element menu [56090:1611] — 8 вариантов */
.ds-element-menu {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: var(--ds-color-menu-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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
.ds-element-menu--checkbox {
  height: var(--ds-size-5x);
  width: var(--ds-size-5x);
}
.ds-element-menu--counter {
  height: var(--ds-size-3-5x);
  width: var(--ds-size-5x);
}
.ds-element-menu--icon-size {
  height: var(--ds-size-5x);
  width: var(--ds-size-5x);
}
.ds-element-menu--radio-button {
  height: var(--ds-size-5x);
  width: var(--ds-size-5x);
}
.ds-element-menu--slide-toggle {
  height: var(--ds-size-5x);
  width: var(--ds-size-8-5x);
}
.ds-element-menu--text-default {
  height: var(--ds-size-5x);
  width: 80px;
}

/* Element select [57735:17972] — 8 вариантов */
.ds-element-select {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: var(--ds-color-brand-neutral-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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
.ds-element-select--checkbox {
  height: var(--ds-size-5x);
  width: var(--ds-size-5x);
}
.ds-element-select--counter {
  height: var(--ds-size-3-5x);
  width: var(--ds-size-5x);
}
.ds-element-select--icon-size {
  height: var(--ds-size-5x);
  width: var(--ds-size-5x);
}
.ds-element-select--radio-button {
  height: var(--ds-size-5x);
  width: var(--ds-size-5x);
}
.ds-element-select--slide-toggle {
  height: var(--ds-size-5x);
  width: var(--ds-size-8-5x);
}
.ds-element-select--text-default {
  height: var(--ds-size-5x);
  width: 80px;
}

/* Element sidenav [56598:2991] — 2 вариантов */
.ds-element-sidenav {
  height: var(--ds-size-5x);
  width: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  border-radius: var(--ds-size-1x);
  background: var(--ds-color-sidenav-control-background-hover);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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
.ds-element-sidenav--avatar {
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-0-5x) var(--ds-size-0-5x) 3px 3px;
}

/* Element step [55403:7248] — 12 вариантов */
.ds-element-step {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  background: var(--ds-color-brand-neutral-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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
.ds-element-step:hover {
  color: var(--ds-color-brand-neutral-default);
}
.ds-element-step:active {
  color: var(--ds-color-brand-neutral-default);
}
.ds-element-step:disabled {
  color: var(--ds-color-brand-neutral-neutral);
}
.ds-element-step--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Elementare cell [60220:72578] — 10 вариантов */
.ds-elementare-cell {
  height: var(--ds-size-5x);
  width: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--ds-color-brand-neutral-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-elementare-cell__icon {
  flex-shrink: 0;
  width: var(--ds-size-5x);
  height: var(--ds-size-5x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-elementare-cell__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-elementare-cell__icon svg path {
  fill: currentColor;
}
.ds-elementare-cell--button {
  height: var(--ds-size-6x);
  width: 91px;
}
.ds-elementare-cell--button-icon {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
}
.ds-elementare-cell--chips {
  height: var(--ds-size-6x);
  width: 104px;
}
.ds-elementare-cell--icon-group {
  width: 76px;
}
.ds-elementare-cell--input-number {
  height: var(--ds-size-7x);
  width: 123px;
}
.ds-elementare-cell--slide-toggle {
  width: 72px;
}
.ds-elementare-cell--status {
  height: var(--ds-size-6x);
  width: 116px;
}
.ds-elementare-cell--text-ui {
  height: 52px;
}

/* Elements [58501:4220] — 30 вариантов */
.ds-elements {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: var(--ds-size-circular);
  background: var(--ds-color-brand-neutral-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-elements__label {
  font-size: var(--ds-typography-body-font-size-m);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-body-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-brand-neutral-super-dark);
  white-space: nowrap;
}
.ds-elements--cell {
  width: var(--ds-size-10x);
}
.ds-elements--month {
  width: 71px;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2x) var(--ds-size-1x) var(--ds-size-2-5x) var(--ds-size-2-5x);
}
.ds-elements--year {
  width: 70px;
}
.ds-elements--default {
  width: var(--ds-size-10x);
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2-5x) var(--ds-size-2-5x) var(--ds-size-2x) var(--ds-size-2x);
}
.ds-elements--range {
  width: var(--ds-size-10x);
}
.ds-elements--selected {
  width: var(--ds-size-10x);
}
.ds-elements--today {
  width: var(--ds-size-10x);
  gap: var(--ds-size-2-5x);
  border: 1px solid var(--ds-color-brand-neutral-neutral);
}
.ds-elements--default {
  width: var(--ds-size-10x);
}
.ds-elements--disable {
  width: var(--ds-size-10x);
  gap: var(--ds-size-2-5x);
  background: var(--ds-color-brand-neutral-lighter);
  border: 1px solid var(--ds-color-brand-neutral-neutral);
}
.ds-elements--hover {
  width: var(--ds-size-10x);
}
.ds-elements--press {
  width: var(--ds-size-10x);
}
.ds-elements:hover {
  color: var(--ds-color-brand-neutral-default);
}
.ds-elements:active {
  background: var(--ds-color-brand-accent-darker);
  color: var(--ds-color-brand-neutral-default);
}
.ds-elements:disabled {
  background: var(--ds-color-brand-neutral-lighter);
  border: 1px solid var(--ds-color-brand-neutral-neutral);
  color: var(--ds-color-brand-neutral-neutral);
}
.ds-elements--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Elements [58982:9594] — 8 вариантов (ДУБЛЬ имени: второй сет «Elements»,
   первый — [58501:4220] → .ds-elements; различать по node_id) */
.ds-elements-2 {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-elements-2__label {
  font-size: var(--ds-typography-body-font-size-m);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-body-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-brand-neutral-default);
  white-space: nowrap;
}
.ds-elements-2--default {
  width: 74px;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-circular);
  background: var(--ds-color-brand-neutral-default);
}
.ds-elements-2--selected {
  width: 74px;
}
.ds-elements-2--default {
  width: 74px;
}
.ds-elements-2--disable {
  width: 74px;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
}
.ds-elements-2--hover {
  width: 74px;
}
.ds-elements-2--press {
  width: 74px;
}
.ds-elements-2--range {
  width: 74px;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  background: var(--ds-color-brand-accent-lighter);
}
.ds-elements-2:hover {
  background: var(--ds-color-brand-neutral-super-light);
  color: var(--ds-color-brand-neutral-super-dark);
}
.ds-elements-2:active {
  background: var(--ds-color-brand-neutral-lighter);
  color: var(--ds-color-brand-neutral-super-dark);
}
.ds-elements-2:disabled {
  color: var(--ds-color-brand-neutral-neutral);
}
.ds-elements-2--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Expansion content [61361:99603] — 2 вариантов */
.ds-expansion-content {
  height: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-4x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-expansion-content__label {
  font-size: var(--ds-typography-body-font-size-s);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-body-line-height-s);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-expansion-panel-block-collaps-content-text-color);
  white-space: nowrap;
}
.ds-expansion-content--false {
  height: var(--ds-size-5x);
}

/* Expansion group panel [56155:1676] — 2 вариантов */
.ds-expansion-group-panel {
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-expansion-group-panel--expand {
  height: 408px;
}

/* Form field cell [60220:72732] — 1 вариантов */
.ds-form-field-cell {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  background: var(--ds-color-brand-neutral-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* Header components [53535:1244] — 2 вариантов */
.ds-header-components {
  height: 136px;
  display: flex;
  flex-direction: column;
  padding: var(--ds-size-6x) var(--ds-size-6x) var(--ds-size-6x) var(--ds-size-6x);
  border-radius: var(--ds-size-8x);
  background: var(--ds-color-brand-neutral-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-header-components__label {
  font-size: var(--ds-typography-header-font-size-l);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: var(--ds-typography-header-line-height-l);
  color: var(--ds-color-brand-neutral-super-dark);
  white-space: nowrap;
}
.ds-header-components--mini {
  height: 88px;
  gap: var(--ds-size-6x);
  border-radius: var(--ds-size-6x);
  background: var(--ds-color-brand-neutral-super-light);
}

/* Hint container [54593:479] — 10 вариантов */
.ds-hint-container {
  height: 124px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var(--ds-size-2x);
  box-shadow: 0.0px 0.0px 16.0px 0px #2121211f;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-container__label {
  font-size: var(--ds-typography-body-font-size-s);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: var(--ds-typography-body-line-height-s);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-hint-content-icon-color);
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
.ds-hint-container--single {
  height: var(--ds-size-10x);
}
.ds-hint-container--default {
  height: 120px;
}
.ds-hint-container--left {
  height: 120px;
}
.ds-hint-container--right {
  height: 120px;
}

/* Hint content [54713:3325] — 2 вариантов */
.ds-hint-content {
  height: 52px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-3x) var(--ds-size-3x) var(--ds-size-2x) var(--ds-size-2x);
  background: var(--ds-color-hint-background-color);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-content__label {
  font-size: var(--ds-typography-caption-font-size-l);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-caption-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-hint-content-icon-color);
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
.ds-hint-content--single-content {
  height: var(--ds-size-9x);
}

/* Hint footer [54600:517] — 1 вариантов */
.ds-hint-footer {
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-3x);
  padding: var(--ds-size-3x) var(--ds-size-3x) var(--ds-size-4x) var(--ds-size-3x);
  background: var(--ds-color-hint-background-color);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-footer__label {
  font-size: var(--ds-typography-body-font-size-s);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: var(--ds-typography-body-line-height-s);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-hint-content-icon-color);
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

/* Hint header [54594:2219] — 5 вариантов */
.ds-hint-header {
  height: var(--ds-size-8x);
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-3x) var(--ds-size-3x) var(--ds-size-2x) var(--ds-size-1x);
  background: var(--ds-color-hint-background-color);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-hint-header__label {
  font-size: var(--ds-typography-body-font-size-s);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: var(--ds-typography-body-line-height-s);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-hint-content-icon-color);
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

/* Icon group [53467:1060] — 2 вариантов */
.ds-icon-group {
  height: var(--ds-size-5x);
  width: 76px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
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
  width: 92px;
  gap: var(--ds-size-4x);
}

/* Icon size [52927:6286] — 12 вариантов */
.ds-icon-size {
  height: var(--ds-size-4x);
  width: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-icon-size__icon {
  flex-shrink: 0;
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-icon-size__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-icon-size__icon svg path {
  fill: currentColor;
}
.ds-icon-size--20 {
  height: var(--ds-size-5x);
  width: var(--ds-size-5x);
}
.ds-icon-size--24 {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
}
.ds-icon-size--32 {
  height: var(--ds-size-8x);
  width: var(--ds-size-8x);
}
.ds-icon-size--36 {
  height: var(--ds-size-9x);
  width: var(--ds-size-9x);
}
.ds-icon-size--40 {
  height: var(--ds-size-10x);
  width: var(--ds-size-10x);
}

/* Icon size_Draft [54063:12911] — 6 вариантов */
.ds-icon-size-draft {
  height: var(--ds-size-4x);
  width: var(--ds-size-4x);
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-icon-size-draft__icon {
  flex-shrink: 0;
  width: var(--ds-size-4x);
  height: var(--ds-size-4x);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.ds-icon-size-draft__icon svg {
  width: 100%;
  height: 100%;
  display: block;
}
.ds-icon-size-draft__icon svg path {
  fill: currentColor;
}
.ds-icon-size-draft--20 {
  height: var(--ds-size-5x);
  width: var(--ds-size-5x);
}
.ds-icon-size-draft--24 {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
}
.ds-icon-size-draft--32 {
  height: var(--ds-size-8x);
  width: var(--ds-size-8x);
}
.ds-icon-size-draft--36 {
  height: var(--ds-size-9x);
  width: var(--ds-size-9x);
}
.ds-icon-size-draft--40 {
  height: var(--ds-size-10x);
  width: var(--ds-size-10x);
}

/* Input cell [60229:74436] — 8 вариантов */
.ds-input-cell {
  height: var(--ds-size-9x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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
.ds-input-cell--error {
  border: 1px solid var(--ds-color-input-number-control-error-border-color);
}
.ds-input-cell--error-hover {
  background: var(--ds-color-input-filled-disable-input-background);
  border: 1px solid var(--ds-color-input-number-control-error-border-color);
}
.ds-input-cell--hover {
  background: var(--ds-color-input-filled-disable-input-background);
  border: 1px solid var(--ds-color-input-number-control-disable-icon-color);
}
.ds-input-cell:hover {
  background: var(--ds-color-input-filled-disable-input-background);
  border: 1px solid var(--ds-color-input-number-control-disable-icon-color);
}
.ds-input-cell--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Input Datepicker [58548:4764] — 2 вариантов */
.ds-input-datepicker {
  height: 48px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-input-input-outlined-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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

/* Input for number [53827:5155] — 10 вариантов */
.ds-input-for-number {
  height: var(--ds-size-9x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-1x);
  padding: var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-input-input-outlined-background);
  border: 1px solid var(--ds-color-input-number-control-default-border-color);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-for-number__label {
  font-size: var(--ds-typography-body-font-size-s);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-body-line-height-s);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-input-number-control-text-color);
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
.ds-input-for-number--compact {
  height: var(--ds-size-7x);
  width: 101px;
  padding: var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-1x) var(--ds-size-1x);
}
.ds-input-for-number--normal {
  width: 101px;
}
.ds-input-for-number--default {
  width: 101px;
}
.ds-input-for-number--disable {
  width: 101px;
  border: 1px solid var(--ds-color-input-number-control-disable-border-color);
}
.ds-input-for-number--error {
  width: 101px;
  border: 1px solid var(--ds-color-input-number-control-error-border-color);
}
.ds-input-for-number--focus {
  width: 101px;
}
.ds-input-for-number--hover {
  width: 101px;
  border: 1px solid var(--ds-color-input-number-control-disable-icon-color);
}
.ds-input-for-number:hover {
  border: 1px solid var(--ds-color-input-number-control-disable-icon-color);
}
.ds-input-for-number:disabled {
  border: 1px solid var(--ds-color-input-number-control-disable-border-color);
  color: var(--ds-color-input-number-control-disable-icon-color);
}
.ds-input-for-number--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Input number [17193:84750] — 29 вариантов */
.ds-input-number {
  height: 48px;
  width: 138px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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
.ds-input-number--s {
  height: var(--ds-size-9x);
  background: var(--ds-color-input-input-outlined-background);
}
.ds-input-number--xs {
  height: var(--ds-size-7x);
  width: 123px;
  background: var(--ds-color-input-input-outlined-background);
}
.ds-input-number--no-label-up {
  height: var(--ds-size-9x);
  background: var(--ds-color-input-input-outlined-background);
}
.ds-input-number--disable {
  gap: var(--ds-size-1x);
}
.ds-input-number--error {
  gap: var(--ds-size-1x);
}
.ds-input-number--error-hover {
  gap: var(--ds-size-1x);
}
.ds-input-number--focus {
  gap: var(--ds-size-1x);
}
.ds-input-number--focus-placeholder {
  gap: var(--ds-size-1x);
}
.ds-input-number--focus-value {
  gap: var(--ds-size-1x);
}
.ds-input-number--hover {
  gap: var(--ds-size-1x);
}
.ds-input-number:hover {
  background: var(--ds-color-input-input-outlined-background);
  color: var(--ds-color-input-input-label-text-color);
}
.ds-input-number:disabled {
  background: var(--ds-color-input-input-outlined-background);
  color: var(--ds-color-input-input-label-text-color);
}
.ds-input-number:focus-visible {
  background: var(--ds-color-input-input-outlined-background);
  color: var(--ds-color-input-input-label-text-color);
}
.ds-input-number--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Input number_but icon [56967:10506] — 1 вариантов */
.ds-input-number-but-icon {
  height: 56px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-1x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-input-number-but-icon__label {
  font-size: var(--ds-typography-caption-font-size-l);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-caption-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
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

/* Input Timepicker [58982:9561] — 2 вариантов */
.ds-input-timepicker {
  height: 48px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-input-input-outlined-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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

/* List (Сontainer) [57604:4762] — 1 вариантов */
.ds-list-container {
  height: 257px;
  display: flex;
  flex-direction: column;
  padding: 0 0 var(--ds-size-2x) var(--ds-size-2x);
  background: var(--ds-color-list-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-list-container__label {
  font-size: var(--ds-typography-caption-font-size-l);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-caption-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-list-item-icon-color);
  white-space: nowrap;
}
.ds-list-container__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: 204px;
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

/* List item [54101:7922] — 8 вариантов */
.ds-list-item {
  height: 68px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  background: var(--ds-color-list-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-list-item__label {
  font-size: var(--ds-typography-caption-font-size-l);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-caption-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-list-item-icon-color);
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
.ds-list-item--back-selected {
  background: var(--ds-color-list-item-selected-back-selected);
}
.ds-list-item--hover {
  background: var(--ds-color-list-item-hover-background);
}
.ds-list-item--press {
  background: var(--ds-color-list-item-press-background);
}
.ds-list-item:hover {
  background: var(--ds-color-list-item-hover-background);
}
.ds-list-item:active {
  background: var(--ds-color-list-item-press-background);
}
.ds-list-item:disabled {
  color: var(--ds-color-list-item-disable-icon-color);
}
.ds-list-item--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Logo iiko [55332:19892] — 4 вариантов */
.ds-logo-iiko {
  height: 72px;
  width: 73px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-brand-neutral-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* Logo Syrve [56079:771] — 4 вариантов */
.ds-logo-syrve {
  height: 72px;
  display: flex;
  flex-direction: row;
  background: var(--ds-color-brand-neutral-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-logo-syrve--small {
  width: 61px;
}

/* Menu (Container) [54163:6705] — 1 вариантов */
.ds-menu-container {
  height: 418px;
  display: flex;
  flex-direction: column;
  padding: 0 0 var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-menu-background);
  box-shadow: 0.0px 0.0px 16.0px 0px #2121211f;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-menu-container__label {
  font-size: var(--ds-typography-body-font-size-s);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-body-line-height-s);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-brand-neutral-light);
  white-space: nowrap;
}
.ds-menu-container__icon {
  flex-shrink: 0;
  width: 12.000000000000057px;
  height: 272px;
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

/* Menu item [56090:1476] — 7 вариантов */
.ds-menu-item {
  height: 68px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  background: var(--ds-color-menu-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-menu-item__label {
  font-size: var(--ds-typography-caption-font-size-l);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-caption-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-menu-item-icon-color);
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
.ds-menu-item--back-selected {
  background: var(--ds-color-menu-item-selected-back-selected);
}
.ds-menu-item--hover {
  background: var(--ds-color-menu-item-hover-background);
}
.ds-menu-item--press {
  background: var(--ds-color-menu-item-press-background);
}
.ds-menu-item:hover {
  background: var(--ds-color-menu-item-hover-background);
}
.ds-menu-item:active {
  background: var(--ds-color-menu-item-press-background);
}
.ds-menu-item:disabled {
  color: var(--ds-color-menu-item-disable-icon-color);
}
.ds-menu-item--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Navigation Bar [56564:1057] — 2 вариантов */
.ds-navigation-bar {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* Picture [58937:3985] — 1 вариантов */
.ds-picture {
  height: 189px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-brand-accent-super-lightest);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* Preview [54063:12946] — 3 вариантов */
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

/* Radio button label [54095:4306] — 6 вариантов */
.ds-radio-button-label {
  height: var(--ds-size-5x);
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-1x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-radio-button-label__label {
  font-size: var(--ds-typography-body-font-size-s);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-body-line-height-s);
  letter-spacing: 0.25px;
  color: var(--ds-color-button-neutral-filled-default-text-color);
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

/* Scroll [53615:15339] — 12 вариантов */
.ds-scroll {
  height: 12.000000000000028px;
  display: flex;
  flex-direction: column;
  padding: var(--ds-size-0-5x) var(--ds-size-0-5x) var(--ds-size-0-5x) var(--ds-size-0-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-scroll--s {
  height: 64.00000009539906px;
  width: 8.00000076319236px;
}

/* Scroll tabs [59032:1821] — 4 вариантов */
.ds-scroll-tabs {
  height: var(--ds-size-7x);
  width: 76px;
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
.ds-scroll-tabs--left {
  padding: 0 48px 0 0;
}

/* Search [54453:1620] — 15 вариантов */
.ds-search {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-3x) var(--ds-size-3x) var(--ds-size-3x) var(--ds-size-3x);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-search-background);
  border: 1px solid var(--ds-color-search-completed-border-color);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-search__label {
  font-size: var(--ds-typography-body-font-size-m);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-body-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-search-default-text-color);
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
.ds-search--s {
  height: var(--ds-size-9x);
  padding: var(--ds-size-3x) var(--ds-size-3x) var(--ds-size-2x) var(--ds-size-2x);
}
.ds-search--xs {
  height: var(--ds-size-9x);
  width: var(--ds-size-9x);
  padding: var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x);
  border-radius: var(--ds-size-circular);
  background: var(--ds-color-search-default-background-xs);
}
.ds-search--disable {
  background: var(--ds-color-search-disable-background);
}
.ds-search--hover {
  border: 1px solid var(--ds-color-search-disable-icon-color);
}
.ds-search:hover {
  border: 1px solid var(--ds-color-search-disable-icon-color);
}
.ds-search:disabled {
  background: var(--ds-color-search-disable-background);
  color: var(--ds-color-search-disable-icon-color);
}
.ds-search:focus-visible {
  color: var(--ds-color-search-completed-text-color);
}
.ds-search--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Select (Сontainer) [57735:17612] — 1 вариантов */
.ds-select-container {
  height: 406px;
  display: flex;
  flex-direction: column;
  padding: 0 0 var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-brand-neutral-default);
  box-shadow: 0.0px 0.0px 16.0px 0px #2121211f;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-container__label {
  font-size: var(--ds-typography-body-font-size-s);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-body-line-height-s);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-brand-neutral-light);
  white-space: nowrap;
}
.ds-select-container__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: 272px;
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

/* Select cell [60231:74976] — 7 вариантов */
.ds-select-cell {
  height: var(--ds-size-9x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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
.ds-select-cell--error {
  border: 1px solid var(--ds-color-brand-negative-default);
}
.ds-select-cell--error-hover {
  background: var(--ds-color-brand-neutral-super-light);
  border: 1px solid var(--ds-color-brand-negative-default);
}
.ds-select-cell--hover {
  background: var(--ds-color-brand-neutral-super-light);
  border: 1px solid var(--ds-color-brand-neutral-neutral);
}
.ds-select-cell:hover {
  background: var(--ds-color-brand-neutral-super-light);
  border: 1px solid var(--ds-color-brand-neutral-neutral);
}
.ds-select-cell--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Select form [57862:17226] — 22 вариантов */
.ds-select-form {
  height: 48px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-brand-neutral-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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
.ds-select-form--s {
  height: var(--ds-size-9x);
}
.ds-select-form--xs {
  height: var(--ds-size-7x);
}
.ds-select-form--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Select item [57735:17872] — 8 вариантов */
.ds-select-item {
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-3x) var(--ds-size-1-5x);
  background: var(--ds-color-brand-neutral-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-select-item__label {
  font-size: var(--ds-typography-caption-font-size-l);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-caption-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-brand-neutral-darker);
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
.ds-select-item--back-selected {
  height: 68px;
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  background: var(--ds-color-brand-accent-lightest);
}
.ds-select-item--disable {
  height: 68px;
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
}
.ds-select-item--error {
  height: 68px;
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
}
.ds-select-item--hover {
  height: 68px;
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  background: var(--ds-color-brand-neutral-super-light);
}
.ds-select-item--press {
  height: 68px;
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  background: var(--ds-color-brand-neutral-lighter);
}
.ds-select-item--selected {
  height: 68px;
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
}
.ds-select-item--false {
  height: 68px;
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
}
.ds-select-item:hover {
  background: var(--ds-color-brand-neutral-super-light);
}
.ds-select-item:active {
  background: var(--ds-color-brand-neutral-lighter);
}
.ds-select-item:disabled {
  color: var(--ds-color-brand-neutral-neutral);
}
.ds-select-item--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Sidenav control [55142:1734] — 6 вариантов */
.ds-sidenav-control {
  height: 41px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-sidenav-control-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-control__label {
  font-size: var(--ds-typography-caption-font-size-m);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-caption-line-height-m);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-sidenav-control-text-color);
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
.ds-sidenav-control--collapsed {
  width: 52px;
}
.ds-sidenav-control--hover {
  width: 52px;
  background: var(--ds-color-sidenav-control-background-hover);
}
.ds-sidenav-control--press {
  width: 52px;
}
.ds-sidenav-control:hover {
  background: var(--ds-color-sidenav-control-background-hover);
}
.ds-sidenav-control:active {
  background: var(--ds-color-sidenav-control-background-hover);
}

/* Sidenav Footer [55111:1056] — 3 вариантов */
.ds-sidenav-footer {
  height: var(--ds-size-10x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-3x);
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-3x) var(--ds-size-3x);
  background: var(--ds-color-sidenav-control-text-color);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-footer__label {
  font-size: var(--ds-typography-caption-font-size-l);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-caption-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-sidenav-footer-l2-text-color);
  white-space: nowrap;
}
.ds-sidenav-footer--l1 {
  height: 133px;
}
.ds-sidenav-footer--collapsed {
  height: 133px;
  width: 52px;
}

/* Sidenav header [55045:637] — 3 вариантов */
.ds-sidenav-header {
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 92px;
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-3x) var(--ds-size-3x);
  background: var(--ds-color-sidenav-control-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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
.ds-sidenav-header--l2 {
  gap: var(--ds-size-2x);
  background: var(--ds-color-sidenav-control-text-color);
}
.ds-sidenav-header--collapsed {
  width: 52px;
  padding: var(--ds-size-3-5x) var(--ds-size-3-5x) var(--ds-size-3x) var(--ds-size-3x);
}

/* Sidenav item [55070:3734] — 13 вариантов */
.ds-sidenav-item {
  height: var(--ds-size-8x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-8x) var(--ds-size-4x) var(--ds-size-2x) var(--ds-size-2x);
  background: var(--ds-color-sidenav-control-text-color);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-item__label {
  font-size: var(--ds-typography-caption-font-size-l);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-caption-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-sidenav-header-l2-text-color);
  white-space: nowrap;
}
.ds-sidenav-item--l1 {
  height: 44px;
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-3x) var(--ds-size-3x);
  background: var(--ds-color-sidenav-control-background);
}
.ds-sidenav-item--l2 {
  height: 41px;
}
.ds-sidenav-item--collapsed {
  height: 44px;
  width: 52px;
  padding: var(--ds-size-4x) var(--ds-size-4x) var(--ds-size-3x) var(--ds-size-3x);
  background: var(--ds-color-sidenav-control-background);
}
.ds-sidenav-item--active {
  background: var(--ds-color-sidenav-item-l2-background-selected);
}
.ds-sidenav-item--hover {
  background: var(--ds-color-sidenav-item-l2-background-hover);
}
.ds-sidenav-item--selected {
  background: var(--ds-color-sidenav-item-l2-background-selected);
}
.ds-sidenav-item:hover {
  background: var(--ds-color-sidenav-item-l2-background-hover);
}

/* Sidenav View [55074:393] — 3 вариантов */
.ds-sidenav-view {
  height: 1024px;
  display: flex;
  flex-direction: column;
  padding: 0 0 var(--ds-size-2x) var(--ds-size-2x);
  background: var(--ds-color-sidenav-control-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-sidenav-view__icon {
  flex-shrink: 0;
  width: 12.00002115631196px;
  height: 484.00000052453663px;
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
.ds-sidenav-view--l2 {
  background: var(--ds-color-sidenav-control-text-color);
}
.ds-sidenav-view--collapsed {
  width: 52px;
}

/* Snackbar [54373:10303] — 4 вариантов */
.ds-snackbar {
  height: 56px;
  display: flex;
  flex-direction: column;
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-snackbar-dark-background);
  box-shadow: 0.0px 0.0px 16.0px 0px #2121211f;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-snackbar__label {
  font-size: var(--ds-typography-body-font-size-s);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-body-line-height-s);
  letter-spacing: var(--ds-typography-letter-spacing-s);
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
.ds-snackbar--complex {
  height: 108px;
}
.ds-snackbar--light {
  background: var(--ds-color-snackbar-dark-text-color);
}

/* State [54063:12395] — 2 вариантов */
.ds-state {
  height: var(--ds-size-6x);
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* Status [52928:6588] — 18 вариантов */
.ds-status {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-1x);
  padding: var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1x) var(--ds-size-1x);
  border-radius: var(--ds-size-2x);
  background: var(--ds-color-status-accent-filled-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-status__label {
  font-size: var(--ds-typography-caption-font-size-l);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: var(--ds-typography-caption-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-status-accent-filled-text-color);
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
.ds-status--accent {
  width: 116px;
}
.ds-status--contrast-1 {
  width: 116px;
  background: var(--ds-color-status-contrast-1-filled-background);
}
.ds-status--contrast-2 {
  width: 116px;
  background: var(--ds-color-status-contrast-2-filled-background);
}
.ds-status--contrast-3 {
  width: 116px;
  background: var(--ds-color-status-contrast-3-filled-background);
}
.ds-status--contrast-4 {
  width: 116px;
  background: var(--ds-color-status-contrast-4-filled-background);
}
.ds-status--negative {
  width: 116px;
  background: var(--ds-color-status-negative-filled-background);
}
.ds-status--neutral {
  width: 116px;
  background: var(--ds-color-status-neutral-filled-background);
}
.ds-status--positive {
  width: 116px;
  background: var(--ds-color-status-positive-filled-background);
}
.ds-status--warning {
  width: 116px;
  background: var(--ds-color-status-warning-filled-background);
}
.ds-status--filled {
  width: 116px;
  background: var(--ds-color-status-neutral-filled-background);
}
.ds-status--text {
  height: var(--ds-size-4x);
  width: 104px;
}

/* Status Bar [56564:1236] — 1 вариантов */
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

/* Table 2 lvl [60074:44684] — 2 вариантов */
.ds-table-2-lvl {
  height: 72px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--ds-color-tab-active-press-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* Table Chips Input [60220:70978] — 8 вариантов */
.ds-table-chips-input {
  height: var(--ds-size-6x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-table-surfase-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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

/* Table content cell [52954:1253] — 8 вариантов */
.ds-table-content-cell {
  height: var(--ds-size-9x);
  width: 81px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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
.ds-table-content-cell--error {
  border: 1px solid var(--ds-color-table-cell-content-error-border-color);
}
.ds-table-content-cell--hover {
  border: 1px solid var(--ds-color-tab-disable-icon-color);
}
.ds-table-content-cell:hover {
  border: 1px solid var(--ds-color-tab-disable-icon-color);
}
.ds-table-content-cell--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Table content row [60105:56764] — 5 вариантов */
.ds-table-content-row {
  height: var(--ds-size-9x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-table-surfase-default);
  border: 1px solid var(--ds-color-tab-active-press-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-content-row--hover {
  background: var(--ds-color-table-surfase-hover);
}
.ds-table-content-row--selected {
  background: var(--ds-color-table-surfase-group);
}
.ds-table-content-row--zebra {
  background: var(--ds-color-table-surfase-hover);
}
.ds-table-content-row:hover {
  background: var(--ds-color-table-surfase-hover);
}
.ds-table-content-row--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Table footer [59207:20759] — 1 вариантов */
.ds-table-footer {
  height: 65px;
  display: flex;
  flex-direction: column;
  background: var(--ds-color-table-surfase-default);
  box-shadow: 0.0px 0.0px 4.0px 0px #2121211f;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-table-footer__label {
  font-size: var(--ds-typography-body-font-size-s);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-body-line-height-s);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-tab-innactive-counter-text-color);
  white-space: nowrap;
}

/* Table header cell [60098:45424] — 3 вариантов */
.ds-table-header-cell {
  height: var(--ds-size-9x);
  width: 81px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2x);
  padding: var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x) var(--ds-size-2x);
  background: var(--ds-color-table-surfase-head);
  border: 1px solid var(--ds-color-tab-active-press-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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
.ds-table-header-cell--hover {
  background: var(--ds-color-table-cell-header-hover-background);
}
.ds-table-header-cell:hover {
  background: var(--ds-color-table-cell-header-hover-background);
}
.ds-table-header-cell--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Table header row [53556:3571] — 1 вариантов */
.ds-table-header-row {
  height: var(--ds-size-9x);
  display: flex;
  flex-direction: column;
  background: var(--ds-color-table-surfase-head);
  border: 1px solid var(--ds-color-tab-active-press-background);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}

/* Text UI [57938:18290] — 7 вариантов */
.ds-text-ui {
  height: 52px;
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-text-ui__label {
  font-size: var(--ds-typography-caption-font-size-l);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-caption-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-brand-neutral-darker);
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
.ds-text-ui:disabled {
  color: var(--ds-color-brand-neutral-neutral);
}
.ds-text-ui--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Textarea [57916:9023] — 13 вариантов */
.ds-textarea {
  height: 96px;
  display: flex;
  flex-direction: column;
  gap: var(--ds-size-1x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-textarea__label {
  font-size: var(--ds-typography-caption-font-size-l);
  font-weight: var(--ds-typography-font-weight-regular);
  line-height: var(--ds-typography-caption-line-height-l);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-brand-neutral-darker);
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
.ds-textarea:disabled {
  color: var(--ds-color-brand-neutral-neutral);
}
.ds-textarea--disabled {
  pointer-events: none;
  opacity: 1;
}

/* Timepicker [58982:9858] — 2 вариантов */
.ds-timepicker {
  height: 244px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 var(--ds-size-2x) var(--ds-size-2x);
  border-radius: var(--ds-size-3x);
  background: var(--ds-color-brand-neutral-default);
  border: 1px solid var(--ds-color-brand-neutral-lighter);
  box-shadow: 0.0px 0.0px 16.0px 0px #2121211f;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-timepicker__icon {
  flex-shrink: 0;
  width: var(--ds-size-3x);
  height: 228px;
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
.ds-timepicker--time-line {
  height: 256px;
  width: 102px;
}

/* Title variant [17034:68611] — 1 вариантов */
.ds-title-variant {
  height: 140px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-title-variant__label {
  font-size: var(--ds-typography-header-font-size-s);
  font-weight: var(--ds-typography-font-weight-medium);
  line-height: var(--ds-typography-header-line-height-s);
  letter-spacing: var(--ds-typography-letter-spacing-s);
  color: var(--ds-color-brand-neutral-super-dark);
  white-space: nowrap;
}

/* Toggle buttons [16992:8639] — 5 вариантов */
.ds-toggle-buttons {
  height: var(--ds-size-9x);
  width: var(--ds-size-9x);
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2-5x);
  padding: var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x) var(--ds-size-1-5x);
  border-radius: var(--ds-size-0-5x);
  background: var(--ds-color-button-accent-lite-default);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
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
.ds-toggle-buttons--2-buttons {
  width: 76px;
  gap: var(--ds-size-1x);
}
.ds-toggle-buttons--3-buttons {
  width: 116px;
  gap: var(--ds-size-1x);
}
.ds-toggle-buttons--3-text {
  border-radius: var(--ds-size-1x);
  border: 1px solid var(--ds-color-button-icon-neutral-outlined-border-color);
}
.ds-toggle-buttons--text {
  width: 53px;
  padding: var(--ds-size-3x) var(--ds-size-3x) var(--ds-size-1-5x) var(--ds-size-1-5x);
}

/* Tree [59564:1473] — 8 вариантов */
.ds-tree {
  height: 44px;
  width: var(--ds-size-6x);
  display: flex;
  flex-direction: row;
  gap: var(--ds-size-2-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-tree__icon {
  flex-shrink: 0;
  width: 24.000001907348633px;
  height: 44px;
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
.ds-tree--3 {
  width: 48px;
}
.ds-tree--off {
  width: 48px;
}

/* Tree item [59564:1504] — 5 вариантов */
.ds-tree-item {
  height: 44px;
  width: 24.000001907348633px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--ds-size-2-5x);
  padding: 11px 0 0 var(--ds-size-5x);
  box-sizing: border-box;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
}
.ds-tree-item--end-long {
  width: 48px;
  padding: 11px 0 0 21px;
}
.ds-tree-item--middle {
  width: var(--ds-size-6x);
  padding: 11px 0 0 0;
}
.ds-tree-item--middle-long {
  width: 48px;
  padding: 11px 0 0 0;
}
.ds-tree-item--start {
  width: var(--ds-size-6x);
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
   iiko DS — Button icon (Figma 17123:81299, 153 варианта)
   Size × Style × Type × State, снято по узлам Figma:
     Size:  M 36×36 pad 8 (иконка 20) · S 28×28 pad 4 (20) · XS 24×24 pad 4 (16)
     r8 у всех размеров
     Type=Text     — БЕЗ фона (прозрачный), БЕЗ рамки, БЕЗ тени; hover — фон
     Type=Outlined — рамка 1px, фон #FFFFFF, БЕЗ тени
     Type=Filled   — фон Style, тень 0 0 4px rgba(33,33,33,.12)
     Style: Accent / Neutral / Positive / Negative / Warning
   Цвета — только компонентные токены --ds-color-button-icon-*
   ============================================================ */

.ds-button-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 36px;
  height: 36px;
  padding: var(--ds-space-2x);                              /* 8px */
  border: none;
  border-radius: var(--ds-radius-2x);                       /* 8px */
  background: var(--ds-color-button-icon-neutral-text-default-background);
  color: var(--ds-color-button-icon-neutral-text-icon-color);
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  cursor: pointer;
}

/* ── Размеры ──────────────────────────────────────────────── */

.ds-button-icon--m  { width: 36px; height: 36px; padding: var(--ds-space-2x); }
.ds-button-icon--s  { width: 28px; height: 28px; padding: var(--ds-space-1x); }
.ds-button-icon--xs { width: 24px; height: 24px; padding: var(--ds-space-1x); }

/* ── Слот иконки ──────────────────────────────────────────── */

.ds-button-icon__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}
.ds-button-icon--xs .ds-button-icon__icon { width: 16px; height: 16px; }
.ds-button-icon__icon svg { width: 100%; height: 100%; display: block; }
.ds-button-icon__icon svg path { fill: currentColor; }

/* ── Type=Text (по умолчанию): прозрачный фон, без рамки и тени ─ */

.ds-button-icon--text {
  border: none;
  box-shadow: none;
  background: var(--ds-color-button-icon-neutral-text-default-background);
  color: var(--ds-color-button-icon-neutral-text-icon-color);
}
.ds-button-icon--text:hover  { background: var(--ds-color-button-icon-neutral-text-hover-background); }
.ds-button-icon--text:active { background: var(--ds-color-button-icon-neutral-text-press-background); }

.ds-button-icon--text.ds-button-icon--accent {
  background: var(--ds-color-button-icon-accent-text-default-background);
  color: var(--ds-color-button-icon-accent-text-icon-color);
}
.ds-button-icon--text.ds-button-icon--accent:hover  { background: var(--ds-color-button-icon-accent-text-hover-background); }
.ds-button-icon--text.ds-button-icon--accent:active { background: var(--ds-color-button-icon-accent-text-press-background); }

.ds-button-icon--text.ds-button-icon--negative {
  background: var(--ds-color-button-icon-negative-text-default-background);
  color: var(--ds-color-button-icon-negative-text-icon-color);
}
.ds-button-icon--text.ds-button-icon--positive {
  background: var(--ds-color-button-icon-positive-text-default-background);
  color: var(--ds-color-button-icon-positive-text-icon-color);
}
.ds-button-icon--text.ds-button-icon--warning {
  background: var(--ds-color-button-icon-warning-text-default-background);
  color: var(--ds-color-button-icon-warning-text-icon-color);
}

/* ── Type=Outlined: рамка 1px, фон белый, без тени ─────────── */

.ds-button-icon--outlined {
  box-shadow: none;
  border: 1px solid var(--ds-color-button-icon-neutral-outlined-border-color);
  background: var(--ds-color-button-icon-neutral-outlined-default-background);
  color: var(--ds-color-button-icon-neutral-outlined-icon-color);
}
.ds-button-icon--outlined:hover  { background: var(--ds-color-button-icon-neutral-outlined-hover-background); }
.ds-button-icon--outlined:active { background: var(--ds-color-button-icon-neutral-outlined-press-background); }

.ds-button-icon--outlined.ds-button-icon--accent {
  border-color: var(--ds-color-button-icon-accent-outlined-border-color);
  background: var(--ds-color-button-icon-accent-outlined-default-background);
  color: var(--ds-color-button-icon-accent-outlined-icon-color);
}
.ds-button-icon--outlined.ds-button-icon--accent:hover  { background: var(--ds-color-button-icon-accent-outlined-hover-background); }
.ds-button-icon--outlined.ds-button-icon--accent:active { background: var(--ds-color-button-icon-accent-outlined-press-background); }

.ds-button-icon--outlined.ds-button-icon--negative {
  border-color: var(--ds-color-button-icon-negative-outlined-border-color);
  background: var(--ds-color-button-icon-negative-outlined-default-background);
  color: var(--ds-color-button-icon-negative-outlined-icon-color);
}

/* ── Type=Filled: фон Style + тень ────────────────────────── */

.ds-button-icon--filled {
  border: none;
  box-shadow: 0 0 4px rgba(33, 33, 33, .12);
  background: var(--ds-color-button-icon-neutral-filled-default-background);
  color: var(--ds-color-button-icon-neutral-filled-icon-color);
}
.ds-button-icon--filled:hover  { background: var(--ds-color-button-icon-neutral-filled-hover-background); }
.ds-button-icon--filled:active { background: var(--ds-color-button-icon-neutral-filled-press-background); }

.ds-button-icon--filled.ds-button-icon--accent {
  background: var(--ds-color-button-icon-accent-filled-default-background);
  color: var(--ds-color-button-icon-accent-filled-icon-color);
}
.ds-button-icon--filled.ds-button-icon--accent:hover  { background: var(--ds-color-button-icon-accent-filled-hover-background); }
.ds-button-icon--filled.ds-button-icon--accent:active { background: var(--ds-color-button-icon-accent-filled-press-background); }

.ds-button-icon--filled.ds-button-icon--negative {
  background: var(--ds-color-button-icon-negative-filled-default-background);
  color: var(--ds-color-button-icon-negative-filled-icon-color);
}
.ds-button-icon--filled.ds-button-icon--positive {
  background: var(--ds-color-button-icon-positive-filled-default-background);
  color: var(--ds-color-button-icon-positive-filled-icon-color);
}
.ds-button-icon--filled.ds-button-icon--warning {
  background: var(--ds-color-button-icon-warning-filled-default-background);
  color: var(--ds-color-button-icon-warning-filled-icon-color);
}

/* ── State=Disable ────────────────────────────────────────── */

.ds-button-icon:disabled,
.ds-button-icon--disabled {
  pointer-events: none;
  color: var(--ds-color-button-icon-disable-icon-color);       /* #9E9E9E */
}
.ds-button-icon--text:disabled     { background: var(--ds-color-button-icon-disable-background-text); }
.ds-button-icon--outlined:disabled { background: var(--ds-color-button-icon-disable-background-outlined); border-color: var(--ds-color-button-icon-disable-border-color); }
.ds-button-icon--filled:disabled   { background: var(--ds-color-button-icon-disable-background-filled); box-shadow: none; }

/* ── Button icon group (gap 8) ────────────────────────────── */

.ds-button-icon-group {
  display: inline-flex;
  align-items: center;
  gap: var(--ds-space-2x);                                  /* 8px */
}
.ds-button-icon-group--vertically { flex-direction: column; }

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

/* Type=Shadow — тень 0 0 4px rgba(33,33,33,.12) */
.ds-card--shadow {
  box-shadow: 0 0 4px 0 rgba(33, 33, 33, 0.12);
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

