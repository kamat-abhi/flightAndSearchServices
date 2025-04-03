const express = require('express');
const router = express.Router();

const { CityController } = require('../../controlers/index');



router.post('/', CityController.create);
router.delete('/:id', CityController.destroy);
router.get('/:id', CityController.get);
router.get('/', CityController.getAll);
router.patch('/:id', CityController.update);

module.exports = router;