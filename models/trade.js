const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tradeSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true,
    },
    image: { 
        type: String, 
        required: true 
    },
    tradeCreated: {
        type: Date,
        default: Date.now
    },
    tradeType: { 
        type: String,
        default: 'Free' 
    },
    creator: { 
        type: mongoose.Types.ObjectId, 
        required: true, 
        ref: 'User'
    }
});

module.exports = mongoose.model('Trade', tradeSchema);