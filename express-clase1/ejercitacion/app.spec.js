const supertest = require("supertest");
let searchingLengthProperty = require("./utils/utils");
let { products } = require("./routes/Get");
const { app, responseServer } = require("./app");

const api = supertest(app);

let response;
beforeEach(async () => {
	response = await api.get("/api");
});
afterAll(() => {
	responseServer.close();
});
describe("PRIMER GET", () => {
	it("Debe ser un método GET a la ruta '/' ", () => {
		expect(response.req.method).toBe("GET");
		expect(response.res.statusCode).toBe(200);
	});
	it("Debe mostrar el mensaje '¡Hola mundo!' en el navegador", async () => {
		const response = await api.get("/api");
		expect(response.text).toBe("¡Hola mundo!");
	});
});

xdescribe("EXTRA", () => {
	it("Debe crear un array de 3 productos y guardarlo en una variable llamada 'products'", async () => {
		expect(products.length).toBe(3);
	});
	it("El array de objetos creado debe tener: id, name y price", () => {
		expect(searchingLengthProperty(products, "name")).toBe(3);
		expect(searchingLengthProperty(products, "id")).toBe(3);
		expect(searchingLengthProperty(products, "price")).toBe(3);
	});

	it("Debe crear otro método GET a '/products'", async () => {
		let response = await api.get("/api/products");
		expect(response.req.method).toBe("GET");
		expect(response.res.statusCode).toBe(200);
	});
	it("Debe devolver el array de productos creado cuando estémos en la ruta '/products' ", async () => {
		let response = await api.get("/api/products");
		expect(response.body.products.length).toBe(products.length);
	});
});
