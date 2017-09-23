"use strict";

const crypto = require("crypto");
const queryRunner = require("../db/query-runner.js");
const register = require("express").Router();

register.post("/", (req, res) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    let salt = crypto.randomBytes(16).toString("hex");
    let passwordHash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha1")
        .toString("hex");

    queryRunner.run(db => {
        return db.collection("users").insertOne({
            username: username,
            email: email,
            passwordHash: passwordHash,
            salt: salt
        });
    }).then(() => {
        res.status(200).send({});
    }).catch(reason => {
        console.error(reason);
        res.status(500).send("Registration failed! This username or email address might be taken.");
    });
});

module.exports = register;