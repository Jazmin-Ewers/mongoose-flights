const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// AAU, I want to view a list of all flights (index view) that displays each flight's airline, airport, flight no., and departure date/time.
// Step 1 Define proper route to view a list of flights : GET	/posts	Read all posts	Controller Action: index
// Step 3 Define the route in the router module that will match the HTTP request and map it to the <controller>.<method> that will send user to index view that displays all flights
router.get('/', flightsCtrl.index); 




module.exports = router;
