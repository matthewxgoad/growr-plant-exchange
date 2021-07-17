import axios from "axios";

// eslint-disable-next-line
export default {
  // Get all trades
  getTrades: function(id) {
    // Do we need /API/ here? Probably not.
    return axios.get('/api/users/radius/trades/'+ id);
  },
  // Get all events
  getEvents: function() {
    return axios.get("/api/events/");
  },
 // Get all places
  getPlaces: function() {
    return axios.get("/api/events/");
  },
  // Get user info by id
  getUser: function(id) {
    return axios.get("/api/users/", id);
  }
};


// Deletes a book from the database with a given id, then reloads books from the db
// function getTrades() {
//   API.getTrades()
//     .then(res => loadTrades())
//     .catch(err => console.log(err));
// }