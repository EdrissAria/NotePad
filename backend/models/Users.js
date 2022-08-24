const mongoose = require("mongoose");

// make schema 
const userSchema = mongoose.Schema({
    username: {type: String},
    password: {type: String},
}); 

// exports schema
module.exports = mongoose.model('users', userSchema)