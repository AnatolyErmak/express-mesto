const router = require('express').Router();

const { getCards, postCard, deleteCard } = require('../controll/cards');

router.get('/cards', getCards);

router.post('/cards', postCard);

router.delete('/cards/:cardId', deleteCard);

module.exports = router;
