const smoothLinks = document.querySelectorAll('.menu__link, .scroll-link');

smoothLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Отменяем стандартное поведение ссылки

        const targetId = this.getAttribute('href'); // Получаем значение атрибута href
        const targetElement = document.querySelector(targetId); // Находим целевой элемент

        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset; // Получаем позицию целевого элемента относительно документа
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Плавная прокрутка
            });
        }
    });
});
