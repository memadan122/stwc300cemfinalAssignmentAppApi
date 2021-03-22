const mongoose = require('mongoose');

const User = mongoose.model('User', {

    firstname: {
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    address:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    userType : {
        type: String,
        enum: ['Admin','User']
    },
    userImage: {
        type: String,
        default : null
    }

})

module.exports = User