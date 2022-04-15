const express = require('express');
const router = express.Router();
const { getPlaces, getPlaceById, createPlace } = require('../controllers/places.controller');

router.get('/places', getPlaces);
router.get('/places/:id', getPlaceById);
router.post('/places', createPlace)
router.delete('/places/:id', )
router.patch('/places/:id', )

module.exports = router;
