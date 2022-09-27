const mongoose = require("mongoose");

// make schema 
const userSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstname: {type: String},
    lastname: {type: String},
    photo: {type: String},
    country: {type: String}
}); 

// exports schema
module.exports = mongoose.model('users', userSchema)