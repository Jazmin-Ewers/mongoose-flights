const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});


// App set up 
// git init within your file
// express -e mongoose-movies
// npm i
// Rename app.js to server.js
// npm i mongoose
// create config/database.js
// In order for you to connect to your database in database.js
// first npm i dotenv 
// touch .env
// DATABASE_URL=mongodb+srv://sei:<password>@sei-w0kys.azure.mongodb.net/admin?retryWrites=true
// replace password and change name of myFirstDatabase
// load env variables require('dotenv').config(); in server.js
// connect the database to Mongoose require('./config/database'); in server.js
// Create a module for the Schema/Model  "models/flights.js"
// Define a basic Schema for a Flight model

