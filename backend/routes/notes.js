const express = require("express"); 
const router = express.Router(); 
const noteController = require('../controllers/noteController'); 

// set up the routes 
//
// get all notes
router.get('/',  async (req, res)=>{
    try{
        const notes = await noteController.getAllNotes(); 
        res.send(notes)
    }catch(e){
        res.status(500).json({message: e.message})
    }
})
// get single note
router.get('/:id', async (req, res)=>{
    try{
        const note = await noteController.getNote(req.params.id);
        if(note == null) res.status(404).json({message: 'can not find note!'})
        res.status(200).json(note)
    }catch (e){
        res.status(500).json({message: e.message})
    }
})
// create single note
router.post('/', async (req, res)=>{ 
    try{
        const newNote = await noteController.createNote(req.body);
        res.status(200).json({data: newNote, message: 'note created successfully!'})
    }catch (e){
        res.status(401).json({message: e.message})
    }
})
// delete single note
router.delete('/:id', async (req, res)=> {
    try{
        const note = await noteController.deleteNote(req.params.id);
        if(note == null) res.send("note does not exists!") 
        res.status(200).json({data: note, message: 'note deleted successfully!'})
    }catch (e){
        res.status(401).json({message: e.message})
    }
})
// update single note
router.patch('/:id', async (req, res)=>{
    try{
        const note = await noteController.updateNote(req.params.id, req.body);
        res.status(200).json({data: note, message: 'note updatad successfully!'})
    }catch(e){
        res.status(404).json({message: e.message})
    }
})
//export router
module.exports = router; 