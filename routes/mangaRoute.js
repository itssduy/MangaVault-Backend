const express = require('express');

const authMiddleware = require('../middleware/auth')


const mangaController = require('../controllers/mangaController');
const mangaRoute = express();
mangaRoute.use(authMiddleware.auth);

mangaRoute.get('/home', mangaController.getAll);
mangaRoute.get('/add', mangaController.getaddManga);
mangaRoute.post('/add', mangaController.postaddManga);
mangaRoute.get('/get/:id', mangaController.getManga);
mangaRoute.post('/delete/:id', mangaController.deleteManga);
mangaRoute.get('/edit/:id', mangaController.geteditManga);
mangaRoute.post('/edit/:id', mangaController.posteditManga);

module.exports = mangaRoute;
