const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// for serving all the normal html
app.use(express.static("public"));

// for routes

app.get("/", function (req, res) {
  res.sendFile("./public/index.html");
});

app.listen(PORT, function () {
  console.log(`Serving content on http://localhost:${PORT}`);
});
