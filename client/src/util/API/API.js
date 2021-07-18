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
   // Get other user id
  //  getOtherUser: function(id) {
  //   return axios.get("/api/users/profile"+ id);
  // },


  // TO DO New user sign up
  createUser: function(formData) {
    return axios.post("/api/users/signup/", formData)
  }
};
