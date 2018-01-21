const mongoose = require('mongoose');

const TenantSchema = new mongoose.Schema({
    Name: String,
    InvoiceNumberScheme: String,
    TaxIdentificationNumber: String,
    Address1: String,
    Address2: String,
    Address3: String,
    City: String,
    Zipcode: String,
    Phonenumber: String,
    IBAN: String,
    BIC: String,
    LogoUrl: String,
    CreatedAtUtc: { type: Date, default: Date.now },
    ModifiedAtUtc: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tenant', TenantSchema);