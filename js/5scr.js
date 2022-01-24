"use sсtrict";//говорит коду что мы работаем в новом стандарте
//в старой версии можно было писать код не объявляя переменную
//в новом это считается ошибкой 
a = 15;
console.log(a);//15 старая версия кода
console.log(a);//ошибка новая версия кода

//переменные и строгий режим
let number = 5;
const leftBorderWidth = 1;//не изменяемая переменная
number = 10;
console.log(number);//10 перезаписали переменную 
leftBorderWidth = 5;
console.log(leftBorderWidth);//ошибка так как const не изменяемая переменная

const obj = {
	a: 50
};
obj.a = 10;
console.log(obj);//изменили const с помощью obj

//старый вариант обозначения переменной не желательно использовать в коде
//она может существовать еще до того как ее объявили в коде

console.log(name);//name is not defined undefined те видна но не обозначена это не ошибка Хойстинг
var name = 'Ivan';

name = 'Alex'; //она может перезаписываться
console.log(name);//Alex  тут и видна и обозначена

{
	let result = 50;
	var sum = 50;
}
console.log(result);//result is not defined не видна в фигурных скобках
console.log(sum);//50


