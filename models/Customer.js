var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
    Name: String,
    Address1: String,
    Address2: String,
    Address3: String,
    City: String,
    Zipcode: String,
    Phonenumber: String,
    CreatedAtUtc: { type: Date, default: Date.now },
    ModifiedAtUtc: { type: Date, default: Date.now },
    Tenant: { type:mongoose.Schema.Types.ObjectId, ref: 'Tenant' }
});

module.exports = mongoose.model('Customer', CustomerSchema);