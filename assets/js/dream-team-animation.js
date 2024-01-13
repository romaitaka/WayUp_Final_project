document.addEventListener('DOMContentLoaded', function() {
  // Определение переменных для элементов слайдера
  var photos = document.querySelectorAll('.dream-team-photos__item');
  var dots = document.querySelectorAll('.dream-team__dot');
  var arrowLeft = document.querySelector('.dream-team-photos__vector-left');
  var arrowRight = document.querySelector('.dream-team-photos__vector-right');
  var autoScrollInterval;

  // Удаление класса 'active' у всех элементов в переданном списке
  function removeActiveClass(elements) {
      elements.forEach(function(element) {
          element.classList.remove('active');
      });
  }

  // Добавление класса 'active' к указанному элементу
  function addActiveClass(element) {
      element.classList.add('active');
  }

  // Установка активного элемента для слайдера
  function setActive(index) {
      removeActiveClass(photos);
      removeActiveClass(dots);
      addActiveClass(photos[index]);
      addActiveClass(dots[index]);
  }

  // Переключение фотографии вперед или назад
  function switchPhoto(forward) {
      var currentIndex = Array.from(photos).findIndex(photo => photo.classList.contains('active'));
      var nextIndex = forward ? (currentIndex + 1) % photos.length : (currentIndex - 1 + photos.length) % photos.length;
      setActive(nextIndex);
  }

  // Остановка автоматической прокрутки слайдера
  function stopAutoScroll() {
      clearInterval(autoScrollInterval);
  }

  // Запуск автоматической прокрутки слайдера
  function startAutoScroll() {
      autoScrollInterval = setInterval(() => switchPhoto(true), 2000);
  }

  // Установка событий наведения для стрелок слайдера
  function setArrowHover(arrow, hoverSrc, originalSrc) {
      arrow.addEventListener('mouseenter', function() {
          this.src = hoverSrc;
      });
      arrow.addEventListener('mouseleave', function() {
          this.src = originalSrc;
      });
  }

  // Назначение обработчиков событий для точек (дотов)
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => setActive(index));
  });

  // Назначение обработчиков событий для стрелок слайдера
  arrowLeft.addEventListener('click', () => switchPhoto(false));
  arrowRight.addEventListener('click', () => switchPhoto(true));

  // Создание массива элементов, которые останавливают и возобновляют автопрокрутку
  var elementsToPause = [...photos, ...dots, arrowLeft, arrowRight];
  elementsToPause.forEach(element => {
      element.addEventListener('mouseenter', stopAutoScroll);
      element.addEventListener('mouseleave', startAutoScroll);
  });

  // Настройка эффекта наведения на стрелки слайдера
  setArrowHover(arrowLeft, './assets/img/Vector_left--hover.svg', './assets/img/Vector_left.svg');
  setArrowHover(arrowRight, './assets/img/Vector_rightt--hover.svg', './assets/img/Vector_right.svg');

  // Инициализация автоматической прокрутки слайдера
  startAutoScroll();
});
