const express = require("express"); 
const router = express.Router(); 
const User = require('../models/Users');

// set up the routes 
//
// get all users
router.get('/',  async (req, res)=>{
    try{
        const users = await User.find(); 
        res.status(200).json(users)
    }catch(e){
        res.status(500).json({message: e.message})
    }
})
// get single user
router.get('/:id', async (req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(user == null) res.status(404).json({message: 'can not find!'}) 
        res.status(200).json({user})
    }catch(e){
        res.status(500).json({message: e.message}); 
    } 
})
// create single user
router.post('/', (req, res)=>{
    const user = new User({
        username: req.body.username, 
        password: req.body.password
    }); 
    try{
        user.save(); 
        res.status(201).json({message: 'user created successfully!'}) 
    }catch(e){
        res.status(400).json({message: e.message})
    }
})
// delete single user
router.delete('/:id', async (req, res)=> {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({message: user})
    }catch(e){
        res.status(404).json({message: e.message})
    }
})
// update single user
router.patch('/:id', async (req, res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({message: 'user updatad successfully!'})
    }catch(e){
        res.status(404).json({message: e.message})
    }
})
 
//export router
module.exports = router; 