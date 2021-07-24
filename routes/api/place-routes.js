const express = require('express');
const { check } = require('express-validator');

const placesControllers = require('../../controllers/place-controllers');
const checkAuth = require('../../util/check-auth')
const ms3 = require('../../util/multer-s3')

const router = express.Router();

router.get('/:pid', placesControllers.getPlaceById);

router.get('/user/:uid', placesControllers.getPlacesByUserId);

router.use(checkAuth);

router.delete('/:pid', placesControllers.deletePlace);

router.post('/', ms3.single('image'),
  [
    check('title').not().isEmpty(),
    check('description').isLength({ min: 5 }),
    check('address').not().isEmpty()
  ],
  placesControllers.createPlace
);

module.exports = router;
