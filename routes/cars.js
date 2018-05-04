const express = require('express');
const router = express.Router();
const carsController = require('../controllers/carsController');

router.get('/:page?', carsController.index);

router.post('/', carsController.create);

router.put('/:id', carsController.update);

router.delete('/:id', carsController.remove);

module.exports = router;
