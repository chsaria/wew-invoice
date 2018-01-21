var mongoose = require('mongoose');

var PositionSchema = new mongoose.Schema({
    Short: String,
    Name: String,
    NetDefaultPrice: Number,
    TaxPercentage: Number,
    DefaultCount: { type: Number, default: 1 },
    Unit: String,
    Tenant: { type:mongoose.Schema.Types.ObjectId, ref: 'Tenant' },
    CreatedAtUtc: { type: Date, default: Date.now },
    ModifiedAtUtc: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Position', PositionSchema);