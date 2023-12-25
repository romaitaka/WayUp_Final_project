// Получить модальное окно
var modal = document.getElementById('callbackModal');

// Получить кнопку, которая открывает модальное окно
var btn = document.getElementById('call-order--button');

// Получить элемент <span>, который закрывает модальное окно
var closeImg = document.getElementsByClassName('close')[0];

// Когда пользователь нажимает на кнопку, открыть модальное окно
btn.onclick = function() {
    modal.style.display = 'block';
}

// Когда пользователь нажимает на <span> (x), закрыть модальное окно
closeImg.onclick = function() {
    modal.style.display = 'none';
}

// Когда пользователь кликает в любом месте вне модального окна, закрыть его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}