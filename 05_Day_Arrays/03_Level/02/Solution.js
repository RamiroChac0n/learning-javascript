//  2.
if(countries.length%2 == 0){
    console.log(`Los paises intermedios son: ${countries[Math.round(countries.length/2 -1)]} y ${countries[Math.round(countries.length/2)]}`);
}else{
    console.log(`El pais intermedio es: ${countries[Math.round(countries.length/2 -1)]}`);
};
console.log(countries.length);