const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// AAU, I want to view a list of all flights (index view) that displays each flight's airline, airport, flight no., and departure date/time.
// Step 1 Define proper route to view a list of flights : GET /post Read all posts	Controller Action: index
// Step 3 Define the route in the router module that will match the HTTP request and map it to the <controller>.<method> that will send user to index view that displays all flights
router.get('/', flightsCtrl.index); 

// AAU, I want to create flights by entering the information on a page (new view) that has a form and submitting it.
// Step 1 Define proper route to render new view page : GET /posts/new Return view (form) to add a new post	Controller Action: new
// Step 3 Define the route in the router module that will match the HTTP request and map it to the <controller>.<method> that will send user to new view that displays a form
router.get('/new', flightsCtrl.new); 





module.exports = router;
