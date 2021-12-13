const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    show,
    new: newTicket
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
          res.render('flights/index', {flight, tickets});
        });
    });
}

function newTicket(req, res) {
    res.render('/flights/:id/tickets/new', {title: "Add New Ticket"})
}