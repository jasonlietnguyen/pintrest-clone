var express = require("express"),
  router = express.Router(),
  passport = require("passport"),
  User = require("../models/user")



router.get("/", function (req, res) {
  res.redirect("/board")
})


// REGISTER
router.get("/register", function (req, res) {
  res.render("register")
})

router.post("/register", function (req, res) {
  var newUser = new User({ username: req.body.username })
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      console.log(err)
      return res.render("register")
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/board")
      })
    }
  })
})


// LOGIN
router.get("/login", function (req, res) {
  res.render("login")
})

router.post("/login", passport.authenticate("local",
  {
    successRedirect: "/board",
    failureRedirect: "/login"
  }), function (req, res) {
    debugger
  })

// LOGOUT
router.get("/logout", function (req, res) {
  req.logOut();
  res.redirect("/board")
})


module.exports = router;