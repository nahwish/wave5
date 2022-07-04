const express = require("express");
const router = express.Router();
let brandsDB = require("../utils/products");
const {user,auth} = require("../middleware/admin")
/************************************************************* 
	GET
http://localhost:3000/api/product/Logitech/1
 ************************************************************/


router.get("/product", (req, res) => {
	res.json(brandsDB);
});


/**
middleware a nivel de rutas: 
definimos una ruta, y le podemos pasar diferente middleares,
en este caso utilizamos las dos funciones que definimos en el archivo
"../middleware/admin"

 */
router.get("/user",user,auth,(req,res)=>{
	console.log(res.locals)
})




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
		res.send("Marca no encontrada");
	}
});

/**
POST

http://localhost:3000/api/product
 */
router.post("/product", (req, res) => {
//const{ id,name,description} = req.body;

	brandsDB.push(req.body);
	res.json({
		message: "Marca agregada",
		brand: req.body.name,
	});
});

/**
	PUT
http://localhost:3000/api/product/2
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
	let productFilter = brandsDB.filter((product) => product.id !== id);

	brandsDB = productFilter;

	res.status(200).json({
		message: "Producto Eliminado",
		product: productFound,
	});
});




//expressjs.com/es/starter/hello-world.html
module.exports = { router };
