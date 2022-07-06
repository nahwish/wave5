const supertest = require("supertest");
const { app } = require("../app");
const api = supertest(app);
const productsDB = require("../utils/products");

let deleteResponse;
let productId = 2;
let productBackup = productsDB.slice();
beforeAll(async () => {
	console.log("antes", productsDB.length);
	responseGetProducts = await api.get("/api/product");
	deleteResponse = await api.delete(`/api/product/${productId}`);
});

describe("DELETE", () => {
	it("Debería ser un metodo DELETE a '/product/:id'", async () => {
		expect(deleteResponse.req.method).toBe("DELETE");
		expect(deleteResponse.res.statusCode).toBe(200);
	});

	it("Al eliminar un producto debería devolver un objeto con las propiedades message y product", async () => {
		expect(deleteResponse.body.message).toBeDefined();
		expect(deleteResponse.body.product).toBeDefined();
	});

	it("La propiedad message debe contener el string 'Producto Eliminado'", async () => {
		expect(deleteResponse.body.message).toBe("Producto Eliminado");
	});

	it("la propiedad 'product' debe contener el producto eliminado", async () => {
		expect(deleteResponse.body.product.id).toBe(productId);
		expect(typeof deleteResponse.body.product).toBe("object");

		["name", "id", "description", "products"].forEach((property) => {
			expect(deleteResponse.body.product).toHaveProperty(property);
		});
	});
});

