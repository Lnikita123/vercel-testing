const mongoose = require('mongoose')
let ObjectId= mongoose.Schema.Types.ObjectId 

const slotSchema = new mongoose.Schema({

    event: {
        type: ObjectId,
        required: true,
        ref:"event"

    },
    date: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
        require: true,
    
    },
    price: {
        type: Number,
        require: true,
    },

    total_quantity: {
        type: Number,
        required: true
    },
   
    available_quantity: {
        type: Number,
        required: true
    },
   
}, { timestamps: true })

module.exports = mongoose.model('Slot', slotSchema)