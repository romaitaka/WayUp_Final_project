document.addEventListener("DOMContentLoaded", function() {
    var dots = document.querySelectorAll('.offer__dot');
    var titles = document.querySelectorAll('.offer__title');
    var texts = document.querySelectorAll('.offer__text');
    var photos = document.querySelectorAll('.offer__photo');

    function resetAnimation() {
        titles.forEach(t => t.classList.remove('slide-out', 'slide-in'));
        texts.forEach(t => t.classList.remove('slide-out', 'slide-in'));
        photos.forEach(p => p.classList.remove('slide-out', 'slide-in'));
    }

    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            // Сброс текущих анимаций
            resetAnimation();

            // Применение анимации slide-out к активным элементам
            document.querySelector('.offer__title.active').classList.add('slide-out');
            document.querySelector('.offer__text.active').classList.add('slide-out');
            document.querySelector('.offer__photo.active').classList.add('slide-out');

            // Обновление активных элементов
            setTimeout(function() {
                dots.forEach(d => d.classList.remove('active'));
                titles.forEach(t => t.classList.remove('active'));
                texts.forEach(t => t.classList.remove('active'));
                photos.forEach(p => p.classList.remove('active'));

                dot.classList.add('active');
                if(titles[index]) titles[index].classList.add('active', 'slide-in');
                if(texts[index]) texts[index].classList.add('active', 'slide-in');
                if(photos[index]) photos[index].classList.add('active', 'slide-in');
            }, 500); // Задержка для завершения анимации slide-out
        });
    });
});
