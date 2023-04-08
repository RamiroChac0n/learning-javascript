//  4.
let texto = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.';
let dinero = texto.match(/\d+/g);
let IngresoAnual = (parseInt(dinero[0]) * 12) + parseInt(dinero[1]) + (parseInt(dinero[2]) * 12);
console.log('Ingreso Anual: ' + IngresoAnual);