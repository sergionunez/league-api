'use strict'

const express = require('express');
const api = express.Router();

//datos estaticos
const champions = require('./static-data/champions');
const items = require('./static-data/items');
const runes = require('./static-data/runes');
const masteries = require('./static-data/masteries');
const summonerSpells = require('./static-data/summoner-spells');

//summoner
const summoner = require('./summoner');

//raiz
api.get('/', (req,res) => {
    res.status(200).send({message: 'Estas en el api root'});
});

//datos estaticos
api.use('/champions', champions);
api.use('/items', items);
api.use('/runes', runes);
api.use('/masteries', masteries);
api.use('/summoner-spells', summonerSpells);

//summoner
api.use('/summoner', summoner);

module.exports = api;