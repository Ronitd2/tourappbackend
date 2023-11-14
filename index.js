const express = require('express');
const cors=require('cors');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const trainHandler=require('./routeHandler/trainHandler');
const hotelHandler=require('./routeHandler/hotelHandler');
const registerHandler=require('./routeHandler/registerHandler');
const loginRouter=require('./routeHandler/login');
const bookRouter=require('./routeHandler/book');
const destRouter=require('./routeHandler/destHandler');
const getbook=require('./routeHandler/getbook');
const getplace=require('./routeHandler/stateHandler');
const addtravel=require('./routeHandler/travelHandler');
app.use(cors());
const DATABASE=process.env.DATABASE;
//const password='PfmoRTlhoJJ5ivoN';


app.use(express.json());
mongoose
    .connect(DATABASE,
    {
        useNewUrlParser : true,
        useUnifiedTopology:true,
    }).then(()=>(console.log("Successfully connected")))
    .catch((err)=>(console.log(err)));



app.use('/ticket/train',trainHandler);
app.use('/hotelbooking/hotel',hotelHandler);
app.use('/register',registerHandler);
app.use('/login',loginRouter);
app.use('/booking',bookRouter);
app.use('/dest',destRouter);
app.use('/getbooking',getbook);
app.use('/place',getplace);
app.use('/travel',addtravel);
app.get("/",(req,res)=>{
    res.json({"success":'ok'})
})
app.listen(8000,()=>{
    console.log("server start at http://localhost:8000 port");
});


//mongo compass url
// mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2/train-details