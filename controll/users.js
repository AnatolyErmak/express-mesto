const path = require('path');
const readFile = require('../utils/readFile');

const getUsers = (req, res) => readFile(path.join(__dirname, '..', 'data', 'users.json'))
  .then((data) => {
    res.status(200).send(JSON.parse(data));
  })
  .catch((err) => {
    res.status(500).send({ message: err.message });
  });

const getUserById = (req, res) => {
  readFile(path.join(__dirname, '..', 'data', 'users.json'))
    .then((data) => {
      const user = JSON.parse((data)).find((item) => item._id === req.params.id);
      if (!user) {
        res.status(404).send({ message: `Нет пользователя с id ${req.params.id}` });
        return;
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports = {
  getUsers,
  getUserById,
};
