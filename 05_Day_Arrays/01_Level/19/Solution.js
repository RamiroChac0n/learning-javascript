//  19.
console.log(itCompanies);
if(itCompanies.length % 2 == 0){
    console.log(itCompanies.slice(Math.round((itCompanies.length/2)-1), Math.round((itCompanies.length/2)+1)));
}else{
    console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2 +1)));
};