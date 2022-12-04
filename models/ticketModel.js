const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const ticketSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,

    },
    event: {
        type: ObjectId,
        ref: 'event ',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },



}, { timestamps: true })

module.exports = mongoose.model('ticket', ticketSchema)