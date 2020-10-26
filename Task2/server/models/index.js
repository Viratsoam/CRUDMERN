// require mongoose
const mongoose = require('mongoose');

// Creating the User Schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

// exports the model 
const User = mongoose.model('User',userSchema);
module.exports = User;