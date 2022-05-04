const Joi = require('joi')

const placeSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(3).max(500).required(),
    
    imgUrl: Joi.array().items(Joi.string().required()).required(),

    location: Joi.object({
        //Cuando le envio un string lo toma como numeros, ver video de Marcos, ahi explica porque pasa
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
    }).required()
})

module.exports = { placeSchema }