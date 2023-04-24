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

let countriesCopy = [];
for (let index = 0; index < countries.length; index++) {
    countriesCopy.push(countries[index]);
}
console.log(countries);
console.log(countriesCopy);
let sortedCountries = countriesCopy.sort();
console.log(sortedCountries);
