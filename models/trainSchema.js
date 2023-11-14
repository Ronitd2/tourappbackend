const mongoose= require('mongoose');

const trainSchema=mongoose.Schema({
    train_number:String,
    train_name:String,
    train_src:String,
    train_dstn:String,
    arrival_time:String,
    dest_time:String,
    from_station_name:String,
    to_station_name:String,
    duration:String,
    source:String,
    destination:String,
});
module.exports=trainSchema;