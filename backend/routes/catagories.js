const express = require("express"); 
const router = express.Router(); 
const catController = require('../controllers/catagoryController')

// set up the routes 
//
// get all catagories
router.get('/',  async (req, res)=>{
    try{
        const catgs = await catController.getAllCatagories(); 
        res.status(200).json(catgs); 
    }catch(e){
        res.status(500).json({message: e.message})
    }
})
// get single catagory
router.get('/:id', async (req, res)=>{
    try{
        const catagory = await catController.getCatagory(req.params.id);
        if(catagory == null) res.status(404).json({message: 'can not find catagory!'})
        res.status(200).json(catagory)
    }catch (e){
        res.status(500).json({message: e.message})
    }
})
// create single catagory
router.post('/', (req, res)=>{
    try{
        const newCatagory = catController.createCatagory(req.body);
        res.status(200).json({data: newCatagory ,message: 'catagory created successfully!'})
    }catch (e){
        res.status(401).json({message: e.message})
    }
})
// delete single catagory
router.delete('/:id', async (req, res)=> {
    try{
        const catg = await catController.deleteCatagory(req.params.id);
        if(catgs == null) res.send("catagory does not exists!") 
        res.status(200).json({data: catg, message: 'catagory deleted successfully!'})
    }catch (e){
        res.status(401).json({message: e.message})
    }
})
// update single catagory
router.patch('/:id', async (req, res)=>{
    try{
        const catagory = await catController.updateCatagory(req.params.id, req.body);
        res.status(200).json({data: catagory, message: 'catagory updatad successfully!'})
    }catch(e){
        res.status(404).json({message: e.message})
    }
})
//export router
module.exports = router; 