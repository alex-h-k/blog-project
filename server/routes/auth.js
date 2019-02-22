const express = require("express");
const users = require("../db/users");
const router = express.Router();
router.use(express.json());

router.post("/register", (req, res) => {
  console.log("auth- ", req);

  var username = req.body.username;
  var password = req.body.password;

  users
    .createNewUser({ username, password }, (db = connection))
    // createNewUser(req, res, next)
    // check if users.exists(req.body.username)
    // then if user exists return 400 error - exists
    // then users.create(req.body.username, req.body.password).then(() => next(())
    // add catch error
    .then(() => {
      res.send("ok");
      // res.status(201).json({ ok: true });
    })

    .catch(({ message }) => {
      if (message.includes("UNIQUE constraint failed: users.username")) {
        return res.status(400).json({
          ok: false,
          message: "Username already exists."
        });
      }
      res.status(500).json({
        ok: false,
        message: "Something had happened. We don't know why"
      });
    });
});

module.exports = router;
