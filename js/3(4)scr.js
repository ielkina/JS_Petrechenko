"use strict";
alert('I love JavaScript!');
// alert(1)//Выведет модальное сообщение с текстом "1"
// [0, 3].push() //ошибка не хватает точки с запятой
/*Консоль в браузере
Вкладка элементы - видны все элементы сайта примененные к ним стили и т.д.
Консоль - ошибки, предупреждения и сообщение от разработчиков и т.д
подсказывает где ошибка в каком файле, строчке и описание.
Источники - все доступные к нашему сайту материалы, приложения.
Сеть = отслеживание каких либо запросов
Производительность
Память и т.д.
В JS есть 2 вида комментариев
//однострочный
и
/*много
строчный*/
// console.log(second);//Cannot access 'second' before initialization другими словами переменной еще не 
// сущ
// console.log(leftBorderWidth);//undefined переменная созданная но пока не имеет никакого значения
// var leftBorderWidth = 1;
// let second = 2;
// const pi = 3.14;
// console.log(leftBorderWidth);//1
// console.log(second);//2
// //////////////////////
// {
// 	let second = 2;
// }
// console.log(second);//second is not defined не видит переменную 
/*объявление переменной 
Если в коде объявлена переменная var то она уже существует до выполнения скрипта и она 
видна везде. 
Переменная let создается только тогда когда код до нее доходит.
Такое понятие называется - Хойстинг(всплытие переменных).
Такое поведение помогает избежать многих ошибок и код ускоряется так как не храниться в памяти а 
всплывает когда это необходимо. let видна только в блоке кода ограниченного фигурными скобками.
const создает переменную которую нельзя поменять.
/*Что такое JS и как его подключить к странице?
HTML Скелет сайта
JS язык программирования 
и отвечает он за работоспособность сайта/программы 
Несколько технических аспектов языка: 
1. Классический JS имеет свои ограничения
Он не умеет работать с файлами на Вашем компьютере
И не умеет работать между вкладками браузера (вкладками нескольких сайтов)
2. JS Это высокоуровневый язык. Все что пишется в JS будет воспринято
браузером как есть.
3. Данный язык был создан не для программистов и он проще в освоении чем другие.
4. Не путать его с языком Java. Java - это отдельный язык и он не связан с JS.

Подключение скриптов!

!Важно. JS скрипт файлы подключаются в самый конец файла перед 
</body>. Делается это что б при загрузки сайта корректно и быстро 
загрузились все детали сайта а уж потом функционал!!! 
JS файлы подключаются к HTML файлам в конце документа в теге:
<body>
<p></p>
<script>
alert(1);
</script>
</body> - просто прописывается в HTML документе, в том случае 
если скрипты незначительные.
<body>
<p></p>
<script src="путь на файл JS(обычно он находиться в отдельной
папке для JS файлов)">
</script>
</body> - подключение внешнего JS файла к HTML документу.
Если атрибут SRC Установлен. содержимое тега script будет игнорироваться!!
В том случае если необходимо подключить внешний скрипт и прописать в теге 
создаются два тега script
<script src=""></script>
<script>
alert (1);
</script>

ЗАДАЧИ

1. Создайте страницу, которая отобразит сообщение «Я JavaScript!»

Решение: 

<!DOCTYPE html>
<html>
<body>

  <script>
    alert( "Я JavaScript!" );
  </script>

</body>
</html>

2. Возьмите решение предыдущей задачи Вызвать alert,
 и измените его. Извлеките содержимое скрипта во внешний файл 
 alert.js, лежащий в той же папке.

 HTML-код:

<!DOCTYPE html>
<html>

<body>
  <script src="alert.js"></script>
</body>

</html>

Для файла alert.js в той же папке:

alert("Я JavaScript!");

*/


