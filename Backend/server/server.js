const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.send("Hello World!")
})
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
