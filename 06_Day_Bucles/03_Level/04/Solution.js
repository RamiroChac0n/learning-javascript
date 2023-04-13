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
];
let landCountries = [];
for (let index = 0; index < countries.length; index++) {
    if (countries[index].includes('land')) {
        landCountries.push(countries[index]);
    }
}
console.log(landCountries);