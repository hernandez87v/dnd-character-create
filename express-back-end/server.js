require('dotenv').config();
const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static('public'));

// Sample GET route
App.get('/api/data', (req, res) =>
  res.json({
    message: 'Seems to work!',
  })
);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});

App.get('/test', (req, res) => {
  db.query(
    `
        SELECT languages.*
        FROM languages;
        `
  )
    .then((data) => {
      console.log(data.rows);
      const languageData = data.rows;
      res.json({ languageData });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

