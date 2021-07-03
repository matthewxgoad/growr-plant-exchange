const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.objectId,
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
    }
});

module.exports = mongoose.model('Comment', commentSchema);