'use strict';
//to string
//1
console.log(typeof (String(null)));//string
console.log(typeof (String(4)));//string (4) число превратили в страку
console.log(String(null));//'null'

//2
console.log(typeof (5 + ''));//string

//при сложении со строкой получаем строку

const num = 5;
console.log('https://vk.com/catalog/' + num);//https://vk.com/catalog/5

const fontSize = 26 + 'px';

//to number 

console.log(typeof (Number('4')));//number

//унарный плюс
console.log(typeof (+'5'));


console.log(typeof (parseInt('15px', 10)));//number

let answer = +prompt('hello', '');

//все данные получаемые от пользователя будут поступать в виде 'String'

//to boolean 

//всегда будет false
// 0,  ''(без пробела), null, undefined, NaN,

let switcher = null;
if (switcher) {
	console.log('Working...');
}
switcher = 1;
if (switcher) {
	console.log('Working...');
}

//2

console.log(typeof (Boolean('4')));

//3

console.log(typeof (!!'4444'));//boolean !! превращает в булевый тип данных


