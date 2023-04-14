//  1.
let puntaje = prompt('Ingrese su puntaje');
switch(true){
    case puntaje > 79: alert('Usted obtuvo una A');break;
    case puntaje > 69: alert('Usted obtuvo una B');break;
    case puntaje > 59: alert('Usted obtuvo una C');break;
    case puntaje > 49: alert('Usted obtuvo una D');break;
    case puntaje > 0: alert('Usted obtuvo una F');break;
}