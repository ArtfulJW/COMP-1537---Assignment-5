// Require
/* 
npm install express
npm install express-session
npm install jsdom
npm install mysql2
download XAMPP
*/
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

// https://www.npmjs.com/package/jsdom
const { JSDOM } = require('jsdom');

// Set Static Folder
app.use(express.static(path.join(__dirname,'static')));

// just like a simple web server like Apache web server
// app.use('/js', express.static('static/js'));
// app.use('/css', express.static('static/css'));


// Go to http://localhost:8000
// Basic GET method Route
app.get('/', function(req,res){
    // console.log("What's going on!!!!");
    // let doc = fs.readFileSync("./static/html/index.html", "utf-8");
    // res.send(doc);

    // Basic 
    res.send("Hello World");

})

function init(){
    console.log(`Listening in on Port ${port}!`);
}

let port = 8000;
app.listen(port, init);