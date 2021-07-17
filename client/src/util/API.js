import axios from "axios";

// eslint-disable-next-line
export default {
  // Get all trades in radius by logged in uid
  getTrades: function(id) {
    // Do we need /API/ here? Probably not.
    return axios.get('/api/users/radius/trades/'+ id);
  },
  // Get all events in radius by logged in uid
  getEvents: function(id) {
    return axios.get('/api/users/radius/events/'+ id);
  },
 // Get all places in radius by logged in uid
  getPlaces: function(id) {
    return axios.get('/api/users/radius/places/'+ id);
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