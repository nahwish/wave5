/**
En este archivo vamos a implementar diferentes funcionalidades
en este caso, usamos "user" para crear un objeto con información de usuarios
y "auth" para mostrar un mensaje determinado. Éstas funciones middleware
las utilizamos en "/routes/products.js"

que es res.locals? : https://www.geeksforgeeks.org/express-js-res-locals-property/
*/
/**
 * Esta funcion deberia guardar en locals.user un objeto
 */
function user(req, res, next) {
	
	res.locals.user = {
		id: 1,
		name: "Irunga",
		admin: true,
	};
	next();
};


 function auth(req, res,next) {
	let { admin, name } = res.locals.user;

	if (admin) {
	
    res.send(`El usuario ${name}, es admin`);
		next()
	} else {
		console.log(`El usuario ${name}, no es admin`);
  
		res.send(`Error Auth`);
	}
};

module.exports = {user,auth}