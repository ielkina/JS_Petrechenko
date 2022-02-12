'use strict';
//1
let x = 5;
console.log(x++);//5 постфиксная форма сначала возвращает 5
console.log(x);// 6 а потом уже добавляет 1
console.log(++x);//7 префиксная форма сразу добавляет 1


//2
// [ ] + false - null + true 
console.log([] + false);//false
console.log(typeof ([] + false));//string пустой массив приравнивается к пустой строке 
console.log([] + false - null);//NaN
console.log([] + false - null + true);//NaN

//3
let y = 1;
let x = y = 2;//y присваиваем 2 (с права на лево)
console.log(x = y);//2
console.log(x);//2

//4
// [ ] + 1 + 2
console.log([] + 1 + 2);//'12' конкатенация строк 

//5
console.log("1"[0]);//'1' обращение к нулевому индексу строки т.е 1

//6
console.log(2 && 1 && null && 0 && undefined);//&& вернул первое ложное значение null
//&& запинается на лжи
//|| запинается на правде

//7
console.log(!!(1 && 2) === (1 && 2));//false 
//!! превращает результат в boolean которое не будет равно 

//8
console.log(null || 2 && 3 || 4);//3
//&& приоритет выше и будет выполняться в первую очередь
//если аргументы правдивые (два числа) то будет возвращаться последнее 3
//|| запинается на правде вернет 3

//9
const a = [1, 2, 3],
	b = [1, 2, 3];
console.log(a == b);//false
//a b разные хранилища информации и поэтому будет false
console.log([1, 2, 3] == [1, 2, 3]);//false

//10
console.log(+"Infinity");//Infinity  number из за унарного плюса

//11
console.log("Ёжик" > "яблоко");//false
//сравнение строк 

//12

console.log(0 || "" || 2 || undefined || true || falsе);//2
//|| или запнется на первом правдивом аргументе т.е 2


