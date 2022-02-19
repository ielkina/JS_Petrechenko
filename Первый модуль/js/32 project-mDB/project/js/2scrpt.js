'use strict';

window.addEventListener('DOMContentLoaded', () => {
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

	addForm.addEventListener('submit', (event) => {
		event.preventDefault();

		//проверка на содержимое введенное пользователем в инпуд
		//что бы во втором условии переменная newFilm была видна и не говорила об ошибке
		//объявляем переменной let а не const
		let newFilm = addInput.value;
		//проверка на заполнение чекбокса(галочка)
		const favorite = checkbox.checked;
		//создание условия отмены заполнения пустым списком
		if (newFilm) {
			//создание условия на проверку количество символов в строке
			if (newFilm.length > 21) {
				//с помощью метода substring вырезаем лишние буквы или значения
				//интерполяция
				newFilm = `${newFilm.substring(0, 22)}...`; //let newFilm
			}
			//добавление условия на проверку любимых фильмов
			if (favorite) {
				console.log("Добавляем любимый фильм");
			}
			//добавление нового фильма в список 
			movieDB.movies.push(newFilm);
			//сортировка новых и старых фильмов по алфавиту c помощью функции
			sortArr(movieDB.movies);

			//создание нового списка фильмов внесенных пользователем
			createMovieList(movieDB.movies, movieList);
		}
		//очищение импут что б убрать введенные данные 
		event.target.reset();

	});

	//создание функции на удаление рекламы
	const deleteAdv = (arr) => {
		//удаление рекламных картинок
		arr.forEach(item => { //стрелочная функция
			item.remove();
		});
		//тоже самое действие удаление рекламных картинок только с помощью обычной функции
		// adv.forEach(function (item) { //обычная функция
		// 	item.remove();
		// });
	};

	//создание функции на изменение на страницы
	const makeChanges = () => {
		//замена жанра фильма на постерной картинке на странице
		genre.textContent = 'драма';
		//замена постерной картинки на странице
		poster.style.backgroundImage = 'url("img/bg.jpg")';
	};

	//создание функции на сортировку массива
	const sortArr = (arr) => {
		arr.sort();
	};

	//изменение списка фильмов
	//для начала очищаем список фильмов
	//затем сортировка списка фильмов
	// movieDB.movies.sort();

	//создание независимой функции на формирование списка любимых фильмов старых и введенных
	function createMovieList(films, parent) {
		parent.innerHTML = "";
		//вызов функции на сортировку массива
		sortArr(movieDB.movies); //в фигурные скобки передаем константу которая будет сортироваться
		//формирование верстки списка и размещение нового списка на страницу
		films.forEach((film, i) => {
			parent.innerHTML += `
		<li class="promo__interactive-item">${i + 1} ${film}
			<div class="delete"></div>
		</li>
		`;
		});
		//удаление фильма из списка при нажатии на корзину
		//создание обработчика
		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);
				//изменение нумерации при удалении элемента из списка 
				createMovieList(films, parent);
			});
		});
	}

	//вызов функции createMovieList
	createMovieList(movieDB.movies, movieList);
	//вызов функции на удаление рекламы
	deleteAdv(adv);//в скобки передаем константу которая будет удаляться

	//вызов функции изменений
	makeChanges();

});



