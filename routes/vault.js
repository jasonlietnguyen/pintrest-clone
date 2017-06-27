var express = require("express"),
  router = express.Router(),
  Board = require("../models/board"),
  Vault = require("../models/vault")
  MiddleWare = require("../middleware")

router.get('/vault/:id', function(req, res){
  Board.find({}, function(err, req){
    if(err){
      console.log(err)
    }else{

    }
  })
})


module.exports = router;
