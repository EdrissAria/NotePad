const mongoose = require("mongoose");

// make schema 
const catSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true}
}); 

// exports schema
module.exports = mongoose.model('catagories', catSchema)