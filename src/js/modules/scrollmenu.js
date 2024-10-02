document.addEventListener('DOMContentLoaded', function () {
	const navList = document.querySelector('.header__menu-list');
	const arrowNext = document.querySelector('.header__menu-btn_next');
	const arrowBack = document.querySelector('.header__menu-btn_back');

	const scrollAmount = 200; // Количество пикселей для прокрутки

	// Функция для проверки положения прокрутки
	function checkScrollPosition() {
		const maxScrollLeft = navList.scrollWidth - navList.clientWidth;

		if (navList.scrollLeft === 0) {
			arrowBack.classList.add('header__menu-btn_hide'); // скрываем кнопку назад
		} else {
			arrowBack.classList.remove('header__menu-btn_hide'); // показываем кнопку назад
		}

		if (navList.scrollLeft >= maxScrollLeft - 5) {
			arrowNext.classList.add('header__menu-btn_hide'); // скрываем кнопку вперед
		} else {
			arrowNext.classList.remove('header__menu-btn_hide'); // показываем кнопку вперед
		}
	}

	// проверяем положение прокрутки
	checkScrollPosition();

	arrowNext.addEventListener('click', () => {
		navList.scrollBy({
			left: scrollAmount,
			behavior: 'smooth' // Плавная прокрутка
		});
	});

	arrowBack.addEventListener('click', () => {
		navList.scrollBy({
			left: -scrollAmount,
			behavior: 'smooth'
		});
	});

	// Следим за изменениями прокрутки
	navList.addEventListener('scroll', checkScrollPosition);

});