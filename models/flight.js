const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// Define the basic schema for the Flight Model:
// airline	String	enum to include 'American', 'Southwest' & 'United'	n/a
// airport	String	enum to include
// 'AUS', 'DFW', 'DEN', 'LAX' & 'SAN'	'DEN'
// flightNo	Number	Required
// Between 10 and 9999	n/a
// departs	Date	n/a	One year from date created

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'DEN'],
    default: 'AUS' 
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  flightDate: {
    type: Number,
    default: Date.now + 365 * 24 * 60 * 60 * 1000
  }
});

  // Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);