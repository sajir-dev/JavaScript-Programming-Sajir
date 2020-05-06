const config = require("./config");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
mongoose.Promise = bluebird;
mongoose.connect(config.MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

module.exports = { mongoose };
