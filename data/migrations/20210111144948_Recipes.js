exports.up = async function (knex) {
    await knex.schema.createTable("recipes", (table) => {
      table.increments("id");
      table.text("name").notNull();
    });
  
    await knex.schema.createTable("ingredients", (table) => {
      table.increments("id");
      table.text("name").notNull();
      table.float("quantity").notNull();
    });
  
    await knex.schema.createTable("steps", (table) => {
      table.increments("id");
      table.text("name").notNull();
      table.integer("recipe_id").notNull().references("id").inTable("recipes");
    });
  
    await knex.schema.createTable("recipes_ingredients", (table) => {
      table.increments("id");
      table.integer("recipe_id").notNull().references("id").inTable("recipes");
      table
        .integer("ingredient_id")
        .notNull()
        .references("id")
        .inTable("ingredients");
      // table.primary(["recipe_id", "ingredient_id"]);
    });
  };
  
  exports.down = async function (knex) {
    await knex.scema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("recipes_ingredients")
    await knex.schema.dropTableIfExists("ingredients");
    await knex.schema.dropTableIfExists("recipes");
  };
