//  1.
const arrayVacio = [];
console.log(arrayVacio);
//  2.
let array5Elementos = [1,2,3,4,5];
console.log(array5Elementos);
//  3.
console.log(array5Elementos.length);
//  4.
console.log(`Primer elemento: ${array5Elementos[0]},
Elemento medio: ${array5Elementos[Math.round(array5Elementos.length / 2) - 1]},
Ultimo elemento: ${array5Elementos[array5Elementos.length - 1]}`);
//  5.
let mixedDataTypes = [1,'Uno', 1.001, true,['Array'],null];
console.log(mixedDataTypes);
//  6.
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IMB', 'Oracle', 'Amazon'];
//  7.
console.log(itCompanies);
//  8.
console.log(`El numero de empresas en el array es: ${itCompanies.length}`);
//  9.
console.log(`La primera empresa es: ${itCompanies[0]},
La empresa intermedia es: ${itCompanies[Math.round(itCompanies.length / 2) - 1]},
La ultima empresa es: ${itCompanies[itCompanies.length - 1]}`);