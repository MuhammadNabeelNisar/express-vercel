const express = require("express")
const app = express()
const product = require("./api/product")
const main = require("./api/main")

app.use(express.json({ extended: false }))

app.use("/product", product)
app.use("/", main)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
