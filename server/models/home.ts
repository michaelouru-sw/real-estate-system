import { mongoose } from "mongoose";

// Define the schema for the home model.
const homeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  homeID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

// Create the home model.
const Home = mongoose.model("Home", homeSchema);

// // Create a new home.
// const home = new Home({
//   name: "My Home",
//   homeID: "123456",
//   location: "San Francisco, CA",
// });

// // Save the home to the database.
// home.save((err, home) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Home created successfully!");
//   }
// });

// Export the Home
module.exports = Home;
