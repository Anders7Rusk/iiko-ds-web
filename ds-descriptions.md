## Status  (52928:6588)

Статус — короткая метка состояния объекта: «Новый», «В работе», «Оплачен», «Закрыт».
Показывайте в таблицах, списках и карточках рядом с названием или в колонке «Статус».

Как выбрать вариант:
- Accent — активное состояние, действие сейчас выполняется.
- Positive — успех, подтверждение.
- Warning — требуется внимание, просрочено.
- Negative — ошибка, блокирующее состояние.
- Neutral — нейтральное, без акцента.
- Contrast-1 … 4 — дополнительные цвета, когда основных недостаточно.

Type=Filled — с подложкой, заметный. Type=Text — только текст, не перетягивает внимание.
Фронт: https://frontend-common.iiko.ru/components/status

- **Style=Neutral, Type=Filled** — Нейтральное состояние — без акцента. С подложкой и округлым фоном.
- **Style=Neutral, Type=Text** — Нейтральное состояние — без акцента. Только текст, без подложки.
- **Style=Accent, Type=Filled** — Активное состояние — действие сейчас выполняется. С подложкой и округлым фоном.
- **Style=Accent, Type=Text** — Активное состояние — действие сейчас выполняется. Только текст, без подложки.
- **Style=Positive, Type=Filled** — Успех или подтверждение — «Оплачен», «Активен». С подложкой и округлым фоном.
- **Style=Positive, Type=Text** — Успех или подтверждение — «Оплачен», «Активен». Только текст, без подложки.
- **Style=Warning, Type=Filled** — Требует внимания — «Просрочено», «Заканчивается». С подложкой и округлым фоном.
- **Style=Warning, Type=Text** — Требует внимания — «Просрочено», «Заканчивается». Только текст, без подложки.
- **Style=Negative, Type=Filled** — Ошибка или блокирующее состояние — «Отменён», «Ошибка». С подложкой и округлым фоном.
- **Style=Negative, Type=Text** — Ошибка или блокирующее состояние — «Отменён», «Ошибка». Только текст, без подложки.
- **Style=Contrast-1, Type=Filled** — Дополнительный цвет — розовый; когда основных тонов недостаточно. С подложкой и округлым фоном.
- **Style=Contrast-1, Type=Text** — Дополнительный цвет — розовый; когда основных тонов недостаточно. Только текст, без подложки.
- **Style=Contrast-2, Type=Filled** — Дополнительный цвет — оранжевый; когда основных тонов недостаточно. С подложкой и округлым фоном.
- **Style=Contrast-2, Type=Text** — Дополнительный цвет — оранжевый; когда основных тонов недостаточно. Только текст, без подложки.
- **Style=Contrast-3, Type=Filled** — Дополнительный цвет — сине-серый; когда основных тонов недостаточно. С подложкой и округлым фоном.
- **Style=Contrast-3, Type=Text** — Дополнительный цвет — сине-серый; когда основных тонов недостаточно. Только текст, без подложки.
- **Style=Contrast-4, Type=Filled** — Дополнительный цвет — салатовый; когда основных тонов недостаточно. С подложкой и округлым фоном.
- **Style=Contrast-4, Type=Text** — Дополнительный цвет — салатовый; когда основных тонов недостаточно. Только текст, без подложки.

## Input  (52670:7573)

Поле ввода — для однострочного текста: название, сумма, телефон, адрес.
Свойства включаются внутри компонента: Label, Element left (иконка слева), Element right (иконка/кнопка справа),
Support text (подсказка) и Hint text. Есть режимы с лимитом символов и счётчиком (например, 10/256),
с префиксами (телефон, e-mail) и с сообщением об ошибке.

Как выбрать вариант:
- Variant=Empty — поле без значения, плейсхолдер или Label внутри.
- Variant=Populated — поле со значением, Label над полем.
- Variant=No label up — компактные вытянутые поля (S / XS), без Label сверху.
- Size: M (основной), S (компактный), XS (минимальный — для строк таблиц и ячеек).

State: Default, Hover, Focus, Focus+Placeholder, Focus+Value, Error, Error+Hover, Disable.
Фронт: https://frontend-common.iiko.ru/components/input

- **Size=M, Variant=Populated, State=Disable** — Поле со значением, Label над полем, недоступно для редактирования.
- **Size=M, Variant=Empty, State=Disable** — Поле без значения, недоступно для редактирования.
- **Size=S, Variant=No label up, State=Disable** — Поле без Label сверху, компактное, недоступно для редактирования.
- **Size=XS, Variant=No label up, State=Disable** — Поле без Label сверху, минимальное, недоступно для редактирования.
- **Size=M, Variant=Populated, State=Focus** — Поле со значением, Label над полем, в фокусе.
- **Size=S, Variant=No label up, State=Focus** — Поле без Label сверху, компактное, в фокусе.
- **Size=XS, Variant=No label up, State=Focus** — Поле без Label сверху, минимальное, в фокусе.
- **Size=M, Variant=Populated, State=Focus+Placeholder** — Поле со значением, Label над полем, в фокусе, текст ещё не введён.
- **Size=M, Variant=Populated, State=Focus+Value** — Поле со значением, Label над полем, в фокусе с введённым значением.
- **Size=S, Variant=No label up, State=Focus+Placeholder** — Поле без Label сверху, компактное, в фокусе, текст ещё не введён.
- **Size=S, Variant=No label up, State=Focus+Value** — Поле без Label сверху, компактное, в фокусе с введённым значением.
- **Size=XS, Variant=No label up, State=Focus+Placeholder** — Поле без Label сверху, минимальное, в фокусе, текст ещё не введён.
- **Size=XS, Variant=No label up, State=Focus+Value** — Поле без Label сверху, минимальное, в фокусе с введённым значением.
- **Size=M, Variant=Populated, State=Error** — Поле со значением, Label над полем, заполнено неверно — сообщение об ошибке.
- **Size=M, Variant=Empty, State=Error** — Поле без значения, заполнено неверно — сообщение об ошибке.
- **Size=S, Variant=No label up, State=Error** — Поле без Label сверху, компактное, заполнено неверно — сообщение об ошибке.
- **Size=XS, Variant=No label up, State=Error** — Поле без Label сверху, минимальное, заполнено неверно — сообщение об ошибке.
- **Size=M, Variant=Populated, State=Error+Hover** — Поле со значением, Label над полем, заполнено неверно, курсор над полем.
- **Size=M, Variant=Empty, State=Error+Hover** — Поле без значения, заполнено неверно, курсор над полем.
- **Size=S, Variant=No label up, State=Error+Hover** — Поле без Label сверху, компактное, заполнено неверно, курсор над полем.
- **Size=XS, Variant=No label up, State=Error+Hover** — Поле без Label сверху, минимальное, заполнено неверно, курсор над полем.
- **Size=M, Variant=Populated, State=Default** — Поле со значением, Label над полем, состояние по умолчанию.
- **Size=M, Variant=Empty, State=Default** — Поле без значения, состояние по умолчанию.
- **Size=S, Variant=No label up, State=Default** — Поле без Label сверху, компактное, состояние по умолчанию.
- **Size=XS, Variant=No label up, State=Default** — Поле без Label сверху, минимальное, состояние по умолчанию.
- **Size=M, Variant=Populated, State=Hover** — Поле со значением, Label над полем, курсор над полем.
- **Size=M, Variant=Empty, State=Hover** — Поле без значения, курсор над полем.
- **Size=S, Variant=No label up, State=Hover** — Поле без Label сверху, компактное, курсор над полем.
- **Size=XS, Variant=No label up, State=Hover** — Поле без Label сверху, минимальное, курсор над полем.

## Banners  (54367:2566)

Баннер — контекстное сообщение на странице: подсказка, предупреждение, ошибка, подтверждение.
Показывайте поверх контента вверху страницы или блока, когда нужно привлечь внимание к событию.

Как выбрать вариант:
- Neutral — нейтральное сообщение, без эмоциональной окраски.
- Accent — информационное или рекламное сообщение.
- Positive — успех, подтверждение.
- Warning — событие требует внимания, но не критично.
- Negative — ошибка или блокирующее событие: «Счёт не оплачен».
- Tip — подсказка с пунктирной обводкой, совет по продукту.

Orientation=Horizontal — иконка, текст и кнопки в одну строку. Vertical — иконка и текст сверху, кнопки снизу.
Состав настраивается внутри: Element left (иконка), Buttons, Close (крестик).
Фронт: https://frontend-common.iiko.ru/components/banners

- **Style=Neutral, Orientation=Horizontal** — Нейтральное сообщение — информация без акцента. Иконка, текст и кнопки в одну строку — компактный баннер.
- **Style=Neutral, Orientation=Vertical** — Нейтральное сообщение — информация без акцента. Иконка и текст сверху, кнопки снизу — заметный баннер с действием.
- **Style=Accent, Orientation=Horizontal** — Информационное или рекламное сообщение. Иконка, текст и кнопки в одну строку — компактный баннер.
- **Style=Accent, Orientation=Vertical** — Информационное или рекламное сообщение. Иконка и текст сверху, кнопки снизу — заметный баннер с действием.
- **Style=Positive, Orientation=Horizontal** — Успех или подтверждение. Иконка, текст и кнопки в одну строку — компактный баннер.
- **Style=Positive, Orientation=Vertical** — Успех или подтверждение. Иконка и текст сверху, кнопки снизу — заметный баннер с действием.
- **Style=Warning, Orientation=Horizontal** — Требует внимания — событие не критично, но обратите внимание. Иконка, текст и кнопки в одну строку — компактный баннер.
- **Style=Warning, Orientation=Vertical** — Требует внимания — событие не критично, но обратите внимание. Иконка и текст сверху, кнопки снизу — заметный баннер с действием.
- **Style=Negative, Orientation=Horizontal** — Ошибка или блокирующее событие: «Счёт не оплачен». Иконка, текст и кнопки в одну строку — компактный баннер.
- **Style=Negative, Orientation=Vertical** — Ошибка или блокирующее событие: «Счёт не оплачен». Иконка и текст сверху, кнопки снизу — заметный баннер с действием.
- **Style=Tip, Orientation=Horizontal** — Подсказка с пунктирной обводкой — совет по продукту. Иконка, текст и кнопки в одну строку — компактный баннер.
- **Style=Tip, Orientation=Vertical** — Подсказка с пунктирной обводкой — совет по продукту. Иконка и текст сверху, кнопки снизу — заметный баннер с действием.

## Step  (54800:3659)

Степпер — шаги многошагового процесса: мастер настройки, онбординг, оформление заказа.
Показывает текущее положение и сколько шагов осталось. Внизу — панель с кнопками «Назад» и «Далее».
Не сочетайте степпер с крестиком закрытия — если нужно закрыть, используйте кнопку внизу.

Состав степпера:
- Step — кликабельный шаг (иконка + название).
- Element step — маркер шага: иконка или счётчик на подложке.
- Stepper line — контейнер, строка со всеми маркерами.
- Stepper button — кнопка «Назад» / «Далее» в панели внизу.
Фронт: https://frontend-common.iiko.ru/components/stepper

- **Background=On, State=Default** — Шаг в состоянии по умолчанию. С подложкой — заметный шаг.
- **Background=On, State=Hover** — Курсор над шагом — подготовка к нажатию. С подложкой — заметный шаг.
- **Background=On, State=Press** — Шаг нажат. С подложкой — заметный шаг.
- **Background=On, State=Selected** — Текущий шаг процесса — выделен. С подложкой — заметный шаг.
- **Background=On, State=Error** — Ошибка на шаге — заполнен неверно. С подложкой — заметный шаг.
- **Background=On, State=Disable** — Шаг недоступен — раньше времени. С подложкой — заметный шаг.
- **Background=Off, State=Default** — Шаг в состоянии по умолчанию. Без подложки — лёгкий шаг.
- **Background=Off, State=Hover** — Курсор над шагом — подготовка к нажатию. Без подложки — лёгкий шаг.
- **Background=Off, State=Press** — Шаг нажат. Без подложки — лёгкий шаг.
- **Background=Off, State=Selected** — Текущий шаг процесса — выделен. Без подложки — лёгкий шаг.
- **Background=Off, State=Error** — Ошибка на шаге — заполнен неверно. Без подложки — лёгкий шаг.
- **Background=Off, State=Disable** — Шаг недоступен — раньше времени. Без подложки — лёгкий шаг.

## Button  (17022:63091)

Кнопка действия. Используйте для основного действия на экране.
Одна акцентная кнопка на область. Кнопки только с иконкой — это Button icon; группы — Button group.

Состав: текст + иконка (слева или справа), можно без иконки.
Варианты:
- Accent Filled — основная.
- Neutral Outlined — второстепенная.
- Neutral Text — третьестепенная.
- Positive / Negative — успех / ошибка.

Размеры: M (36px), S (28px), XS (24px).
Состояния: default, hover, pressed, disabled, loading.
Фронт: <button restoButton> — https://frontend-common.iiko.ru/components/button

