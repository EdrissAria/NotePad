const todoModel = require("../models/Todos"); 

// get all
exports.getAllTodos = async ()=>{
    return await todoModel.find(); 
}
// get one
exports.getTodo = async (id)=>{
    return await todoModel.findById(id); 
}
// create one
exports.createTodo = async (todo)=>{
    return await todoModel.create(todo); 
}
// update one
exports.updateTodo = async (id, todo) => {
    return await todoModel.findByIdAndUpdate(id, todo) 
}
// delete one
exports.deleteTodo = async (id)=>{
    return await todoModel.findByIdAndDelete(id); 
}
