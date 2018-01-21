var mongoose = require('mongoose');

var LineItemSchema = new mongoose.Schema({
    Comment: String,
    NetPrice: Number,
    TaxPercentage: Number,
    Count: { type: Number, default: 1 },
    Invoice: { type:mongoose.Schema.Types.ObjectId, ref: 'Invoice' },
    Position: { type:mongoose.Schema.Types.ObjectId, ref: 'Position' },
    CreatedAtUtc: { type: Date, default: Date.now },
    ModifiedAtUtc: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LineItem', LineItemSchema);