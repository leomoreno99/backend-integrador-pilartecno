const axios = require('axios').default;
const config = require('config');
const Joi = require('joi');
const Place = require('../models/place.model');
const { placeSchema } = require('./schemas/place.schema');

const getPlaces = async (req, res) => {
    try {
        const places = await Place.find({})
        res.status(200).json(places)    
    } catch (error) {
        res.status(500).json({
            code: 'Internal server error',
            message: 'The server has encountered a situation that it does not know how to handle.',
            severity: 'LOW'
        })
    }
};

const getPlaceById = async (req, res) => {
    try {
        const place = await Place.findById(req.params.id)
        res.status(200).json(place)
    } catch (error) {
        res.status(500).json({
            code: 'Internal server error',
            message: err.details[0].message,
            severity: 'LOW'
        })
    }
}

const createPlace = async (req, res) => {
    const data = req.body
    try {
        Joi.assert(data, placeSchema)
        const place = new Place(data)
        await user.save(place)
        res.status(200).json({
            code: 'OK',
            message: 'Successful request'
        })
    } catch (error) {
        res.status(400).json({
            code: 'bad_request',
            message: err.details[0].message,
            severity: 'LOW'
        })
    }
}

module.exports = {getPlaces, getPlaceById, createPlace};