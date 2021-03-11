const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./app/config/connection")("burger_db", "rootroot");
// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// for serving all the normal html
app.use(express.static("public"));

// for routes

app.get("/", function (req, res) {
  res.sendFile("./public/index.html");
});

app.get("/api/index", async (req, res) => {
  let burgerList = await db.query(`SELECT * from burgers`);
  res.send(burgerList);
});

app.post("/api/index", async (req, res) => {
  const burgerInput = req.body;
  let dbInput = await db.query(
    `INSERT INTO burgers (title, eaten) VALUES ('${burgerInput.title}', 0)`
  );
  res.send(dbInput);
});

app.delete("/api/index/:id", async (req, res) => {
  let id = req.params.id;
  let dbDelete = await db.query(`DELETE FROM burgers WHERE id=${id};`);
  res.send({ message: `Deleted ${id}` });
});

app.put("/api/index/:id", async (req, res) => {
  let id = req.params.id;
  console.log(id);
  let updateDb = await db.query(`UPDATE burgers SET eaten=1 WHERE id=${id};`);
  res.send({ message: `Updated ${id}` });
});

app.listen(PORT, function () {
  console.log(`Serving content on http://localhost:${PORT}`);
});
