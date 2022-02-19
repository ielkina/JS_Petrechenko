/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// Задания на урок:

// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту 

'use strict';
// событие которое заставляет фаил js выполняться после того как на странице 
// html загрузиться дом структура html документа
// иначе js начнется выполняться раньше и не сможет найти нужные ему элементы 
// соответственно код выполниться с ошибкой или не правильно 
// document.addEventListener('DOMContentLoader', () => { //<- вот это событие
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
const poster = document.querySelector('.promo__bg');
const genre = poster.querySelector('.promo__genre');
const movieList = document.querySelector('.promo__interactive-list');
const addForm = document.querySelector('form.add');
const addInput = addForm.querySelector('.adding__input');
const checkbox = addForm.querySelector('[type="checkbox"]');

addForm.addEventListener('submit', () => {
	event.preventDefault();
	const newFilm = addInput.value;
	const favorite = checkbox.checkbox.checked;
	//булийное значение true когда отмечена false когда не отмечена

	if (newFilm) {
		movieDB.movies.push(newFilm);
	sortArr(movieDB.movies);

	createMovieList(movieDB.movies, movieList);
	}

	

	event.target.reset();

});

//1
//1 способ
// adv.forEach(item => { //удаление рекламных блоков со страницы
// 	item.remove();
// });
//2 способ
// adv.forEach(function (item) {
// 	item.remove();
// });
const deleteAdv = (arr) => {
	arr.forEach(item => { //удаление рекламных блоков со страницы
		item.remove();
	});
};


//2
// genre.textContent = 'драма';//изменение жанра фильма на странице

// //3
// poster.style.backgroundImage = 'url("img/bg.jpg")';//изменение фонового рисунка на странице

const makeChanges = () => {
	genre.textContent = 'драма';
	poster.style.backgroundImage = 'url("img/bg.jpg")';
};

const sortArr = (arr) => {
	arr.sort();
};


//4
// movieList.innerHTML = "";//удаление со страницы списка фильмов
// movieDB.movies.sort();//сортировка списка в js документе

// console.log(poster.innerHTML);
// a = a +1; //2 одинаковые команды с разным синтаксисом
// a +=1; //упрощенный способ записи
// });

function createMovieList(films, parent) {
	parent.innerHTML = "";
	films.movies.forEach((film, i) => {
		parent.innerHTML += `
				<li class="promo__interactive-item">${i + 1} ${film}
					<div class="delete"></div>
				</li>
			`;
	});
}

makeChanges();
deleteAdv(adv);
sortArr(movieDB.movies);
createMovieList(movieDB.movies, movieList);






