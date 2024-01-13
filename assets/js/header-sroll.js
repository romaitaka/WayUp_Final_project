// Существующий код для изменения хедера при прокрутке
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.pageYOffset > 0) { // Проверяем, что страница прокручена вниз хотя бы на 1px
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Функция для плавного скролла до секции .new-collection
function scrollToSection() {
    var newCollectionSection = document.querySelector('.new-collection');
    if (newCollectionSection) {
        newCollectionSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Добавляем прослушиватель событий к кнопке
document.addEventListener('DOMContentLoaded', function() {
    var scrollButton = document.getElementById('arrow-down-button');
    if (scrollButton) {
        scrollButton.addEventListener('click', scrollToSection);
    }
});
