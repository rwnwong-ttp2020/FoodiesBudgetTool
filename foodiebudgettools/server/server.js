//require the need componements
const express = require("express");
const mongoose = require("mongoose");
const {Schema} = mongoose;
const cors = require("cors");
const app = express();
//DB connect String
mongoose.connect("//mongodb://127.0.0.1:27017/FoodiesDB",{ useUnifiedTopology: true, useNewUrlParser: true },()=>{console.log("connected to FoodiesDB")});//
//setup using jsosn
app.use(express.json());
app.use(cors());
//creat a DB schema
const UserSchema = new Schema({
    userName:String,
    userPwd:String
});
//specft the collection ---which collection work for 
const UserOperation = mongoose.model('UserInfor', UserSchema, 'UserInfor');     // collection name

app.get("/",function(req,res){
    res.send("hello world.");
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
      console.log("insert "+newUser.userName+" successfuly!!! ");
      res.json({"result":true});
    }else{
      res.json({"result":false});
      console.log(err);
    }
   });
  
});
app.listen("3939",function(){
    console.log("foodies server online 3939");
});