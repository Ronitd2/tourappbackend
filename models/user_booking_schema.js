const mongoose =require("mongoose");

const UserBookSchema=mongoose.Schema({
        user_id:String,
        name:String,
        traindetails:{
                trainname:String,
                price:Number
        },
        hoteldetails:{
                hotelname:String,
                price:Number,
        },
        destname:String,
        date:String,
});

const Userbook=mongoose.model('booking',UserBookSchema);

module.exports=Userbook;