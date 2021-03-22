const express = require('express');
const router = express.Router()
const MyTours = require('../models/tours');
const {verifyUser} = require('../middleware/auth');
const upload = require('../middleware/upload');


router.post('/destination/book',verifyUser, function(req,res){
    // console.log("Asdasdasdasdasd")  
    console.log(req.User._id)
   

    const Tours = new MyTours({
            UserId:req.User._id,
            Destination:req.body._id,
            Person:req.body.Person
        })
    Tours.save().then(function(result){
            res.status(200).json({
                success:true, data:"Booked One Destination"
            })
        })
    })
    
// display Booking
router.get('/booking/showall',verifyUser,function(req,res){
    console.log("BOKING")

    MyTours.find()
    .populate("Destination")
    .then((function(data){
        console.log(data)
        res.status(200).json({success :true, data:data})
    }))

    })


//delete 
router.delete("/Mytours/delete/:id",verifyUser,function (req, res) {
      const id = req.params.id;
      MyTours.deleteOne({ _id: id })
        .then(function (result) {
          res.status(200).json({ success : true, message: "User deleted" });
        })
        .catch(function (err) {
          res.status(500).json({ error: err });
        });
    }
  );


  //Update
// id - updated data from user
router.put('/Mytours/update/:id',verifyUser, function(req,res){
  const id = req.params.id;
  const Person = req.body.Person;
  MyTours.updateOne({_id : id}, {
      Person : Person
  })
  .then (function(result){
    console.log("success")
      res.status(200).json({success : true, message : "Updated!!", data : result})
  })
  .catch(function(e){
      console.log("err")
      res.status(500).json({error : e})
  })
})


module.exports = router