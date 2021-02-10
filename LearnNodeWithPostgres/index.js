const express = require('express');
const app = express()

app.use = express.json()
const rootRoute = require('./route/rootRoute')
const itemRoute = require('./route/itemRoute')
app.use(rootRoute, itemRoute)

const port = 3000
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})