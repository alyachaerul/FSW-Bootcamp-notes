require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
// handle post body raw
app.use(express.json())
// handle post body x-www-form-urlencoded
app.use(express.urlencoded({
    extended: false
}))

const articleController = require('./controller/articleController')
app.get('/', articleController.get)
app.post('/', articleController.add)
app.get('/delete', articleController.delete)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening on http://127.0.0.1:${port}`);
})