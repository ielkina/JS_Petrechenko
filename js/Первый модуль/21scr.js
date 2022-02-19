'use strict';
function first() {
	//что то делаем
	setTimeout(function () {
		console.log(1);
	}, 500);//500 ms - 0,5 секунды задержка вывода функции на полсекунды
}

function second() {
	console.log(2);
}

first();
second();
//2
//1


//Callback - это функция которая должна быть выполнена после того как другая функция завершила 
//свое выполнение

function learnJS(lang, callback) {
	//console.log('Я учу' + ' ' + lang);
	console.log(`Я учц: ${lang}`);
	callback();
}
learnJS('JavaScript', function () {
	console.log('Я прошел третий урок');
});

function done() {//другой вариант написания функции 
	console.log('Я прошел 3й урок');
}
learnJS('JavaScript', done);