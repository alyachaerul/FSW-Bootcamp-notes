require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())
app.use('/', require('./route/authRoute'))

app.use(function (error, req, res, next) {
    res.send(error)
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening on http://127.0.0.1:${port}`);
})