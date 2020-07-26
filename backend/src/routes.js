const express = require('express');
// const multer = require('multer');
const SessionController = require('./controllers/SessionController');
// const AdminController = require('./controllers/AdminController');

const routes = express.Router();
// routes.post('/admin', AdminController.store);
routes.get('/session', SessionController.index);

module.exports = routes;