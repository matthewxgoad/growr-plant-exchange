const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true, 
        minlength: 6 
    },
    image: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    location: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    userCreated: {
        type: Date,
        default: Date.now
    },
    places: [
        { 
        type: mongoose.Types.ObjectId, 
        required: true, 
        ref: 'Place'
    }],
    trades: [
        { 
        type: mongoose.Types.ObjectId, 
        required: true, 
        ref: 'Trade'
    }],
    events: [
        { 
        type: mongoose.Types.ObjectId, 
        required: true, 
        ref: 'Event'
    }],
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);