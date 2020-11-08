const router = require('express').Router();

const { getCards } = require('../controll/cards');

router.get('/cards', getCards);

module.exports = router;
