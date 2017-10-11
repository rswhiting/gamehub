"use strict";

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const connection = require("./db/connection.js");
const routes = require("./routes");

connection.initialize();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://gamehub-rswhiting.c9users.io");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "content-type");

    next();
});

app.use(bodyParser.json());
app.use("/", routes);

app.listen(8081, () => {
    console.log("Listening at https://0.0.0.0:8081");
});