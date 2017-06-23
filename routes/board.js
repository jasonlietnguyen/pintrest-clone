var express = require("express"),
  router = express.Router(),
  Board = require("../models/board"),
  MiddleWare = require("../middleware")



router.get('/', function (req, res) {
  res.redirect('/board')
})

// INDEX: GET - DISPLAY ALL BOARD
router.get('/board', function (req, res) {
  Board.find({}, function (err, boards) {
    if (err) {
      console.log(err)
    } else {
      res.render('board/board', { boards: boards })
    }
  })
})

// NEW: GET - RETURN A FORM FOR CREATING A NEW BOARD
router.get('/board/new', function (req, res) {
  res.render('board/new')
})

//CREATE: POST - CREATE A NEW BOARD
router.post('/board', function (req, res) {
  Board.create({
    title: req.body.title,
    image: req.body.image,
    link: req.body.link,
    body: req.body.body
  }, function(err, data){
    if(err){
      console.log(err)
    }else{
      console.log(req.user.username)
      res.redirect('/board')
    }
  })
})

module.exports = router;
