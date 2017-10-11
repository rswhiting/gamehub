"use strict";

const connection = require("../db/connection.js");
const event = require("express").Router();
const mongo = require("mongodb");
const sanitizers = require("../db/sanitizers.js");

event.get("/", (req, res) => {
    let ip = getIp(req);
    connection.getDb().collection("events")
        .find()
        .map(event => {
            event.isCreator = ip === event.creator;
            delete event.creator;
            return event;
        })
        .toArray()
        .then(eventList => {
            res.send(eventList);
        });
});

event.put("/", (req, res) => {
    let event = sanitizers.sanitizeEvent(req.body);
    event.creator = getIp(req);
    connection.getDb().collection("events")
        .insertOne(event)
        .then(() => {
            res.sendStatus(204);
        });
});

event.delete("/", (req, res) => {
    connection.getDb().collection("events")
        .deleteOne({
            _id: new mongo.ObjectId(req.query.id),
            creator: getIp(req)
        })
        .then(() => {
            res.sendStatus(204);
        });
});

function getIp(req) {
    return req.headers["x-forwarded-for"] || req.connection.remoteAddress;
}

module.exports = event;