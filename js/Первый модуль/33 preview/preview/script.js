const btns = document.querySelector('button');
overlay = document.querySelector('.overlay');



// btn.onclick = function () {
// 	alert('Click');
// };
// btn.onclick = function () {
// 	alert('Second Click');
// };

// btn.addEventListener('click', () => {
// 	alert('Click');
// });

// btn.addEventListener('click', () => {
// 	alert('Second click');
// });
let i = 0;
const deleteElement = (e) => {
	console.log(e.currentTarget);//Всплытие событий 
	console.log(e.type);
	// i++;
	// if (i == 1) {
	// 	btn.removeEventListener('click', deleteElement); //удаление обработчика
	// }
	// e.target.remove();
};

btns.forEach(btn => {
	btn.addEventListener('click', deleteElement, { once: true });
});

// btn.addEventListener('click', deleteElement); //назначение обработчика
// overlay.addEventListener('click', deleteElement); //назначение обработчика

// btn.addEventListener('click', (event) => {
// 	console.log(event.target);
// 	event.target.remove();
// 	// console.log('Hover');
// });

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
// 	event.preventDefault();
// 	console.log(event.target);
// });
