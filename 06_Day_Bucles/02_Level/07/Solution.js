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

let countriesLand = [];

for (let index = 0; index < countries.length; index++) {
    if (countries[index].includes('land')) {
        countriesLand.push(countries[index]);
    }
}
if(countriesLand.length == 0){
    console.log('All these countries are without land');
}else{
    console.log(countriesLand);
}