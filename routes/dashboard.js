var express = require("express"),
  router = express.Router(),
  Board = require("../models/board"),
  Dashboard = require("../models/board"),
  MiddleWare = require("../middleware")



// INDEX: GET - DISPLAY ALL BOARD
router.get('/dashboard', MiddleWare.isLoggedIn, function (req, res) {
  Board.find({}, function(err, boards){
   if(err){
     console.log(err)
   }else{
     res.render("dashboard/dashboard", {boards: boards, user: req})
   }
  })
})


// NEW: GET - RETURN A FORM FOR CREATING A NEW BOARD
router.get('/dashboard/new', function (req, res) {
  res.render('dashboard/new')
})

//CREATE: POST - CREATE A NEW BOARD
router.post('/dashboard', function (req, res) {
  var author = {
    id: req.user._id,
    username: req.user.username
  }
  Board.create({
    title: req.body.title,
    image: req.body.image,
    link: req.body.link,
    body: req.body.body,
    author: author
  }, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log(req.user.username)
      res.redirect('/dashboard')
    }
  })
})

module.exports = router;
