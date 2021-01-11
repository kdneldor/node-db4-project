
exports.seed = async function(knex) {
  await knex("steps").insert([
    {name: "Turn on oven", recipe_id: 2},
    {name: "Flip it", recipe_id: 1},
    {name: "Pull it", recipe_id: 6},
    {name: "Squeeze it", recipe_id: 3},
    {name: "Baste it", recipe_id: 5},
    {name: "Eat it", recipe_id: 4},
  ])
};
