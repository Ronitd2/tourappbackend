const mongoose= require('mongoose');

const destSchema=mongoose.Schema({
    
    state:String,
    place:String,
    pic:Array,
    details:String
});
module.exports=destSchema;