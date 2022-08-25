const mongoose = require("mongoose");

// make schema 
const noteSchema = mongoose.Schema({
    user_id: {type: String},
    note: {type: String, required: true},
    catagory_id: {type: String, required: true},
    date: {type: Date, default: Date.now()},
    favorite: {type: Boolean, default: false},
    deleted: {type: Boolean, default: false}
}); 

// exports schema
module.exports = mongoose.model('notes', noteSchema)