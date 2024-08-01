const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.status(200).send("Welcome To My Warehouse Inventory App")
})

module.exports = app;