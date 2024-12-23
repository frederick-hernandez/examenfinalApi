const router = require('express').Router();

const rProyectos = require('../controllers/proyectos.controllers.js');

router.post('/crear', rProyectos.create);
router.get('/buscar/:id', rProyectos.findById);
router.get('/todos', rProyectos.findAll);
router.put('/put/:id', rProyectos.update);
router.delete('/delete/:id',rProyectos.delete);

module.exports = router;