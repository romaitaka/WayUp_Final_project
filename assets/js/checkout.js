// Находим все элементы чекбоксов на странице
var checkboxes = document.querySelectorAll('.checkout__pay-var-option-check-box');

// Добавляем обработчик события 'click' для каждого чекбокса
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        // Добавляем или удаляем класс 'active' при каждом клике
        checkbox.classList.toggle('active');
    });
});
