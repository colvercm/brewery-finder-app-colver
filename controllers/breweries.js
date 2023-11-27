const axios = require('axios');
const { Breweries } = require("../models");

const breweriesList = async function () {
  try {
    const resp = await axios.get('https://api.openbrewerydb.org/breweries?format=json')
    return resp.data.content;
  } catch (err) {
    res.status(502).send('Breweries not available')
  }
};





module.export = { Breweries, breweriesList };