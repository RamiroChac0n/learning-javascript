//  1.
console.log(countries);
console.log(webTechs);
//  2.
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
text = text.replace(/[\.\,]+/g,'');
let words = text.split(' ');
console.log(words);
console.log(words.length);
//  3.
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart);
shoppingCart.unshift('Meat');
console.log(shoppingCart);
shoppingCart.push('Sugar');
console.log(shoppingCart);
shoppingCart.splice(shoppingCart.indexOf('Honey'),1)
console.log(shoppingCart);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);
//  4.
if(countries.indexOf('Ethiopia') == -1){
    countries.push('Ethiopia');
    countries.sort();
}else{
    console.log('ETHIOPIA');
};
//  5.
if(webTechs.indexOf('Sass') == -1){
    webTechs.push('Sass');
    webTechs.sort();
}else{
    console.log('Sass es un preproceso de CSS');
};
//  6.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);