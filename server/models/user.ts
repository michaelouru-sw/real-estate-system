require("donenv").config();
const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");
const DB_STRING = process.env.DB_STRING;
import { findOrCreate } from "mongoose-findorcreate";

// Define the schema for the user model.
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

// Create the user model.
const User = mongoose.model("User", userSchema);

// Add the findOrCreate plugin to the User model.
User.plugin(findOrCreate);

// Create a new user.
// const user = new User({
//   username: "johndoe",
//   password: "password123",
//   location: "San Francisco, CA",
// });

// // Save the user to the database.
// user.save((err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("User created successfully!");
//   }
// });
module.exports = User;
