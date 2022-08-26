const noteModel = require("../models/Notes"); 

// get all
exports.getAllNotes = async ()=>{
    return await noteModel.find(); 
}
// get one
exports.getNote = async (id)=>{
    return await noteModel.findById(id); 
}
// create one
exports.createNote = async (note)=>{
    return await noteModel.create(note); 
}
// update one
exports.updateNote = async (id, note) => {
    return await noteModel.findByIdAndUpdate(id, note) 
}
// delete one
exports.deleteNote = async (id)=>{
    return await noteModel.findByIdAndDelete(id); 
}
