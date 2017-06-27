var express = require("express"),
  router = express.Router(),
  Board = require("../models/board"),
  Vault = require("../models/vault"),
  MiddleWare = require("../middleware")


// INDEX: GET - DISPLAY ALL BOARD
router.get('/dashboard', function (req, res) {
  res.render('dashboard/dashboard')
})

// // NEW: GET - RETURN A FORM FOR CREATING A NEW BOARD
// router.get('/board/new', function (req, res) {
//   res.render('board/new')
// })

// //CREATE: POST - CREATE A NEW BOARD
// router.post('/board', function (req, res) {
//   var author = {
//     id: req.user._id,
//     username: req.user.username
//   }
//   Board.create({
//     title: req.body.title,
//     image: req.body.image,
//     link: req.body.link,
//     body: req.body.body,
//     author: author
//   }, function (err, data) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(req.user.username)
//       res.redirect('/board')
//     }
//   })
// })

// // SHOW: GET - SHOW A SPECIFIC BOARD
// router.get('/board/:id', function(req, res){
//   Board.findById(req.params.id, function(err, foundBoard){
//     if(err){
//       console.log(err)
//     }else{
//       res.render('board/show', {board: foundBoard})
//     }
//   })
// })


module.exports = router;
