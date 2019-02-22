<<<<<<< HEAD
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
=======
const express = require("express")
const db = require("../db/db")
const router = express.Router()
router.use(express.json());

const { createNewUser } = require('../../server/db/users')

router.post("/register", register)

function register(req, res, next) {
  var newUser = {
    newUsername: req.body.newUsername,
    newPassword: req.body.newPassword
  }
  createNewUser(newUser)
    //more to write here
    .then((id) => {
      res.locals.userId = id
    })
    .catch(({ message }) => {
      console.log("message--auth.js")
      if (message.includes("UNIQUE constraint failed: users.username")) {
        return res.status(400).json({
          ok: false,
          message: "Username already exists."
        })
      }
      res.status(500).json({
        ok: false,
        message: "Something bad happened. We don't know why"
      })
    })
}









>>>>>>> e0570df8a145d0fdc3395111a0f8a630f1107eee

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
