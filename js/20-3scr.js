'use strict';
/*Дописать нашу программу по видео.

1) Переписать наш цикл for еще двумя способами и закомментировать их (еще 2 вида циклов, тренируемся)

2) Проверить, чтобы все работало и не было ошибок в консоли

3) Добавить папку со вторым уроком в свой репозиторий на GitHub

Вопросы к этому заданию
Сколько видов циклов существует в JS?*/

let money = +prompt("Ваш бюджет на месяц?", ""),
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
		b = prompt("Во сколько обойдется?", "");

	if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

		console.log("done");

		appData.expenses[a] = b;
	} else {
		console.log("bad result");
		i--;
	}

};

appData.moneyPerDay = appData.budget / 30;

alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");

if (appData.moneyPerDay < 100) {
	console.log("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
	console.log("Это высокий уровень достатка!");
} else {
	console.log("Произошла ошибка");
}

for (let i = 0; i < 2; i++) {
	let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
		b = prompt('“Во сколько обойдется?”', '');
	if (typeof (a) === 'string' && typeof (a) != null && typeof (b) === 'string' && typeof (b) != null
		&& a != '' && b != '' && a.length < 50) {
		console.log('done');
		appData.expenses[a] = b;
	} else {
		console.log('bad result');
		i--;
	}
};

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
	console.log('МИнимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
	console.log('Высокий уровень достатка');
} else {
	console.log('Ошибка');
}

// Используем цикл WHILE

let i = 0;
while (i < 2) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
		b = prompt("Во сколько обойдется?", "");

	if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

		console.log("done");

		appData.expenses[a] = b;
	} else {
		console.log("bad result");
		i--;
	}
	i++;
}

// Используем цикл DO...WHILE

let i = 0;
do {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
		b = prompt("Во сколько обойдется?", "");

	if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

		console.log("done");

		appData.expenses[a] = b;
	} else {
		console.log("bad result");
		i--;
	}

	i++;
}
while (i < 2);