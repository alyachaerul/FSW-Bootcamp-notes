const express = require('express');
const app = express.Router()
const {
    nanoid
} = require('nanoid')
const db = require('../connection/databaseConnection')


// New way getting db : async await
// app.get('/item', async (req, res) => {
//     const result = await db.query(`SELECT * FROM note`)
//     res.send(result.rows)
// })

//Mengambil data dari database : old way
app.get('/item', (req, res) => {
    db.query(`SELECT * FROM note`)
        .then(result => {
            res.send(result.rows)
        })
})

app.post('/item', (req, res) => {
    const body = req.body
    const id = nanoid()
    db.query(`INSERT INTO note VALUES ('${id}', '${body.note}')`)
        .then(result => {
            console.log('Post result:', result.rows);
            res.send({
                id,
                note: body.note
            })
        })
        .catch(err => {
            console.error(err);
        })

})

app.put('/item', (req, res) => {
    const body = req.body

    db.query(`UPDATE note SET note='${body.note}' WHERE id='${body.id}'`)
        .then(result => {
            console.log('Put result:', result);
            res.send({
                id: body.id,
                note: body.note
            })
        })

})

app.delete('/item', (req, res) => {
    const body = req.body

    db.query(`DELETE FROM note WHERE id='${body.id}'`)
        .then(result => {
            console.log('Delete result:', result);

            res.send({
                id: body.id,
            })
        })

})


module.exports = app