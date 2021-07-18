const fs = require('fs');
require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require("mongoose");

const usersRoutes = require('./routes/api/user-routes');
const placeRoutes = require('./routes/api/place-routes');
const tradeRoutes = require('./routes/api/trade-routes');
const eventRoutes = require('./routes/api/event-routes');
const commentRoutes = require('./routes/api/comment-routes');
const conversationRoutes = require('./routes/api/conversation-routes');
const messageRoutes = require('./routes/api/message-routes');


const HttpError = require('./models/http-error');
const path = require('path');
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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.use(cors())

// Static images
app.use('/uploads/images', express.static(path.join('uploads', 'images')));

// app.use(routes);
app.use('/api/users', usersRoutes);
app.use('/api/places', placeRoutes);
app.use('/api/trades', tradeRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/conversations', conversationRoutes);
app.use('/api/messages', messageRoutes);

// Error handler
app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});





// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/grower",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
