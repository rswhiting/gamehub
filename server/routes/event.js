"use strict";

const event = require("express").Router();
const queryRunner = require("../db/query-runner.js");

let events = [];

event.get("/", (req, res) => {
    res.send(events);
});

event.put("/", (req, res) => {
    events.push(req.body);
    res.sendStatus(204);
});

module.exports = event;