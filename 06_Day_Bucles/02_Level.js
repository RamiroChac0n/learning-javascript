//  1.
let letters = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+";
let idArray = [];
let id = "";
let length = Math.floor(Math.random() * 20) + 5;
while (idArray.length < length) {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            idArray.push(letters[Math.floor(Math.random() * letters.length)]);
            break;
        case 1:
            idArray.push(numbers[Math.floor(Math.random() * numbers.length)]);
            break;
        case 2:
            idArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
            break;
        default:
            break;
    };
}
id = idArray.join("");
console.log(id);

//  2.
let lettersHex = "abcdef";
let numbersHex = "0123456789";
let hexArray = ['#'];
let hex = "";
while(hexArray.length < 7){
    switch (Math.floor(Math.random() * 2)) {
        case 0:
            charRandomHex = lettersHex[Math.floor(Math.random() * lettersHex.length)];
            hexArray.push(charRandomHex);
            break;
        case 1:
            charRandomHex = numbersHex[Math.floor(Math.random() * numbersHex.length)];
            hexArray.push(charRandomHex);
            break;
        default:
            break;
    };
}
hex = hexArray.join("");
console.log(hex);