const express = require("express"); 
const router = express.Router(); 
const todoController = require('../controllers/todoController')

// set up the routes 
//
// get all Todos
router.get('/',  async (req, res)=>{
    try{
        const todos = await todoController.getAllTodos(); 
        res.send(todos)
    }catch(e){
        res.status(500).json({message: e.message})
    }
})
// get single Todo
router.get('/:id', async (req, res)=>{
    try{
        const todo = await todoController.getTodo(req.params.id);
        if(todo == null) res.status(404).json({message: 'can not find todo!'})
        res.status(200).json(todo)
    }catch (e){
        res.status(500).json({message: e.message})
    }
})
// create single Todo
router.post('/', async (req, res)=>{
    try{
        const newTodo = await todoController.createTodo(req.body);
        res.status(200).json({data: newTodo, message: 'todo created successfully!'})
    }catch (e){
        res.status(401).json({message: e.message})
    }
})
// delete single Todo
router.delete('/:id', async (req, res)=> {
    try{
        const todo = await todoController.deleteTodo(req.params.id);
        if(todo == null) res.send("todo does not exists!") 
        res.status(200).json({data: todo, message: 'todo deleted successfully!'})
    }catch (e){
        res.status(401).json({message: e.message})
    }
})
// update single Todo
router.patch('/:id', async (req, res)=>{
    try{
        const todo = await todoController.updateTodo(req.params.id, req.body);
        res.status(200).json({data: todo, message: 'todo updatad successfully!'})
    }catch(e){ 
        res.status(404).json({message: e.message})
    }
})

//export router
module.exports = router; 