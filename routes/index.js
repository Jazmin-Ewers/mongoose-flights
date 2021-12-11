var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/flights');
});

module.exports = router;

// AAU, I want to view a list of all flights (index view) that displays each flight's airline, airport, flight no., and departure date/time.
