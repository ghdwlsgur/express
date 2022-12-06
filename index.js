const fs = require("fs");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/status", (req, res) => {
  res.send("200");
});

app.get("/img/character.png", (req, res) => {
  fs.readFile("./views/img/character.png", (err, data) => {
    res.writeHead(200);
    res.write(data);
    res.end();
  });
});

const port = 3000;
app.listen(port, () => console.log("Server running..."));

module.exports = app;
