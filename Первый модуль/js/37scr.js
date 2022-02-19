'use strict';
const p = document.querySelectorAll('p');
console.log(p);


function loadScript(src) {
	//создание нового элемента страницы(скрипт)
	const script = document.createElement('script');
	//обращаемся к этому элементу
	script.src = src;
	// порядок подключения файлов
	script.async = false;
	//помещаем элемент на страницу
	document.body.append(script);
}
loadScript("js/test.js");
loadScript("js/test2.js");