/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/js/modules/issafari.js
let isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
if (isSafari) {
	document.documentElement.classList.add('safari');
}
;// CONCATENATED MODULE: ./src/js/modules/scrollmenu.js
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
;// CONCATENATED MODULE: ./src/js/modules/catalog.js
document.addEventListener('DOMContentLoaded', function () {
	const html = document.documentElement;
	const burger = document.querySelector('.header__burger');
	const catalog = document.querySelector('.catalog');
	const closeBtn = document.querySelector('.catalog__close');
	const disableScroll = 'scroll-disable';
	const open = 'catalog_open';

	// open catalog
	const openCatalog = (event) => {
		event.preventDefault();
		html.classList.add(disableScroll);
		catalog.classList.add(open);
	};

	// close catalog
	const closeMenu = (event) => {
		event.preventDefault();
		html.classList.remove(disableScroll);
		catalog.classList.remove(open);
	};

	// click on buttons
	burger.addEventListener('click', openCatalog);
	closeBtn.addEventListener('click', closeMenu);
});
;// CONCATENATED MODULE: ./src/js/script.js



/******/ })()
;