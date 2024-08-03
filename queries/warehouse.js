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
        const currentWarehouse = await db.oneOrNone("SELECT * FROM warehouses WHERE id=$1", id)
        return currentWarehouse;
    } catch (error) {
        return error;
    }
}

// query to add a warehouse to database
const addNewWarehouse = async ( warehouse ) => {
    try {
        const newWarehouse = await db.oneOrNone("INSERT INTO warehouses (nickname, date_created, owner, pallet_capacity, location) VALUES ($1, $2, $3, $4, $5) RETURNING *",[warehouse.nickname, warehouse.date_created, warehouse.owner, warehouse.pallet_capacity, warehouse.location])
        return newWarehouse
    } catch (error) {
        return (error)
    }
}

// query to delete a warehouse from table
const deleteWarehouse = async ( id ) => {
    try {
        const warehouseToBeDeleted = await db.oneOrNone ("DELETE FROM warehouses WHERE id=$1 RETURNING *", id);
        return warehouseToBeDeleted
    } catch (error) {
        return error
    }
}

// query to update a warehouse in the table
const updateWarehouse = async ( id, warehouse) => {
    try {
        const wareHouseToBeUpdated = await db.oneOrNone ("UPDATE warehouses SET nickname=$1, date_created=$2, owner=$3, pallet_capacity=$4, location=$5 WHERE id=$6 RETURNING *",
            [warehouse.nickname, warehouse.date_created, warehouse.owner, warehouse.pallet_capacity, warehouse.location, id]
        )
        return wareHouseToBeUpdated
    } catch (error) {
        return error
    }
}


module.exports = { getAllWarehouses, getOneWarehouse, addNewWarehouse, deleteWarehouse, updateWarehouse }