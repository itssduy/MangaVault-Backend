const express = require('express');


const mangaController = require('../controllers/mangaController');
const homeRoute = express();

homeRoute.get('/all', mangaController.getAll);

homeRoute.get('/:id', mangaController.getManga);



module.exports = homeRoute;
