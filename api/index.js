const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/index.js');
const Sequelize = require('sequelize');
const fallback = require('connect-history-api-fallback');

const app = express();

app.use(fallback());

const jsonParser = bodyParser.json();

app.get('/api/guesses', (req, res) =>
{
  db.gender_guesses.findAll({
    attributes: [
      [Sequelize.literal(`MAX(CASE guess WHEN 'B' THEN 'Boy' ELSE 'Girl' END)`), 'name'],
      [db.sequelize.fn('COUNT', db.sequelize.col('guess')), 'value']
    ],
    group: 'guess',
    raw: true
  }).then(data => {
    return res.status(200).send(data)
  });
});

app.post('/api/guesses', jsonParser, (req, res) => {
  const guess = req.body.value ? req.body.value.charAt(0).toUpperCase() : false;
  if (guess && (guess == 'B' || guess == 'G') ){
    return db.gender_guesses.create({ guess: guess })
      .then(function(data) {
        if (data) {
          res.sendStatus(200);
        } else {
          res.sendStatus(400);
        }
      })
      .catch(console.error);
  } else {
    return res.sendStatus(400);
  }
});

app.use('/', express.static('dist', {index: 'index.html'}));

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Server listening on port ${port}!`));

