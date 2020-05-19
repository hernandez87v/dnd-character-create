const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    let query = `
   SELECT items.* 
    FROM characters
    JOIN items_owned ON items_owned.character_id = 1
    JOIN items ON items.id = item_id
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

  router.get('/weapon/:id', (req, res) => {
    let currentCharacterID = [req.params.id];
    console.log(req.params.id);
    let query = `
    SELECT items.* 
    FROM characters
    JOIN items_owned ON items_owned.character_id = 1
    JOIN items ON items.id = item_id
    WHERE characters.id = ${currentCharacterID} and equipment_category = 'Weapon';`;
    db.query(query)
      .then((data) => {
        const weapons = data.rows;
        res.json({ weapons });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
