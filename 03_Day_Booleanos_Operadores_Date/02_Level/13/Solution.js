//  13.
let now = new Date();
let anioNacimiento = prompt('Introduzca el año de nacimiento:');
let edad = now.getFullYear() - anioNacimiento;
alert(`Tienes ${edad}, ${edad >= 18 ? `Tienes la edad suficiente para conducir.` : `Podrás conducir después de ${18 - edad} años.`}`);