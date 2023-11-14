const mongoose =require("mongoose");

const UserSchema=mongoose.Schema({
        name:String,
        email:String,
        phone:Number,
        password:String,
        // cpassword:String
});

const User=mongoose.model('Register',UserSchema);

module.exports=User;