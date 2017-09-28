"use strict";

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const routes = require("./routes");
require("./db/create-indexes.js");

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
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

app.listen(8080, () => {
    console.log("Listening at http://localhost:8080");
});