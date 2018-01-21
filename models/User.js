const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    UserName: String,
    FullName: String,
    Password: String,
    IsAdmin: Boolean,
    Tenant: { type:mongoose.Schema.Types.ObjectId, ref: 'Tenant' },
    CreatedAtUtc: { type: Date, default: Date.now },
    ModifiedAtUtc: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);