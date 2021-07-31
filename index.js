const express = require('express')
const average = require('./routes/averageRoutes')
const app = express()
const port = 3000

app.use('/', average);

app.listen(port, () => console.log(`Start in ${port}!`))