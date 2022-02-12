'use strict';
//получение элемента страницы по ид
const box = document.getElementById('box');
console.log(box);
// способ получение элемента 
const buttons = document.getElementsByTagName('button');//всех элементов с тегом button
//1 способ получение элемента 
// const buttons = document.getElementsByTagName('button')[1];//получение кнопки под индексом 1 
//2 способ получение элемента 
console.log(buttons[1]);
//получение элемента по классу элемента
const circles = document.getElementsByClassName('circle');
console.log(circles);//выведет массив данных с классом circles
console.log(circles[1]);

//Выведение в консоль элементов с помощью метода forEach
const hearts = document.querySelectorAll('.heart');//при работе с селектором необходимо ставить "."
// console.log(hearts);
hearts.forEach(item => {
	console.log(item);
});

//получение первого элемента 
const oneHeard = document.querySelector('div');
console.log(oneHeard);
