const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
let wordLength = [];
for (let index = 0; index < webTechs.length; index++) {
    wordLength.push([webTechs[index], webTechs[index].length]);
}
console.log(wordLength);