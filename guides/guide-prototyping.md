# Гайд: как собрать прототип из компонентов

Прототип — это обычный HTML-файл, который подключает токены и компоненты библиотеки.
Никакого Angular и сборщиков: открыл файл в браузере — работает.

## Минимальный каркас

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Мой прототип</title>

  <!-- шрифты -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <!-- библиотека: токены + нужные компоненты -->
  <link rel="stylesheet" href="tokens.css">
  <link rel="stylesheet" href="components/button.css">
  <link rel="stylesheet" href="components/input.css">
  <link rel="stylesheet" href="components/selection.css">
  <link rel="stylesheet" href="components/badge.css">

  <!-- свои стили прототипа -->
  <style>
    body { font-family: 'Roboto', sans-serif; background: #f5f5f5; margin: 0; padding: 32px; }
    .screen { max-width: 900px; margin: 0 auto; }
  </style>
</head>
<body>
  <div class="screen">
    <!-- здесь вставляете компоненты -->
  </div>
</body>
</html>
```

## Как собрать экран

1. Откройте витрину → нужная секция → нажмите «Копировать» под примером.
2. Вставьте фрагмент в `.screen` своего прототипа.
3. Поменяйте текст, добавьте/уберите иконки — **не меняя классы**.
4. Откройте файл в браузере (двойной клик) или на локальном сервере.

## Пример: экран с формой

```html
<div class="ds-input ds-input--m">
  <div class="ds-input__frame">
    <div class="ds-input__content">
      <label class="ds-input__label" for="name">Название</label>
      <input class="ds-input__field" id="name" type="text" value="Касса 1">
    </div>
  </div>
</div>

<div style="margin-top:16px; display:flex; gap:8px;">
  <button class="ds-btn ds-btn--m ds-btn--accent ds-btn--filled">
    <span class="ds-btn__label">Сохранить</span>
  </button>
  <button class="ds-btn ds-btn--m ds-btn--neutral ds-btn--outlined">
    <span class="ds-btn__label">Отмена</span>
  </button>
</div>
```

## Состояния в прототипе

| Состояние | Как показать |
|---|---|
| Hover / Press | нативные — просто наведите/нажмите |
| Disabled | атрибут `disabled` (кнопка/инпут) или класс `ds-input--disabled` |
| Error | класс `ds-input--error`, `ds-checkbox--error`, `ds-radio--error` |
| Focus | нативный фокус в поле |
| Indeterminate | в консоли/JS: `input.indeterminate = true` |

## Где взять файлы

- Витрина и компоненты: [ссылка на GitHub Pages]
- Исходники: репозиторий библиотеки (tokens.css, components/, guides/)

## Показ коллегам

- Локально: положите файл на сервер `hermes.iiko.ru:8300` (через симлинк в `/var/www/`).
- Публично: залейте в репозиторий GitHub Pages (скрипт `gh_sync.py`).
