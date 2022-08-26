const express = require("express"); 
const router = express.Router();
const userController = require("../controllers/userController");

// set up the routes 
//
// get all users
router.get('/',  async (req, res)=>{
    try{
        const users = await userController.getAllUser(); 
        res.status(200).json(users)
    }catch(e){
        res.status(500).json({message: e.message})
    }
})
// get single user
router.get('/:id', async (req, res)=>{
    try{
        const user = await userController.getUser(req.params.id);
        if(user == null) res.status(404).json({message: 'can not find!'}) 
        res.status(200).json({user})
    }catch(e){
        res.status(500).json({message: e.message}); 
    } 
})
// create single user
router.post('/', async (req, res)=>{
    try{
        const newUser = await userController.createUser(req.body);  
        res.status(201).json({data: newUser, message: 'user created successfully!'}) 
    }catch(e){
        res.status(400).json({message: e.message})
    }
})
// delete single user
router.delete('/:id', async (req, res)=> {
    try{
        const user = await userController.deleteUser(req.params.id);
        if(user == null) res.json({message: 'can not find user!'})
        res.status(200).json({data: user, message: 'user deleted successfully'})
    }catch(e){
        res.status(404).json({message: e.message})
    }
})
// update single user
router.patch('/:id', async (req, res)=>{
    try{
        const user = await userController.updateUser(req.params.id, req.body);
        res.status(200).json({data: user, message: 'user updatad successfully!'})
    }catch(e){
        res.status(404).json({message: e.message})
    }
})
 
//export router
module.exports = router; 