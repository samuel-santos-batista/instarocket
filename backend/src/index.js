const express = require('express');
const mongooseConnection= require('./config/mongoose');
const path = require('path');
const cors = require('cors');

mongooseConnection.createConnection().then(() => console.log('DB!!'))
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
app.use((request, response, next) => {
  request.io = io;

  next();
});
app.use(cors())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))
app.use(require('./routes'))

server.listen(3333, () => console.log('Starting server!!'))