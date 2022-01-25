"use strict";

console.log('arr' + 'obj');//arrobj выведет строчные данные кокретинация сложение двух строк 
console.log('arr' + 5);//arr5 сложение строки с числом выведет строчные данные 
console.log(5 + 'arr');//сдесь тоже 
// Конкатенация (+) прибавление двух строк 
console.log('arr' + " - object");//arr - object
console.log(4 + " - object");//4 - object

//Для того что бы строку превратить в число перед prompt ставим унарный +
let answer = +prompt('Вам есть 18 лет?', 'Да');

console.log(typeof (answer));//number в консоле браузера выведет числовое значение 

//console.log(4 + +"5"); //унарный плюс (+) - дополнительный плюс
//console.log(4 + +" - object");//NaN Ошибка Команда 
//не подлежите логическим действиям число не может быть прибавлено к строке

//Префиксная возвращает уже измененное значение 
//Постфиксное еще старое 

let incr = 10,//При объявлении нескольких переменных нужно объявлять через 
	decr = 10;//запятую а уж потом в конце ставиться точка с запятой.


// incr++; // постфиксный инкремент - увеличение на единицу
// decr--; //постфиксный декремент - уменьшение на единицу

// console.log(incr); /*11 (10 увеличилась на 1)*/
// console.log(decr); /*9 (10 уменьшилась на 1)*/

// console.log(++incr);//11
// console.log(--decr);//9

console.log(incr++);//10 сначала вернула старое значение и только после того добавила 1
console.log(decr--);//10 

//++incr // префиксные
//--decr // префиксные 
console.log(incr); //11
console.log(decr); // 9
console.log(incr++); //10 
console.log(decr--); // 10 
/*использование постфиксной формы прямо сразу возвращает старое значение а уж
потом увеличивает или уменьшает */
console.log(++incr); /* 11 префиксное */
console.log(--decr); /* 9 префиксное */

//% остаток от деления 
console.log(5 % 2); //в консоли выведется остаток от деления т.е 1

//оператор =. = - присваивание, == - сравнение, === - строгое сравнение.
console.log('2' == 2);//true сравнивает по значению
console.log('2' === 2);//false сравнение по типом данных
console.log(2 * 4 == 8);//true

/* Если используется знак равно (=)один раз то это  
присваивание, если два раза (==) то это сравнение. Если три раза (===) то 
это уже строгое сравнение. в консоли выведется true т.е 2*4=8 что соответствует 
равенству 8, такой же результат будет при строчном типе данных т.е 2*4=="8"
(true) сравнение по значению. Если сравнивать по типу данных то используется 
уже строгое сравнение (===)!!!!!!!

&& оператор - и
|| оператор - или */
const isChecked = true,
	isClose = true;
console.log(isChecked && isClose);//true т.к оба оператора имеют значение true. если один 
//из операторов дует false то и в консоли будет false. 

console.log(isChecked || isClose);//в консоли будет результат true т.е в аргументах 
// хотя бы одна переменная имеет значение true, если оба значение 
// false то консоль выведет false так как оба значения false.

console.log(isChecked || !isClose);
// если оба оператора имеют значение false но у одного 
// оператора стоит ! - оператор отрицания, то и консоль выведет 
// значение true так как одно из значений окажется true

// Порядок выполнения операторов. 

console.log(2 + 2 * 2 != 8);
// true (!=   оператор не равенства, !==  строгое 
// сравнение не равенства по типу).
console.log(2 + 2 * 2 === 8); //false

console.log(2 + 2 * 2 != '6');//false
console.log(2 + 2 * 2 !== '6');//true


/*в первую очередь выполняется оператор умножение (4)
а затем прибавление (2+(4)=6) т.е 6 не равно 8 
что не есть правдой. Оператор умножения приоритет больше чем у  
оператора сложения.
Таблица приоритета операторов: 
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence 

ЗАДАЧИ
1.Постфиксная и префиксная формы
	 Чему будут равны переменные a, b, c и d в примере ниже?
*/
let a = 1,
	b = 1;

// a = 2
// b = 2
// c = 2
// d = 1

let c = ++a;
let d = b++;
alert(++a); // 2, префиксная форма возвращает новое значение
alert(b++); // 1, постфиксная форма возвращает старое значение
alert(a); // 2, значение увеличено один раз
alert(b); // 2, значение увеличено один раз

/*2. Результат присваивания
Чему будут равны переменные a и x после исполнения кода в примере ниже?*/
let a1 = 2;
let x = 1 + (a1 *= 2); //x=5
/*a = 4 (умножено на 2)
x = 5 (вычислено как 1 + 4)
(a *=2 = a*2=4)
x=1+(4)=5

3. Преобразование типов
Какой результат будет у выражений ниже?
"" + 1 + 0 
"" - 1 + 0 
true + false 
6 / "3" - 
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2
Подумайте как следует, запишите ответы и сверьтесь с решением. 

РЕШЕНИЕ
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)
1)Сложение со строкой "" + 1 преобразует 1 к строке: "" + 1 = "1", 
и в следующем случае "1" + 0 работает то же самое правило.
2)Вычитание - (как и большинство математических операторов) работает 
только с числами, пустая строка "" приводится к 0.
3) Сложение со строкой превращает число 5 в строку и добавляет к строке.
4) Вычитание всегда преобразует к числу, значит строка " -9 " 
становится числом -9 (пробелы по краям обрезаются).
5) null становится 0 после численного преобразования.
6) undefined становится NaN после численного преобразования.
7) Пробельные символы, такие как \t и \n, по краям строки игнорируются
 при преобразовании в число, так что строка " \t \n", аналогично пустой 
 строке, становится 0 после численного преобразования.

 4. Исправьте сложение

Ниже приведён код, который запрашивает у пользователя два числа и 
показывает их сумму.
Он работает неправильно. Код в примере выводит 12 (для значения полей 
по умолчанию).
В чём ошибка? Исправьте её. Результат должен быть 3.
*/
let a2 = prompt("Первое число?", 1);
let b2 = prompt("Второе число?", 2);

alert(a2 + b2); // 12

/*РЕШЕНИЕ

Причина в том, что окно запроса возвращает пользовательский ввод как строку.
Поэтому переменные получают значения "1" и "2" соответственно.*/

let a = "1"; // prompt("Первое число?", 1);
let b = "2"; // prompt("Второе число?", 2);
alert(a + b); // 12

/*Нам нужно привести строки к числам перед применением оператора +. Например, 
с помощью Number() или вставки + перед ними.
Вставить + можно прямо перед prompt:*/

let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);
alert(a + b); // 3

//Или внутри alert:

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(+a + +b); // 3

// В последнем варианте унарный и бинарный + используются вместе.
// Выглядит забавно, правда? 

