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