/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ла-ла лэнд",
		"Одержимость",
		"Скотт Пилигрим против..."
	]
};
const adv = document.querySelectorAll('.promo__adv');
const poster = document.querySelector('.promo__bg'),
	genre = poster.querySelector('.promo__genre');
const movieList = document.querySelector('.promo__interactive-list');

//1
//1 способ
adv.forEach(item => { //удаление рекламных блоков со страницы
	item.remove();
});
//2 способ
// adv.forEach(function (item) {
// 	item.remove();
// });

//2
genre.textContent = 'драма';//изменение жанра фильма на странице

//3
poster.style.backgroundImage = 'url("img/bg.jpg")';//изменение фонового рисунка на странице

//4
movieList.innerHTML = "";//удаление со страницы списка фильмов
movieDB.movies.sort();//сортировка списка в js документе

// console.log(poster.innerHTML);

movieDB.movies.forEach((film, i) => {
	movieList.innerHTML += `
		<li class="promo__interactive-item">${i + 1} ${film}
			<div class="delete"></div>
		</li>
	`;
});

// a = a +1; //2 одинаковые команды с разным синтаксисом
// a +=1; //упрощенный способ записи




