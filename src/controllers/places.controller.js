const Joi = require('joi');
const Place = require('../models/place.model');
const { placeSchema } = require('./schemas/place.schema');

const getPlaces = async (req, res) => {
    try {
        const places = await Place.find({})
        res.status(200).json(places)    
    } catch (err) {
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
    } catch (err) {
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
        await place.save()
        res.status(200).json({
            code: 'OK',
            message: 'Successful request'
        })
    } catch (err) {
        res.status(400).json({
            code: 'bad_request',
            message: err.details[0].message,
            severity: 'LOW'
        })
    }
}

const updatePlace = async (req, res) => {
    const data = req.body
    try {
        Joi.assert(data, placeSchema)
        await Place.findByIdAndUpdate(req.params.id, data)
        res.status(200).json({
            code: 'OK',
            message: 'Place updated successfully'
        })
    } catch (err) {
        res.status(400).json({
            code: 'bad_request',
            message: err.details[0].message,
            severity: 'LOW'
        })
    }
}

const deletePlace = async (req, res) => {
    try {
        //Arreglar bug al ingresar un ID no existente.
        await Place.findByIdAndDelete(req.params.id)
        res.status(200).json({
            code: 'OK',
            message: 'Place deleted successfully'
        })
    } catch (err) {
        res.status(500).json({
            code: 'Internal server error',
            message: err.details[0].message,
            severity: 'LOW'
        })
    }
}

module.exports = {getPlaces, getPlaceById, createPlace, deletePlace, updatePlace};