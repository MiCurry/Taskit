/* Requiremnts */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');

console.log("app.js started")
app = module.exports = express();

/* Connect to Database */
const MongoClient = require('mongodb').MongoClient;
// Our Data Base URL. See peeps for un and password
let MONGO_URL = 'mongodb://bucky:Dirty6@ds257732.mlab.com:57732/taskit';
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

// Api
app.get('/api/users', )
app.get('/api/users/:uid', ) // List tasks for users
app.get('/api/event/:eid', ) // List tasks for an event
app.get('/api/task/:uid', )  // List tasks for a user

app.post('/api/user') // Create new user



// Create global app object
var port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log('Listening on ' + port);
});

console.log("End of App.js");
