"use strict";

const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://localhost:27017/gamehub";

module.exports.run = query => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(uri, (error, db) => {
            if (error) {
                reject(error);
            }

            query(db).then(value => {
                db.close();
                resolve(value);
            }).catch(reason => {
                reject(reason);
            });
        });
    });
};