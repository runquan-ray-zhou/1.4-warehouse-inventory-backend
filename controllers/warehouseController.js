const express = require("express")
const warehouses = express.Router()
const { getAllWarehouses, getOneWarehouse } = require("../queries/warehouse.js")


//Route to get all warehouses
warehouses.get("/", async (req, res) => {
    const listOfWarehouses = await getAllWarehouses() 
    console.log(listOfWarehouses)
    if (listOfWarehouses[0]) {
        res.status(200).json(listOfWarehouses);
    } else {
        res.status(404).json({error: "server error"})
    }
})

//Route to get a single warehouse
warehouses.get("/:id", async (req, res) => {
    const { id } = req.params;
    const currentWarehouse = await getOneWarehouse(id);
    if (currentWarehouse) {
        res.status(200).json(currentWarehouse);
    } else {
        res.status(404).json({error: "server error"})
    }
})

module.exports = warehouses;