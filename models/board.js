var mongoose = require("mongoose")

var boardSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  body: String,
  pinsCount: Number,
  author: {
    id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  }
})

module.exports = mongoose.model('Board', boardSchema)
