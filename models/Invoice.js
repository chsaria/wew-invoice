var mongoose = require('mongoose');

var InvoiceSchema = new mongoose.Schema({
    InvoiceNumber: String,
    Comment: String,
    CustomerReference: String,
    Discount: Number,
    Customer: { type:mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    CreatedAtUtc: { type: Date, default: Date.now() },
    ModifiedAtUtc: { type: Date, default: Date.now() },
    PaidAtUtc: { type: Date },
    CancelledAtUtc: { type: Date }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);