'use strict';
//Функции
//Функции - это наши действия в нашем скрипте

function showFirstMessage() { //название функции
	console.log('hello world'); //что делает функция не будет работать пока не вызовется
}
showFirstMessage(); //вызов функции
//имя функции пишется в формате кэмэлкэйс начиная с глагола над чем работает эта функция

let num = 10;//глобальная переменная 

function showFirstMessage(text, arr, num) { //название функции
	console.log(text); //что делает функция не будет работать пока не вызовется
	let num = 20; //если переменная объявляется внутри функции(блока) то вне функции она не видна 
	//такая  переменная называется локальной
}
showFirstMessage('hello world'); //вызов функции
console.log(num);//ошибка

let num = 20;//глобальная переменная 
function showFirstMessage(text) { //название функции
	console.log(text); //что делает функция не будет работать пока не вызовется
	num = 10; //здесь глобальную функцию перезаписали	
}
showFirstMessage('hello world'); //вызов функции
console.log(num);//10

let num = 20;//глобальная переменная 
function showFirstMessage(text) { //название функции
	console.log(text); //что делает функция не будет работать пока не вызовется
	let num = 10;
}
showFirstMessage('hello world'); //вызов функции
console.log(num);//20  в данном примере консоль обращается к глобальной переменной 
//так как объявленной переменной внутри функции она не видит 

let num = 20;//глобальная переменная 
function showFirstMessage(text) { //название функции
	console.log(text); //что делает функция не будет работать пока не вызовется
	let num = 10;
	console.log(num);//10 здесь консоль обращается к локальной переменной 
}
showFirstMessage('hello world'); //вызов функции
console.log(num);//20  в данном примере консоль обращается к глобальной переменной 
//так как объявленной переменной внутри функции она не видит

let num = 20;//глобальная переменная 
function showFirstMessage(text) { //название функции
	console.log(text); //что делает функция не будет работать пока не вызовется
	console.log(num);//20 здесь консоль обращается к локальной переменной и не найдя ее обратиться к глобальной
	//т.е начнет искать ее выше вне функции 
}
showFirstMessage('hello world'); //вызов функции
console.log(num);//20  в данном примере консоль обращается к глобальной переменной 
//замыкание функции это сама функция вместе со всеми внешними переменными которые ей доступны

function calc(a, b) {
	return (a + b);
	console.log('dwed');
}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 5));

function ret() {
	let num = 50;
	return num;
}
const anotherNum = ret();
console.log(anotherNum);//50 извлечение локальной переменной из функции
//Фанкшин деклорейшн - функция может работать еще до того как она была объявлена

//Ффнкшн экспрешен 
const logger = function () {
	console.log('hello');
};//точка с запятой ставится в конце
logger();
//эта функция создается только тогда когда до нее  доходит поток кода и ее можно вызвать 
//только после объявления 

//Стрелочная функция
//не имеет своего контекста
const calc = (a, b) => a + b;
const calc = (a, b) => {return a + b };//или вот такой вариант
console.log(calc(4, 3));//7
console.log(calc(5, 6));//11
console.log(calc(10, 5));//15

//Методы и свойства строк и чисел
//Методы это вспомогательные функции
//Свойства это вспомогательные значения 

let str = 'test';
console.log(str.length);//4 длинна строки

console.log(str.toUpperCase());//TEST верхний регист 
console.log(str.toLocaleLowerCase());//нижний регистр 

let twelve = '12.2';
console.log(Math.round(twelve));//12 округление

let twelve = '12.2px';
console.log(parseInt(twelve));//12

let twelve = '12.2px';
console.log(parseFloat(twelve));//12.2