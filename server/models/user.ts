require("donenv").config();
const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");
const DB_STRING = process.env.DB_STRING;

// Create the Schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    
})

// Create the Model
// Export