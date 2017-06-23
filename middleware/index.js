var middlewareObj = {},
    Board = require("../models/board")

// middlewareObj.checkBoardOwnership = function (req, res, next) {
//   if (req.isAuthenticated()) {
//     Board.findById(req.params.id, function (err, board) {
//       if (err) {
//         res.redirect("back")
//       } else {
//         if (board.author.id.equals(req.user._id)) {
//           next();
//         } else {
//           res.redirect("back")
//         }
//       }
//     })
//   } else {
//     res.redirect("back");
//   }
// }


middlewareObj.isLoggedIn = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login")
}


module.exports = middlewareObj;