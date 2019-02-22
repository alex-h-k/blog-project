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











module.exports = router;