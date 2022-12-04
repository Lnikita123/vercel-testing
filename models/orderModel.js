const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({

    user:{
        type:String,
        required:true,
    },
    event : {
        type: ObjectId,
        ref: 'event ',
        required: true
    },
        ticket: {
            type: ObjectId,
            ref: 'slot',
            required: true
        },
    total_price: {
        type: Number,
        required: true
    },
    purchase_date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required:true,
        enum: ['confirmed', 'cancelled']
    },

    
}, { timestamps: true })

module.exports = mongoose.model('order', orderSchema)