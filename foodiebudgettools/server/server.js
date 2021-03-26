const express = require("express");
//const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
mongoose.connect("mongodb://localhost:27017/FoodiesDB",{ useUnifiedTopology: true, useNewUrlParser: true },()=>{console.log("connected to FoodiesDB")});
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const UserSchema = {
    userName:String,
    userPwd:String
};
const FindUser = mongoose.model("UserInfor",UserSchema);

app.get("/",function(req,res){
    res.send("hello world.");
});

app.post("/login",function(req,res){
    //console.log(req.body.inputEmail);
    //console.log(req.body.inputPassword);
    FindUser.find({},function(resD,err){
        console.log(resD);
    });
});

// {userName:req.body.inputEmail},
//         {userPwd:req.body.inputPassword},
//         function(resDB,err){
//             if(!err && resDB){
//                 console.log("reustl = "+resDB);
//                 res.json(resDB);
//             }else{
//                 console.log("reustl = "+resDB);
//                 console.log("err = "+err);
//                 res.json(err);
//             }
//         }



app.listen("3939",function(){
    console.log("foodies server online 3939");
})