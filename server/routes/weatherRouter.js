const express = require('express');

const weatherController = require('../controller/weatherController');

const router = express.Router();

router.post('/', weatherController.getData, (req, res) => res.status(200).json(res.locals.response));

module.exports = router;
