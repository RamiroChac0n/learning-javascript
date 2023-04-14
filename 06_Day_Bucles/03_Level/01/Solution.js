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
let reverseCountriesArray = [];
for (let index = countries.length; index > 0; index--) {
    reverseCountriesArray.push(countries[index -1]);
}
console.log(countries);
console.log(reverseCountriesArray);