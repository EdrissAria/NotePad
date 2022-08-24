const mongoose = require("mongoose");

// make schema 
const noteSchema = mongoose.Schema({
    user_id: {type: String},
    note: {type: String},
    catagory_id: {type: String},
    date: {type: Date, default: Date.now()},
    favorite: {type: Boolean},
    deleted: {type: Boolean}
}); 

// exports schema
module.exports = mongoose.model('notes', noteSchema)