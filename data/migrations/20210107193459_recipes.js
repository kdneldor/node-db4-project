
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
      table.increments("id")
      table.text("name")
  })

  await knex.schema.createTable("ingredients", (table) => {
      table.increments("id")
      table.text("name")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
};
