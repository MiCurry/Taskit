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

/* User */
app.post('/api/user', function(req, res){ // Create a new user
  console.log("We got a request to post a user!")
  res.status('201')
  res.send();
})
app.patch('/api/user', function(req, res){ // Update a user
  res.status('201')
  res.send();
})
app.delete('/api/user', function(req, res){ }) // Delete a user

/* Task */
app.post('/api/task', functions(req, res){ })                 // Create a task
app.post('/api/task/comment', functions(req, res){ })         // Create a comment for a task
app.patch('/api/event/task/complete', functions(req, res){ }) // Mark a task as complete
app.patch('/api/event/task/drop', functions(req, res) { })    // Religish a task
app.delete('/api/event/task', functions(req, res) { })        // Delete a task (Not completing a task just removing it if it was created by accident or not needed)

/* Event */
app.post('/api.event', function(req, res) { })                // Create an event
app.post('/api/event/comment', function(req, res) { })        // Add a comment to an event
app.patch('/api/event', function(req, res) { }                // Update the details of an event
app.delete('/api/event', function(req, res) { })              // Delete an event


/*
app.post('/api/event/task', task.create); // Create a new task for an event
app.post('/api/event/task/comment', task.comment); // Create a new comment for a task
app.patch('/api/event/task/complete', task.complete); // mark the task as complete
app.patch('/api/event/task/drop', task.drop); // Religish a task

app.post('/api/event', event.create); // Create a new event
app.post('/api/event/comment', event.comment); // Create a new eent
app.patch('/api/event', event.update);
*/


// Create global app object
var port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log('Listening on ' + port);
});

console.log("End of App.js");
