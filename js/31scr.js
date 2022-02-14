'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.querySelectorAll('circle');
const oneHeart = document.querySelector('.heart');

box.style.backgroundColor = 'blue';
box.style.width = '500px';
//передавать параметры нужно в виде строки с указанием размера и единицами измерения

btns[1].style.borderRadius = '100%';
btns[0].style.backgroundColor = 'red';


circles[0].style.backgroundColor = 'red';
//такая запись будет корректной
// circles.style.backgroundColor = 'red';//обращение к пвсевдомассиву выдаст ошибку
