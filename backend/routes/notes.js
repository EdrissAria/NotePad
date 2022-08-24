const express = require("express"); 
const router = express.Router(); 
const Note = require('../models/Notes');

// set up the routes 
//
// get all notes
router.get('/',  async (req, res)=>{
    try{
        const notes = await Note.find(); 
        res.send(notes)
    }catch(e){
        res.status(500).json({message: e.message})
    }
})
// get single note
router.get('/:id', (req, res)=>{
    res.send("you are getting this id:"+req.params.id)
})
// create single note
router.post('/', (req, res)=>{
    res.send("you are posting to this route")
})
// delete single note
router.delete('/:id', (req, res)=> {
    res.send("you are deleting note by id: "+req.params.id)
})
// update single note
router.patch('/:id', (req, res)=>{
    res.send("you are about to update note id: "+req.params.id)
})
//export router
module.exports = router; 