const express = require("express");
const app = express();
let port = 8080;

app.get("/register", (req, res) => {
  let { username, Password } = req.query;
  res.send(`Get Response is => ${username} and password is => ${Password}`);
});

app.post("/register", (req, res) => {
  let { username, Password } = req.query;
  res.send(`Post Response is => ${username} And password is => ${Password}`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
