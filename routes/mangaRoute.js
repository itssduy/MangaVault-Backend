const express = require('express');


const homeRoute = express();

homeRoute.get('/home', (req, res)=>{
    console.log('test');
    res.render('home')
})


homeRoute.get('/:id', (req, res)=>{
    console.log('manga')
    res.render('manga')
})



module.exports = homeRoute;
