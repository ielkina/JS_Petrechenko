//событие на мобильных устройствах
//событий на мобильных устройства существует 6
//событие на мобильных устройствах начинается со слова touch
//touchstart //событие срабатывает при касании элемента
//touchmove //событие срабатывает при движении элемента
//touchend //как только палец оторвался от элемента событие выполнилось
//touchend //при ведение элемента по экрану и наскакивает на это событие
//touchleave //палец не оторвался от экрана а продолжил движение и вышел за границы экрана
//touchcancel //возникает когда кочка соприкосновения больше не регистрируется на поверхности

//вешаем обработчик события который загружает java script уже тогда когда были загружены
//html дом (дерево) элементы
window.addEventListener('DOMContentLoaded', () => {
	const box = document.querySelector('.box');
	box.addEventListener('touchstart', (event) => {
		event.preventDefault();
		console.log('Start');
		console.log(event.targetTouches);
	});
	box.addEventListener('touchmove', (event) => {
		event.preventDefault();
		console.log(event.targetTouches[0].pageX);
	});
	// box.addEventListener('touchend', (event) => {
	// 	event.preventDefault();
	// 	console.log('End');
	// });

});

//touches  //свойство выдает взаимодействие  пальцев на мониторе
//targetTouches  //свойство выдает взаимодействие всех пальцев на мониторе
//changedTouches //список пальцев участвующих в данном событии и который был убран

