var express=require("express");
var bodyparser=require("body-parser");

var app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    next();
  });

var productApi=require("./controllers/product.controller");
app.use("/api/products",productApi);

app.listen(8000);
console.log("Server up and running on port 8000");
