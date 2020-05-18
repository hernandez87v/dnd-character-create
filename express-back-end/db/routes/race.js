const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = ` 
      SELECT * FROM races
      ;`;
    db.query(query)
      .then(data => {
        const races = data.rows;
        return races;
      })
      .then(races => {
        query = `       
        SELECT * FROM classes
        ;`;
        return db.query(query)
        .then(data => {
          const classes = data.rows;
          // res.json({ classes, races});
          return [classes,races]
        })
      })

      .then(data  => {
        const classes = data[0];
        const races = data[1];
        query = `       
        SELECT * FROM backgrounds
        ;`;
        db.query(query)
        .then(data => {
          const backgrounds = data.rows;
          res.json({races, classes, backgrounds});
        })
      })
      
      .catch(err => {
        console.error(err)
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:id", (req, res) => {
    let id = req.params.id;
    db.query(` 
    SELECT races.*  
    FROM races
    WHERE races.id = $1
    ;`, [id])
      .then(data => {
        const raceData = data.rows;
        res.json({ raceData });
      })
      .catch(err => {
        console.error(err)
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  
  return router;
};