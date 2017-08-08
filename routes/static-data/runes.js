'use strict'

const express = require('express');
const runes = express.Router();

runes.get('/', (req,res) =>{
    res.status(200).send({message: 'Estas en runes'});
});

runes.get('/:runeKey', (req,res) => {
    let runeKey = req.params.runeKey;

    res.status(200).send({message: `Quieres la informacion del rune con clave: ${runeKey}`});
});

module.exports = runes;