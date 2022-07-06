let products = require("../utils/mock");
const express = require("express");

const router = express.Router();

// 1. Retornar todos los productos del array. “/api/products”,
router.get("/products", (req, res) => {
	res.json(products).status(200);
});

//2. Obtener un producto específico mediante su ID “/api/products/:id”
router.get("/products/:id", (req, res) => {
	const { id } = req.params;
	const product = products.filter((oneProduct) => oneProduct.id == id);

	try {
		if (product.length == 0) {
			throw Error;
		}
		res.json(product).status(200);
	} catch (error) {
		res.status(404).send("Not found");
	}
});

//3. Agregar un nuevo producto “/api/products”
router.post("/products/add", (req, res) => {
	const name = req.body.name || null;
	const id = products.length + 1;
	const price = req.body.price;
	const quantity = req.body.quantity;
	const colors = req.body.colors;

	let newProduct = { name, id, price, quantity, colors };

	try {
		products.push(newProduct);
		res.send(`Product ${name} added!!`);
	} catch (error) {
		console.log(error);
		res.status(200).send("Error");
	}
});

//4. Cambiar alguna propiedad de un producto en particular ( Puede ser name, price, quantity o el que desees ) “/api/products/:id”,
router.put("/products/:id/:name", (req, res) => {
	const { name, id } = req.params;
	let changes = products.find((x) => x.id == id);
	changes.name = name;
	res.json(changes);
});

//5. Eliminar un producto mediante su ID “/api/products/:id”,
router.delete("/products/:id", (req, res) => {
	let id = Number(req.params.id);

	products = products.filter((prdct) => prdct.id !== id);

	try {
		res.json(products);
	} catch (error) {
		res.status(200).send("Error");
	}
});

module.exports = { router, products };
