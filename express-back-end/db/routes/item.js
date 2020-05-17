const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    console.log('ITEMS: ', req.params.id);
    let query = `SELECT * FROM items_owned;`;
    db.query(query)
      .then((data) => {
        const items_owned = data.rows;
        res.json({ items_owned });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
// console.log('ITEMS: ', router);

// make a query to the items_owned table where character id is equal to the current character, and you return all of the items_owned entries for that character_id
router.get('/', function (req, res) {
  res.send('hello world');
});
