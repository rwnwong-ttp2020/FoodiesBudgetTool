const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
var _ = require("lodash");
var router = express.Router();
const conStr = "mongodb://localhost:27017/FoodiesDB";
const app =express();
mongoose.connect(conStr,{ useUnifiedTopology: true, useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended:true}));

 const userShema = mongoose.Schema({
     userName:{
         type:String
         //required:[ture,"userName is missing"]
     },
     userPwd:{
         type:String
         //required:[ture,"user password is missing"]
     }
 });

 const UserModel = mongoose.model("UserInfor",userShema);
/* GET login page. */
router.get('/', function(req, res, next) {
    const userInputName = req.params.inputEmail;
    const userInputPwd = req.params.inputPassword;
    console.log(userInputName);
    console.log(userInputPwd);
    UserModel.findOne({userName:userInputName},function(err,result){
        if(result){
            console.log("have find the user!");
        }else{
            console.log("no user found");
        }
    });

  res.send('THis is the login page');
});

module.exports = router;


//mongodb+srv://mongodbuser:<password>@cluster0.kxwly.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb://localhost:27017/bolgerDB"