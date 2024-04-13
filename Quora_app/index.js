const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
let posts = [
  {
    id: uuidv4(),
    username: "RahulMaurya",
    content: "Everything you are experiencing is just because of you ",
  },
  { id: uuidv4(), username: "AdamSmith", content: "life is good  " },
  { id: uuidv4(), username: "Sam", content: "feeling good" },
  { id: uuidv4(), username: "Love", content: "Hey there ! " },
];

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});
app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  console.log(req.body);
  let id = uuidv4();
  posts.push({ id, username, content });
  //res.send("post req working");// this is creating a route /posts but it is not redicrecting to "posts" so we can use res.redicrect()
  res.redirect("/posts");
});
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let post = posts.find((post) => id == post.id);
  console.log(post);
  res.render("show.ejs", { post });
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