- **Size=M, Style=Accent, Type=Filled, State=Default** — Основная кнопка. Главное действие экрана или блока: «Сохранить», «Создать», «Применить».
- **Size=M, Style=Accent, Type=Outlined, State=Default** — Акцентное действие второго плана. Рядом с основной кнопкой, когда действие важное, но не главное.
- **Size=M, Style=Accent, Type=Text, State=Default** — Акцентное действие без фона. В карточках, таблицах и подсказках, где кнопка не должна перетягивать внимание.
- **Size=M, Style=Neutral, Type=Filled, State=Default** — Белая кнопка с тенью. Для действия поверх цветного фона или изображения, где обычная кнопка теряется.
- **Size=M, Style=Neutral, Type=Outlined, State=Default** — Второстепенная кнопка. Действие рядом с основной: «Отмена», «Назад», «Ещё».
- **Size=M, Style=Neutral, Type=Text, State=Default** — Третьестепенная кнопка. Мелкие действия в таблицах, списках и шапках блоков: «Сбросить», «Скрыть».
- **Size=M, Style=Positive, Type=Filled, State=Default** — Подтверждающее действие. Приём и согласование: «Принять», «Подтвердить».
- **Size=M, Style=Positive, Type=Outlined, State=Default** — Подтверждающее действие второго плана. Рядом с основной кнопкой, когда согласование не главное действие.
- **Size=M, Style=Positive, Type=Text, State=Default** — Подтверждающее действие без фона. Мелкое согласование в строках списков и таблиц.
- **Size=M, Style=Warning, Type=Filled, State=Default** — Действие с последствиями. Требует внимания, но не разрушительное: «Отправить на доработку», «Приостановить».
- **Size=M, Style=Warning, Type=Outlined, State=Default** — Действие с последствиями второго плана. Рядом с основной кнопкой, когда предупреждающее действие не главное.
- **Size=M, Style=Warning, Type=Text, State=Default** — Действие с последствиями без фона. В таблицах и списках, где нужен акцент только цветом.
- **Size=M, Style=Negative, Type=Filled, State=Default** — Опасное действие. Удаление и отмена того, что нельзя вернуть: «Удалить», «Отменить заказ».
- **Size=M, Style=Negative, Type=Outlined, State=Default** — Опасное действие второго плана. Рядом с основной кнопкой, когда удаление не главное действие.
- **Size=M, Style=Negative, Type=Text, State=Default** — Опасное действие без фона. Удаление строки в таблице или списке.
- **Size=S, Style=Accent, Type=Filled, State=Default** — Основная кнопка, компактная. Главное действие экрана или блока: «Сохранить», «Создать», «Применить». Для плотных блоков и панелей.
- **Size=S, Style=Accent, Type=Outlined, State=Default** — Акцентное действие второго плана, компактное. Рядом с основной кнопкой, когда действие важное, но не главное. Для плотных блоков и панелей.
- **Size=S, Style=Accent, Type=Text, State=Default** — Акцентное действие без фона, компактное. В карточках, таблицах и подсказках, где кнопка не должна перетягивать внимание. Для плотных блоков и панелей.
- **Size=S, Style=Neutral, Type=Filled, State=Default** — Белая кнопка с тенью, компактная. Для действия поверх цветного фона или изображения, где обычная кнопка теряется. Для плотных блоков и панелей.
- **Size=S, Style=Neutral, Type=Outlined, State=Default** — Второстепенная кнопка, компактная. Действие рядом с основной: «Отмена», «Назад», «Ещё». Для плотных блоков и панелей.
- **Size=S, Style=Neutral, Type=Text, State=Default** — Третьестепенная кнопка, компактная. Мелкие действия в таблицах, списках и шапках блоков: «Сбросить», «Скрыть». Для плотных блоков и панелей.
- **Size=S, Style=Positive, Type=Filled, State=Default** — Подтверждающее действие, компактное. Приём и согласование: «Принять», «Подтвердить». Для плотных блоков и панелей.
- **Size=S, Style=Positive, Type=Outlined, State=Default** — Подтверждающее действие второго плана, компактное. Рядом с основной кнопкой, когда согласование не главное действие. Для плотных блоков и панелей.
- **Size=S, Style=Positive, Type=Text, State=Default** — Подтверждающее действие без фона, компактное. Мелкое согласование в строках списков и таблиц. Для плотных блоков и панелей.
- **Size=S, Style=Warning, Type=Filled, State=Default** — Действие с последствиями, компактное. Требует внимания, но не разрушительное: «Отправить на доработку», «Приостановить». Для плотных блоков и панелей.
- **Size=S, Style=Warning, Type=Outlined, State=Default** — Действие с последствиями второго плана, компактное. Рядом с основной кнопкой, когда предупреждающее действие не главное. Для плотных блоков и панелей.
- **Size=S, Style=Warning, Type=Text, State=Default** — Действие с последствиями без фона, компактное. В таблицах и списках, где нужен акцент только цветом. Для плотных блоков и панелей.
- **Size=S, Style=Negative, Type=Filled, State=Default** — Опасное действие, компактное. Удаление и отмена того, что нельзя вернуть: «Удалить», «Отменить заказ». Для плотных блоков и панелей.
- **Size=S, Style=Negative, Type=Outlined, State=Default** — Опасное действие второго плана, компактное. Рядом с основной кнопкой, когда удаление не главное действие. Для плотных блоков и панелей.
- **Size=S, Style=Negative, Type=Text, State=Default** — Опасное действие без фона, компактное. Удаление строки в таблице или списке. Для плотных блоков и панелей.
- **Size=XS, Style=Accent, Type=Filled, State=Default** — Основная кнопка, минимальная. Главное действие экрана или блока: «Сохранить», «Создать», «Применить». Для строк таблиц и ячеек.
- **Size=XS, Style=Accent, Type=Outlined, State=Default** — Акцентное действие второго плана, минимальное. Рядом с основной кнопкой, когда действие важное, но не главное. Для строк таблиц и ячеек.
- **Size=XS, Style=Accent, Type=Text, State=Default** — Акцентное действие без фона, минимальное. В карточках, таблицах и подсказках, где кнопка не должна перетягивать внимание. Для строк таблиц и ячеек.
- **Size=XS, Style=Neutral, Type=Filled, State=Default** — Белая кнопка с тенью, минимальная. Для действия поверх цветного фона или изображения, где обычная кнопка теряется. Для строк таблиц и ячеек.
- **Size=XS, Style=Neutral, Type=Outlined, State=Default** — Второстепенная кнопка, минимальная. Действие рядом с основной: «Отмена», «Назад», «Ещё». Для строк таблиц и ячеек.
- **Size=XS, Style=Neutral, Type=Text, State=Default** — Третьестепенная кнопка, минимальная. Мелкие действия в таблицах, списках и шапках блоков: «Сбросить», «Скрыть». Для строк таблиц и ячеек.
- **Size=XS, Style=Positive, Type=Filled, State=Default** — Подтверждающее действие, минимальное. Приём и согласование: «Принять», «Подтвердить». Для строк таблиц и ячеек.
- **Size=XS, Style=Positive, Type=Outlined, State=Default** — Подтверждающее действие второго плана, минимальное. Рядом с основной кнопкой, когда согласование не главное действие. Для строк таблиц и ячеек.
- **Size=XS, Style=Positive, Type=Text, State=Default** — Подтверждающее действие без фона, минимальное. Мелкое согласование в строках списков и таблиц. Для строк таблиц и ячеек.
- **Size=XS, Style=Warning, Type=Filled, State=Default** — Действие с последствиями, минимальное. Требует внимания, но не разрушительное: «Отправить на доработку», «Приостановить». Для строк таблиц и ячеек.
- **Size=XS, Style=Warning, Type=Outlined, State=Default** — Действие с последствиями второго плана, минимальное. Рядом с основной кнопкой, когда предупреждающее действие не главное. Для строк таблиц и ячеек.
- **Size=XS, Style=Warning, Type=Text, State=Default** — Действие с последствиями без фона, минимальное. В таблицах и списках, где нужен акцент только цветом. Для строк таблиц и ячеек.
- **Size=XS, Style=Negative, Type=Filled, State=Default** — Опасное действие, минимальное. Удаление и отмена того, что нельзя вернуть: «Удалить», «Отменить заказ». Для строк таблиц и ячеек.
- **Size=XS, Style=Negative, Type=Outlined, State=Default** — Опасное действие второго плана, минимальное. Рядом с основной кнопкой, когда удаление не главное действие. Для строк таблиц и ячеек.
- **Size=XS, Style=Negative, Type=Text, State=Default** — Опасное действие без фона, минимальное. Удаление строки в таблице или списке. Для строк таблиц и ячеек.
- **Size=M, Style=Neutral, Type=Filled, State=Hover** — Белая кнопка с тенью. Наведение.
- **Size=M, Style=Neutral, Type=Outlined, State=Hover** — Второстепенная кнопка. Наведение.
- **Size=M, Style=Neutral, Type=Text, State=Hover** — Второстепенная кнопка. Наведение.
- **Size=M, Style=Neutral, Type=Filled, State=Press** — Белая кнопка с тенью. Нажатие.
- **Size=M, Style=Neutral, Type=Outlined, State=Press** — Второстепенная кнопка. Нажатие.
- **Size=M, Style=Neutral, Type=Text, State=Press** — Второстепенная кнопка. Нажатие.
- **Size=M, Style=Accent, Type=Filled, State=Hover** — Основная кнопка. Наведение.
- **Size=M, Style=Accent, Type=Outlined, State=Hover** — Акцентное действие второго плана. Наведение.
- **Size=M, Style=Accent, Type=Text, State=Hover** — Акцентное действие второго плана. Наведение.
- **Size=M, Style=Accent, Type=Filled, State=Press** — Основная кнопка. Нажатие.
- **Size=M, Style=Accent, Type=Outlined, State=Press** — Акцентное действие второго плана. Нажатие.
- **Size=M, Style=Accent, Type=Text, State=Press** — Акцентное действие второго плана. Нажатие.
- **Size=M, Style=Positive, Type=Filled, State=Hover** — Подтверждающее действие. Наведение.
- **Size=M, Style=Positive, Type=Text, State=Hover** — Подтверждающее действие второго плана. Наведение.
- **Size=M, Style=Positive, Type=Outlined, State=Hover** — Подтверждающее действие второго плана. Наведение.
- **Size=M, Style=Positive, Type=Text, State=Press** — Подтверждающее действие второго плана. Нажатие.
- **Size=M, Style=Positive, Type=Filled, State=Press** — Подтверждающее действие. Нажатие.
- **Size=M, Style=Positive, Type=Outlined, State=Press** — Подтверждающее действие второго плана. Нажатие.
- **Size=M, Style=Warning, Type=Filled, State=Hover** — Действие с последствиями. Наведение.
- **Size=M, Style=Warning, Type=Outlined, State=Hover** — Действие с последствиями второго плана. Наведение.
- **Size=M, Style=Warning, Type=Text, State=Hover** — Действие с последствиями второго плана. Наведение.
- **Size=M, Style=Warning, Type=Filled, State=Press** — Действие с последствиями. Нажатие.
- **Size=M, Style=Warning, Type=Outlined, State=Press** — Действие с последствиями второго плана. Нажатие.
- **Size=M, Style=Warning, Type=Text, State=Press** — Действие с последствиями второго плана. Нажатие.
- **Size=M, Style=Negative, Type=Filled, State=Hover** — Опасное действие. Наведение.
- **Size=M, Style=Negative, Type=Outlined, State=Hover** — Опасное действие второго плана. Наведение.
- **Size=M, Style=Negative, Type=Text, State=Hover** — Опасное действие второго плана. Наведение.
- **Size=M, Style=Negative, Type=Filled, State=Press** — Опасное действие. Нажатие.
- **Size=M, Style=Negative, Type=Outlined, State=Press** — Опасное действие второго плана. Нажатие.
- **Size=M, Style=Negative, Type=Text, State=Press** — Опасное действие второго плана. Нажатие.
- **Size=M, Style=Disable, Type=Filled, State=Disable** — Кнопка недоступна. Нет прав или не выполнены условия — например, не заполнены обязательные поля.
- **Size=M, Style=Disable, Type=Outlined, State=Disable** — Кнопка недоступна. Нет прав или не выполнены условия — например, не заполнены обязательные поля.
- **Size=M, Style=Disable, Type=Text, State=Disable** — Кнопка недоступна. Нет прав или не выполнены условия — например, не заполнены обязательные поля.
- **Size=M, Style=Disable, Type=Filled, State=Loading** — Кнопка выполняет действие. Вместо содержимого — спиннер, повторное нажатие невозможно.
- **Size=M, Style=Disable, Type=Outlined, State=Loading** — Кнопка выполняет действие. Вместо содержимого — спиннер, повторное нажатие невозможно.
- **Size=M, Style=Disable, Type=Text, State=Loading** — Кнопка выполняет действие. Вместо содержимого — спиннер, повторное нажатие невозможно.
- **Size=S, Style=Neutral, Type=Filled, State=Hover** — Белая кнопка с тенью, компактная. Наведение.
- **Size=XS, Style=Neutral, Type=Filled, State=Hover** — Белая кнопка с тенью, минимальная. Наведение.
- **Size=S, Style=Neutral, Type=Outlined, State=Hover** — Второстепенная кнопка, компактная. Наведение.
- **Size=XS, Style=Neutral, Type=Outlined, State=Hover** — Второстепенная кнопка, минимальная. Наведение.
- **Size=S, Style=Neutral, Type=Text, State=Hover** — Второстепенная кнопка, компактная. Наведение.
- **Size=XS, Style=Neutral, Type=Text, State=Hover** — Второстепенная кнопка, минимальная. Наведение.
- **Size=S, Style=Neutral, Type=Filled, State=Press** — Белая кнопка с тенью, компактная. Нажатие.
- **Size=XS, Style=Neutral, Type=Filled, State=Press** — Белая кнопка с тенью, минимальная. Нажатие.
- **Size=S, Style=Neutral, Type=Outlined, State=Press** — Второстепенная кнопка, компактная. Нажатие.
- **Size=XS, Style=Neutral, Type=Outlined, State=Press** — Второстепенная кнопка, минимальная. Нажатие.
- **Size=S, Style=Neutral, Type=Text, State=Press** — Второстепенная кнопка, компактная. Нажатие.
- **Size=XS, Style=Neutral, Type=Text, State=Press** — Второстепенная кнопка, минимальная. Нажатие.
- **Size=S, Style=Disable, Type=Filled, State=Disable** — Кнопка недоступна. Нет прав или не выполнены условия — например, не заполнены обязательные поля.
- **Size=S, Style=Disable, Type=Filled, State=Loading** — Кнопка выполняет действие. Вместо содержимого — спиннер, повторное нажатие невозможно.
- **Size=XS, Style=Disable, Type=Filled, State=Disable** — Кнопка недоступна. Нет прав или не выполнены условия — например, не заполнены обязательные поля.
- **Size=XS, Style=Disable, Type=Filled, State=Loading** — Кнопка выполняет действие. Вместо содержимого — спиннер, повторное нажатие невозможно.
- **Size=S, Style=Disable, Type=Outlined, State=Disable** — Кнопка недоступна. Нет прав или не выполнены условия — например, не заполнены обязательные поля.
- **Size=S, Style=Disable, Type=Outlined, State=Loading** — Кнопка выполняет действие. Вместо содержимого — спиннер, повторное нажатие невозможно.
- **Size=XS, Style=Disable, Type=Outlined, State=Disable** — Кнопка недоступна. Нет прав или не выполнены условия — например, не заполнены обязательные поля.
- **Size=XS, Style=Disable, Type=Outlined, State=Loading** — Кнопка выполняет действие. Вместо содержимого — спиннер, повторное нажатие невозможно.
- **Size=S, Style=Disable, Type=Text, State=Disable** — Кнопка недоступна. Нет прав или не выполнены условия — например, не заполнены обязательные поля.
- **Size=S, Style=Disable, Type=Text, State=Loading** — Кнопка выполняет действие. Вместо содержимого — спиннер, повторное нажатие невозможно.
- **Size=XS, Style=Disable, Type=Text, State=Disable** — Кнопка недоступна. Нет прав или не выполнены условия — например, не заполнены обязательные поля.
- **Size=XS, Style=Disable, Type=Text, State=Loading** — Кнопка выполняет действие. Вместо содержимого — спиннер, повторное нажатие невозможно.
- **Size=S, Style=Accent, Type=Filled, State=Hover** — Основная кнопка, компактная. Наведение.
- **Size=XS, Style=Accent, Type=Filled, State=Hover** — Основная кнопка, минимальная. Наведение.
- **Size=S, Style=Accent, Type=Outlined, State=Hover** — Акцентное действие второго плана, компактная. Наведение.
- **Size=XS, Style=Accent, Type=Outlined, State=Hover** — Акцентное действие второго плана, минимальная. Наведение.
- **Size=S, Style=Accent, Type=Text, State=Hover** — Акцентное действие второго плана, компактная. Наведение.
- **Size=XS, Style=Accent, Type=Text, State=Hover** — Акцентное действие второго плана, минимальная. Наведение.
- **Size=S, Style=Accent, Type=Filled, State=Press** — Основная кнопка, компактная. Нажатие.
- **Size=XS, Style=Accent, Type=Filled, State=Press** — Основная кнопка, минимальная. Нажатие.
- **Size=S, Style=Accent, Type=Outlined, State=Press** — Акцентное действие второго плана, компактная. Нажатие.
- **Size=XS, Style=Accent, Type=Outlined, State=Press** — Акцентное действие второго плана, минимальная. Нажатие.
- **Size=S, Style=Accent, Type=Text, State=Press** — Акцентное действие второго плана, компактная. Нажатие.
- **Size=XS, Style=Accent, Type=Text, State=Press** — Акцентное действие второго плана, минимальная. Нажатие.
- **Size=S, Style=Positive, Type=Filled, State=Hover** — Подтверждающее действие, компактная. Наведение.
- **Size=XS, Style=Positive, Type=Filled, State=Hover** — Подтверждающее действие, минимальная. Наведение.
- **Size=S, Style=Positive, Type=Outlined, State=Hover** — Подтверждающее действие второго плана, компактная. Наведение.
- **Size=XS, Style=Positive, Type=Outlined, State=Hover** — Подтверждающее действие второго плана, минимальная. Наведение.
- **Size=S, Style=Positive, Type=Text, State=Hover** — Подтверждающее действие второго плана, компактная. Наведение.
- **Size=XS, Style=Positive, Type=Text, State=Hover** — Подтверждающее действие второго плана, минимальная. Наведение.
- **Size=S, Style=Positive, Type=Filled, State=Press** — Подтверждающее действие, компактная. Нажатие.
- **Size=XS, Style=Positive, Type=Filled, State=Press** — Подтверждающее действие, минимальная. Нажатие.
- **Size=S, Style=Positive, Type=Outlined, State=Press** — Подтверждающее действие второго плана, компактная. Нажатие.
- **Size=XS, Style=Positive, Type=Outlined, State=Press** — Подтверждающее действие второго плана, минимальная. Нажатие.
- **Size=S, Style=Positive, Type=Text, State=Press** — Подтверждающее действие второго плана, компактная. Нажатие.
- **Size=XS, Style=Positive, Type=Text, State=Press** — Подтверждающее действие второго плана, минимальная. Нажатие.
- **Size=S, Style=Warning, Type=Filled, State=Hover** — Действие с последствиями, компактная. Наведение.
- **Size=XS, Style=Warning, Type=Filled, State=Hover** — Действие с последствиями, минимальная. Наведение.
- **Size=S, Style=Warning, Type=Outlined, State=Hover** — Действие с последствиями второго плана, компактная. Наведение.
- **Size=XS, Style=Warning, Type=Outlined, State=Hover** — Действие с последствиями второго плана, минимальная. Наведение.
- **Size=S, Style=Warning, Type=Text, State=Hover** — Действие с последствиями второго плана, компактная. Наведение.
- **Size=XS, Style=Warning, Type=Text, State=Hover** — Действие с последствиями второго плана, минимальная. Наведение.
- **Size=S, Style=Warning, Type=Filled, State=Press** — Действие с последствиями, компактная. Нажатие.
- **Size=XS, Style=Warning, Type=Filled, State=Press** — Действие с последствиями, минимальная. Нажатие.
- **Size=S, Style=Warning, Type=Outlined, State=Press** — Действие с последствиями второго плана, компактная. Нажатие.
- **Size=XS, Style=Warning, Type=Outlined, State=Press** — Действие с последствиями второго плана, минимальная. Нажатие.
- **Size=S, Style=Warning, Type=Text, State=Press** — Действие с последствиями второго плана, компактная. Нажатие.
- **Size=XS, Style=Warning, Type=Text, State=Press** — Действие с последствиями второго плана, минимальная. Нажатие.
- **Size=S, Style=Negative, Type=Filled, State=Hover** — Опасное действие, компактная. Наведение.
- **Size=XS, Style=Negative, Type=Filled, State=Hover** — Опасное действие, минимальная. Наведение.
- **Size=S, Style=Negative, Type=Outlined, State=Hover** — Опасное действие второго плана, компактная. Наведение.
- **Size=XS, Style=Negative, Type=Outlined, State=Hover** — Опасное действие второго плана, минимальная. Наведение.
- **Size=S, Style=Negative, Type=Text, State=Hover** — Опасное действие второго плана, компактная. Наведение.
- **Size=XS, Style=Negative, Type=Text, State=Hover** — Опасное действие второго плана, минимальная. Наведение.
- **Size=S, Style=Negative, Type=Filled, State=Press** — Опасное действие, компактная. Нажатие.
- **Size=XS, Style=Negative, Type=Filled, State=Press** — Опасное действие, минимальная. Нажатие.
- **Size=S, Style=Negative, Type=Outlined, State=Press** — Опасное действие второго плана, компактная. Нажатие.
- **Size=XS, Style=Negative, Type=Outlined, State=Press** — Опасное действие второго плана, минимальная. Нажатие.
- **Size=S, Style=Negative, Type=Text, State=Press** — Опасное действие второго плана, компактная. Нажатие.
- **Size=XS, Style=Negative, Type=Text, State=Press** — Опасное действие второго плана, минимальная. Нажатие.

## Checkbox  (53806:5694)

Чекбокс — выбор нескольких независимых пунктов или включение отдельной настройки.
Используйте, когда пунктов несколько и можно выбрать любое их число; если выбор строго один — берите Radio button, если это переключатель режима «вкл/выкл» — Slide toggle.

Состав: квадратный индикатор без подписи. С подписью и support-текстом — Checkbox label; для набора пунктов с общим заголовком — Checkbox group.

Как выбрать вариант:
- Type=Deselected / Selected — пункт не выбран / выбран.
- Type=Indeterminate — часть вложенных пунктов выбрана (родительский пункт списка).
- Variant=Normal / Error / Disable — обычный, с ошибкой (в группе не выбран обязательный пункт), недоступный.

Состояния: Default, Hover, Press.

- **Variant=Error, Type=Deselected, State=Default** — Чекбокс с ошибкой — обязательный пункт не выбран, пункт не выбран, обычное состояние.
- **Variant=Disable, Type=Deselected, State=Default** — Чекбокс недоступен для изменения, пункт не выбран, обычное состояние.
- **Variant=Normal, Type=Selected, State=Default** — Чекбокс, пункт выбран, обычное состояние.
- **Variant=Error, Type=Selected, State=Default** — Чекбокс с ошибкой — обязательный пункт не выбран, пункт выбран, обычное состояние.
- **Variant=Disable, Type=Selected, State=Default** — Чекбокс недоступен для изменения, пункт выбран, обычное состояние.
- **Variant=Normal, Type=Indeterminate, State=Default** — Чекбокс, часть вложенных пунктов выбрана, обычное состояние.
- **Variant=Error, Type=Indeterminate, State=Default** — Чекбокс с ошибкой — обязательный пункт не выбран, часть вложенных пунктов выбрана, обычное состояние.
- **Variant=Disable, Type=Indeterminate, State=Default** — Чекбокс недоступен для изменения, часть вложенных пунктов выбрана, обычное состояние.
- **Variant=Normal, Type=Deselected, State=Hover** — Чекбокс, пункт не выбран, курсор над чекбоксом.
- **Variant=Normal, Type=Deselected, State=Default** — Чекбокс, пункт не выбран, обычное состояние.
- **Variant=Error, Type=Deselected, State=Hover** — Чекбокс с ошибкой — обязательный пункт не выбран, пункт не выбран, курсор над чекбоксом.
- **Variant=Normal, Type=Selected, State=Hover** — Чекбокс, пункт выбран, курсор над чекбоксом.
- **Variant=Error, Type=Selected, State=Hover** — Чекбокс с ошибкой — обязательный пункт не выбран, пункт выбран, курсор над чекбоксом.
- **Variant=Normal, Type=Indeterminate, State=Hover** — Чекбокс, часть вложенных пунктов выбрана, курсор над чекбоксом.
- **Variant=Error, Type=Indeterminate, State=Hover** — Чекбокс с ошибкой — обязательный пункт не выбран, часть вложенных пунктов выбрана, курсор над чекбоксом.
- **Variant=Normal, Type=Deselected, State=Press** — Чекбокс, пункт не выбран, нажатие.
- **Variant=Error, Type=Deselected, State=Press** — Чекбокс с ошибкой — обязательный пункт не выбран, пункт не выбран, нажатие.
- **Variant=Normal, Type=Selected, State=Press** — Чекбокс, пункт выбран, нажатие.
- **Variant=Error, Type=Selected, State=Press** — Чекбокс с ошибкой — обязательный пункт не выбран, пункт выбран, нажатие.
- **Variant=Normal, Type=Indeterminate, State=Press** — Чекбокс, часть вложенных пунктов выбрана, нажатие.
- **Variant=Error, Type=Indeterminate, State=Press** — Чекбокс с ошибкой — обязательный пункт не выбран, часть вложенных пунктов выбрана, нажатие.

## Checkbox label  (53810:880)

Чекбокс с подписью — основной способ показать пункт выбора: индикатор + текст, при необходимости support-текст под подписью.
Используйте в настройках и формах: «Фасовки у товаров», «Добавлять товары, которых не было в заказе».

Состав: чекбокс слева или справа от подписи (Checkbox left / Checkbox right), Label, Support text.
Кликабельна вся строка вместе с подписью — не ставьте отдельный текст рядом с чекбоксом.

Как выбрать вариант:
- Type=Deselected / Selected / Inderterminate — не выбран / выбран / частичный выбор.
- Variant=Normal / Error / Disable — обычный, с ошибкой (support-текст становится текстом ошибки), недоступный.

- **Variant=Normal, Type=Deselected** — Пункт с подписью, пункт не выбран.
- **Variant=Normal, Type=Selected** — Пункт с подписью, пункт выбран.
- **Variant=Normal, Type=Inderterminate** — Пункт с подписью, часть вложенных пунктов выбрана.
- **Variant=Error, Type=Deselected** — Пункт с подписью и ошибкой — обязательный пункт не выбран, пункт не выбран.
- **Variant=Error, Type=Selected** — Пункт с подписью и ошибкой — обязательный пункт не выбран, пункт выбран.
- **Variant=Error, Type=Inderterminate** — Пункт с подписью и ошибкой — обязательный пункт не выбран, часть вложенных пунктов выбрана.
- **Variant=Disable, Type=Deselected** — Пункт с подписью недоступен, пункт не выбран.
- **Variant=Disable, Type=Selected** — Пункт с подписью недоступен, пункт выбран.
- **Variant=Disable, Type=Inderterminate** — Пункт с подписью недоступен, часть вложенных пунктов выбрана.

## Checkbox group  (53810:889)

Группа чекбоксов — набор пунктов выбора с общим заголовком и общим support-текстом или текстом ошибки.
Используйте, когда пункты относятся к одному вопросу: «Товары и склад» с подсказкой «Выберите один вариант (обязательно)».

Состав: заголовок группы (Support up), пункты Checkbox label, общий текст под группой (Support down) — в ошибке он становится текстом ошибки для всей группы.

Как выбрать вариант:
- Orientation=Vertical — пункты в столбец, основной случай.
- Orientation=Horizontal — в строку, когда пунктов мало и они короткие.
- Orientation=Group — вложенная группа: родительский пункт и подчинённые под ним.

- **Orientation=Vertical** — Группа пунктов в столбец — основной случай.
- **Orientation=Horizontal** — Группа пунктов в строку — для коротких пунктов.
- **Orientation=Group** — Вложенная группа — родительский пункт и подчинённые под ним.

## Radio button  (54095:4263)

Радиокнопка — выбор строго одного варианта из нескольких.
Используйте, когда варианты взаимоисключающие: «Склад поставки». Если можно выбрать несколько — Checkbox.

Состав: круглый индикатор без подписи. С подписью — Radio button label; набор вариантов с заголовком — Radio button group.
Вариант по умолчанию должен быть выбран заранее — не оставляйте группу пустой.

Как выбрать вариант:
- Type=Deselected / Selected — вариант не выбран / выбран.
- Variant=Normal / Error / Disable — обычный, с ошибкой (в группе не выбран обязательный вариант), недоступный.

Состояния: Default, Hover, Press.

- **Variant=Error, Type=Deselected, State=Default** — Радиокнопка с ошибкой — вариант не выбран, вариант не выбран, обычное состояние.
- **Variant=Disable, Type=Deselected, State=Default** — Радиокнопка недоступна для изменения, вариант не выбран, обычное состояние.
- **Variant=Normal, Type=Selected, State=Default** — Радиокнопка, вариант выбран, обычное состояние.
- **Variant=Error, Type=Selected, State=Default** — Радиокнопка с ошибкой — вариант не выбран, вариант выбран, обычное состояние.
- **Variant=Disable, Type=Selected, State=Default** — Радиокнопка недоступна для изменения, вариант выбран, обычное состояние.
- **Variant=Normal, Type=Deselected, State=Hover** — Радиокнопка, вариант не выбран, курсор над радиокнопкой.
- **Variant=Normal, Type=Deselected, State=Default** — Радиокнопка, вариант не выбран, обычное состояние.
- **Variant=Error, Type=Deselected, State=Hover** — Радиокнопка с ошибкой — вариант не выбран, вариант не выбран, курсор над радиокнопкой.
- **Variant=Normal, Type=Selected, State=Hover** — Радиокнопка, вариант выбран, курсор над радиокнопкой.
- **Variant=Error, Type=Selected, State=Hover** — Радиокнопка с ошибкой — вариант не выбран, вариант выбран, курсор над радиокнопкой.
- **Variant=Normal, Type=Deselected, State=Press** — Радиокнопка, вариант не выбран, нажатие.
- **Variant=Error, Type=Deselected, State=Press** — Радиокнопка с ошибкой — вариант не выбран, вариант не выбран, нажатие.
- **Variant=Normal, Type=Selected, State=Press** — Радиокнопка, вариант выбран, нажатие.
- **Variant=Error, Type=Selected, State=Press** — Радиокнопка с ошибкой — вариант не выбран, вариант выбран, нажатие.

## Radio button label  (54095:4306)

Радиокнопка с подписью — основной способ показать вариант выбора: индикатор + текст, при необходимости support-текст.
Используйте в формах и настройках, где нужен один вариант из списка.

Состав: радиокнопка слева или справа от подписи (Icon left / Icon right), Label, Support.
Кликабельна вся строка вместе с подписью.

Как выбрать вариант:
- Type=Deselected / Selected — не выбран / выбран.
- Variant=Normal / Error / Disable — обычный, с ошибкой, недоступный.

- **Variant=Normal, Type=Deselected** — Вариант с подписью, вариант не выбран.
- **Variant=Normal, Type=Selected** — Вариант с подписью, вариант выбран.
- **Variant=Error, Type=Deselected** — Вариант с подписью и ошибкой, вариант не выбран.
- **Variant=Error, Type=Selected** — Вариант с подписью и ошибкой, вариант выбран.
- **Variant=Disable, Type=Deselected** — Вариант с подписью недоступен, вариант не выбран.
- **Variant=Disable, Type=Selected** — Вариант с подписью недоступен, вариант выбран.

