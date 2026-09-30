var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

//get API key from environment variables
const apiKey = process.env.ApiKey;
//url API
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

router.get('/movies', async function(req, res, next) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
