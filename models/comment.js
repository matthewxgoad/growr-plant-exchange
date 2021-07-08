const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    body: {
        type: String, 
        required: true,
        maxlength: 300
    },
    commentCreated: {
        type: Date,
        default: Date.now
    },
    creator: { 
        type: mongoose.Types.ObjectId, 
        required: true, 
        ref: 'User'
    }
});

module.exports = mongoose.model('Comment', commentSchema);