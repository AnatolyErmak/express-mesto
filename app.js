const express = require('express');
const mongoose = require('mongoose');
// body-parser извлекает всю часть тела входящего потока запросов и предоставляет его на req. body
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use((req, res, next) => {
  req.user = {
    _id: '5fa8570286fbd316040924a0',
  };

  next();
});

app.use('/', usersRoutes);
app.use('/', cardsRoutes);

app.all('*', (req, res) => {
  res.status(404).send({ message: 'запрос не найден' });
});

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`Ссылка на сервер ${PORT}`);
});
