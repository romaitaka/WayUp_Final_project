/* Fisrt Modal-window */
var modal = document.getElementById('callbackModal');

var btn = document.getElementById('call-order--button');

var closeImg = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

closeImg.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

/* Second Modal-Window */

// Получить модальные окна
var callbackModal = document.getElementById('callbackModal');
var confirmationModal = document.getElementById('confirmationModal');

// Получить кнопку открытия модального окна
var btn = document.getElementById('call-order--button');

// Получить элементы закрытия модальных окон
var closeCallbackModal = document.getElementsByClassName('close')[0];
var closeConfirmationModal = document.getElementsByClassName('close-button')[0];

// Получить форму обратного звонка
var form = document.getElementById('callbackForm');

// Показать первое модальное окно
btn.onclick = function() {
    callbackModal.style.display = 'block';
}

// Закрыть первое модальное окно
closeCallbackModal.onclick = function() {
    callbackModal.style.display = 'none';
}

// Закрыть второе модальное окно
closeConfirmationModal.onclick = function() {
    confirmationModal.style.display = 'none';
}

// Обработчик отправки формы первого модального окна
form.onsubmit = function(event) {
    event.preventDefault(); // Предотвратить стандартную отправку формы
    callbackModal.style.display = 'none'; // Закрыть первое модальное окно
    confirmationModal.style.display = 'block'; // Показать второе модальное окно
}

// Закрыть модальные окна при клике вне их
window.onclick = function(event) {
    if (event.target == callbackModal) {
        callbackModal.style.display = 'none';
    }
    if (event.target == confirmationModal) {
        confirmationModal.style.display = 'none';
    }
}
