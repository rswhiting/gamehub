"use strict";

const event = require("express").Router();
const queryRunner = require("../db/query-runner.js");
const sanitizers = require("../db/sanitizers.js");

event.get("/", (req, res) => {
    queryRunner.run(db => db.collection("events").find({}))
        .then(result => {
            console.log(result.toArray());
        });
});

event.put("/", (req, res) => {
    let event = sanitizers.sanitizeEvent(req.body);
    queryRunner.run(db => db.collection("events").insertOne(event))
        .then(() => {
            res.sendStatus(204);
        });
});

module.exports = event;