const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const trainSchema = require('../models/trainSchema');
const traindata = require('../datas/train');
const Traindetails = new mongoose.model('Traindetails', trainSchema);
// router.use(express.json());

// const data = {
//   train_number: "12311",
//   train_name: "abcd express",
//   train_src: "HWH",
//   train_dstn: "KLK",
//   arrival_time: "9.55PM",
//   dest_time: "3:00AM",
//   from_station_name: "HOWRAH JN",
//   to_station_name: "KALKA KLK",
//   duration: "1d5hr5min",
//   source: "Howrah",
//   destination: "Shimla",
// };

//inserting  one raw data
// async function insertdata(){
// const trainlist= new Traindetails(data); 
// await trainlist.save();
// }
//  insertdata();



// const rr=insertdata();
// rr.then(()=>{
//   console.log("Successfull");
// })
//   insertdata();
// insertdata();
// if(insertdata()){
//   console.log("Inserted Successfully");
// }
// else{
//   console.log("error");
// }


//Insertong multiple raw data
// traindata.forEach(async function(element) {
//      const trainlist= new Traindetails(element);
//     await trainlist.save();
// });



//inserting one data from client
// router.post('/', async (req, res) => {
//   const trainlist = new Traindetails(req.body);
//   await trainlist.save();
//   console.log("Successfull complete");
// });



//searching train details using train no
router.post('/',async(req,res)=>{
console.log(req.body);
   const trrr= await Traindetails.find({source:req.body.source ,destination:req.body.dest});
   res.json(trrr);
});
module.exports = router;
