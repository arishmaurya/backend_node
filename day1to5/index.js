const express = require("express");
const app = express();
let port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/rahul", (req, res) => {
  res.send(" Hey it's Rahul here!!");
});
app.get("/Maurya", (req, res) => {
  res.send(" Hey it's Rahul Maurya here!!");
});
