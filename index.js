const result = 5 + 5 + '5';
console.log(typeof(result));

const email = 'kyryloz2000@gmail.com';
console.log(email.includes('@'));
console.log(email.length);

const my = 'My ';
const name = 'name';
const is = ' is ';
const fullName = my + name + is;
console.log(fullName + 'Kyrylo');

const userName = 'Кирило';
const payment = 1350;
console.log(`Дякуємо, ${userName}! До сплати ${payment} гривень.`)