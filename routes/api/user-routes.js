const express = require('express');
const { check } = require('express-validator');

const usersController = require('../../controllers/users-controllers');
const fileUpload = require('../../util/file-upload');

const router = express.Router();

router.get('/', usersController.getUsers);
router.get('/:uid', usersController.getUserById);

router.get('/radius/trades/:uid', usersController.getUsersTradesWithin);
router.get('/radius/places/:uid', usersController.getUsersPlacesWithin);
router.get('/radius/events/:uid', usersController.getUsersEventsWithin);

router.post('/signup', fileUpload.single('image'),
  [
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 })
  ],
  usersController.signup
);

router.post('/login', usersController.login);

module.exports = router;