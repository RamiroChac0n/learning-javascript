//  Extra
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

// Exercise 09
let longCountrie = '';
for (let index = 0; index < countries.length; index++) {
    if (longCountrie.length < countries[index].length) {
        longCountrie = countries[index];
    }
}
console.log(longCountrie);