require('dotenv').config();
const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const db = require('./db/index');
const cors = require('cors');

// Express Configuration
App.use(cors());
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static('public'));
App.use(BodyParser.json());
// Sample GET route
App.get('/api/data', (req, res) =>
  res.json({
    message: 'test',
  })
);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});

const usersQueries = require('./db/routes/user');
const raceQueries = require('./db/routes/race');
const characterQueries = require('./db/routes/character');
const itemQueries = require('./db/routes/item');

// Mount all resource routes
App.use('/api/user', usersQueries(db));
App.use('/api/race', raceQueries(db));
App.use('/api/character', characterQueries(db));
App.use('/api/item', itemQueries(db));

App.get('/test', (req, res) => {
  db.query(
    `
        SELECT languages.*
        FROM languages;
        `
  )
    .then((data) => {
      const languageData = data.rows;
      res.json({ languageData });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
