const express = require('express');


const mangaController = require('../controllers/mangaController');
const homeRoute = express();
const query = require('../models/queries');

homeRoute.get('/all', mangaController.getAll);


homeRoute.get('/:id', mangaController.getManga);



module.exports = homeRoute;
