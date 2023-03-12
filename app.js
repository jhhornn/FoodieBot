const path = require("path")
const express = require("express")
const CORS = require("cors")
const app = express()

app.use(CORS())
app.use(express.static(path.join(__dirname, "public")))

module.exports = app
