const express = require('express');
const router = require('./routers/prueba.router.js');
const routerP = require('./routers/proyectos.router.js')
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Welcome home')
})

app.use(express.json());

app.use('/api/v1',router);
app.use('/proyectos', routerP);
module.exports = app
