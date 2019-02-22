const express = require("express");

const db = require("../db/db");

const router = express.Router();



router.use(express.json());
router.post("/", (req, res) => {
  var email = req.body.username;
  var password = req.body.password;
  console.log(password, email);
  db.getUserByEmail(email)
    .then(user => {
      if (!user) {
        return res.status(401).send("failed");
      }
      if (user.password == password) {
        res.send({ name: user.name, status: "ok" });
      } else {
        res.status(401).send("failed");
      }
    })
    .catch(err => res.status(401).send("failed"));
});

router.get("/home", (req, res) => {
  db.getPosts().then(posts => {
    res.json(posts);
  });
});

router.post("/home", (req, res) => {
  console.log(req.body);
  let newPost = {
    title: req.body.title,
    content: req.body.content
  };
  db.addNewPost(newPost).then(result => {
    console.log("test", result);
    res.json(result);
  });
});

module.exports = router;
