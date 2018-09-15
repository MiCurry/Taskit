mongoose = require('mongoose')

let TaskSchema = new mongoose.Schema({
  name: String,
  desc: String,
  date: Date,
  type: String,
  creator: { type: Schema.Types.ObjectID, ref: 'User' },
  priority: String,
  comments: [{ body: String,
               date: Date,
               author: { type: Schema.Types.ObjectID, ref: 'User' },}],
  users: [{ type: Schema.Types.ObjectID, ref: 'User' }],
})
let Task = mongose.modle ('Task', TaskSchema);
module.export = Task;
