// Подключаем обработчик событий когда весь DOM загружен
document.addEventListener('DOMContentLoaded', function () {
    // Получаем все кнопки категорий
    var buttons = document.querySelectorAll('.shop__product-category-button');

    // Для каждой кнопки добавляем обработчик клика
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Удаляем класс 'active' у всех кнопок
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            // Добавляем класс 'active' только к нажатой кнопке
            this.classList.add('active');

            // Предотвращаем переход по ссылке
            event.preventDefault();
        });
    });
});
