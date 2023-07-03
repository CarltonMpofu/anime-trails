const express = require("express");
const mongoose = require('mongoose');

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
}); 

app.listen(3000, function(){
    console.log("Server running on port 3000");
});
