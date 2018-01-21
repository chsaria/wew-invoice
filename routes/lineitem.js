const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const LineItem = require('../models/LineItem.js');

/* GET all lineItems */
router.get('/', function(req, res, next){
    LineItem.find(function(err, lineItems){
        if(err) return next(err);
        res.json(lineItems);
    });
});

/* GET a single lineItem by id */
router.get('/:id', function(req, res, next){
    LineItem.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

/* POST new lineItem */
router.post('/', function(req, res, next){
    LineItem.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

/* PUT update to lineItem */
router.put('/:id', function(req, res, next){
    LineItem.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
});

/* DELETE a lineItem */
router.delete('/:id', function(req, res, next){
    LineItem.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
});

module.exports = router;