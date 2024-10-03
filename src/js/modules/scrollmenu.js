document.addEventListener('DOMContentLoaded', function () {
	const navList = document.querySelector('.menu__list');
	const btnNext = document.querySelector('.menu__btn_next');
	const btnBack = document.querySelector('.menu__btn_back');
	const hide = 'menu__btn_hide';

	const scrollAmount = 200; // Количество пикселей для прокрутки

	// Функция для проверки положения прокрутки
	function checkScroll() {
		const maxScrollLeft = navList.scrollWidth - navList.clientWidth;

		if (navList.scrollLeft === 0) {
			btnBack.classList.add(hide); // скрываем кнопку назад
		} else {
			btnBack.classList.remove(hide); // показываем кнопку назад
		}

		if (navList.scrollLeft >= maxScrollLeft - 5) {
			btnNext.classList.add(hide); // скрываем кнопку вперед
		} else {
			btnNext.classList.remove(hide); // показываем кнопку вперед
		}
	}

	// проверяем положение прокрутки
	checkScroll();

	btnNext.addEventListener('click', () => {
		navList.scrollBy({
			left: scrollAmount,
			behavior: 'smooth' // Плавная прокрутка
		});
	});

	btnBack.addEventListener('click', () => {
		navList.scrollBy({
			left: -scrollAmount,
			behavior: 'smooth'
		});
	});

	// Следим за изменениями прокрутки
	navList.addEventListener('scroll', checkScroll);

});