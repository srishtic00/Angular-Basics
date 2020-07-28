var express=require("express");
var bodyparser=require("body-parser");

var app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


var productApi=require("./controllers/product.controller");
app.use("/api/products",productApi);

app.listen(8000);
console.log("Server up and running on port 8000");
