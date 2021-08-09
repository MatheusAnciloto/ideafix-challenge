const path = require('path');

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'db', 'database.sqlite'),
  },
  migrations: {
    directory: path.resolve(__dirname, 'db', 'migrations')
  },
  useNullAsDefault: true
};