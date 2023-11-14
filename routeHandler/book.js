const UserBookSchema =require("../models/user_booking_schema");
const User =require("../models/user_schema.js");
const express=require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = 'DUMBARSE';


router.post('/',async (req,res)=>{
    try{
    const decoded = jwt.verify(req.body.token, SECRET);
    const uemail=decoded.data.email;
    
    console.log(req.body);
    const userdata= await User.find({email:uemail});
    console.log(userdata);
    const bookdata={
        user_id:userdata[0]._id,
        name:userdata[0].name,
        traindetails:{trainname:req.body.name,
                        price:req.body.price},
        hoteldetails:{hotelname:req.body.name,
            price:req.body.price},
        destname:req.body.name,
        date:req.body.date
    }
    console.log(bookdata);
    const bookcheckdata= await UserBookSchema.find({ date: req.body.date ,user_id:bookdata.user_id});
    console.log(bookcheckdata);
    console.log(bookcheckdata.length);
    if(bookcheckdata.length>0)
    {
        console.log("Hello");
        if(req.body.type=='train'){
        await UserBookSchema.updateOne({ date: req.body.date ,user_id:bookdata.user_id},{$set:{"traindetails.trainname":req.body.name,"traindetails.price":req.body.price}});
        }
        if(req.body.type=='hotel'){
            await UserBookSchema.updateOne({ date: req.body.date ,user_id:bookdata.user_id},{$set:{"hoteldetails.hotelname":req.body.name,"hoteldetails.price":req.body.price}});
        }
        if(req.body.type=='dest'){
            await UserBookSchema.updateOne({ date: req.body.date ,user_id:bookdata.user_id},{$set:{destname:req.body.name}});
        }
    }
    else{
        console.log("Hellovv");
        const user = new UserBookSchema(bookdata);
        await user.save();
    }
    res.json({success:'Booking Sucessfull'});
    }catch(err){
        return res.json({error: 'invalid credentials'});
    }
});

module.exports=router;