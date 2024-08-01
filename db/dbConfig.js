const pgp = require("pg-promise")()
require("dotenv").config()

// setup connection object
const cn =  {
    HOST: process.env.PG_HOST,
    PORT: process.env.PG_PORT,
    DATABASE: process.env.PG_DATABASE,
    USER: process.env.PG_USER
}

const db = pgp(cn)

module.exports = db