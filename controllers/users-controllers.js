const { validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const HttpError = require('../models/http-error');
const {User} = require('../models');
const getCoordsForAddress = require('../util/location');

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, '-password');
  } catch (err) {
    const error = new HttpError('Fetching users failed, please try again later.', 500);
    return next(error);
  }
  res.json({users: users.map(user => user.toObject({ getters: true }))});
};

const getUserById = async (req, res, next) => {
  const userId = req.params.uid;

  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError('Something went wrong, could not find user.', 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError('Could not find a user for the provided id.', 404);
    return next(error);
  }

  res.json({ user: user.toObject({ getters: true }) });
};

const getUsersTradesWithin = async (req, res, next) => {
  const userId = req.params.uid;
  const sourceUser = User.findById(userId);
  const {location: {coordinates}} = (await sourceUser).toObject();
  console.log(coordinates);

  let result = await User.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: coordinates,
        },
        $maxDistance: 2000,
      },
    },
  }).populate("trades")

  res.send(result)
}

const getUsersPlacesWithin = async (req, res, next) => {
  const userId = req.params.uid;
  const sourceUser = User.findById(userId);
  const {location: {coordinates}} = (await sourceUser).toObject();
  console.log(coordinates);

  let result = await User.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: coordinates,
        },
        $maxDistance: 2000,
      },
    },
  }).populate("places")

  res.send(result)
}

const getUsersEventsWithin = async (req, res, next) => {
  const userId = req.params.uid;
  const sourceUser = User.findById(userId);
  const {location: {coordinates}} = (await sourceUser).toObject();
  console.log(coordinates);

  let result = await User.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: coordinates,
        },
        $maxDistance: 2000,
      },
    },
  }).populate("events")

  res.send(result)
}


const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {

    return next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }
  console.log("req body", req.body)
  const { name, email, password, address, selectedFile } = req.body;

  let existingUser
  try {
    existingUser = await User.findOne({ email: email })
  } catch (err) {
    const error = new HttpError('Signing up failed, please try again later.', 500);
    return next(error);
  }
  
  if (existingUser) {
    const error = new HttpError('User exists already, please login instead.', 422);
    return next(error);
  }

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

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      'Could not create user, please try again.',
      500
    );
    return next(error);
  }
  console.log("req file", selectedFile)

  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
    image: selectedFile,
    address,
    location: {type: 'Point', coordinates: coordsArray},
    places: []
  });
          console.log(`>>createdUser`, createdUser)
  try {
     await createdUser.save();
  } catch (err) {
    const error = new HttpError('Signing up failed, please try again.', 500);
    return next(error);
  }

  res.status(201).json({user: createdUser.toObject({ getters: true })});
};

// const login = async (req, res, next) => {
  // const { email, password } = req.body;

//   let existingUser;

//   try {
//     existingUser = await User.findOne({ email: email })
//   } catch (err) {
    // const error = new HttpError('Logging in failed, please try again later.', 500);
    // return next(error);
//   }

//   if (!existingUser) {
//     const error = new HttpError('Invalid credentials, could not log you in.', 401);
    // return next(error);
//   }

//   let isValidPassword = false;
//   try {
//     isValidPassword = await bcrypt.compare(password, existingUser.password);
//   } catch (err) {
//     const error = new HttpError(
//       'Could not log you in, please check your credentials and try again.',
//       500
//     );
//     return next (error);
//   }

//   if (!isValidPassword) {
//     const error = new HttpError('Invalid credentials, could not log you in.', 401);
//     return next(error);
//   }

//   res.json({message: 'Logged in!'});
// };


const login = async (req, res) => {

  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      res.status(401).json("Email and/or password incorrect")
    }

    const isValidPassword = await bcrypt.compare(password, existingUser.password);
    if (!isValidPassword) {
      res.status(401).json("Email and/or password incorrect")
    }

    res.status(200).json(existingUser)

  } catch (err) {
    res.status(500).json(err)
  }
};

exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.getUsersTradesWithin = getUsersTradesWithin;
exports.getUsersPlacesWithin = getUsersPlacesWithin;
exports.getUsersEventsWithin = getUsersEventsWithin;
exports.signup = signup;
exports.login = login;
