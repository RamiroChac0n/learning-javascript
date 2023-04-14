//  2.
let mes = prompt('Que mes es?');
switch(mes.toLowerCase()){
    case 'septiembre': case 'octubre': case 'noviembre':alert('La temporada es Otoño.');break;
    case 'diciembre': case 'enero': case 'febrero':alert('La temporada es Invierno.');break;
    case 'marzo': case 'abril': case 'mayo':alert('La temporada es Primavera.');break;
    case 'junio': case 'julio': case 'agosto':alert('La temporada es Verano.');break;
}
