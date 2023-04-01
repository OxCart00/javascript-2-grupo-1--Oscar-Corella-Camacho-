// Ejercicios de práctica
// 1. Crear una función que reciba como parámetro un número y retorne una promesa que resuelva si el número es par o impar.
function workOne(numero) {
  return new Promise((resolve, reject) => {
    if (typeof numero !== "number") {
      reject("El valor ingresado no es un número");
    } else if (numero % 2 === 0) {
      resolve("El número es par");
    } else {
      resolve("El número es impar");
    }
  });
}

workOne(4)
.then((resultado) => console.log(resultado))
.catch((error) => console.error(error));

// 2. Crear una función que reciba como parámetro un número y retorne una promesa que resuelva si el número es primo o no.

function workTwo(numero) {
  return new Promise((resolve, reject) => {
    if (typeof numero !== "number") {
      reject("El valor ingresado no es un número");
    } else if (numero < 2) {
      resolve("El número no es primo");
    } else {
      for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
          resolve("El número no es primo");
        }
      }
      resolve("El número es primo");
    }
  });
}

workTwo(7)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error));