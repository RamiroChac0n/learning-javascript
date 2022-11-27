//  1.
let now = new Date();
let anioNacimiento = prompt('Introduzca el año de nacimiento:');
let edad = now.getFullYear() - anioNacimiento;
alert(`Tienes ${edad}, ${edad >= 18 ? `Tienes la edad suficiente para conducir.` : `Podrás conducir después de ${18 - edad} años.`}`);
//  2.
let myAge = 21;
let yourAge = 72;

if(myAge > yourAge){
    console.log(`Eres ${myAge - yourAge} menor que yo.`);
}else{
    console.log(`Eres ${yourAge - myAge} mayor que yo.`);
};
//  3.
let a = 4;
let b = 3;

if(a > b){
    console.log(`${a} es mayor que ${b}`);
}else{
    console.log(`${b} es mayor que ${a}`);
};
console.log(`${a > b ? a + ' es mayor que ' + b : b + ' es mayor que ' + a}`);
//  4.
let numero = prompt('Ingrese un numero');
if(numero % 2 == 0){
    alert(`${numero} es un numero par.`);
}else{
    alert(`${numero} es un numero impar.`);
};