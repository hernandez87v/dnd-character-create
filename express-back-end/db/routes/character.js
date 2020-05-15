const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `
    SELECT characters.*, classes.name as character_class, races.name as race, backgrounds.name as background
    FROM characters 
    JOIN classes ON classes.id = class_id
    JOIN races ON races.id = race_id
    JOIN backgrounds ON backgrounds.id = background_id;
    `;
    db.query(query)
      .then(data => {
        console.log(data.rows)
        const characters = data.rows;
        res.json({ characters });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/id", (req, res) => {
    let query = `
    SELECT characters.*, classes.name as character_class, races.name as race, backgrounds.name as background
    FROM characters 
    JOIN classes ON classes.id = class_id
    JOIN races ON races.id = race_id
    JOIN backgrounds ON backgrounds.id = background_id
    WHERE characters.id = 1;
    `;
    db.query(query)
      .then(data => {
        console.log(data.rows)
        const character = data.rows;
        res.json({ character });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/submit")
  
  return router;
};

// SELECT characters.*, classes.name as class, races.name as race, backgrounds.name as background
// FROM characters 
// JOIN classes ON classes.id = class_id
// JOIN races ON races.id = race_id
// JOIN backgrounds ON backgrounds.id = background_id
// WHERE characters.id = 1;