const userRoute = require('./routes/userRoute')
const myLogger = require('./middleware/myLogger')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

//===[middleware]============================================================
app.use(myLogger);
app.use(bodyParser.urlencoded({ extended: false }));

//===[endpoints]=============================================================
userRoute(app)

//===[listen]================================================================
app.listen(port, () => {
    console.log(`Escutando aplicação em http://localhost:${port}`)
})
