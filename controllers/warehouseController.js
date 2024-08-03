const express = require("express")
const warehouses = express.Router()
const { getAllWarehouses, getOneWarehouse, addNewWarehouse, deleteWarehouse, updateWarehouse} = require("../queries/warehouse.js")


//Route to get all warehouses
warehouses.get("/", async (req, res) => {
    const listOfWarehouses = await getAllWarehouses() 
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

//Route to add a warehouse to table
warehouses.post("/add", async (req, res) => {
    const newWarehouse = await addNewWarehouse(req.body);
    res.status(200).json(newWarehouse)
})

//Route to delete a warehouse from table
warehouses.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedWarehouse = await deleteWarehouse(id);
    if (deletedWarehouse.id) {
        res.status(200).json(deletedWarehouse);
    } else {
        res.status(404).json({error: "can not find warehouse"})
    }
})

//Route to update a warehouse on table
warehouses.put("/:id", async (req, res) => {
    const { id } = req.params;
    try{
        const updatedWarehouse = await updateWarehouse(id, req.body)
        res.status(200).json(updatedWarehouse);
    } catch (error) {
        res.status(400).json("Warehouse not found")
    }
    
})

module.exports = warehouses;