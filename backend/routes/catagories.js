const express = require("express"); 
const router = express.Router(); 
const Catagory = require('../models/Catagories');

// set up the routes 
//
// get all catagories
router.get('/',  async (req, res)=>{
    try{
        const cats = await Catagory.find(); 
        res.send(cats)
    }catch(e){
        res.status(500).json({message: e.message})
    }
})
// get single catagory
router.get('/:id', (req, res)=>{
    res.send("you are getting this id:"+req.params.id)
})
// create single catagory
router.post('/', (req, res)=>{
    res.send("you are posting to this route")
})
// delete single catagory
router.delete('/:id', (req, res)=> {
    res.send("you are deleting catagory by id: "+req.params.id)
})
// update single catagory
router.patch('/:id', (req, res)=>{
    res.send("you are about to update catagory id: "+req.params.id)
})
//export router
module.exports = router; 