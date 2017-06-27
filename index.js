var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  methodOverride = require('method-override'),
  Board = require('./models/board'),
  User = require('./models/user'),
  app = express(),
  port = 3000


/////////////////////////////////////////////////////////////////////////////////
// Passport
/////////////////////////////////////////////////////////////////////////////////

app.use(require("express-session")({
  secret: "ths is my secret",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


/////////////////////////////////////////////////////////////////////////////////
// App Config
/////////////////////////////////////////////////////////////////////////////////

// Add Mongoose
mongoose.connect('mongodb://pintrest:pintrest@ds135912.mlab.com:35912/pintrest');
// Make Ejs Default Files
app.set('view engine', 'ejs');
// Make Css files work
app.use(express.static('public'));
// Use Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
// Take anything with _method and treat it as a PUT or DELETE
app.use(methodOverride('_method'));
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
})



/////////////////////////////////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////////////////////////////////

var  boardRoutes = require("./routes/board"),
     dashboardRoutes = require("./routes/dashboard"),
     indexRoutes = require("./routes/index")

app.use(indexRoutes);
app.use(boardRoutes);
app.use(dashboardRoutes);







app.listen(port, function (req, res) {
  console.log('App listening on port: ', port)
})





































// Board.remove({},function(err, req){})

  
// Board.create({
//   title: "Energistically coordinate reliable quality",
//   image: "https://static.pexels.com/photos/443356/pexels-photo-443356.jpeg",
//   body: "Progressively productize virtual value vis-a-vis.",
//   link: "https://www.pexels.com/photo/action-adventure-aerial-aerial-shot-312105/",
// },
//   {
//     title: "Intrinsicly strategize process-centric solutions",
//     image: "https://static.pexels.com/photos/247303/pexels-photo-247303.jpeg",
//     body: "Appropriately embrace ethical growth strategies for turnkey total linkage. Continually negotiate market-driven.",
//     link: "https://v4-alpha.getbootstrap.com/components/card/",
//   },
//   {
//     title: "Uniquely seize intermandated results.",
//     image: "https://static.pexels.com/photos/235648/pexels-photo-235648.jpeg",
//     body: "Completely orchestrate intermandated technologies after flexible channels. Professionally underwhelm team driven benefits vis-a-vis open-source platforms. Seamlessly.",
//     link: "http://123moviesfreez.com/",
//   },
//   {
//     title: "Quickly engineer wireless ROI.",
//     image: "https://static.pexels.com/photos/214574/pexels-photo-214574.jpeg",
//     body: "Compellingly harness enterprise-wide materials with stand-alone ideas. Uniquely mesh state of the.",
//     link: "http://www.sansfrancis.co/",
//   },
//   {
//     title: "Globally maintain extensible web.",
//     image: "https://static.pexels.com/photos/47063/castle-love-love-locks-loyalty-47063.jpeg",
//     body: "Seamlessly pursue go forward information before backend deliverables. Continually grow client-centric scenarios via performance based products.",
//     link: "https://semantic-ui.com/",
//   },
//   {
//     title: "Dramatically pontificate frictionless vortals.",
//     image: "https://static.pexels.com/photos/312105/pexels-photo-312105.jpeg",
//     body: "Proactively pursue top-line infomediaries and state of the art content. Distinctively orchestrate.",
//     link: "https://unsplash.com/",
//   }, function (err, data) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(data)
//     }
//   })