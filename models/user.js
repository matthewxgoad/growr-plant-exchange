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
        required: false 
    },
    address: { 
        type: String, 
        required: true 
    },
    location: {
        // testing geoJSON format into schema
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }

        // lat: { type: Number, required: true },
        // lng: { type: Number, required: true },
    },
    neighborhood: { 
        type: String, 
        required: true 
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
    comments: [
        { 
        type: mongoose.Types.ObjectId, 
        required: true, 
        ref: 'Comment'
    }],
});

userSchema.plugin(uniqueValidator);

// setting index 2dsphere to use $geoWithin or $near
userSchema.index({ location: '2dsphere'});

module.exports = mongoose.model('User', userSchema);