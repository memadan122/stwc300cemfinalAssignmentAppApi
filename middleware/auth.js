const jwt = require('jsonwebtoken');
const { find } =require('../models/user_model');
const User = require('../models/user_model');

//guard
module.exports.verifyUser = function(req,res, next){

    try{
        console.log("Yeta aayo")
        
        const token = req.headers.authorization.split(" ")[1];
        console.log(token)
        const UserData = jwt.verify(token, 'secretkey')
        console.log(UserData.accId)
        User.findOne({ _id : UserData.accId._id})
        .then(function(result){
            // res.send("auth success")
             req.User = result;
            //  console.log(req.user)
            next();
        })
        .catch(function(e){
            res.status(500).json({ message : "auth failesadasd"})
        })
    
    }
    catch(err){
        
         console.log(err)
        res.status(401).json({message : "auth failed"})
    }
   
}

//next guard
module.exports.verifyAdmin = function(req,res,next){
    if(!req.User){
        return res.status(401).json({message : "Unauthorized User!"})
    }
    else if(req.User.userType !== 'Admin'){
        return res.status(401).json({message : "Unauthorized user"})
    }
    next();
}