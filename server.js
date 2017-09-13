"use strict";

const express = require("express");
const app = express();

const routes = require("./routes");

app.set("views", "./views");
app.set("view engine", "pug");

app.use("/", routes);

app.listen(8080, () => {
    console.log("Listening at http://localhost:8080");
});