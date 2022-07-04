const { it, expect } = require("@jest/globals");
const { calculatePrice } = require("./index");

describe("Fundamentos js", () => {
	describe("Debe devolver un string con el costo de envio y el precio total", () => {
		it("CalculatePrice debe ser una función", () => {
			expect(typeof calculatePrice).toBe("function");
		});
		it("Si el precio es menor a 2000, el costo de envío debe ser 300", () => {
			expect(calculatePrice("play", 1999)).toMatch(/300/);
			expect(calculatePrice("tv", 50)).toMatch(/300/);
		});
		it("Si el precio es mayor a 2000 y menor a 4000 el costo de envío debe ser 500", () => {
			expect(calculatePrice("xbox", 2500)).toMatch(/500/);
			expect(calculatePrice("smart", 3999)).toMatch(/500/);
		});
		it("Si el precio es mayor a 4000 el costo de envío debe ser 700", () => {
			expect(calculatePrice("xbox", 4500)).toMatch(/700/);
			expect(calculatePrice("smart", 5999)).toMatch(/700/);
			expect(calculatePrice("smart", 999)).not.toMatch(/700/);
		});
	});
	xdescribe("El precio total debe ser la suma del precio del producto + el costo de envío", () => {
		it("Los productos con precio menor a 2000 deben sumar 300 de envío al precio final", () => {
			expect(calculatePrice("PSP", 1500)).toMatch(/1800/);
			expect(calculatePrice("PSP", 700)).toMatch(/1000/);
			expect(calculatePrice("PSP", 200)).toMatch(/500/);
		});
		it("Los productos con precio entre 2000 y 4000 deben sumar 500 de envío al precio final", () => {
			expect(calculatePrice("PSP", 3500)).toMatch(/4000/);
			expect(calculatePrice("PSP", 2700)).toMatch(/3200/);
			expect(calculatePrice("PSP", 2200)).toMatch(/2700/);
		});
		it("Los productos con precio mayor a 4000 deben sumar 700 de envío al precio final", () => {
			expect(calculatePrice("PSP", 4500)).toMatch(/5200/);
			expect(calculatePrice("PSP", 5000)).toMatch(/5700/);
			expect(calculatePrice("PSP", 10000)).toMatch(/10700/);
		});
	});
	
	
	xdescribe("Extra", () => {
		it('Si el precio es 0 o un numero negativo, debe retornar el string "Error" ', () => {
			expect(calculatePrice("switch", -5)).toMatch(/Error/i);
			expect(calculatePrice("switch", 0)).toMatch(/Error/i);
		});
		it('Debe retornar el string "ingresar ambos parámetros", si falta alguno de los dos parámetros', () => {
			expect(calculatePrice("switch")).toMatch(/ingresar ambos parámetros/i);
			expect(calculatePrice(200)).toMatch(/ingresar ambos parámetros/i);
		});
			it('Debe retornar el string "ingresar un nombre válido" si el primer parámetro no es un string', () => {
				expect(calculatePrice(200, 3000)).toMatch(/ingresar un nombre válido/i);
				expect(calculatePrice(["tablet"], 3000)).toMatch(
					/ingresar un nombre válido/i
				);
			});
	});
});
