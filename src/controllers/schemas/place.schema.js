const Joi = require('joi')

const placeSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(250).required(),
    
    imgUrl: Joi.array().items(Joi.string())...,

    location: Joi.array().items(Joi.object({
        latitude: Joi.number()...,
        longitude: Joi.number()...,
    }))
})

module.exports = { placeSchema }