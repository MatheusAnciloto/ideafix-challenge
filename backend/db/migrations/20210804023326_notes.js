
exports.up = function(knex) {
  return knex.schema.createTable('notes', table => {
    table.string('id').primary();
    table.string('title').useNullAsDefault();
    table.string('description').useNullAsDefault();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('notes');
};
