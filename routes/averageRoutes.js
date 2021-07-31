const express = require('express');
const routes = express.Router();

const averageController = require('../controller/averageController')

routes.get('/', averageController.average)

module.exports = routes