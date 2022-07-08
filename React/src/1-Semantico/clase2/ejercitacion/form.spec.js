import Form from "./form";
const { render, screen } = require("@testing-library/react");



beforeEach(() => render(<Form />));

xdescribe("PUNTO 1", () => {
	describe("input Name", () => {
		it("Debe existir un input cuyo label sea 'name' ", () => {
			expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
		});
		it("El input debe ser tipo 'text' y con id 'name' ", () => {
			let labelTag = screen.getByLabelText(/name/i);
			expect(labelTag.type).toMatch(/text/);
			expect(labelTag.id).toMatch(/name/);
			
		});
		
	});
	describe("input email", () => {
		it("Debe existir un input cuyo label sea 'email' ", () => {
			expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
		});
		it("El input debe ser de tipo 'email' y con id 'email' ", () => {
			let labelTag = screen.getByLabelText(/email/i);
			expect(labelTag.type).toMatch(/email/);
			expect(labelTag.id).toMatch(/email/);
		});
	});
	describe("input phone", () => {
		it("Debe existir un input cuyo label sea 'phone' ", () => {
			expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
		});
		it("El input debe ser de tipo 'number' y con id 'phone' ", () => {
			let labelTag = screen.getByLabelText(/phone/i);
			expect(labelTag.type).toMatch(/number/i);
			expect(labelTag.id).toMatch(/phone/);
		});
	});
});
xdescribe('Punto 2',()=>{
	it("Select debe tener un label asociado cuyo string debe ser 'countries' ",()=>{
		expect(screen.getByLabelText(/countries/i)).toBeInTheDocument()
	})
	it("Las opciones del select deben contener los 7 paises pedidos ",()=>{
		expect(screen.queryByText(/Argentina/i)).toBeInTheDocument()
		expect(screen.queryByText(/Chile/i)).toBeInTheDocument()
		expect(screen.queryByText(/Uruguay/i)).toBeInTheDocument()
		expect(screen.queryByText(/Bolivia/i)).toBeInTheDocument()
		expect(screen.queryByText(/Colombia/i)).toBeInTheDocument()
		expect(screen.queryByText(/México/i)).toBeInTheDocument()
		expect(screen.queryByText(/Venezuela/i)).toBeInTheDocument()
		
	})
})
xdescribe('Punto 3',()=>{
	describe('Radio Button Envio',()=>{
		it("Debe existir un input cuyo label sea 'Envio' ", () => {
			expect(screen.getByLabelText(/envio/i)).toBeInTheDocument();
		});
		it("El input debe ser de tipo radio ", () => {
			let inputType = screen.getByLabelText(/envio/i);
			expect(inputType.type).toMatch(/radio/i);
		});
		})
		describe('Radio Button Retiro',()=>{
			it("Debe existir un input cuyo label diga 'Retiro' ", () => {
				expect(screen.getByLabelText(/retiro/i)).toBeInTheDocument();
			});
			it("El input debe ser de tipo radio  ", () => {
				let inputType = screen.getByLabelText(/retiro/i);
				expect(inputType.type).toMatch(/radio/i);
			});
		})
})
xdescribe('Punto 4',()=>{
	describe('checkbox Bicicleta',()=>{
		it("Debe existir un input cuyo label sea 'Bicicleta' ", () => {
		expect(screen.getByLabelText(/bicicleta/i)).toBeInTheDocument();
	});
	it("El input debe ser de tipo checkbox  ", () => {
		let inputType = screen.getByLabelText(/bicicleta/i);
		expect(inputType.type).toMatch(/checkbox/i);
	});
	})
	describe('checkbox Reloj',()=>{
		it("Debe existir un input cuyo label sea 'Reloj' ", () => {
			expect(screen.getByLabelText(/reloj/i)).toBeInTheDocument();
		});
	it("El input debe ser de tipo checkbox  ", () => {
		let inputType = screen.getByLabelText(/reloj/i);
		expect(inputType.type).toMatch(/checkbox/i);
	});
	})
	describe('checkbox Notebook',()=>{
		it("Debe existir un input cuyo label sea 'Notebook' ", () => {
			expect(screen.getByLabelText(/notebook/i)).toBeInTheDocument();
		});
	it("El input debe ser de tipo checkbox  ", () => {
		let inputType = screen.getByLabelText(/notebook/i);
		expect(inputType.type).toMatch(/checkbox/i);
	});
	})
})