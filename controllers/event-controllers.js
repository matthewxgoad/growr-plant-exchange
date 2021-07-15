const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const getCoordsForAddress = require('../util/location');
const Event = require('../models/event');
const User = require('../models/user');

const getEventById = async (req, res, next) => {
  const eventId = req.params.eid;

  let event;
  try {
    event = await Event.findById(eventId);
  } catch (err) {
    const error = new HttpError('Something went wrong, could not find a event.', 500);
    return next(error);
  }

  if (!event) {
    const error = new HttpError('Could not find a event for the provided id.', 404);
    return next(error);
  }

  res.json({ event: event.toObject({ getters: true }) });
};

const getEventsByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let userWithEvents;
  try {
    userWithEvents = await User.findById(userId).populate('events');
  } catch (err) {
    const error = new HttpError('Fetching events failed, please try again later', 500);
    return next(error);
  }

  if (!userWithEvents || userWithEvents.events.length === 0) {
    return next(new HttpError('Could not find events for the provided user id.', 404));
  }

  res.json({
    events: userWithEvents.events.map(event =>
      event.toObject({ getters: true })
    )
  });
};

const createEvent = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }

  const { title, description, address, creator, date, time } = req.body;

    let coords;
    let coordsArray;
    try {
      coords = await getCoordsForAddress(address);
      coordsArray = Object.values(coords)
      let temp = coordsArray[0];
      coordsArray[0]=coordsArray[1];
      coordsArray[1]=temp;
      console.log(coordsArray)
    } catch (error) {
      return next(error);
    }

  const createdEvent = new Event({
    title,
    description,
    address,
    location: {type: 'Point', coordinates: coordsArray},
    image: req.file.path,
    creator,
    date,
    time
  });

  let user;
  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError('Creating event failed, please try again', 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError('Could not find user for provided id', 404);
    return next(error);
  }

  console.log(user);

  try {
    await createdEvent.save();
    user.events.push(createdEvent);
    await user.save();
  } catch (err) {
    const error = new HttpError('Creating event failed, please try again.', 500);
    return next(error);
  }

  res.status(201).json({ event: createdEvent });
};

const deleteEvent = async (req, res, next) => {
  const eventId = req.params.eid;

  let event;
  try {
    event = await Event.findById(eventId).populate('creator');
  } catch (err) {
    const error = new HttpError('Something went wrong, could not delete event.', 500);
    return next(error);
  }

  if (!event) {
    const error = new HttpError('Could not find event for this id.', 404);
    return next(error);
  }

  try {
    await event.remove();
    event.creator.events.pull(event);
    await event.creator.save();
  } catch (err) {
    const error = new HttpError('Something went wrong, could not delete event.', 500);
    return next(error);
  }

  res.status(200).json({ message: 'Deleted event.' });
};

exports.getEventById = getEventById;
exports.getEventsByUserId = getEventsByUserId;
exports.createEvent = createEvent;
exports.deleteEvent = deleteEvent;
