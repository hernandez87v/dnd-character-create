  const express = require('express');
  const router  = express.Router();
  
  module.exports = (db) => {
    router.post("/", (req, res) => {
      const name = req.body.name;
      const nick_name = req.body.nick_name;
      const email = req.body.email;
      const password = req.body.password;
      const values = [name, nick_name , email , password];
      // const values = ['santi', 'santy76' ,'asn@asd.com' , 'password'];

      console.log('req',req.body)
      

      let query = `
      INSERT INTO users (name, nick_name , email , password)
      VALUES ($1, $2, $3, $4) RETURNING *;
      `;
      db.query(query,values)
        .then(data => {
          const user = data.rows;
          res.json({ user });
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });

    // router.put("/appointments/:id", (request, response) => {

    //     const { student, interviewer } = request.body.interview;
  
    //   db.query(
    //     `
    //     INSERT INTO interviews (student, interviewer_id, appointment_id) VALUES ($1::text, $2::integer, $3::integer)
    //     ON CONFLICT (appointment_id) DO
    //     UPDATE SET student = $1::text, interviewer_id = $2::integer
    //   `,
    //     [student, interviewer, Number(request.params.id)]
    //   )
    //     .then(() => {
    //       setTimeout(() => {
    //         response.status(204).json({});
    //         updateAppointment(Number(request.params.id), request.body.interview);
    //       }, 1000);
    //     })
    //     .catch(error => console.log(error));
    // });
  























  
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