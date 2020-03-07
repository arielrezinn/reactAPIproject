'use strict';

const yelp = require('yelp-fusion');
const apiKey = 'TQl-ldodqDuIn-Wi3xJ5xkB-nsuPgeUvlti5NCOhIJPKTssK0BA5EjYWnwasmMSca20hq1UxyNSYPLL1c1URFMrztx4w9VfRXcOiP8f0XlWgSxZMRvIKQYlO6htPXnYx';
const client = yelp.client(apiKey);
let searchTerm;

module.exports = (client) => {
  post(searchTerm).then(client.search(searchTerm).then(response => {
      const result = JSON.stringify(result, null, 4);
      console.log(result);
    }).then(data => {
      response.send({ result });
    }).catch(e => {
      console.log(e);
    }));
}
