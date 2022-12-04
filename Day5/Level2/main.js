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