const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// AAU, I want to view a list of all flights (index view) that displays each flight's airline, airport, flight no., and departure date/time.
// Define proper route to view a list of flights : GET /post Read all posts	Controller Action: index
router.get('/', flightsCtrl.index); 

// AAU, I want to create flights by entering the information on a page (new view) that has a form and submitting it.
// GET /posts/new Return view (form) to add a new post	Controller Action: new
router.get('/new', flightsCtrl.new); 

// Creating a new Flight when you submit the form
// POST	/posts Create a new post Controller Action:	create
router.post('/', flightsCtrl.create);

// AAU, when viewing the list of flights, I want to click on a "detail" link displayed next to each flight to view all of the properties for that flight (show view)
//GET /posts/:id Read a specific post Controller Action: show
router.get('/:id', flightsCtrl.show)


module.exports = router;
