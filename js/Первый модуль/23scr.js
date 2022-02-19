"use strict";
let arr = [1, 2, 3, 4, 5];
arr.pop();//удаляет последний элемент в массиве
arr.push('5');//добавит элемент в массив но в виде строки 'запушить элемент'
arr.shift(); //убирает первый элемент из массива
arr.unshift('1');//добавляет первый элемент в виде строки
console.log(arr);
//1. [ 1, 2, 3, 4 ]
//2. [ 1, 2, 3, 4, '5' ]
//3. [ 2, 3, 4, 5 ]
//4. [ '1', 1, 2, 3, 4, 5 ]

let arr = [1, 2, 3, 4, 5]; //перебор массива
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
// 1
// 2
// 3
// 4
// 5

let arr = [1, 2, 3, 4, 5]; //перебор массива
arr[99] = 99;//присваиваем массиву 99 элемент грубая ошибка 
console.log(arr.length);//100 количество элементов в массиве
// length возвращает последний индекс массива +1 

console.log(arr);//[ 1, 2, 3, 4, 5, <94 empty items>, 99 ] <94 empty items> пусты элементы массива 

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

let arr = ['first', 2, 3, 'four', 5];//перебор массива forEach
// arr.forEach(function (item))//только элементы массива
// arr.forEach(function (item, i))//номер каждого элемента 
arr.forEach(function (item, i, mass) { //mass изменили название массива
	console.log(i + ': ' + item + " (массив: " + mass + ")");
});
// 0: first (массив: first,2,3,four,5)
// 1: 2 (массив: first,2,3,four,5)
// 2: 3 (массив: first,2,3,four,5)
// 3: four (массив: first,2,3,four,5)
// 4: 5 (массив: first,2,3,four,5)

let mass = [1, 3, 4, 6, 7]; //перебор массива по ключу
for (let key in mass) {
	console.log(key);
}
// 0
// 1
// 2
// 3
// 4
let mass = [1, 3, 4, 6, 7]; //перебор массива по значению
for (let key of mass) {
	console.log(key);
	// }
	// 1
	// 3
	// 4
	// 6
	// 7

	let ans = prompt('', ''),
		arr = [];
	arr = ans.split(',');
	console.log(arr);
	// если в модальное окно пользователь введет данные через запятую то они запишутся как массив 
	// если же нет то данные сохраняться как массив из одного элемента

	let arr = ['awe', 'zz', 'sss', 'ppp'], //метод берет каждый элемент массива и склеивает его 
		i = arr.join();//тут будет строка через запятую без пробела
	// i = arr.join(", "); //добавляем разделитель между элементами массива
	console.log(arr);//[ 'awe', 'zz', 'sss', 'ppp' ] 
	console.log(i);//awe, zz, sss, ppp
	console.log(i);//awe,zz,sss,ppp

	let arr = ['awe', 'zz', 'sss', 'ppp'],
		// это метод сортирует все как строки
		// метод sort по алфавиту или числа по порядку 
		// следует им пользоваться аккуратно так как может привести к ошибкам в данных
		i = arr.sort();
	console.log(arr);//[ 'awe', 'ppp', 'sss', 'zz' ]
	console.log(i);//[ 'awe', 'ppp', 'sss', 'zz' ]

	let arr = [1, 15, 4],
		i = arr.sort();
	console.log(arr);//[ 1, 15, 4 ] сортирует по первому значению в элементе


	let arr = [1, 15, 4],//сортировка массива чисел по значению
		i = arr.sort(compareNum);
	function compareNum(a, b) {
		return a - b;
	}
	console.log(arr);//[ 1, 4, 15 ]
