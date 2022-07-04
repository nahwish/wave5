/**
                        PUSH
 método push() añade uno o más elementos al final de un array y 
 devuelve la nueva longitud del array.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
*/

let colores = ["Rojo", "Naranja", "Azul"];
colores.push("Violeta"); 
console.log(colores); 

colores.push("Gris", "Oro");
console.log(colores);

/**
                          POP
El método pop() elimina el último elemento de un array y lo devuelve.
Este método cambia la longitud del array.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
*/

let series = ['Mad Men','Breaking Bad','The Sopranos'];


let ultimaSerie = series.pop();

console.log(series);
console.log(ultimaSerie);

