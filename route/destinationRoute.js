const express = require('express');
const router = express.Router()
const Destination = require('../models/destination_model');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// router.post('/destination/insert',auth.verifyUser, auth.verifyAdmin, function(req,res){
router.post('/destination/insert',upload.single('dimage'),function(req,res, next){
  
// console.log(req.file);
    const dimage = req.file.path;
    const dname = req.body.dname;
    const ddetails = req.body.ddetails;
    const dprice = req.body.dprice;
    
    if(req.file == undefined)
    {
        res.status(401).json({"success":false,"message":"Invalid File"})
    }
    else
    {
        const Destinationdata = new Destination({ dimage : dimage,dname: dname, ddetails: ddetails, dprice: dprice})
    Destinationdata.save()

    .then(function(result){
        res.status(201).json({message : "Destination inserted!!", success: true})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
    }
    
})

//Update
// id - updated data from user
router.put('/destination/update/:id', function(req,res){
    // const dimage = req.body.dimage;
    const dname = req.body.dname;
    const ddetails = req.body.ddetails;
    const dprice = req.body.dprice;
    const id = req.params.id;
    // console.log("hello")
    Destination.updateOne({_id : id}, {
        // dimage : dimage,
        dname : dname,
        ddetails : ddetails,
        dprice : dprice
      
    })
    .then (function(result){
        res.status(200).json({message : "Updated!!"})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})



//Delete
router.delete('/destination/delete/:id', function(req,res){
    const id = req.params.id;
    Destination.deleteOne({_id : id})
    .then(function(result){
        res.status(200).json({message : "Deleted!!"})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})

router.get('/destination/showall', function(req,res){
    Destination.find()
    .then(function(data){
     
        res.status(200).json({success: true, data: data})
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})

router.get('/destination/single/:id', function(req,res){
    const id = req.params.id;
    Destination.findOne({_id : id})
    .then(function(data){
        res.status(200).json(data)
    })
    .catch(function(e){
        res.status(500).json({error : e})
    })
})
module.exports = router;