"use strict";

const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://localhost:27017/mwng";

module.exports.run = query => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(uri, (error, db) => {
            if (error) {
                reject(error);
            }

            query(db).then(() => {
                db.close();
                resolve();
            }).catch(reason => {
                reject(reason);
            });
        });
    });
};