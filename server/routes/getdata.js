import bodyParser from 'body-parser';
import express from 'express';

'use strict';

const yelp = require('yelp-fusion');
const express = require('express');
const express = express();
var router = express.Router();
const port = 3001;
const apiKey = 'TQl-ldodqDuIn-Wi3xJ5xkB-nsuPgeUvlti5NCOhIJPKTssK0BA5EjYWnwasmMSca20hq1UxyNSYPLL1c1URFMrztx4w9VfRXcOiP8f0XlWgSxZMRvIKQYlO6htPXnYx';

// express.use(bodyParser.json());
// express.use(bodyParser.urlencoded({ extended: false }));


express.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

express.get("/", function(req, res, next) {
  const client = yelp.client(apiKey);

  client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
  res.send(prettyJson);
});

}).catch(e => {
  console.log(e);
});

module.exports = router;
