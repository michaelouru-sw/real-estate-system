const mongoose = require("mongoose");

// Define the schema for the room model.
const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true,
  },
  homeID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

// Create the room model.
const Room = mongoose.model("Room", roomSchema);

// // Create a new room.
// const room = new Room({
//   roomNumber: "101",
//   homeID: "567890",
//   type: "Bedroom",
// });

// // Save the room to the database.
// room.save((err, room) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Room created successfully!");
//   }
// });

// Export the Model
module.exports = Room;
