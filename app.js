/* Requiremnts */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
if (existsSync(resolve('.env'))) require('dotenv').config();

console.log("app.js started")
app = module.exports = express();

/* Connect to Database */
const MongoClient = require('mongodb').MongoClient;
// Our Data Base URL. See peeps for un and password
let MONGO_URL = 'mongodb://<UserName>:<Password>@ds257732.mlab.com:57732/taskit';
MongoClient.connect(MONGO_URL, (err, db) => {
  if (err) {
    return console.log(err);
  }
});

// Models
user = require('./model/user');
task = require('./model/task');
event = require('./model/event');

// Routes
app.get('/', function(req, res){
  res.render();
})
app.post('/user', function(req, res){
  console.log("User Post");
})


// Create global app object
var port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log('Listening on ' + port);
});

console.log("End of App.js");
