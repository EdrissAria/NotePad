const express = require("express"); 
const router = express.Router(); 
const Todo = require("../models/Todos")

// set up the routes 
//
// get all todos
router.get('/', async (req, res)=>{
    try{
        const todos = await Todo.find(); 
        res.send(todos)
    }catch(e){
        res.status(500).json({message: e.message})
    }
})
// get single todo
router.get('/:id', (req, res)=>{
    res.send("wow works")
})
// create single todo
router.post('/', (req, res)=>{
    res.send("wow works")
})
// delete single todo
router.delete('/:id', (req, res)=>{
    res.send("wow works")
})
// update single todo
router.patch('/:id', (req, res)=>{
    res.send("wow works")
})

//export router
module.exports = router; 