## Radio button group  (54095:4392)

Группа радиокнопок — набор взаимоисключающих вариантов с общим заголовком и общим support-текстом или текстом ошибки.
Используйте, когда варианты относятся к одному вопросу и выбрать нужно один.

Состав: заголовок группы (Support up), варианты Radio button label, общий текст под группой (Support down) — в ошибке он становится текстом ошибки для всей группы.

Как выбрать вариант:
- Orientation=Vertical — варианты в столбец, основной случай.
- Orientation=Horizontal — в строку, когда вариантов мало и они короткие.

- **Orientation=Vertical** — Группа вариантов в столбец — основной случай.
- **Orientation=Horizontal** — Группа вариантов в строку — для коротких вариантов.

## Slide toggle  (52887:2592)

Переключатель — включение и выключение настройки, действие применяется сразу, без кнопки «Сохранить».
Используйте для режимов и правил: «Требуется подтверждение», «Стоимость товаров в заказе видна сотруднику ресторана». Если выбор нужно подтвердить кнопкой или пунктов несколько — Checkbox.

Состав: переключатель, Title, support-текст под заголовком (Support down), элемент справа (Element right) — например иконка-подсказка.
Подпись формулируйте утверждением, а не вопросом; не дублируйте в ней слово «включить».

Как выбрать вариант:
- Active=On / Off — настройка включена / выключена.
- State=Default, Hover, Disable — обычное состояние, курсор над переключателем, недоступен.

- **Active=On, State=Default** — Настройка включена, обычное состояние.
- **Active=On, State=Hover** — Настройка включена, курсор над переключателем.
- **Active=Off, State=Default** — Настройка выключена, обычное состояние.
- **Active=Off, State=Hover** — Настройка выключена, курсор над переключателем.
- **Active=On, State=Disable** — Настройка включена, недоступен для изменения.
- **Active=Off, State=Disable** — Настройка выключена, недоступен для изменения.

## Toggle buttons  (16992:8639)

Группа кнопок-переключателей — выбор режима отображения или фильтра прямо на экране, без раскрывающегося списка.
Используйте, когда вариантов 2–3 и они постоянно на виду; отдельная кнопка-переключатель — Button toggle.

Как выбрать вариант: по числу и наполнению кнопок в группе — 1, 2 или 3 кнопки, только иконки или текст.

- **Type=1 button** — Одна кнопка-переключатель — самостоятельный режим «вкл/выкл».
- **Type=Text** — Кнопки с текстом — когда режим иконкой не объяснить.
- **Type=2 buttons** — Две кнопки с иконками — выбор одного из двух режимов.
- **Type=3 buttons** — Три кнопки с иконками — выбор одного из трёх режимов.
- **Type=3 text** — Три кнопки с текстом — выбор одного из трёх режимов.

## Button toggle  (17039:71554)

Кнопка-переключатель — кнопка с состоянием «нажата / не нажата»: режим отображения, фильтр, форматирование.
Собирается в группы (Toggle buttons); для обычных действий берите Button, для действия одной иконкой — Button icon.

Как выбрать вариант:
- Type=Filled — активный, выбранный переключатель; Type=Outlined — невыбранный.
- Content=Icon / Text — только иконка (режим понятен по иконке) / с текстом.
- Size=M, S, XS — по плотности интерфейса: M в формах, S и XS в таблицах и панелях.

- **Size=S, Type=Outlined, Content=Icon** — Переключатель не выбран, только иконка, компактный, для таблиц и панелей.
- **Size=XS, Type=Outlined, Content=Icon** — Переключатель не выбран, только иконка, самый компактный, для плотных таблиц.
- **Size=S, Type=Filled, Content=Icon** — Переключатель выбран, только иконка, компактный, для таблиц и панелей.
- **Size=XS, Type=Filled, Content=Icon** — Переключатель выбран, только иконка, самый компактный, для плотных таблиц.
- **Size=M, Type=Filled, Content=Text** — Переключатель выбран, с текстом, основной размер.
- **Size=S, Type=Filled, Content=Text** — Переключатель выбран, с текстом, компактный, для таблиц и панелей.
- **Size=XS, Type=Filled, Content=Text** — Переключатель выбран, с текстом, самый компактный, для плотных таблиц.
- **Size=M, Type=Outlined, Content=Text** — Переключатель не выбран, с текстом, основной размер.
- **Size=S, Type=Outlined, Content=Text** — Переключатель не выбран, с текстом, компактный, для таблиц и панелей.
- **Size=XS, Type=Outlined, Content=Text** — Переключатель не выбран, с текстом, самый компактный, для плотных таблиц.
- **Size=M, Type=Outlined, Content=Icon** — Переключатель не выбран, только иконка, основной размер.
- **Size=M, Type=Filled, Content=Icon** — Переключатель выбран, только иконка, основной размер.

## Badge  (54428:187)

Бейдж — отметка о новом или требующем внимания на элементе: пункте меню, кнопке, вкладке, пункте списка.
Показывает количество или сам факт события; для метки состояния объекта используйте Status.

Как выбрать вариант:
- Type=Counter — с числом, когда количество важно; Type=Point — точка, когда важен только факт.
- Style=Accent — обычное новое; Positive — успешно; Warning — требует внимания; Negative — ошибка или просрочено.

Число не выдумывайте: бейдж показывает реальное количество, при большом значении — сокращение вида «99+».

- **Style=Accent, Type=Counter** — Бейдж с числом — показывает количество, обычное новое событие.
- **Style=Positive, Type=Counter** — Бейдж с числом — показывает количество, успешное завершение.
- **Style=Warning, Type=Counter** — Бейдж с числом — показывает количество, требует внимания.
- **Style=Negative, Type=Counter** — Бейдж с числом — показывает количество, ошибка или просрочено.
- **Style=Accent, Type=Point** — Бейдж-точка — показывает только факт события, обычное новое событие.
- **Style=Positive, Type=Point** — Бейдж-точка — показывает только факт события, успешное завершение.
- **Style=Warning, Type=Point** — Бейдж-точка — показывает только факт события, требует внимания.
- **Style=Negative, Type=Point** — Бейдж-точка — показывает только факт события, ошибка или просрочено.

## Button icon  (17123:81299)

Кнопка-иконка — действие без подписи, когда смысл понятен по иконке и место ограничено: строки таблиц, шапки блоков, панели инструментов.
Всегда добавляйте тултип с названием действия; если действие важное или неочевидное — берите обычную кнопку с текстом (Button).

Как выбрать вариант:
- Style=Neutral — обычное действие; Accent — акцентное; Positive — подтверждение; Warning — действие с последствиями; Negative — удаление и необратимое.
- Type=Filled — заметная; Outlined — второй план; Text — в таблицах и шапках, не перетягивает внимание.
- Size=M — основной; S — панели и плотные блоки; XS — строки таблиц и ячейки.

Состояния: Default, Hover, Press, Disable, Loading.

- **Size=M, Style=Neutral, Type=Filled, State=Default** — Обычное действие иконкой, с заливкой — заметная, основной размер, обычное состояние.
- **Size=M, Style=Neutral, Type=Outlined, State=Default** — Обычное действие иконкой, с рамкой — второй план, основной размер, обычное состояние.
- **Size=M, Style=Neutral, Type=Filled, State=Hover** — Обычное действие иконкой, с заливкой — заметная, основной размер, наведение.
- **Size=M, Style=Neutral, Type=Outlined, State=Hover** — Обычное действие иконкой, с рамкой — второй план, основной размер, наведение.
- **Size=M, Style=Neutral, Type=Filled, State=Press** — Обычное действие иконкой, с заливкой — заметная, основной размер, нажатие.
- **Size=M, Style=Neutral, Type=Outlined, State=Press** — Обычное действие иконкой, с рамкой — второй план, основной размер, нажатие.
- **Size=M, Style=Neutral, Type=Filled, State=Disable** — Обычное действие иконкой, с заливкой — заметная, основной размер, недоступна — нет прав или не выполнены условия.
- **Size=M, Style=Neutral, Type=Filled, State=Loading** — Обычное действие иконкой, с заливкой — заметная, основной размер, вместо иконки спиннер, повторное нажатие невозможно.
- **Size=M, Style=Neutral, Type=Outlined, State=Disable** — Обычное действие иконкой, с рамкой — второй план, основной размер, недоступна — нет прав или не выполнены условия.
- **Size=M, Style=Neutral, Type=Outlined, State=Loading** — Обычное действие иконкой, с рамкой — второй план, основной размер, вместо иконки спиннер, повторное нажатие невозможно.
- **Size=M, Style=Accent, Type=Filled, State=Default** — Акцентное действие иконкой, с заливкой — заметная, основной размер, обычное состояние.
- **Size=M, Style=Accent, Type=Outlined, State=Default** — Акцентное действие иконкой, с рамкой — второй план, основной размер, обычное состояние.
- **Size=M, Style=Accent, Type=Filled, State=Hover** — Акцентное действие иконкой, с заливкой — заметная, основной размер, наведение.
- **Size=M, Style=Accent, Type=Outlined, State=Hover** — Акцентное действие иконкой, с рамкой — второй план, основной размер, наведение.
- **Size=M, Style=Accent, Type=Filled, State=Press** — Акцентное действие иконкой, с заливкой — заметная, основной размер, нажатие.
- **Size=M, Style=Accent, Type=Outlined, State=Press** — Акцентное действие иконкой, с рамкой — второй план, основной размер, нажатие.
- **Size=M, Style=Positive, Type=Filled, State=Default** — Подтверждающее действие иконкой, с заливкой — заметная, основной размер, обычное состояние.
- **Size=M, Style=Positive, Type=Outlined, State=Default** — Подтверждающее действие иконкой, с рамкой — второй план, основной размер, обычное состояние.
- **Size=M, Style=Positive, Type=Filled, State=Hover** — Подтверждающее действие иконкой, с заливкой — заметная, основной размер, наведение.
- **Size=M, Style=Positive, Type=Outlined, State=Hover** — Подтверждающее действие иконкой, с рамкой — второй план, основной размер, наведение.
- **Size=M, Style=Positive, Type=Filled, State=Press** — Подтверждающее действие иконкой, с заливкой — заметная, основной размер, нажатие.
- **Size=M, Style=Positive, Type=Outlined, State=Press** — Подтверждающее действие иконкой, с рамкой — второй план, основной размер, нажатие.
- **Size=M, Style=Warning, Type=Filled, State=Default** — Действие с последствиями иконкой, с заливкой — заметная, основной размер, обычное состояние.
- **Size=M, Style=Warning, Type=Outlined, State=Default** — Действие с последствиями иконкой, с рамкой — второй план, основной размер, обычное состояние.
- **Size=M, Style=Warning, Type=Filled, State=Hover** — Действие с последствиями иконкой, с заливкой — заметная, основной размер, наведение.
- **Size=M, Style=Warning, Type=Outlined, State=Hover** — Действие с последствиями иконкой, с рамкой — второй план, основной размер, наведение.
- **Size=M, Style=Warning, Type=Filled, State=Press** — Действие с последствиями иконкой, с заливкой — заметная, основной размер, нажатие.
- **Size=M, Style=Warning, Type=Outlined, State=Press** — Действие с последствиями иконкой, с рамкой — второй план, основной размер, нажатие.
- **Size=M, Style=Negative, Type=Filled, State=Default** — Опасное действие иконкой — удаление или отмена, с заливкой — заметная, основной размер, обычное состояние.
- **Size=M, Style=Negative, Type=Outlined, State=Default** — Опасное действие иконкой — удаление или отмена, с рамкой — второй план, основной размер, обычное состояние.
- **Size=M, Style=Negative, Type=Filled, State=Hover** — Опасное действие иконкой — удаление или отмена, с заливкой — заметная, основной размер, наведение.
- **Size=M, Style=Negative, Type=Outlined, State=Hover** — Опасное действие иконкой — удаление или отмена, с рамкой — второй план, основной размер, наведение.
- **Size=M, Style=Negative, Type=Filled, State=Press** — Опасное действие иконкой — удаление или отмена, с заливкой — заметная, основной размер, нажатие.
- **Size=M, Style=Negative, Type=Outlined, State=Press** — Опасное действие иконкой — удаление или отмена, с рамкой — второй план, основной размер, нажатие.
- **Size=S, Style=Neutral, Type=Filled, State=Default** — Обычное действие иконкой, с заливкой — заметная, компактная для панелей и плотных блоков, обычное состояние.
- **Size=XS, Style=Neutral, Type=Filled, State=Default** — Обычное действие иконкой, с заливкой — заметная, минимальная для строк таблиц и ячеек, обычное состояние.
- **Size=S, Style=Neutral, Type=Outlined, State=Default** — Обычное действие иконкой, с рамкой — второй план, компактная для панелей и плотных блоков, обычное состояние.
- **Size=XS, Style=Neutral, Type=Outlined, State=Default** — Обычное действие иконкой, с рамкой — второй план, минимальная для строк таблиц и ячеек, обычное состояние.
- **Size=S, Style=Neutral, Type=Filled, State=Hover** — Обычное действие иконкой, с заливкой — заметная, компактная для панелей и плотных блоков, наведение.
- **Size=XS, Style=Neutral, Type=Filled, State=Hover** — Обычное действие иконкой, с заливкой — заметная, минимальная для строк таблиц и ячеек, наведение.
- **Size=S, Style=Neutral, Type=Outlined, State=Hover** — Обычное действие иконкой, с рамкой — второй план, компактная для панелей и плотных блоков, наведение.
- **Size=XS, Style=Neutral, Type=Outlined, State=Hover** — Обычное действие иконкой, с рамкой — второй план, минимальная для строк таблиц и ячеек, наведение.
- **Size=S, Style=Neutral, Type=Filled, State=Press** — Обычное действие иконкой, с заливкой — заметная, компактная для панелей и плотных блоков, нажатие.
- **Size=XS, Style=Neutral, Type=Filled, State=Press** — Обычное действие иконкой, с заливкой — заметная, минимальная для строк таблиц и ячеек, нажатие.
- **Size=S, Style=Neutral, Type=Outlined, State=Press** — Обычное действие иконкой, с рамкой — второй план, компактная для панелей и плотных блоков, нажатие.
- **Size=XS, Style=Neutral, Type=Outlined, State=Press** — Обычное действие иконкой, с рамкой — второй план, минимальная для строк таблиц и ячеек, нажатие.
- **Size=S, Style=Neutral, Type=Filled, State=Disable** — Обычное действие иконкой, с заливкой — заметная, компактная для панелей и плотных блоков, недоступна — нет прав или не выполнены условия.
- **Size=S, Style=Neutral, Type=Filled, State=Loading** — Обычное действие иконкой, с заливкой — заметная, компактная для панелей и плотных блоков, вместо иконки спиннер, повторное нажатие невозможно.
- **Size=XS, Style=Neutral, Type=Filled, State=Disable** — Обычное действие иконкой, с заливкой — заметная, минимальная для строк таблиц и ячеек, недоступна — нет прав или не выполнены условия.
- **Size=XS, Style=Neutral, Type=Filled, State=Loading** — Обычное действие иконкой, с заливкой — заметная, минимальная для строк таблиц и ячеек, вместо иконки спиннер, повторное нажатие невозможно.
- **Size=S, Style=Neutral, Type=Outlined, State=Disable** — Обычное действие иконкой, с рамкой — второй план, компактная для панелей и плотных блоков, недоступна — нет прав или не выполнены условия.
- **Size=S, Style=Neutral, Type=Outlined, State=Loading** — Обычное действие иконкой, с рамкой — второй план, компактная для панелей и плотных блоков, вместо иконки спиннер, повторное нажатие невозможно.
- **Size=XS, Style=Neutral, Type=Outlined, State=Disable** — Обычное действие иконкой, с рамкой — второй план, минимальная для строк таблиц и ячеек, недоступна — нет прав или не выполнены условия.
- **Size=XS, Style=Neutral, Type=Outlined, State=Loading** — Обычное действие иконкой, с рамкой — второй план, минимальная для строк таблиц и ячеек, вместо иконки спиннер, повторное нажатие невозможно.
- **Size=S, Style=Accent, Type=Filled, State=Default** — Акцентное действие иконкой, с заливкой — заметная, компактная для панелей и плотных блоков, обычное состояние.
- **Size=XS, Style=Accent, Type=Filled, State=Default** — Акцентное действие иконкой, с заливкой — заметная, минимальная для строк таблиц и ячеек, обычное состояние.
- **Size=S, Style=Accent, Type=Outlined, State=Default** — Акцентное действие иконкой, с рамкой — второй план, компактная для панелей и плотных блоков, обычное состояние.
- **Size=XS, Style=Accent, Type=Outlined, State=Default** — Акцентное действие иконкой, с рамкой — второй план, минимальная для строк таблиц и ячеек, обычное состояние.
- **Size=S, Style=Accent, Type=Filled, State=Hover** — Акцентное действие иконкой, с заливкой — заметная, компактная для панелей и плотных блоков, наведение.
- **Size=XS, Style=Accent, Type=Filled, State=Hover** — Акцентное действие иконкой, с заливкой — заметная, минимальная для строк таблиц и ячеек, наведение.
- **Size=S, Style=Accent, Type=Outlined, State=Hover** — Акцентное действие иконкой, с рамкой — второй план, компактная для панелей и плотных блоков, наведение.
- **Size=XS, Style=Accent, Type=Outlined, State=Hover** — Акцентное действие иконкой, с рамкой — второй план, минимальная для строк таблиц и ячеек, наведение.
- **Size=S, Style=Accent, Type=Filled, State=Press** — Акцентное действие иконкой, с заливкой — заметная, компактная для панелей и плотных блоков, нажатие.
- **Size=XS, Style=Accent, Type=Filled, State=Press** — Акцентное действие иконкой, с заливкой — заметная, минимальная для строк таблиц и ячеек, нажатие.
- **Size=S, Style=Accent, Type=Outlined, State=Press** — Акцентное действие иконкой, с рамкой — второй план, компактная для панелей и плотных блоков, нажатие.
- **Size=XS, Style=Accent, Type=Outlined, State=Press** — Акцентное действие иконкой, с рамкой — второй план, минимальная для строк таблиц и ячеек, нажатие.
- **Size=S, Style=Positive, Type=Filled, State=Default** — Подтверждающее действие иконкой, с заливкой — заметная, компактная для панелей и плотных блоков, обычное состояние.
- **Size=XS, Style=Positive, Type=Filled, State=Default** — Подтверждающее действие иконкой, с заливкой — заметная, минимальная для строк таблиц и ячеек, обычное состояние.
- **Size=S, Style=Positive, Type=Outlined, State=Default** — Подтверждающее действие иконкой, с рамкой — второй план, компактная для панелей и плотных блоков, обычное состояние.
- **Size=XS, Style=Positive, Type=Outlined, State=Default** — Подтверждающее действие иконкой, с рамкой — второй план, минимальная для строк таблиц и ячеек, обычное состояние.
- **Size=S, Style=Positive, Type=Filled, State=Hover** — Подтверждающее действие иконкой, с заливкой — заметная, компактная для панелей и плотных блоков, наведение.
- **Size=XS, Style=Positive, Type=Filled, State=Hover** — Подтверждающее действие иконкой, с заливкой — заметная, минимальная для строк таблиц и ячеек, наведение.
- **Size=S, Style=Positive, Type=Outlined, State=Hover** — Подтверждающее действие иконкой, с рамкой — второй план, компактная для панелей и плотных блоков, наведение.
- **Size=XS, Style=Positive, Type=Outlined, State=Hover** — Подтверждающее действие иконкой, с рамкой — второй план, минимальная для строк таблиц и ячеек, наведение.
- **Size=S, Style=Positive, Type=Filled, State=Press** — Подтверждающее действие иконкой, с заливкой — заметная, компактная для панелей и плотных блоков, нажатие.
- **Size=XS, Style=Positive, Type=Filled, State=Press** — Подтверждающее действие иконкой, с заливкой — заметная, минимальная для строк таблиц и ячеек, нажатие.
- **Size=S, Style=Positive, Type=Outlined, State=Press** — Подтверждающее действие иконкой, с рамкой — второй план, компактная для панелей и плотных блоков, нажатие.
- **Size=XS, Style=Positive, Type=Outlined, State=Press** — Подтверждающее действие иконкой, с рамкой — второй план, минимальная для строк таблиц и ячеек, нажатие.
- **Size=S, Style=Warning, Type=Filled, State=Default** — Действие с последствиями иконкой, с заливкой — заметная, компактная для панелей и плотных блоков, обычное состояние.
- **Size=XS, Style=Warning, Type=Filled, State=Default** — Действие с последствиями иконкой, с заливкой — заметная, минимальная для строк таблиц и ячеек, обычное состояние.
- **Size=S, Style=Warning, Type=Outlined, State=Default** — Действие с последствиями иконкой, с рамкой — второй план, компактная для панелей и плотных блоков, обычное состояние.
- **Size=XS, Style=Warning, Type=Outlined, State=Default** — Действие с последствиями иконкой, с рамкой — второй план, минимальная для строк таблиц и ячеек, обычное состояние.
- **Size=S, Style=Warning, Type=Filled, State=Hover** — Действие с последствиями иконкой, с заливкой — заметная, компактная для панелей и плотных блоков, наведение.
- **Size=XS, Style=Warning, Type=Filled, State=Hover** — Действие с последствиями иконкой, с заливкой — заметная, минимальная для строк таблиц и ячеек, наведение.
- **Size=S, Style=Warning, Type=Outlined, State=Hover** — Действие с последствиями иконкой, с рамкой — второй план, компактная для панелей и плотных блоков, наведение.
- **Size=XS, Style=Warning, Type=Outlined, State=Hover** — Действие с последствиями иконкой, с рамкой — второй план, минимальная для строк таблиц и ячеек, наведение.
- **Size=S, Style=Warning, Type=Filled, State=Press** — Действие с последствиями иконкой, с заливкой — заметная, компактная для панелей и плотных блоков, нажатие.
- **Size=XS, Style=Warning, Type=Filled, State=Press** — Действие с последствиями иконкой, с заливкой — заметная, минимальная для строк таблиц и ячеек, нажатие.
- **Size=S, Style=Warning, Type=Outlined, State=Press** — Действие с последствиями иконкой, с рамкой — второй план, компактная для панелей и плотных блоков, нажатие.
- **Size=XS, Style=Warning, Type=Outlined, State=Press** — Действие с последствиями иконкой, с рамкой — второй план, минимальная для строк таблиц и ячеек, нажатие.
- **Size=S, Style=Negative, Type=Filled, State=Default** — Опасное действие иконкой — удаление или отмена, с заливкой — заметная, компактная для панелей и плотных блоков, обычное состояние.
- **Size=XS, Style=Negative, Type=Filled, State=Default** — Опасное действие иконкой — удаление или отмена, с заливкой — заметная, минимальная для строк таблиц и ячеек, обычное состояние.
- **Size=S, Style=Negative, Type=Outlined, State=Default** — Опасное действие иконкой — удаление или отмена, с рамкой — второй план, компактная для панелей и плотных блоков, обычное состояние.
- **Size=XS, Style=Negative, Type=Outlined, State=Default** — Опасное действие иконкой — удаление или отмена, с рамкой — второй план, минимальная для строк таблиц и ячеек, обычное состояние.
- **Size=S, Style=Negative, Type=Filled, State=Hover** — Опасное действие иконкой — удаление или отмена, с заливкой — заметная, компактная для панелей и плотных блоков, наведение.
- **Size=XS, Style=Negative, Type=Filled, State=Hover** — Опасное действие иконкой — удаление или отмена, с заливкой — заметная, минимальная для строк таблиц и ячеек, наведение.
- **Size=S, Style=Negative, Type=Outlined, State=Hover** — Опасное действие иконкой — удаление или отмена, с рамкой — второй план, компактная для панелей и плотных блоков, наведение.
- **Size=XS, Style=Negative, Type=Outlined, State=Hover** — Опасное действие иконкой — удаление или отмена, с рамкой — второй план, минимальная для строк таблиц и ячеек, наведение.
- **Size=S, Style=Negative, Type=Filled, State=Press** — Опасное действие иконкой — удаление или отмена, с заливкой — заметная, компактная для панелей и плотных блоков, нажатие.
- **Size=XS, Style=Negative, Type=Filled, State=Press** — Опасное действие иконкой — удаление или отмена, с заливкой — заметная, минимальная для строк таблиц и ячеек, нажатие.
- **Size=S, Style=Negative, Type=Outlined, State=Press** — Опасное действие иконкой — удаление или отмена, с рамкой — второй план, компактная для панелей и плотных блоков, нажатие.
- **Size=XS, Style=Negative, Type=Outlined, State=Press** — Опасное действие иконкой — удаление или отмена, с рамкой — второй план, минимальная для строк таблиц и ячеек, нажатие.
- **Size=M, Style=Neutral, Type=Text, State=Default** — Обычное действие иконкой, без фона — для таблиц и шапок, основной размер, обычное состояние.
- **Size=M, Style=Neutral, Type=Text, State=Hover** — Обычное действие иконкой, без фона — для таблиц и шапок, основной размер, наведение.
- **Size=M, Style=Neutral, Type=Text, State=Press** — Обычное действие иконкой, без фона — для таблиц и шапок, основной размер, нажатие.
- **Size=M, Style=Neutral, Type=Text, State=Disable** — Обычное действие иконкой, без фона — для таблиц и шапок, основной размер, недоступна — нет прав или не выполнены условия.
- **Size=M, Style=Neutral, Type=Text, State=Loading** — Обычное действие иконкой, без фона — для таблиц и шапок, основной размер, вместо иконки спиннер, повторное нажатие невозможно.
- **Size=M, Style=Accent, Type=Text, State=Default** — Акцентное действие иконкой, без фона — для таблиц и шапок, основной размер, обычное состояние.
- **Size=M, Style=Accent, Type=Text, State=Hover** — Акцентное действие иконкой, без фона — для таблиц и шапок, основной размер, наведение.
- **Size=M, Style=Accent, Type=Text, State=Press** — Акцентное действие иконкой, без фона — для таблиц и шапок, основной размер, нажатие.
- **Size=M, Style=Positive, Type=Text, State=Default** — Подтверждающее действие иконкой, без фона — для таблиц и шапок, основной размер, обычное состояние.
- **Size=M, Style=Positive, Type=Text, State=Hover** — Подтверждающее действие иконкой, без фона — для таблиц и шапок, основной размер, наведение.
- **Size=M, Style=Positive, Type=Text, State=Press** — Подтверждающее действие иконкой, без фона — для таблиц и шапок, основной размер, нажатие.
- **Size=M, Style=Warning, Type=Text, State=Default** — Действие с последствиями иконкой, без фона — для таблиц и шапок, основной размер, обычное состояние.
- **Size=M, Style=Warning, Type=Text, State=Hover** — Действие с последствиями иконкой, без фона — для таблиц и шапок, основной размер, наведение.
- **Size=M, Style=Warning, Type=Text, State=Press** — Действие с последствиями иконкой, без фона — для таблиц и шапок, основной размер, нажатие.
- **Size=M, Style=Negative, Type=Text, State=Default** — Опасное действие иконкой — удаление или отмена, без фона — для таблиц и шапок, основной размер, обычное состояние.
- **Size=M, Style=Negative, Type=Text, State=Hover** — Опасное действие иконкой — удаление или отмена, без фона — для таблиц и шапок, основной размер, наведение.
- **Size=M, Style=Negative, Type=Text, State=Press** — Опасное действие иконкой — удаление или отмена, без фона — для таблиц и шапок, основной размер, нажатие.
- **Size=S, Style=Neutral, Type=Text, State=Default** — Обычное действие иконкой, без фона — для таблиц и шапок, компактная для панелей и плотных блоков, обычное состояние.
- **Size=XS, Style=Neutral, Type=Text, State=Default** — Обычное действие иконкой, без фона — для таблиц и шапок, минимальная для строк таблиц и ячеек, обычное состояние.
- **Size=S, Style=Neutral, Type=Text, State=Hover** — Обычное действие иконкой, без фона — для таблиц и шапок, компактная для панелей и плотных блоков, наведение.
- **Size=XS, Style=Neutral, Type=Text, State=Hover** — Обычное действие иконкой, без фона — для таблиц и шапок, минимальная для строк таблиц и ячеек, наведение.
- **Size=S, Style=Neutral, Type=Text, State=Press** — Обычное действие иконкой, без фона — для таблиц и шапок, компактная для панелей и плотных блоков, нажатие.
- **Size=XS, Style=Neutral, Type=Text, State=Press** — Обычное действие иконкой, без фона — для таблиц и шапок, минимальная для строк таблиц и ячеек, нажатие.
- **Size=S, Style=Neutral, Type=Text, State=Disable** — Обычное действие иконкой, без фона — для таблиц и шапок, компактная для панелей и плотных блоков, недоступна — нет прав или не выполнены условия.
- **Size=S, Style=Neutral, Type=Text, State=Loading** — Обычное действие иконкой, без фона — для таблиц и шапок, компактная для панелей и плотных блоков, вместо иконки спиннер, повторное нажатие невозможно.
- **Size=XS, Style=Neutral, Type=Text, State=Disable** — Обычное действие иконкой, без фона — для таблиц и шапок, минимальная для строк таблиц и ячеек, недоступна — нет прав или не выполнены условия.
- **Size=XS, Style=Neutral, Type=Text, State=Loading** — Обычное действие иконкой, без фона — для таблиц и шапок, минимальная для строк таблиц и ячеек, вместо иконки спиннер, повторное нажатие невозможно.
- **Size=S, Style=Positive, Type=Text, State=Default** — Подтверждающее действие иконкой, без фона — для таблиц и шапок, компактная для панелей и плотных блоков, обычное состояние.
- **Size=XS, Style=Positive, Type=Text, State=Default** — Подтверждающее действие иконкой, без фона — для таблиц и шапок, минимальная для строк таблиц и ячеек, обычное состояние.
- **Size=S, Style=Positive, Type=Text, State=Hover** — Подтверждающее действие иконкой, без фона — для таблиц и шапок, компактная для панелей и плотных блоков, наведение.
- **Size=XS, Style=Positive, Type=Text, State=Hover** — Подтверждающее действие иконкой, без фона — для таблиц и шапок, минимальная для строк таблиц и ячеек, наведение.
- **Size=S, Style=Positive, Type=Text, State=Press** — Подтверждающее действие иконкой, без фона — для таблиц и шапок, компактная для панелей и плотных блоков, нажатие.
- **Size=XS, Style=Positive, Type=Text, State=Press** — Подтверждающее действие иконкой, без фона — для таблиц и шапок, минимальная для строк таблиц и ячеек, нажатие.
- **Size=S, Style=Accent, Type=Text, State=Default** — Акцентное действие иконкой, без фона — для таблиц и шапок, компактная для панелей и плотных блоков, обычное состояние.
- **Size=XS, Style=Accent, Type=Text, State=Default** — Акцентное действие иконкой, без фона — для таблиц и шапок, минимальная для строк таблиц и ячеек, обычное состояние.
- **Size=S, Style=Accent, Type=Text, State=Hover** — Акцентное действие иконкой, без фона — для таблиц и шапок, компактная для панелей и плотных блоков, наведение.
- **Size=XS, Style=Accent, Type=Text, State=Hover** — Акцентное действие иконкой, без фона — для таблиц и шапок, минимальная для строк таблиц и ячеек, наведение.
- **Size=S, Style=Accent, Type=Text, State=Press** — Акцентное действие иконкой, без фона — для таблиц и шапок, компактная для панелей и плотных блоков, нажатие.
- **Size=XS, Style=Accent, Type=Text, State=Press** — Акцентное действие иконкой, без фона — для таблиц и шапок, минимальная для строк таблиц и ячеек, нажатие.
- **Size=S, Style=Warning, Type=Text, State=Default** — Действие с последствиями иконкой, без фона — для таблиц и шапок, компактная для панелей и плотных блоков, обычное состояние.
- **Size=XS, Style=Warning, Type=Text, State=Default** — Действие с последствиями иконкой, без фона — для таблиц и шапок, минимальная для строк таблиц и ячеек, обычное состояние.
- **Size=S, Style=Warning, Type=Text, State=Hover** — Действие с последствиями иконкой, без фона — для таблиц и шапок, компактная для панелей и плотных блоков, наведение.
- **Size=XS, Style=Warning, Type=Text, State=Hover** — Действие с последствиями иконкой, без фона — для таблиц и шапок, минимальная для строк таблиц и ячеек, наведение.
- **Size=S, Style=Warning, Type=Text, State=Press** — Действие с последствиями иконкой, без фона — для таблиц и шапок, компактная для панелей и плотных блоков, нажатие.
- **Size=XS, Style=Warning, Type=Text, State=Press** — Действие с последствиями иконкой, без фона — для таблиц и шапок, минимальная для строк таблиц и ячеек, нажатие.
- **Size=S, Style=Negative, Type=Text, State=Default** — Опасное действие иконкой — удаление или отмена, без фона — для таблиц и шапок, компактная для панелей и плотных блоков, обычное состояние.
- **Size=XS, Style=Negative, Type=Text, State=Default** — Опасное действие иконкой — удаление или отмена, без фона — для таблиц и шапок, минимальная для строк таблиц и ячеек, обычное состояние.
- **Size=S, Style=Negative, Type=Text, State=Hover** — Опасное действие иконкой — удаление или отмена, без фона — для таблиц и шапок, компактная для панелей и плотных блоков, наведение.
- **Size=XS, Style=Negative, Type=Text, State=Hover** — Опасное действие иконкой — удаление или отмена, без фона — для таблиц и шапок, минимальная для строк таблиц и ячеек, наведение.
- **Size=S, Style=Negative, Type=Text, State=Press** — Опасное действие иконкой — удаление или отмена, без фона — для таблиц и шапок, компактная для панелей и плотных блоков, нажатие.
- **Size=XS, Style=Negative, Type=Text, State=Press** — Опасное действие иконкой — удаление или отмена, без фона — для таблиц и шапок, минимальная для строк таблиц и ячеек, нажатие.

