//  1.
desafio = '30 dias de JavaScript';
//  2.
console.log(desafio);
//  3.
console.log(desafio.length);
//  4.
console.log(desafio.toUpperCase());
//  5.
console.log(desafio.toLowerCase());
//  6.
console.log(desafio.substr(0,2));
//  7.
console.log(desafio.substr(3,(desafio.length - 1)));
//  8.
console.log(desafio.includes('Script'));
//  9.
console.log(desafio.split());
//  10.
console.log(desafio.split(' '));
//  11.
let cadena = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(cadena.split(','));
//  12.
console.log(desafio.replace('JavaScript', 'Python'));
//  13.
console.log(desafio.charAt(15));
//  14.
console.log(desafio.charAt(11));
console.log(desafio.charAt(11).charCodeAt());
//  15.
console.log(desafio.indexOf('a'));
//  16.
console.log(desafio.lastIndexOf('a'));
//  17.
let oracion = 'No puedes terminas una oracion con porque porque porque es una conjuncion';
console.log(oracion.indexOf('porque'));
//  18.
console.log(oracion.lastIndexOf('porque'));
//  19.
console.log(oracion.search('porque'));
//  20.
console.log(desafio.trim(' '));
//  21.
console.log(desafio.startsWith('30'));
//  22.
console.log(desafio.endsWith('JavaScript'));
//  23.
console.log(desafio.match(/a/gi));
//  24.
let nuevoDesafio = '';
console.log(nuevoDesafio.concat('30 dias de', ' JavaScript'));
//  25.
console.log(desafio.repeat(2));