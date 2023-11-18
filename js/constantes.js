export const PI = Math.PI;

function sumar(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}

export const operaciones = {
    sumar, 
    multiplicar
};

//Exportar por default: le decimos que al momento en que se importa el archivo
//donde se vaya a hacer la invocacion, carga esa exportacion por defecto
export default function saludar() { //solo se puede exportar una vez un default
    console.log("Hello!");
}

//Exportar por default a una variable, debido al hoisting que tiene JS se debe hacer asi:
// let epsilon = Math.E;
// export default epsilon;