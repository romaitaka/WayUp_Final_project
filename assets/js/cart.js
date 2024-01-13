document.addEventListener('DOMContentLoaded', function() {
    // Удаление товара из корзины
    const closeButtons = document.querySelectorAll('.cart-page__close-button');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.closest('.cart-page__table-string').remove(); // Используем closest для поиска ближайшего родителя строки
        });
    });

    // Обработчик изменения количества товара
    const quantityInputs = document.querySelectorAll('.cart-page__one-item-in-the-cart-count-value'); // Обновленный селектор
    quantityInputs.forEach(function(input) {
        input.addEventListener('input', function() {
            const itemElement = this.closest('.cart-page__table-string'); // Используем closest для поиска ближайшей строки
            updateTotalPrice(itemElement);
        });
    });

    function updateTotalPrice(itemElement) {
        const quantityInput = itemElement.querySelector('.cart-page__one-item-in-the-cart-count-value'); // Обновленный селектор
        const quantity = quantityInput.value;
        const priceElement = itemElement.querySelector('.cart-page__table-string-price'); // Обновленный селектор
        const price = parseFloat(priceElement.textContent.replace('$', ''));
        const totalPriceElement = itemElement.querySelector('.cart-page__table-string-total'); // Обновленный селектор
        totalPriceElement.textContent = `$${(quantity * price).toFixed(2)}`;
    }
});

