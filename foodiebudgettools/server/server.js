//require the need componements
const express = require("express");
const mongoose = require("mongoose");
const {Schema} = mongoose;
const cors = require("cors");
const app = express();
//DB connect String
mongoose.connect("//mongodb://127.0.0.1:27017/FoodiesDB",{ useUnifiedTopology: true, useNewUrlParser: true },()=>{console.log("connected to FoodiesDB")});//
//setup using json
app.use(express.json());
app.use(cors());
//creat a DB schema
const UserSchema = new Schema({
    userName:String,
    userPwd:String
});
//specft the collection ---which table work for 
const FindUser = mongoose.model('UserInfor', UserSchema, 'UserInfor');     // collection name

app.get("/",function(req,res){
    res.send("hello world.");
});
//login module
app.post("/login",async function(req,res){
  
    //console.log(req.body.inputEmail); confirm the data have been pass to the backend
    //console.log(req.body.inputPassword);

    //query the DB with data
    FindUser.find({userName:req.body.inputEmail},{userPwd:req.body.inputPassword},function(err, result) {
        if (result) {//pass back the result
          console.log("request found user :"+result);
          res.json({"result":true});
        } else {
          res.json({"result":false});
        }
        if (err) {console.log(err);}// check if any err
      });
});

app.listen("3939",function(){
    console.log("foodies server online 3939");
})