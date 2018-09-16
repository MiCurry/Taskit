mongoose = require('mongoose')
var Schema = mongoose.Schema;
var UserSchema = require('./user');

var TaskSchema = new mongoose.Schema({
  name: String,
  desc: String,
  date: Date,
  taskType: String,
  state: String,
  alert: Boolean,
  creator: [UserSchema],
  priority: String,
  comments: [{ body: String,
               date: Date,
               author: [UserSchema]}],
  users: [UserSchema]
});


let Task = mongoose.model ('Task', TaskSchema);
module.export = Task;
