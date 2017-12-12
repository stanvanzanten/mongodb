var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Bioscoop = require('../model/bioscoop.model');

//
// Geef een lijst van alle films.
//
routes.get('/bioscopen', function(req, res) {
    res.contentType('application/json');
    Bioscoop.find({})
        .then((bioscopen) => {
            // console.log(bioscopen);
            res.status(200).json(bioscopen);
        })
        .catch((error) => res.status(401).json(error));
});

routes.get('/bioscopen/:id', function(req, res) {
    res.contentType('application/json');
    Bioscoop.findById(req.params.id)
        .then((bioscoop) => {
            // console.log(bioscoop);
            res.status(200).json(bioscoop);
        })
        .catch((error) => res.status(401).json(error));
});

routes.delete('/bioscopen/:id', function(req, res) {
    var id = req.params.id;

    Bioscoop.findById(id)
        .then(bioscoop => { 
            bioscoop.remove();
            res.status(200).send("Bioscoop verwijderd");
        })
        .catch(error => res.status(401).json(error));
});

routes.post('/bioscopen', function(req, res) {
    var new_bioscoop = new Bioscoop(req.body);
    new_bioscoop.save(function(err, task) {
      if (err)
        res.send(err);
        res.json(task);
    });
});

routes.put('/bioscopen/:id', function(req, res) {
    
        res.contentType('application/json');
        var id = req.params.id;
    
        var update = { 
            "name" : req.body.name, 
            "description" : req.body.description,
        };
        Bioscoop.findById(id)
            .then( bioscoop => {
                bioscoop.set(update);
                bioscoop.save();
                res.status(200).json(bioscoop);
                
            })
            .catch((error) => res.status(401).json(error));
});

module.exports = routes;