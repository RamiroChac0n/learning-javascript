//  1.
let frase = 'El amor es lo mejor que hay en este mundo, Algunos encontraron amor y algunos todavia estan buscando su amor.';
let amor = 3;
//  2.
let frase2 = 'No pueds terminar una oracion con porque porque porque es una conjuncion';
let frase2Array = frase2.match(/porque/gi);
console.log(frase2Array.length);
//  3.
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let sentenceClear = sentence.replace(/[\$\%\@\&\#\;]+/g,'');
console.log(sentenceClear);
//  4.
let texto = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.';
let dinero = texto.match(/\d+/g);
let IngresoAnual = (parseInt(dinero[0]) * 12) + parseInt(dinero[1]) + (parseInt(dinero[2]) * 12);
console.log('Ingreso Anual: ' + IngresoAnual);