## Button group  (53619:15772)

Группа кнопок — несколько действий рядом с единым выравниванием и отступами: подвал диалога, шапка блока, панель над таблицей.
Порядок слева направо: сначала второстепенные действия, главное — последним справа. Больше трёх кнопок в группу не ставьте, лишнее уводите в меню.

Как выбрать вариант:
- Orientation=Horizontally — в строку, основной случай; Vertically — в столбец, для узких блоков и мобильных экранов.
- Margins=On — с внешними отступами группы; Off — без них, когда отступы задаёт контейнер.

- **Orientation=Horizontally, Margins=Off** — Кнопки в строку — основной случай, без внешних отступов — отступы задаёт контейнер.
- **Orientation=Horizontally, Margins=On** — Кнопки в строку — основной случай, с внешними отступами группы.
- **Orientation=Vertically, Margins=Off** — Кнопки в столбец — для узких блоков и мобильных экранов, без внешних отступов — отступы задаёт контейнер.
- **Orientation=Vertically, Margins=On** — Кнопки в столбец — для узких блоков и мобильных экранов, с внешними отступами группы.

## Button icon group  (53828:5738)

Группа кнопок-иконок — набор действий одной иконкой рядом: панель инструментов, действия в строке таблицы, шапка карточки.
Всем кнопкам в группе давайте тултипы; разнородные действия не смешивайте в одну группу.

Как выбрать вариант: Horizontally — в строку (основной случай), Vertically — в столбец для узких панелей.

- **Orientation=Horizontally** — Кнопки-иконки в строку — основной случай.
- **Orientation=Vertically** — Кнопки-иконки в столбец — для узких панелей.

## Icon size  (52927:6286)

Контейнер иконки или картинки — задаёт единый размер и выравнивание всего, что вставляется как иконка: в кнопки, поля, пункты списков, ячейки таблиц.
Вставляйте иконку внутрь этого контейнера, а не напрямую — иначе иконки в одном ряду разъезжаются по высоте.

Как выбрать вариант:
- Content=Icon — векторная иконка; Content=Img — картинка или аватар.
- Size — под размер родителя: мелкие в строках таблиц и подписях, средние в кнопках и полях, крупные в пустых состояниях и плитках.

- **Size=16, Content=Icon** — Контейнер векторной иконки, мелкий — подписи, плотные строки таблиц.
- **Size=16, Content=Img** — Контейнер картинки или аватара, мелкий — подписи, плотные строки таблиц.
- **Size=20, Content=Icon** — Контейнер векторной иконки, основной — кнопки, поля, пункты списков.
- **Size=20, Content=Img** — Контейнер картинки или аватара, основной — кнопки, поля, пункты списков.
- **Size=24, Content=Icon** — Контейнер векторной иконки, заметный — шапки блоков и акцентные действия.
- **Size=24, Content=Img** — Контейнер картинки или аватара, заметный — шапки блоков и акцентные действия.
- **Size=32, Content=Icon** — Контейнер векторной иконки, крупный — карточки и плитки.
- **Size=32, Content=Img** — Контейнер картинки или аватара, крупный — карточки и плитки.
- **Size=36, Content=Icon** — Контейнер векторной иконки, крупный — заголовки блоков и пустые состояния.
- **Size=36, Content=Img** — Контейнер картинки или аватара, крупный — заголовки блоков и пустые состояния.
- **Size=40, Content=Icon** — Контейнер векторной иконки, самый крупный — пустые состояния и аватары.
- **Size=40, Content=Img** — Контейнер картинки или аватара, самый крупный — пустые состояния и аватары.

## Icon group  (53467:1060)

Группа иконок — две и более иконки рядом с единым зазором: индикаторы в строке таблицы, набор статусных иконок в карточке.
Зазор берите из варианта, вручную не раздвигайте.

Как выбрать вариант: по нужному зазору между иконками — плотный или разряженный.

- **Size gap=2x** — Иконки с плотным зазором — для строк таблиц и ячеек.
- **Size gap=4x** — Иконки с разряженным зазором — для карточек и панелей.

## Control number button  (53829:6130)

Кнопка шага числа — «минус» и «плюс» у поля ввода количества: количество товара в заказе, порции, число дней.
Используйте только вместе с полем числа (Input number, Input for number), отдельно от поля не ставьте.

Как выбрать вариант:
- Type=Left — уменьшить (слева от поля); Type=Right — увеличить (справа от поля).
- Size=S, XS — по размеру поля рядом.

Состояния: Default, Hover, Press, Disable (например, достигнут минимум или максимум).

- **Size=XS, Type=Left, State=Default** — Кнопка уменьшения числа — слева от поля, минимальная — под поле в строке таблицы, обычное состояние.
- **Size=S, Type=Left, State=Default** — Кнопка уменьшения числа — слева от поля, компактная — под поле обычного размера, обычное состояние.
- **Size=XS, Type=Left, State=Hover** — Кнопка уменьшения числа — слева от поля, минимальная — под поле в строке таблицы, наведение.
- **Size=S, Type=Left, State=Hover** — Кнопка уменьшения числа — слева от поля, компактная — под поле обычного размера, наведение.
- **Size=XS, Type=Left, State=Press** — Кнопка уменьшения числа — слева от поля, минимальная — под поле в строке таблицы, нажатие.
- **Size=S, Type=Left, State=Press** — Кнопка уменьшения числа — слева от поля, компактная — под поле обычного размера, нажатие.
- **Size=XS, Type=Left, State=Disable** — Кнопка уменьшения числа — слева от поля, минимальная — под поле в строке таблицы, недоступна — достигнут предел или поле заблокировано.
- **Size=S, Type=Left, State=Disable** — Кнопка уменьшения числа — слева от поля, компактная — под поле обычного размера, недоступна — достигнут предел или поле заблокировано.
- **Size=XS, Type=Right, State=Default** — Кнопка увеличения числа — справа от поля, минимальная — под поле в строке таблицы, обычное состояние.
- **Size=S, Type=Right, State=Default** — Кнопка увеличения числа — справа от поля, компактная — под поле обычного размера, обычное состояние.
- **Size=XS, Type=Right, State=Hover** — Кнопка увеличения числа — справа от поля, минимальная — под поле в строке таблицы, наведение.
- **Size=S, Type=Right, State=Hover** — Кнопка увеличения числа — справа от поля, компактная — под поле обычного размера, наведение.
- **Size=XS, Type=Right, State=Press** — Кнопка увеличения числа — справа от поля, минимальная — под поле в строке таблицы, нажатие.
- **Size=S, Type=Right, State=Press** — Кнопка увеличения числа — справа от поля, компактная — под поле обычного размера, нажатие.
- **Size=XS, Type=Right, State=Disable** — Кнопка увеличения числа — справа от поля, минимальная — под поле в строке таблицы, недоступна — достигнут предел или поле заблокировано.
- **Size=S, Type=Right, State=Disable** — Кнопка увеличения числа — справа от поля, компактная — под поле обычного размера, недоступна — достигнут предел или поле заблокировано.

## Control group number button  (53828:5569)

Пара кнопок шага числа — «минус» и «плюс» одним блоком рядом с полем количества.
Берите эту пару, чтобы кнопки гарантированно совпадали по размеру и зазору; одиночная кнопка — Control number button.

Как выбрать вариант: по размеру поля, рядом с которым стоит пара.

- **Size=S** — Пара кнопок под поле обычного размера.
- **Size=XS** — Пара кнопок под поле в строке таблицы.

## Control arrow button  (52868:3935)

Кнопка-стрелка — шаг по списку или календарю: предыдущий и следующий месяц, прокрутка вкладок, перелистывание.
Используйте парой (назад и вперёд); когда шаг недоступен — блокируйте кнопку, а не убирайте её.

Как выбрать вариант: по размеру блока, в котором стоит кнопка.

- **Size=XS** — Минимальная стрелка — строки таблиц и ячейки.
- **Size=S** — Компактная стрелка — плотные панели и вкладки.
- **Size=M** — Стрелка основного размера — панели и календарь.

## Button  (16953:14851)

⚠️ Устаревшая кнопка со страницы Draft. В новых макетах не используйте — актуальные компоненты: Button (кнопка с текстом) и Button icon (кнопка-иконка).
Оставлена для старых экранов, которые ещё не перевели на актуальный набор.

- **Type=Icon, State=Enabled, Icon=Yes** — Устаревшая кнопка, обычное состояние, с заливкой.
- **Type=Icon_outlined, State=Enabled, Icon=Yes** — Устаревшая кнопка, обычное состояние, с рамкой.
- **Type=Icon_outlined, State=No border, Icon=Yes** — Устаревшая кнопка без рамки, с рамкой.
- **Type=Icon, State=Secondary, Icon=Yes** — Устаревшая кнопка второго плана, с заливкой.
- **Type=Icon_outlined, State=Secondary, Icon=Yes** — Устаревшая кнопка второго плана, с рамкой.
- **Type=Icon, State=Primary, Icon=Yes** — Устаревшая основная кнопка, с заливкой.
- **Type=Icon_outlined, State=Primary, Icon=Yes** — Устаревшая основная кнопка, с рамкой.
- **Type=Icon, State=Warning, Icon=Yes** — Устаревшая кнопка действия с последствиями, с заливкой.
- **Type=Icon_outlined, State=Warning, Icon=Yes** — Устаревшая кнопка действия с последствиями, с рамкой.
- **Type=Icon, State=Error, Icon=Yes** — Устаревшая кнопка опасного действия, с заливкой.
- **Type=Icon_outlined, State=Error, Icon=Yes** — Устаревшая кнопка опасного действия, с рамкой.
- **Type=Icon, State=Disable, Icon=Yes** — Устаревшая кнопка, недоступна, с заливкой.
- **Type=Icon_outlined, State=Disable, Icon=Yes** — Устаревшая кнопка, недоступна, с рамкой.

## Button New  (16321:6498)

⚠️ Черновая кнопка со страницы Draft — эксперимент по высоте кнопки. В макетах не используйте, берите Button.

- **Type=btn-36** — Черновая кнопка обычной высоты — не для использования.
- **Type=btn-28** — Черновая кнопка уменьшенной высоты — не для использования.

## Icon size_Draft  (54063:12911)

⚠️ Черновой контейнер иконки со страницы Draft. В макетах не используйте — актуальный компонент Icon size.

- **Size=16** — Черновой размер — не для использования.
- **Size=20** — Черновой размер — не для использования.
- **Size=24** — Черновой размер — не для использования.
- **Size=32** — Черновой размер — не для использования.
- **Size=36** — Черновой размер — не для использования.
- **Size=40** — Черновой размер — не для использования.

## Textarea  (57916:9023)

Многострочное поле — длинный текст: комментарий к заказу, примечание к накладной, описание позиции.
Берите его, когда ответ не помещается в одну строку; для короткого значения используйте Input.

