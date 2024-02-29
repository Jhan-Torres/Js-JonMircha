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

setTimeout(() => {
  console.log(document.getSelection().toString()); //para obtener el texto seleccionado con el mouse
}, 2000);

console.log(document.write("<h1>write from js</h1>"))

console.clear();
