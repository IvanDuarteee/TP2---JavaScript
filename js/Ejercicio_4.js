// Ejercicio_4

/*Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

const texto = "¿Desea agregar otro número? ";

let suma = 0;

do {
  let numeros = parseInt(prompt("Ingrese el número: "));

  if (isNaN(numeros) == false) {
    suma += numeros;
  } else {
    alert("No es un número, reintente.");
  }
} while (confirm(texto) == true);

alert(suma);
