console.log("Archivo modulos:");

import saludar, {PI, operaciones as op} from "./constantes.js"; //"./" para buscar en la misma carpeta, para subir un nivel --> "../"
//con "as" le damos un alias para este archivo

console.log("Pi: " + PI);

console.log(op.sumar(10, 10));
console.log(op.multiplicar(5, 5));
saludar();