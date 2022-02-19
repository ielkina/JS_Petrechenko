"use strict";
let category = 'toys';
console.log('https://someurl.com/' + category);//старый стандарт

//Конкатенация строк
//одну часть строки прикрепляют еще один кусок строки

console.log('https://someurl.com/' + category + '/' + '4');
//Что бы предотвратить длинные строки применяется прием интерполяции `
//кавычки заменяют на бэктики (`)
let category = 'toys';
console.log(`https://someurl.com/${category}/5`);
//консоль https://someurl.com/toys/5
//такой прием работает только с бэктиками (`)
//одинарными или двойными кавычками такое не получиться

let user = 'Ivan';
alert(`Привет, ${user}`);//Привет, Ivan 