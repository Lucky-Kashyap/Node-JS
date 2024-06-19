const express = require("express");

const app = express();

let port = 8080;

app.listen(port, () => {
  console.log("server runs.....");
});

// app.use((req, res) => {
//   res.send({
//     name: "lucky",
//     age: 22,
//   });
// });

app.get("/", (req, res) => {
  res.send("You sent a GET request");
});

app.get("/apple", (req, res) => {
  res.send("Apple");
});

app.get("/pineapple", (req, res) => {
  res.send("Pine apple");
});

app.get("/guava", (req, res) => {
  res.send("Guava");
});

app.post("/", (req, res) => {
  res.send("You sent a POST request");
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;

  res.send(`the instagram username is ${username}`);
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
