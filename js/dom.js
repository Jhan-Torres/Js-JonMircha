//DOM --> es una API para la representacion de los datos en los navegadores, ademas para manipular el HTML mediante JS
//CSS --> es una API para manipular CSS mediante JS
//BOM --> No se le considera una API estandar, dado que cada navegador tiene sus propias formas de comportamiento

//NOTA: Todas estas APIs cuelgan de Window, en el navegador

//API para hacer hablar a tu navegador (speechSynthesis)
/*let text = "Hola Jhan, welcome to V8";

function hablar(texto) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

hablar(text); */

//DOM:
//ELEMENTOS DEL DOM
console.log(document.head);
console.log(document.body);
console.log(document.documentElement); //para la etiqueta html
console.log(document.doctype);
console.log(document.title);
console.log(document.styleSheets); //para obtener los archivos css
console.log(document.scripts);

// setTimeout(() => {
//   console.log(document.getSelection().toString()); //para obtener el texto seleccionado con el mouse
// }, 2000);

document.write("<h1>write from js</h1>"); //desfasado

console.clear();

/*
  nota: no confundir una etiqueta html con un nodo, ya que existen diferentes tipos de nodo y uno de ellos son las etiquetas html
  basicamente para interactuar con el dom solo nos va a interersar los nodos del tipo elemento (element_node) y los nodos del
  tipo texto (text_node):
  text_node     --> es el texto que esta dentro de una etiqueta (h1, h2, p, etc).
  element_node  --> es una etiqueta html en particular
*/

//getElementsByTagName(), getElementsByClassName(), getElementsByName() están desfasados, ahora se usa querySelector():
console.log(document.querySelector(".card")); //(tagName), (.className), (#Name) --> para seleccionar etiquetas, clases o id's respectivamente

//nota se puede usar querySelector(#Name) para las etiquetas con id pero es mejor en rendimiento usar .getElementById("id")

console.log(document.querySelector("a")); //en este caso al haber varias etiquetas <a></a>, nos retornará la primera coincidencia
console.log(document.querySelectorAll("a")); //para retornar todas las coincidencias

//para filtrar las listas que solo estan dentro del menu
console.log(document.querySelectorAll("#menu li"));

console.clear();

//INTERACTUAR CON LOS ATRIBUTOS Y DATA-ATTRIBUTES
/* 
  data attributes --> permite almacenar informacion extra en los nodos html o añadir atributos extra, solo se necesita
  anteponer la palabra "data-" seguido de cualquier nombre. p.e   data-description="..."
*/

//ACCEDER A LOS ATRIBUTOS DE ETIQUETAS HTML 
//Existen 2 formas: notacion del punto "." y con .getAttribute(#attributeName)
console.log(document.documentElement.lang);                 //en
console.log(document.documentElement.getAttribute("lang")); //en

//aparentemente en este caso no hay diferencias, pero veamos el siguiente ejemplo:
console.log(document.querySelector(".link-dom").href);                  //http://127.0.0.1:5500/10%20-%20Web%20APIs.html
console.log(document.querySelector(".link-dom").getAttribute("href"));  //10 - Web APIs.html  --> este es el valor que esta escrito en ese href

//EDITAR VALORES DE LOS ATRIBUTOS DE ETIQUETAS HTML:
//Existen 2 formas: notacion del punto "." y con .setAttribute(#attributeName, #newValue)
document.documentElement.lang = "es"; 
console.log(document.documentElement.lang);                 //es

document.documentElement.setAttribute("lang", "en");
console.log(document.documentElement.lang);                 //en


//GUARDAR UN NODO HTML EN UNA VARIABLE:
//NOTA: 
const linkDOM = document.querySelector(".link-dom");

