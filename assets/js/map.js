ymaps.ready(init);

function init() {
    // Создание карты
    var myMap = new ymaps.Map("map", {
        center: [59.94, 30.34], // Координаты центра карты
        zoom: 15 // Уровень масштабирования
    });

    // Координаты вашей точки
    var myPlacemarkCoords = [59.938694, 30.341049];

    // Создание метки (Placemark)
    var myPlacemark = new ymaps.Placemark(myPlacemarkCoords, {
        hintContent: 'Моя точка на карте', // Подсказка при наведении на метку
        balloonContent: 'Здесь что-то интересное!' // Текст всплывающего окна
    });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);
}
