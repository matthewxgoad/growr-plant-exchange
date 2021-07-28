import axios from "axios";



// eslint-disable-next-line
export default {
  // GET all trades in radius by logged in uid
  getTrades: function(id) {
    return axios.get('/api/users/radius/trades/'+ id);
  },
  // GET all events in radius by logged in uid
  getEvents: function(id) {
    return axios.get('/api/users/radius/events/'+ id);
  },
 // GET all places in radius by logged in uid
  getPlaces: function(id) {
    return axios.get('/api/users/radius/places/'+ id);
  },
  // GET user by uid
  getUser: function(id) {
    return axios.get('/api/users/profile/'+ id);
  },
  // DELETE trade data by trade id
  deleteTrade: function(id) {
    return axios.delete('/api/trades/'+ id);
  },
    // DELETE event data by event id
  deleteEvent: function(id) {
    return axios.delete('/api/events/'+ id);
  },
    // DELETE place data by place id
  deletePlace: function(id) {
    return axios.delete('/api/places/'+ id);
  },
  // create new user
  createUser: function(formData) {
    return axios.post("/api/users/signup/", formData)
  }
};
