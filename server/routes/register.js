"use strict";

const register = require("express").Router();

register.post("/", (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

module.exports = register;