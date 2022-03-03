const express = require("express");

const {
  postPingCommand,
  getTopFivePings,
} = require("../controllers/pingpong/pingpong.js");

const pingpong = express
  .Router()
  .use("/pingPong", [
    express.Router().get("/pong", getTopFivePings),
    express.Router().post("/ping", postPingCommand),
  ]);

module.exports = { pingpong };
