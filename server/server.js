const path = require('path')
const express = require('express')
const login = require('./routes/login')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/v1', login)

module.exports = server
