const express = require('express');
const app = express();

var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine","ejs");
app.use(express.static("public"));
app.get('/', function (req, res) {
  res.render('project')
});
 
app.listen(port,function(){
    console.log("Start")
});
