const mongoose = require('mongoose');
const date = new Date()

const Tours = mongoose.model('MyTours',{
   
    UserId : {
        type:mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },

    Person:{
        type: Number,
        default:1
    },

    Destination: {
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref: 'Destination'
    },
    Date: {
        type:String,
        default:date.getDate()
    }

  
})


module.exports = Tours;