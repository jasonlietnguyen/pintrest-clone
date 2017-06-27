var mongoose = require("mongoose")


var vaultSchema = new mongoose.Schema({
  name: String,
  author: {
    id:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  },
  boards:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board"
    }
  ]
})

module.exports = mongoose.model("Vault", vaultSchema)