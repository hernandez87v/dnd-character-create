const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    console.log('ITEMS: ', req.params);
    let query = `
    SELECT characters.*, items_owned.character_id as character_item
    FROM characters
    JOIN items ON items.id = item_id
    JOIN items_owned ON items_owned.id = items_owned_id
    WHERE characters.id = 1;
    `;
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