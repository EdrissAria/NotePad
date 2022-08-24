const mongoose = require("mongoose");

// make schema 
const catSchema = mongoose.Schema({
    name: {type: String}
}); 

// exports schema
module.exports = mongoose.model('catagories', catSchema)