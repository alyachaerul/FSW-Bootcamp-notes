const express = require('express')
const {
    register,
    login
} = require('../controller/userController')
const app = express.Router()

app.post('/register', async (req, res) => {
    const {
        username,
        password
    } = req.body
    const result = await register(username, password)
    res.send(result)
})

app.post('/login', async (req, res) => {
    const {
        username,
        password
    } = req.body
    const result = await login(username, password)
    res.send(result)
})

module.exports = app