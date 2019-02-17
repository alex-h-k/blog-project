const express = require("express")
const db = require("../../db")
const router = express.Router()
router.use(express.json());

router.post("/register", (req, res) => {
  console.log("auth- ", req)

  var newUser = {
    username: req.body.username,
    password: req.body.password
  }

  db.createNewUser(newUser)
    //more to write here
    .then(res => {
      console.log('auth.js ', res)
    })
})


module.exports = router;