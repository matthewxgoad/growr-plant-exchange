const mongoose = require("mongoose");
const AddressSchema = mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zipcode: Number
  });
const placeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.objectId,
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true,
        maxlength: 200
    },
    placeImage: { 
        type: String, 
        required: true 
    },
    address: {
        type: AddressSchema,
        required: true,
    },
    website: String,
});
module.exports = mongoose.model('Place', placeSchema);