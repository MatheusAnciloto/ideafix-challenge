
exports.up = function(knex) {
  return knex.schema.createTable('notes', table => {
    table.string('id').primary();
    table.string('title').notNullable();
    table.string('description').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('notes');
};
