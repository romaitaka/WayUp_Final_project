document.addEventListener("DOMContentLoaded", function() {
    var dots = document.querySelectorAll('.offer__dot');
    var titles = document.querySelectorAll('.offer__title');
    var texts = document.querySelectorAll('.offer__text');
    var photos = document.querySelectorAll('.offer__photo');
    var currentIndex = 0;
    var slideInterval;

    function resetAnimation() {
        titles.forEach(t => t.classList.remove('slide-out', 'slide-in'));
        texts.forEach(t => t.classList.remove('slide-out', 'slide-in'));
        photos.forEach(p => p.classList.remove('slide-out', 'slide-in'));
    }

    function changeSlide(nextIndex) {
        resetAnimation();

        if (typeof nextIndex === 'number') {
            currentIndex = nextIndex;
        } else {
            currentIndex = (currentIndex + 1) % dots.length;
        }

        // Применение анимации slide-out к активным элементам
        var activeTitle = document.querySelector('.offer__title.active');
        var activeText = document.querySelector('.offer__text.active');
        var activePhoto = document.querySelector('.offer__photo.active');

        if (activeTitle) activeTitle.classList.add('slide-out');
        if (activeText) activeText.classList.add('slide-out');
        if (activePhoto) activePhoto.classList.add('slide-out');

        setTimeout(function() {
            dots.forEach(d => d.classList.remove('active'));
            titles.forEach(t => t.classList.remove('active'));
            texts.forEach(t => t.classList.remove('active'));
            photos.forEach(p => p.classList.remove('active'));

            dots[currentIndex].classList.add('active');
            titles[currentIndex].classList.add('active', 'slide-in');
            texts[currentIndex].classList.add('active', 'slide-in');
            photos[currentIndex].classList.add('active', 'slide-in');
        }, 500); // Задержка для завершения анимации slide-out
    }

    function startSlideShow() {
        slideInterval = setInterval(changeSlide, 3000);
    }

    function resetSlideShow() {
        clearInterval(slideInterval);
        startSlideShow();
    }

    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            resetSlideShow();
            changeSlide(index);
        });
    });

    startSlideShow();
});
