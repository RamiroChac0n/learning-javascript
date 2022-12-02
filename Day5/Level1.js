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
//  10.
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
//  11.
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
//  12.
console.log(itCompanies + ' son grandes empresas de TI.');
//  13.
let empresaBuscar = 'Walmart';
if(itCompanies.includes(empresaBuscar)){
    console.log(itCompanies[itCompanies.indexOf(empresaBuscar)]);
}else{
    console.log(empresaBuscar + ' no existe.');
};
//  14.
let empresasFiltro = itCompanies.toString();
console.log(empresasFiltro.match(/[a-np-z]+\o{2}[a-np-z]+|[a-np-z]+\o[a-np-z]+\o[a-np-z]+/gi));
//  15.
console.log(itCompanies.sort());
//  16.
console.log(itCompanies.reverse());
//  17.
console.log(itCompanies.slice(0,3));
//  18.
console.log(itCompanies.slice(itCompanies.length - 3,itCompanies.length));
//  19.
console.log(itCompanies);
if(itCompanies.length % 2 == 0){
    console.log(itCompanies.slice(Math.round((itCompanies.length/2)-1), Math.round((itCompanies.length/2)+1)));
}else{
    console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2 +1)));
};
//  20.
console.log(itCompanies);
itCompanies.shift();
console.log(itCompanies);
//  21.
console.log(itCompanies);
if(itCompanies.length % 2 == 0){
    itCompanies.splice(Math.round((itCompanies.length/2)-1), 2);
}else{
    itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
};
console.log(itCompanies);
//  22.
console.log(itCompanies);
itCompanies.pop();
console.log(itCompanies);
//  23.
console.log(itCompanies);
console.log(itCompanies.splice());