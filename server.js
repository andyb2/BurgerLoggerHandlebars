const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const orm = require("./app/models/orm");
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// for serving all the normal html
app.use(express.static("public"));

// for routes

app.get("/", async function (req, res) {
  let burgerList = await orm.getBurgers();
  res.render("index", { data: burgerList });
});

app.get("/api/index", async (req, res) => {
  let burgerList = await orm.getBurgers();
  res.send(burgerList);
});

app.post("/api/index", async (req, res) => {
  const burgerInput = req.body;
  let dbInput = await orm.insertBurger(burgerInput);
  res.send(dbInput);
});

app.delete("/api/index/:id", async (req, res) => {
  let id = req.params.id;
  let dbDelete = await orm.removeBurger(id);
  res.send(dbDelete);
});

app.put("/api/index/:id", async (req, res) => {
  let id = req.params.id;
  let updateDb = await orm.eatBurger(id);
  res.send(updateDb);
});

app.listen(PORT, function () {
  console.log(`Serving content on http://localhost:${PORT}`);
});
