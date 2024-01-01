// Получаем массивы всех фотографий и дотов
var photos = document.querySelectorAll('.dream-team-photos__item');
var dots = document.querySelectorAll('.dream-team__dot');

// Функция для удаления класса 'active' у всех элементов
function removeActiveClass(elements) {
  elements.forEach(function(element) {
    element.classList.remove('active');
  });
}

// Функция для добавления класса 'active' к текущему элементу
function addActiveClass(element) {
  element.classList.add('active');
}

// Функция для установки активного элемента
function setActive(index) {
  // Сначала удаляем класс 'active' у всех фото и дотов
  removeActiveClass(photos);
  removeActiveClass(dots);
  // Затем добавляем класс 'active' к текущим фото и доту
  addActiveClass(photos[index]);
  addActiveClass(dots[index]);
}

// Добавляем обработчики событий для дотов
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => setActive(index));
});

// Функция для переключения фотографии вперед или назад
function switchPhoto(forward) {
  // Находим индекс текущей активной фотографии
  var currentIndex = Array.from(photos).findIndex(photo => photo.classList.contains('active'));
  var nextIndex;

  if (forward) {
    // Вычисляем индекс следующей фотографии
    nextIndex = (currentIndex + 1) % photos.length;
  } else {
    // Вычисляем индекс предыдущей фотографии
    nextIndex = (currentIndex - 1 + photos.length) % photos.length;
  }

  setActive(nextIndex);
}

// Обработчики событий для стрелок
var arrowLeft = document.querySelector('.dream-team-photos__vector-left');
var arrowRight = document.querySelector('.dream-team-photos__vector-right');

arrowLeft.addEventListener('click', () => switchPhoto(false)); // Переключаем на предыдущую фотографию
arrowRight.addEventListener('click', () => switchPhoto(true)); // Переключаем на следующую фотографию

// Функция для переключения на следующую фотографию
function switchToNextPhoto() {
  switchPhoto(true);
}

// Устанавливаем интервал для автоматической прокрутки
var autoScrollInterval = setInterval(switchToNextPhoto, 2000); // 2000 мс = 2 секунды

// Остановка автоматической прокрутки при взаимодействии пользователя
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// Возобновление автоматической прокрутки
function startAutoScroll() {
  autoScrollInterval = setInterval(switchToNextPhoto, 2000);
}

// Добавляем события для остановки и возобновления автоматической прокрутки
photos.forEach(photo => {
  photo.addEventListener('mouseenter', stopAutoScroll);
  photo.addEventListener('mouseleave', startAutoScroll);
});

dots.forEach(dot => {
  dot.addEventListener('mouseenter', stopAutoScroll);
  dot.addEventListener('mouseleave', startAutoScroll);
});

arrowLeft.addEventListener('mouseenter', stopAutoScroll);
arrowRight.addEventListener('mouseenter', stopAutoScroll);

arrowLeft.addEventListener('mouseleave', startAutoScroll);
arrowRight.addEventListener('mouseleave', startAutoScroll);
