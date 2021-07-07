const express = require('express');
const { check } = require('express-validator');

const placesControllers = require('../../controllers/place-controllers');
const fileUpload = require('../../util/file-upload');

const router = express.Router();

router.get('/:pid', placesControllers.getPlaceById);

router.get('/user/:uid', placesControllers.getPlacesByUserId);

router.delete('/:pid', placesControllers.deletePlace);

router.post('/', fileUpload.single('image'),
  [
    check('title').not().isEmpty(),
    check('description').isLength({ min: 5 }),
    check('address').not().isEmpty()
  ],
  placesControllers.createPlace
);

module.exports = router;