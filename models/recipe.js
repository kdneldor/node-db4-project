const db = require("../data/config")

function getRecipes() {
    return db("recipes")
}

module.exports = {
    getRecipes,
}