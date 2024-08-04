const express=require('express');
const router = express.Router();
const TravelListModel =require("../models/TravelListSchema");
const UserBookSchema =require("../models/user_booking_schema");
const User =require("../models/user_schema.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = 'DUMBARSE';

router.post('/',async(req,res)=>{
    console.log(req.body);
    const decoded = jwt.verify(req.body.token, SECRET);
    const uemail=decoded.data.email;
    const userdata= await User.find({email:uemail});
    console.log(userdata);
    const destdata= await UserBookSchema.find({date:req.body.date , destname:req.body.place  });
    console.log(destdata);
    if(destdata.length==0)
    {
        return res.json({error: 'You have not booked the place yet'});
    }
    console.log(destdata);
    const traveldata=await TravelListModel.find({bookid:destdata._id});
    // console.log(traveldata[0].placelist)
    console.log(traveldata);
    if(traveldata.length==0)
    {
        console.log('Hello');
        const traveladd={
            bookid:destdata._id,
            placelist:req.body.travelplace 
        }
        const travellist = new TravelListModel(traveladd);
        await travellist.save();
        res.json({acknowledge:'Successfull'});
    }
    else{
        const checkplace=traveldata[0].placelist.find((place)=>{
            return req.body.travelplace==place;
        })
        console.log(checkplace);
        if(!checkplace)
        {
        console.log("Hello World");
        const travv= [...traveldata[0].placelist,req.body.travelplace];
        console.log(travv);
        await TravelListModel.updateOne({ bookid: destdata._id},{$set:{"placelist":travv}});
        res.json({acknowledge:'Successfull'});
        }
        else{
            return res.json({acknowledge: 'Not Successfull' });  
        }
    }
});


router.post('/travellist/',async(req,res)=>{
    console.log(req.body);
    const destdata= await UserBookSchema.find({date:req.body.traveldate , destname:req.body.travelplace});
    const traveldata=await TravelListModel.find({bookid:destdata._id});
    if(traveldata.length==0)
    {
        return res.json({acknowledge: 'No Travel list' });  
    }
    else{
        res.json({placelist:traveldata[0].placelist})
    }
})
module.exports=router;
// You have already  booked and add this  place

// user_id:userdata._id