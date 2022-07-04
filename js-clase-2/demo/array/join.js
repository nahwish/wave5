/**
 * join()
Es una cadena usada para separar cada uno de los elementos del arreglo. 
El separador es convertido a una cadena si es necesario. Si este se omite, 
los elementos del arreglo son separados con una coma (",")
 */


let dias = ["Lunes", "Martes", "Jueves"];

let separadosPorComa = dias.join();
console.log(separadosPorComa); 




let separadosPorGuion = dias.join(" - ");
console.log(separadosPorGuion); 




let todojunto = dias.join('')
console.log(todojunto)



//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join
