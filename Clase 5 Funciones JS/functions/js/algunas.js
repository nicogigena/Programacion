function areaCuadrado(lado1, lado2){
  return lado1*lado2;
}
// console.log(area (9,2));


function areaCirculo (radio){
  return Math.PI * radio * radio
}
// console.log(areaCirculo(12));

function promedio (num1, num2, num3, num4, num5, num6){
  return (num1+num2+num3+num4+num5+num6)/6
}
// console.log(promedio(1,6,4,2,3,1));

function elementosArray (array){
  return array.length
}
// var gen= [1, 2, 3]
// console.log(elementosArray(gen));

var semana= ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

function posicion(array, elemento){
  return array.indexOf(elemento) +1
}
// console.log(posicion(semana, "Lunes"));

var misDatos= {
  nombre: "Nicolas",
  apellido: "Gigena",
  dni: 41827348,
  comidaFavorita: "Fideos",
  edad:19
}

console.log("Hola", misDatos.nombre);

// console.log(
//   "nombre"+"\n",
//   "apellido");

var persona= {}
persona.nombre="";
persona.altura=0;
persona.peso=0;
persona.edad=0;
persona.colorDeOjos="";
persona.colorDePelo=""
console.log(persona);
// persona.nombre="Marcos";
// console.log(persona);

var auto= {
  marca: "Nissan",
  modelo: "Tiida",
  año:"2011",
  color:"champagne",
  posicion: 0
}

function avanzar(numero){
  return numero+1
}
function retroceder(numero){
  return numero-1
}
// avanzar(auto.posicion) console.log(avanzar(avanzar(auto.posicion)));
function moverse(numero){
  return auto.posicion + numero
}

console.log(moverse(-5));
