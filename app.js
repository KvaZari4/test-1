
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

// if and else

const money = 10;

if (money > 50) {
  console.log('Можно купить наш продукт');
} else if (money > 5) {
  console.log('Можно купить мини продукт');
} else {
  console.log('Не хватает баланса');
}

console.log('Итог');

//  Задача
const deposit = 12000;
const rate = 0.07;
const depositLength = 24;
const houseCost = 13500;

const res = deposit * (1 + rate / 12) ** 24;
console.log(res);
if (res > houseCost) {
  console.log(`Можем купить. Остаток ${res - houseCost}`);
} else {
  console.log(`Не хватает денег для покупки ${res - houseCost}`);
}



// switch
const role = 'manager';

/*if (role === 'manager') {
  console.log('Мененджер');
} else if (role === 'admin') {
  console.log('админ');
} else if (role === 'seo') {
  console.log('сео');
} else {
  console.log('Мы тебя незнаем');
}*/

switch (role) {
  case 'manager': // role === 'manager'
  console.log('Мененджер');
  break;
  case 'admin': // role === 'admin'
  console.log('админ');
  break;
  case 'seo': // role === 'seo'
  console.log('сео');
  break;
  default:
    console.log('Мы тебя незнаем');
}

switch (role) {
  case 'manager':
  case 'admin':
  console.log('Не руководитель');
  break;
  case 'seo':
  console.log('Руководитель');
  break;
  default:
    console.log('Мы тебя незнаем');
}

// Тернарные операторы
/*
const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

let message;
if (budget > bmwX3Price) {
  message = 'BMV';
} else if (budget > fordFocusPrice) {
  message = 'Ford';
} else {
  message = 'Велосипед';
}

console.log(`Я хочу купить ${message}`);
*/


const bmwX3Price = 100000;
const budget = 20000;

let message;
if (budget > bmwX3Price) {
message = 'BMV';
} else {
  message = 'Велосипед';
}

console.log(`Я хочу купить ${message}`);

const str = budget > bmwX3Price ? 'Хочу купить BMW' : 'Хочу купить велосипед';
console.log(str);

// Упражнение
/*
const res2 = prompt('Сколько будет 7 + или -15?');
switch (true) {
  case res2 === 'Я не робот':
  case Number(res2) === 22:
  case Number(res2) === -8:
    console.log('Успех');
    break;
  default:
    console.log('Вы робот');
}
*/

// Булевая логика
// Логические операторы
const isAdmin = true;
const canWrite = true;

console.log(`Системный файл ${isAdmin && canWrite}`);
console.log(`Обычный файл ${isAdmin || canWrite}`);
console.log(`Инвертируем права админа ${!isAdmin}`);

const isEdited = true;
const isSuperAdmin = true;

console.log(`Системный файл с редактированием ${
  isAdmin && canWrite && (!isEdited || isSuperAdmin)
}`);

// Операторы с другими типами
let a = 'Marina';
const userName = a || 'Петя';
console.log(userName);

const isAdmin2 = true;
const fileName2 = isAdmin2 && 'file.mp4';
console.log(fileName2);


// Оператор нулевого слияния
