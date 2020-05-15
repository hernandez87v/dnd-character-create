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

//Handles logic for posting of a newly created character. destructures the objects, then will make the proper db insertions

  router.post("/submit", (req, res) => {

    console.log(req.body)
    const raceData = req.body.raceState;
    const characterData = req.body.characterState
    const {
      id,
      name,
      strength_bonus,
      dexterity_bonus,
      constitution_bonus,
      intelligence_bonus,
      wisdom_bonus,
      charisma_bonus,
      speed,
      size,
      ab_choice,
      proficiency_choice,
      language_choice,
      trait_choice,
    } = raceData;

    const {
      user_id,
      background,
      class_info,
      strength,
      dexterity,
      constitution,
      intelligence,
      widsom,
      charisma,
      hitDie,
      avatar_url,
      proficienciesSelected, //array of objects
      equipmentSelected, //array of objects
      characterName
    } = characterData;

    console.log('this is the character, ', background, constitution, name)



  })
  
  return router;
};

// SELECT characters.*, classes.name as class, races.name as race, backgrounds.name as background
// FROM characters 
// JOIN classes ON classes.id = class_id
// JOIN races ON races.id = race_id
// JOIN backgrounds ON backgrounds.id = background_id
// WHERE characters.id = 1;