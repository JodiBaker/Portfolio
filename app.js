//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");



const app = express();

app.set('view engine', 'ejs');


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res){
    res.render("home")
})

app.get("/about", function(req, res){
    res.render("about")
})

app.get("/contact", function(req, res){
    res.render("contact")
})


app.listen(3000, function(){
    console.log("The server is now running on port 3000");
});



