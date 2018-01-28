const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Position = require('../models/Position.js');

/* GET all positions */
router.get('/', function(req, res, next){
    Position.find(function(err, positions){
        if(err) return next(err);
        res.json(positions);
    });
});

/* GET a single position by id */
router.get('/:id', function(req, res, next){
    Position.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

/* POST new position */
router.post('/', function(req, res, next){
    var newPosition = req.body;
    if(typeof newPosition._id !== 'undefined')
    delete newPosition._id;
    Position.create(newPosition, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

/* PUT update to position */
router.put('/:id', function(req, res, next){
    Position.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
});

/* DELETE a position */
router.delete('/:id', function(req, res, next){
    Position.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
});

module.exports = router;