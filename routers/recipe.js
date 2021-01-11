const express = require("express")
const Recipe = require("../models/recipe")

const router = express.Router()

router.get("/recipes", async (req, res, next) => {
    try {
        const recipes = await Recipe.getRecipes()
        res.json(recipes)
    } catch(err) {
        next(err)
    }
})

module.exports = router