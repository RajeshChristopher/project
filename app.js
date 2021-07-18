const express = require('express');
const app = express();

var bodyParser = require('body-parser');

const mongoose = require('mongoose');

mongoose.connect("mongodb://appathonproject:7zmpaavwJT8auvTpSgDEjSeptAsAEZEm29UkAr7dz08mOeogOtVtG8GKhopKqKWz9gpg7nblOtTRByuckyAuow%3D%3D@appathonproject.mongo.cosmos.azure.com:10255/test?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@appathonproject@",{useNewUrlParser:true,useUnifiedTopology:true});

mongoose.set("useFindAndModify",false);

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine","ejs");
app.use(express.static("public"));


var dbSchema = new mongoose.Schema({
  registrationNumber: String,
  image: String,
  name: String

});

var dbData = mongoose.model("dbData",dbSchema)

app.get('/', function (req, res) {
  res.render("project");
});

app.post("/",function(req,res){
  let entries = new dbData({
    registration: req.body.registrationNumber,
    image: req.body.image,
    name: req.body.firstname
  });
  
  dbData.create(entries,function(err,v1){
    if(err){
      console.log(err);
      res.redirect("/");
    }else{
      entries.save();
      res.redirect("/output");
    }
  });
//  entries.save();
});

app.get("/output",function(req,res){
  res.render("output");
});
 
app.listen(port,function(){
    console.log("Start")
});