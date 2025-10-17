const express = require('express');

const query = require('../models/queries');
const { parse } = require('dotenv');

const authRoute = express();


authRoute.get('/signup', (req, res)=>{
    console.log("signup");
    res.send('auth/signup');
})
authRoute.post('/signup', (req, res)=>{
    console.log("signup");
    
    const { username, password} = req.body;
    query.createUser(username, password)
    res.send('/auth/signup');

})


authRoute.post('/login', async (req, res)=>{
    const {username, password} = req.body

    const test = await query.loginUser(username, password);
    res.send('/auth/login');
    

})

authRoute.get('/login', (req, res)=>{
    console.log("login");

})

module.exports = authRoute;