const express = require('express');


const mangaController = require('../controllers/mangaController');
const mangaRoute = express();


mangaRoute.get('/:id', mangaController.getManga);


module.exports = mangaRoute;
