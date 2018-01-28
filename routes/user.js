const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User.js');

/* GET all users */
router.get('/', function(req, res, next){
    
    User.find(function(err, users){
        if(err) return next(err);
        res.json(users);
    });
});

/* GET a single user by id */
router.get('/:id', function(req, res, next){
    User.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

/* POST new user */
router.post('/', function(req, res, next){
    var newUser = req.body;
    if(typeof newUser._id !== 'undefined')
    delete newUser._id;
    User.create(newUser, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
});

/* PUT update to user */
router.put('/:id', function(req, res, next){
    User.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
});

/* DELETE a user */
router.delete('/:id', function(req, res, next){
    User.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
});

module.exports = router;