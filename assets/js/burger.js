document.addEventListener('DOMContentLoaded', function() {
    var burgerButton = document.querySelector('.burger-menu__button');
    var burgerMenu = document.querySelector('.burger-menu');

    burgerButton.addEventListener('click', function() {
        burgerMenu.classList.toggle('open');
    });
});
