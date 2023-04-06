//  Extras
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

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

//  3.
let rgbArray = [];
let intensity;
for (let index = 0; index < 3; index++) {
    rgbArray.push(Math.floor(Math.random() * 255));
}
console.log('rgb('+rgbArray[0]+','+rgbArray[1]+','+rgbArray[2]+')');

//  4.
let newCountriesArray = []
for (let index = 0; index < countries.length; index++) {
    newCountriesArray.push(countries[index]);
}
console.log(newCountriesArray);