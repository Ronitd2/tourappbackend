const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const hotelSchema = require('../models/hotelSchema');
const hotelDetails = new mongoose.model('hoteldetails', hotelSchema);



//insert multiple  raw hotel data 
   //    hoteldata.forEach(async function(element) {
   //    const hotellist= new hotelDetails(element);
   //    await hotellist.save();
   // });
      



//Insert single hotel data
// async function inserthoteldata(){
// const hotellist= new hotelDetails(dataa); 
// await hotellist.save();
// console.log("Insertion succsessfull");
// }
//  inserthoteldata();


//Searching hotel from database acording request
router.post('/',async(req,res)=>{
   console.log(req.body);
   const respondhotel= await  hotelDetails.find({hotel_city:req.body.city});
   res.json(respondhotel);
})

 module.exports = router;