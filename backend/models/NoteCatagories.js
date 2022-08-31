const mongoose = require("mongoose");

// make schema 
const catSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true}, 
    color: {type: String, required: true, default: "blue"}
}); 

// exports schema
module.exports = mongoose.model('note_catagories', catSchema)