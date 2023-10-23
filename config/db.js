const { CURSOR_FLAGS } = require('mongodb');
const mongoose = require('mongoose');
require("dotenv").config({path: '../.env'})

const connDB = async() => {
try {
    await mongoose.connect(process.env.URI_MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('connected successfuly')
  } catch (error) {
    handleError(error);
  }
}

module.exports = connDB;