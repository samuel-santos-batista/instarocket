const express = require('express');
const mongooseConnection= require('./config/mongoose');

mongooseConnection.createConnection().then(() => console.log('DB!!'))
const app = express();

app.use(require('./routes'))

app.listen(3333, () => console.log('Starting server!!'))