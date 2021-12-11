const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight
}

// Step 4 Add and code the controller action/function to use a model function to get all flights and render them in index view and export it.
function index(req, res){
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { title: "All Flights", flights });
    });
}

function newFlight(req,res){
    res.render('flights/new')
}