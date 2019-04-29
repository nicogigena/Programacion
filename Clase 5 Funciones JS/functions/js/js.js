//  function esPar(numero){
//   return numero%2 == 0
// }
//
// console.log(esPar(10));
//
// console.log(!true);
//
// var num1= 10
// var num2= 12

primero="Carlos"

console.log(primero);

//
// console.log(num1==10 || num1==13);

//
// function estarEntre (primero, segundo, tercero){
//   return primero<segundo && segundo<tercero
// }
// console.log(estarEntre(1,2,3));
//
function estarFueraDeRango (primero, segundo, tercero) {
 return primero<segundo || primero>tercero;
}
console.log(estarFueraDeRango(11,1,12));

console.log(primero);


function gritar(palabra){
  console.log(palabra.toUpperCase());
}

gritar("estructura")
