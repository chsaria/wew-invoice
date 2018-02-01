const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Tenant = require('../models/Tenant.js');
//const WAPI_Tenant = require('../src/app/entities/tenant');

/* GET all tenants */
router.get('/', function(req, res, next){
    
    let searchObject = {};
       
    if(req.query.name !== undefined && req.query.name !== null && req.query.name !== '') {
        searchObject.Name = new RegExp(req.query.name, 'i');
    }

    Tenant.find(searchObject, function(err, tenants){
        if(err) return next(err);   
        res.json(tenants);
    });
});

/* GET a single tenant by id */
router.get('/:id', function(req, res, next){
    Tenant.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

/* POST new tenant */
router.post('/', function(req, res, next){
    var newTenant = req.body;
    if(typeof newTenant._id !== 'undefined')
        delete newTenant._id;
    Tenant.create(newTenant, function(err, post){
        console.log(err);
        if(err) return next(err);
        res.json(post);
    });
});

/* PUT update to tenant */
router.put('/:id', function(req, res, next){
    Tenant.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
});

/* DELETE a tenant */
router.delete('/:id', function(req, res, next){
    Tenant.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
});

module.exports = router;