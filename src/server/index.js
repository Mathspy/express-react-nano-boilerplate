const express = require("express")

const app = express()

const api = require("./routers/api.js")

//Serving the files in the build folder
app.use("/api", api)

app.listen(25632, () => console.log("We are online!"))