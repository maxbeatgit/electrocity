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