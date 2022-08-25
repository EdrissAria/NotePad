const express = require("express"); 
const router = express.Router(); 
const Todo = require("../models/Todos")

// set up the routes 
//
// get all Todos
router.get('/',  async (req, res)=>{
    try{
        const todos = await Todo.find(); 
        res.send(todos)
    }catch(e){
        res.status(500).json({message: e.message})
    }
})
// get single Todo
router.get('/:id', async (req, res)=>{
    try{
        const todo = await Todo.findById(req.params.id);
        if(todo == null) res.status(404).json({message: 'can not find todo!'})
        res.status(200).json(todo)
    }catch (e){
        res.status(500).json({message: e.message})
    }
})
// create single Todo
router.post('/', (req, res)=>{
    const todo = new Todo(req.body); 
    try{
        todo.save();
        res.status(200).json({message: 'todo created successfully!'})
    }catch (e){
        res.status(401).json({message: e.message})
    }
})
// delete single Todo
router.delete('/:id', async (req, res)=> {
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if(todo == null) res.send("todo does not exists!") 
        res.status(200).json({message: 'todo deleted successfully!'})
    }catch (e){
        res.status(401).json({message: e.message})
    }
})
// update single Todo
router.patch('/:id', async (req, res)=>{
    try{
        await Todo.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({message: 'todo updatad successfully!'})
    }catch(e){
        res.status(404).json({message: e.message})
    }
})

//export router
module.exports = router; 