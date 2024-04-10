const express = require("express");
const app = express();
let port = 8080;
app.use(express.urlencoded({ extended: true })); // this line help express to understand the data
app.use(express.json()); // this line help express to understand  Json  data
app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send(`Get Response is => ${username} and password is => ${password}`);
});

app.post("/register", (req, res) => {
  //   let { username, Password } = req.query;
  //   res.send(`Post Response is => ${username} And password is => ${Password}`);
  res.send(
    `Username is ${req.body.username} and Password is ${req.body.password}`
  );
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
