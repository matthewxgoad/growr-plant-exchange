const express = require('express');
const { check } = require('express-validator');

const eventsControllers = require('../../controllers/event-controllers');
const fileUpload = require('../../util/file-upload');

const router = express.Router();

router.get('/:eid', eventsControllers.getEventById);

router.get('/user/:uid', eventsControllers.getEventsByUserId);

router.delete('/:eid', eventsControllers.deleteEvent);

router.post('/', fileUpload.single('image'),
  [
    check('title').not().isEmpty(),
    check('description').isLength({ min: 5 }),
    check('address').not().isEmpty(),
    check('date').not().isEmpty(),
    check('time').not().isEmpty(),
  ],
  eventsControllers.createEvent
);

module.exports = router;