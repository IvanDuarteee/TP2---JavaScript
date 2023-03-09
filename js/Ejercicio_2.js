//Ejercicio_2

/* Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
*/

let nota = parseInt(
  prompt(
    "Ingrese la nota a calificar, recuerde que la escala notaria va de 0 a 10. ",
    "Ingrese aquí la nota a calificar."
  )
);

let calificación = ["Muy deficiente","Muy deficiente","Muy deficiente","Insuficiente","Insuficiente","Suficiente","Suficiente","Bien","Notable","Notable","Excelente"]


if (nota >= 0 && nota <=10){
    for (i=0;i<calificación.length;i++) {
        if(i==nota) {
            alert("Su nota es: " + calificación[i])
        }
    }
}
else {
    alert("Ingresó un dato incorrecto, reintente.")
}



/*switch (true) {
  case nota >= 0 && nota <= 2:
    alert("Su nota es: Muy deficiente.");
    break;
  case nota >= 3 && nota <= 4:
    alert("Su nota es: Insuficiente.");
    break;
  case nota >= 5 && nota <= 6:
    alert("Su nota es: Suficiente.");
    break;
  case nota == 7:
    alert("Su nota es: Bien.");
    break;
  case nota >= 8 && nota <= 9:
    alert("Su nota es: Notable.");
    break;
  case nota == 10:
    alert("Su nota es: Excelente.");
    break;
  default:
    alert("Ingresó un dato incorrecto, reintente.");
} */


