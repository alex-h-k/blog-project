const express = require('express')

const db = require('../../db')

const router = express.Router()

router.use(express.json())
router.post('/login', (req, res) => {
  
  var email = req.body.username
  var password = req.body.password
  console.log(password,email)
  db.getUserByEmail(email)
    .then(user =>{
      console.log('-----', user);
      if (!user) {
        return res.status(401).send('failed');
      }
      else if (user.password == password ){
        user_id = user.id
        console.log('testing')
         res.send('ok')
      }else {
        res.status(401).send('failed')
      }
    }).catch(err => res.status(401).send('failed'))
})

module.exports = router;
