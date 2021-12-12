const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: Date
})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'AUS' 
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  flightDate: {
    type: Date,
    default: function () {
      const date = new Date();
      return date.setFullYear(new Date().getFullYear() + 1);
    }
  },
  destinations: [destinationSchema]
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);