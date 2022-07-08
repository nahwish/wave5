import Form from "./1-Semantico/clase2/homework/form";
import Home from "./1-Semantico/clase1/homework/index";
import AriaExample from "./1-Semantico/clase3/demo/index";
import ProductList from './2-Spot1/homework/ProductList'
import products from './2-Spot1/homework/utils/products'
const React = require("react");

function App() {
	
return (
	<>
		<Home />
		<Form />
		<AriaExample />
		<ProductList {...products}/>
	</>
);
}
export default App;
