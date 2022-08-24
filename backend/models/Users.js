const mongoose = require("mongoose");

// make schema 
const userSchema = mongoose.Schema({
    username: {type: String, required:true, unique: true},
    password: {type: String, required:true},
}); 

// exports schema
module.exports = mongoose.model('users', userSchema)