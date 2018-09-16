/* Requiremnts */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var mongo = require('mongodb');

// establish mongoose connection 
mongoose.connect

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
User = require('./model/user');
task = require('./model/task');
event = require('./model/events');

// REST to Mongoose 
// post (creating something) = 'Create','save'
// patch (updating or altering something) = 'update', 'findByIdAndUpdate', 'updateMany','updateOne'
// delete (removing/deleting an object) = 'findByIdAndRemove', 'remove', 'deleteMany'


/* User */
app.post('/api/user', function(req, res){
  User.create(User, function (error, user) {
    if (error) { 
      return next(error); // create a user
    }
  })
});
  
app.patch('/api/user/uid', function(req, res){ 
  User.updateMany(User,function(error,user){ // Update a user
    res.status('201')
    res.send();
  })
});
app.delete('/api/user/uid', function(req, res){  // Delete a user
  User.findByIdAndRemove(User,function(error,user){
    res.status('201')
    res.send(); 
  })
});


/* Task */
app.post('/api/task', function(req, res){
  Task.create(task, function (error, task) {
    if (error) {
      return next(error);
    }
  })
});
app.patch('/api/task/tid', function(req, res){
  User.updateMany(user,function(error,task){ // Update a user
    res.status('201')
    res.send();
  })
});
app.delete('/api/task/tid', function(req, res){  // Delete a user
    Task.findByIdAndRemove(task,function(error,task){
      res.status('201')
      res.send();
    })
});

/* Event */
app.post('/api/event', function(req, res) {
  Events.updateMany(events,function(error,events){ 
    res.status('201')
  });
 });          
app.post('/api/event/comment', function(req, res) {
  Events.create(events,function(error,events){
  })
});
   
// Add a comment to an event
app.patch('/api/event', function(req, res) { 
  Events.updateMany(events,function(error,events){ 
  })
});                
app.delete('/api/event/eid', function(req, res) { 
 Events.findByIdAndRemove(events,function(error,event){
    res.status('201')
    res.send();
 })
});


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
app.listen(port, function(){
    console.log('Listening on ' + port);
});

