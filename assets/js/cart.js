document.addEventListener('DOMContentLoaded', function() {
    // Удаление товара из корзины
    const closeButtons = document.querySelectorAll('.cart-page__close-button');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.parentElement.remove();
        });
    });

    // Обработчик изменения количества товара
    const quantityInputs = document.querySelectorAll('.cart-page__one-item-in-the-cart-count input');
    quantityInputs.forEach(function(input) {
        input.addEventListener('input', function() {
            const itemElement = this.closest('.cart-page__one-item-in-the-cart-wrapper');
            updateTotalPrice(itemElement);
        });
    });

    function updateTotalPrice(itemElement) {
        const quantity = itemElement.querySelector('.cart-page__one-item-in-the-cart-count input').value;
        const price = parseFloat(itemElement.querySelector('.cart-page__one-item-in-the-cart-price').textContent.replace('$', ''));
        const totalPriceElement = itemElement.querySelector('.cart-page__one-item-in-the-cart-total');
        totalPriceElement.textContent = `$${(quantity * price).toFixed(2)}`;
    }
});
