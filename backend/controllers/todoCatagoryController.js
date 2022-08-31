const catModel = require("../models/TodoCatagories"); 

// get all
exports.getAllCatagories = async ()=>{
    return await catModel.find(); 
}
// get one
exports.getCatagory = async (id)=>{
    return await catModel.findById(id); 
}
// create one
exports.createCatagory = async (catagory)=>{
    return await catModel.create(catagory); 
}
// update one
exports.updateCatagory = async (id, catagory) => {
    return await catModel.findByIdAndUpdate(id, catagory) 
}
// delete one
exports.deleteCatagory = async (id)=>{
    return await catModel.findByIdAndDelete(id); 
}
