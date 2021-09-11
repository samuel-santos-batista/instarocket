const express = require('express');
const PostController = require('./controllers/PostController');

const routes = new express.Router();

routes.get('/', PostController.index);

module.exports = routes;