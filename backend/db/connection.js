const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './database.db3',
  },
});

module.exports = knex;