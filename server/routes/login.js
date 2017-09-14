"use strict";

const login = require("express").Router();

login.post("/", (req, res) => {
    console.log(req);
    res.send(200);
});

module.exports = login;