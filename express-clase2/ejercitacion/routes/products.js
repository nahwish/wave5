let products = require("../utils/mock");
const express = require("express");

const router = express.Router();

// 1. Retornar todos los productos del array. “/api/products”,


//2. Obtener un producto específico mediante su ID “/api/products/:id”


//3. Agregar un nuevo producto “/api/products”


//4. Cambiar alguna propiedad de un producto en particular ( Puede ser name, price, quantity o el que desees ) “/api/products/:id”,


//5. Eliminar un producto mediante su ID “/api/products/:id”,


module.exports = { router, products };
