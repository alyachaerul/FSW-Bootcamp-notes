const express = require("express");
const db = require("../db");
const app = express.Router()

app.get('/error', (req, res) => {
    iniError
})

app.get('/item/', (req, res) => {
    res.send(db)
});

// Melakukan pengambilan data melalui index dari array
app.get('/item/:index/', (req, res) => {
    res.send(db[req.params.index])
});

/*  Melakukan pengambilan data dari client masukin ke db
  dalam request post, akan mengembalikan data yang sudah ditambahkan */

app.post('/item/', (req, res) => {
    console.log(req.body);
    db.push(req.body); // bakal masukin data ke db
    res.send(req.body)
})

// Melakukan pengubahan data dengan rute edit PUT 
app.put('/item/:index', (req, res) => {
    const index = req.params.index
    if (!Number(index)) { // Handling error kalo yang dimasukkan bukan integer
        res.status(400).send('Please input a number')
    } else if ((db.length - 1) < index) { // Handling error untuk req diluar index
        res.status(400).send('Out of index')
    } else {
        db[req.params.index] = req.body //ngambil index dari postman
        res.send(req.body)
    }
})

app.delete('/item/:index', (req, res) => {
    const index = req.params.index
    const deletedItem = db.splice(index, 1); // seperti memotong, nanti hasil potongannya terisi di deletedItem & dari index yang dimasukin, hapus 1 item
    res.send(deletedItem);
})

module.exports = app