const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({
    street: String,
    city: String,
    state: String,
    zipcode: Number
  });

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.objectId,
    fullname: {
        type: String, 
        required: true
    },
    username: {
        type: String, 
        unique: true, 
        required: true
    },
    email: { 
        type: String, 
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { 
        type: String, 
        required: true, 
        minlength: 8 
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    userImage: { 
        type: String, 
        required: true 
    },
    address: {
        type: AddressSchema,
        required: true,
    },
    trades: {
        type: Schema.Types.objectId,
        ref: "trade"
    },
    events: {
        type: Schema.Types.objectId,
        ref: "event"
    },
    places: {
        type: Schema.Types.objectId,
        ref: "place"
    }
});

module.exports = mongoose.model('User', userSchema);