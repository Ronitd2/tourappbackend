const mongoose= require('mongoose');

const placeSchema=mongoose.Schema({
    index_no:Number,
    place:String,
    name:String,
    pic:String,
    details:String,
    price:String,
    timing:String,
    location:String,
});
module.exports=placeSchema;