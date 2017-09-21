"use strict";

const queryRunner = require("./query-runner.js");

queryRunner.run(db => {
    let usernameIndexPromise = db.collection("users").createIndex(
        {
            username: 1
        },
        {
            unique: true
        });

    let emailIndexPromise = db.collection("users").createIndex(
        {
            email: 1
        },
        {
            unique: true
        });

    return Promise.all([usernameIndexPromise, emailIndexPromise]);
});