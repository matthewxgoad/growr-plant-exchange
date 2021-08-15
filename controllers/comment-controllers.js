const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const Comment = require('../models/comment');
const User = require('../models/user');

const getCommentById = async (req, res, next) => {
  const commentId = req.params.cid;

  let comment;
  try {
    comment = await Comment.findById(commentId);
  } catch (err) {
    const error = new HttpError('Something went wrong, could not find a comment.', 500);
    return next(error);
  }

  if (!comment) {
    const error = new HttpError('Could not find a comment for the provided id.', 404);
    return next(error);
  }

  res.json({ comment: comment.toObject({ getters: true }) });
};

const getCommentsByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let userWithComments;
  try {
    userWithComments = await User.findById(userId).populate('comments');
  } catch (err) {
    const error = new HttpError('Fetching trades failed, please try again later', 500);
    return next(error);
  }

  if (!userWithComments || userWithComments.comments.length === 0) {
    return next(new HttpError('Could not find trades for the provided user id.', 404));
  }

  res.json({
    comments: userWithComments.comments.map(comment =>
      comment.toObject({ getters: true })
    )
  });
};

const createComment = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }

  const { title, body, creator } = req.body;

  const createdComment = new Comment({
    title,
    body,
    creator
  });

  let user;
  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError('Creating comment failed, please try again', 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError('Could not find user for provided id', 404);
    return next(error);
  }

  try {
    await createdComment.save();
    user.comments.push(createdComment);
    await user.save();
  } catch (err) {
    const error = new HttpError('Creating comment failed, please try again.', 500);
    return next(error);
  }

  res.status(201).json({ comment: createdComment });
};

const deleteComment = async (req, res, next) => {
  const commentId = req.params.cid;

  let comment;
  try {
    comment = await Comment.findById(commentId).populate('creator');
  } catch (err) {
    const error = new HttpError('Something went wrong, could not delete comment.', 500);
    return next(error);
  }

  if (!comment) {
    const error = new HttpError('Could not find comment for this id.', 404);
    return next(error);
  }

  try {
    await comment.remove();
    comment.creator.comments.pull(comment);
    await comment.creator.save();
  } catch (err) {
    const error = new HttpError('Something went wrong, could not delete comment.', 500);
    return next(error);
  }

  res.status(200).json({ message: 'Deleted comment.' });
};

exports.getCommentById = getCommentById;
exports.getCommentsByUserId = getCommentsByUserId;
exports.createComment = createComment;
exports.deleteComment = deleteComment;
