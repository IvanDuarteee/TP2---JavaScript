// Ejercicio_11

let nombre1 = prompt("Introduce el nombre de la primera persona:");
		let edad1 = parseInt(prompt("Introduce la edad de " + nombre1 + ":"));

		let nombre2 = prompt("Introduce el nombre de la segunda persona:");
		let edad2 = parseInt(prompt("Introduce la edad de " + nombre2 + ":"));

		let nombre3 = prompt("Introduce el nombre de la tercera persona:");
		let edad3 = parseInt(prompt("Introduce la edad de " + nombre3 + ":"));

		let mayor = Math.max(edad1, edad2, edad3);

		if (mayor == edad1) {
			document.write("El mayor es: " + nombre1);
		} else if (mayor == edad2) {
			document.write("El mayor es: " + nombre2);
		} else {
			document.write("El mayor es: " + nombre3);
		}