'use strict'

const express = require('express');
const masteries = express.Router();

masteries.get('/', (req,res) =>{
    res.status(200).send({message: 'Estas en masteries'});
});

masteries.get('/:masterieKey', (req,res) => {
    let masterieKey = req.params.masterieKey;

    res.status(200).send({message: `Quieres la informacion del masterie con clave: ${masterieKey}`});
});

module.exports = masteries;