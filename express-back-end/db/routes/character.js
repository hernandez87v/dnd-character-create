const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log('this is req.params ', req.params)
    const id = req.params
    let query = `
      SELECT * FROM characters
      WHERE id = 1;
    `;
    db.query(query)
      .then(data => {
        console.log(data.rows)
        const user = data.rows;
        res.json({ user });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });



  return router;
};