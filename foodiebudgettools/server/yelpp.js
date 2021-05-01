//require the need componements
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const {Schema} = mongoose;
const app = express();
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: true}));

////////////////////////////////////////////////////MongoDB////////////////////////////////////////
//DB connect String
// mongoose.connect("//mongodb://127.0.0.1:27017/FoodiesDB",{ useUnifiedTopology: true, useNewUrlParser: true },()=>{console.log("connected to FoodiesDB")});//
//setup using jsosn
app.use(express.json());
app.use(express.urlencoded());

app.use(cors());
// app.all('*', (req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "https://localhost:3000");
//   next();
// });
//creat a DB schema
const UserSchema = new Schema({
    userName:String,
    userPwd:String
});
//specft the collection ---which collection work for 
const UserOperation = mongoose.model('UserInfor', UserSchema, 'UserInfor');     // collection name
///////////////////////////////////////////////////Yelp Api///////////////////////////////////////////
const yelp = require('yelp-fusion');
const apiKey = 'rgyyTNox1UhPWw-fu6kDbv7mGQ4TDFpu8Ex8OOJ3TRHXN5l1AuASmE7dYLL9GEl656GqIlApjT_UXcnXNqXfYjJbjuY8kK7PZgJfqbdyRkqBVx6koZaD-op6NFp4YHYx';


//////////////////////////////////////////Route////////////////////////////////////////////////////////
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
    
  });
app.post("/",function(req,res){
  // const searchRequest = {
  //   term:'Starbucks',
  //   location: 'New York City, ny'
  // };
  // const client = yelp.client(apiKey);
  // client.search(searchRequest).then(response => {
  //   const firstResult = response.jsonBody.businesses[0];
  //   const prettyJson = JSON.stringify(firstResult, null, 4);
  //   res.json(prettyJson);
  // }).catch(e => {
  //   console.log(e);
  // });
  console.log(req.body);
});
//login module
app.post("/login",function(req,res){
  
    //console.log(req.body.inputEmail); confirm the data have been pass to the backend
    //console.log(req.body.inputPassword);

    //query the DB with data
    UserOperation.find({userName:req.body.inputEmail},{userPwd:req.body.inputPassword},function(err, result) {
        if (result) {//pass back the result
          console.log("request found user :"+result);
          res.json({"result":true});
        } else {
          res.json({"result":false});
        }
        if (err) {console.log(err);}// check if any err
      });
});
app.post("/register",function(req,res){
  
  //console.log(req.body.inputEmail); confirm the data have been pass to the backend
  //console.log(req.body.inputPassword);

  //insert the new user data into DB
   const newUser = new UserOperation({
    userName:req.body.inputEmail,
    userPwd:req.body.inputPassword
   });
   newUser.save(function (err){
    if(!err){
      console.log("insert a new user "+newUser.userName+" successfuly!!! ");
      res.json({"result":true});
    }else{
      res.json({"result":false});
      console.log(err);
    }
   });
});
app.post("/search",function(req,res){
  // res.header("Access-Control-Allow-Origin", "https://localhost:3000");
  res.send("reach to server!!!");
});
app.listen("8080",function(){
    console.log("foodies server online 8080");
});