const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://mongo:27017/dsplits-dev');

app.use(require('./routes'))

app.listen(3333, () => console.log('Starting server!!'))