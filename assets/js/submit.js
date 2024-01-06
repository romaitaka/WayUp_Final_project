document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.feedback-form'); // Найти форму по классу
    var successMessage = document.querySelector('.feedback-form__success-message'); // Найти элемент сообщения об успехе
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Предотвратить реальную отправку формы
      successMessage.classList.add('active'); // Добавить класс active к сообщению об успехе
      // Тут можете добавить AJAX запрос или другие действия по отправке формы
    });
  });
  