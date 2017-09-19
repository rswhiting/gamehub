"use strict";

const routes = require("express").Router();

const login = require("./login.js");
const register = require("./register.js");

routes.get("/", (req, res) => {
    res.redirect("/login");
});

routes.use("/login", login);
routes.use("/register", register);

module.exports = routes;