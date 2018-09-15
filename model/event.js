mongoose = require('mongoose')
let EventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  description: String,
  comments: [{ body: String,
               date: Date,
               author: { type: Schema.Types.ObjectID, ref: 'User' },}],
  creator: { type: Schema.Types.ObjectID, ref: 'User' }
  tasks: [{ type: Schema.Types.ObjectID, ref: 'Task' }]
})

let Event = mongose.modle ('Event', EventSchema);
module.export = Event;
