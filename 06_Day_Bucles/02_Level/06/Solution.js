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
let newArray = [];
let index = 0;
while (index < countries.length) {
    newArray[index] = [countries[index], countries[index].substring(0,3).toUpperCase(), countries[index].length];
    index++;
}
console.log(newArray);