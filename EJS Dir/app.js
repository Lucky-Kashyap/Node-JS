const express = require("express");

const app = express();
const path = require("path");
const instaData = require("./data.json");

let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  // res.send("You sent a GET request");

  res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  // res.send('Roll Dice');

  res.render("rolldice.ejs", { num: diceVal });
});

app.post("/", (req, res) => {
  res.send("You sent a POST request");
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;

  // const followers = ["john", "doe", "Adam", "clerk"];

  // res.send(`the instagram username is ${username}`);

  // res.render("instagram_user.ejs", { username, followers });

  const data = instaData[username];

  if (data) {
    res.render("username", { data });
  } else {
    res.render("error");
  }
});

app.get("/search", (req, res) => {
  let { search } = req.query;

  if (!search) {
    res.send("nothing search");
  }

  res.send(`the query is ${search}`);
});

app.get("*", (req, res) => {
  res.send("path  is incorrect");
});

app.listen(port, () => {
  console.log("server runs.....");
});
