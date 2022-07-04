/***********************************************************
                              Objetos

JavaScript está diseñado en un paradigma simple basado en objetos.
Un objeto es una colección de propiedades, y una propiedad es una asociación 
entre un nombre (o clave) y un valor.
 ************************************************************/

let auto = {
	patente: "AC 134 DD",
};

let producto = {
	nombre: "Teclado",
	id: "xdf-34",
};

console.log(producto.nombre);
console.log(producto.apellido);

// El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método.
let tenista = {
	nombre: "Roger",
	edad: 38,
	activo: true,
	saludar: function () {
		return "¡Hola! Me llamo Roger";
	},
};

// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects
