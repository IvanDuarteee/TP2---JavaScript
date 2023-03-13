// Ejercicio_3

/*Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.*/

let texto = "";
let cadena = "";

while (cadena !== null) {
  cadena = prompt("Ingrese una cadena de texto:");
  if (cadena !== null) {
    texto += cadena + "-";
  }
}

confirm("El resultado de la concatenación es: " + texto.slice(0, -1));
