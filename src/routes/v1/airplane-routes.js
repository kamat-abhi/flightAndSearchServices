const express = require('express');

const router = express.Router();
const { AirplaneController } = require('../../controlers/index');
 
// /api/v1/aiplanes POST
router.post('/', AirplaneController.createAirplane);
router.get('/', AirplaneController.getAirplanes);
router.get('/:id', AirplaneController.getAirplane);
router.delete('/:id', AirplaneController.destroyAirplane);


module.exports = router; 