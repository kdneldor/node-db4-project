const express = require("express")
const Step = require("../models/step")

const router = express.Router()

router.get("/steps", async (req, res, next) => {
    try {
        const steps = await Step.getSteps()
        res.json(steps)
    } catch (err) {
        next(err)
    }
})

module.exports = router