const mongoose= require('mongoose');

const hotelSchema=mongoose.Schema({
    
    hotel_name:String,
    hotel_city:String,
    perday_price:String,
    hotel_pic:Array,
    
});
module.exports=hotelSchema;