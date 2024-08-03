const db = require("../db/dbConfig.js")

// query to get all warehouses
const getAllWarehouses = async () => {
    try {
        const allWarehouses = await db.any("SELECT * FROM warehouses")
        return allWarehouses;
    } catch (error) {
        return error;
    }
};

// query to get a single warehouse
const getOneWarehouse = async (id) => {
    try {
        const currentWarehouse = await db.one("SELECT * FROM warehouses WHERE id=$1", id)
        return currentWarehouse;
    } catch (error) {
        return error;
    }
}

// query to add a warehouse to database
const addNewWarehouse = async ( warehouse ) => {
    try {
        const newWarehouse = await db.one("INSERT INTO warehouses (nickname, date_created, owner, pallet_capacity, location) VALUES ($1, $2, $3, $4, $5) RETURNING *",[warehouse.nickname, warehouse.date_created, warehouse.owner, warehouse.pallet_capacity, warehouse.location])
        return newWarehouse
    } catch (error) {
        return (error)
    }
}
module.exports = { getAllWarehouses, getOneWarehouse, addNewWarehouse }