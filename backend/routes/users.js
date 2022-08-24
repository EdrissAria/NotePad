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
router.get('/:id', getUser, (req, res)=>{
     res.send(res.user.username)
})
// create single user
router.post('/', (req, res)=>{
    const user = new User({
        username: req.body.username, 
        password: req.body.password
    }); 
    try{
        const newUser = user.save(); 
        res.status(201).json(newUser) 
    }catch(e){
        res.status(400).json({message: e.message})
    }
})
// delete single user
router.delete('/:id', (req, res)=> {
    res.send("you are deleting note by id: "+req.params.id)
})
// update single user
router.patch('/:id', (req, res)=>{
    res.send("you are about to update note id: "+req.params.id)
})
// maddlewate 
async function getUser(req, res, next){
    let user; 
    try{
        user = await User.findById(req.params.id); 
        if(user == null){
            return res.status(404).json({message: 'Can not find user!'})
        }
    }catch(e){
        return res.status(500).json({message: e.message}); 
    }

    res.user = urer;
    next(); 
}
//export router
module.exports = router; 