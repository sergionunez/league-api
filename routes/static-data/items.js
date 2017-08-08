'use strict'

const express = require('express');
const items = express.Router();

items.get('/', (req,res) =>{
    res.status(200).send({message: 'Estas en items'});
});

items.get('/:itemKey', (req,res) => {
    let itemKey = req.params.itemKey;

    res.status(200).send({message: `Quieres la informacion del item con clave: ${itemKey}`});
});

module.exports = items;