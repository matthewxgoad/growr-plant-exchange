const express = require('express');
const { check } = require('express-validator');

const tradesControllers = require('../../controllers/trade-controllers');
const fileUpload = require('../../util/file-upload');

const router = express.Router();

router.get('/:tid', tradesControllers.getTradeById);

router.get('/user/:uid', tradesControllers.getTradesByUserId);

router.delete('/:tid', tradesControllers.deleteTrade);

router.post('/', fileUpload.single('image'),
  [
    check('title').not().isEmpty(),
    check('description').isLength({ min: 10 }),
  ],
  tradesControllers.createTrade
);

module.exports = router;
