var ironMan = {
  nombre: "Iron Man",
  equipo: "Avengers",
  poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
  energia: 100,
  getPoder: function (numero) {
    this.energia=this.energia-10;
    return this.poderes [numero]
  }
}
var Hulk= {
  nombre: "Hulk",
  equipo: "Avengers",
  poderes: ["Aplastar", "Gritar", "Golpear"],
  energia: 100,
  getPoder: function (numero) {
    this.energia=this.energia-10;
    return this.poderes[numero]
  }
}
function numeroRandom() {
  return Math.floor(Math.random()*2)
}
console.log(Hulk.getPoder(numeroRandom()))
console.log(Hulk.energia);
