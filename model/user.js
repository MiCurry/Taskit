
mongoose = require('mongoose')
let UserSchema = new mongoose.Schema({
  name: String,
  role: String,
  pin: Number,
  phone: Number
})

UserSchema.methods.create = function(req, res){

    return 0;
}

let User = mongoose.model ('User', UserSchema);
module.export = User;
