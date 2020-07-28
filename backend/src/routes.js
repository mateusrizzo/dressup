const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const ItemController = require('./controllers/ItemController');
const DashboardController = require('./controllers/DashboardController');


const routes = express.Router();
const upload = multer(uploadConfig);
routes.post('/session', SessionController.store);
routes.post('/item', upload.single('thumbnail'), ItemController.store);
routes.get('/dashboard', DashboardController.show);

module.exports = routes;