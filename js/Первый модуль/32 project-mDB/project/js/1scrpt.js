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

const adv = document.querySelectorAll('.promo__adv img'),
	poster = document.querySelector('.promo__bg'),
	genre = poster.querySelector('.promo__genre'),
	movieList = document.querySelector('.promo__interactive-list'),
	addForm = document.querySelector('form.add'),
	addInput = addForm.querySelector('.adding__input'),
	checkbox = addForm.querySelector('[type="checkbox"]');

//удаление рекламных картинок
adv.forEach(item => { //стрелочная функция
	item.remove();
});

//тоже самое действие удаление рекламных картинок только с помощью обычной функции
// adv.forEach(function (item) { //обычная функция
// 	item.remove();
// });

//замена жанра фильма на постерной картинке на странице
genre.textContent = 'драма';

//замена постерной картинки на странице
poster.style.backgroundImage = 'url("img/bg.jpg")';

//изменение списка фильмов
//для начала очищаем список фильмов
movieList.innerHTML = "";
//затем сортировка списка фильмов
movieDB.movies.sort();

//формирование верстки списка и размещение нового списка на страницу
movieDB.movies.forEach((film, i) => {
	movieList.innerHTML += `
	<li class="promo__interactive-item">${i + 1} ${film}
		<div class="delete"></div>
	</li>
	`;
});



