const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const Trade = require('../models/trade');
const User = require('../models/user');

const getTradeById = async (req, res, next) => {
  const tradeId = req.params.tid;

  let trade;
  try {
    trade = await Trade.findById(tradeId);
  } catch (err) {
    const error = new HttpError('Something went wrong, could not find a trade.', 500);
    return next(error);
  }

  if (!trade) {
    const error = new HttpError('Could not find a trade for the provided id.', 404);
    return next(error);
  }

  res.json({ trade: trade.toObject({ getters: true }) });
};

const getTradesByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let userWithTrades;
  try {
    userWithTrades = await User.findById(userId).populate('trades');
  } catch (err) {
    const error = new HttpError('Fetching trades failed, please try again later', 500);
    return next(error);
  }

  if (!userWithTrades || userWithTrades.trades.length === 0) {
    return next(new HttpError('Could not find trades for the provided user id.', 404));
  }

  res.json({
    trades: userWithTrades.trades.map(trade =>
      trade.toObject({ getters: true })
    )
  });
};

const createTrade = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }

  const { title, description, tradeType, creator } = req.body;

  const createdTrade = new Trade({
    title,
    description,
    tradeType,
    image: req.file.location,
    creator
  });

  let user;
  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError('Creating trade failed, please try again', 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError('Could not find user for provided id', 404);
    return next(error);
  }

  try {
    await createdTrade.save();
    user.trades.push(createdTrade);
    await user.save();
  } catch (err) {
    const error = new HttpError('Creating trade failed, please try again.', 500);
    return next(error);
  }

  res.status(201).json({ trade: createdTrade });
};

const deleteTrade = async (req, res, next) => {
  const tradeId = req.params.tid;

  let trade;
  try {
    trade = await Trade.findById(tradeId).populate('creator');
  } catch (err) {
    const error = new HttpError('Something went wrong, could not delete trade.', 500);
    return next(error);
  }

  if (!trade) {
    const error = new HttpError('Could not find trade for this id.', 404);
    return next(error);
  }

  try {
    await trade.remove();
    trade.creator.trades.pull(trade);
    await trade.creator.save();
  } catch (err) {
    const error = new HttpError('Something went wrong, could not delete trade.', 500);
    return next(error);
  }

  res.status(200).json({ message: 'Deleted trade.' });
};

exports.getTradeById = getTradeById;
exports.getTradesByUserId = getTradesByUserId;
exports.createTrade = createTrade;
exports.deleteTrade = deleteTrade;
