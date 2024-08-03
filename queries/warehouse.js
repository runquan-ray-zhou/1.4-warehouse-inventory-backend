const db = require("../db/dbConfig.js")

const getAllWarehouses = async () => {
    try {
        const allWarehouses = await db.any("SELECT * FROM warehouses")
        return allWarehouses;
    } catch (error) {
        return error;
    }
};

const getOneWarehouse = async (id) => {
    try {
        const currentWarehouse = await db.one("SELECT * FROM warehouses WHERE id=$1", id)
        return currentWarehouse;
    } catch (error) {
        return error;
    }
}

module.exports = { getAllWarehouses, getOneWarehouse }