Состав: Label над полем, само поле с прокруткой, support-текст под полем (подсказка или ошибка).
Высоту задавайте под ожидаемый текст, растягивать вручную не нужно.

Как выбрать вариант:
- Variant=Empty — поле без текста; Populated — с введённым текстом.
- Состояния: Default, Hover, Focus, Focus+Placeholder, Focus+Value, Error, Error+Hover, Disable.

- **Size=M, Variant=Populated, State=Disable** — Многострочное поле с введённым текстом, недоступно для ввода.
- **Size=M, Variant=Empty, State=Disable** — Многострочное поле без текста, недоступно для ввода.
- **Size=M, Variant=Populated, State=Focus** — Многострочное поле с введённым текстом, ввод активен.
- **Size=M, Variant=Populated, State=Focus+Placeholder** — Многострочное поле с введённым текстом, ввод активен, показан placeholder.
- **Size=M, Variant=Populated, State=Focus+Value** — Многострочное поле с введённым текстом, ввод активен, есть текст.
- **Size=M, Variant=Populated, State=Error** — Многострочное поле с введённым текстом, ошибка — текст не подходит или поле обязательное.
- **Size=M, Variant=Empty, State=Error** — Многострочное поле без текста, ошибка — текст не подходит или поле обязательное.
- **Size=M, Variant=Populated, State=Error+Hover** — Многострочное поле с введённым текстом, ошибка, наведение.
- **Size=M, Variant=Empty, State=Error+Hover** — Многострочное поле без текста, ошибка, наведение.
- **Size=M, Variant=Populated, State=Default** — Многострочное поле с введённым текстом, обычное состояние.
- **Size=M, Variant=Empty, State=Default** — Многострочное поле без текста, обычное состояние.
- **Size=M, Variant=Populated, State=Hover** — Многострочное поле с введённым текстом, наведение.
- **Size=M, Variant=Empty, State=Hover** — Многострочное поле без текста, наведение.

## Search  (54453:1620)

Поле поиска — фильтрация списка или таблицы по строке: поиск товара, накладной, сотрудника.
Показывайте результаты по мере ввода, а не по кнопке; крестик справа очищает запрос.

Как выбрать вариант:
- Size=M — основной; S — панели и шапки блоков; XS — строки таблиц и плотные панели.
- Состояния: Default, Hover, Focus, Focus+Value, Completed, Disable.

- **Size=M, State=Disable** — Поиск недоступен, основной размер.
- **Size=S, State=Disable** — Поиск недоступен, компактный для панелей и шапок.
- **Size=M, State=Completed** — Поиск с применённым запросом — показаны результаты, основной размер.
- **Size=S, State=Completed** — Поиск с применённым запросом — показаны результаты, компактный для панелей и шапок.
- **Size=M, State=Focus+Value** — Поиск с введённым запросом, ввод активен, основной размер.
- **Size=S, State=Focus+Value** — Поиск с введённым запросом, ввод активен, компактный для панелей и шапок.
- **Size=M, State=Focus** — Поиск, ввод активен, основной размер.
- **Size=S, State=Focus** — Поиск, ввод активен, компактный для панелей и шапок.
- **Size=M, State=Hover** — Поиск, наведение, основной размер.
- **Size=S, State=Hover** — Поиск, наведение, компактный для панелей и шапок.
- **Size=M, State=Default** — Пустой поиск, основной размер.
- **Size=S, State=Default** — Пустой поиск, компактный для панелей и шапок.
- **Size=XS, State=Default** — Пустой поиск, минимальный для строк таблиц.
- **Size=XS, State=Hover** — Поиск, наведение, минимальный для строк таблиц.
- **Size=XS, State=Disable** — Поиск недоступен, минимальный для строк таблиц.

## Input number  (17193:84750)

Поле числа — количество и числовые значения: количество товара, цена, процент, число дней.
Рядом стоят кнопки шага «минус» и «плюс»; вводить можно и с клавиатуры.
Не используйте его для текста и для дат — для дат берите Input Datepicker.

Как выбрать вариант:
- Variant=Empty — без значения; Populated — со значением; No label up — без Label сверху (для таблиц и плотных форм).
- Size=M — основной; S и XS — плотные формы, панели, строки таблиц.
- Состояния: Default, Hover, Focus, Focus+Placeholder, Focus+Value, Error, Error+Hover, Disable.

- **Size=M, Variant=Populated, State=Default** — Поле числа со значением, обычное состояние, основной размер.
- **Size=M, Variant=Empty, State=Default** — Поле числа без значения, обычное состояние, основной размер.
- **Size=M, Variant=Populated, State=Focus** — Поле числа со значением, ввод активен, основной размер.
- **Size=M, Variant=Populated, State=Error** — Поле числа со значением, ошибка — значение вне допустимого или поле обязательное, основной размер.
- **Size=M, Variant=Empty, State=Error** — Поле числа без значения, ошибка — значение вне допустимого или поле обязательное, основной размер.
- **Size=M, Variant=Populated, State=Hover** — Поле числа со значением, наведение, основной размер.
- **Size=M, Variant=Empty, State=Hover** — Поле числа без значения, наведение, основной размер.
- **Size=M, Variant=Populated, State=Focus+Placeholder** — Поле числа со значением, ввод активен, показан placeholder, основной размер.
- **Size=M, Variant=Populated, State=Focus+Value** — Поле числа со значением, ввод активен, есть значение, основной размер.
- **Size=M, Variant=Populated, State=Error+Hover** — Поле числа со значением, ошибка, наведение, основной размер.
- **Size=M, Variant=Empty, State=Error+Hover** — Поле числа без значения, ошибка, наведение, основной размер.
- **Size=M, Variant=Populated, State=Disable** — Поле числа со значением, недоступно для ввода, основной размер.
- **Size=M, Variant=Empty, State=Disable** — Поле числа без значения, недоступно для ввода, основной размер.
- **Size=S, Variant=No label up, State=Default** — Поле числа без Label сверху, обычное состояние, компактное для плотных форм и панелей.
- **Size=S, Variant=No label up, State=Focus** — Поле числа без Label сверху, ввод активен, компактное для плотных форм и панелей.
- **Size=S, Variant=No label up, State=Error** — Поле числа без Label сверху, ошибка — значение вне допустимого или поле обязательное, компактное для плотных форм и панелей.
- **Size=S, Variant=No label up, State=Hover** — Поле числа без Label сверху, наведение, компактное для плотных форм и панелей.
- **Size=S, Variant=No label up, State=Focus+Placeholder** — Поле числа без Label сверху, ввод активен, показан placeholder, компактное для плотных форм и панелей.
- **Size=S, Variant=No label up, State=Focus+Value** — Поле числа без Label сверху, ввод активен, есть значение, компактное для плотных форм и панелей.
- **Size=S, Variant=No label up, State=Error+Hover** — Поле числа без Label сверху, ошибка, наведение, компактное для плотных форм и панелей.
- **Size=S, Variant=No label up, State=Disable** — Поле числа без Label сверху, недоступно для ввода, компактное для плотных форм и панелей.
- **Size=XS, Variant=No label up, State=Default** — Поле числа без Label сверху, обычное состояние, минимальное для строк таблиц.
- **Size=XS, Variant=No label up, State=Focus** — Поле числа без Label сверху, ввод активен, минимальное для строк таблиц.
- **Size=XS, Variant=No label up, State=Error** — Поле числа без Label сверху, ошибка — значение вне допустимого или поле обязательное, минимальное для строк таблиц.
- **Size=XS, Variant=No label up, State=Hover** — Поле числа без Label сверху, наведение, минимальное для строк таблиц.
- **Size=XS, Variant=No label up, State=Focus+Placeholder** — Поле числа без Label сверху, ввод активен, показан placeholder, минимальное для строк таблиц.
- **Size=XS, Variant=No label up, State=Focus+Value** — Поле числа без Label сверху, ввод активен, есть значение, минимальное для строк таблиц.
- **Size=XS, Variant=No label up, State=Error+Hover** — Поле числа без Label сверху, ошибка, наведение, минимальное для строк таблиц.
- **Size=XS, Variant=No label up, State=Disable** — Поле числа без Label сверху, недоступно для ввода, минимальное для строк таблиц.

## Input for number  (53827:5155)

Поле для числа без кнопок шага — числовое значение, которое вводят только с клавиатуры: цена, вес, процент скидки.
Если значение удобно менять по шагу — берите Input number с кнопками «минус» и «плюс».

Как выбрать вариант:
- Size=Normal — в формах; Compact — в таблицах и плотных панелях.
- Состояния: Default, Hover, Focus, Error, Disable.

- **Size=Normal, State=Default** — Поле числа, обычное состояние, размер для форм.
- **Size=Normal, State=Hover** — Поле числа, наведение, размер для форм.
- **Size=Normal, State=Focus** — Поле числа, ввод активен, размер для форм.
- **Size=Normal, State=Error** — Поле числа с ошибкой — значение вне допустимого, размер для форм.
- **Size=Normal, State=Disable** — Поле числа недоступно для ввода, размер для форм.
- **Size=Compact, State=Default** — Поле числа, обычное состояние, компактный размер для таблиц и панелей.
- **Size=Compact, State=Hover** — Поле числа, наведение, компактный размер для таблиц и панелей.
- **Size=Compact, State=Focus** — Поле числа, ввод активен, компактный размер для таблиц и панелей.
- **Size=Compact, State=Error** — Поле числа с ошибкой — значение вне допустимого, компактный размер для таблиц и панелей.
- **Size=Compact, State=Disable** — Поле числа недоступно для ввода, компактный размер для таблиц и панелей.

## Input number_but icon  (56967:10506)

Иконка-кнопка внутри поля числа — служебный элемент компонента Input number (шаг значения и очистка).
Отдельно в макетах не используйте: он вставляется внутрь поля, а не на экран.


## Input cell  (60229:74436)

Поле ввода внутри ячейки таблицы — правка значения прямо в строке, без отдельной формы.
Используйте в редактируемых таблицах: количество, цена, комментарий в накладной. Вне таблицы берите обычное поле Input.

Состояния: Default, Hover, Focus, Focus+Placeholder, Focus+Value, Error, Error+Hover, Disable.

- **State=Default** — Ячейка с полем ввода, обычное состояние.
- **State=Hover** — Ячейка с полем ввода, наведение.
- **State=Focus** — Ячейка с полем ввода, ввод активен.
- **State=Focus+Placeholder** — Ячейка с полем ввода: ввод активен, показан placeholder.
- **State=Vocus+Value** — Ячейка с полем ввода: ввод активен, есть значение.
- **State=Error** — Ячейка с полем ввода: ошибка — значение не подходит.
- **State=Error+Hover** — Ячейка с полем ввода: ошибка, наведение.
- **State=Disable** — Ячейка с полем ввода недоступна.

## Select form  (57862:17226)

Список выбора — выбор значения из готового набора: склад, поставщик, тип оплаты.
Берите его, когда вариантов много и они известны заранее; для 2–3 вариантов на виду используйте Radio button или Toggle buttons, для поиска по большому справочнику — Autocomplete.

Состав: Label, поле со значением и стрелкой, выпадающий список (Select item внутри контейнера), support-текст под полем.

Как выбрать вариант:
- Variant=Empty — значение не выбрано; Populated — значение выбрано.
- Size=M — основной; S и XS — плотные формы и таблицы.
- Состояния: Default, Hover, Focus, Focus+Value, Error, Disable.

- **Size=M, Variant=Empty, State=Default** — Список выбора без значения, обычное состояние, основной размер.
- **Size=S, Variant=Empty, State=Default** — Список выбора без значения, обычное состояние, компактный для плотных форм.
- **Size=XS, Variant=Empty, State=Default** — Список выбора без значения, обычное состояние, минимальный для строк таблиц.
- **Size=M, Variant=Populated, State=Default** — Список выбора с выбранным значением, обычное состояние, основной размер.
- **Size=M, Variant=Empty, State=Hover** — Список выбора без значения, наведение, основной размер.
- **Size=S, Variant=Empty, State=Hover** — Список выбора без значения, наведение, компактный для плотных форм.
- **Size=XS, Variant=Empty, State=Hover** — Список выбора без значения, наведение, минимальный для строк таблиц.
- **Size=M, Variant=Populated, State=Hover** — Список выбора с выбранным значением, наведение, основной размер.
- **Size=M, Variant=Populated, State=Focus** — Список выбора с выбранным значением, список открыт, основной размер.
- **Size=S, Variant=Empty, State=Focus** — Список выбора без значения, список открыт, компактный для плотных форм.
- **Size=XS, Variant=Empty, State=Focus** — Список выбора без значения, список открыт, минимальный для строк таблиц.
- **Size=M, Variant=Populated, State=Focus+Value** — Список выбора с выбранным значением, список открыт, значение выбрано, основной размер.
- **Size=S, Variant=Empty, State=Focus+Value** — Список выбора без значения, список открыт, значение выбрано, компактный для плотных форм.
- **Size=XS, Variant=Empty, State=Focus+Value** — Список выбора без значения, список открыт, значение выбрано, минимальный для строк таблиц.
- **Size=M, Variant=Empty, State=Error** — Список выбора без значения, ошибка — значение не выбрано или недопустимо, основной размер.
- **Size=S, Variant=Empty, State=Error** — Список выбора без значения, ошибка — значение не выбрано или недопустимо, компактный для плотных форм.
- **Size=XS, Variant=Empty, State=Error** — Список выбора без значения, ошибка — значение не выбрано или недопустимо, минимальный для строк таблиц.
- **Size=M, Variant=Populated, State=Error** — Список выбора с выбранным значением, ошибка — значение не выбрано или недопустимо, основной размер.
- **Size=M, Variant=Empty, State=Disable** — Список выбора без значения, недоступен для выбора, основной размер.
- **Size=S, Variant=Empty, State=Disable** — Список выбора без значения, недоступен для выбора, компактный для плотных форм.
- **Size=XS, Variant=Empty, State=Disable** — Список выбора без значения, недоступен для выбора, минимальный для строк таблиц.
- **Size=M, Variant=Populated, State=Disable** — Список выбора с выбранным значением, недоступен для выбора, основной размер.

## Select cell  (60231:74976)

Список выбора внутри ячейки таблицы — выбор значения прямо в строке: склад, статус, единица измерения.
Используйте в редактируемых таблицах; вне таблицы берите Select form.

Состояния: Default, Hover, Focus, Focus+Value, Error, Error+Hover, Disable.

- **State=Default** — Ячейка со списком выбора, обычное состояние.
- **State=Hover** — Ячейка со списком выбора, наведение.
- **State=Focus** — Ячейка со списком выбора: список открыт.
- **State=Focus+Value** — Ячейка со списком выбора: список открыт, значение выбрано.
- **State=Error** — Ячейка со списком выбора: ошибка — значение не подходит.
- **State=Error+Hover** — Ячейка со списком выбора: ошибка, наведение.
- **State=Disable** — Ячейка со списком выбора недоступна.

## Select item  (57735:17872)

Пункт выпадающего списка — одна строка выбора внутри Select: значение, при необходимости с подзаголовком и иконкой.
Подзаголовок используйте, когда одного названия недостаточно (артикул, склад, комментарий).

Состояния: Default, Hover, Press, Selected, Back selected, Error, Disable.

- **State=Default, Subtitle=True** — Пункт списка, обычное состояние, с подзаголовком.
- **State=Default, Subtitle=False** — Пункт списка, обычное состояние, без подзаголовка.
- **State=Hover, Subtitle=False** — Пункт списка, наведение, без подзаголовка.
- **State=Press, Subtitle=False** — Пункт списка, нажатие, без подзаголовка.
- **State=Error, Subtitle=False** — Пункт списка с ошибкой — значение недопустимо, без подзаголовка.
- **State=Selected, Subtitle=False** — Выбранный пункт списка, без подзаголовка.
- **State=Back selected, Subtitle=False** — Ранее выбранный пункт — подсвечен при открытии списка, без подзаголовка.
- **State=Disable, Subtitle=False** — Пункт списка недоступен для выбора, без подзаголовка.

## Select (Сontainer)  (57735:17612)

Контейнер выпадающего списка — подложка с тенью, в которую складываются пункты Select item.
Берите его для собственного списка вместо рисования своей подложки; отступы и тень уже заданы.

- **Type=Сontainer** — Контейнер выпадающего списка — подложка для пунктов.

## Autocomplete form  (58107:8230)

Поле с подсказкой из справочника — ввод с поиском по большому списку: товар, контрагент, сотрудник.
Берите его, когда вариантов слишком много для обычного списка; подсказки показывайте по мере ввода.

Как выбрать вариант:
- Variant=Empty — значение не выбрано; Populated — значение выбрано.
- Состояния: Default, Hover, Focus, Focus+Value, Error, Disable.

- **Variant=Empty, State=Default** — Поле с подсказками без значения, обычное состояние.
- **Variant=Populated, State=Default** — Поле с подсказками и выбранным значением, обычное состояние.
- **Variant=Empty, State=Hover** — Поле с подсказками без значения, наведение.
- **Variant=Populated, State=Hover** — Поле с подсказками и выбранным значением, наведение.
- **Variant=Populated, State=Focus** — Поле с подсказками и выбранным значением, ввод активен, показаны подсказки.
- **Variant=Populated, State=Focus+Value** — Поле с подсказками и выбранным значением, ввод активен, значение выбрано.
- **Variant=Empty, State=Error** — Поле с подсказками без значения, ошибка — значение не выбрано из справочника.
- **Variant=Populated, State=Error** — Поле с подсказками и выбранным значением, ошибка — значение не выбрано из справочника.
- **Variant=Empty, State=Disable** — Поле с подсказками без значения, недоступно для ввода.
- **Variant=Populated, State=Disable** — Поле с подсказками и выбранным значением, недоступно для ввода.

## Input Datepicker  (58548:4764)

Поле даты — ввод и выбор даты: дата поставки, период отчёта, срок годности.
Дату можно ввести с клавиатуры или выбрать в календаре по иконке справа. Для времени берите Input Timepicker.

Как выбрать вариант: Empty — дата не выбрана, Populated — дата выбрана.

- **Type=Empty** — Поле даты без значения.
- **Type=Populated** — Поле даты с выбранной датой.

## Input Timepicker  (58982:9561)

Поле времени — ввод и выбор времени: время доставки, начало смены, время закрытия.
Время можно ввести с клавиатуры или выбрать в списке по иконке справа. Для даты берите Input Datepicker.

Как выбрать вариант: Empty — время не выбрано, Populated — время выбрано.

- **Type=Empty** — Поле времени без значения.
- **Type=Populated** — Поле времени с выбранным временем.

## Element Form Field  (60231:76795)

Слот поля внутри ячейки таблицы — выбирает, какое именно поле ввода стоит в редактируемой ячейке.
Служебный компонент таблицы: подставляется внутрь ячейки, отдельно на экран не ставится.

Как выбрать вариант: по типу значения в ячейке — обычный ввод, выбор из списка или ввод тегов.

- **Variant=Input cell** — В ячейке — обычное поле ввода.
- **Variant=Select cell** — В ячейке — список выбора.
- **Variant=Chips input cell** — В ячейке — ввод тегов.

## Form field cell  (60220:72732)

Обёртка редактируемой ячейки таблицы — выравнивание и отступы поля внутри ячейки.
Служебный компонент таблицы: используется внутри строки, отдельно на экран не ставится.

- **Variant=Table content cell Chips input** — Ячейка таблицы с вводом тегов.

## Chips  (17168:83542)

Чип — компактная метка-фильтр или выбранное значение, которое можно снять: применённые фильтры над таблицей, выбранные товары, теги.
Чип всегда относится к чему-то выбранному пользователем; для статуса объекта берите Status, для количества — Badge.

Состав: текст, элемент слева (иконка или аватар) и элемент справа (крестик для снятия).

Как выбрать вариант:
- Type=Filled — выбранный, активный чип; Outlined — доступный к выбору.
- Size=M — основной; S — плотные панели и строки таблиц.
- Состояния: Default, Hover, Focus, Press, Disable.

- **Size=M, Type=Outlined, State=Default** — Невыбранный чип — доступен к выбору, обычное состояние, основной размер.
- **Size=S, Type=Outlined, State=Default** — Невыбранный чип — доступен к выбору, обычное состояние, компактный для панелей и строк таблиц.
- **Size=M, Type=Outlined, State=Hover** — Невыбранный чип — доступен к выбору, наведение, основной размер.
- **Size=M, Type=Outlined, State=Focus** — Невыбранный чип — доступен к выбору, выделен с клавиатуры, основной размер.
- **Size=S, Type=Outlined, State=Hover** — Невыбранный чип — доступен к выбору, наведение, компактный для панелей и строк таблиц.
- **Size=S, Type=Outlined, State=Focus** — Невыбранный чип — доступен к выбору, выделен с клавиатуры, компактный для панелей и строк таблиц.
- **Size=M, Type=Outlined, State=Press** — Невыбранный чип — доступен к выбору, нажатие, основной размер.
- **Size=S, Type=Outlined, State=Press** — Невыбранный чип — доступен к выбору, нажатие, компактный для панелей и строк таблиц.
- **Size=M, Type=Outlined, State=Disable** — Невыбранный чип — доступен к выбору, недоступен, основной размер.
- **Size=S, Type=Outlined, State=Disable** — Невыбранный чип — доступен к выбору, недоступен, компактный для панелей и строк таблиц.
- **Size=M, Type=Filled, State=Default** — Выбранный чип, обычное состояние, основной размер.
- **Size=S, Type=Filled, State=Default** — Выбранный чип, обычное состояние, компактный для панелей и строк таблиц.
- **Size=M, Type=Filled, State=Hover** — Выбранный чип, наведение, основной размер.
- **Size=S, Type=Filled, State=Hover** — Выбранный чип, наведение, компактный для панелей и строк таблиц.
- **Size=M, Type=Filled, State=Press** — Выбранный чип, нажатие, основной размер.
- **Size=S, Type=Filled, State=Press** — Выбранный чип, нажатие, компактный для панелей и строк таблиц.
- **Size=M, Type=Filled, State=Disable** — Выбранный чип, недоступен, основной размер.
- **Size=S, Type=Filled, State=Disable** — Выбранный чип, недоступен, компактный для панелей и строк таблиц.

## Chips group  (55750:5485)

Группа чипов — набор фильтров или выбранных значений в один ряд с переносом на новую строку.
Берите группу, чтобы зазоры и перенос были одинаковыми; при большом числе чипов сворачивайте лишние в «ещё N».

Как выбрать вариант: по размеру чипов в группе.

