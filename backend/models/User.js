const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: Number,
  gender: String,
  skills: [String],
  country: String,
  languages: [String],
  dob: String,
  about: String,

  fileMeta: {
    type: Object,  
    default: null,
  },
},
{ timestamps: true });

delete mongoose.models.User;

module.exports = mongoose.model("User", UserSchema);