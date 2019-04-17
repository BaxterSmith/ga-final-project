const express = require('express');
const router = express.Router();
const dogController = require('../controllers/dogController.js');

router.get('/dogs', dogController.index);
router.post('/', dogController.create);
router.get('/:dogId', dogController.show);
router.get('/:dogId/edit', dogController.edit);
router.put('/:dogId', dogController.update);
router.delete('/:dogId', dogController.delete);

module.exports = router;