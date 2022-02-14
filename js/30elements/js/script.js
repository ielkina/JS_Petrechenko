'use strict';
//получение элемента страницы по ид
const box = document.getElementById('box');
// console.log(box);
// способ получение элемента 
const buttons = document.getElementsByTagName('button');//всех элементов с тегом button
//1 способ получение элемента 
// const buttons = document.getElementsByTagName('button')[1];//получение кнопки под индексом 1 
//2 способ получение элемента 
// console.log(buttons[1]);
//получение элемента по классу элемента
const circles = document.getElementsByClassName('circle');
// console.log(circles);//выведет массив данных с классом circles
// console.log(circles[1]);
const wrapper = document.querySelector('.wrapper');
//Выведение в консоль элементов с помощью метода forEach
const hearts = document.querySelectorAll('.heart');//при работе с селектором необходимо ставить "."
// console.log(hearts);
// hearts.forEach(item => {
// 	console.log(item);
// });

//получение первого элемента 
// const oneHeard = document.querySelector('div');
// console.log(oneHeard);

// circles[0].style.backgroundColor = 'red';

// box.style.cssText = 'background-color: red; width: 500px';
box.style.cssText = `background-color: red; width: 500px`;

// for (let i = 0; i < hearts.length; i++) {
// 	hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
	item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('тут был я');

div.classList.add('black');
document.body.append(div);

// wrapper.append('div');//вставляет в конец родителя элемент 
// wrapper.prepend(div);//вставляет в начало родителя элемент 

// hearts[0].before(div); //добавление элементов до или после определенных элементов в массиве
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]); //старый метод добавление элементов

// circles[0].remove(); //удаление элемента со страницы

// wrapper.removeChild(hearts[1]); //старый метод удаление элемента 

// hearts[1].replaceWith(circles[0]); //замена элемента на другой элемент 

// wrapper.replaceChild(circles[0], hearts[0]); //старый способ замены элемента на другой элемент 

// wrapper.appendChild(div);

div.innerHTML = "<h2>hello world.</h2>"; //добавление в элементы html данных 

// div.textContent = 'hi';
// div.textContent = '<h2>hi</h2>';

div.insertAdjacentHTML('afterbegin', "<h2>hi</h2>");




