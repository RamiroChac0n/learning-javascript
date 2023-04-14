//  3.
let hoy = prompt('Que dia es hoy?');
switch(hoy.toLowerCase()){
    case 'sabado':case 'domingo':alert(`El ${hoy} es fin de semana.`);break;
    case 'lunes': case 'martes': case 'miercoles': case 'jueves': case 'viernes':alert(`El ${hoy} es un dia laborable.`);break;
    default:alert(`${hoy} no es un dia.`);break;
}