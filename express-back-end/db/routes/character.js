const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/user/:id", (req, res) => {
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

  router.get("/:id", (req, res) => {
    let currentCharacterID = [req.params.id]
    let query = `
    SELECT characters.*, classes.name as character_class, races.name as race, backgrounds.name as background
    FROM characters 
    JOIN classes ON classes.id = class_id
    JOIN races ON races.id = race_id
    JOIN backgrounds ON backgrounds.id = background_id
    WHERE characters.id = $1;
    `;
    db.query(query, currentCharacterID)
      .then(data => {
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

    const values = [user_id, class_info.id, id, background.id,0,1, alignment.name, speed ,10 + getModifier(dexterity + dexterity_bonus),hitDie + getModifier(constitution + constitution_bonus),0, getModifier(dexterity + dexterity_bonus), strength + strength_bonus, dexterity + dexterity_bonus, constitution + constitution_bonus, intelligence + intelligence_bonus,wisdom + wisdom_bonus, charisma + charisma_bonus, characterName, avatar_url, hitDie];

    let characterQuery = `INSERT INTO characters
    (user_id, class_id, race_id, background_id, experience, level, alignment, speed, armour_class, total_hit_points, temporary_hit_points, initiative, strength, dexterity, constitution, intelligence, wisdom, charisma, name, avatar_url, hit_die)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7 ,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19, $20, $21) RETURNING id;`

    //takes in returned id for character insertion

    const proficiencyInsertions = function(characterID) {
      let allIDs = []
      let raceID = [id];
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
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
      }
      db.query(raceQuery, raceID)
      .then((result) => {
        // console.log('this is the result of racequery ', result)
        if (result.rows[0]) {
          let raceProficiencyArray = result.rows;
          for (let j = 0; j < raceProficiencyArray.length; j++) {
            allIDs.push(raceProficiencyArray[j].proficiency_id)
          }          
        }
        return allIDs
       
      })
      .then((data) => {
        // console.log('for real allIDs ', data)
        for (g = 0; g < data.length; g++) {
          let proficiencyInsertion = `INSERT INTO proficiencies_known (character_id, proficiency_id) VALUES ($1, $2);`;
          let insertionVariables = [characterID, data[g]]
          db.query(proficiencyInsertion, insertionVariables)
          .then(data => {
            // console.log('proficiencies Added!')
            // languageInsertions(characterID)
          })
          .catch(err => {
            res
              .status(500)
              .json({ error: err.message });
          });


        }
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    } 

    const languageInsertions = function(characterID) {
      let languageQuery = `SELECT language_id FROM race_languages WHERE race_id = $1;`;
      let raceID = [id];
      db.query(languageQuery, raceID)
      .then((result) => {
        // console.log('NEW CONSOLE LOG', result.rows)
        let racelanguagesArray = result.rows;
        let languageInsertionQuery = `INSERT INTO languages_known (character_id, language_id) VALUES ($1, $2),($1, $3);`;
        let languageInsertionVariables = [characterID, racelanguagesArray[0].language_id, racelanguagesArray[1].language_id]
        db.query(languageInsertionQuery, languageInsertionVariables)
        .then((result) =>{
        // console.log('language added')
        })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    };

    const itemInsertions = function(characterID , i) {
      let equipmentIDs = [];
        let currentEquipment = equipmentSelected[i].item.url
        let currentEquipmentURL = [currentEquipment]
        let query = `SELECT id FROM items WHERE api_link = $1;`;
        db.query(query, currentEquipmentURL)
        .then((result) => {
          let currentItemID = result.rows[0].id;
          equipmentIDs.push(currentItemID)
          let insertionVariables = [characterID, currentItemID];
          let insertion = `INSERT INTO items_owned (character_id, item_id) VALUES ($1, $2);`;
          db.query(insertion, insertionVariables)
          .then(() => {
          })
          .catch(err => {
            res
            .status(500)
            .json({ error: err.message });
          });
        })
        .catch(err => {
          res
          .status(500)
          .json({ error: err.message });
        });
      }

    db.query(characterQuery, values)
    .then((result) => {
      const newCharacterID = result.rows[0].id;
      proficiencyInsertions(newCharacterID);
      languageInsertions(newCharacterID);
      for (let i = 0; i < equipmentSelected.length; i++) {
       itemInsertions(newCharacterID, i);
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  })



  router.get("/features/:characterid", (req, res) => {
    let currentCharacterID = [req.params.characterid]
    let languageQuery = ` 
        SELECT language_id, languages.name
        FROM languages_known JOIN languages ON language_id = languages.id
        WHERE character_id = $1;
      `;
    db.query(languageQuery, currentCharacterID)
      .then(data => {
        const languages = data.rows;
        return languages;
      })
      .then(languages => {
        let proficiencyQuery = `       
        SELECT proficiency_id, proficiencies.name
        FROM proficiencies_known JOIN proficiencies ON proficiency_id = proficiencies.id
        WHERE character_id = $1;
        `;
        return db.query(proficiencyQuery, currentCharacterID)
        .then(data => {
          const proficiencies = data.rows;
          // res.json({ classes, races});
          return [proficiencies,languages]
        })
      })

      .then(data  => {
        const proficiencies = data[0];
        const languages = data[1];
        traitsQuery = `       
        SELECT trait_id, traits.name
        FROM traits_known JOIN traits ON trait_id = traits.id
        WHERE character_id = $1;
        `;
        db.query(traitsQuery, currentCharacterID)
        .then(data => {
          const traits = data.rows;
          res.json({languages, proficiencies, traits});
        })
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

// SELECT characters.*, classes.name as class, races.name as race, backgrounds.name as background
// FROM characters 
// JOIN classes ON classes.id = class_id
// JOIN races ON races.id = race_id
// JOIN backgrounds ON backgrounds.id = background_id
// WHERE characters.id = 1;