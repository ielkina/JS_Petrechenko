'use strict';
/*Подготавливаем проект к дальнейшим урокам
Задание 1

2) В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:
 Первая будет спрашивать "Ваш бюджет на месяц?"
 Вторая "Введите дату в формате YYYY-MM-DD"

3) Создать объект appData, который будет содержать такие данные:

·      бюджет (передаем сюда переменную из п.2)

·      данные времени - timeData (передаем сюда переменную из п.2)

·      объект с обязательными расходами - expenses (смотри пункт 4)

·      объект с необязательными расходами - optionalExpenses (оставляем пока пустым)

·      массив данных с доп. доходом - income (оставляем пока пустым)

·      свойство savings (выставляем его как false)

4) Задать пользователю по 2 раза вопросы:

	 “Введите обязательную статью расходов в этом месяце”

	 “Во сколько обойдется?”

	 Записать ответы в объект expenses в формате: 

	 expenses: {
	 “ответ на первый вопрос” : “ответ на второй вопрос”
	 }
5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)

6) Проверить, чтобы все работало без ошибок в консоли

7) Создать свой репозиторий на GitHub и поместить туда папку с первым заданием

Вопросы к этому заданию

Сколько типов данных существует в JS?

Как вывести информацию в консоль?

Какая функция операторов || и &&?*/
/*Задание 2
Задачи на понимание основ JS (с реальных собеседований)

Ответьте на вопросы. Если возникают затруднения - воспользуйтесь выводом в консоль (console.log())

Вопросы к этому заданию
Какое будет выведено значение: let x = 5; alert( x++ ); ?

Чему равно такое выражение: [ ] + false - null + true ?

Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

Чему равна сумма [ ] + 1 + 2?

Что выведет этот код: alert( "1"[0] )?

Чему равно 2 && 1 && null && 0 && undefined ?

Есть ли разница между выражениями? !!( a && b ) и (a && b)?

Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

Что выведет этот код: alert( +"Infinity" ); ?

Верно ли сравнение: "ёжик" > "яблоко"?

Чему равно 0 || "" || 2 || undefined || true || falsе ?*/

/*Задание 3

Дописать нашу программу по видео.

1) Переписать наш цикл for еще двумя способами и закомментировать их (еще 2 вида циклов, тренируемся)

2) Проверить, чтобы все работало и не было ошибок в консоли

3) Добавить папку со вторым уроком в свой репозиторий на GitHub

Вопросы к этому заданию
Сколько видов циклов существует в JS?*/

let money = +prompt('Ваш бюджет на месяц?', "");
let time = +prompt('Введите дату в формате ГГГГ.ММ.ДД:', "");

let appData = {
	budget: money,
	time: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};

// let a = prompt('Введите обязательную статью расходов в этом месяце', '')
// let b = prompt('“Во сколько обойдется?”', '');
// let c = prompt('Введите обязательную статью расходов в этом месяце', '')
// let d = prompt('“Во сколько обойдется?”', '');

// appData.expenses[a] = b;
// appData.expenses[c] = d;


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

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);