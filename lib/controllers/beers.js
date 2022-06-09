const { Router } = require('express');
const Beer = require('../models/Beers');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const beerDetail = await Beer.getById(id);
    res.json(beerDetail);
  })

  .get('/', async (req, res) => {
    const data = await Beer.getAll();
    res.json(data);
  });
