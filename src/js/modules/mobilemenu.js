document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.burger');
	const burgerIcon = burger.querySelector('.burger__icon');
	const menu = document.querySelector('.menu');
	const html = document.documentElement;
	const menuLinks = document.querySelectorAll('.menu__link');

	// add burger icon
	if (burger && !burgerIcon) {
		 burger.innerHTML = `
			  <span class="burger__icon">
					<span class="burger__line burger__line_1"></span>
					<span class="burger__line burger__line_2"></span>
					<span class="burger__line burger__line_3"></span>
			  </span>`;
	}

	const toggleClass = (element, className) => element.classList.toggle(className);
	const removeClass = (element, className) => element.classList.remove(className);

	// open/close mobile menu
	const toggleMenu = () => {
		toggleClass(burger.querySelector('.burger__icon'), 'burger__icon_close');
		toggleClass(menu, 'menu_open');
		toggleClass(html, 'scroll-disable');
	};

	// close mobile menu
	const closeMenu = () => {
		removeClass(burger.querySelector('.burger__icon'), 'burger__icon_close');
		removeClass(menu, 'menu_open');
		removeClass(html, 'scroll-disable');
	};

	// click on burger
	burger.addEventListener('click', toggleMenu);
	// закрываем меню после нажатия на ссылку (если меню якорное и не ведет на другую страницу)
	menuLinks.forEach(link => link.addEventListener('click', closeMenu));
});
