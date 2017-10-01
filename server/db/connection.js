"use strict";

const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://localhost:27017/gamehub";

let connection;

module.exports.getDb = () => {
    return connection;
};

module.exports.initialize = () => {
    return MongoClient.connect(uri)
        .then(db => {
            return connection = db;
        })
        .catch(reason => {
            console.error(reason);
        });
};