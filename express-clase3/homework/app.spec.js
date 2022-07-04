const supertest = require("supertest");
const products = require("./utils/mock");
const { app } = require("./app");

const api = supertest(app);

let responseGetProducts;
let productID;
let mockBackUp = products.slice();

beforeEach(async () => {
	responseGetProducts = await api.get("/api/products");
	productID = await api.get("/api/products/2");
});

describe("PUNTO 1", () => {
	it("Debe ser un método GET a '/api/products'", async () => {
		expect(responseGetProducts.req.method).toBe("GET");
		expect(responseGetProducts.res.statusCode).toBe(200);
	});

	it("Debe retornar todos los productos del Array", () => {
		expect(responseGetProducts.body.length).toBe(mockBackUp.length);
	});
});
describe("PUNTO 2", () => {
	it("Debe ser un método GET a '/api/products/:id'", async () => {
	
		expect(productID.req.method).toBe("GET");
		expect(productID.res.statusCode).toBe(200);
	});

	it("Al pasarle un id, debe mostrar el producto correspondiente con ese id", async () => {
		let idNumber = 2;
	
		const idProduct = productID.body.find((x) => x.id == idNumber);
		expect(idProduct.id).toBe(idNumber);
		expect(productID.body).toHaveLength(1);
	});
});

xdescribe("PUNTO 3", () => {
	it("Debería ser un método POST a '/products/add'", async () => {
		const paramsRoute = await api.post("/api/products/add");
		expect(paramsRoute.req.method).toBe("POST");
		expect(paramsRoute.res.statusCode).toBe(200);
	});

	it("Debe agregar correctamente un nuevo producto", async () => {
		let newProduct = {
			name: "Iphon",
			price: 800,
			quantity: 9,
			colors: ["pink", "red"],
		};
		
		await api.post("/api/products/add").send(newProduct).expect(200);
		const RouteProducts = await api.get("/api/products");
		const contents = RouteProducts.body.map((pdct) => pdct.name);
	

		console.log('nombre',contents)
		expect(contents).toContain(newProduct.name);
	});
});

xdescribe("PUNTO 4", () => {
	it("Debe ser un metodo PUT a '/products/:id/:name'", async () => {
		const paramsRoute = await api.put("/api/products/2/phone");
		expect(paramsRoute.req.method).toBe("PUT");
		expect(paramsRoute.res.statusCode).toBe(200);
	});

	it("Debe poder modificar algun atributo del array de productos y devolver SOLO el objeto entero modificado", async () => {
		let newName = "phone";
		let id = 2;
		const changedProductResponse = await api.put(`/api/products/${id}/${newName}`);
		const changedProductName = changedProductResponse.body.name;
		expect(changedProductName).toContain(newName);

		const aFoundProduct = await api.get(`/api/products/${id}`);
		let productFoundToRename = aFoundProduct._body.find((x) => x);

		expect(productFoundToRename.name).toBe(newName);
	});
});

xdescribe("PUNTO 5", () => {
	it("Debe ser un metodo DELETE a '/products/:id'", async () => {
		const deleteResponse = await api.delete("/api/products/2");
		expect(deleteResponse.req.method).toBe("DELETE");
		expect(deleteResponse.res.statusCode).toBe(200);
	});

	it("La ruta de la aplicación debe ser '/products/:id' ", async () => {
		let id = 4;

		const contents = responseGetProducts.body.map((pdct) => pdct.id);
		expect(contents).toContain(id);

		const paramsRoute = await api.delete(`/api/products/${id}`);
		const showId = paramsRoute.body.map((pdct) => pdct.id);
		expect(showId).not.toContain(id);
	});
});
