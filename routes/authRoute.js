const express = require('express');


const authRoute = express();


authRoute.get('/signup', (req, res)=>{
    console.log("signup");
    res.render('auth/signup');
})
authRoute.post('/signup', (req, res)=>{
    console.log("signup");
})


authRoute.get('/login', (req, res)=>{
    console.log("login");
    res.render('auth/login');

})
authRoute.post('/login', (req, res)=>{
    console.log("login");

})

module.exports = authRoute;