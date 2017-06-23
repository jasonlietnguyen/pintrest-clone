var mongoose = require("mongoose")

var pinSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  body: String,
  author: {
    id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  }
})

module.exports = mongoose.model('Pin', pinSchema)
