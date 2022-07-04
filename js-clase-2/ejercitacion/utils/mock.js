let names = [
	"Macbook",
	"Iphone",
	"Pendrive",
	"Headset",
	"Mouse",
	"Tablet",
	"USB adaptor",
	"Keyboard",
	"Gamepad",
	"Monitor",
];
let products_without_color = [
	{ name: "Pendrive", price: 10, quantity: 10, colors: [], id: 3 },
	{ name: "USB adaptor", price: 5, quantity: 0, colors: [], id: 7 },
	{ name: "Monitor", price: 200, quantity: 3, colors: [], id: 10 },
];
let products_with_color_pink = [
	{ name: "Keyboard", price: 30, quantity: 35, colors: ["pink"], id: 8 },
];
let products_with_color_black = [
	{
		name: "Macbook",
		price: 1300,
		quantity: 40,
		colors: ["silver", "black", "white"],
		id: 1,
	},
	{
		name: "Headset",
		price: 50,
		quantity: 0,
		colors: ["black"],
		id: 4,
	},
	{
		name: "Mouse",
		price: 20,
		quantity: 5,
		colors: ["white", "black", "blue"],
		id: 5,
	},
	{
		name: "Tablet",
		price: 500,
		quantity: 20,
		colors: ["white", "black"],
		id: 6,
	},
	{
		name: "Gamepad",
		price: 30,
		quantity: 25,
		colors: ["black", "silver"],
		id: 9,
	},
];





module.exports = {
	
	names,
	products_with_color_black,
	products_with_color_pink,
	products_without_color,
};
