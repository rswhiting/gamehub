"use strict";

const login = require("express").Router();

login.get("/", (req, res) => {
    res.render("login");
});

module.exports = login;