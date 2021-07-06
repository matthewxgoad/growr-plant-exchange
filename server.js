require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');

// const mongoose = require("mongoose");
// const routes = require("./routes");
const usersRoutes = require('./routes//api/user-routes')
const HttpError = require('./models/http-error');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view

// app.use(routes);
app.use('/api/users', usersRoutes);

// Error handler
app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error ,req, res, next) => {
  if (res.headerSent) {
      return next(error);
  }
  res.status(error.code || 500);
  res.json({message: error.message || 'An unknown error occurred!'});
});


// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// );

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
