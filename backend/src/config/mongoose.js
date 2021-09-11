const mongoose =  require('mongoose');

const MONGODB_URI='mongodb://localhost:27017/edolar'
const createConnection = async () =>
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
const closeConnection = () => mongoose.connection.close();
const mongooseConnection = {
  createConnection,
  closeConnection,
}

module.exports = mongooseConnection;