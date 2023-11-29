// string - строка

// '', "", `` -> 3 turu bar

// let message = 'My';
// let str = `${message} Hello  World`;
// console.log(str);

// ${} -> интерпаляция

// let str = "Hi Cartoon"
// console.log(str.length);
// console.log(str[1] + str[4]);
// console.log(str.length - 11);
// console.log(str[12] + 123); // undefined
// console.log(undefined + null); // NaN

// length -> создун узундугун(санын)
// текшерип берет

// typeof

// console.log(typeof 132);
// console.log(typeof "asdsa");
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof Symbol);
// console.log(typeof length);

// let str = "HelloString";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.length);
// console.log(str.trim().length);

// slice() -> 2 параметр кабыл алат
// console.log(str.slice(1,6));

// trim() - бул башындагы жана аягындагы
// пробелдерди жоготуп салат

// Строки:
// 1. Вам дана переменная str, присвойте ей значение 'Привет, Мир!'.
// Выведите значение этой переменной в консоль.
// let str = 'Привет, Мир!'
// console.log(str);

// 2. Вам даны переменные str1='Привет, ' и str2='Мир!'.
//  С помощью этих переменных и операции сложения строк выведите в консоль фразу 'Привет, Мир!'.
// let str1='Привет, ' , str2='Мир!'
// console.log(str1 + str2);

// 3. Вам дана переменная name,
// присвойте ей ваше имя. Выведите в консоль фразу 'Привет, *Имя*!'.
// let name = "Web"
// console.log(`Привет ${name}`) ;

// 4. Вам дана переменная age ,
// присвойте ей ваш возраст. Выведите в консоль 'Мне *Возраст* лет!'.
// let age = 20
// console.log(`Мне ${age} лет!`);

// 5. Вам даны четыре переменные.
// Первая - для хранения количества дней. Присвойте ей значение "365".
// Вторая - для хранения названия нашей планеты "Земля".
// Третья - для хранения примерного количества жителей нашей планеты.
//  Присвойте ей значение "7 млрд.".
// Четвертая - для хранения слова "Солнце".
// Далее, используя текст и переменные, нужно вывести в консоль такой абзац:
// "В нашем году 365 дней. Днём у нас светит Солнце.
//  Население планеты Земля составляет примерно 7 млрд. человек."

// let days = 365, earth = "Земля", quantity = "7 млрд.", sun = "Солнце"
// console.log(`В нашем году ${days} дней. Днём у нас светит ${sun}. Население планеты ${earth} составляет примерно ${quantity} человек.`);

// Typeof:
// 1. Вам дана переменная a=50.
// Выведите в консоль тип значения этой переменной.
// let a = 50
// console.log(typeof a);
// 2. Вам даны переменные a=10, b=35.
// Создайте переменную result, и сделайте так,
//  чтобы в консоли значение переменной result было string.
// 3. Вам дана переменная a=10,
// выведите в консоль тип этой переменной - string.
// let textHi = 'Hello'

// let s = 50
// console.log(s);

// operators

// =
// ==
// ===

// console.log(num);

// let num = "Front"
// num = "Backend"

// const num = "re"
// num = "23"
// console.log(num);

// let home = "Hello World"
// console.log(home.slice(0, 10))
// console.log(home.slice(0, 10))
// console.log(home.slice(2))

// console.log(home.slice(0,9));
// console.log(home.substring(0,9));

// console.log(home.substr());

// let str2 = ["32", "as"]
// console.log(str2.join(["asd"]))

// && -> и -> жана // false
// || -> или -> же // true

// false -> 0, "", null, undefined, false
// true -> 1.....1000, -12, "DDFGHJ", " "

// console.log(true && undefined);
// console.log(0 && undefined);
// console.log(null && "undefined");

// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true || false); // false
// console.log(false || true); // true
// console.log(true || true); // false

// console.log(true && false || true && false);
// console.log(true && false || true && true);

// || -> true

// console.log("" || undefined || null || 0 || false);

