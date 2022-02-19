'use strict';
let obj = new Object(); //метод нежелательный к использованию
let options = {
	width: 1024,
	height: 1024,
	name: 'test',
	// bool:false
	makeTest: function () { //создание собственной функции (методы)
		console.log('Test');
	}
};
options.makeTest();//Test


console.log(Object.keys(options)); //[ 'width', 'height', 'name' ] получаем объект в виде 
//массива со всем ключами
console.log(Object.keys(options).length); //3 выводит длину массива (встроенный метод)
console.log(options.name);//test

options.bool = false; //тоже самое если записать объект bool как на примере
//но иногда значение появляются позже

options.color = { // в объект можно ложыть любой тип данных (объект в объекте)
	border: 'black',
	bg: 'red'
};
let { border, bg } = options.color; //разбитие объекта деструктуризация
console.log(border); //black

delete options.bool;//удалит значение bool из объекта
console.log(options);
// test
// {
//   width: 1024,
//   height: 1024,
//   name: 'test',
//   bool: false,
//   color: { border: 'black', bg: 'red' }
// }
console.log(options['color']['border']);//black

for (let key in options) {
	// console.log('Свойство ' + key + ' имеет значение ' + options[key]); //старая версия
	console.log(`Свойство ${key} имеет значение ${options[key]}`);
}
// test
// {
//   width: 1024,
//   height: 1024,
//   name: 'test',
//   color: { border: 'black', bg: 'red' }
// }
// Свойство width имеет значение 1024
// Свойство height имеет значение 1024
// Свойство name имеет значение test
// Свойство color имеет значение [object Object] //в это строке не может вывести весь объект

console.log(Object.keys(options).length);//4

let counter = 0; //подсчет объектов 

for (let key in options) { //перебор внутри перебора
	if (typeof (options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Свойство ${key} имеет значение ${options[key][i]}`);
			counter++; //подсчет объектов в первом объекте 
		}
	} else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
		counter++;///подсчет объектов во втором объекте
	}
}
console.log(counter);//5

for (let key in options) { //обычный перебор объекта
	counter++;
}
console.log(counter); //4

// test
// {
//   width: 1024,
//   height: 1024,
//   name: 'test',
//   color: { border: 'black', bg: 'red' }
// }
// black
// Свойство width имеет значение 1024
// Свойство height имеет значение 1024
// Свойство name имеет значение test
// Свойство color имеет значение black
// Свойство color имеет значение red




