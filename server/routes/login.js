"use strict";

const login = require("express").Router();

login.post("/", (req, res) => {
    let usernameOrEmail = req.body.usernameOrEmail;
    let password = req.body.password;
    res.send(200);
});

module.exports = login;