/*
    Suma los primeros "n" elementos de un arreglo.
*/
function sum(arr, n) {
    // Cambia solo el código debajo de esta línea
    if(n <= 0){
      return 0;
    }else{
      return sum(arr,n-1)+arr[n-1];
    }
    // Cambia solo el código encima de esta línea
  }
  console.log(sum([2,3,4],1))