const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/user/:id", (req, res) => {
    console.log('all users' , req.params.id)
    let query = `
    SELECT characters.*, classes.name as character_class, races.name as race, backgrounds.name as background
    FROM characters 
    JOIN classes ON classes.id = class_id
    JOIN races ON races.id = race_id
    JOIN backgrounds ON backgrounds.id = background_id
    WHERE characters.user_id = ${req.params.id};
    `;
    db.query(query)
      .then(data => {
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
      alignment,
      user_id,
      background,
      class_info,
      strength,
      dexterity,
      constitution,
      intelligence,
      wisdom,
      charisma,
      hitDie,
      avatar_url,
      proficienciesSelected, //array of objects
      equipmentSelected, //array of objects
      characterName
    } = characterData;

    const getModifier = function(number) {
      let result = (number - 10)/2
      return Math.floor(result)
    }

    console.log('background',background)
    const values = [user_id, class_info.id, id, background.id,0,1, alignment.name, speed ,10 + getModifier(dexterity + dexterity_bonus),hitDie + getModifier(constitution + constitution_bonus),0, getModifier(dexterity + dexterity_bonus),strength + strength_bonus,dexterity + dexterity_bonus,constitution + constitution_bonus,intelligence + intelligence_bonus,wisdom + wisdom_bonus,charisma + charisma_bonus,'santy', avatar_url, hitDie];

    let characterQuery = `INSERT INTO characters
    (user_id, class_id, race_id, background_id, experience, level, alignment, speed, armour_class, total_hit_points, temporary_hit_points, initiative, strength, dexterity, constitution, intelligence, wisdom, charisma, name, avatar_url, hit_die)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7 ,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19, $20, $21) RETURNING id;`

    //takes in returned id for character insertion

    const getProficiencyids = function(characterID) {
      // console.log('in the getproficiencyids fucntion')
      let allIDs = []
      let raceID = [65];
      // console.log('the race id you want to query with', raceID[0])
      let raceQuery = `SELECT proficiency_id FROM race_proficiencies WHERE race_id = $1;`;
      for (let i = 0; i < proficienciesSelected.length; i++) {
        // console.log('in the for loop')
        let currentProficiency = proficienciesSelected[i]
        let currentProficiencyURL = [currentProficiency.url]
        let query = `SELECT id FROM proficiencies WHERE api_link = $1;`;
        db.query(query, currentProficiencyURL)
        .then((result) => {
          // console.log('this is the result of getproficiencyids ', result.rows[0].id)
          allIDs.push(result.rows[0].id)
          // console.log('resultsArray ', allIDs)
        })
      }
      db.query(raceQuery, raceID)
      .then((result) => {
        // console.log('this is the result of racequery ', result)
        if (result.rows[0].proficiency_id) {
          let raceProficiencyArray = result.rows;
          for (let j = 0; j < raceProficiencyArray.length; j++) {
            allIDs.push(raceProficiencyArray[j].proficiency_id)
          }          
        }
        console.log('all ids', allIDs)
        return allIDs
      })
    } 

    const languageQuery = ``;

    const itemQuery = ``;

    db.query(characterQuery, values)
    .then((result) => {
      console.log('this is the id', result.rows[0].id);
      const newCharacterID = result.rows[0].id;
      let proficiencyIdArray = getProficiencyids(newCharacterID);
      console.log('proficiencyidarray ', proficiencyIdArray)

    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });



    console.log('this is the profsselected, equipment selected, ', proficienciesSelected, equipmentSelected)



  })
  
  return router;
};

// SELECT characters.*, classes.name as class, races.name as race, backgrounds.name as background
// FROM characters 
// JOIN classes ON classes.id = class_id
// JOIN races ON races.id = race_id
// JOIN backgrounds ON backgrounds.id = background_id
// WHERE characters.id = 1;