<<<<<<< HEAD
const connection = require("./connection");

module.exports = {
  createUser
};

// check out crypto (dependency)
function createUser({ username, password }, db = connection) {
  // return new Promise((resolve, reject) => { crypto.generate(password, (err, hash) => {
  // if(err) reject(err)
  // db("users").insert({username, hash})
  // .then(user_id => resolve(user_id))
  // .catch(err => reject(err))
  // })
  // })}
  return db("users").insert({ username, hash: password });
}
=======
const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const connection = require("knex")(config);
const { generateHash } = require("../auth/hash")

function createNewUser({ newUsername, newPassword }, db = connection) {
  return generateHash(newPassword)
    .then(hash => {
      return db('users').insert({ username: newUsername, hash: newPassword }).select("id")
    })

}

function getUser(id, db = connection) {
  return db("users").select().where("id", id)
}
module.exports = {
  createNewUser,
  getUser
}
>>>>>>> e0570df8a145d0fdc3395111a0f8a630f1107eee
