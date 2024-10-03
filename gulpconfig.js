// Получаем имя папки проекта
import * as nodePath from 'path';
const rootDir = nodePath.basename(nodePath.resolve());

const buildDir = `./dist`;
const srcDir = `./src`;

export const path = {
	build: {
		js: `${buildDir}/js/`,
		css: `${buildDir}/css/`,
		html: `${buildDir}/`,
		images: `${buildDir}/img/`,
		fonts: `${buildDir}/fonts/`,
	},
	src: {
		js: `${srcDir}/js/script.js`,
		scss: `${srcDir}/scss/style.scss`,
		html: `${srcDir}/*.html`,
		images: `${srcDir}/img/**/*.{jpg,jpeg,png,gif,svg,webp}`,
		svgicons: `${srcDir}/img/svgicons/*.svg`,
		fonts: `${srcDir}/fonts/**/*.woff2`,
	},
	watch: {
		js: `${srcDir}/js/**/*.js`,
		scss: `${srcDir}/scss/**/*.scss`,
		html: `${srcDir}/**/*.html`,
		images: `${srcDir}/img/**/*.{jpg,jpeg,png,gif,svg,webp}`,
		svgicons: `${srcDir}/img/svgicons/*.svg`,
		fonts: `${srcDir}/fonts/**/*.*`,
	},
	buildDir: buildDir,
	srcDir: srcDir,
	rootDir: rootDir,
}