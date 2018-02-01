const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Customer = require('../models/Customer.js');

/* GET all customers */
router.get('/', function(req, res, next){
    
    let searchObject = {};
       
    if(req.query.name !== undefined && req.query.name !== null && req.query.name !== '') {
        searchObject.Name = new RegExp(req.query.name, 'i');
    }

    Customer.find(searchObject, function(err, customers){
        if(err) return next(err);
        res.json(customers);
    });
});

/* GET a single customer by id */
router.get('/:id', function(req, res, next){
    Customer.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

/* POST new customer */
router.post('/', function(req, res, next){
    var newCustomer = req.body;
    if(typeof newCustomer._id !== 'undefined')
    delete newCustomer._id;
    Customer.create(newCustomer, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

/* PUT update to customer */
router.put('/:id', function(req, res, next){
    Customer.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
});

/* DELETE a customer */
router.delete('/:id', function(req, res, next){
    Customer.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
});

module.exports = router;