const User = require('../models/index');

// create the new user
module.exports.newUserCreate = async (req,res)=>{
    try {
        let user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        });
        return res.status(200).json(user);
    } catch (error) {
        console.log(`Error:${error}`);
        return res.status(500).json({
            Error:"Internal Server Error"
        });
    }

}

// get user by their id
module.exports.getUser = async (req,res)=>{
    try {
        await User.findById(req.params.id,(err,data)=>{
            return res.status(200).json(data);
        })
    } catch (error) {
        console.log(`Error:${error}`);
        return res.status(500).json({
            Error:"Internal Server Error"
        });
    }
}

// get the user details
module.exports.getUserDetails = async (req,res)=>{
    try {
        await User.find({},(err,data)=>{
            return res.status(200).json(data);
        });
    } catch (error) {
        console.log(`Error:${error}`);
        return res.status(500).json({
            Error:"Internal Server Error"
        });
    }
}

// find and delete the user
module.exports.deleteUser = async (req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            "message":"deleted"
        });
    } catch (error) {
        console.log(`Error:${error}`);
        return res.status(500).json({
            Error:"Internal Server Error"
        });
    }
}

// update the user
module.exports.updateUser = async (req,res)=>{
    try {
        // console.log(req.params.id);
        await User.findByIdAndUpdate(req.params.id,req.body);
        // console.log(req.body);
        return res.json({"message":"updated"});

    } catch (error) {
        console.log(`Error:${error}`);
        return res.status(500).json({
            Error:"Internal Server Error"
        });
    }
}