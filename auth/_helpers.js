const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../models/User.js');
const localAuth = require('./local');

function createUser(req) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    /*
    Customer.create(req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    });
    */
    let user = {
        UserName: req.body.UserName,
        FullName: req.body.FullName,
        Password: hash,
        IsAdmin: false
    };

    User.create(user, function(err, post){
        if(err) return next(err);
        return;
        //res.json(post);
    });
    return post;
  }
  
  function getUser(username){
      User.findOne({ 'UserName': username }, function(err, post){
        if(err) return next(err);
      });
      return post;
  }

  function comparePass(userPassword, databasePassword) {
      const bool = bcrypt.compareSync(userPassword, databasePassword);
      if(!bool) throw new Error('bad password');
      else return true;
  }

  function ensureAuthenticated(req, res, next){
      if(!(req.headers && req.headers.authorization)) {
          return res.status(400).json({
              status: 'Please log in'
          });
      }

      var header = req.header.authorization.split(' ');
      var token = header[1];
      localAuth.decodeToken(token, (err, payload) => {
          if(err) {
              return res.status(401).json({
                  status: 'Token has expired'
              });
          } else {
              User.findById(payload.sub, function(err, post){
                 if(err) return next(err);
                 return; 
              });
          }
      })
  }

module.exports = {
    createUser,
    getUser,
    comparePass,
    ensureAuthenticated
};