// && -> false

// console.log(" " && "ew" && "null" && 0 && true);

// console.log("" || " " && 2 && true);

// Home Work

// 1. Вам дана переменная str = 'Nevis ITDB TECH'.
//  Выведите в консоль длину первого слова.
//
// let str ='Nevis ITDB TECH'
// console.log(str.length)

// 2. Вам дана переменная str = 'Максимально УЖАСНО'.
// Выведите в консоль слово УЖАСНО, только нижним регистром.

// let str = "Максимально УЖАСНО";
// let result = str.toLowerCase();
// console.log(result);

// 3. Вам дана переменная str ='Максимально УЖАСНО''.
// Выведите в консоль слово максимально, только верхним регистром.
// let str ='Максимально УЖАСНО';
// let result = str.toUpperCase();
// console.log(result);

// 4. Вам дана переменная str = 'Максимально Ужасно'.
// Выведите в консоль каждый символ этой строки, используя метод split.
// Пример : [ 'C','o','d','i','n','g',' ','i','s',' ','t','h','e',' ', 'L','O','V','E',' ',
// 'o','f',' ','m','y',' ','L','I','F','E','!' ]

//  let str = 'Максимально Ужасно'
//  let result = str.split()
//  console.log(result);

// 5. Вам дана переменная str = 'Максимально Ужасно, переделывай'.
// Выведите в консоль все
// слова этой строки, используя метод split. Пример:
// [ 'Максимально' 'ужасно', 'переделывай'. ]

// const str =[ 'Максимально Ужасно, переделывай'];
// let reulst = str.join(3).split()
// console.log(reulst);

// 6. Вам дана переменная
//   str = 'Максимально Ужасно'. Выведите в консоль 'мально
// Ужасно', используя метод slice.
// let str = 'Максимально Ужасно';
// console.log(str.slice(5));

// 9. Вам дана переменная str = 'Максимально Ужасно'. Выведите
// в консоль индекс слова 'Ужасно'.
//  let  str = 'Максимально Ужасно'
//  console.log(str.slice(11));

// && -> jana - и => false
// || -> или - же => true

// console.log("true" && "" && 123 || "null" && undefined || "true2");  // true
// console.log(false && true || null && " " && undefined || "" && "");  // false

// Условные Операторы

// if
// else

// let result = 0
// let num = 5

// if(num < 2) {
//     result = "hello"
// }else{
//     result = "world"
// }

// console.log(result);

// && , ||

// let num = 18

// if(num >= 26) {
//     console.log("Go");
// }else if (num > 15) {
//     console.log("No");
// }else if(num <= 17) {
//     console.log("Sredni");
// }else{
//     console.log("404");
// }

// let num = 18

// if(num < 20) {
//     console.log("kiruu jok");
// }else if(num > 13) {
//     console.log("kiruu");
// }else{
//     console.log("404");
// }

// let svetofor1 = 1
// let svetofor2 = 2
// let svetofor3 = 3

// if(svetofor1 = 2) {
//     console.log("tokto");
// }else if(svetofor2 === 3) {
//     console.log("go");
// }else {
//     console.log(505);
// }

// let minute = 34

// if(minute  !== 0 || minute <= 14) {
//     console.log("first");
// }else if(minute >= 15 || minute < 31) {
//     console.log("second");
// }else if(minute > 30 || minute < 46) {
//     console.log("third");
// }else if(minute > 45 || minute <= 60) {
//     console.log("fourth");
// }else{
//     console.log("It is a minute");
// }

// 1. Вам дана переменная str = 'Nevis ITDB TECH'.
// Выведите в консоль длину первого слова.

// let str ='Nevis ITDB TECH'
// console.log(str.length)

// 2. Вам дана переменная str = 'Максимально УЖАСНО'.
// Выведите в консоль слово УЖАСНО, только нижним регистром.

// let str= 'Максимально УЖАСНО'
// console.log(str.slice(12).toLowerCase())

