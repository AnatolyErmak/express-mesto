/* const path = require('path');
const readFile = require('../utils/readFile');

const getCards = (req, res) => readFile(path.join(__dirname, '..', 'data', 'cards.json'))
  .then((data) => {
    res.status(200).send(JSON.parse(data));
  })
  .catch((err) => {
    res.status(500).send({ message: err.message });
  });

module.exports = {
  getCards,
};
 */
