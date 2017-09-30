"use strict";

const event = require("express").Router();
const queryRunner = require("../db/query-runner.js");
const sanitizers = require("../db/sanitizers.js");

event.get("/", (req, res) => {
    res.send(events);
});

event.put("/", (req, res) => {
    let event = sanitizers.sanitizeEvent(req.body);
    queryRunner.run(db => db.collection("events").insertOne(event));
    res.sendStatus(204);
});

module.exports = event;