import Home from "../index"
const { render, screen } = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");


beforeEach(() => render(<Home />));

xdescribe("PUNTO 1", () => {
	it("Debería existir una etiqueta 'nav'", () => {
		expect(screen.getByRole("navigation")).toBeInTheDocument();
	});

	it("Debería existir una etiqueta 'header' con el role 'banner'", () => {
		let bannerRole = screen.getByRole("banner");
		expect(bannerRole).toBeInTheDocument();
	});
	it("Debería existir una etiqueta 'main' ", () => {
		expect(screen.getByRole("main")).toBeInTheDocument();
	});
});

xdescribe("PUNTO 2", () => {
	it("Debería existir la etiqueta 'section' con el role 'section' ", () => {
		let sectionTag = screen.getByRole("section");
		expect(sectionTag).toBeInTheDocument();
	});
	it("Debería existir la etiqueta 'article'", () => {
		let sectionTag = screen.getByRole("article");
		expect(sectionTag).toBeInTheDocument();
	});

	it("Debería existir la etiqueta 'figure'", () => {
		let sectionTag = screen.getByRole("figure");
		expect(sectionTag).toBeInTheDocument();
	});
	it("Debería existir la etiqueta 'img'", () => {
		let sectionTag = screen.getByRole("img");
		expect(sectionTag).toBeInTheDocument();
	});
});
xdescribe('PUNTO 3',()=>{
	it("Debería existir la etiqueta 'footer'", () => {
		let sectionTag = screen.getByRole("contentinfo");
		expect(sectionTag).toBeInTheDocument();
	});

})

