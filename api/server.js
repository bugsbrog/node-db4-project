const express = require('express')

const recipeRouter = require('./recipes/recipes-router')

const server = express()

server.use(express.json())
server.use('/api/recipes', recipeRouter)

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server