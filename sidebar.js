/* ============================================================
   iiko DS — боковое меню (как панель Pages в Figma)
   Генерирует список страниц/компонентов, повторяя структуру
   дизайн-системы: «🔵 Готово 🧾» → компоненты.
   Активный пункт определяется по текущему URL.
   ============================================================ */
(function () {
  var COMPONENTS = [
    { name: 'Backdrop',          file: null },
    { name: 'Button',            file: 'button.html' },
    { name: 'Button icon',       file: null },
    { name: 'Button toggle',     file: null },
    { name: 'Status',            file: null },
    { name: 'List',              file: null },
    { name: 'Hint (Tooltip)',    file: null },
    { name: 'Form field+Input',  file: 'input.html' },
    { name: 'Input number',      file: null },
    { name: 'Autocomplete',      file: null },
    { name: 'Icon size',         file: null },
    { name: 'Logo',              file: null },
    { name: 'Checkbox',          file: 'checkbox.html' },
    { name: 'Radio button',      file: 'radio.html' },
    { name: 'Textarea',          file: null },
    { name: 'Slide toggle',      file: null },
    { name: 'Badge',             file: 'badge.html' },
    { name: 'Chips',             file: null },
    { name: 'Divider',           file: null },
    { name: 'Scroll',            file: null },
  ];

  var current = (location.pathname.split('/').pop() || 'index.html');

  var html = '';
  html += '<div class="sidebar__head">';
  html +=   '<span class="sidebar__title">Pages</span>';
  html +=   '<span class="sidebar__icons">';
  html +=     '<span class="material-icons" aria-hidden="true">search</span>';
  html +=     '<span class="material-icons" aria-hidden="true">add</span>';
  html +=   '</span>';
  html += '</div>';
  html += '<div class="sidebar__group">';
  html +=   '<div class="sidebar__group-name"><span class="material-icons" aria-hidden="true">menu</span> Каталог</div>';
  html += '<a class="sidebar__item' + (current === 'index.html' ? ' is-active' : '') + '" href="index.html">';
  html +=     '<span class="sidebar__dot" style="background:#448aff"></span> Все компоненты';
  html += '</a>';
  html += '<a class="sidebar__item' + (current === 'component-template.html' ? ' is-active' : '') + '" href="component-template.html">';
  html +=     '<span class="sidebar__dot" style="background:#448aff"></span> Мастер страница';
  html += '</a>';
  html += '</div>';
  html += '<div class="sidebar__group">';
  html +=   '<div class="sidebar__group-name"><span class="material-icons" aria-hidden="true">menu</span> 🔵 Готово 🧾</div>';
  COMPONENTS.forEach(function (c) {
    var isCurrent = current === c.file;
    if (c.file) {
      html += '<a class="sidebar__item' + (isCurrent ? ' is-active' : '') + '" href="' + c.file + '">';
      html +=   '<span class="sidebar__dot" style="background:#448aff"></span> ' + c.name;
      html += '</a>';
    } else {
      html += '<div class="sidebar__item is-soon">';
      html +=   '<span class="sidebar__dot"></span> ' + c.name + ' <span class="sidebar__soon">скоро</span>';
      html += '</div>';
    }
  });
  html += '</div>';
  html += '<div class="sidebar__footer">';
  html += '<a href="guides/guide-components.md">📘 Гайд: компоненты</a>';
  html += '<a href="guides/guide-prototyping.md">🧩 Гайд: прототипы</a>';
  html += '</div>';

  var host = document.getElementById('sidebar');
  if (host) host.innerHTML = html;
})();
