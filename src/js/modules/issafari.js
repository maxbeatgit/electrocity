let isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
if (isSafari) {
	document.documentElement.classList.add('safari');
}