//  7.
let now = new Date();
console.log(`¿Qué año es hoy? => ${now.getFullYear()}`);
console.log(`¿Qué mes es hoy con un número? => ${now.getMonth() + 1}`);
console.log(`¿Qué fecha es hoy? => ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`);
console.log(`¿Qué día es hoy con un número? => ${now.getDay()}`);
console.log(`¿Cuál es la hora actual? => ${now.getHours()}`);
console.log(`¿Cuántos minutos hay actualmente? => ${now.getMinutes()}`);
console.log(`Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora. => ${now.getTime()}`);