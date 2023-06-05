const router = require("express").Router();
const passport = require("passport");
const localStrategy = require("passport-local");
const cors = require("cors");
const mongoClient = require("mongodb").MongoClient;
const Home = require("./models/home");
const Room = require("./models/room");

/*
 *  - - - - - - --  - - - - - - --
 *  - - - - GET Requests - - - - -
 *  - - - - - - - - - - - - - - --
 */
router.get("/api/", (req, res) => {});
router.get("/api/homes/", (req, res) => {
  Home.find({}, (err, homes) => {
    if (err) {
      res.status(500).send("Error getting homes");
      console.log(err);
    } else {
      res.status(200).send(homes);
    }
  });
});
router.get("/api/home/:homeId", (req, res) => {
  const homeId = req.params.homeId;
  Home.findOne({ homeId: homeId })
    .then((home) => {
      res.status(200).send(home);
    })
    .catch((err) => {
      if (err) {
        res.status(500).send("The rooms was not found");
      }
    });
});
router.get("/api/rooms/", (req, res) => {
  Room.find({}, (err, rooms) => {
    if (err) {
      res.status(500).send("Error getting rooms");
      console.log(err);
    } else {
      res.status(200).send(rooms);
    }
  });
});
router.get("/api/room/:roomId", (req, res) => {
  const roomId = req.params.roomId;
  Room.findOne({ roomId: roomId })
    .then((room) => {
      res.status(200).send(room);
    })
    .catch((err) => {
      res.status(500).send("There was an error finding the room");
      console.log(err);
    });
});

/*
 *  - - - - - - --  - - - - - - --
 *  - - - - POST Requests - - - - -
 *  - - - - - - - - - - - - - - --
 */
router.post("/api/home/", (req, res) => {
  const { name, homeID, location } = req.body;
  const home = new Home({
    name: name,
    homeID: homeID,
    location: location,
  });
  home.save((err, home) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Home created successfully");
    }
  });
});
router.post("/api/room/", (req, res) => {
  const { roomNumber, homeID, type } = req.body;
  const room = new Room({
    roomNumber: roomNumber,
    homeID: homeID,
    type: type,
  });
  room.save((err, room) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Room saved successfully");
    }
  });
});
router.post("/api/login/", (req, res) => {});
router.post("/api/logout/", (req, res) => {});