// 3. Вам дана переменная str ='Максимально УЖАСНО''.
// Выведите в консоль слово максимально, только верхним регистром.

// let str='Максимально УЖАСНО'
// console.log(str.slice(0,10).toLocaleUpperCase())

// 4. Вам дана переменная str = 'Максимально Ужасно'.
// Выведите в консоль каждый символ этой строки, используя метод split.
// Пример : [ 'C','o','d','i','n','g',' ','i','s',' ','t','h','e',' ', 'L','O','V','E',' ',
// 'o','f',' ','m','y',' ','L','I','F','E','!' ]

// let str='Максимально Ужасно'
// console.log(str.split(''))

// 5. Вам дана переменная str = 'Максимально Ужасно, переделывай'.
// Выведите в консоль все
// слова этой строки, используя метод split. Пример:
// [ 'Максимально' 'ужасно', 'переделывай'. ]

// let str='Максимально Ужасно, переделывай'
// console.log(str.split())

// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально
// Ужасно', используя метод slice.

// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У,
// использую метод charAt.

// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в
// консоль соединенные строки, используя метод concat.

// 9. Вам дана переменная str = 'Максимально Ужасно'. Выведите
// в консоль индекс слова 'Ужасно'.

// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более
// 1 раза", если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"

// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в
// консоль первую букву каждого слова строки в верхний регистр.

// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль
// индекс первого вхождения буквы а.

// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в
// консоль индекс первого последнего буквы о.

// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя
// разными способами (через substr, substring, slice) и выведите в консоль.

//  HOME WORK || else if

// 15. Вам дана переменная str = '17-02-2021'. Преобразуйте эту дату
// в формат '31/12/2025' и выведите в консоль.

// 16. Вам дана переменная str = 'Максимально Ужасно'. Проверьте, есть ли буква "в"
// в данной строке, если да, то выведите "Да", иначе - "нет".

// 17. Вам дана переменная str = 'АаааааА'. Проверьте, если первая
// буква в строке совпадает с
// последней, если да, то выведите в консоль "Совпадает", иначе - "Не совпадает".

// 18. Вам дана переменная str = 'Максимально'. Проверьте, если буква л, встречается в
// первой половине строки, или последней. Если в первой, то выведите в консоль -
// "В первой половине", иначе - "Во второй половине".

// ELSE IF

// 1. Вам дана переменная a. Если переменная a равна 10,
// то выведите 'Верно',
// иначе выведите 'Неверно'.
// let a = 5;
// if (a === 10) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// 2. Вам даны две переменные a=50, b=100. Составьте условие,
// по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
// let a = 100,  b = 3;
//
// if (a > b) {
//   console.log("a больше b");
// } else if (a < b) {
//   console.log("a меньше b");
// } else {
//   console.log("Они равны");
// }

// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.
// let a = -3
// if(a > 0){
//     console.log('positive');
// }else if(a < 0) {
//     console.log("negative" );
// }else{
//     console.log('равно');
// }

// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".
//
// let number = 5;
// if (number % 2 !== 0) {
//   console.log("Четное число");
// } else {
//   console.log("Нечетное число");
// }

// console.log(3 / 32 !== 0);

// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль
// "Четное число", "Нечетное число".
// let a = 10,
//   b = 2;
// if (a % b === 0) {
//   console.log("Четное число");
// } else {
//   console.log("Нечетное число");
// }

// 6. Вам дана переменная s. Составьте условие, по которому в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".
// let s = true
// console.log(typeof s);
// console.log(typeof 44);
// console.log(typeof"ds");
// console.log(typeof null );
// console.log(typeof undefined );

// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.
// let a = 11
// if(a > 1 && a < 9 ){
//     console.log(true);
// }else{
//     console.log(false);
// }

// 8. Вам дана переменная а. Если переменная a равна
// трем или равна семи, то прибавьте к ней 7, иначе поделите
// ее на 10. Выведите новое значение переменной в консоль.
// let a = 14
// if(a === 3 || a === 7) {
//     console.log(a + 7);
// } else{
//     console.log(a * 10);
// }

