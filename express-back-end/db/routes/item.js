const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/:id', (req, res) => {
    let currentCharacterID = [req.params.id];
    let query = `
   SELECT items.* 
    FROM characters
    JOIN items_owned ON items_owned.character_id = ${currentCharacterID}
    JOIN items ON items.id = item_id
    WHERE characters.id = ${currentCharacterID};
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
    let query = `
    SELECT items.* 
    FROM characters
    JOIN items_owned ON items_owned.character_id = ${currentCharacterID}
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
