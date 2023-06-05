require("dotenv").config();
const express = require("express");
const session = require("express-session");
const LocalStrategy = require("passport-local");

// Initialize Express
const app = express();

// Initialize session middleware
app.use(
  session({
    secret: process.env.session_secret,
    resave: true,
    saveUninitialized: true,
  })
);

// Initialize Passport
app.use(passport.initialize());

// Define the local strategy for passport
const localStrategy = new LocalStrategy({
  usernameFiend: "username",
  passwordField: "password",
});

app.listen(3000, (err) => {
  if (!err) {
    console.log("Express server listening on port 3000");
  } else {
    console.log("There was a problem starting the server: " + err.message);
  }
});
