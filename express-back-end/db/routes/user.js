  const express = require('express');
  const router  = express.Router();
  
  module.exports = (db) => {
    router.get("/", (req, res) => {
      let query = `
      SELECT * FROM users;
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
  
    router.post("/:user_id", (req, res) => {
      const values = [Number(req.params.poll_id)];
      console.log(values);
      let query = `
        UPDATE users
        SET completed = TRUE
        WHERE id = $1;
        `;
      db.query(query, values)
        .then(() => {
          res.send('hi user');
        })
        .catch (err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });
  
  
    return router;
  };