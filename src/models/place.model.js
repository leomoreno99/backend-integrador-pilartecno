const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
})

const PlaceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: Array,
        required: true
    },
    location: {
        type: [LocationSchema],
        required: true
    }

})

const Place = mongoose.model('Place', PlaceSchema)
module.exports = Place