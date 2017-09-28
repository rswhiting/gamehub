"use strict";

const routes = require("express").Router();
const game = require("./game.js");

routes.use("/game", game);

module.exports = routes;