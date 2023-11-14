const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const placedata= require('../datas/Stateplace');
const placeSchema = require('../models/placeSchema');
const placeDetails = new mongoose.model('placedetails', placeSchema);

// placedata.forEach(async function(element) {
//        const placelist= new placeDetails(element);
//        await placelist.save();
//        console.log("Insertion Sucessfull");
//     });


router.post('/number',async(req,res)=>{
    console.log(req.body.placename);
    const placelist= await placeDetails.find({place:req.body.placename});
    const placenum= placelist.length;
    console.log(placenum);
    const initialplace=await  placeDetails.find({place:req.body.placename})
    //skip takes argument to skip number of entries 
    .sort({"index_no" : 1})
    .skip((1 - 1) * 2)
    //limit is number of Records we want to display
    .limit(2);
    res.status(200).send({
        "placenumber": placenum,
        "initialplacelist":initialplace
    })
})

router.post('/',(req,res)=>{
    console.log(req.body);
    const pagination = req.body.pagination ? parseInt(req.body.pagination) : 5;
    //PageNumber From which Page to Start 
    const pageNumber = req.body.page ? parseInt(req.body.page) : 1;
    placeDetails.find({place:req.body.placename})
        //skip takes argument to skip number of entries 
        .sort({"index_no" : 1})
        .skip((pageNumber - 1) * pagination)
        //limit is number of Records we want to display
        .limit(pagination)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(400).send({
                "err": err
            })
        })
});

module.exports=router;
