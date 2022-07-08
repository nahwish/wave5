import Integrador from "./clase4";
const { render, screen } = require("@testing-library/react");

beforeEach(() => render(<Integrador />));
let paises = [
	"Argentina",
	"Uruguay",
	"Chile",
	"Colombia",
	"México DF",
	"Venezuela",
	"Bolivia",
];
let localidad = [
	"Buenos Aires",
	"Santiago",
	"Bogotá",
	"México DF",
	"Caracas",
	"Sucre",
	"Montevideo",
];
xdescribe("PUNTO 1", () => {
	describe("Implementar 3 inputs y 3 labels", () => {
		it('Deben existir 3 inputs cuyos labels sean "nombre", "apellido" y "teléfono" ', () => {
			let option = ["nombre", "apellido", "teléfono"];
			
			option.forEach((local) => {
				var regex = new RegExp(local, "i");
				expect(screen.getByLabelText(regex)).toBeInTheDocument();
			});
		});
	});
	xdescribe("Inputs 'Nombre' y 'Apellido'", () => {
		it("Los inputs 'Nombre' y 'Apellido' debe ser tipo 'text' ", () => {
			expect(screen.getByLabelText(/nombre/i).type).toMatch(/text/);
			expect(screen.getByLabelText(/apellido/i).type).toMatch(/text/);
		});
		it("El input 'Nombre' debe tener como placeholder 'ej: Juan/a'", () => {
			let placeHolder = screen.getByPlaceholderText("ej: Juan/a");
			expect(placeHolder).toBeDefined();
		});
		it("El input 'Apellido' debe tener como placeholder 'ej: Perez'", () => {
			let placeHolder = screen.getByPlaceholderText("ej: Perez");
			expect(placeHolder).toBeDefined();
		});
	});

	xdescribe("Input teléfono", () => {
		it("El input debe ser de tipo 'number' y con id 'telefono' ", () => {
			let labelTag = screen.getByLabelText(/teléfono/i);
			expect(labelTag.type).toMatch(/number/i);
			expect(labelTag.id).toMatch(/telefono/);
		});
		it("El input debe tener como placeholder 'ej: 123456'", () => {
			let placeHolder = screen.getByPlaceholderText("ej: 123456");
			expect(placeHolder).toBeDefined();
		});
	});
});
xdescribe("PUNTO 2", () => {
	describe("Implementar un Select con opciones de paises", () => {
		it("Select debe tener un label 'Pais' ", () => {
			expect(screen.getByLabelText(/pais/i)).toBeInTheDocument();
		});
		it("Las opciones del select deben contener los 7 paises pedidos ", () => {
			paises.forEach((pais) => {
				var regex = new RegExp(pais, "i");

				expect(screen.queryByText(regex)).toBeInTheDocument();
			});
		});
		it("Cada opción debería tener un id con el nombre del país", () => {
			paises.forEach((pais) => {
				var regex = new RegExp(pais, "i");
				expect(screen.queryByText(regex).id).toBe(pais);
			});
		});
	});
});
xdescribe("PUNTO 3", () => {
	describe("Implementar un Select con opciones de 'Localidades' ", () => {
		it("Select debe tener un label con 'Localidad' ", () => {
			expect(screen.getByLabelText(/localidad/i)).toBeInTheDocument();
		});

		it("Las opciones del select deben contener las capitales de los paises", () => {
			localidad.forEach((local) => {
				var regex = new RegExp(local, "i");
				expect(screen.queryByText(regex)).toBeInTheDocument();
			});
		});
		it("Cada opción debería tener un id con el nombre de la localidad", () => {
			localidad.forEach((local) => {
				var regex = new RegExp(local, "i");
				expect(screen.queryByText(regex).id).toBe(local);
			});
		});
	});
});
xdescribe("PUNTO 4", () => {
	describe("Implementar 3 inputs con sus respectivos labels", () => {
		it("Deben existir 3 inputs cuyos labels sean 'Dirección', 'Número' y 'CP' respectivamente ", () => {
			let options = ["Dirección", "Número", "CP"];

			options.forEach((local) => {
				var regex = new RegExp(local, "i");
				expect(screen.getByLabelText(regex)).toBeInTheDocument();
			});
		});
	});
	describe("Placeholder", () => {
		it("El input Dirección debe tener como placeholder 'ej: Montevideo'", () => {
			let placeHolder = screen.getByPlaceholderText("ej: Montevideo");
			expect(placeHolder).toBeDefined();
		});
		it("El input Número debe tener como placeholder 'ej: 3055'", () => {
			let placeHolder = screen.getByPlaceholderText("ej: 3055");
			expect(placeHolder).toBeDefined();
		});
		it("El input 'CP' debe tener como placeholder 'ej: 1479'", () => {
			let placeHolder = screen.getByPlaceholderText("ej: 1479");
			expect(placeHolder).toBeDefined();
		});
	});
	describe("Tipo de inputs", () => {
		it("Los inputs 'Número' y 'CP' deben ser de tipo 'number' ", () => {
			let options = ["Número", "CP"];

			options.forEach((local) => {
				var regex = new RegExp(local, "i");
				expect(screen.getByLabelText(regex).type).toMatch(/number/);
			});
		});
		it("El input Dirección debe ser tipo 'text' ", () => {
			let labelTag = screen.getByLabelText(/dirección/i);
			expect(labelTag.type).toMatch(/text/);
		});
	});

	describe("Agregando un id a cada input", () => {
		it("Los inputs 'Número' y 'cp' deben tener como id 'numero' y 'cp' respectivamente", () => {
			expect(screen.getByLabelText(/número/i).id).toMatch("numero");
			expect(screen.getByLabelText(/cp/i).id).toMatch("cp");
		});
		it("El input Dirección debe tener id 'direccion'", () => {
			expect(screen.getByLabelText(/dirección/i).id).toMatch(/direccion/);
		});
	});
});
xdescribe("PUNTO 5", () => {
	it("Deben existir 3 inputs cuyos labels sean 'Auto','Hogar' y 'Ropa' respectivamente ", () => {
		let options = ["Auto", "Hogar", "Ropa"];

		options.forEach((local) => {
			var regex = new RegExp(local, "i");
			expect(screen.getByLabelText(regex)).toBeInTheDocument();
		});
	});
	it("Los 3 inputs deben ser de tipo 'checkbox' y con id 'auto','hogar' y 'ropa' respectivamente ", () => {
		let option = ["auto", "hogar", "ropa"];

		option.forEach((local) => {
			var regex = new RegExp(local, "i");
			expect(screen.getByLabelText(regex).id).toBe(local);
		});
	});
});
xdescribe("PUNTO 6", () => {
	describe("Implementar 3 inputs y 3 labels", () => {
		it("Deben existir 3 inputs cuyos labels sean 'email','Contraseña' y 'Confirmar' ", () => {
			let options = ["email", "Contraseña", "Confirmar"];

			options.forEach((local) => {
				var regex = new RegExp(local, "i");
				expect(screen.getByLabelText(regex)).toBeInTheDocument();
			});
		});
	});
	describe("Inputs 'Contraseña' y 'Confirmar' ", () => {
		it("Los inputs 'Contraseña' y 'confirmar' deben ser de tipo 'password' ", () => {
			expect(screen.getByLabelText(/contraseña/i).type).toBe("password");
			expect(screen.getByLabelText(/confirmar/i).type).toBe("password");
		});
	});
	describe("Input email", () => {
		it("El input 'email' debe ser de tipo 'email' ", () => {
			expect(screen.getByLabelText(/email/i).type).toBe("email");
		});
		it("El input del email debe tener como placeholder 'ejemplo@mercadolibre.com'", () => {
			let placeHolder = screen.getByPlaceholderText("ejemplo@mercadolibre.com");
			expect(placeHolder).toBeDefined();
		});
	});
});
xdescribe("PUNTO 7", () => {
	describe("Implementar 2 inputs y 2 labels", () => {
		it("Deben existir 2 inputs cuyos labels sean 'Residencial' y 'Laboral' ", () => {
			let options = ["Residencial", "Laboral"];

			options.forEach((local) => {
				var regex = new RegExp(local, "i");
				expect(screen.getByLabelText(regex)).toBeInTheDocument();
			});
		});
	});
	describe("Tipo de Inputs", () => {
		it("Los inputs 'Residencial' y 'Laboral' deben ser de tipo 'radio' ", () => {
			expect(screen.getByLabelText(/laboral/i).type).toBe("radio");
			expect(screen.getByLabelText(/residencial/i).type).toBe("radio");
		});
	});
});
