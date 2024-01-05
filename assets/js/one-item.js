// Дожидаемся полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Получаем все кнопки размеров
    var sizeButtons = document.querySelectorAll('.one-item__size');

    // Добавляем обработчик события клика к каждой кнопке
    sizeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Сначала убираем класс 'active' у всех кнопок
            sizeButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            // Добавляем класс 'active' только нажатой кнопке
            this.classList.add('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Получаем все элементы цветов
    var colorElements = document.querySelectorAll('.one-item__color');

    // Добавляем обработчик события клика к каждому элементу
    colorElements.forEach(function(element) {
        element.addEventListener('click', function() {
            // Сначала убираем класс 'active' у всех элементов
            colorElements.forEach(function(el) {
                el.classList.remove('active');
            });

            // Добавляем класс 'active' только нажатому элементу
            this.classList.add('active');
        });
    });
});
