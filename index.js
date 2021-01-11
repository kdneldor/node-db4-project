const express = require("express")
const recipeRouter = require("./routers/recipe")
const ingredientRouter = require("./routers/ingredient")
const stepRouter = require("./routers/step")

const server = express()
const port = 4000

server.use(express.json())

server.use(recipeRouter)
server.use(ingredientRouter)
server.use(stepRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong",
    })
})

server.listen(port, () => {
    console.log("Running at dat http://localhost:4000")
})
