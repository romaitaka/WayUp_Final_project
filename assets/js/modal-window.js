// Переменные
var modal = document.getElementById('callbackModal');
var btn = document.getElementById('call-order--button');
var closeImg = document.getElementsByClassName('close')[0];
var callbackModal = document.getElementById('callbackModal');
var confirmationModal = document.getElementById('confirmationModal');
var closeCallbackModal = document.getElementsByClassName('close')[0];
var closeConfirmationModal = document.getElementsByClassName('close-button')[0];
var form = document.getElementById('callbackForm');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');

// Функция для валидации имени (только буквы)
function validateName(name) {
    const regex = /^[A-Za-zА-Яа-я]+$/; // Регулярное выражение для букв
    return regex.test(name);
}

// Функция для валидации email
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

// Функция для валидации телефонного номера
function validatePhone(phone) {
    const regex = /^\+7\d{10,11}$/; // Проверяет номер с +7 и 10 или 11 цифрами
    return regex.test(phone);
}

// Функция для отображения ошибок
function showError(inputId, errorMessage) {
    const errorElement = document.getElementById(inputId + '-error');
    errorElement.textContent = errorMessage;
}

// Функция для очистки ошибок
function clearError(inputId) {
    const errorElement = document.getElementById(inputId + '-error');
    errorElement.textContent = '';
}

// Обработчики событий
btn.onclick = function () {
    modal.style.display = 'block';
}

closeImg.onclick = function () {
    modal.style.display = 'none';
}

closeCallbackModal.onclick = function () {
    callbackModal.style.display = 'none';
}

closeConfirmationModal.onclick = function () {
    confirmationModal.style.display = 'none';
}

// Обработчик отправки формы
form.addEventListener('submit', function (event) {
    // Проверить валидность имени
    if (!validateName(nameInput.value)) {
        showError('name', 'Пожалуйста, введите только буквы для имени');
        event.preventDefault(); // Предотвратить отправку формы
    } else {
        clearError('name');
    }

    // Проверить валидность email
    if (!validateEmail(emailInput.value)) {
        showError('email', 'Пожалуйста, введите корректный email');
        event.preventDefault(); // Предотвратить отправку формы
    } else {
        clearError('email');
    }

    // Проверить валидность телефонного номера
    if (!validatePhone(phoneInput.value)) {
        showError('phone', 'Пожалуйста, введите корректный номер телефона');
        event.preventDefault(); // Предотвратить отправку формы
    } else {
        clearError('phone');
    }
});
