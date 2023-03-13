// Ejercicio_8 
/* Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……  */
let num = prompt("Introduce un número (no mayor de 50):");
		if (num <= 50) {
			for (let i = 1; i <= num; i++) {
				for (let j = 1; j <= i; j++) {
					document.write(j);
				}
				document.write("<br>");
			}
		} else {
			alert("El número debe ser menor o igual a 50.");
		}