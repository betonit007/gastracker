const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReadingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    store: {
        type: String,
        required: true
    },
    street: {
        type: String,
    },
    city: {
        type: String,

    },
    state: {
        type: String
    },
    total: {
        type: Number,
        required: true
    },
    perGallon: {
        type: Number,
    },
    gallons: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = Reading = mongoose.model('reading', ReadingSchema)