const Flight = require('../models/flight');

module.exports = {
    create,
    show
}

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err) {
            if (err) console.log(err);
            console.log(flight);
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        let destinations = flight.destinations
        res.render('flights/show', { destinations });
    });
}