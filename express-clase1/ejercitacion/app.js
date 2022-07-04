const express = require("express");
const { router } = require("./routes/Get");

const app = express();
const PORT = 3000


app.use(express.json());

app.use("/api", router);

let responseServer = app.listen(
	PORT,
	console.log(`Listening on http://localhost:${PORT}`)
);

module.exports = {
	app,
	responseServer,
};
