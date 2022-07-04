// VAR vs LET
var saludarConVar = "hey, hola var --->";
let saludarConLet = "hey, hola let --->";

if (true) {
	var saludarConVar = "hey var, sobreescribo el mensaje <----";
	let saludarConLet = "hey! soy un nuevo saludarConLet <----";

	// console.log(saludarConLet);
	// console.log(saludarConVar);
}

 console.log(saludarConVar);
 console.log(saludarConLet);
