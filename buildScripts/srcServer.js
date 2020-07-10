"use strict";
var express = require('express');
var path = require('path');
var open = require('open');
const fs = require("fs");

var app = express();

// var port = process.env.PORT || 8000;
// app.listen(port, function(err){
//     if(err){
//         console.log(err);
//     } else {
//         open('http://localhost:' + port);
//     }
// });


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.use(express.static("../src"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))

