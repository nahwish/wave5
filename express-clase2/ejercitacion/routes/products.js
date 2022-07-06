const express = require("express");
const router = express.Router();
let brandsDB = require("../utils/products");
const {user,auth} = require("../middleware/admin");

/************************************************************* 
	GET
http://localhost:3000/api/product/Logitech/1
 ************************************************************/

/**
middleware a nivel de rutas: 
definimos una ruta, y le podemos pasar diferente middleares,
en este caso utilizamos las dos funciones que definimos en el archivo
"../middleware/admin"

 */
// esto no tiene test
router.get("/user",user,auth,(req,res)=>{
	console.log(res.locals);
})

router.get("/product", (req, res) => {
	res.json(brandsDB);
});

// Si se encuenta el producto,devuelve un objeto con:
//brand , el nombre de la marca
//description, la descripcion de la marca
//product, el producto entero que corresponde a esa marca
router.get("/product/:brand/:productId?", (req, res) => {
	const { brand, productId } = req.params;
	//const brand = req.params.brand;

	const brandFound = brandsDB.find(
		({ name }) => name.toLowerCase() === brand.toLowerCase()
	);

	if (brandFound) {
		const productFound = brandFound.products.find(
			({ id }) => id === parseInt(productId)
		);

		res.json({
			brand: brandFound.name,
			description: brandFound.description,
			product: productFound,
		});
	} else {
		res.json("Marca no encontrada");
	}
});

/**
POST

http://localhost:3000/api/product
 */
/**
 * El metodo post debe poder agregar un nuevo objeto
 *  con los atributos id,name,description
 * 	al agregarlos, debe responder con un objeto
 *  que contenga los atributos message : "Marca agregada"
 * 	y brand : <nombre de la marca agregada>
 * 	Ej: {message : "Marca agregada",brand: "Iphone"}
 * */

router.post("/product", (req, res) => {
const{ id,name,description} = req.body;

	if(id && name && description){
		brandsDB.push(req.body);
		res.json({
			message: "Marca agregada",
			brand: req.body.name,
		});
	}
	return brandsDB;
});

/**
	PUT
http://localhost:3000/api/product/2
 */
/**
 * Este método deberia buscar el id pasado por params
 * dentro del array de productos y reemplazar el nombre
 * de la brand por el nombre que llega por body
 */
router.put("/product/:id", (req, res) => {
	const id = parseInt(req.params.id);

	const { name } = req.body;


	let productUpdate = brandsDB.map((product) => {
		if (product.id === id) {
			return {
				...product,
				name,
			};
		} else {
			return product;
		}
	});
	brandsDB = productUpdate;

	res.status(200).json({
		message: "Producto Actualizado",
		brandsDB,
	});
});


/**
		DELETE
http://localhost:3000/api/product/1
 */
router.delete("/product/:id", (req, res) => {
	let id = parseInt(req.params.id);

	let productFound = brandsDB.find((product) => product.id === id);
	//let productFilter = brandsDB.filter((product) => product.id !== id);

	brandsDB = brandsDB.filter((product) => product.id !== id);
console.log('brandDB',brandsDB)
	res.status(200).json({
		message: "Producto Eliminado",
		product: productFound,
	});
});




//expressjs.com/es/starter/hello-world.html
module.exports = { router };
