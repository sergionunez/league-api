'use strict'

const express = require('express');
const summoner = express.Router();

summoner.get('/:summonerId', (req,res) => {
    let summonerId = req.params.summonerId;

    res.status(200).send({message: `informacion del summoner con id: ${summonerId}`});
});


summoner.get('/by-name/:summonerName', (req,res) => {
    let summonerName = req.params.summonerName;

    res.status(200).send({message: `informacion del summoner con nombre: ${summonerName}`});
});

summoner.get('/by-account/:accountId', (req,res) => {
    let accountId = req.params.accountId;

    res.status(200).send({message: `informacion del summoner con cuenta: ${accountId}`});
});

module.exports = summoner;