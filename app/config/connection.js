const mysql = require("mysql");

// use this wrapper to create promise around mysql
class Database {
  constructor(config) {
    this.connection = mysql.createConnection(
      process.env.JAWSDB_URL ? process.env.JAWSDB_URL : config
    );
  }
  query(sql, args = []) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end((err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
}

function dbConnect(dbName, dbPassword) {
  const db = new Database({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "burger_db",
  });
  return db;
}

module.exports = dbConnect;
