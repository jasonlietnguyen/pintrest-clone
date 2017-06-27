var mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose")

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  dashboard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dashboard"
  }
})

userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model("User", userSchema)