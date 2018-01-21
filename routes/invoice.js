const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Invoice = require('../models/Invoice.js');

/* GET all invoices */
router.get('/', function(req, res, next){
    Invoice.find(function(err, invoices){
        if(err) return next(err);
        res.json(invoices);
    });
});

/* GET a single invoice by id */
router.get('/:id', function(req, res, next){
    Invoice.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

/* POST new invoice */
router.post('/', function(req, res, next){
    Invoice.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

/* PUT update to invoice */
router.put('/:id', function(req, res, next){
    Invoice.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
});

/* DELETE a invoice */
router.delete('/:id', function(req, res, next){
    Invoice.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
});

module.exports = router;