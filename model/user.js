
mongoose = require('mongoose')
let UserSchema = new mongoose.Schema({
  name: String,
  role: String,
  pin: Number,
  phone: Number
})

let User = mongose.modle ('User', UserSchema);
module.export = User;