- **Size=M** — Группа чипов основного размера.
- **Size=S** — Группа компактных чипов — для панелей и таблиц.

## Chips Input  (52916:14622)

Поле ввода тегов — несколько значений в одном поле, каждое становится чипом: список товаров, получатели, метки.
Берите его, когда значений несколько и их набирают вручную; для одного значения из справочника — Autocomplete, для выбора из списка — Select.

Как выбрать вариант:
- Size=M — основной; S — плотные формы и панели.
- Состояния: Default, Hover, Focus, Focus+Placeholder, Focus+Value, Error, Error+Hover, Disable.

- **Size=M, State=Default** — Поле тегов, обычное состояние, основной размер.
- **Size=M, State=Hover** — Поле тегов, наведение, основной размер.
- **Size=M, State=Focus** — Поле тегов, ввод активен, основной размер.
- **Size=M, State=Focus+Value** — Поле тегов: ввод активен, теги добавлены, основной размер.
- **Size=M, State=Focus+Placeholder** — Поле тегов: ввод активен, показан placeholder, основной размер.
- **Size=M, State=Error** — Поле тегов с ошибкой — значение не подходит, основной размер.
- **Size=M, State=Error+Hover** — Поле тегов с ошибкой, наведение, основной размер.
- **Size=M, State=Disable** — Поле тегов недоступно, основной размер.
- **Size=S, State=Default** — Поле тегов, обычное состояние, компактное для плотных форм.
- **Size=S, State=Hover** — Поле тегов, наведение, компактное для плотных форм.
- **Size=S, State=Focus** — Поле тегов, ввод активен, компактное для плотных форм.
- **Size=S, State=Focus+Value** — Поле тегов: ввод активен, теги добавлены, компактное для плотных форм.
- **Size=S, State=Focus+Placeholder** — Поле тегов: ввод активен, показан placeholder, компактное для плотных форм.
- **Size=S, State=Error** — Поле тегов с ошибкой — значение не подходит, компактное для плотных форм.
- **Size=S, State=Error+Hover** — Поле тегов с ошибкой, наведение, компактное для плотных форм.
- **Size=S, State=Disable** — Поле тегов недоступно, компактное для плотных форм.

## Chips Input  (61382:55775)

Поле ввода тегов — несколько значений в одном поле, каждое становится чипом: список товаров, получатели, метки.
Берите его, когда значений несколько и их набирают вручную; для одного значения из справочника — Autocomplete, для выбора из списка — Select.

Как выбрать вариант:
- Size=M — основной; S — плотные формы и панели.
- Состояния: Default, Hover, Focus, Focus+Placeholder, Focus+Value, Error, Error+Hover, Disable.

- **Size=M, State=Default** — Поле тегов, обычное состояние, основной размер.
- **Size=M, State=Hover** — Поле тегов, наведение, основной размер.
- **Size=M, State=Focus** — Поле тегов, ввод активен, основной размер.
- **Size=M, State=Focus+Value** — Поле тегов: ввод активен, теги добавлены, основной размер.
- **Size=M, State=Focus+Placeholder** — Поле тегов: ввод активен, показан placeholder, основной размер.
- **Size=M, State=Error** — Поле тегов с ошибкой — значение не подходит, основной размер.
- **Size=M, State=Error+Hover** — Поле тегов с ошибкой, наведение, основной размер.
- **Size=M, State=Disable** — Поле тегов недоступно, основной размер.
- **Size=S, State=Default** — Поле тегов, обычное состояние, компактное для плотных форм.
- **Size=S, State=Hover** — Поле тегов, наведение, компактное для плотных форм.
- **Size=S, State=Focus** — Поле тегов, ввод активен, компактное для плотных форм.
- **Size=S, State=Focus+Value** — Поле тегов: ввод активен, теги добавлены, компактное для плотных форм.
- **Size=S, State=Focus+Placeholder** — Поле тегов: ввод активен, показан placeholder, компактное для плотных форм.
- **Size=S, State=Error** — Поле тегов с ошибкой — значение не подходит, компактное для плотных форм.
- **Size=S, State=Error+Hover** — Поле тегов с ошибкой, наведение, компактное для плотных форм.
- **Size=S, State=Disable** — Поле тегов недоступно, компактное для плотных форм.

## Chips input cell  (60231:75648)

Ввод тегов внутри ячейки таблицы — несколько значений прямо в строке: комплектующие, метки, склады.
Используйте в редактируемых таблицах; вне таблицы берите Chips Input.

Состояния: Default, Hover, Focus, Focus+Placeholder, Focus+Value, Error, Error+Hover, Disable.

- **State=Default** — Ячейка с вводом тегов, обычное состояние.
- **State=Hover** — Ячейка с вводом тегов, наведение.
- **State=Focus** — Ячейка с вводом тегов, ввод активен.
- **State=Focus+Placeholder** — Ячейка с вводом тегов: ввод активен, показан placeholder.
- **State=Focus+Value** — Ячейка с вводом тегов: ввод активен, теги добавлены.
- **State=Error** — Ячейка с вводом тегов: ошибка — значение не подходит.
- **State=Error+Hover** — Ячейка с вводом тегов: ошибка, наведение.
- **State=Disable** — Ячейка с вводом тегов недоступна.

## Table Chips Input  (60220:70978)

Ячейка таблицы с вводом тегов — готовая ячейка вместе с полем тегов и отступами строки.
Служебный компонент таблицы: ставится в строку, отдельно на экран не выносится.

Состояния: Default, Hover, Focus, Focus+Placeholder, Focus+Value, Error, Error+Hover, Disable.

- **Style=Default** — Ячейка таблицы с вводом тегов, обычное состояние.
- **Style=Hover** — Ячейка таблицы с вводом тегов, наведение.
- **Style=Focus** — Ячейка таблицы с вводом тегов, ввод активен.
- **Style=Focus+Placeholder** — Ячейка таблицы с вводом тегов: ввод активен, показан placeholder.
- **Style=Vocus+Value** — Ячейка таблицы с вводом тегов: ввод активен, теги добавлены.
- **Style=Error** — Ячейка таблицы с вводом тегов: ошибка — значение не подходит.
- **Style=Error+Hover** — Ячейка таблицы с вводом тегов: ошибка, наведение.
- **Style=Disable** — Ячейка таблицы с вводом тегов недоступна.

## Table content cell  (52954:1253)

Ячейка таблицы — одно значение в строке данных: название товара, количество, цена, ссылка на документ.
Выравнивание берите по типу данных: текст влево, числа вправо. Пустое значение показывайте прочерком, а не пустотой.

Состояния: Default, Null (нет значения), Link, Hover, Focus, Edit (правка значения), Error, Disable.

- **State=Default** — Ячейка таблицы со значением.
- **State=Null** — Ячейка без значения — показан прочерк.
- **State=Disable** — Ячейка недоступна для правки.
- **State=Link** — Ячейка-ссылка — открывает документ или карточку.
- **State=Hover** — Ячейка таблицы, наведение.
- **State=Focus** — Ячейка таблицы выделена с клавиатуры.
- **State=Edit** — Ячейка в режиме правки значения.
- **State=Error** — Ячейка с ошибкой — значение не подходит.

## Table content row  (60105:56764)

Строка таблицы — набор ячеек одной записи: позиция накладной, товар, документ.
Выделение строки используйте для действий над записью; чередование фона включайте только в длинных таблицах.

Состояния: Default, Zebra (чередование фона), Hover, Selected, Disable.

- **State=Default** — Строка таблицы, обычное состояние.
- **State=Disable** — Строка недоступна для выбора и правки.
- **State=Hover** — Строка таблицы, наведение.
- **State=Selected** — Выбранная строка — над ней выполняются действия.
- **State=Zebra** — Строка с чередующимся фоном — для длинных таблиц.

## Table header cell  (60098:45424)

Ячейка шапки таблицы — название колонки и сортировка по ней.
Название колонки пишите коротко, единицы измерения выносите в название, а не в каждую ячейку.

Состояния: Default, Hover, Disable (сортировка недоступна).

- **State=Default** — Ячейка шапки таблицы — название колонки.
- **State=Hover** — Ячейка шапки таблицы, наведение — доступна сортировка.
- **State=Disable** — Ячейка шапки таблицы без сортировки.

## Table header row  (53556:3571)

Шапка таблицы — строка с названиями колонок, закреплена при прокрутке.
Собирается из ячеек Table header cell; порядок колонок должен совпадать с порядком в строках данных.

- **State=Default** — Шапка таблицы с названиями колонок.

## Table footer  (59207:20759)

Подвал таблицы — итоги по колонкам и постраничная навигация.
Итоги показывайте по тем же колонкам, что и в строках; если итогов нет — подвал не добавляйте.

- **Type=Default** — Подвал таблицы — итоги и навигация по страницам.

## Table 2 lvl  (60074:44684)

Вложенный уровень таблицы — подстрока и подъячейка внутри строки: состав блюда, позиции в документе, разбивка по складам.
Берите его, когда запись раскрывается в детали; для отдельной таблицы уровень не нужен.

Как выбрать вариант: подстрока целиком или отдельная ячейка второго уровня.

- **Type=Table cell 2 lvl** — Ячейка второго уровня — значение внутри подстроки.
- **Type=Table row 2 lvl** — Подстрока второго уровня — детали записи.

## Element cell  (58885:32432)

Слот содержимого ячейки таблицы — выбирает, что стоит внутри ячейки: текст, иконка, кнопка, статус, поле ввода.
Служебный компонент таблицы: подставляется в ячейку, отдельно на экран не ставится.

Как выбрать вариант: по тому, что показывает ячейка.

- **Variant=Icon size** — Слот содержимого ячейки таблицы. В ячейке — одна иконка.
- **Variant=Icon group** — Слот содержимого ячейки таблицы. В ячейке — несколько иконок.
- **Variant=Button** — Слот содержимого ячейки таблицы. В ячейке — кнопка с текстом.
- **Variant=Button icon** — Слот содержимого ячейки таблицы. В ячейке — кнопка-иконка.
- **Variant=Status** — Слот содержимого ячейки таблицы. В ячейке — метка состояния.
- **Variant=Text UI** — Слот содержимого ячейки таблицы. В ячейке — текст.
- **Variant=Input number** — Слот содержимого ячейки таблицы. В ячейке — поле числа.
- **Variant=Checkbox** — Слот содержимого ячейки таблицы. В ячейке — чекбокс.
- **Variant=Slide toggle** — Слот содержимого ячейки таблицы. В ячейке — переключатель.
- **Variant=Chips** — Слот содержимого ячейки таблицы. В ячейке — чипы.
- **Variant=Cell Input** — Слот содержимого ячейки таблицы. В ячейке — поле ввода.

## Elementare cell  (60220:72578)

Слот содержимого ячейки таблицы — вложенный служебный набор того, что можно поставить в ячейку.
Используется внутри строки таблицы; на экран отдельно не выносится.

Как выбрать вариант: по тому, что показывает ячейка.

- **Variant=Icon size** — Слот содержимого ячейки таблицы. В ячейке — одна иконка.
- **Variant=Icon group** — Слот содержимого ячейки таблицы. В ячейке — несколько иконок.
- **Variant=Button** — Слот содержимого ячейки таблицы. В ячейке — кнопка с текстом.
- **Variant=Button icon** — Слот содержимого ячейки таблицы. В ячейке — кнопка-иконка.
- **Variant=Status** — Слот содержимого ячейки таблицы. В ячейке — метка состояния.
- **Variant=Text UI** — Слот содержимого ячейки таблицы. В ячейке — текст.
- **Variant=Input number** — Слот содержимого ячейки таблицы. В ячейке — поле числа.
- **Variant=Checkbox** — Слот содержимого ячейки таблицы. В ячейке — чекбокс.
- **Variant=Slide toggle** — Слот содержимого ячейки таблицы. В ячейке — переключатель.
- **Variant=Chips** — Слот содержимого ячейки таблицы. В ячейке — чипы.

## List item  (54101:7922)

Пункт списка — одна строка перечня: товар, документ, сотрудник, пункт меню действий.
Вся строка кликабельна; действия над пунктом ставьте справа.

Состояния: Default, Hover, Press, Selected, Back selected, Link, Negative (удаление), Disable.

- **State=Default** — Пункт списка, обычное состояние.
- **State=Hover** — Пункт списка, наведение.
- **State=Press** — Пункт списка, нажатие.
- **State=Negative** — Пункт удаления или отмены — необратимое действие.
- **State=Selected** — Выбранный пункт списка.
- **State=Link** — Пункт-ссылка — открывает документ или карточку.
- **State=Back selected** — Ранее выбранный пункт — подсвечен при возврате к списку.
- **State=Disable** — Пункт списка недоступен.

## List (Сontainer)  (57604:4762)

Контейнер списка — подложка с отступами, в которую складываются пункты List item.
Берите его вместо своей подложки: отступы, разделители и прокрутка уже заданы.

- **Type=Сontainer** — Контейнер списка — подложка для пунктов.

## Tree  (59564:1473)

Дерево — иерархический список с раскрытием: группы товаров, склады, оргструктура.
Берите его, когда у записей есть вложенность; для плоского перечня используйте List.

Как выбрать вариант:
- Level — уровень вложенности ветки.
- Mode=Middle — ветка в середине уровня; End — последняя ветка уровня.
- For icon=On — с местом под иконку у ветки; Off — без него.

- **Level=2, Mode=End, For icon=On** — Ветка второго уровня, последняя в уровне — линия обрывается, с местом под иконку.
- **Level=2, Mode=End, For icon=Off** — Ветка второго уровня, последняя в уровне — линия обрывается, без места под иконку.
- **Level=3, Mode=End, For icon=On** — Ветка третьего уровня, последняя в уровне — линия обрывается, с местом под иконку.
- **Level=3, Mode=End, For icon=Off** — Ветка третьего уровня, последняя в уровне — линия обрывается, без места под иконку.
- **Level=2, Mode=Middle, For icon=On** — Ветка второго уровня, в середине уровня — линия продолжается вниз, с местом под иконку.
- **Level=2, Mode=Middle, For icon=Off** — Ветка второго уровня, в середине уровня — линия продолжается вниз, без места под иконку.
- **Level=3, Mode=Middle, For icon=On** — Ветка третьего уровня, в середине уровня — линия продолжается вниз, с местом под иконку.
- **Level=3, Mode=Middle, For icon=Off** — Ветка третьего уровня, в середине уровня — линия продолжается вниз, без места под иконку.

## Tree item  (59564:1504)

Линия связи в дереве — соединяет ветку с родителем и показывает, продолжается ли уровень.
Служебный элемент дерева: ставится внутрь ветки, отдельно на экран не выносится.

Как выбрать вариант: по месту ветки в уровне и длине связи.

- **Mode=End** — Последняя ветка уровня — линия обрывается.
- **Mode=End-long** — Последняя ветка уровня с удлинённой связью.
- **Mode=Middle** — Ветка в середине уровня — линия продолжается вниз.
- **Mode=Middle-long** — Ветка в середине уровня с удлинённой связью.
- **Mode=Start** — Начало ветки — связь от родителя.

## Expansion panel   (52937:1329)

Раскрывающаяся панель — блок, который сворачивается до заголовка: группы настроек, детали документа, дополнительные параметры.
Прячьте в неё второстепенное, обязательные поля держите открытыми. По умолчанию оставляйте свёрнутой, если содержимое нужно не всем.

Как выбрать вариант:
- Variant=Default — обычная панель; Info — панель с пояснением.
- Collaps/Expand=On — раскрыта; Off — свёрнута.
- Состояния: Default, Hover, Press, Disable.

- **Variant=Default, Collaps/Expand=Off, State=Default** — Раскрывающаяся панель, свёрнута — виден только заголовок, обычное состояние.
- **Variant=Info, Collaps/Expand=Off, State=Default** — Раскрывающаяся панель с пояснением, свёрнута — виден только заголовок, обычное состояние.
- **Variant=Default, Collaps/Expand=Off, State=Hover** — Раскрывающаяся панель, свёрнута — виден только заголовок, наведение.
- **Variant=Info, Collaps/Expand=Off, State=Hover** — Раскрывающаяся панель с пояснением, свёрнута — виден только заголовок, наведение.
- **Variant=Default, Collaps/Expand=Off, State=Press** — Раскрывающаяся панель, свёрнута — виден только заголовок, нажатие.
- **Variant=Info, Collaps/Expand=Off, State=Press** — Раскрывающаяся панель с пояснением, свёрнута — виден только заголовок, нажатие.
- **Variant=Default, Collaps/Expand=Off, State=Disable** — Раскрывающаяся панель, свёрнута — виден только заголовок, недоступна для раскрытия.
- **Variant=Info, Collaps/Expand=Off, State=Disable** — Раскрывающаяся панель с пояснением, свёрнута — виден только заголовок, недоступна для раскрытия.
- **Variant=Default, Collaps/Expand=On, State=Default** — Раскрывающаяся панель, раскрыта — содержимое видно, обычное состояние.
- **Variant=Info, Collaps/Expand=On, State=Default** — Раскрывающаяся панель с пояснением, раскрыта — содержимое видно, обычное состояние.
- **Variant=Default, Collaps/Expand=On, State=Disable** — Раскрывающаяся панель, раскрыта — содержимое видно, недоступна для раскрытия.
- **Variant=Info, Collaps/Expand=On, State=Disable** — Раскрывающаяся панель с пояснением, раскрыта — содержимое видно, недоступна для раскрытия.

## Expansion content  (61361:99603)

Содержимое раскрывающейся панели — область под заголовком, куда складывается сам блок.
Служебный компонент панели: используется внутри Expansion panel.

Как выбрать вариант: с внутренними отступами или без них, когда отступы задаёт вложенный блок.

- **Padding off/on=True** — Содержимое с внутренними отступами.
- **Padding off/on=False** — Содержимое без внутренних отступов — отступы задаёт вложенный блок.

## Expansion group panel  (56155:1676)

Группа раскрывающихся панелей — несколько панелей подряд с общими разделителями.
Берите группу, когда блоков настроек несколько; открытым держите только нужный.

Как выбрать вариант: группа свёрнута или раскрыта.

- **Type ?=Collaps** — Группа панелей свёрнута.
- **Type ?=Expand** — Группа панелей раскрыта.

## Expansion table panel  (56217:15104)

Раскрывающаяся панель внутри таблицы — группирует строки и сворачивает их до заголовка группы.
Берите её для группировки записей (по складу, по категории); отдельная панель настроек — Expansion panel.


## Tabs  (54854:3052)

Вкладки — переключение разделов одного экрана без перезагрузки: «Общие», «Товары», «История».
Берите их, когда разделов 2–7 и они равнозначны; для вложенной навигации — второй уровень вкладок.
Активная вкладка подчёркнута; названия пишите коротко, без многоточий.

Состав: строка вкладок из Tab element, при нехватке места — стрелки прокрутки (Scroll tabs).

Как выбрать вариант:
- Lvl=1 — основные разделы экрана; Lvl=2 — вложенные разделы внутри раздела.
- Content=Text — с текстом; Icon — только иконки, когда раздел понятен по иконке.

- **Lvl=1, Content=Text** — Вкладки основных разделов экрана, с текстом.
- **Lvl=2, Content=Text** — Вкладки вложенных разделов внутри раздела, с текстом.
- **Lvl=1, Content=Icon** — Вкладки основных разделов экрана, только иконки.
- **Lvl=2, Content=Icon** — Вкладки вложенных разделов внутри раздела, только иконки.

## Tab element  (54404:200)

Вкладка — один раздел в строке вкладок: название, при необходимости иконка и счётчик.
Счётчик показывает количество записей в разделе; активная вкладка всегда одна.

Как выбрать вариант:
- Active=On — текущий раздел; Off — остальные разделы.
- Lvl=1 — основной уровень; Lvl=2 — вложенный.
- Состояния: Default, Hover, Press, Disable.

- **Lvl=1, State=Default, Active=On** — Текущая вкладка — раздел открыт, основной уровень, обычное состояние.
- **Lvl=2, State=Default, Active=On** — Текущая вкладка — раздел открыт, вложенный уровень, обычное состояние.
- **Lvl=1, State=Hover, Active=On** — Текущая вкладка — раздел открыт, основной уровень, наведение.
- **Lvl=2, State=Hover, Active=On** — Текущая вкладка — раздел открыт, вложенный уровень, наведение.
- **Lvl=1, State=Disable, Active=On** — Текущая вкладка — раздел открыт, основной уровень, раздел недоступен.
- **Lvl=2, State=Disable, Active=On** — Текущая вкладка — раздел открыт, вложенный уровень, раздел недоступен.
- **Lvl=1, State=Press, Active=On** — Текущая вкладка — раздел открыт, основной уровень, нажатие.
- **Lvl=2, State=Press, Active=On** — Текущая вкладка — раздел открыт, вложенный уровень, нажатие.
- **Lvl=1, State=Default, Active=Off** — Неактивная вкладка — раздел можно открыть, основной уровень, обычное состояние.
- **Lvl=2, State=Default, Active=Off** — Неактивная вкладка — раздел можно открыть, вложенный уровень, обычное состояние.
- **Lvl=1, State=Hover, Active=Off** — Неактивная вкладка — раздел можно открыть, основной уровень, наведение.
- **Lvl=2, State=Hover, Active=Off** — Неактивная вкладка — раздел можно открыть, вложенный уровень, наведение.
- **Lvl=1, State=Press, Active=Off** — Неактивная вкладка — раздел можно открыть, основной уровень, нажатие.
- **Lvl=2, State=Press, Active=Off** — Неактивная вкладка — раздел можно открыть, вложенный уровень, нажатие.
- **Lvl=1, State=Disable, Active=Off** — Неактивная вкладка — раздел можно открыть, основной уровень, раздел недоступен.
- **Lvl=2, State=Disable, Active=Off** — Неактивная вкладка — раздел можно открыть, вложенный уровень, раздел недоступен.

## Scroll tabs  (59032:1821)

Стрелка прокрутки вкладок — появляется, когда вкладки не помещаются по ширине.
Служебный элемент вкладок: ставится по краям строки вкладок, отдельно не используется. Вкладки не переносите на вторую строку — прокручивайте.

Как выбрать вариант: сторона прокрутки — влево или вправо.

- **Orientation=Right, State=Default** — Прокрутка вкладок вправо, обычное состояние.
- **Orientation=Right, State=Hover** — Прокрутка вкладок вправо, наведение.
- **Orientation=Left, State=Default** — Прокрутка вкладок влево, обычное состояние.
- **Orientation=Left, State=Hover** — Прокрутка вкладок влево, наведение.

