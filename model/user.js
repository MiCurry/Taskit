
mongoose = require('mongoose')
let UserSchema = new mongoose.Schema({
  name: String,
  role: String,
  pin: Number,
  phone: Number
})

let User = mongoose.model ('User', UserSchema);
module.export = User;
