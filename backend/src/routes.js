const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const AdminController = require('./controllers/AdminController');
const ItemController = require('./controllers/ItemController');
const DashboardController = require('./controllers/DashboardController');
const BuyerController = require('./controllers/BuyerController');
const CartController = require('./controllers/CartController');


const routes = express.Router();
const upload = multer(uploadConfig);
routes.post('/admin', AdminController.store);
routes.get('/admin', AdminController.show);
routes.post('/user', BuyerController.store);
routes.get('/user', BuyerController.show);
routes.post('/cart', CartController.store);
routes.post('/item', upload.single('thumbnail'), ItemController.store);
routes.get('/dashboard', DashboardController.show);

module.exports = routes;