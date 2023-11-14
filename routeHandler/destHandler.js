const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const destdata= require('../datas/DestinationPlace');
const destSchema = require('../models/destSchema');
const destDetails = new mongoose.model('Destdetails', destSchema);



//insert multiple  raw hotel data 
//       destdata.forEach(async function(element) {
//       const destlist= new destDetails(element);
//       await destlist.save();
//       console.log("iserted successfully");
//    });

// const dataa={
//     dest_name:'Kolkata',
//     dest_details:'City of joy',
//     dest_pic:['https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.thrillophilia.com%2Fimage%2Fupload%2Fs--VWy_Nmbu--%2Fc_fill%2Cg_auto%2Ch_600%2Cq_auto%2Cw_975%2Ff_auto%2Cfl_strip_profile%2Fv1%2Fimages%2Fphotos%2F000%2F013%2F579%2Foriginal%2F1586270427_cover_Victoria_Memorial_Kolkata_panorama_%25281%2529.jpg.jpg&tbnid=Xg7YxVaEg_ZSuM&vet=12ahUKEwijstuxsO__AhXqzaACHXaEBjIQMygKegUIARDhAQ..i&imgrefurl=https%3A%2F%2Fwww.thrillophilia.com%2Fdestinations%2Fkolkata%2Fplaces-to-visit&docid=pry5U6eNvnsHGM&w=975&h=600&q=kolkata%20places%20to%20visit&ved=2ahUKEwijstuxsO__AhXqzaACHXaEBjIQMygKegUIARDhAQ']
// };



//Insert single hotel data
// async function insertdestdata(){
// const destlist= new destDetails(dataa); 
// await destlist.save();
// console.log("Insertion succsessfull");
// }
//  insertdestdata();


//Searching hotel from database acording request
router.post('/',async(req,res)=>{
   console.log(req.body);
   const responddest = await destDetails.find({state:req.body.state});
   res.json(responddest);
})

 module.exports = router;