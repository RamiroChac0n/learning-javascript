//  1.
let base = prompt('Ingrese la base del triangulo');
let altura = prompt('Ingrese la altura del triangulo');
console.log(`El area del triangulo es: ${0.5 * altura * base}`);
//  2.
let lado1 = parseInt(prompt('Ingrese la longitud del lado A'));
let lado2 = parseInt(prompt('Ingrese la longitud del lado B'));
let lado3 = parseInt(prompt('Ingrese la longitud del lado C'));
console.log(`El perimetro del triangulo es: ${lado1 + lado2 + lado3}`);
//  3.
let largo = parseInt(prompt('Ingrese el largo'));
let ancho = parseInt(prompt('Ingrese el ancho'));
console.log(`El area del rectangulo es: ${largo * ancho}, su perimetro es: ${2 * (largo + ancho)}`);
//  4.
const PI = Math.PI;
let radio = parseInt(prompt('Ingrese el radio del circulo'));
console.log(`El area del circulo es: ${PI * radio * radio}, su perimetro es: ${2 * PI * radio}`);