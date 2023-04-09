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

let countries5Char = [];
for (let index = 0; index < countries.length; index++) {
    if (countries[index].length == 5) {
        countries5Char.push(countries[index]);
    }
}
console.log(countries5Char);