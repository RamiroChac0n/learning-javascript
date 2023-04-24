const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
let longestWord = [];
for (let index = 0; index < webTechs.length; index++) {
    if (longestWord.length < webTechs[index].length) {
        longestWord = webTechs[index];
    }
}
console.log(longestWord);