/*************************************************
                                filter()
  
  filter() llama a la función callback  sobre cada elemento del 
  array, y construye un nuevo array con todos los valores para los 
  cuales  callback devuelve un valor verdadero.

 *************************************************/

const array = [
	{ id: 1, username: "Mapper" },
	{ id: 2, username: "Finder" },
	{ id: 3, username: "Eaching" },
];

//filtro el objeto cuyo id sea mayor a 2
const filtered = array.filter(function (element) {
	return element.id > 2;
});

console.log(filtered)


// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter