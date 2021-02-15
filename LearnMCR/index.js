require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static('views'))

// get data
const articleRoute = require('./routes/articleRoute')
app.use('/api/article', articleRoute)

// get HTML file
app.get('/', (req, res) => {
    res.render('index')
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening on http://127.0.0.1:${port}`);
})