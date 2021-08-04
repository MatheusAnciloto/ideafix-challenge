module.exports = {
  client: 'sqlite3',
  connection: {
    filename: './db/database.db3',
  },
  migrations: {
    directory: __dirname + '/db/migrations'
  }
};