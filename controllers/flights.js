const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}

// Step 4 Add and code the controller action/function to use a model function to get all flights and render them in index view and export it.
function index(req, res){
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { title: "All Flights", flights });
    });
}

function newFlight(req, res){
    res.render('flights/new', { title: "Add Flights"});
}

function create(req, res) {
    // Make sure "" values are not entered
    for (key in req.body){
        if (req.body[key] === "") delete req.body[key];
    }
    // create new info to go into Flight model 
    const flight = new Flight(req.body);
    // save new info that handels errors
    flight.save(function (err) {
        if (err) {
            console.log(err);
        }
        console.log(flight);
        res.redirect('/flights');
    });
}

// AAU, when viewing the detail page for a flight, I want to view a list of the tickets that have been created for that flight
function show(req, res){ 
Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
        res.render('flights/show', { title: "Flight Detail", flight, tickets});
    });
   });
}