var app = require('express')();
var http = require('http').createServer(app);
const bodyParser = require("body-parser");
var shortUrl = require("node-url-shortener");
var cors = require('cors');
const StatManager = require('./stat_manager');
const DBConnect = require('./dbconnect');
app.use(cors());


app.use(bodyParser.json());
app.post('/api',(req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
  let inputURL = req.body;
  console.log(inputURL);
  shortUrl.short(inputURL.inputurl, function (err, url) {
    console.log(url);
    if(err) {
      res.json({status:'fail',output:err});
    }else{
      savedata = {
        "input": inputURL.inputurl,
        "output": url,
        "date":StatManager.Timestamp(),
      }
      DBConnect.SaveData(savedata);
      res.json({status:'success',output:url});
    }
});
  

});



http.listen(4000, () => {
        console.log('go to http://localhost:4000');
      });