// Prueba Diagnostico

// I Parte: Teoría

// 1. Respuesta pregunta 1

// Colocar la respuesta acá
//Numeros let a = 5;
//Booleanos let a = true;
//Cadenas Caracteres let a = "Hola mundo";
//Indefinidos let a;
// ====================================================================================================


// 2. Respuesta pregunta 2

// Colocar la respuesta acá

// ====================================================================================================


// 3. Respuesta pregunta 3

// Colocar la respuesta acá
//El += agrega al valor de la variable la informacion siguiente.
// el primer log muestra el numero 4465
//el segundo log muestra la cadena de caracteres 4465textoDePrueba
// ====================================================================================================


// 4. Respuesta pregunta 4

// Colocar la respuesta acá
// ambos operadores comparan la diferencia entre los valores en cuestion, != compara solo el contenido y !== compara tambien el tipo de los datos.
//Los primeros casos dan ambos true como resultado
//el tercer caso da como resultado false
//El cuarto caso da como resultado true
// ====================================================================================================


// 5. Respuesta pregunta 5

// Colocar la respuesta acá
// Son funciones que se declaran sin un nombre.
// ====================================================================================================


// 6. Respuesta pregunta 6

// Colocar la respuesta acá
// Las function expression se utilizan para definir un proceso dentro de una expresion o variable, muentras que las function declaration se ven definidas de manera independiente, para utilizar el proceso de la misma manera. 
// ====================================================================================================


// 7. Respuesta pregunta 7

// Colocar la respuesta acá
// Son funciones que estan sujetas a un objeto, se utilizan para manupular los valores de los objetos
// ====================================================================================================


// 8. Respuesta pregunta 8

// Colocar la respuesta acá
// Recursividad se define como un proceso cuyo resultado se utiliza para dar inicio al mismo proceso una y otra vez
// ====================================================================================================


// II Parte: Ejercicios

// 1. Respuesta pregunta 1

// Colocar el código acá
// let listarandom = [7,43,24,67,89,7,43,2,12,3,56,7,43,5,64,3,64,5,43,2,88];
// let pares = [];
// let impares = [];

// for (let i = 0; i < listarandom.length; i++) {
//   if (listarandom [i] % 2 == 0) {
//     pares.push(listarandom[i]);
//   }else{
//     impares.push(listarandom[i]);
//   }
// }
// console.log(listarandom,"\n",pares,"\n",impares);
// ====================================================================================================


// 2. Respuesta pregunta 2

// Colocar el código acá
// const usuarios = [
//   {
//     "nombre": "SammyShark",
//     "cargo": "CEO",
//     "social_media": [
//       {
//         "descripcion": "twitter",
//         "link": "https://twitter.com"
//       },
//       {
//         "descripcion": "facebook",
//         "link": "https://www.facebook.com"
//       },
//       {
//         "descripcion": "github",
//         "link": "https://github.com"
//       }
//     ]
//   },
//   {
//     "nombre": "ShakedaLouis",
//     "cargo": "CTO",
//     "social_media": [

//       {
//         "descripcion": "twitter",
//         "link": "https://twitter.com"
//       },
//       {
//         "descripcion": "facebook",
//         "link": "https://www.facebook.com"
//       },
//       {
//         "descripcion": "github",
//         "link": "https://github.com"
//       }
//     ]
//   },
//   {
//     "nombre": "Bill Zaheer",
//     "cargo": "Project Manager",
//     "social_media": [
//       {
//         "descripcion": "twitter",
//         "link": "https://twitter.com"
//       },
//       {
//         "descripcion": "facebook",
//         "link": "https://www.facebook.com"
//       },
//       {
//         "descripcion": "github",
//         "link": "https://github.com"
//       }
//     ]
//   },
// ]
// const recorreArray = (arr) => {

//     var info = arr.map(function (bar) {
//       return '<p>' + bar.nombre + ' ' + bar.cargo + '</p>' 
//     })
//     var linkface = arr.map(function (itr) {
//       return itr.social_media.map(function (itr2) {
//         if (itr2.link == "https://www.facebook.com" ) {
//           return '<a>' + itr2.link + '</a>'
//         }
//       })
//     })

//   document.getElementById("usuarios").innerHTML = info + linkface;

// }
// recorreArray(usuarios);
// ====================================================================================================


