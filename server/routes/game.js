"use strict";

const game = require("express").Router();
const queryRunner = require("../db/query-runner.js");

game.put("/", (req, res) => {
    console.log(req.body);
    res.sendStatus(204);
});

module.exports = game;