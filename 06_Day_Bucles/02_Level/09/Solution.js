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
let countriesIA = [];
for (let index = 0; index < countries.length; index++) {
    if (countries[index].includes('ia')) {
        countriesIA.push(countries[index]);
    }
}
if (countriesIA.length == 0) {
    console.log('These are countries ends without ia');
} else {
    console.log(countriesIA);
}

// Exercise 09
let longCountrie = '';
for (let index = 0; index < countriesIA.length; index++) {
    if (longCountrie.length < countriesIA[index].length) {
        longCountrie = countriesIA[index];
    }
}
console.log(longCountrie);