const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const AdminController = require('./controllers/AdminController');
const ItemController = require('./controllers/ItemController');
const DashboardController = require('./controllers/DashboardController');


const routes = express.Router();
const upload = multer(uploadConfig);
routes.post('/session', AdminController.store);
routes.post('/item', upload.single('thumbnail'), ItemController.store);
routes.get('/dashboard', DashboardController.show);

module.exports = routes;