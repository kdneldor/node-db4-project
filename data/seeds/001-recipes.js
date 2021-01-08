
exports.seed = async function(knex) {
  await knex("recipes").insert([
    {name: "Grandma's Stuffing"},
    {name: "Uncle's Pudding"},
    {name: "Dad's Turkey"}, 
    {name: "Mom's Soup"},
    {name: "Grandpa's Jerkey"}, 
    {name: "Aunt's Pasta"}
  ])
};
