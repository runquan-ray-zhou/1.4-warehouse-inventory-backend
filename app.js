const cors = require("cors");
const express = require("express");

const app = express()


app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Welcome To My Warehouse Inventory App")
})

const warehousesController = require("./controllers/warehouseController.js")
app.use("/warehouses", warehousesController);

app.get("*", (req, res) => {
    res.status(404).send("Page not found");
})

module.exports = app;