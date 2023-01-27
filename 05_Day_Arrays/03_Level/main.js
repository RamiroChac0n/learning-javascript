//  1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort();
console.log(ages);

if(ages.length%2 == 0){
    console.log(`La edad media es: ${(ages[Math.round(ages.length/2 -1)] + ages[Math.round(ages.length/2)])/2} años.`);
}else{
    console.log(`La edad media es: ${ages[Math.round(ages.length/2 -1)]} años.`);
}

let edadPromedio = eval(ages.join('+'))/ages.length;
console.log(`La edad promedio es: ${edadPromedio} años.`);

let edadMaxima = ages[ages.length -1];
let edadMinima = ages[0];
console.log(`El rango de las edades es: ${edadMaxima - edadMinima}`);

console.log(`Comparando valores: ${Math.abs(edadMinima - edadPromedio)} y ${Math.abs(edadMaxima - edadPromedio)}`);

/* Usar la extension Live Server de vscode */
console.log(countries.slice(0,10));
//  2.
if(countries.length%2 == 0){
    console.log(`Los paises intermedios son: ${countries[Math.round(countries.length/2 -1)]} y ${countries[Math.round(countries.length/2)]}`);
}else{
    console.log(`El pais intermedio es: ${countries[Math.round(countries.length/2 -1)]}`);
};
console.log(countries.length);
//  3.
let primeraParte = [];
let segundaParte = [];
if(countries.length%2 == 0){
    primeraParte = countries.slice(0,Math.ceil(countries.length/2));
    segundaParte = countries.slice(Math.ceil(countries.length/2), countries.length);
}else{
    primeraParte = countries.slice(0,Math.ceil(countries.length/2-1));
    primeraParte.push('Wakanda');
    primeraParte.sort();
    segundaParte = countries.slice(Math.ceil(countries.length/2 -1), countries.length);
}
console.log(primeraParte);
console.log(segundaParte);