"use strict";

const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://localhost:27017/gamehub";

module.exports.run = query => {
    return MongoClient.connect(uri)
        .then(db => {
            return query(db);
        })
        .catch(reason => {
            console.error(reason);
        });
}