var mongoose = require("mongoose")

var boardSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  body: String,
  pinsCount: {type: Number, default: 0},
  author: {
    id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  }
})

module.exports = mongoose.model('Board', boardSchema)
