const express = require('express');
const { check } = require('express-validator');

const eventsControllers = require('../../controllers/event-controllers');
const ms3 = require('../../util/multer-s3');

const router = express.Router();

router.get('/:eid', eventsControllers.getEventById);

router.get('/user/:uid', eventsControllers.getEventsByUserId);

router.delete('/:eid', eventsControllers.deleteEvent);

router.post('/', ms3.single('image'),
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