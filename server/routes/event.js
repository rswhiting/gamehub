"use strict";

const connection = require("../db/connection.js");
const event = require("express").Router();
const sanitizers = require("../db/sanitizers.js");

event.get("/", (req, res) => {
    connection.getDb().collection("events").find({}).toArray()
        .then(result => {
            res.send(result);
        });
});

event.put("/", (req, res) => {
    let event = sanitizers.sanitizeEvent(req.body);
    connection.getDb().collection("events").insertOne(event)
        .then(() => {
            res.sendStatus(204);
        });
});

module.exports = event;