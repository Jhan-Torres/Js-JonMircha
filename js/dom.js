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


//INTERACTUAR CON LOS ATRIBUTOS DE ETIQUETAS HTML 

//ACCEDER A LOS ATRIBUTOS
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
/* 
  NOTA: hay algunos desarrolladores que anteponen el simbolo "$" para variables que guarden elementos de HTML y para 
  diferenciar de variables que se usan para la logica.
*/
const $linkDOM = document.querySelector(".link-dom");

//AÑADIR NUEVOS ATRIBUTOS:
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
/* 
  noopener --> indica al navegador que vaya al recurso de destino "href" sin otorgar al nuevo contexto de 
  navegación acceso al documento que lo abrió. Esto es útil al abrir enlaces que no son de confianza para
  garantizar que no puedan alterar el documento de origen a través de la propiedad Window.opener
*/  

//QUITAR ATRIBUTOS:
$linkDOM.removeAttribute("target");

//VALIDAR ATRIBUTOS:
console.log($linkDOM.hasAttribute("rel"));; //true


//INTERACTUAR CON DATA-ATTRIBUTES DE ETIQUETAS HTML:
/* 
  data attributes --> permite almacenar informacion extra en los nodos html o añadir atributos extra, solo se necesita
  anteponer la palabra "data-" seguido de cualquier nombre. p.e   data-description="..."
  Se pueden trabajar con estos de igual manera que los atributos normales:
*/

//ACCEDER
//para acceder a un data-attribute con la notacion del punto, primero tenemos que acceder al "datset". Este "dataset" guarda a 
//manera de un "map" a todos los "data-attributes" que hayamos especificado. 
console.log($linkDOM.dataset);                          //DOMStringMap {description: 'Document Object Model'}
console.log($linkDOM.dataset.description);              //Document Object Model

console.log($linkDOM.getAttribute("data-description")); //Document Object Model

//EDITAR
$linkDOM.setAttribute("data-description", "Dom");
console.log($linkDOM.getAttribute("data-description")); //Dom

$linkDOM.dataset.description = "Document Object Model";
console.log($linkDOM.getAttribute("data-description")); //Document Object Model

//VALIDAR 
console.log($linkDOM.hasAttribute("data-description")); //true

//ELIMINAR
$linkDOM.removeAttribute("data-description");
console.log($linkDOM.hasAttribute("data-description")); //false

console.clear();



