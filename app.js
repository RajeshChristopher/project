const express = require('express');
const app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine","ejs");
app.use(express.static("public"));
app.get('/', function (req, res) {
  res.render('project')
});
 
app.listen(3000,function(){
    console.log("Start")
});