// 9. Вам даны переменные а , b. Если переменная a равна
// или меньше 0, а переменная b больше или равна 5, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// let a = 0
// let b = 3
// if(a <= 0 || b >= 3) {
//     console.log(a + b);
// }else{
//     console.log(a - b);
// }

// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// let a = 6
// let b = 8
// if(a > 4 && a < 10 || b >= 7 && b <= 17){
//     console.log('Верно');
// }else{
//     console.log('Неверно');
// }

// ternarny oparator

/////////////////////////////////////////////////////////////////////

// function

// function sum () {
//     return "Hello World"
// }
// console.log(sum());

// function num (a, b){
//     return a + b
// }
// console.log(num(10,20));
// console.log(num("Hello", "World"));

// function sqrt(n) {
//     return Math.sqrt(n)
// }

// console.log(sqrt(25));
// console.log(sqrt(30));
// console.log(sqrt(100));

// function greeting(name) {
//     return `Hello ${name}, how are you?`
// }
// console.log(greeting("Jony"));

// function str(n) {
//   if ((n > 10) & (n < 30) || (n >= 40 && n < 60)) {
//     console.log(true);
//   }
//   return false
// }

// console.log(str(50));

// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно',
// иначе выведите 'Неверно'.

// function task1 (a, b) {
//     if(a === 20) {
//         return 'a больше b';
//     }else{
//         return 'a меньше b';
//     }
// }
// console.log(task1(50,100));

// 2. Вам даны две переменные a=50, b=100. Составьте условие,
// по которому в консоль будет выводиться 'a больше b', 'a меньше b'.

// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.
//
// function task3(a) {
//     if (a > 0) {
//         return "positive"
//     } else if (a < 0) {
//         return  "negative"
//     }else  {
//         return "равно"
//     }
// }
// console.log(task3(-2));

// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".
// function taks4 (number) {
//     if(number % 2) {
//         return "Нечетное число"
//     } else {
//         return " Четное число"
//     }
// }
// console.log(taks4(45));

// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль
// "Четное число", "Нечетное число".
// function task5(a,b){
//     if(a % b ){
//         return "Нечетное число"
//     } else {
//         return "Четное число"
//     }
// }
// console.log(task5(10,2));

// 6. Вам дана переменная s. Составьте условие, по которому в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".
// function task6(s) {
//     return typeof s
// }
// console.log(task6(false));
// console.log(task6(23));
// console.log(task6(""));

// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.
// function task7 (a ) {
//     if(a > 1 && a < 9) {
//        return 'Верно'
//     }else{
//         return 'Неверно'
//     }
// }
// console.log(task7(4));

// 8. Вам дана переменная а. Если переменная a равна
// трем или равна семи, то прибавьте к ней 7, иначе поделите
// ее на 10. Выведите новое значение переменной в консоль.
// function task8(a) {
//     if(a === 3 || a === 7){
//         return a + 7
//     }else{
//         return a / 10
//     }
// }
// console.log(task8(30));

// 9. Вам даны переменные а , b. Если переменная a равна
// или меньше 0, а переменная b больше или равна 5, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// function task9(a,b) {
//     if(a >= 0 || b <= 5){
//         return a + b
//     }else {
//         return a - b
//     }
// }
// console.log(task9(-5,3));

// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// function task10(a,b){
//     if(a > 4 && a < 10 || b >= 7 && b < 17) {
//         return "Verno"
//     }else{
//         return "404"
//     }
// }
// console.log(task10(4,5));

// let num = 10
// alert(num)

// function declaration
// function arrow
// function callback

