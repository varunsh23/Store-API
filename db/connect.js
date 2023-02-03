const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((e) => console.log("Connected to Db..."))
    .catch((e) => console.log(e));
};

module.exports = connectDB;
