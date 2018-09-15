mongoose = require('mongoose')
var TaskSchema = require('./task');
var UserSchema = require('./user');

let EventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  description: String,
  comments: [{ body: String,
               date: Date,
               author: [UserSchema]}],
  creator: [UserSchema],
  tasks: [TaskSchema]
})

let Event = mongoose.model('Event', EventSchema);
module.export = Event;
