const express = require('express');
// const multer = require('multer');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/session', SessionController.index);

module.exports = routes;