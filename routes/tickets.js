const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// Also on the flight's show view, display a New Ticket link (perhaps styled to look like a button) that when clicked, shows the ticket's new view used to create a ticket for the flight. When the form is submitted, create the ticket on the server and redirect back to the flight's show view.
// GET	/posts/:id/comments/new	n/a (Non-RESTful)
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

// POST	/posts/:id/comments	Create a comment for a post (1:M)
router.post('/flights/:id/tickets/new', ticketsCtrl.create);

module.exports = router;