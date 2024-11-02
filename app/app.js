const express = require('express');
const router = require('./routers/prueba.router.js');
const cors = require("cors");
const app = express();

app.use(cors());
app.get('/', (req, res) => {
    res.send('Welcome home')
})

app.use(express.json());

app.use('/api/v1',router);

module.exports = app
