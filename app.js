const express = require('express');
const path = require('path');
//var favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');

const customer = require('./routes/customer');
const tenant = require('./routes/tenant');
const invoice = require('./routes/invoice');
const lineItem = require('./routes/lineitem');
const position = require('./routes/position');
const auth = require('./routes/auth');
const app = express();

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose
    .connect(
        'mongodb://localhost/wew-bill', 
        {
            //useMongoClient: true, 
            promiseLibrary: require('bluebird')
        })
        .then(() => console.log('The database connection was successfully established.'))
        .catch((err) => console.log(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/home', express.static(path.join(__dirname, 'dist')));

app.use('/tenants', express.static(path.join(__dirname, 'dist')));
app.use('/tenants/*', express.static(path.join(__dirname, 'dist')));
app.use('/tenant', tenant);

app.use('/customers', express.static(path.join(__dirname, 'dist')));
app.use('/customer', customer);

app.use('/invoices', express.static(path.join(__dirname, 'dist')));
app.use('/invoice', tenant);

app.use('/lineItems', express.static(path.join(__dirname, 'dist')));
app.use('/lineItem', tenant);

app.use('/positions', express.static(path.join(__dirname, 'dist')));
app.use('/position', tenant);


app.use('/login', express.static(path.join(__dirname, 'dist')));
app.use('/auth', auth);

//catch 404 and forward to error handler
app.use(function(req, res, next){
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

//error handler
app.use(function(err, req, res, next){
    res.locals.message = err.message,
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    //render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;