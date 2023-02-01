<<<<<<< HEAD
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
/*let n = prompt('Ingrese el numero hasta donde desea iterar');
for (let index = 0; index <= n; index++) {
    console.log(index);
}*/
//  4.
let numerales = '';
for (let index = 0; index < 7; index++) {
    numerales += '#';
    console.log(numerales);
};
//  5.
for (let index = 0; index < 11; index++) {
    console.log(`${index} x ${index} = ${index ** 2}`);
    
};
//  6.
console.log('Potencias:');
console.log('i\ti^2\ti^3');
let inciso6 = 0;
while (inciso6 < 11) {
    console.log(`${inciso6}\t${inciso6 ** 2}\t${inciso6 ** 3}`);
    inciso6++;
};
//  7.
console.log('De 0 a 100 solo numeros pares usando \'for\':');
for (let index = 0; index < 101; index++) {
    if (index%2 == 0) {
        console.log(index);
    };
    
};
//  8.
console.log('De 0 a 100 solo numeros impares usando \'for\':');
for (let index = 0; index < 101; index++) {
    if (!(index%2 == 0) || index == 0) {
        console.log(index);
    };
 
};
//  9.
console.log('De 0 a 100 solo numeros primos usando \'for\':');
for (let numero = 0; numero <= 100; numero++) {
    var divisores = 0;
    for (let divisor = 2; divisor < numero; divisor++) {
        if(numero % divisor == 0)
            divisores++;
    }
    if(divisores > 0 || numero < 2)
        continue;
    console.log(numero);
}
//  10.
var suma = 0;
for (let index = 0; index < 101; index++) {
    suma += index;
}
console.log(`La suma de 0 a 100 es: ${suma}`);

//  11.
let sumaPares = 0;
for (let index = 0; index < 101; index++) {
    if (index%2 == 0) {
        sumaPares += index;
    };   
};
let sumaImpares = 0;
for (let index = 0; index < 101; index++) {
    if (!(index%2 == 0) || index == 0) {
        sumaImpares += index;
    };
};
console.log(`La suma de todos los pares de 0 a 100 es ${sumaPares}. Y La suma de todos los impares de 0 a 100 es ${sumaImpares}.`);

//  12.
const sumaArray = [0, 0];
for (let index = 0; index < 101; index++) {
    if (index%2 == 0) {
        sumaArray[0] += index;
    };   
};
for (let index = 0; index < 101; index++) {
    if (!(index%2 == 0) || index == 0) {
        sumaArray[1] += index;
    };
};
console.log(sumaArray);
=======
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
/*let n = prompt('Ingrese el numero hasta donde desea iterar');
for (let index = 0; index <= n; index++) {
    console.log(index);
}*/
//  4.
let numerales = '';
for (let index = 0; index < 7; index++) {
    numerales += '#';
    console.log(numerales);
};
//  5.
for (let index = 0; index < 11; index++) {
    console.log(`${index} x ${index} = ${index ** 2}`);
    
};
//  6.
console.log('Potencias:');
console.log('i\ti^2\ti^3');
let inciso6 = 0;
while (inciso6 < 11) {
    console.log(`${inciso6}\t${inciso6 ** 2}\t${inciso6 ** 3}`);
    inciso6++;
};
//  7.
console.log('De 0 a 100 solo numeros pares usando \'for\':');
for (let index = 0; index < 101; index++) {
    if (index%2 == 0) {
        console.log(index);
    };
    
};
//  8.
console.log('De 0 a 100 solo numeros impares usando \'for\':');
for (let index = 0; index < 101; index++) {
    if (!(index%2 == 0) || index == 0) {
        console.log(index);
    };
 
};
//  9.
console.log('De 0 a 100 solo numeros primos usando \'for\':');
for (let numero = 0; numero <= 100; numero++) {
    var divisores = 0;
    for (let divisor = 2; divisor < numero; divisor++) {
        if(numero % divisor == 0)
            divisores++;
    }
    if(divisores > 0 || numero < 2)
        continue;
    console.log(numero);
}
//  10.
var suma = 0;
for (let index = 0; index < 101; index++) {
    suma += index;
}
console.log(`La suma de 0 a 100 es: ${suma}`);

//  11.
let sumaPares = 0;
for (let index = 0; index < 101; index++) {
    if (index%2 == 0) {
        sumaPares += index;
    };   
};
let sumaImpares = 0;
for (let index = 0; index < 101; index++) {
    if (!(index%2 == 0) || index == 0) {
        sumaImpares += index;
    };
};
console.log(`La suma de todos los pares de 0 a 100 es ${sumaPares}. Y La suma de todos los impares de 0 a 100 es ${sumaImpares}.`);

//  12.
const sumaArray = [0, 0];
for (let index = 0; index < 101; index++) {
    if (index%2 == 0) {
        sumaArray[0] += index;
    };   
};
for (let index = 0; index < 101; index++) {
    if (!(index%2 == 0) || index == 0) {
        sumaArray[1] += index;
    };
};
console.log(sumaArray);

//  13.
let matrizRandom = [];
for (let index = 0; index < 6; index++) {
     matrizRandom[index] = Math.floor(Math.random() * 11);
}
console.log(matrizRandom);
>>>>>>> 892d777530d727b1acbf6b9add4a5cf25b7cd00d
