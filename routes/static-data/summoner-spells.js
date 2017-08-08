'use strict'

const express = require('express');
const summonerSpells = express.Router();

summonerSpells.get('/', (req,res) =>{
    res.status(200).send({message: 'Estas en summonerSpells'});
});

summonerSpells.get('/:summonerSpellKey', (req,res) => {
    let summonerSpellKey = req.params.summonerSpellKey;

    res.status(200).send({message: `Quieres la informacion del summonerSpell con clave: ${summonerSpellKey}`});
});

module.exports = summonerSpells;