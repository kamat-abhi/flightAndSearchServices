const express = require('express');
const CityController = require('../../controlers/city-controller');
const FlightController = require('../../controlers/flight-controller');
const AirportController = require('../../controlers/airport-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);

router.post('/flights', FlightController.create);
router.get('/flights', FlightController.getAll);
router.get('/flights/:id', FlightController.get);

router.post('/airports', AirportController.create);


module.exports = router;