// 14. Вам дана переменная age=*любое двузначное число*.
// Составьте условие, по которому, в консоль будет
// выводиться "Мне  год", "Мне  лет", в зависимости от
// возраста. Наример мне 21 год, мне 20 лет.
// function task14 (age) {
//     if(age !== 11 && age === 1){
//         return `Мне ${age} год`
//     }else if (age > 4 && age < 34 || a >= 5){
//         return `Мне ${age} лет`
//     }else if(a === 2 || a === 3 || a === 4){
//         return `Мне ${age} года`
//     }
// }
// console.log(task14(33));
// console.log(task14(18));
// console.log(task14(7));

// 15. Вам дана переменная time= *любое чило от
// 1 до 59*. Составьте условие, по которому время
// будет делиться на четверти. Пример: time = 12 -
// Первая четверть. Если число больше 60, то в консоли
// будет выдаваться "Неверное число".

// function task15(time) {
//     if(time > 0 && time < 16) {
//         return 'Первая четверть'
//     }else if(time > 15 && time < 30) {
//         return "Second четверть"
//     }else if (time > 31 && time < 46) {
//         return "Third четверть"
//     }else if(time > 45 && time < 60) {
//         return "Fourth четверть"
//     }else {
//         return "Неверное число"
//     }
// }
// console.log(task15(46));
// console.log(task15(25));
// console.log(task15(36));
// console.log(task15(47));
// console.log(task15(90));

// console.log(fn(10));
// function fn (n = null) {
//     return n * 20
// }
// console.log(fn());

// arrow function()
// () => {}

// const func = (n,a) => {
//     return n * a
// }
// console.log(func(1,2));

// function createCounter(init) {
//     let currentValue = init;

//     return {
//         increment: function() {
//             currentValue++;
//             return currentValue;
//         },
//         decrement: function() {
//             currentValue--;
//             return currentValue
//         },
//         reset: function() {
//             currentValue = init;
//             return currentValue;
//         }
//     }
// }
// console.log(createCounter());

// const numbers = [5, 12, 314, 2, 13, 20, 9];

// const sumOfEvens = numbers
//   .filter(number => number % 2 === 0) // Фильтруем четные числа
//   .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Складываем все четные числа

// console.log(`Сумма всех четных чисел: ${sumOfEvens}`);
// const numbers = [3, 13, 54, 15, 335, 39];

// const difference = numbers.reduce((accumulator, currentValue) => {
//     if (currentValue > 10) {
//         return accumulator - currentValue;
//     } else {
//         return accumulator;
//     }
// }, 0);

// console.log(`Разность чисел больше 10: ${difference});

// const people = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 35 },
// ];

// const peopleObject = people.reduce((accumulator, currentValue) => {
//   accumulator[currentValue.name] = currentValue.age;
//   return accumulator;
// }, {});

// console.log(peopleObject);


// const people = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 35 },
//     { name: 'Dave', age: 25 },
//     { name: 'Eve', age: 30 },
//     { name: 'Frank', age: 35 }
// ];

// const groupedByAge = people.reduce((accumulator, currentValue) => {
//     const age = currentValue.age;
//     if (!accumulator[age]) {
//         accumulator[age] = [];
//     }
//     accumulator[age].push(currentValue.name);
//     return accumulator;
// }, {});

// console.log(groupedByAge);


// const orders = [
//     { id: 1, product: 'Телефон', quantity: 2 },
//     { id: 2, product: 'Наушники', quantity: 1 },
//     { id: 1, product: 'Чехол', quantity: 1 },
//     { id: 3, product: 'Зарядка', quantity: 3 }
// ];

// const combinedOrders = orders.reduce((accumulator, currentValue) => {
//     const existingOrder = accumulator.find(order => order.id === currentValue.id);
//     if (existingOrder) {
//         existingOrder.quantity += currentValue.quantity;
//     } else {
//         accumulator.push(currentValue);
//     }
//     return accumulator;
// }, []);

// console.log(combinedOrders);


// let items = ["apple", "banana", "cherry"];

// let result = items.reduce((accumulator, currentValue, index) => {
//     if (index === 0) {
//         return currentValue;
//     } else {
//         return accumulator + ", " + currentValue;
//     }
// }, '');

// console.log(result);