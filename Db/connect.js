const mongoose = require("mongoose");

const connectDB = async (url) => {
  mongoose.connect(url);
  console.log("database");
};

module.exports = connectDB;
