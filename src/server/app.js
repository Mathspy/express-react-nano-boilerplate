const express = require("express")

const app = express()

const api = require("./routers/api.js")

//Serving the files in the build folder
app.use("/api", api)

module.exports = app