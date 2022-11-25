//  1.
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');
//  2.
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"');
//  3.
console.log(typeof('10') === 10);
console.log(Number('10') === 10);
//  4.
console.log(parseFloat('9.8') === 10);
console.log(Math.round(parseFloat('9.8')) === 10);
//  5.
let palabra1 = 'Python';
let palabra2 = 'Jargon';
console.log(palabra1.search(/on/gi) === palabra2.search(/on/gi));
//  6.
let frase1 = 'I hope this course is not full of jargon.';
console.log(frase1.match(/jargon/gi));
//  7.
console.log(Math.floor(Math.random() * 101));
//  8.
console.log(Math.floor(Math.random()*(100 - 50 + 1) + 50));
//  9.
console.log(Math.floor(Math.random() * 258));
//  10.
let palabra3 = 'JavaScript'
console.log(palabra3[Math.floor(Math.random()*(palabra3.length))]);
//  11.
console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");
//  12.
let frase2 = 'No puedes terminar una oración con porque porque porque es una conjunción';
console.log(frase2.substring(35, 55));