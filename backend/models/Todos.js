const mongoose = require("mongoose");

// make schema 
const todoSchema = mongoose.Schema({
    user_id: {type: String},
    todo: {type: String, required: true},
    completed: {type: Boolean, default: false},
    catagory_id: {type: String, default: "No catagory"},
    created_at: {type: Date, default: Date.now()},
    completed_at: {type: Date},
    important: {type: Boolean, default: false},
    remind: {type: Date},
    remarks: {type: String},
    deleted: {type: Boolean, default: false}
}); 

// exports schema
module.exports = mongoose.model('todos', todoSchema)