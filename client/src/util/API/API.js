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
  // Get logged in user info by id
  getUser: function(id) {
    return axios.get('/api/users/profile/'+ id);
  },
  deleteTrade: function(id) {
    return axios.delete('/api/trades/'+ id);
  },
  // Get conversation by userId
  getConvo: function(id) {
    return axios.get('/api/conversations/'+ id);
  },
//Get message by convoId
  getMessages: function(id) {
    return axios.get('/api/messages/'+ id);
  },
  //Post new message
  postMessage: function(formData) {
    return axios.post('/api/messages', formData);
  },

  // TO DO New user sign up
  createUser: function(formData) {
    return axios.post("/api/users/signup/", formData)
  }
};
