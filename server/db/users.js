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