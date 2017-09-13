"use strict";

const express = require("express");
const app = express();

const minify = require("express-minify");
const routes = require("./routes");

app.set("views", "./views");
app.set("view engine", "pug");

app.use("/", routes);

app.use(minify({
    onerror: (error) => { console.error(error); }
}));

app.use(express.static(__dirname + "/assets"));

app.listen(8080, () => {
    console.log("Listening at http://localhost:8080");
});