exports.up = async function(knex) {
  await knex.schema
      .createTable('recipes', (table) => {
          table.increments('recipe_id')
          table.string('recipe_name', 128)
              .notNullable()
              .unique()
      })
      .createTable('ingredients', (table) => {

      })
      .createTable('steps', (table) => {

      })
      .createTable('step_ingredients', (table) => {

      })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists('recipes')
      .dropTableIfExists('ingredients')
      .dropTableIfExists('steps')
      .dropTableIfExists('step_ingredients')
};
