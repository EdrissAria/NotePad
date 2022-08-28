require('dotenv').config(); 

const cors = require("cors")
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const express = require("express")
const app = express(); 

// use json format
app.use(express.json())

// cors
app.use(cors())

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// configure connection to database
mongoose.connect(process.env.DATABASE_CONNECTION);
const db = mongoose.connection; 
db.on('error', (error)=> console.error(error)); 
db.once('open', ()=> console.log('database connected'))

//set routes 
const notesRoutes = require('./routes/notes')
const todosRoutes = require('./routes/todos')
const usersRoutes = require('./routes/users')
const catagoriesRoutes = require('./routes/catagories')
app.use('/notes', notesRoutes); 
app.use('/todos', todosRoutes);
app.use('/users', usersRoutes); 
app.use('/catagories', catagoriesRoutes); 

// listen on port 3000
app.listen(3000, ()=>{
    console.log("server is running on port: 3000")
}); 
