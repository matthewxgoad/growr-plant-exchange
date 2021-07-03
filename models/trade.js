const mongoose = require("mongoose");

const tradeSchema = mongoose.Schema({
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
    tradeCreated: {
        type: Date,
        default: Date.now
    },
    tradeImage: { 
        type: String, 
        required: true 
    },
    tradeType: { 
        type: String, 
        enum: ['Free', 'Swap', 'Request'], 
        default: 'Free' 
    },
});

module.exports = mongoose.model('Trade', tradeSchema);