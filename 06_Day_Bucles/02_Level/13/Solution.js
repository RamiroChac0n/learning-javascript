const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let acronymArray =[];
let acronym = '';
for (let index = 0; index < mernStack.length; index++) {
    acronymArray.push(mernStack[index].substring(0,1));
}
acronym = acronymArray.join("");
console.log(acronym);