const router = require('express').Router();
const { getUsers, getUserById, postUser } = require('../controll/users');

router.get('/users', getUsers);

router.get('/users/:userId', getUserById);

router.post('/users', postUser);

module.exports = router;
