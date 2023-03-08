// Ejercicio_1

/* Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje. */

let edad;

edad = parseInt(prompt("Ingrese la edad del interesado/a: "));

switch (true) {
  case (edad >= 18 && edad <= 89):
    alert("Si puedes conducir.");
    break;
  case (edad <= 17 || edad >= 90):
    alert("No puedes conducir.");
    break;
  default :
  alert("Ingresaste un valor incorrecto, reintente.")
  break;
} 
