// Ejercicios intermedios
// Bucles:

// Crea un bucle for que imprima los números del 1 al 10 en la consola.

// for(let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// // // Usa un bucle while para pedir al usuario que adivine un número entre 1 y 10. 
// // // El bucle termina cuando el número correcto (7) es adivinado.

// let bandera = true;

// while(bandera) {
//   let numero = +prompt("¿Qué número crees que es del 1 - 10?");
//   if (numero == 7 ) {
//     alert("Felicidades! Has acertado");
//     bandera = false;
//   } else {
//     alert("Meehhh! Intentalo de nuevo")
//   }
// }

// Arrays:

// Declara un array con al menos cinco elementos (nombres de frutas, por ejemplo) e imprime cada uno usando un bucle for.

// const array = ["Pera", "Platano", "Manzana", "Uva" , "Piña", "Melocotón"];

// for(let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// // Usa el método map() para crear un nuevo array que contenga la longitud de cada nombre de fruta.

// const nuevoArray = array.map(elem => elem.length);
// console.log(nuevoArray);

// Funciones:

// Define una función que acepte un array de números y retorne la suma de todos los elementos.

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sumaElementos = (array) => {
//   let suma = 0;
//   for (let i = 0; i < array.length; i++) {
//     suma += array[i];
//   }
//   console.log(suma);
// }
// sumaElementos(array);

// // Crea una función que acepte dos parámetros: un nombre y una edad. Si la edad es mayor o igual a 18, retorna un mensaje indicando que la persona es mayor de edad, de lo contrario, indica que es menor.

// const nombreEdad = (nombre, edad) => {
//   if (edad < 18) {
//     console.log("MENOR");
//   } else {
//     console.log("MAYOR");
//   }
// }
// nombreEdad("Carmen", 19);

// // Ejercicios avanzados
// // Objetos:

// // Declara un objeto llamado persona con las propiedades nombre, edad y profesion. Imprime el valor de cada propiedad en consola.

// const persona = {
//   nombre: "Carmen",
//   edad: 19,
//   profesion: "Estudiante"
// };
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.profesion);

// // Agrega un método al objeto persona que retorne un saludo usando su nombre.

// const saludo = persona => console.log(`Hola ${persona.nombre}`);
// saludo(persona);

// Funciones flecha y desestructuración:

// Crea una función flecha que acepte un array de números y devuelva un array con el doble de cada número.

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const dobles = array.map(num => {
//   return num*2});

// console.log(dobles);
// // Desestructura un objeto que tenga propiedades como nombre, edad y profesion para usar las variables en una función que imprima una frase con esta información.

// const persona = {
//   nombre: "Carmen",
//   edad: 19,
//   profesion: "Estudiante"
// }

// const frase = ({nombre, edad, profesion}) => console.log(`${nombre}, ${edad} ${profesion}`);
// frase(persona);

// Crea un componente que acepte una lista de nombres y los renderice como una lista de elementos <li> en un <ul>.
// Usa .map() para recorrer el array y generar los elementos.

// Ejemplo filter

// const array = ["Pera", "Platano", "Manzana", "Uva", "Piña", "Melocotón"];

// const filtro = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     array.filter((elem) => {
//       if (array[i].length > 4) {
//         console.log(array[i])
//       } else {
//         console.log(array[i] + " es muy corto");
//       }
//     })
//   }
// }

// filtro(array);



