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
//  5.
function f (x){
    y = 2*x -2;
    return y;
}
let interseccionX = 2/2;
let pendiente1 = (f(1) - f(0))/(1 - 0);
console.log(`La interseccion en X es: ${interseccionX}`);
console.log(`La interseccion en y es: ${f(0)}`);
console.log(`La pendiente es: ${pendiente1}`);
//  6.
let pendiente2 = (10-2)/(6-2);
console.log(`La pendiente entre el punto (2,2) y el punto (6,10) es: ${pendiente2}`);
//  7.
console.log(`La pendiente 1 es: ${pendiente1}, y la pendiente 2 es: ${pendiente2}`);
//  8.
function f (x){
    return x**2 + 6*x +9;
};
console.log(f(-3));
//  9.
let horas = prompt('Ingrese horas');
let tarifaHora = prompt('Tarifa por hora?');
alert(`Su ganancia semanal es de: ${horas * tarifaHora}`);
//  10.
let suNombre = prompt('Su primer nombre es?');
alert(`Su nombre es ${suNombre.length > 7 ? 'Largo': 'Corto'}`);
//  11.
let firstName = prompt('Cual es su primer nombre?');
let lastName = prompt('Cual es su primer apellido?');
alert(`Tu primer nombre, ${firstName}, es ${firstName.length > lastName.length ? 'mas largo' : 'mas pequeño'} que tu apellido, ${lastName}.`);
//  12.
let myAge = 250;
let yourAge = 25;
console.log(`${myAge > yourAge ? `Soy ${myAge - yourAge} años mayor que tú.`:`Soy ${yourAge - myAge} años menor que tú.`}`);
//  13.
let now = new Date();
let anioNacimiento = prompt('Introduzca el año de nacimiento:');
let edad = now.getFullYear() - anioNacimiento;
alert(`Tienes ${edad}, ${edad >= 18 ? `Tienes la edad suficiente para conducir.` : `Podrás conducir después de ${18 - edad} años.`}`);
//  14.
let aniosDeVida = prompt('Ingrese el número de años de vida:');
alert(`Viviste ${aniosDeVida*365*24*60*60} segundos.`);
//  15.
const YYYY = now.getFullYear();
const MM = now.getMonth() +1;
const DD = now.getDate();
const HH = now.getHours();
const mm = now.getMinutes();
alert(`YYYY-MM-DD HH:mm\n${YYYY}-${MM}-${DD} ${HH}:${mm}`);
alert(`DD-MM-YYYY HH:mm\n${DD}-${MM}-${YYYY} ${HH}:${mm}`);
alert(`DD/MM/YYYY HH:mm\n${DD}/${MM}/${YYYY} ${HH}:${mm}`);