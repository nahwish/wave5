/**
En este archivo vamos a implementar diferentes funcionalidades
en este caso, usamos "user" para crear un objeto con información de usuarios
y "auth" para mostrar un mensaje determinado. Éstas funciones middleware
las utilizamos en "/routes/products.js"

que es res.locals? : https://www.geeksforgeeks.org/express-js-res-locals-property/
*/
/**
 * Esta funcion deberia guardar en res.locals.user un objeto con atributos id,name,admin recibidos por body 
 */

function user(req, res, next) {

		next()
	
};


 function auth(req, res,next) {
	
	next()
};

module.exports = {user,auth}