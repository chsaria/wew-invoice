const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Invoice = require('../models/Invoice.js');
const Customer = require('../models/Customer.js');
const LineItem = require('../models/LineItem');
const Position = require('../models/Position.js');
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

    Invoice.find(searchObject, function(err, invoices){
        if(err) return next(err);
        console.log(invoices);
        let result = [];
        for(var i = 0; i < invoices.length; i++){
            let res = Object.assign({}, invoices[i]._doc);
            if(res.Customer !== null)
            {
                res.Customer_id = res.Customer;
                Customer.findById(res.Customer_id, function(err, cust){

                    if(err){
                        console.log(err);
                        next(err);
                    }
                    res.Customer = cust;
                    console.log(res);
                    setTimeout(function()
                    {
                        result.push(res);
                    }, 500);
                });
                LineItem.find({'Invoice': res._id}, function(err2, post2){
                    console.log("getting line items");
                    res.LineItems = [];
                    
                    if(err2) {
                        console.log(err2);
                    }else{
                        console.log(post2);
                        for(var i = 0; i < post2.length; i++){
                            let liResult = Object.assign({}, post2[i]._doc);
                            Position.findById(post2[i].Position, function(err, pos){
                                if(err){
                                    console.log(err);
                                    next(err);
                                }
                                liResult.Position_id = liResult.Position;
                                liResult.Position = pos;
                                res.LineItems.push(liResult);
                                console.log(res);
                            });
                        }
                    }
                });
            }
        }
        setTimeout(function(){
            res.json(result);
        },1500);
        //res.json(invoices);
    });
});

/* GET a single invoice by id */
router.get('/:id', function(req, res, next){
    Invoice.findById(req.params.id, function(err, post){
        if(err) return next(err);
        post.Customer_id = post.Customer._id;
        LineItem.find({'Invoice': post._id}, function(err2, post2){
            console.log("getting line items");
            
            let result = Object.assign({LineItems: []}, post._doc);

            if(err2) {
                console.log(err2);
                post.LineItems = [];
            }else{
                console.log(post2);
                let liResults = [];
                for(var i = 0; i < post2.length; i++){
                    let liResult = Object.assign({}, post2[i]._doc);
                        Position.findById(post2[i].Position, function(err, pos){
                            if(err){
                                console.log(err);
                                next(err);
                            }
                            liResult.Position_id = liResult.Position;
                            liResult.Position = pos;
                            result.LineItems.push(liResult);
                        });
                }
            }
            setTimeout(function(){
                console.log(result);
                res.json(result);
            }, 500);
        });
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

    Invoice.find(function(err, invoices){
        if(err) return next(err);

        var invNumber = 1;
        for(var i = 0; i < invoices.length; i++){
            if(invoices[i].InvoiceNumber * 1 > invNumber){
                invNumber = invoice[i].InvoiceNumber * 1 + 1;
            }
        }
        newInvoice.InvoiceNumber = invNumber.toString();
        Customer.findById(newInvoice.Customer, function(err, customer){
            if(err){ 
                console.log(err);
                return next(err);
            }
            newInvoice.Customer = customer;
            console.log("posted invoice:");
            console.log(newInvoice);
            Invoice.create(newInvoice, function(err, post){
                if(err) return next(err);
                console.log("saved invoice:");
                console.log(post);
                post.Customer_id = post.Customer._id;
                
                let result = Object.assign({LineItems: []}, post._doc);
                for(var j = 0; j < newInvoice.LineItems.length; j++){
                    delete newInvoice.LineItems[j]._id;
                    newInvoice.LineItems[j].Invoice = post._id;
                    console.log("li input:");
                    console.log(newInvoice.LineItems[j]);
                    LineItem.create(newInvoice.LineItems[j], function(err, li){
                        let liResult = Object.assign({}, li._doc);
                        Position.findById(li.Position, function(err, pos){
                            if(err){
                                console.log(err);
                                next(err);
                            }
                            liResult.Position_id = liResult.Position;
                            liResult.Position = pos;
                            result.LineItems.push(liResult);
                        });
                    });
                }
                setTimeout(function(){
                    console.log(result);
                    res.json(result);
                }, 500);
            });
        });
    });
});

/* PUT update to invoice */
router.put('/:id', function(req, res, next){
    
    var updateInvoice = req.body;
    Customer.findById(updateInvoice.Customer, function(err, customer){
        if(err){ 
            console.log(err);
            return next(err);
        }
        updateInvoice.Customer = customer;
        Invoice.findByIdAndUpdate(updateInvoice._id, req.body, function(err, post){
            if(err) return next(err);
            
            let result = Object.assign({LineItems: []}, post._doc);
            for(var j = 0; j < updateInvoice.LineItems.length; j++){
                if(updateInvoice.LineItems[j]._id === null || updateInvoice.LineItems[j]._id === '') {
                    delete updateInvoice.LineItems[j]._id;
                    updateInvoice.LineItems[j].Invoice = post._id;
                    console.log("li input:");
                    console.log(updateInvoice.LineItems[j]);
                    LineItem.create(updateInvoice.LineItems[j], function(err, li){
                        let liResult = Object.assign({}, li._doc);
                        Position.findById(li.Position, function(err, pos){
                            if(err){
                                console.log(err);
                                next(err);
                            }
                            liResult.Position_id = liResult.Position;
                            liResult.Position = pos;
                            result.LineItems.push(liResult);
                        });
                    });
                }else{
                    updateInvoice.LineItems[j].Invoice = post._id;
                    LineItem.findByIdAndUpdate(updateInvoice.LineItems[j]._id, updateInvoice.LineItems[j], function(err, li){
                        if(err){
                            console.log(err);
                            next(err);
                        }
                        let liResult = Object.assign({}, li._doc);
                        Position.findById(li.Position, function(err, pos){
                            if(err){
                                console.log(err);
                                next(err);
                            }
                            liResult.Position_id = liResult.Position;
                            liResult.Position = pos;
                            result.LineItems.push(liResult);
                        });
                    });
                }
            }
            setTimeout(function(){
                console.log(result);
                res.json(result);
            }, 500);
        });
    });
});

/* DELETE a invoice */
router.delete('/:id', function(req, res, next){
    Invoice.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
});

module.exports = router;