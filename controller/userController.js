const User = require('../model/userModel')

exports.addUser=async(req,res) => {
    let user = new User({
        user_name :req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    user = await user.save()
    if(!user){
        return res.status(400).json({error:"something went wrong"})
    }
    res.send(user)
}