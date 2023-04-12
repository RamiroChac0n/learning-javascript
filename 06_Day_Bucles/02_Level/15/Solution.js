let fruitArray = ['banana', 'orange', 'mango', 'lemon'];
let reverseFruitArray = [];

let iterator = fruitArray.length;

do{
    reverseFruitArray.push(fruitArray[iterator -1]);
    iterator--;
}while(iterator > 0);
console.log(reverseFruitArray);