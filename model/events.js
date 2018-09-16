mongoose = require('mongoose')
var TaskSchema = require('./task');
var UserSchema = require('./user');

let EventsSchema = new mongoose.Schema({
  name: String,
  date: Date,
  description: String,
  comments: [{ body: String,
               date: Date,
               author: [UserSchema]}],
  creator: [UserSchema],
  tasks: [TaskSchema]
})
let Events = mongoose.model('Events', EventsSchema);
module.export = Events;
