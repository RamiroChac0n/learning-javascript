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