//  1.
console.log('Bucle \'for\'')
for(let i = 0; i < 11; i++){
    console.log(i);
}
console.log('Bucle \'while\'');
let j = 0;
while (j < 11) {
    console.log(j);
    j++;
}
console.log('Bucle \'do while\'')
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 11);

//  2.
console.log('Bucle \'for\'')
for(let i = 10; i >= 0; i--){
    console.log(i);
}
console.log('Bucle \'while\'');
let l = 10;
while (l >= 0) {
    console.log(l);
    l--;
}
console.log('Bucle \'do while\'')
let m = 10;
do {
    console.log(m);
    m--;
} while (m >= 0);

//  3.
//Usar la extension "Live server" de vscode
let n = prompt('Ingrese el numero hasta donde desea iterar');
for (let index = 0; index <= n; index++) {
    console.log(index);
}