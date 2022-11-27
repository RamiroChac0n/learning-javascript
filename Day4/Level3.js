//  1.
/*let mes1 = prompt('Ingrese el mes');
switch(mes1.toLowerCase()){
    case 'enero':case 'marzo':case 'mayo':case 'julio':case 'agosto':case 'octubre':case 'diciembre':alert(`${mes1} tiene 31 dias.`);break;
    case 'abril':case 'junio':case 'septiembre':case 'noviembre':alert(`${mes1} tiene 30 dias.`);break;
    case 'febrero':alert(`${mes1} tiene 28 dias.`);break;
};*/
//  2.
let mes2 = prompt('Ingrese el mes');
switch(mes2.toLowerCase()){
    case 'enero':case 'marzo':case 'mayo':case 'julio':case 'agosto':case 'octubre':case 'diciembre':alert(`${mes2} tiene 31 dias.`);break;
    case 'abril':case 'junio':case 'septiembre':case 'noviembre':alert(`${mes2} tiene 30 dias.`);break;
    case 'febrero':
        if(confirm('El año es bisiesto?')){
            alert(`${mes2} tiene 29 dias.`);
        }else{
            alert(`${mes2} tiene 28 dias`);
        };
        break;
};