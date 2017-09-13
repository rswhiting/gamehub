"use strict";

const routes = require("express").Router();

const login = require("./login.js");

routes.get("/", (req, res) => {
    res.redirect("/login");
});

routes.use("/login", login);

module.exports = routes;