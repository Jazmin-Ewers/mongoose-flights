const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    show,
    new: newTicket,
    create
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
          res.render('flights/index', {flight, tickets});
        });
    });
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('tickets/new', {flight: flight, title: "Add New Ticket"});
    });
}

function create(req, res) {
    const ticket = new Ticket(req.body);
    ticket.flight = req.params.id;
    ticket.save(function(err) {
      if (err) return render(err);
      res.redirect(`/flights/${req.params.id}`);
    });
  }

