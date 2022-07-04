const {
	names,
	products_with_color_black,
	products_with_color_pink,
	products_without_color,
} = require("../ejercitacion/utils/mock");

const {products}= require('../ejercitacion/utils/products');

const {
	addingIdToProduct,
	existingProducts,
	deleteProduct,
	addProduct,
	colorsLength,
	matchingColors,
	searchID,
	returningTheNames,
	showHigherPrice,
} = require("../ejercitacion/exercise");













let mockProduct;
beforeEach(() => {
	mockProduct = products.slice();
});

describe("PUNTO NÚMERO 1", () => {
	it("addingIdToProduct debe ser una función ", () => {
		expect(typeof addingIdToProduct).toBe("function");
	});

	it("Debe agregar los id correctamente", () => {
		let haveID = mockProduct.find((product) => product.id);
		expect(haveID).toBeFalsy();

		let nowHaveID = addingIdToProduct().map((product) => product.id);
		expect(nowHaveID).toHaveLength(10);
	});

	it("Debe ser un id único,empezando por el número 1", () => {
		let compareID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		let id = addingIdToProduct(mockProduct).map((product) => product.id);
		expect(id).toEqual(compareID);
	});
});

describe("PUNTO NÚMERO 2", () => {
	it("returningTheNames debe ser una función ", () => {
		expect(typeof returningTheNames).toBe("function");
	});
	it("Debe retornar un array con el nombre de los productos", () => {
		expect(returningTheNames(mockProduct)).toEqual(names);
		expect(returningTheNames(mockProduct)).toHaveLength(10);
	});
});

describe("PUNTO NÚMERO 3", () => {
	it("searchID debe ser una función ", () => {
		expect(typeof searchID).toBe("function");
	});
	it("Debe retornar el producto con el id que le pase por parámetro", () => {
		let obj = { name: "Pendrive", price: 10, quantity: 10, colors: [], id: 3 };
		let obj1 = { name: "Monitor", price: 200, quantity: 3, colors: [], id: 10 };
		expect(searchID(3)).toEqual(obj);
		expect(searchID(10)).toEqual(obj1);
	});
	describe("Extra", () => {
		it('Si no existe el id pasado por parametro, debe retornar "no hubo coincidencias"', () => {
			expect(searchID(15)).toBe("no hubo coincidencias");
		});
	});
});

describe("PUNTO NÚMERO 4", () => {
	it("matchingColors debe ser una función", () => {
		expect(typeof matchingColors).toBe("function");
	});
	it("Debe devolver un array de objetos (productos) que contengan el color pasado por parámetro", () => {
		expect(matchingColors("black")).toEqual(products_with_color_black);
		expect(matchingColors("pink")).toEqual(products_with_color_pink);
	});
});
describe("PUNTO NÚMERO 5", () => {
	it("colorsLength debe ser una función", () => {
		expect(typeof colorsLength).toBe("function");
	});
	it("Debe retornar los productos que no tengan color", () => {
		expect(colorsLength(mockProduct)).toEqual(products_without_color);
	});
});

describe("PUNTO NÚMERO 6", () => {
	it("addProduct debe ser una función", () => {
		expect(typeof addProduct).toBe("function");
	});

	it("Debe poder agregar un producto nuevo al array de productos", () => {
		let newObj = {
			name: "Benito",
			price: 100,
			quantity: 5,
			colors: ["black", "white"],
		};
		addProduct(newObj);
		expect(products).toHaveLength(11);
	});

	it("Debe tener todas las propiedades", () => {
		let newObj = {
			name: "Benito",
			price: 100,
			colors: ["black", "white"],
		};
		let newObj1 = {
			name: "Benito",
			price: 100,
		};
		addProduct(newObj);
		expect(products).toHaveLength(11);
		addProduct(newObj1);
		expect(products).toHaveLength(11);
	});
});

describe("PUNTO NÚMERO 7", () => {
	it("deleteProduct debe ser una función", () => {
		expect(typeof deleteProduct).toBe("function");
	});
	it("Debe poder eliminar productos con quantity 0 correctamente", () => {
		expect(deleteProduct(products)).toHaveLength(9);
	});
});

describe("PUNTO NÚMERO 8", () => {
	it("existingProducts debe ser una función", () => {
		expect(typeof existingProducts).toBe("function");
	});
	it("debe retornar la suma de stock (quantity) de todos los productos", () => {
		let quantityProduct = [
			{ id: 1, quantity: 5 },
			{ id: 2, quantity: 5 },
		];
		let quantityProduct1 = [
			{ id: 1, quantity: 15 },
			{ id: 2, quantity: 5 },
		];
		let quantityProduct2 = [
			{ id: 1, quantity: 100 },
			{ id: 2, quantity: 350 },
		];
		expect(existingProducts(quantityProduct)).toBe(10);
		expect(existingProducts(quantityProduct1)).toBe(20);
		expect(existingProducts(quantityProduct2)).toBe(450);
	});
});
describe("PUNTO 9", () => {
	it("showHigherPrice debe ser una función", () => {
		expect(typeof showHigherPrice).toBe("function");
	});
	it("Debe filtrar por el precio pasado por parámetro y devolver los productos que coincidan", () => {
		expect(showHigherPrice(products, 500).length).toBe(2);
		expect(showHigherPrice(products, 1000).length).toBe(1);
		expect(showHigherPrice(products, 5000).length).toBe(0);
		expect(showHigherPrice(products, 50).length).toBe(4);
	});
});
