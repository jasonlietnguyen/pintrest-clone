var express = require("express"),
  router = express.Router(),
  Board = require("../models/board"),
  MiddleWare = require("../middleware")



// INDEX: GET - DISPLAY ALL Pins
router.get('/:username', function (req, res) {
  Board.find({}, function (err, boards) {
    if (err) {
      console.log(err)
    } else {
      res.render('board/board', { boards: boards })
    }
  })
})

module.exports = router;
