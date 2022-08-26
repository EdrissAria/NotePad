const userModel = require("../models/Users"); 

// get all
exports.getAllUser = async ()=>{
    return await userModel.find(); 
}
// get one
exports.getUser = async (id)=>{
    return await userModel.findById(id); 
}
// create one
exports.createUser = async (user)=>{
    return await userModel.create(user); 
}
// update one
exports.updateUser = async (id, user) => {
    return await userModel.findByIdAndUpdate(id, user) 
}
// delete one
exports.deleteUser = async (id)=>{
    return await userModel.findByIdAndDelete(id); 
}

