const express = require("express"); 
const router = express.Router(); 
const User = require('../models/Users');

// set up the routes 
//
// get all users
router.get('/',  async (req, res)=>{
    try{
        const users = await User.find(); 
        res.send(users)
    }catch(e){
        res.status(500).json({message: e.message})
    }
})
// get single user
router.get('/:id', (req, res)=>{
    res.send("you are getting this id:"+req.params.id)
})
// create single user
router.post('/', (req, res)=>{
    res.send("you are posting to this route")
})
// delete single user
router.delete('/:id', (req, res)=> {
    res.send("you are deleting note by id: "+req.params.id)
})
// update single user
router.patch('/:id', (req, res)=>{
    res.send("you are about to update note id: "+req.params.id)
})
//export router
module.exports = router; 