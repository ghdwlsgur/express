const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/status", (req, res) => {
  res.send("200");
});

const port = 3000;
app.listen(port, () => console.log("Server running..."));

module.exports = app;
