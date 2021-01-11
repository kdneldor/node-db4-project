
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    {name: "Stuffing", quantity: 2.2},
    {name: "Pudding", quantity: 1.1},
    {name: "Turkey", quantity: 3.3},
    {name: "Soup", quantity: 4.4},
    {name: "Jerkey", quantity: 5.5},
    {name: "Pasta", quantity: 6.6},
  ])
};
