# Гайд: компоненты в коде — как пользоваться

Библиотека «iiko DS · Компоненты в коде» — это прослойка между дизайн-системой (Figma) и продуктами:
чистые HTML/CSS-компоненты, собранные из токенов ДС. Здесь нет Angular и других фреймворков.

## Что подключить

```html
<!-- 1. Шрифты (в <head>) -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<!-- 2. Токены + нужные компоненты -->
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components/button.css">
<link rel="stylesheet" href="components/input.css">
<link rel="stylesheet" href="components/selection.css">
<link rel="stylesheet" href="components/badge.css">
```

## Правила

1. **Никаких хардкодов.** Цвета, радиусы, отступы и шрифты — только через переменные `var(--ds-*)` из `tokens.css`.
   Исключение — только если токена ещё нет в ДС (тогда сначала добавьте токен в Figma).
2. **Не переопределяйте переменные** в своём коде без необходимости — если нужен оттенок, добавьте его в ДС.
3. **Иконки** — Material Icons 20px (`<span class="material-icons">name</span>`).
4. **Классы** — префикс `ds-`: `ds-btn`, `ds-input`, `ds-checkbox`, `ds-radio`, `ds-badge`.
   Модификаторы: `--m` (размер), `--accent` (стиль), `--filled` (тип) и т.д.

## Компоненты

### Button
- Размеры: `--xs` (24px), `--s` (28px), `--m` (36px)
- Стили: `--accent`, `--neutral`, `--positive`, `--negative`, `--warning`
- Типы: `--filled`, `--outlined`, `--text`
- Состояния: hover/press — нативные (`:hover`, `:active`), disabled — атрибут `disabled`

```html
<button class="ds-btn ds-btn--m ds-btn--accent ds-btn--filled">
  <span class="ds-btn__icon material-icons" aria-hidden="true">add</span>
  <span class="ds-btn__label">Button</span>
</button>
```

### Input
- Размеры: `--m` (48px, лейбл сверху), `--s` (36px), `--xs` (28px) — S/XS без лейбла
- Состояния: hover/focus — нативные; error — класс `ds-input--error`; disabled — класс `ds-input--disabled` + атрибут

```html
<div class="ds-input ds-input--m">
  <div class="ds-input__frame">
    <div class="ds-input__content">
      <label class="ds-input__label" for="my-input">Label</label>
      <input class="ds-input__field" id="my-input" type="text" placeholder="Input text">
    </div>
  </div>
  <div class="ds-input__support">Support text</div>
</div>
```

### Checkbox / Radio
- Иконки подставляются автоматически по состоянию (checked/indeterminate)
- Error: класс `ds-checkbox--error`; Disabled: класс + атрибут
- Indeterminate: `input.indeterminate = true` (JS)
- Группа радио — одинаковый атрибут `name`

```html
<label class="ds-checkbox">
  <input type="checkbox" class="ds-checkbox__input" checked>
  <span class="ds-checkbox__box material-icons" aria-hidden="true"></span>
  <span class="ds-checkbox__label">Checkbox label</span>
</label>
```

### Badge
- Типы: `--counter` (пилюля), `--point` (точка)
- Стили: `--accent`, `--positive`, `--warning`, `--negative`

```html
<span class="ds-badge ds-badge--counter ds-badge--accent">7</span>
```

## Как добавить новый компонент

1. Компонент должен быть в ДС (страница «🔵Готово 🧾» или после ревью).
2. Добавляется CSS-файл в `components/` + отдельная страница компонента (button.html, input.html и т.д.) + карточка в каталоге `index.html`.
3. Обязателен прогон `check_tokens.py` (нет хардкодов, все переменные существуют).

## Обновление библиотеки

Дизайн-система — источник правды. При изменении токенов в Figma:
1. Перевыгрузить `DS.json` (Figma API).
2. `python3 scripts/ds_tokens.py` → обновит `tokens.css`.
3. Поправить компоненты, затронутые изменениями.
4. `python3 scripts/check_tokens.py` + публикация.
