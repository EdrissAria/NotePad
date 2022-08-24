const mongoose = require("mongoose");

// make schema 
const todoSchema = mongoose.Schema({
    user_id: {type: String},
    todo: {type: String},
    completed: {type: Boolean},
    catagory_id: {type: String},
    created_at: {type: Date, default: Date.now()},
    completed_at: {type: Date},
    important: {type: Boolean},
    remind: {type: Date},
    remarks: {type: String},
    deleted: {type: Boolean}
}); 

// exports schema
module.exports = mongoose.model('todos', todoSchema)