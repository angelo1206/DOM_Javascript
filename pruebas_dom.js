// se crea un evento de carga para que cargue primero el html y despues los javascript
window.addEventListener("load", function(){

let prueba = "vamos a iniciar aprender DOM"
document.getElementById("demo1").innerHTML = prueba;

// Ejemplo de como encontrar el elemento con id
const elemento = document.getElementById("intro");
document.getElementById("demo2").innerHTML = "esto es el intro parrafo ==>: " + elemento.innerHTML;

// Ejemplo de busqueda con la etiqueta nombre getElementsByTagName:
const elemento2 = document.getElementsByTagName("h3");
document.getElementById("demo3").innerHTML = "este es el primer parrafo (index 0) es :" + elemento2[0].innerHTML;

// ejemplo encuentra el elemento con id="main"y luego encuentra todos los <p>elementos dentro "main":
const a = document.getElementById("main");
const b = a.getElementsByTagName("h4");
document.getElementById("demo4").innerHTML = "primer parrafo =" + b[0].innerHTML;
document.getElementById("demo5").innerHTML = "segundo parrafo =" + b[1].innerHTML;

// Ejemplo de Encontrar elementos HTML por nombre de clase : getElementsByClassName
const c = document.getElementsByClassName("intro");
document.getElementById("demo6").innerHTML = "este es el primer parrafo del (indice 0) de la clase intro"+ " " + c[0].innerHTML;

// Ejemplo de búsqueda de elementos HTML mediante selectores de CSS con querySelectorAll()
const d = document.querySelectorAll("p.intro2");
document.getElementById("demo7").innerHTML = "el primer parrafo del (indice 0) con la clase intro2 es:" + d[0].innerHTML;

// Ejemplo de Cambiar el valor de un atributo de una imagen
document.getElementById("imagen").src = "leon.jpg";

// Ejemplo de cambio de estilo con DOM
document.getElementById("p2").style.color = "yellow";
document.getElementById("p2").style.fontFamily = "Arial";
document.getElementById("p2").style.fontsize = "larger";

setTimeout(myFunction, 6700);
function myFunction(){
const cambio_de_color = "gracias ahora estoy muy feliz este color esta genial!!!"
document.getElementById('id1').innerHTML = cambio_de_color;
}

// Ejemplo de Animaciones en javascript con DOM

// function myMove(){
//   let id =null;
//   const elem = document.getElementById("animate");
//   let pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 5);
//   function frame(){
//     if (pos == 350){
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }
// ////////////////////////////////////////////////////////////resolver

// Ejemplo de Event Listener
document.getElementById("miboton").addEventListener("click", displaydate);

function displaydate() {
  document.getElementById("demo8").innerHTML = Date();
}

// Ejemplo de Event Listener con un mensaje de alerta
document.getElementById("miboton2").addEventListener("click", function() {
  alert("Bienvenidos a mi pagina");
});

// Ejemplo de Event Listener con un varios mensajes de alerta
var x =
document.getElementById("miboton3");
x.addEventListener("click", alertas);
x.addEventListener("click", alertas2);

function alertas() {
  alert ("como te parece la pagina");
}

function alertas2() {
  alert ("espero que sea de tu agrado");
}

// Ejemplo interactivo con addEventListener
var z =
document.getElementById("miboton4");
z.addEventListener("mouseover", encima);
z.addEventListener("click", click);
z.addEventListener("mouseout", fuera);

function encima() {
  document.getElementById("demo9").innerHTML += "estas apuntando al boton!!<br><br>";
}

function click() {
  document.getElementById("demo9").innerHTML += "le diste click al boton!!<br><br>";
}

function fuera() {
  document.getElementById("demo9").innerHTML += "esta por fuera del boton!!<br><br>";
}

// Ejemplo de Navigation DOM
var nav_dom = document.getElementById("nav1").childNodes[0].nodeValue;
document.getElementById("nav2").innerHTML = nav_dom;

// Ejemplo de Nodes DOM
const parrafo = document.createElement("p");
const nodo = document.createTextNode("hola soy el tercer parrafo recien llegado!!!");
parrafo.appendChild(nodo);
const elemento3 = document.getElementById("div1");
elemento3.appendChild(parrafo);

// Ejemplo de Nodes DOM remplazando un nodo
const padre = document.getElementById("div2");
const hijo = document.getElementById("p5");
const parrafo_nuevo = document.createElement("p");
const texto_nuevo = document.createTextNode("hola soy el nuevo parrafo que va a remplazar al parrafo uno!!!");
parrafo_nuevo.appendChild(texto_nuevo);
padre.replaceChild(parrafo_nuevo,hijo);




},true);
