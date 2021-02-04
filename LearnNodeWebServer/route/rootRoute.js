const express = require('express')
const app = express.Router();

let counter = 1
// Fungsi express akan membuat app memiliki beberapa method
app.get('/', (req, res) => { // Melayani method Get request dengan rute root dengan parameter req res otomatis diisi objek oleh express
    counter++ // tiap refresh akan nambah seperti looping
    res.render('index', {
        counter: counter,
        isMorning: true,
        names: ['Katlyn', 'Maegan', 'Providenci']
    })
})

// app.get('/about', (req, res) => {
//     // res.render(req.params.path) -> untuk mengambil params
//     res.render('about');
//     // console.log(req.params); 
//     // res.send("Wait a moment");
// })

//Memperingkas untuk handle setiap route halaman berikut handling permintaan route yang gada
app.get('/:path', (req, res) => {
    res.render(req.params.path, {}, (err, html) => { //manfaatin params untuk nampilin halaman yang sesuai permintaan client
        if (err) {
            res.render('404');
        } else {
            res.send(html); //terisi string HTML yang terproses oleh EJS
        }
    });
})

//Handle permintaan ketika routenya gada
// app.get('*', (req, res) => {
//     res.render('404');
// })

// setiap ada file yang me require file Infinity, yang akan di return adalah app
module.exports = app