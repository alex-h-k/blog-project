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
