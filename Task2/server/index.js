// Require Express
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// connect to DB
mongoose.connect('mongodb://localhost/crud',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify: false
}).then(()=>{
    console.log('Connect with MongoDb!!');
});

// PORT
const port = process.env.PORT || 8001;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors()); 

// ROUTES
app.use('/api',require('./routes/index'));

// LISTEN TO THE PORT
app.listen(port,(err)=>{
    if(err){
        console.log(`Error while Starting the Server:${err}`);
        return;
    }
    console.log(`Server is up on PORT:${port}`); 
});