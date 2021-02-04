const express = require('express');
const app = express();
const itemRoute = require('./route/itemRoute'); //import file route 

//middleware : untuk extend fungsionalitas dari express
app.use(express.json()); // middleware
app.use(itemRoute); //buatan sendiri
app.use(function (error, req, res, next) { //handling error
    // console.log(error);
    // res.send("There is an error in server") //error message
    res.send(error.message); //debugging error, showing to the client the error message
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})