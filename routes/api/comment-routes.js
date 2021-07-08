const express = require('express');
const { check } = require('express-validator');

const commentsControllers = require('../../controllers/comment-controllers');
// const fileUpload = require('../../util/file-upload');

const router = express.Router();

router.get('/:cid', commentsControllers.getCommentById);

router.get('/user/:uid', commentsControllers.getCommentsByUserId);

router.delete('/:cid', commentsControllers.deleteComment);

router.post('/',
  [
    check('title').not().isEmpty(),
    check('body').isLength({ min: 10 }),
  ],
  commentsControllers.createComment
);

module.exports = router;