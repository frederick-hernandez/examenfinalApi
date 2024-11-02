const db = require('../config/db.config.js');


const pro = db.proyectos


exports.create= (req, res, next) =>{
    const a = {
       titulo: req.params.titulo,
       descripcion: req.params.descripcion,
       completada: req.params.completada,
       fechaCreacion: req.params.fechaCreacion,
       fechaVencimiento: req.params.fechaVencimiento,
       prioridad: req.params.prioridad,
       asignadoA: req.params.asignadoA,
       categoria: req.params.categoria,
       pagado: req.params.etiquetas
    }

    pro.create(a)
   .then(data => {
     res.send(data);
    })
   .catch(err => {
     res.status(500).send({
         message:
             err.message || "Error creating the proyectos."
     });
    })
};

exports.findAll= (req, res, next) => {
    pro.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Error retrieving proyectos."
        });
    });
};

exports.findById= (req, res, next) => {
    pro.findByPk(req.params.id)
   .then(data => {
     if(!data) {
         res.status(404).send({
             message: "Not found proyectos with id " + req.params.id
         });
     } else {
         res.send(data);
     }
    })
   .catch(err => {
     res.status(500).send({
         message:
             "Error retrieving proyectos with id " + req.params.id
     });
    });
};

exports.update= (req, res, next) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty"
        });
    }
    pro.update(req.body, {
        where: { id: req.params.id }
    })
    .then(num => {
        if(num == 1) {
            res.send({
                message: "Proyectos was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update proyectos with id=${req.params.id}. Maybe proyectos was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating proyectos with id " + req.params.id
        });
    });
}

exports.delete= (req, res, next) => {
    pro.destroy({
        where: { id: req.params.id }
    })
   .then(num => {
     if(num == 1) {
         res.send({
             message: "Proyectos was deleted successfully!"
         });
     } else {
         res.send({
             message: `Cannot delete proyectos with id=${req.params.id}. Maybe proyectos was not found!`
         });
     }
    })
   .catch(err => {
     res.status(500).send({
         message: "Could not delete proyectos with id " + req.params.id
     });
    });
}

