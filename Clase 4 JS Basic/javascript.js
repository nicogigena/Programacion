alert("Bienvenidos a mi sitio!");

var mainh2 = document.querySelector ("main h2");
if (!confirm("Esta seguro que desea avanzar?")) {
  mainh2.innerText = "Lamentamos que no quieras continuar tu visita por este maravilloso sitio";
}else{
  mainh2.innerText = "Qué alegría que quieras con tu visita por este maravilloso sitio!!!"
};
mainh2.style.textAlign = "center";




var edad = prompt("Edad");
if (edad < 18) {
  var contenidoBloqueado = document.querySelector(".contenido-bloqueado");
  contenidoBloqueado.style.display="block";

  var containerGeneral = document.querySelector(".container-general");
  containerGeneral.style.display="none";
} else {
  var nombre = prompt("Nombre");
  var mainh1 = document.querySelector("main h1");
  mainh1.innerText = "Bienvenido " + nombre


var hobbies = prompt("Escribe tus hobbies separados por una ","");
var hobbiesSplit = hobbies.split(",");

if (hobbiesSplit.indexOf("programación") != -1 || hobbiesSplit.indexOf("programacion") != -1 || hobbiesSplit.indexOf("programar") != -1 || hobbiesSplit.indexOf("Programación") != -1 || hobbiesSplit.indexOf("Programacion") != -1 || hobbiesSplit.indexOf("Programar") != -1)

{
  alert("Que bueno que te guste la programación!");
  var backgroundImg = document.querySelector(".background-img");
  backgroundImg.style.backgroundImage = "url(img/programmer.jpeg)";
  backgroundImg.style.backgroundSize = "100%";
  backgroundImg.style.backgroundPosition = "center";
}
  else
{
  alert("Que lástima que no te guste la programación!");
  var backgroundImg = document.querySelector(".background-img");
  // backgroundImg.setAttribute("src", "img/gatito.jpeg")
  backgroundImg.style.backgroundImage = "url(img/gatito.jpeg)";
  backgroundImg.style.backgroundSize = "100%";
  backgroundImg.style.backgroundPosition = "center";
}

var mainarticle = document.querySelector("main article");
mainarticle.innerHTML = "<ol>" + "<li>" + hobbiesSplit[0] + "</li>" + "<li>" + hobbiesSplit[1] + "</li>" +"<li>" + hobbiesSplit[2] + "</li>" +"</ol>"
}
