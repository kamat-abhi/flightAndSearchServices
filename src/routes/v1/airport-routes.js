const express = require('express');
const router = express.Router();

const { AirportController } = require('../../controlers/index');



router.post('/', AirportController.createAirport);
router.get('/', AirportController.getAllAirport)

module.exports = router;