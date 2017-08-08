'use strict'

const express = require('express');
const champions = express.Router();

champions.get('/', (req,res) => {
    res.status(200).send({message: 'Estas en campeones'});
});

champions.get('/:championKey', (req,res) => {
    let key = req.params.championKey;
    res.status(200).send({message: `Quieres la informacion del campeon con clave: ${key}`});
});

module.exports = champions;