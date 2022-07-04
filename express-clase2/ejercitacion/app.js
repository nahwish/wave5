const express = require("express");

const {router}  = require("./routes/products");

const app = express();
const PORT = 3000


app.use(express.json());
// definimos una ruta base
app.use("/api", router);


app.use((req, res) => {
	res.status(404).send("Error 404, page not found");

});


let responseServer = app.listen(
	PORT,
	console.log(`Listening on http://localhost:${PORT}`)
);

module.exports = {
	app,
	responseServer,
};
