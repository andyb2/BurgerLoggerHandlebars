const db = require("../config/connection")("burgers_db", "rootroot");

function insertBurger(title) {
  return db.query(
    `INSERT INTO burgers (title, eaten) VALUES ('${title.title}', 0);`
  );
}

function getBurgers() {
  return db.query(`SELECT * from burgers`);
}

function eatBurger(id) {
  return db.query(`UPDATE burgers SET eaten=1 WHERE id=${id};`);
}

function removeBurger(id) {
  return db.query(`DELETE FROM burgers WHERE id=${id};`);
}

module.exports = {
  insertBurger,
  getBurgers,
  eatBurger,
  removeBurger,
};
