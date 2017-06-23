var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  app = express(),
  port = 4000


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



/////////////////////////////////////////////////////////////////////////////////
// Restful Route
/////////////////////////////////////////////////////////////////////////////////


app.get('/', function (req, res) {
  res.redirect('/board')
})

// INDEX: GET - DISPLAY ALL Pins
app.get('/board', function (req, res) {
  Pin.find({}, function (err, pins) {
    if (err) {
      console.log(err)
    } else {
      res.render('board/board', {pins: pins})
    }
  })
})

app.listen(port, function (req, res) {
  console.log('App listening on port: ', port)
})






































// Pin.create({
//   image: "https://static.pexels.com/photos/443356/pexels-photo-443356.jpeg",
//   body: "Progressively productize virtual value vis-a-vis."
// },
//   {
//     image: "https://static.pexels.com/photos/247303/pexels-photo-247303.jpeg",
//     body: "Appropriately embrace ethical growth strategies for turnkey total linkage. Continually negotiate market-driven."
//   },
//   {
//     image: "https://static.pexels.com/photos/235648/pexels-photo-235648.jpeg",
//     body: "Completely orchestrate intermandated technologies after flexible channels. Professionally underwhelm team driven benefits vis-a-vis open-source platforms. Seamlessly."
//   },
//   {
//     image: "https://static.pexels.com/photos/214574/pexels-photo-214574.jpeg",
//     body: "Compellingly harness enterprise-wide materials with stand-alone ideas. Uniquely mesh state of the."
//   },
//   {
//     image: "https://static.pexels.com/photos/47063/castle-love-love-locks-loyalty-47063.jpeg",
//     body: "Seamlessly pursue go forward information before backend deliverables. Continually grow client-centric scenarios via performance based products."
//   },
//   {
//     image: "https://static.pexels.com/photos/312105/pexels-photo-312105.jpeg",
//     body: "Proactively pursue top-line infomediaries and state of the art content. Distinctively orchestrate."
//   }, function (err, data) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(data)
//     }
//   })