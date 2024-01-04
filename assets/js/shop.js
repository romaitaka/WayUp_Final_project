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


document.addEventListener('DOMContentLoaded', function() {
  const products = document.querySelectorAll('.card-product');
  const pageCount = document.querySelector('.shop__product-counter');
  const maxProductsPerPage = 9;
  const totalProducts = products.length;
  const pages = document.querySelectorAll('.shop__page');

  pages.forEach(function(page, index) {
    page.addEventListener('click', function(event) {
      // Предотвращаем стандартное поведение ссылки
      event.preventDefault();
      // Удаляем класс active со всех страниц
      pages.forEach(p => p.classList.remove('active'));
      // Добавляем класс active к текущей странице
      this.classList.add('active');
      // Определяем количество товаров на текущей странице
      const productCount = (index + 1) * maxProductsPerPage < totalProducts ? maxProductsPerPage : totalProducts % maxProductsPerPage;
      // Обновляем текст счетчика товаров
      pageCount.textContent = `Показано: ${productCount} из ${totalProducts} товаров`;
      // Скрываем все товары
      products.forEach(p => p.style.display = 'none');
      // Отображаем товары для текущей страницы
      const start = index * maxProductsPerPage;
      const end = start + productCount;
      for (let i = start; i < end; i++) {
        if (products[i]) {
          products[i].style.display = 'block';
        }
      }
    });
  });
});


