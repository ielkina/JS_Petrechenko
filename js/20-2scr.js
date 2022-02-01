'use strict';
/*Задачи на понимание основ JS (с реальных собеседований)
Ответьте на вопросы. Если возникают затруднения - воспользуйтесь выводом в консоль (console.log())
Вопросы к этому заданию
Какое будет выведено значение:*/
let x = 5;
console.log(x++); //6

//Чему равно такое выражение: 

console.log([] + false - null + true);//NaN ???

//Что выведет этот код: 
let y = 1;
let x = y = 2;
console.log(x);//2 ???

//Чему равна сумма
console.log([] + 1 + 2);//12

//Что выведет этот код: 
console.log("1"[0]);//1 

//Чему равно 
console.log(2 && 1 && null && 0 && undefined); //null ??

//Есть ли разница между выражениями 
let a;
let b;
console.log(!!(a && b));//false
console.log(a && b);//undefined

//	Что выведет этот код: 
console.log(null || 2 && 3 || 4);//3 ??

//  Правда ли что a == b ?
let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a == b);//false ???

//Что выведет этот код: 
console.log(+"Infinity");//Infinity

// Верно ли сравнение:  ?
console.log("ёжик" > "яблоко");//true  ??

//Чему равно?
console.log(0 || "" || 2 || undefined || true || false);//2













