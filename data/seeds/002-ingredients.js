
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    {name: "Stuffing"},
    {name: "Pudding"},
    {name: "Turkey"},
    {name: "Soup"},
    {name: "Jerkey"},
    {name: "Pasta"},
  ])
};
