//Методы и свойства строк и чисел
//Методы это вспомогательные функции
//Свойства это вспомогательные значения 

let str = 'test';
console.log(str.length);//4 длинна строки
console.log(str[2]);//'s'
console.log(str.toUpperCase());//TEST верхний регист 
console.log(str.toLocaleLowerCase());//нижний регистр 
let fruit = 'Some fruit';
//поиск подстроки
console.log(fruit.indexOf('fruit'));//5 искомый элемент начинается с 5й позиции строки
console.log(fruit.indexOf('q'));//-1 искомый элемент не найден 
//вырезание определенного элемента
let logg = 'hello world';
console.log(logg.slice(6, 10));//worl
console.log(logg.slice(-5, -1));//world
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));//world сколько символов надо вырезать 

let twelve = '12.2';
console.log(Math.round(twelve));//12 округление
let twelve = '12.2px';
console.log(parseInt(twelve));//12
let twelve = '12.2px';
console.log(parseFloat(twelve));//12.2