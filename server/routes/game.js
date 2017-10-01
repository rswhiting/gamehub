"use strict";

const game = require("express").Router();

game.put("/", (req, res) => {
    console.log(req.body);
    res.sendStatus(204);
});

module.exports = game;