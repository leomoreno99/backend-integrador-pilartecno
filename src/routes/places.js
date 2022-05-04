const express = require('express');
const router = express.Router();
const { getPlaces, getPlaceById, createPlace, deletePlace, updatePlace } = require('../controllers/places.controller');

router.get('/places', getPlaces);
router.get('/places/:id', getPlaceById)
router.post('/places', createPlace)
router.patch('/places/:id', updatePlace)
router.delete('/places/:id', deletePlace)

module.exports = router;
