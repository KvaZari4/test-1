
/*
let a = 1;
console.log(a);

a = 'test'
console.log(a);
*/

// Базовые арефметические операторы
/*
const width = 10;
const height = 5;
const space = width * height;
console.log(space);
*/

//Строки
/*
const city = 'Николаев';
const street = 'Водопроводная';
console.log(city + ', ' + street + ' ' + 5);
*/

// Операторы присваивния

/*
Ваша часовая ставка 80$ и вы готовы работать не
более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40
часов работы.
Сейчас понедельник.
Вы должны уехать через 11 дней.
Выведете в консоль:
- Boolean переменную успеете ли вы взяться за работу
- Сколько вы за неё попросите?
*/
/*
const timeWork = 5; // Работа 5 часов в день
const setDay = 5; // Работа 5 дней в неделю
const manyHors = 80; // Оплата за час 80$

const timeBay = 40; // Предлагают заказ на 40 часов
const manyOll = manyHors * timeBay;
console.log('Сумма зароботка за всю работу' + ' - ' + manyOll + '$');

const work11 = timeWork * 11;
console.log('Часов работы за 11 дней' + ' - '+ work11 + ' часов');

let yesWork = timeWork <= timeBay;
console.log(yesWork);
*/

const projectName = 'Сайт магазина'
const price = 2000;
const autor = 'Denis Razumniy';

const template = autor + ' заказал ' + projectName + ' по цене ' + price + 'грн';
console.log(template);

const template2 = `${autor} заказал ${projectName} по цене ${price}грн`;
console.log(template2);

const template3 = `${projectName}:
${price}грн`;
console.log(template3);

// Преобразование строку в числа
const age = '18';
console.log(Number(age) + 5);

// Конвертация строк
console.log(String(4) + 5);

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean('S'));
console.log(Boolean(4));

console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
