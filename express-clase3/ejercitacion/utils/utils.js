function searchingLengthProperty(products, key) {
	let lengthResult = products.filter((x) => x[key]).length;

	return lengthResult;
}


module.exports = searchingLengthProperty;
