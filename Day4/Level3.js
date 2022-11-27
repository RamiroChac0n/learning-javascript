//  1.
let mes = prompt('Ingrese el mes');
switch(mes.toLowerCase()){
    case 'enero':case 'marzo':case 'mayo':case 'julio':case 'agosto':case 'octubre':case 'diciembre':alert(`${mes} tiene 31 dias.`);break;
    case 'abril':case 'junio':case 'septiembre':case 'noviembre':alert(`${mes} tiene 30 dias.`);break;
    case 'febrero':alert(`${mes} tiene 28 dias.`);break;
}