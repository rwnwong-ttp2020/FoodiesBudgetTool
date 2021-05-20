require('dotenv').config();
const io = require('socket.io')(5000);
const express = require("express");
// const mongoose = require("mongoose");
// const {Schema} = mongoose;
const cors = require("cors");
const app = express();
//setup using jsosn
app.use(express.json());
app.use(cors());
////////////////////////////////////////////////////MongoDB////////////////////////////////////////
//DB connect String
// mongoose.connect(process.env.MONGOURL,{ useUnifiedTopology: true, useNewUrlParser: true },()=>{console.log("connected to FoodiesDB")});
// //creat a DB schema
// const UserSchema = new Schema({
//     userName:String,
//     userPwd:String
// });
// //specft the collection ---> which collection work for 
// const UserOperation = mongoose.model('UserInfo', UserSchema, 'UserInfo');     // collection name
///////////////////////////////////////////////////Yelp Api///////////////////////////////////////////
const yelp = require('yelp-fusion');
const apiKey = 'rgyyTNox1UhPWw-fu6kDbv7mGQ4TDFpu8Ex8OOJ3TRHXN5l1AuASmE7dYLL9GEl656GqIlApjT_UXcnXNqXfYjJbjuY8kK7PZgJfqbdyRkqBVx6koZaD-op6NFp4YHYx';
const client = yelp.client(apiKey);
//////////////////////////////////////////Route////////////////////////////////////////////////////////
app.get("/",function(req,res){
    res.send("hello world, for foodies server!");
});
//login module
// app.post("/login",function(req,res){

//     //query the DB with data   request  // req  = userInput
//     UserOperation.find({userName:req.body.inputEmail},{userPwd:req.body.inputPassword},function(err, result) {
//         if (result) {//pass back the result
//           console.log("request found user :"+result);
//           res.json({"result":true});
//         } else {
//           res.json({"result":false});
//         }
//         if (err) {console.log(err);}// check if any err
//       });
// });
// app.post("/register",function(req,res){

//   //insert the new user data into DB
//    const newUser = new UserOperation({
//     userName:req.body.inputEmail,
//     userPwd:req.body.inputPassword
//    });
//    newUser.save(function (err){
//     if(!err){
//       console.log("insert a new user "+newUser.userName+" successfuly!!! ");
//       res.json({"result":true});
//     }else{
//       res.json({"result":false});
//       console.log(err);
//     }
//    });
// });

app.post("/search",function(req,res){
  //https://api.yelp.com/v3/businesses/search?categories=food&location=NYC&price=1,2&limit=2
  
  const searchRequest = {
    term:req.body.resturant,
    categories:"food",
    location: req.body.location,
    limit:20
  };
  client.search(searchRequest).then(response => {
    //const firstResult = response.jsonBody.businesses;
    //const prettyJson = JSON.stringify(firstResult, null, 4);
    res.json(response.jsonBody);
    console.log(response.jsonBody);
  }).catch(e => {
    console.log(e);
  });
});

app.listen("3939",function(){
    console.log("foodies server online 3939");
});


