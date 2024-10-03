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