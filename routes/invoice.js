const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Invoice = require('../models/Invoice.js');
const Customer = require('../models/Customer.js');

/* GET all invoices */
router.get('/', function(req, res, next){

    
    let searchObject = {};
       
    if(req.query.search !== undefined && req.query.search !== null && req.query.search !== '') {
        searchObject.$or = 
        [
            {'InvoiceNumber': new RegExp(req.query.search, 'i')},
            {'Customer.Name': new RegExp(req.query.search, 'i')}
        ];
    }

    Invoice.find(function(err, invoices){
        if(err) return next(err);
        for(var i = 0; i < invoices.length; i++){
            invoices[i].Customer_id = invoices[i].Customer._id;
        }
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
    console.log("body:");
    console.log(req.body);
    var newInvoice = req.body;
    if(typeof newInvoice._id !== 'undefined')
    delete newInvoice._id;
    delete newInvoice.CreatedAtUtc;
    delete newInvoice.ModifiedAtUtc;
    var existingInvoices = Invoice.find(function(err, invoices){
        if(err) return next(err);
        var invNumber = 1;
        for(var i = 0; i < invoices.length; i++){
            if(invoices[i].InvoiceNumber * 1 > invNumber){
                invNumber = invoice[i].InvoiceNumber * 1 + 1;
            }
        }
        newInvoice.InvoiceNumber = invNumber;
        Customer.findById(newInvoice.Customer_id, function(err, customer){
            if(err) return next(err);
            newInvoice.Customer = customer;
            console.log("posted invoice:");
            console.log(newInvoice);
            Invoice.create(newInvoice, function(err, post){
                if(err) return next(err);
                console.log("saved invoice:");
                console.log(post);
                res.json(post);
            });
        });
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