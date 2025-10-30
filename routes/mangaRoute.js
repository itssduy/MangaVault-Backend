const express = require('express');

const authMiddleware = require('../middleware/auth')


const mangaController = require('../controllers/mangaController');
const mangaRoute = express();
mangaRoute.use(authMiddleware.auth);

mangaRoute.get('/home', mangaController.getAll);
mangaRoute.get('/:id', mangaController.getManga);


module.exports = mangaRoute;
