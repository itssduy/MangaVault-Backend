const express = require('express');


const homeRoute = express();

homeRoute.get('/home', (req, res)=>{
    console.log('test');
    res.send('home')
})


homeRoute.get('/:id', (req, res)=>{
    console.log('manga')
    res.send('manga')
})



module.exports = homeRoute;
