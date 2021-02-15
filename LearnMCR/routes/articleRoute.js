const express = require('express')
const {
    get,
    add,
    remove,
    put
} = require('../controller/articleController')
const app = express.Router()

app.get('/', async (req, res) => {
    const articles = await get(req.query)
    res.send(articles)
})

app.post('/', async (req, res) => {
    const {
        body
    } = req
    const result = await add(body)
    res.send(result)
})

app.delete('/', async (req, res) => {
    const {
        id
    } = req.query
    await remove(id)
    res.send('ok')
})

app.put('/', async (req, res) => {
    const {
        id
    } = req.query
    const {
        body
    } = req
    put(id, body)
    res.send('ok')
})

module.exports = app