const request = require('request');

const itemApiComber = function(url) {
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    const allItems = data.results
    for (i = 0; i < allItems.length; i++) {
      let itemURL = `http://dnd5eapi.co${allItems[i].url}`;
      
      //nested request to access info about each
      request(itemURL, (error, response, body) => {
        if (error) {
          callback(error, null);
        }
        const data = JSON.parse(body);
        const currentInsertion = `('${data.name}', ${data.damage ? data.damage.damage_dice : null}, '${data.url}', '${data.equipment_category}', ${data.weight}, ${data.cost.quantity}),`;
        console.log(currentInsertion);
      });


    }

    // console.log(data.results)
  });

};

itemApiComber("http://dnd5eapi.co/api/equipment")