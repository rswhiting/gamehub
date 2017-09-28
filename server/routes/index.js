"use strict";

const routes = require("express").Router();
const event = require("./event.js");
const game = require("./game.js");

routes.use("/event", event);
routes.use("/game", game);

module.exports = routes;