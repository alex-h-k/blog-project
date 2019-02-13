const path = require("path");
const express = require("express");
const login = require("./routes/login");

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, "./public")));
server.use("/v1", login);

server.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

module.exports = server;
