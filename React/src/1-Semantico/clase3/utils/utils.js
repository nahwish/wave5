let inputs = [
	{
		name: "email",
		id: "email",
		type: "email",
		value: "",
		tabIndex: 2,
		labelMessage: "Email :",
		placeholder: "ejemplo@mercadolibre.com",
	},
	{
		name: "nombre",
		id: "nombre",
		type: "text",
		value: "",
		labelMessage: "Nombre :",
		placeholder: "ej: Juan/a",
	},
	{
		name: "apellido",
		id: "apellido",
		type: "text",
		value: "",
		labelMessage: "Apellido :",
		placeholder: "ej: Perez",
	},
	{
		name: "telefono",
		id: "telefono",
		type: "number",
		value: "",
		labelMessage: "Teléfono",
		placeholder: "ej: 123456",
	},
];
let select = [
	{
		optionValue: "argentina",
		optionName: "Argentina",
	},
	{
		optionValue: "chile",
		optionName: "Chile",
	},
	{
		optionValue: "colombia",
		optionName: "Colombia",
	},
	{
		optionValue: "mexico",
		optionName: "México",
	},
	{
		optionValue: "venezuela",
		optionName: "Venezuela",
	},
	{
		optionValue: "bolivia",
		optionName: "Bolivia",
	},
	{
		optionValue: "uruguay",
		optionName: "Uruguay",
	},
];
let selectLocal = [
	{
		optionValue: "buenos aires",
		optionName: "Buenos Aires",
	},
	{
		optionValue: "Santiago",
		optionName: "Santiago",
	},
	{
		optionValue: "bogota",
		optionName: "Bogotá",
	},
	{
		optionValue: "mexico df",
		optionName: "México DF",
	},
	{
		optionValue: "caracas",
		optionName: "Caracas",
	},
	{
		optionValue: "sucre",
		optionName: "Sucre",
	},
	{
		optionValue: "montevideo",
		optionName: "Montevideo",
	},
];
let direction = [
	{
		id: "direccion",
		type: "text",
		
		labelMessage: "Dirección :",
		placeholder: "ej: Montevideo",
	},
	{
		id: "numero",
		type: "number",
		
		labelMessage: "Número:",
		placeholder: "ej: 3055",
	},
	{
		id: "cp",
		type: "number",
		
		labelMessage: "CP :",
		placeholder: "ej: 1479",
	},
];
let inputCheck = [
	{
		id: "auto",
		type: "checkbox",
		value: "auto",
		labelMessage: "Auto",
	},
	{
		id: "hogar",
		type: "checkbox",
		value: "hogar",
		labelMessage: "Hogar",
	},
	{
		id: "ropa",
		type: "checkbox",
		value: "ropa",
		labelMessage: "Ropa",
	},
];
let user = [
	{
		id: "password",
		type: "password",
		
		labelMessage: "Contraseña",
	},
	{
		id: "reppeat-pass",
		type: "password",
		
		labelMessage: "Confirmar",
	},
];
let domicilio = [
	{
		id: "recidencial",
		type: "radio",
		value: "recidencial",
		labelMessage: "Residencial",
	},
	{
		id: "laboral",
		type: "radio",
		value: "laboral",
		labelMessage: "Laboral",
	},
];
module.exports = {
	inputs,
	select,
	selectLocal,
	direction,
	inputCheck,
	user,
	domicilio,
};
