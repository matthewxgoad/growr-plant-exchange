const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.objectId,
    username: {
        type: String,
        trim: true,
        required: "Username is Required"
    },
    email: { 
        type: String, 
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 8, "Password should be longer."]
      },
    userCreated: {
        type: Date,
        default: Date.now
    },
    userImage: { 
        type: String, 
        required: false 
    },
    address: {
        type: String,
        required: true,
    }
    // trades: {
    //     type: Schema.Types.objectId,
    //     ref: "trade"
    // },
    // events: {
    //     type: Schema.Types.objectId,
    //     ref: "event"
    // },
    // places: {
    //     type: Schema.Types.objectId,
    //     ref: "place"
    // }
});

const User = mongoose.model("User", userSchema);

module.exports = User;