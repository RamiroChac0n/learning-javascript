//  1.
let firstName = 'Ramiro';
let lastName = 'Chacon';
let country = 'Guatemala';
let city = 'Zacapa';
let age = 21;
let isMarried = false;
let year = 2022;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
//  2.
console.log(typeof '10' == 10);
//  3.
console.log(parseInt('9.8') == 10);
//  4.
console.log(0 < 1);
console.log(age == 21);
console.log(firstName == 'Ramiro');
console.log(0 > 1);
console.log(lastName == 'Ortiz');
console.log(year == 2025);
//  5.
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
let palabra0 = 'Python';
let palabra1 = 'Jargon';
let palabra2 = 'Dragon';
console.log(palabra0.length != palabra1.length);
//  6.
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!((palabra0.includes('on')) && (palabra2.includes('on'))));
//  7.
let now = new Date();
console.log(`¿Qué año es hoy? => ${now.getFullYear()}`);
console.log(`¿Qué mes es hoy con un número? => ${now.getMonth() + 1}`);
console.log(`¿Qué fecha es hoy? => ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`);
console.log(`¿Qué día es hoy con un número? => ${now.getDay()}`);
console.log(`¿Cuál es la hora actual? => ${now.getHours()}`);
console.log(`¿Cuántos minutos hay actualmente? => ${now.getMinutes()}`);
console.log(`Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora. => ${now.getTime()}`);