const express = require('express') //global function untuk mengambil referensi dari lib express
const app = express(); //Require menjadikan express sebagai fungsi dan akan mereturn sebuah method
const port = 3000; // Port : pintu yang ada di setiap komputer dan ga semua portnya kepake, salah satunya port 3000 ini gakepake

app.use(express.static('views')); //memungkinkan isi dari folder bisa diakses dengan rute
app.set('view engine', 'ejs');

const rootRoute = require('./route/rootRoute.js');
app.use(rootRoute) // Butuh express router untuk memodularkan. Bisa dilakukan untuk rute yang mengexport file yg ada

// Fungsi express akan membuat app memiliki beberapa method
// app.get('/', (req, res) => { 
//     res.send('Hello Alya!');
// })

/* ketika npm start codingan masuk ke RAM jadi kalo diubah codingan aslinya, di RAM ga keubah
   cara supaya bisa berubah, stop npm start, ganti perubahan, dan npm start kembali */

app.listen(port, () => { // Listen port berapa yang akan diakses karena Tanpa port browser gabisa akses express nya
    console.log(`Example app listening at http://localhost:${port}`)
}) // Anon function akan dieksekusi ketika express sudah siap mendengar request yang datang dari port