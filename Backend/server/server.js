const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.send("Hello World!")
})

app.post("/test",function(req,res){
    console.log(req.body)
    res.send("Success")
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
