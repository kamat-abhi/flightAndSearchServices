const express = require('express');
const router = express.Router();

const v1ApiRotes = require('./v1/index');

router.use('/v1',v1ApiRotes);

module.exports = router;