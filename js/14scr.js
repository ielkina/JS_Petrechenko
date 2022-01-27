"use strict";
//Условия
//Условия 'Если' (if)
// Любое условие начинается с оператора if дальше скобки в которых описывается действие и после этого 
// открываются фигурные скобки в которых описывается действие которые будут происходить при 
// выполнения этого условия.

if (4 == 9) { //условие если 4 равна (== оператор сравнения) 9  
	console.log('Ok!');
}
//Если мы хотим что б условие не останавливалась после закрытых фигурных скобок мы пишем 
//else (что то еще)

if (4 == 9) {
	console.log('Ok');
} else { //если нет 
	console.log('Error');//Error (в консоль выведется Error)
}

const num = 50;
if (num < 49) {
	console.log('Error');
} else if (num > 100) {  //вложенность условий
	console.log('Много');
} else {
	console.log('Ok!');//ок
}

let num = 50;
(num == 50) ? console.log('Ok!') : console.log('Error'); //сокращенная форма предыдущего примера
//(условие) ? консоль(""):консоль("");
//тернарный оператор (?) потому что в его работе участвуют 3 аргумента
//если бы было 2 аргумента он бы назывался бинарным
//если один то унарный

// Switch конструкция для упрощения ветвлений if else
//синтаксис
//switch (дальше то что проверяется) {case аргумент: консоль; break}

const num = 50; //числовое значение
switch (num) { // конструкция Switch всегда идет на строгое сравнение или/и соответствие
	case 49:
		console.log('Неверно');
		break;//обязательно для синтаксиса дл того что бы разделить условия
	case 100:
		console.log('Неверно');
		break; //если этого не сделать условия будут выполняться бесконечно 
	case 50:
		console.log('Верно!');
		break;
	default:
		console.log('Не в этот раз');
		break;
}

const string = '50'; //строки
switch (string) {//конструкция Switch всегда идет на строгое сравнение или/и соответствие
	case '49':
		console.log('Неверно');
		break;
	case '100':
		console.log('Неверно');
		break;
	case '50':
		console.log('Верно!');
		break;
	default:
		console.log('Не в этот раз');
		break;
}

/* ЗАДАЧИ

1. Перепишите 'if..else' в '?'
Перепишите if..else с использованием нескольких операторов '?'.
Для читаемости рекомендуется разбить код на несколько строк.*/
let message;
if (login == 'Сотрудник') {
	message = 'Привет';
} else if (login == 'Директор') {
	message = 'Здравствуйте';
} else if (login == '') {
	message = 'Нет логина';
} else {
	message = '';
}
/*РЕШЕНИЕ */
let message = (login1 == 'Сотрудник') ? 'Привет' : (login1 == 'Директор') ? 'Здравствуйте' : (login1 == '') ? 'Нет логина' : '';
//(условие логин = сотрудник) выполнение(?) консоль "привет": (условие = директор) ? консоль"здравствуйте": ит.д
/*2. Перепишите 'if' в '?'
Перепишите конструкцию if с использованием условного оператора '?': */
let result;
if (a + b < 4) {
	result = 'Мало';
} else {
	result = 'Много';
}
// РЕШЕНИЕ 
result = (a + b < 4) ? 'Мало' : 'Много';

/*3.  Покажите знак числа
Используя конструкцию if..else, напишите код, который получает число 
через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.

РЕШЕНИЕ */
let value = prompt('Введите число', 0);

if (value > 0) {
	alert(1);
} else if (value < 0) {
	alert(-1);
} else {
	alert(0);
}
/* 4. Название JavaScript
Используя конструкцию if..else, напишите код, который будет
спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: 
«Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
РЕШЕНИЕ*/
let value1 = prompt('Какое "официальное" название JavaScript?', '');

if (value1 == 'ECMAScript') {
	alert('Верно!');
} else {
	alert('Не знаете? ECMAScript!');
}
/* 5. if (строка с нулём)
Выведется ли alert?*/
if ("0") {
	alert('Привет');
}
/*РЕШЕНИЕ 
Да, выведется.
Любая строка, кроме пустой (а строка "0" – не пустая), в логическом 
контексте становится true.
Можно запустить и проверить:
if ("0") {
  alert( 'Привет' );
}
*/