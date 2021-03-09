const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: { type: String, maxlength: 50 },
  userId: { type: String, maxlength: 50, unique: 1 },
  password: { type: String, maxlength: 50 },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = { User };
