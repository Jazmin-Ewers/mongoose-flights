const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// AAU, when viewing the details page (show view) for a flight, I want to be able to add a destination for that flight, including its arrival date/time & one of the established airport codes
// POST	/posts/:id/comments	Create a comment for a post (1:M)
router.post('/flights/:id/destinations', destinationsCtrl.create);

// AAU, when viewing the details page (show view) for a flight, I want to see a list of that flight's destinations (airport & arrival)
// GET	/posts/:id/comments	Read all comments for a post
router.get('/flights/:id/destinations', destinationsCtrl.show);

module.exports = router;