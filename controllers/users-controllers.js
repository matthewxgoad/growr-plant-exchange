const { v4: uuid } = require('uuid');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const getCoordsForAddress = require('../util/location');

const DUMMY_USERS = [
    {
        id: 'u1',
        username: 'bmaxwell',
        email: 'test@test.com',
        password: 'testers',
        address: '5200 Mexico Rd, St Peters, MO 63376',
        location: {
          lat: 38.7917804,
          lng: -90.6021192
        }
    }
];

const getUsers = (req, res, next) => {
    res.json({users: DUMMY_USERS});
};

const signup = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next (new HttpError('Invalid inputs passed, please check your data', 422));
    }
    const { username, email, password, address } = req.body;

    const hasUser = DUMMY_USERS.find(u => u.email === email);
    if (hasUser) {
      return next (new HttpError('Could not create user, email already exists', 422));
    }

    let coordinates;
    try {
        coordinates = await getCoordsForAddress(address);
    } catch (error) {
        return next(error);
    }

    const createdUser = {
        id: uuid(),
        username,
        email,
        password,
        address,
        location: coordinates
    };

    DUMMY_USERS.push(createdUser);

    res.status(201).json({user: createdUser});
};

const login = (req, res, next) => {
    const {email, password} = req.body;

    const indentifiedUser = DUMMY_USERS.find(u => u.email === email);
    if (!indentifiedUser || indentifiedUser.password !== password) {
        throw new HttpError('Could not identify user, credentials seem to be wrong.', 401);
    }
    
    res.json({message: 'Logged in!'});
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;