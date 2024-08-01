const app = require("./app")

require("dotenv").config()
PORT = process.env.PORT

app.listen(PORT, () =>{
    console.log(`listening to PORT ${PORT}`)
})