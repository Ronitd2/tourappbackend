const UserBookSchema =require("../models/user_booking_schema");
const User =require("../models/user_schema.js");
const express=require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = 'DUMBARSE';

router.post("/", async (req,res)=>{
    try{
        console.log(req.body);
    const decoded = jwt.verify(req.body.token, SECRET);
    const uemail=decoded.data.email;
    const userdata= await User.findOne({email:uemail});
    console.log(userdata);
    const bookinghistroy=  await UserBookSchema.find({user_id:userdata._id});
    console.log(bookinghistroy);
    if(bookinghistroy){
        res.json(bookinghistroy);
    }
    else{
        return res.json({name: userdata.name});
    }
}catch(error){
    console.log(error);
}
});

module.exports=router;