## Scroll  (53615:15339)

Полоса прокрутки — прокрутка длинного содержимого: таблицы, списка, панели.
Берите её для оформления прокручиваемых блоков в макете; в готовом интерфейсе полосу рисует браузер.

Как выбрать вариант:
- Position=First — ползунок у начала; Middle — в середине; Last — в конце.
- Size=M, S — по толщине полосы под размер блока.
- Состояния: Default, Hover.

- **Size=M, Position=First, State=Default** — Ползунок в начале — прокрутка не начата, обычная толщина, обычное состояние.
- **Size=S, Position=First, State=Default** — Ползунок в начале — прокрутка не начата, тонкая — для плотных блоков, обычное состояние.
- **Size=M, Position=First, State=Hover** — Ползунок в начале — прокрутка не начата, обычная толщина, наведение.
- **Size=S, Position=First, State=Hover** — Ползунок в начале — прокрутка не начата, тонкая — для плотных блоков, наведение.
- **Size=M, Position=Middle, State=Default** — Ползунок в середине — прокручено частично, обычная толщина, обычное состояние.
- **Size=S, Position=Middle, State=Default** — Ползунок в середине — прокручено частично, тонкая — для плотных блоков, обычное состояние.
- **Size=M, Position=Middle, State=Hover** — Ползунок в середине — прокручено частично, обычная толщина, наведение.
- **Size=S, Position=Middle, State=Hover** — Ползунок в середине — прокручено частично, тонкая — для плотных блоков, наведение.
- **Size=M, Position=Last, State=Default** — Ползунок в конце — прокручено до конца, обычная толщина, обычное состояние.
- **Size=S, Position=Last, State=Default** — Ползунок в конце — прокручено до конца, тонкая — для плотных блоков, обычное состояние.
- **Size=M, Position=Last, State=Hover** — Ползунок в конце — прокручено до конца, обычная толщина, наведение.
- **Size=S, Position=Last, State=Hover** — Ползунок в конце — прокручено до конца, тонкая — для плотных блоков, наведение.

## Menu item  (56090:1476)

Пункт меню — одно действие или переход в выпадающем меню: «Изменить», «Дублировать», «Удалить».
Опасные действия ставьте последними и оформляйте вариантом Negative; недоступные — блокируйте, а не убирайте.

Состояния: Default, Hover, Press, Selected, Back selected, Negative, Disable.

- **State=Default** — Пункт меню, обычное состояние.
- **State=Hover** — Пункт меню, наведение.
- **State=Press** — Пункт меню, нажатие.
- **State=Negative** — Пункт удаления или отмены — необратимое действие.
- **State=Selected** — Выбранный пункт меню.
- **State=Back selected** — Ранее выбранный пункт — подсвечен при открытии меню.
- **State=Disable** — Пункт меню недоступен.

## Menu (Container)  (54163:6705)

Контейнер меню — подложка с тенью, в которую складываются пункты Menu item.
Берите его вместо своей подложки: отступы, тень и разделители уже заданы.

- **Type=Container** — Контейнер меню — подложка для пунктов.

## Sidenav item  (55070:3734)

Пункт бокового меню — раздел приложения в левой навигации: «Заказы», «Склады», «Отчёты».
Три уровня вложенности: раздел, подраздел, пункт подраздела. В свёрнутом меню видна только иконка, название показывайте тултипом.

Как выбрать вариант:
- Type=L1, L2, L3 — уровень вложенности пункта.
- Mode=Expanded — меню раскрыто (иконка + название); Collapsed — свёрнуто (только иконка).
- Состояния: Default, Hover, Active (текущий раздел), Selected (выбран).

- **Type=L3, Mode=Expanded, State=Selected** — Выбранный пункт бокового меню, пункт подраздела, меню раскрыто — иконка и название.
- **Type=L3, Mode=Expanded, State=Hover** — Пункт бокового меню, наведение, пункт подраздела, меню раскрыто — иконка и название.
- **Type=L3, Mode=Expanded, State=Active** — Текущий раздел — открыт сейчас, пункт подраздела, меню раскрыто — иконка и название.
- **Type=L3, Mode=Expanded, State=Default** — Пункт бокового меню, пункт подраздела, меню раскрыто — иконка и название.
- **Type=L2, Mode=Expanded, State=Default** — Пункт бокового меню, подраздел, меню раскрыто — иконка и название.
- **Type=L2, Mode=Expanded, State=Hover** — Пункт бокового меню, наведение, подраздел, меню раскрыто — иконка и название.
- **Type=L2, Mode=Expanded, State=Active** — Текущий раздел — открыт сейчас, подраздел, меню раскрыто — иконка и название.
- **Type=L1, Mode=Expanded, State=Selected** — Выбранный пункт бокового меню, верхний уровень, меню раскрыто — иконка и название.
- **Type=L1, Mode=Expanded, State=Hover** — Пункт бокового меню, наведение, верхний уровень, меню раскрыто — иконка и название.
- **Type=L1, Mode=Expanded, State=Default** — Пункт бокового меню, верхний уровень, меню раскрыто — иконка и название.
- **Type=L1, Mode=Collapsed, State=Selected** — Выбранный пункт бокового меню, верхний уровень, меню свёрнуто — только иконка.
- **Type=L1, Mode=Collapsed, State=Hover** — Пункт бокового меню, наведение, верхний уровень, меню свёрнуто — только иконка.
- **Type=L1, Mode=Collapsed, State=Default** — Пункт бокового меню, верхний уровень, меню свёрнуто — только иконка.

## Sidenav header  (55045:637)

Шапка бокового меню — логотип и название заведения или раздела над списком пунктов.
В свёрнутом меню остаётся только знак логотипа.

Как выбрать вариант: уровень меню (основное или вложенное) и раскрыто ли меню.

- **Type=L1, Mode=Expanded** — Шапка основного бокового меню, меню раскрыто.
- **Type=L2, Mode=Expanded** — Шапка вложенного бокового меню, меню раскрыто.
- **Type=L1, Mode=Collapsed** — Шапка основного бокового меню, меню свёрнуто.

## Sidenav Footer  (55111:1056)

Подвал бокового меню — пользователь, помощь и выход под списком разделов.
В свёрнутом меню остаются только иконки.

Как выбрать вариант: уровень меню (основное или вложенное) и раскрыто ли меню.

- **Type=L2, Mode=Expanded** — Подвал вложенного бокового меню, меню раскрыто.
- **Type=L1, Mode=Expanded** — Подвал основного бокового меню, меню раскрыто.
- **Type=L1, Mode=Collapsed** — Подвал основного бокового меню, меню свёрнуто.

## Sidenav View  (55074:393)

Боковое меню целиком — готовая левая навигация: шапка, пункты, подвал.
Берите её как основу экрана и подставляйте свои пункты; ширину раскрытого и свёрнутого меню не меняйте.

Как выбрать вариант: уровень меню и его состояние — раскрыто или свёрнуто.

- **Type=L1, State=Expanded** — Основное боковое меню, раскрыто — иконки и названия.
- **Type=L1, State=Collapsed** — Основное боковое меню, свёрнуто — только иконки.
- **Type=L2, State=Expanded** — Вложенное боковое меню, раскрыто — иконки и названия.

## Sidenav control  (55142:1734)

Кнопка свёртывания бокового меню — переключает меню между раскрытым и свёрнутым видом.
Стоит на границе меню; в макете показывайте её в том же состоянии, что и само меню.

Состояния: Default, Hover, Press.

- **Mode=Collapsed, State=Hover** — Кнопка в свёрнутом меню — раскроет меню, наведение.
- **Mode=Collapsed, State=Press** — Кнопка в свёрнутом меню — раскроет меню, нажатие.
- **Mode=Expanded, State=Default** — Кнопка в раскрытом меню — свернёт меню, обычное состояние.
- **Mode=Expanded, State=Hover** — Кнопка в раскрытом меню — свернёт меню, наведение.
- **Mode=Expanded, State=Press** — Кнопка в раскрытом меню — свернёт меню, нажатие.
- **Mode=Collapsed, State=Default** — Кнопка в свёрнутом меню — раскроет меню, обычное состояние.

## Element sidenav  (56598:2991)

Слот элемента бокового меню — выбирает, что стоит в строке меню: кнопка свёртывания или аватар пользователя.
Служебный компонент бокового меню, отдельно на экран не ставится.

- **Content=Collaps icon** — В строке меню — иконка свёртывания.
- **Content=Avatar** — В строке меню — аватар пользователя.

## Header components  (53535:1244)

Заголовок блока в макете — служебная подпись со страницы Decor components: название компонента и его состояния в библиотеке.
Это оформление самой библиотеки, а не элемент интерфейса — в продуктовые макеты не вставляйте.

Как выбрать вариант: обычный заголовок блока или уменьшенный.

- **Type=Default** — Заголовок блока библиотеки.
- **Type=Mini** — Уменьшенный заголовок блока библиотеки.

## Navigation Bar  (56564:1057)

Системная панель навигации телефона — декор со страницы Decor components: обрамление мобильного макета снизу.
Это не элемент интерфейса iiko, а имитация системы; в продуктовые экраны не вставляйте.

Как выбрать вариант: светлая или тёмная тема телефона.

- **Dark=Off** — Светлая тема системы.
- **Dark=On** — Тёмная тема системы.

## Chrome Header mobile  (56564:1062)

Шапка мобильного браузера — декор со страницы Decor components: обрамление мобильного макета сверху.
Показывает, как экран выглядит в браузере телефона; элементом интерфейса не является.

Как выбрать вариант: светлая или тёмная тема браузера.

- **Dark=Off** — Светлая тема браузера.
- **Dark=On** — Тёмная тема браузера.

## Chrome Header desktop  (56564:1013)

Шапка браузера на компьютере — декор со страницы Decor components: обрамление макета сверху (адресная строка и вкладки).
Показывает, как экран выглядит в браузере; элементом интерфейса не является и в продуктовые экраны не вставляется.


## Status Bar  (56564:1236)

Статус-бар телефона — декор со страницы Decor components: время, связь и заряд в самом верху мобильного макета.
Это имитация системной панели, а не компонент интерфейса. Не путайте со Status — меткой состояния объекта.


## Dialog view  (52952:1285)

Диалог целиком — модальное окно поверх экрана: подтверждение, форма создания, просмотр записи.
Берите его как основу окна: шапка (Dialog header), содержимое (Dialog content), подвал с кнопками (Dialog footer), затемнение под окном (Backdrop).
Закрытие — крестик в шапке и кнопка в подвале; не оставляйте окно без явного способа закрыть.

- **State=Default** — Модальное окно: шапка, содержимое, подвал с кнопками.

## Dialog header  (53535:1322)

Шапка диалога — заголовок окна и кнопка закрытия, при необходимости картинка над заголовком.
Заголовок формулируйте по задаче окна («Создание накладной»), а не «Внимание».

Как выбрать вариант: только текст или с картинкой сверху.

- **Type=Text** — Шапка диалога с заголовком и крестиком.
- **Type=Picture** — Шапка диалога с картинкой над заголовком.

## Dialog content  (53535:1369)

Содержимое диалога — область под шапкой: текст, форма, таблица.
При длинном содержимом прокручивается именно эта область, шапка и подвал остаются на месте.

- **State=Default** — Область содержимого диалога с прокруткой.

## Dialog footer  (53749:638)

Подвал диалога — кнопки действий окна: главное действие справа, отмена слева от него.
Главное действие называйте по смыслу («Создать», «Сохранить»), а не «ОК».

- **State=Default** — Подвал диалога с кнопками действий.

## Backdrop  (53623:806)

Затемнение под диалогом — перекрывает экран, пока открыто модальное окно или панель.
Берите его вместе с диалогом; клик по затемнению закрывает окно только там, где нет несохранённых данных.

- **Type=Default** — Затемнение экрана под модальным окном.

## Picture  (58937:3985)

Картинка в диалоге — изображение над заголовком окна (страница Dialog).
Служебный элемент диалога: вставляется в шапку варианта с картинкой, отдельно на экран не ставится.


## Card view  (53744:3181)

Карточка целиком — блок с самостоятельным содержимым: карточка новости на главной iikoWeb, инвойс в E-invoice, карта гостя, адрес в колл-центре.
Собирается из шапки (Card header), содержимого (Card content) и подвала (Card footer) — лишние части не добавляйте, если их нет на экране.

Как выбрать вариант:
- Type=Filled — с заливкой, для плиток и списков карточек.
- Type=Outlined — с рамкой, когда карточек много и фон один.
- Type=Shadow — с тенью, когда карточка отделена от фона или кликабельна.

- **Type=Filled** — Карточка с заливкой — для плиток и списков.
- **Type=Outlined** — Карточка с рамкой — когда карточек много на одном фоне.
- **Type=Shadow** — Карточка с тенью — отделена от фона, кликабельна.

## Card content  (53744:3079)

Содержимое карточки — область с текстом, значениями или своим набором элементов.
Как выбрать вариант: готовая раскладка или собственное содержимое.

- **Content=Default** — Готовая раскладка содержимого карточки.
- **Content=Custom** — Собственное содержимое карточки — раскладку задаёте сами.

## Card header  (52916:15126)

Шапка карточки — заголовок, подзаголовок и действия карточки.
Действия ставьте справа кнопкой-иконкой; заголовок не дублируйте в содержимом.

- **Content=Default** — Шапка карточки: заголовок и действия.

## Card footer  (53744:3139)

Подвал карточки — кнопки или дополнительная информация под содержимым.
Добавляйте его только если действия действительно есть — иначе карточка обходится без подвала.

- **Content=Default** — Подвал карточки с действиями.

## Hint container  (54593:479)

Подсказка — короткое пояснение по элементу: назначение кнопки-иконки, правило заполнения поля, расшифровка статуса.
Появляется по наведению и не должна содержать действий, без которых нельзя обойтись. Текст — одна-две строки.

Как выбрать вариант:
- Size=Single — короткая подсказка одной строкой; Complex — с заголовком и несколькими строками.
- Orientation — сторона, с которой подсказка выходит к элементу: Up, Down, Right, Left; Default — без хвостика.

- **Size=Complex, Orientation=Up** — Подсказка с заголовком и подробным текстом, хвостик сверху — подсказка под элементом.
- **Size=Complex, Orientation=Down** — Подсказка с заголовком и подробным текстом, хвостик снизу — подсказка над элементом.
- **Size=Complex, Orientation=Right** — Подсказка с заголовком и подробным текстом, хвостик справа — подсказка слева от элемента.
- **Size=Complex, Orientation=Left** — Подсказка с заголовком и подробным текстом, хвостик слева — подсказка справа от элемента.
- **Size=Complex, Orientation=Default** — Подсказка с заголовком и подробным текстом, без хвостика.
- **Size=Single, Orientation=Up** — Короткая подсказка, хвостик сверху — подсказка под элементом.
- **Size=Single, Orientation=Default** — Короткая подсказка, без хвостика.
- **Size=Single, Orientation=Down** — Короткая подсказка, хвостик снизу — подсказка над элементом.
- **Size=Single, Orientation=Right** — Короткая подсказка, хвостик справа — подсказка слева от элемента.
- **Size=Single, Orientation=Left** — Короткая подсказка, хвостик слева — подсказка справа от элемента.

## Hint content  (54713:3325)

Содержимое подсказки — текст внутри подсказки: одна строка или несколько блоков.
Служебный компонент подсказки, отдельно на экран не ставится.

- **Content=Group content** — Подсказка из нескольких блоков.
- **Content=Single content** — Подсказка из одного абзаца.

## Hint header  (54594:2219)

Заголовок подсказки — тема пояснения и его окраска по смыслу.
Цвет выбирайте по характеру сообщения, а не для украшения.

Как выбрать вариант: обычное пояснение, акцентное, второстепенное, предупреждение или ошибка.

- **Style=Neutral** — Заголовок обычной подсказки.
- **Style=Primary** — Заголовок акцентной подсказки.
- **Style=Secondary** — Заголовок второстепенной подсказки.
- **Style=Warning** — Заголовок подсказки-предупреждения.
- **Style=Error** — Заголовок подсказки об ошибке.

## Hint footer  (54600:517)

Подвал подсказки — ссылка или кнопка под текстом подсказки («Подробнее»).
Добавляйте только когда есть куда вести; основное действие в подсказку не выносите.

- **Content=Default** — Подвал подсказки с дополнительной ссылкой.

## Snackbar  (54373:10303)

Всплывающее сообщение о результате действия: «Изменения сохранены», «Товары добавлены», «Не удалось сохранить изменения», «Сервер временно недоступен».
Появляется на короткое время внизу экрана и не требует ответа; если решение обязательно — берите диалог.
Действие внутри допускается одно («Обновить», «Открыть», «Отменить»).

Как выбрать вариант:
- Type=Single — одна строка сообщения; Complex — с заголовком, описанием и действием.
- Mode=Dark — на светлых экранах; Light — на тёмных.

- **Type=Single, Mode=Dark** — Сообщение одной строкой, тёмное — для светлых экранов.
- **Type=Single, Mode=Light** — Сообщение одной строкой, светлое — для тёмных экранов.
- **Type=Complex, Mode=Dark** — Сообщение с заголовком, описанием и действием, тёмное — для светлых экранов.
- **Type=Complex, Mode=Light** — Сообщение с заголовком, описанием и действием, светлое — для тёмных экранов.

## Element left  (59851:11313)

Иконка слева во всплывающем сообщении — показывает характер сообщения.
Служебный элемент Snackbar: цвет выбирайте по смыслу сообщения, отдельно на экран не ставится.

- **Style=Neutral** — Иконка слева во всплывающем сообщении. Обычное сообщение.
- **Style=Accent** — Иконка слева во всплывающем сообщении. Информационное сообщение.
- **Style=Positive** — Иконка слева во всплывающем сообщении. Успешное завершение действия.
- **Style=Warning** — Иконка слева во всплывающем сообщении. Предупреждение — требуется внимание.
- **Style=Negative** — Иконка слева во всплывающем сообщении. Ошибка — действие не выполнено.

## Divider  (53556:7964)

Разделитель — тонкая линия между блоками или пунктами списка.
Берите его вместо рамки, когда нужно только разделить содержимое; не ставьте разделители там, где хватает отступа.

- **Type=Solid** — Сплошная линия-разделитель.

## Divider  (58320:441)

Разделитель с состояниями — линия между блоками, которую можно перетаскивать: граница колонок таблицы, граница панелей.
Лежит на странице UI components (раздел «не готовы или под вопросом») — перед использованием уточните актуальность у владельца ДС. Обычная линия-разделитель — компонент Divider со страницы Divider.

Как выбрать вариант:
- Type=Solid — сплошная; Dashed — пунктирная (граница, которую можно двигать).
- Size=M, L — по длине и толщине линии.
- Состояния: Lite, Default, Hover, Selected, Disable.

- **Size=M, Type=Solid, State=Lite** — Сплошная линия-разделитель, облегчённая, малозаметная, обычный размер.
- **Size=M, Type=Solid, State=Default** — Сплошная линия-разделитель, обычное состояние, обычный размер.
- **Size=M, Type=Solid, State=Hover** — Сплошная линия-разделитель, наведение — границу можно потянуть, обычный размер.
- **Size=M, Type=Solid, State=Selected** — Сплошная линия-разделитель, граница выбрана и перетаскивается, обычный размер.
- **Size=M, Type=Solid, State=Disable** — Сплошная линия-разделитель, перетаскивание недоступно, обычный размер.
- **Size=M, Type=Dashed, State=Default** — Пунктирная линия — подвижная граница, обычное состояние, обычный размер.
- **Size=M, Type=Dashed, State=Disable** — Пунктирная линия — подвижная граница, перетаскивание недоступно, обычный размер.
- **Size=M, Type=Dashed, State=Selected** — Пунктирная линия — подвижная граница, граница выбрана и перетаскивается, обычный размер.
- **Size=L, Type=Solid, State=Lite** — Сплошная линия-разделитель, облегчённая, малозаметная, увеличенный размер.
- **Size=L, Type=Solid, State=Default** — Сплошная линия-разделитель, обычное состояние, увеличенный размер.
- **Size=L, Type=Solid, State=Hover** — Сплошная линия-разделитель, наведение — границу можно потянуть, увеличенный размер.
- **Size=L, Type=Solid, State=Selected** — Сплошная линия-разделитель, граница выбрана и перетаскивается, увеличенный размер.
- **Size=L, Type=Solid, State=Disable** — Сплошная линия-разделитель, перетаскивание недоступно, увеличенный размер.
- **Size=L, Type=Dashed, State=Default** — Пунктирная линия — подвижная граница, обычное состояние, увеличенный размер.
- **Size=L, Type=Dashed, State=Disable** — Пунктирная линия — подвижная граница, перетаскивание недоступно, увеличенный размер.
- **Size=L, Type=Dashed, State=Selected** — Пунктирная линия — подвижная граница, граница выбрана и перетаскивается, увеличенный размер.

## Text UI  (57938:18290)

Текст интерфейса — подпись, значение или ссылка в ячейках, списках и карточках.
Берите его, чтобы текст в однотипных местах совпадал по размеру и цвету; заголовки страниц и блоков набирайте стилями типографики.
Лежит на странице UI components (раздел «не готовы или под вопросом») — перед использованием уточните актуальность у владельца ДС.

Состояния: Default, Link, Hover, Press, Selected, Negative, Disable.

- **State=Default** — Обычный текст интерфейса.
- **State=Link** — Текст-ссылка — открывает документ или карточку.
- **State=Hover** — Текст-ссылка, наведение.
- **State=Press** — Текст-ссылка, нажатие.
- **State=Negative** — Текст об ошибке или удалении.
- **State=Selected** — Текст интерфейса выделен — например, найденное совпадение при поиске.
- **State=Disable** — Недоступный текст — значение неактивно или нет прав на просмотр.

## State  (54063:12395)

Подложка состояния под иконкой — круглая или квадратная подсветка при наведении и нажатии.
Служебный элемент кнопок-иконок и пунктов: подставляется под иконку, отдельно на экран не ставится.

- **State=Hover** — Подсветка при наведении.
- **State=Press** — Подсветка при нажатии.

## Preview  (54063:12946)

⚠️ Черновой блок со страницы Draft — превью для внутренних нужд библиотеки. В продуктовых макетах не используйте.

- **Property 1=Default** — Черновой блок — не для использования.
- **Property 1=Variant2** — Черновой блок — не для использования.
- **Property 1=Variant3** — Черновой блок — не для использования.

