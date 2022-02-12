'use strict';

const name = 'Olaf';
console.log(name());//TypeError

const list = [1 + 2, 1 * 2, 1 / 2];
console.log(list);//[3,2,0.5]

function getItems (fruitList, ...args, favoriteFruit) {
	return [...fruitList, ...args, favoriteFruit]
}
getItems(['banana', 'apple'], 'pear', 'orange'); //SyntaxError
console.log(getItems);