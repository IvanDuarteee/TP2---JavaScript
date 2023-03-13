// Ejercicio_10
/*
Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/ 

var filas = parseInt(prompt("Introduce el número de filas:"));
var columnas = parseInt(prompt("Introduce el número de columnas:"));
var numero = filas * columnas;

document.write("<table border='1'>");
for (var i = 1; i <= filas; i++) {
    document.write("<tr>");
    for (var j = 1; j <= columnas; j++) {
        document.write("<td>" + numero + "</td>");
        numero--;
    }
    document.write("</tr>");
}
document.write("</table>");