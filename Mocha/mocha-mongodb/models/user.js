// models/User.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    age: Number,
});

module.exports = mongoose.model('User', UserSchema);
