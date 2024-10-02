/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/js/modules/issafari.js
let isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
if (isSafari) {
	document.documentElement.classList.add('safari');
}
;// CONCATENATED MODULE: ./src/js/modules/iswebp.js
// check support webp
function isWebp(callback) {
	const webP = new Image();
	webP.onload = webP.onerror = function () {
		 callback(webP.height === 2);
	};
	webP.src = 'data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA';
}
// add class webp/no-webp to html
isWebp(function (support) {
	let className = support === true ? 'webp' : 'no-webp';
	document.documentElement.classList.add(className);
});
;// CONCATENATED MODULE: ./src/js/modules/scrollmenu.js
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
;// CONCATENATED MODULE: ./src/js/script.js



/******/ })()
;