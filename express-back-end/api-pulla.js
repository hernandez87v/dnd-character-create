const request = require('request');

const apiComber = function(url) {
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    const allItems = data.results
    for (i = 0; i < allItems.length; i++) {
      // console.log(allItems[i].name)
      let itemURL = `http://dnd5eapi.co${allItems[i].url}`;
      // console.log('this is the itemurl', itemURL)
      
      //nested request to access info about each
      request(itemURL, (error, response, body) => {
        if (error) {
          callback(error, null);
        }
        const data = JSON.parse(body);
        // console.log("this is the category ", data.equipment_category)
        const currentInsertion = `("${data.name}", "${data.url}"),`;
        console.log(currentInsertion);
      });


    }

    // console.log(data.results)
  });

};

apiComber("http://dnd5eapi.co/api/proficiencies")