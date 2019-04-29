var string

string= "Texto";
var array= [20, 15, 9, 99];
var boolean= true;

console.log(string + " " + array + " " + boolean);

var sumar= 5+10;
var restar= 20-5;
var num1= 10;
var num2= 5;

var multipNum= num1*num2;
var pi= Math.PI;
var redondear= Math.round(10.5);
console.log(redondear);
var redondearMin= Math.floor(10.9);
console.log(redondearMin);
var redondearMax= Math.ceil(10.42);
console.log(redondearMax);
var absolute= Math.abs(-4.7);
console.log(absolute);
var random= Math.floor(Math.random()*10 + 1)
// var random= [Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1)]
console.log(random);
var max= Math.max(1, 19, 999, 15, 12); //min idem
console.log(max);
var mayor= 2>1;
console.log(mayor); //true




var frutas = ["Banana", "Naranja", "Limon", "Manzana", "Mango"];
var citricos
frutas.push("Frutilla", "Melon");
console.log(frutas);

//frutas[1]= null;
//console.log(frutas);
//frutas.push("Naranja")
//console.log(frutas);

console.log(frutas.indexOf("Banana"));
console.log(frutas.indexOf("Durazno"));

var familia = [];
familia["abuelos"]= ["Juan", "Carlos", "Esteban", "Maria"];
familia["padres"]= ["Hernesto", "Daniel"];
familia["hijos"]= ["Nicolas", "Marcos", "Agustina"];
familia["nietos"]= ["Santiago", "Tomas", "Matilda"];

console.log(
  "Abuelos: " + familia["abuelos"].length
);
console.log(
  "Padres: " + familia["padres"].length
);
console.log(
  "Hijos: " + familia["hijos"].length
);
console.log(
  "Nietos: " + familia["nietos"].length
);
console.log(familia["abuelos"].indexOf("Juan"));





console.log(familia["abuelos"]  [0]);
console.log(familia["padres"]   [0]);
console.log(familia["hijos"]    [0]);
console.log(familia["nietos"]   [0]);


var name= "Nico";
function nombreCompleto(name) {
  
}
