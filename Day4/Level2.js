//  1.
/*let puntaje = prompt('Ingrese su puntaje');
switch(true){
    case puntaje > 79: alert('Usted obtuvo una A');break;
    case puntaje > 69: alert('Usted obtuvo una B');break;
    case puntaje > 59: alert('Usted obtuvo una C');break;
    case puntaje > 49: alert('Usted obtuvo una D');break;
    case puntaje > 0: alert('Usted obtuvo una F');break;
}
//  2.
let mes = prompt('Que mes es?');
switch(mes.toLowerCase()){
    case 'septiembre': case 'octubre': case 'noviembre':alert('La temporada es Otoño.');break;
    case 'diciembre': case 'enero': case 'febrero':alert('La temporada es Invierno.');break;
    case 'marzo': case 'abril': case 'mayo':alert('La temporada es Primavera.');break;
    case 'junio': case 'julio': case 'agosto':alert('La temporada es Verano.');break;
}*/
//  3.
let hoy = prompt('Que dia es hoy?');
switch(hoy.toLowerCase()){
    case 'sabado':case 'domingo':alert(`El ${hoy} es fin de semana.`);break;
    case 'lunes': case 'martes': case 'miercoles': case 'jueves': case 'viernes':alert(`El ${hoy} es un dia laborable.`);break;
    default:alert(`${hoy} no es un dia.`);break;
}