const sodium = require("libsodium-wrappers")

module.exports={
  generateHash
}

function generateHash(newPassword) {
  return sodium.ready.then(()=>
  sodium.crypto_pwhash_str(
    newPassword,
    sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
    sodium.crypto_pwhash_MEMLIMIT_MIN
  ))
}