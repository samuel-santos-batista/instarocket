const express = require('express');
const mongooseConnection= require('./config/mongoose');
const path = require('path');

mongooseConnection.createConnection().then(() => console.log('DB!!'))
const app = express();

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))
app.use(require('./routes'))

app.listen(3333, () => console.log('Starting server!!'))