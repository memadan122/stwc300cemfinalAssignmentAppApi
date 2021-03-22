const mongoose = require('mongoose');

const Destination = mongoose.model('Destination',{
    dimage : {
        type : String
    },
    dname : {
        type: String
    },
    ddetails: {
        type: String
    },
    dprice: {
        type: String
    }
  
})


module.exports = Destination;