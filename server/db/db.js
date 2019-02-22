const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const connection = require("knex")(config);

module.exports = {
  getUserByEmail: getUserByEmail,
  getUsers: getUsers,
  addNewPost: addNewPost,
  getPosts: getPosts,
};

function getUsers(db = connection) {
  return db("user").select();
}

function getUserByEmail(email, db = connection) {
  return db("user")
    .where("email", email)
    .first();
}

function getPosts(db = connection) {
  return db("posts").select();
}

function addNewPost(newPost, db = connection) {
  return db("posts").insert(newPost);
}
