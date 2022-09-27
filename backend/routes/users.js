const express = require("express"); 
const router = express.Router();
const userController = require("../controllers/userController");
const bcrypt = require('bcrypt')

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
        const salt = await bcrypt.genSalt(10); 
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        const user = {username: req.body.username, email: req.body.email, password: hashPassword}
        const newUser = await userController.createUser(user);  
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

// user login
router.post('/login', async (req, res) => {
    const user = await userController.login(req.body.email); 
    if(user == null){
        return res.status(400).send('Can not find the user'); 
    }
    try{
        if(await bcrypt.compare(req.body.password, user.password)){
            res.send('Success')
        }else{
            res.send('Failed')
        }
    }catch(e){
        res.status(500).send('incorect username or password')
    }
})

 
//export router
module.exports = router; 