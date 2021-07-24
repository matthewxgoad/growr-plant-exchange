const express = require('express');
const { check } = require('express-validator');

const tradesControllers = require('../../controllers/trade-controllers');
const checkAuth = require('../../util/check-auth')
const ms3 = require('../../util/multer-s3');


const router = express.Router();

router.get('/:tid', tradesControllers.getTradeById);

router.get('/user/:uid', tradesControllers.getTradesByUserId);

router.use(checkAuth);

router.delete('/:tid', tradesControllers.deleteTrade);

router.post('/', ms3.single('image'),
  [
    check('title').not().isEmpty(),
    check('description').isLength({ min: 10 }),
  ],
  tradesControllers.createTrade
);

module.exports = router;
