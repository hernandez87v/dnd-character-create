const request = require('request');

const spellApiComber = function(url) {
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    const allSpells = data.results
    for (i = 0; i < allSpells.length; i++) {
      let spellURL = `http://dnd5eapi.co${allSpells[i].url}`;
      
      //nested request to access info about each
      request(spellURL, (error, response, body) => {
        if (error) {
          callback(error, null);
        }
        const data = JSON.parse(body);
        const currentInsertion = `('${data.name}', ${data.level}, '${data.duration}', ${data.ritual}, '${data.casting_time}', '${data.range}', '${data.url}'),`;
      });


    }

    // console.log(data.results)
  });

};

spellApiComber("http://dnd5eapi.co/api/spells")

// INSERT INTO Spells
//     (name, spell_level, duration, is_ritual, casting_time, range, api_link)
// VALUES