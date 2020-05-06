const { mongoose } = require("@configs/database");
const { Schema } = mongoose;

let User = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, index: true }
});

User = mongoose.model("User", User, "users");

// create user , also add to room if user is participant
const createUser = async payload => {};

module.exports = {
  createUser
};