## Title variant  (17034:68611)

Подпись варианта в библиотеке — служебный заголовок со страницы Decor components, которым подписаны варианты компонентов.
Оформление самой библиотеки, а не элемент интерфейса — в продуктовые макеты не вставляйте.


## Content  (57375:12699)

Служебный блок-заполнитель со страницы Decor components — обозначает произвольное содержимое в примерах библиотеки.
В продуктовых макетах не используйте: вместо него ставьте реальное содержимое экрана.


## Logo iiko  (55332:19892)

Логотип iiko — знак продукта в шапке приложения, боковом меню и на экранах входа.
Пропорции и цвета не меняйте, поверх пёстрых фонов используйте инверсный вариант.

Как выбрать вариант:
- Size=Full — знак с названием; Small — только знак (для свёрнутого меню).
- Style=Main — основной; Inverse — инверсный для тёмного фона.

- **Size=Small, Style=Inverse** — Только знак логотипа, инверсный — для тёмного фона.
- **Size=Small, Style=Main** — Только знак логотипа, основной вариант.
- **Size=Full, Style=Inverse** — Логотип со названием, инверсный — для тёмного фона.
- **Size=Full, Style=Main** — Логотип со названием, основной вариант.

## Logo Syrve  (56079:771)

Логотип Syrve — знак продукта для международной версии: шапка приложения, боковое меню, экран входа.
Пропорции и цвета не меняйте; в макетах Syrve не смешивайте с логотипом iiko.

Как выбрать вариант:
- Size=Full — знак с названием; Small — только знак (для свёрнутого меню).
- Style=Main — основной; Inverse — инверсный для тёмного фона.

- **Size=Full, Style=Main** — Логотип с названием, основной вариант.
- **Size=Full, Style=Inverse** — Логотип с названием, инверсный — для тёмного фона.
- **Size=Small, Style=Inverse** — Только знак логотипа, инверсный — для тёмного фона.
- **Size=Small, Style=Main** — Только знак логотипа, основной вариант.

## Arrow  (55939:14119)

Набор стрелок — направление действия и раскрытие: возврат назад, шаг по периоду, сортировка, раскрытие списка.
Берите стрелку из этого набора, а не рисуйте свою: размер и толщина линий согласованы с иконками ДС.

Как выбрать вариант: по смыслу действия — назад/вперёд, вверх/вниз, раскрыть, свернуть.

- **Content=arrow_drop_down** — Треугольная стрелка вниз — раскрыть список значений.
- **Content=keyboard_arrow_down** — Шеврон вниз — раскрыть блок или показать ещё.
- **Content=keyboard_arrow_right** — Шеврон вправо — переход внутрь раздела или к следующему.
- **Content=arrow_back** — Стрелка «назад» — возврат на предыдущий экран или шаг.
- **Content=arrow_downward_alt** — Стрелка вниз — сортировка по убыванию или перемещение ниже.
- **Content=arrow_forward** — Стрелка «вперёд» — переход к следующему экрану или шагу.
- **Content=keyboard_arrow_up** — Шеврон вверх — свернуть блок.
- **Content=keyboard_arrow_left** — Шеврон влево — прокрутка или переход к предыдущему.
- **Content=arrow_left** — Стрелка влево — шаг назад по списку или периоду.
- **Content=arrow_drop_up** — Треугольная стрелка вверх — закрыть список значений.
- **Content=arrow_right** — Стрелка вправо — шаг вперёд по списку или периоду.
- **Content=unfold_less** — Свернуть всё — скрыть раскрытое содержимое.
- **Content=arrow_upward_alt** — Стрелка вверх — сортировка по возрастанию или перемещение выше.

## Arrow list  (55939:13307)

Стрелка в пункте списка — показывает, что пункт раскрывается или ведёт внутрь раздела.
Служебный элемент списка: ставится справа в пункте List item, отдельно на экран не выносится.

Как выбрать вариант: по смыслу — переход внутрь, раскрытие или свёртывание пункта.

- **Content=arrow_drop_down** — Треугольная стрелка вниз в пункте списка — раскрыть вложенные пункты.
- **Content=keyboard_arrow_down** — Шеврон вниз в пункте списка — раскрыть пункт.
- **Content=keyboard_arrow_right** — Шеврон вправо в пункте списка — перейти внутрь раздела.
- **Content=arrow_back** — Стрелка «назад» в пункте списка — возврат на уровень выше.
- **Content=arrow_downward_alt** — Стрелка вниз в пункте списка — перемещение ниже.
- **Content=arrow_forward** — Стрелка «вперёд» в пункте списка — переход дальше.
- **Content=keyboard_arrow_up** — Шеврон вверх в пункте списка — свернуть пункт.
- **Content=keyboard_arrow_left** — Шеврон влево в пункте списка — вернуться на уровень выше.
- **Content=arrow_left** — Стрелка влево в пункте списка — шаг назад.
- **Content=arrow_drop_up** — Треугольная стрелка вверх в пункте списка — свернуть вложенные пункты.
- **Content=arrow_right** — Стрелка вправо в пункте списка — шаг вперёд.
- **Content=unfold_less** — Свернуть всё в списке — скрыть раскрытые пункты.
- **Content=arrow_upward_alt** — Стрелка вверх в пункте списка — перемещение выше.

## Arrow menu  (56090:1628)

Стрелка в пункте меню — показывает вложенное подменю или направление перехода.
Служебный элемент меню: ставится справа в пункте Menu item, отдельно на экран не выносится.

Как выбрать вариант: по смыслу — вложенное подменю, возврат или раскрытие.

- **Content=arrow_drop_down** — Треугольная стрелка вниз в пункте меню — раскрыть подменю.
- **Content=keyboard_arrow_down** — Шеврон вниз в пункте меню — раскрыть подменю.
- **Content=keyboard_arrow_right** — Шеврон вправо в пункте меню — открыть вложенное подменю.
- **Content=arrow_back** — Стрелка «назад» в пункте меню — возврат к предыдущему уровню.
- **Content=arrow_downward_alt** — Стрелка вниз в пункте меню — перемещение ниже.
- **Content=arrow_forward** — Стрелка «вперёд» в пункте меню — переход дальше.
- **Content=keyboard_arrow_up** — Шеврон вверх в пункте меню — свернуть подменю.
- **Content=keyboard_arrow_left** — Шеврон влево в пункте меню — вернуться на уровень выше.
- **Content=arrow_left** — Стрелка влево в пункте меню — шаг назад.
- **Content=arrow_drop_up** — Треугольная стрелка вверх в пункте меню — свернуть подменю.
- **Content=arrow_right** — Стрелка вправо в пункте меню — шаг вперёд.
- **Content=unfold_less** — Свернуть всё в меню — скрыть раскрытые подменю.
- **Content=arrow_upward_alt** — Стрелка вверх в пункте меню — перемещение выше.

## Arrow select  (57735:17989)

Стрелка в поле выбора — показывает, что список раскрывается, и его текущее состояние.
Служебный элемент Select: ставится справа в поле, отдельно на экран не выносится.

Как выбрать вариант: список закрыт или раскрыт, направление перехода.

- **Content=arrow_drop_down** — Треугольная стрелка вниз — список закрыт, можно раскрыть.
- **Content=keyboard_arrow_down** — Шеврон вниз в поле выбора — раскрыть список.
- **Content=keyboard_arrow_right** — Шеврон вправо в поле выбора — открыть вложенную группу значений.
- **Content=arrow_back** — Стрелка «назад» в поле выбора — возврат к предыдущему списку.
- **Content=arrow_downward_alt** — Стрелка вниз в поле выбора — сортировка значений по убыванию.
- **Content=arrow_forward** — Стрелка «вперёд» в поле выбора — переход к следующему списку.
- **Content=keyboard_arrow_up** — Шеврон вверх в поле выбора — закрыть список.
- **Content=keyboard_arrow_left** — Шеврон влево в поле выбора — вернуться к предыдущей группе.
- **Content=arrow_left** — Стрелка влево в поле выбора — шаг назад по значениям.
- **Content=arrow_drop_up** — Треугольная стрелка вверх — список раскрыт, можно закрыть.
- **Content=arrow_right** — Стрелка вправо в поле выбора — шаг вперёд по значениям.
- **Content=unfold_less** — Свернуть всё — закрыть раскрытые группы значений.
- **Content=arrow_upward_alt** — Стрелка вверх в поле выбора — сортировка значений по возрастанию.

## Element  (54104:20956)

Слот элемента в пункте списка — выбирает, что стоит слева или справа от текста пункта: иконка, картинка, чекбокс, переключатель, счётчик.
Служебный компонент списка: подставляется в List item, отдельно на экран не ставится.

Как выбрать вариант: по тому, что показывает пункт.

- **Content=Image size** — В пункте списка — картинка или аватар.
- **Content=Icon size** — В пункте списка — одна иконка.
- **Content=Icon group** — В пункте списка — несколько иконок.
- **Content=Text default** — В пункте списка — дополнительный текст.
- **Content=Checkbox** — В пункте списка — чекбокс для выбора нескольких пунктов.
- **Content=Radio button** — В пункте списка — радиокнопка для выбора одного пункта.
- **Content=Indicator** — В пункте списка — индикатор состояния.
- **Content=Slide toggle** — В пункте списка — переключатель настройки.
- **Content=Counter** — В пункте списка — счётчик количества.

## Element menu  (56090:1611)

Слот элемента в пункте меню — выбирает, что стоит рядом с названием пункта: иконка, картинка, чекбокс, переключатель, счётчик.
Служебный компонент меню: подставляется в Menu item, отдельно на экран не ставится.

Как выбрать вариант: по тому, что показывает пункт меню.

- **Content=Image size** — В пункте меню — картинка или аватар.
- **Content=Icon size** — В пункте меню — иконка действия.
- **Content=Text default** — В пункте меню — дополнительный текст или горячая клавиша.
- **Content=Checkbox** — В пункте меню — чекбокс для выбора нескольких пунктов.
- **Content=Radio button** — В пункте меню — радиокнопка для выбора одного пункта.
- **Content=Indicator** — В пункте меню — индикатор состояния.
- **Content=Slide toggle** — В пункте меню — переключатель настройки.
- **Content=Counter** — В пункте меню — счётчик количества.

## Element select  (57735:17972)

Слот элемента в пункте списка выбора — выбирает, что стоит рядом со значением: иконка, картинка, чекбокс, переключатель, счётчик.
Служебный компонент Select: подставляется в Select item, отдельно на экран не ставится.

Как выбрать вариант: по тому, что показывает пункт списка выбора.

- **Content=Image size** — В пункте выбора — картинка или аватар.
- **Content=Icon size** — В пункте выбора — иконка.
- **Content=Text default** — В пункте выбора — дополнительный текст.
- **Content=Checkbox** — В пункте выбора — чекбокс для выбора нескольких значений.
- **Content=Radio button** — В пункте выбора — радиокнопка для выбора одного значения.
- **Content=Indicator** — В пункте выбора — индикатор состояния.
- **Content=Slide toggle** — В пункте выбора — переключатель настройки.
- **Content=Counter** — В пункте выбора — счётчик количества.

## Datepicker  (58509:5439)

Календарь — выбор даты или периода: дата поставки, период отчёта, срок.
Открывается из поля даты (Input Datepicker); отдельно на экране не живёт.

Как выбрать вариант:
- Type=Day — сетка дней месяца, основной вид.
- Type=Month — выбор месяца.
- Type=Year — выбор года.

- **Type=Day** — Календарь по дням — сетка дней месяца.
- **Type=Year** — Календарь по годам — выбор года.
- **Type=Month** — Календарь по месяцам — выбор месяца.

## Control Panel  (58501:4052)

Панель управления календарём — переключение месяца и года, строка дней недели над сеткой.
Служебный компонент календаря: используется внутри Datepicker.

Как выбрать вариант: панель переключения периода, строка дней недели или заголовок сетки.

- **Type=Control** — Панель переключения месяца и года.
- **Type=Week** — Строка дней недели над сеткой.
- **Type=Calendar** — Заголовок сетки календаря.

## Elements  (58501:4220)

Ячейка календаря — день, месяц или год в сетке выбора.
Служебный компонент календаря: используется внутри Datepicker. Недоступные даты блокируйте, а не убирайте из сетки.

Как выбрать вариант:
- Type=Cell — день; Month — месяц; Year — год.
- Variant=Default — обычная дата; Today — сегодня; Selected — выбранная; Range — внутри выбранного периода.
- Состояния: Default, Hover, Press, Disable.

- **Type=Cell, Variant=Today, State=Disable** — День в сетке календаря, сегодняшняя дата, выбор недоступен.
- **Type=Cell, Variant=Default, State=Disable** — День в сетке календаря, обычная дата, выбор недоступен.
- **Type=Cell, Variant=Range, State=Press** — День в сетке календаря, дата внутри выбранного периода, нажатие.
- **Type=Cell, Variant=Range, State=Disable** — День в сетке календаря, дата внутри выбранного периода, выбор недоступен.
- **Type=Cell, Variant=Selected, State=Press** — День в сетке календаря, выбранная дата, нажатие.
- **Type=Cell, Variant=Today, State=Press** — День в сетке календаря, сегодняшняя дата, нажатие.
- **Type=Cell, Variant=Default, State=Press** — День в сетке календаря, обычная дата, нажатие.
- **Type=Cell, Variant=Range, State=Hover** — День в сетке календаря, дата внутри выбранного периода, наведение.
- **Type=Cell, Variant=Selected, State=Hover** — День в сетке календаря, выбранная дата, наведение.
- **Type=Cell, Variant=Today, State=Hover** — День в сетке календаря, сегодняшняя дата, наведение.
- **Type=Cell, Variant=Default, State=Hover** — День в сетке календаря, обычная дата, наведение.
- **Type=Cell, Variant=Range, State=Default** — День в сетке календаря, дата внутри выбранного периода, обычное состояние.
- **Type=Cell, Variant=Selected, State=Default** — День в сетке календаря, выбранная дата, обычное состояние.
- **Type=Year, Variant=Selected, State=Default** — Год в сетке календаря, выбранная дата, обычное состояние.
- **Type=Year, Variant=Selected, State=Hover** — Год в сетке календаря, выбранная дата, наведение.
- **Type=Year, Variant=Selected, State=Press** — Год в сетке календаря, выбранная дата, нажатие.
- **Type=Cell, Variant=Today, State=Default** — День в сетке календаря, сегодняшняя дата, обычное состояние.
- **Type=Cell, Variant=Default, State=Default** — День в сетке календаря, обычная дата, обычное состояние.
- **Type=Year, Variant=Default, State=Disable** — Год в сетке календаря, обычная дата, выбор недоступен.
- **Type=Year, Variant=Today, State=Disable** — Год в сетке календаря, сегодняшняя дата, выбор недоступен.
- **Type=Year, Variant=Default, State=Press** — Год в сетке календаря, обычная дата, нажатие.
- **Type=Year, Variant=Today, State=Press** — Год в сетке календаря, сегодняшняя дата, нажатие.
- **Type=Year, Variant=Default, State=Hover** — Год в сетке календаря, обычная дата, наведение.
- **Type=Year, Variant=Today, State=Hover** — Год в сетке календаря, сегодняшняя дата, наведение.
- **Type=Year, Variant=Default, State=Default** — Год в сетке календаря, обычная дата, обычное состояние.
- **Type=Year, Variant=Today, State=Default** — Год в сетке календаря, сегодняшняя дата, обычное состояние.
- **Type=Month, Variant=Default, State=Default** — Месяц в сетке календаря, обычная дата, обычное состояние.
- **Type=Month, Variant=Default, State=Hover** — Месяц в сетке календаря, обычная дата, наведение.
- **Type=Month, Variant=Default, State=Press** — Месяц в сетке календаря, обычная дата, нажатие.
- **Type=Month, Variant=Default, State=Disable** — Месяц в сетке календаря, обычная дата, выбор недоступен.

## Timepicker  (58982:9858)

Выбор времени — список или сетка часов и минут: время доставки, начало смены.
Открывается из поля времени (Input Timepicker); отдельно на экране не живёт.

Как выбрать вариант:
- Type=Time line — список времени одной колонкой, прокруткой.
- Type=Time grid — сетка значений, когда нужен быстрый выбор круглых значений.

- **Type=Time grid** — Сетка значений времени для быстрого выбора.
- **Type=Time line** — Список времени с прокруткой.

## Control Panel  (58982:11018)

Панель управления выбором времени — заголовок и переключение между часами и минутами.
Служебный компонент выбора времени: используется внутри Timepicker.

Как выбрать вариант: панель переключения или строка со значением времени.

- **Type=Control** — Панель переключения часов и минут.
- **Type=Time** — Строка с выбранным временем.

## Elements  (58982:9594)

Значение времени в списке — час или минута, доступные для выбора.
Служебный компонент выбора времени: используется внутри Timepicker. Недоступное время блокируйте, а не убирайте из списка.

Как выбрать вариант:
- Variant=Default — обычное значение; Selected — выбранное.
- Состояния: Default, Hover, Press, Range (внутри выбранного интервала), Disable.

- **Variant=Selected, State=Default** — Выбранное значение времени, обычное состояние.
- **Variant=Selected, State=Hover** — Выбранное значение времени, наведение.
- **Variant=Selected, State=Press** — Выбранное значение времени, нажатие.
- **Variant=Default, State=Disable** — Обычное значение времени, выбор недоступен.
- **Variant=Default, State=Press** — Обычное значение времени, нажатие.
- **Variant=Default, State=Hover** — Обычное значение времени, наведение.
- **Variant=Default, State=Default** — Обычное значение времени, обычное состояние.
- **Variant=Default, State=Range** — Обычное значение времени, внутри выбранного интервала.

## Element step  (55403:7248)

Маркер шага степпера — иконка или счётчик (номер) на подложке.
Часть степпера, отдельно не используется: вставляется в шаг (Step).

Как выбрать вариант:
- Content=Icon size — маркер с иконкой, когда смысл шага понятен по иконке.
- Content=Counter — маркер с номером шага.

Состояния: Default, Hover, Press, Selected (текущий шаг), Error (шаг заполнен неверно), Disable (шаг недоступен).
Фронт: https://frontend-common.iiko.ru/components/stepper

- **Content=Icon size, State=Default** — Маркер шага — иконка. Шаг в состоянии по умолчанию.
- **Content=Icon size, State=Hover** — Маркер шага — иконка. Курсор над шагом — подготовка к нажатию.
- **Content=Icon size, State=Press** — Маркер шага — иконка. Шаг нажат.
- **Content=Icon size, State=Selected** — Маркер шага — иконка. Текущий шаг процесса — выделен.
- **Content=Icon size, State=Error** — Маркер шага — иконка. Ошибка на шаге — заполнен неверно.
- **Content=Icon size, State=Disable** — Маркер шага — иконка. Шаг недоступен — раньше времени.
- **Content=Counter, State=Default** — Маркер шага — счётчик (номер шага). Шаг в состоянии по умолчанию.
- **Content=Counter, State=Hover** — Маркер шага — счётчик (номер шага). Курсор над шагом — подготовка к нажатию.
- **Content=Counter, State=Press** — Маркер шага — счётчик (номер шага). Шаг нажат.
- **Content=Counter, State=Selected** — Маркер шага — счётчик (номер шага). Текущий шаг процесса — выделен.
- **Content=Counter, State=Error** — Маркер шага — счётчик (номер шага). Ошибка на шаге — заполнен неверно.
- **Content=Counter, State=Disable** — Маркер шага — счётчик (номер шага). Шаг недоступен — раньше времени.

## Stepper line  (54689:3072)

Строка степпера — контейнер со всеми маркерами шагов в один ряд.
Ставится вверху экрана или диалога многошагового процесса; внутрь вкладываются шаги Step.

Как выбрать вариант:
- Step=On — с маркерами шагов; Step=Off — контейнер без маркеров, только подложка.
- Background=On — с подложкой под шагами; Background=Off — без подложки, по контенту.
Фронт: https://frontend-common.iiko.ru/components/stepper

- **Step=On, Background=On** — Маркеры шагов включены. С подложкой под шагами.
- **Step=On, Background=Off** — Маркеры шагов включены. Без подложки — по контенту.
- **Step=Off, Background=On** — Контейнер без маркеров — только подложка. С подложкой под шагами.
- **Step=Off, Background=Off** — Контейнер без маркеров — только подложка. Без подложки — по контенту.

## Stepper button  (55419:7330)

Кнопка навигации степпера — «Назад» и «Далее» в панели внизу многошагового процесса.
Используется только вместе со степпером; для обычных действий берите Button.

Как выбрать вариант:
- Type=Filled — акцентная (обычно «Далее»); Type=Outlined — второстепенная (обычно «Назад»).
- Position=First / Middle / Last — место в группе: First — «Назад» слева, Last — «Далее» справа.
- Content=Icon — только иконка; Content=Text — с текстом.
Фронт: https://frontend-common.iiko.ru/components/stepper

- **Type=Filled, Position=First, Content=Icon** — Заполненная. Первая в группе — «Назад» слева. Кнопка только с иконкой.
- **Type=Filled, Position=First, Content=Text** — Заполненная. Первая в группе — «Назад» слева. Кнопка с текстом.
- **Type=Filled, Position=Middle, Content=Icon** — Заполненная. Средняя в группе. Кнопка только с иконкой.
- **Type=Filled, Position=Middle, Content=Text** — Заполненная. Средняя в группе. Кнопка с текстом.
- **Type=Filled, Position=Last, Content=Icon** — Заполненная. Последняя — «Далее» справа. Кнопка только с иконкой.
- **Type=Filled, Position=Last, Content=Text** — Заполненная. Последняя — «Далее» справа. Кнопка с текстом.
- **Type=Outlined, Position=First, Content=Icon** — С рамкой. Первая в группе — «Назад» слева. Кнопка только с иконкой.
- **Type=Outlined, Position=First, Content=Text** — С рамкой. Первая в группе — «Назад» слева. Кнопка с текстом.
- **Type=Outlined, Position=Middle, Content=Icon** — С рамкой. Средняя в группе. Кнопка только с иконкой.
- **Type=Outlined, Position=Middle, Content=Text** — С рамкой. Средняя в группе. Кнопка с текстом.
- **Type=Outlined, Position=Last, Content=Icon** — С рамкой. Последняя — «Далее» справа. Кнопка только с иконкой.
- **Type=Outlined, Position=Last, Content=Text** — С рамкой. Последняя — «Далее» справа. Кнопка с текстом.
