const express = require('express');


const homeRoute = express();
const query = require('../models/queries');

homeRoute.get('/home', async (req, res)=>{
    res.json(await query.getAllUsers());
})


homeRoute.get('/:id', (req, res)=>{
    console.log('manga')
    res.send('/manga')
})



module.exports = homeRoute;
