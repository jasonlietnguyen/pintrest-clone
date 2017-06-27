var mongoose = require("mongoose")

var dashboardSchema = new mongoose.Schema({
  author: {
    id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  boards: {
    type: mongoose.Schema.Types.ObjectId,
      ref: "Board"
  }
})

module.exports = mongoose.model('Dashboard', dashboardSchema)
