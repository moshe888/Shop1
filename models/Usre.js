const mongoose = require("mongoose");

const UserSchma = new mongoose.Schema({
     //creating scahma
     email: {
          type: String,
          required: true,
     },
     password: {
          type: String,
          required: true,
     },
});
const User = mongoose.model("Users", UserSchma); // creating model for schama
module.exports = User;
