"use strict";

const register = require("express").Router();

register.post("/", (req, res) => {
    console.log(req);
    res.send(200);
});

module.exports = register;