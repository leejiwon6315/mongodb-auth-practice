const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: String,
  userid: String,
  password: String,
});
mongoose.model("User", UserSchema);
