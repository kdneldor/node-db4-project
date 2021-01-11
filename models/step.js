const db = require("../data/config");

function getSteps() {
  return db("steps as s")
    .leftJoin("recipes as r", "r.id", "s.recipe_id")
    .select("s.id", "s.name", "r.name as recipe_name");
}

module.exports = {
  getSteps,
};
