// Require
const express = require("express");
const fs = require("fs");
const app = express();

app.use('/js', express.static('./public/js'));
app.use('/css', express.static('./public/css'));

// Go to http://localhost:8000
app.get('/', function(req,res){
    console.log("Hello World");
    let doc = fs.readFileSync("./app/index.html", "utf-8");
    res.send(doc);
})

function init(){
    console.log(`Listening in on Port ${port}!`);
}

let port = 8000;
app.listen(port, init);