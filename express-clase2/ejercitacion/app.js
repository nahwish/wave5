
const express = require("express");
const {router} = require('./routes/products')


const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", router);


app.listen(PORT, console.log(`Listening on http://localhost:${PORT}`));

module.exports = { app };
