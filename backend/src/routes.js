const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const ItemController = require('./controllers/ItemController');


const routes = express.Router();
const upload = multer(uploadConfig);
routes.post('/session', SessionController.store);
routes.post('/item', upload.single('thumbnail'), ItemController.store);


module.exports = routes;