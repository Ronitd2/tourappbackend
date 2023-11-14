const mongoose= require('mongoose');

const TravelListSchema=mongoose.Schema({ 
    bookid:String,
    placelist:Array,
});
const TravelListModel=mongoose.model('travellist',TravelListSchema);

module.exports= TravelListModel;