const router = require("express").Router();
const passport = require("passport");
const localStrategy = require("passport-local");
const cors = require("cors");
const mongoClient = require("mongodb").MongoClient;

/*
 *  - - - - - - --  - - - - - - --
 *  - - - - GET Requests - - - - -
 *  - - - - - - - - - - - - - - --
 */
router.get("/api/", (req, res) => {

});
router.get("/api/homes/", (req, res) => {
    
});
router.get("/api/rooms/", (req, res) => {

});

/*
 *  - - - - - - --  - - - - - - --
 *  - - - - POST Requests - - - - -
 *  - - - - - - - - - - - - - - --
 */
router.post("/api/home/", (req, res) => {

});
router.post("/api/room/", (req, res) => {

});
router.post("/api/login/", (req, res) => {

});
router.post("/api/logout/", (req, res) => {
    
})