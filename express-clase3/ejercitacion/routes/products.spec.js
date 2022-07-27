const supertest = require("supertest");
const { app } = require("../app");
const api = supertest(app);


let productsDB = require("../utils/products");

let deleteResponse;
let productId = 2;
let brandId = 5;
let brand = "Logitech";
let replaceBrand = { name: "Mac" };
let productBackup = productsDB.slice();
let getResponseProduct;
let getResponseBrandResult;
let postResponse;
let putResponse;
let newProduct = {

	name: "Iphon",
	id: 7,
	description: 9,
};


beforeAll(async () => {
	getResponseBrandResult = await api.get(`/api/product/${brand}/1`);
	getResponseBrand = await api.get(`/api/product/:brand/${brandId}`);

	getResponseProduct = await api.get("/api/product");

	responseGetProducts = await api.get("/api/product");
	deleteResponse = await api.delete(`/api/product/${productId}`);
	postResponse = await api.post("/api/product").send(newProduct).expect(200);
	putResponse = await api.put("/api/product/1").send(replaceBrand);

});
afterEach(() => {
	productsDB = productBackup;
});

xdescribe("DELETE", () => {
	it("Debería ser un metodo DELETE a '/product/:id'", async () => {
		expect(deleteResponse.req.method).toBe("DELETE");
		expect(deleteResponse.res.statusCode).toBe(200);
	});

	it("Al eliminar un producto debería devolver un objeto con las propiedades message y product", async () => {

		expect(deleteResponse.body.message).toBeDefined();
		expect(deleteResponse.body.product).toBeDefined();
	});

	it("La propiedad message debe contener el string 'Producto Eliminado'", async () => {
		expect(deleteResponse.body.message).toMatch(/producto eliminado/i);
	});

	it("la propiedad 'product' debe contener el producto eliminado", async () => {
		expect(deleteResponse.body.product.id).toBe(productId);
		expect(typeof deleteResponse.body.product).toBe("object");

		["name", "id", "description", "products"].forEach((property) => {
			expect(deleteResponse.body.product).toHaveProperty(property);

		});
	});
});

xdescribe("GET", () => {
	it("La ruta /product debería mostar el array de objetos", () => {
		expect(getResponseProduct.body.length).toBe(2);
		expect(typeof getResponseProduct.body).toBe("object");
	});
	it("/product/:brand/:productId? deberia responder con un objeto", () => {
		expect(getResponseBrandResult.body).toBeInstanceOf(Object);
		expect(getResponseBrandResult.res.statusCode).toBe(200);
	});
	it("El objeto debería tener las propiedades 'brand,descripcion y product'", () => {
		["brand", "description", "product"].forEach((property) => {
			expect(getResponseBrandResult.body).toHaveProperty(property);
		});
	});
	it("Si no encuentra la marca buscada debería mostrar el mensaje 'Marca no encontrada'", () => {
		expect(getResponseBrand.text).toMatch(/marca no encontrada/i);
	});
});

xdescribe("POST", () => {
	it("/product debería poder agregar un producto", async () => {
		const RouteProducts = await api.get("/api/product");
		const contents = RouteProducts.body.map((pdct) => pdct.name);
		expect(contents).toContain(newProduct.name);
	});

	it("/product cuando agrega un producto, devuelve un objeto con los atributos 'message' y 'brand'", async () => {
		expect(postResponse.body).toBeInstanceOf(Object);
		expect(postResponse.body).toHaveProperty("message");
		expect(postResponse.body).toHaveProperty("brand");
	});
});

xdescribe("PUT", () => {
	it("/product/:id debería poder actualizar el nombre de un producto", () => {
		let brandName = putResponse.body.brandsDB.filter(
			(brnd) => brnd.name === replaceBrand.name
		);
		expect(brandName).toBeDefined();
		expect(putResponse.res.statusCode).toBe(200);
		expect(putResponse.req.method).toBe("PUT");
	});
	it("Si la modificacion se hizo correctamente, debria devolver un objeto con el atributo 'message: Producto Actualizado'", () => {
		expect(putResponse.body.message).toMatch(/producto actualizado/i);
		expect(putResponse.res.statusCode).toBe(200);
	});

});


describe("GET",()=>{

	it("La ruta /product debería mostar el array de objetos", () => {
		expect(getResponseProduct.body.length).toBe(2);
		expect(typeof getResponseProduct.body).toBe('object');
		
	});
	it("/product/:brand/:productId? deberia responder con un objeto", () => {
		expect(getResponseBrandResult.body).toBeInstanceOf(Object);
		expect(getResponseBrandResult.res.statusCode).toBe(200);
	});
	it("El objeto debería tener las propiedades 'brand,descripcion y product'",()=>{
			["brand", "description", "product"].forEach((property) => {
				expect(getResponseBrandResult.body).toHaveProperty(property);
			});
	})
	it("Si no encuentra la marca buscada debería mostrar el mensaje 'Marca no encontrada'",()=>{
		expect(getResponseBrand.text).toMatch(/marca no encontrada/i);
	})
})

describe("POST",()=>{
	it("/product debería poder agregar un producto",async()=>{
		
		const RouteProducts = await api.get("/api/product");
		const contents = RouteProducts.body.map((pdct) => pdct.name);
		expect(contents).toContain(newProduct.name);
	})

		it("/product cuando agrega un producto, devuelve un objeto con los atributos 'message' y 'brand'", async () => {
			expect(postResponse.body).toBeInstanceOf(Object)
			expect(postResponse.body).toHaveProperty('message')
			expect(postResponse.body).toHaveProperty('brand')
		});
})

describe("PUT",()=>{
	it("/product/:id debería poder actualizar el nombre de un producto", () => {
		let brandName = putResponse.body.brandsDB.filter(
			(brnd) => brnd.name === replaceBrand.name
		); 
		expect(brandName).toBeDefined();
		expect(putResponse.res.statusCode).toBe(200);
		expect(putResponse.req.method).toBe("PUT");
	});
	it("Si la modificacion se hizo correctamente, debria devolver un objeto con el atributo 'message: Producto Actualizado'",()=>{
		expect(putResponse.body.message).toMatch(/producto actualizado/i);
		expect(putResponse.res.statusCode).toBe(200);
	})
})
